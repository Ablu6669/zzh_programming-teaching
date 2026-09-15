// aiChat.js — 侧边悬浮 AI 助教对话框（可折叠）
// 双模式：免费在线接口（默认，无需 Key）/ 访客自带 Key（OpenAI 兼容接口）
// 上下文感知：自动注入当前语言 / 知识点 / 练习题目
import { t, pick, getLang } from '../i18n.js';
import { on } from '../store.js';
import { getLangDef, getTopic, getExercise } from '../content.js';
import { renderMarkdown } from '../mdrender.js';

const CHAT_KEY = 'plw:ai-chat';
const SETTINGS_KEY = 'plw:ai-settings';
const MAX_SAVED = 40;       // 本地持久化消息上限
const MAX_API_MESSAGES = 12; // 每次请求携带的历史消息上限

// OpenAI chat-completions 兼容端点。free 为 pollinations 开放端点（无需 Key）。
// hunyuan 为腾讯云混元（hunyuan-lite 模型永久免费）。
const PROVIDERS = {
  free:     { baseURL: 'https://text.pollinations.ai/openai', model: 'openai', needKey: false },
  hunyuan:  { baseURL: 'https://api.hunyuan.cloud.tencent.com/v1', model: 'hunyuan-lite', needKey: true },
  deepseek: { baseURL: 'https://api.deepseek.com', model: 'deepseek-chat', needKey: true },
  openai:   { baseURL: 'https://api.openai.com/v1', model: 'gpt-4o-mini', needKey: true },
  custom:   { baseURL: '', model: '', needKey: true },
};

let el = null;          // 根 DOM（含悬浮球 + 面板）
let open = false;
let busy = false;
let clearArmed = null;  // 两段式清空确认的定时器
// 持久化数据可能被篡改/损坏（非数组时 .map 会崩），加载时校验结构
let messages = (() => { const m = loadJSON(CHAT_KEY, []); return Array.isArray(m) ? m : []; })();

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) { return fallback; }
}
function saveJSON(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* ignore */ }
}

function loadSettings() {
  const s = loadJSON(SETTINGS_KEY, {});
  return {
    provider: PROVIDERS[s.provider] ? s.provider : 'free',
    key: typeof s.key === 'string' ? s.key : '',
    model: typeof s.model === 'string' ? s.model : '',
    baseURL: typeof s.baseURL === 'string' ? s.baseURL : '',
  };
}

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// ---- 上下文：从 hash 解析当前 语言/知识点/练习 ----
function currentContext() {
  const m = location.hash.replace(/^#/, '').match(/^\/lang\/([^/]+)(?:\/topic\/([^/]+))?(?:\/ex\/([^/]+))?/);
  if (!m) return { def: null, topic: null, ex: null };
  const def = getLangDef(m[1]);
  if (!def) return { def: null, topic: null, ex: null };
  const topic = m[2] ? getTopic(m[1], m[2]) : null;
  const ex = (m[3] && topic) ? getExercise(m[1], m[2], m[3]) : null;
  return { def, topic, ex };
}

function ctxLabel() {
  const { def, topic } = currentContext();
  if (!def) return '';
  return topic ? def.name + ' · ' + pick(topic.title) : def.name;
}

// ---- 系统提示（随界面语言 + 当前页面动态构建）----
function buildSystemPrompt() {
  const ui = getLang();
  const { def, topic, ex } = currentContext();
  const lines = [];
  if (ui === 'en') {
    lines.push('You are the AI tutor of "Polyglot Lab", a beginner-friendly coding site. The user is a total beginner.');
    if (def) {
      lines.push('The user is currently learning: ' + def.name);
      if (topic) {
        lines.push('Current lesson: ' + pick(topic.title));
        if (ex) {
          lines.push('Current exercise: ' + pick(ex.title));
          lines.push('Task: ' + pick(ex.prompt));
          lines.push('Starter code:\n```\n' + ex.starter + '\n```');
          if (ex.expectedOutput !== undefined) lines.push('Expected output:\n' + ex.expectedOutput);
        }
      }
    }
    lines.push('How to answer:');
    lines.push('- Reply in English; keep it short, friendly and beginner-oriented.');
    lines.push('- Prefer everyday analogies and tiny code snippets over jargon.');
    lines.push('- Teach by guidance: give hints and direction first, never hand out the full solution unless the user explicitly asks for a reference answer.');
    lines.push('- Put code in fenced markdown blocks with the language tag. Keep answers concise.');
  } else {
    lines.push('你是「编程语言学习工作台」的 AI 助教。用户是零基础编程小白。');
    if (def) {
      lines.push('用户当前正在学习：' + def.name);
      if (topic) {
        lines.push('当前知识点：' + pick(topic.title));
        if (ex) {
          lines.push('当前练习：' + pick(ex.title));
          lines.push('题目要求：' + pick(ex.prompt));
          lines.push('起始代码：\n```\n' + ex.starter + '\n```');
          if (ex.expectedOutput !== undefined) lines.push('期望输出：\n' + ex.expectedOutput);
        }
      }
    }
    lines.push('回答要求：');
    lines.push('- 用简体中文回答，简明友好，面向零基础读者。');
    lines.push('- 多用生活类比和简短代码示例，避免术语堆砌。');
    lines.push('- 引导式教学：优先给思路和提示，不主动给完整答案；仅当用户明确要求参考答案时才给出。');
    lines.push('- 代码放在标注语言的 markdown 代码块里，回答保持简短。');
  }
  return lines.join('\n');
}

// ---- API 调用（统一 OpenAI chat 格式）----
async function callAPI(apiMessages) {
  const s = loadSettings();
  const p = PROVIDERS[s.provider];
  const url = s.provider === 'free'
    ? p.baseURL
    : (s.baseURL || p.baseURL).replace(/\/+$/, '') + '/chat/completions';

  const headers = { 'Content-Type': 'application/json' };
  if (p.needKey) {
    if (!s.key) { const e = new Error('noKey'); e.code = 'noKey'; throw e; }
    headers['Authorization'] = 'Bearer ' + s.key;
  }
  const body = {
    model: s.model || p.model || 'openai',
    messages: apiMessages,
    stream: false,
  };

  let res;
  try {
    res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) });
  } catch (e) { const err = new Error('network'); err.code = 'network'; throw err; }
  if (!res.ok) { const err = new Error('http'); err.code = 'http'; err.status = res.status; throw err; }

  const data = await res.json();
  const content = data && data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content;
  if (!content) { const err = new Error('empty'); err.code = 'empty'; throw err; }
  // 免费端点会把额度/限流错误包在 HTTP 200 的正常 content 里返回，需识别为错误
  if (/reached its budget|rate limit exceeded|quota exceeded/i.test(content)) {
    const err = new Error('quota'); err.code = 'quota'; throw err;
  }
  return String(content);
}

// ---- DOM ----
function buildDOM() {
  const root = document.createElement('div');
  root.className = 'ai-root';
  root.innerHTML = `
    <button class="ai-fab" aria-label="${t('ai.title')}">🤖</button>
    <div class="ai-panel" hidden>
      <div class="ai-head">
        <span class="ai-badge">🤖 ${t('ai.title')}</span>
        <span class="ai-ctx"></span>
        <span class="ai-head-btns">
          <button class="ai-icon-btn ai-settings-btn" title="${t('ai.settings')}">⚙</button>
          <button class="ai-icon-btn ai-clear-btn" title="${t('ai.clear')}">🗑</button>
          <button class="ai-icon-btn ai-close-btn" title="${t('ai.close')}">✕</button>
        </span>
      </div>
      <div class="ai-settings" hidden>
        <label class="ai-field"><span>${t('ai.provider')}</span>
          <select class="ai-provider">
            <option value="free">${t('ai.providerFree')}</option>
            <option value="hunyuan">${t('ai.providerHunyuan')}</option>
            <option value="deepseek">DeepSeek</option>
            <option value="openai">OpenAI</option>
            <option value="custom">${t('ai.providerCustom')}</option>
          </select>
        </label>
        <label class="ai-field ai-key-field"><span>${t('ai.apiKey')}</span>
          <input class="ai-key" type="password" autocomplete="off" placeholder="sk-...">
        </label>
        <label class="ai-field ai-base-field" hidden><span>${t('ai.baseURL')}</span>
          <input class="ai-base" type="text" placeholder="https://api.example.com/v1">
        </label>
        <label class="ai-field ai-model-field"><span>${t('ai.model')}</span>
          <input class="ai-model" type="text">
        </label>
        <div class="ai-settings-foot">
          <span class="ai-note">${t('ai.keyLocal')}</span>
          <button class="ai-save">${t('ai.save')}</button>
        </div>
        <details class="ai-help">
          <summary>❓ ${t('ai.helpTitle')}</summary>
          <div class="ai-help-body">${renderMarkdown(t('ai.helpBody'))}</div>
        </details>
      </div>
      <div class="ai-msgs"></div>
      <div class="ai-input-row">
        <textarea class="ai-input" rows="1" placeholder="${t('ai.placeholder')}"></textarea>
        <button class="ai-send" title="${t('ai.send')}">➤</button>
      </div>
    </div>
  `;
  document.body.appendChild(root);
  return root;
}

function $ai(sel) { return el.querySelector(sel); }

// ---- 渲染 ----
function renderMsgs() {
  const box = $ai('.ai-msgs');
  if (!messages.length) {
    box.innerHTML = `<div class="ai-welcome">${renderMarkdown(t('ai.welcome'))}</div>`;
    return;
  }
  box.innerHTML = messages.map((m) => `
    <div class="ai-msg ${m.role === 'user' ? 'ai-user' : 'ai-ai'}">
      <div class="ai-bubble">${m.role === 'user' ? escapeHtml(m.content).replace(/\n/g, '<br>') : renderMarkdown(m.content)}</div>
    </div>
  `).join('');
  box.scrollTop = box.scrollHeight;
}

function showTyping() {
  const box = $ai('.ai-msgs');
  const tip = document.createElement('div');
  tip.className = 'ai-msg ai-ai ai-typing';
  tip.innerHTML = `<div class="ai-bubble"><span class="ai-dot"></span><span class="ai-dot"></span><span class="ai-dot"></span> ${t('ai.typing')}</div>`;
  box.appendChild(tip);
  box.scrollTop = box.scrollHeight;
}
function hideTyping() { const n = $ai('.ai-typing'); if (n) n.remove(); }

function renderErr(err) {
  const box = $ai('.ai-msgs');
  let msg;
  if (err.code === 'noKey') msg = t('ai.noKey');
  else if (err.code === 'quota') msg = t('ai.errQuota');
  else if (err.code === 'http') msg = t('ai.errHttp', { code: err.status });
  else if (err.code === 'empty') msg = t('ai.errEmpty');
  else msg = t('ai.errNetwork');
  const tip = document.createElement('div');
  tip.className = 'ai-msg ai-err';
  tip.innerHTML = `<div class="ai-bubble">⚠ ${escapeHtml(msg)}</div>`;
  box.appendChild(tip);
  box.scrollTop = box.scrollHeight;
}

function renderStatic() {
  $ai('.ai-badge').innerHTML = '🤖 ' + t('ai.title');
  $ai('.ai-settings-btn').title = t('ai.settings');
  $ai('.ai-clear-btn').title = t('ai.clear');
  $ai('.ai-close-btn').title = t('ai.close');
  $ai('.ai-ctx').textContent = ctxLabel();
  $ai('.ai-input').placeholder = t('ai.placeholder');
  $ai('.ai-send').title = t('ai.send');
  // 设置区
  $ai('.ai-provider').parentElement.querySelector('span').textContent = t('ai.provider');
  $ai('.ai-key-field span').textContent = t('ai.apiKey');
  $ai('.ai-base-field span').textContent = t('ai.baseURL');
  $ai('.ai-model-field span').textContent = t('ai.model');
  $ai('.ai-note').textContent = t('ai.keyLocal');
  $ai('.ai-save').textContent = t('ai.save');
}

function renderSettings() {
  const s = loadSettings();
  $ai('.ai-provider').value = s.provider;
  $ai('.ai-key').value = s.key;
  $ai('.ai-base').value = s.baseURL;
  $ai('.ai-model').value = s.model || PROVIDERS[s.provider].model || '';
  syncSettingsVisibility();
}
function syncSettingsVisibility() {
  const prov = $ai('.ai-provider').value;
  const needKey = PROVIDERS[prov].needKey;
  $ai('.ai-key-field').hidden = !needKey;
  $ai('.ai-base-field').hidden = prov !== 'custom';
  if (PROVIDERS[prov].model && !$ai('.ai-model').value) $ai('.ai-model').value = PROVIDERS[prov].model;
}

// ---- 交互 ----
function setOpen(v) {
  open = v;
  $ai('.ai-panel').hidden = !v;
  $ai('.ai-fab').classList.toggle('ai-fab-open', v);
  if (v) {
    renderStatic();
    renderMsgs();
    setTimeout(() => $ai('.ai-input').focus(), 50);
  }
}

async function send() {
  const input = $ai('.ai-input');
  const text = input.value.trim();
  if (!text || busy) return;
  input.value = '';
  resizeInput();

  messages.push({ role: 'user', content: text });
  renderMsgs();

  busy = true;
  $ai('.ai-send').disabled = true;
  showTyping();
  try {
    // system + 最近历史（截断防 token 爆炸）
    const apiMessages = [
      { role: 'system', content: buildSystemPrompt() },
      ...messages.slice(-MAX_API_MESSAGES),
    ];
    const reply = await callAPI(apiMessages);
    messages.push({ role: 'assistant', content: reply });
    if (messages.length > MAX_SAVED) messages = messages.slice(-MAX_SAVED);
    saveJSON(CHAT_KEY, messages);
    hideTyping();
    renderMsgs();
  } catch (e) {
    hideTyping();
    renderErr(e);
  } finally {
    busy = false;
    $ai('.ai-send').disabled = false;
  }
}

function resizeInput() {
  const input = $ai('.ai-input');
  input.style.height = 'auto';
  input.style.height = Math.min(input.scrollHeight, 120) + 'px';
}

function clearChat() {
  const btn = $ai('.ai-clear-btn');
  if (!btn.classList.contains('ai-armed')) {
    btn.classList.add('ai-armed');
    btn.textContent = '❓';
    clearArmed = setTimeout(() => { btn.classList.remove('ai-armed'); btn.textContent = '🗑'; }, 3000);
    return;
  }
  clearTimeout(clearArmed);
  btn.classList.remove('ai-armed');
  btn.textContent = '🗑';
  messages = [];
  saveJSON(CHAT_KEY, messages);
  renderMsgs();
}

function saveSettings() {
  const s = {
    provider: $ai('.ai-provider').value,
    key: $ai('.ai-key').value.trim(),
    baseURL: $ai('.ai-base').value.trim(),
    model: $ai('.ai-model').value.trim(),
  };
  saveJSON(SETTINGS_KEY, s);
  const note = $ai('.ai-note');
  // 安全提示：custom 填 http://（非本机）意味着 Bearer Key 明文传输
  const insecureHttp = s.provider === 'custom'
    && /^http:\/\//i.test(s.baseURL)
    && !/^http:\/\/(localhost|127\.0\.0\.1|\[::1\])(:|\/|$)/i.test(s.baseURL);
  note.textContent = insecureHttp ? t('ai.warnHttp') : t('ai.saved');
  setTimeout(() => { note.textContent = t('ai.keyLocal'); }, 2500);
}

function bindEvents() {
  $ai('.ai-fab').addEventListener('click', () => setOpen(!open));
  $ai('.ai-close-btn').addEventListener('click', () => setOpen(false));
  $ai('.ai-clear-btn').addEventListener('click', clearChat);
  $ai('.ai-settings-btn').addEventListener('click', () => {
    const box = $ai('.ai-settings');
    const show = box.hidden;
    box.hidden = !show;
    if (show) renderSettings();
  });
  $ai('.ai-provider').addEventListener('change', () => {
    // 切换服务商：显隐字段并把模型重置为该家默认；
    // 同时清空 Key 输入框——各家 Key 不通用，残留会导致 A 家 Key 被误发给 B 家
    const prov = $ai('.ai-provider').value;
    $ai('.ai-key-field').hidden = !PROVIDERS[prov].needKey;
    $ai('.ai-base-field').hidden = prov !== 'custom';
    if (PROVIDERS[prov].model) $ai('.ai-model').value = PROVIDERS[prov].model;
    $ai('.ai-key').value = '';
  });
  $ai('.ai-save').addEventListener('click', saveSettings);
  $ai('.ai-send').addEventListener('click', send);
  const input = $ai('.ai-input');
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
  });
  input.addEventListener('input', resizeInput);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) setOpen(false); });
}

// ---- 入口 ----
export function createAiChat() {
  if (el) return; // 已初始化
  el = buildDOM();
  bindEvents();
  renderStatic();
  renderMsgs();
  // 语言切换 / 路由切换 → 刷新静态文案与上下文标签
  on('lang:change', () => { renderStatic(); if (open) renderMsgs(); });
  on('route:change', () => { if (open) $ai('.ai-ctx').textContent = ctxLabel(); });
}
