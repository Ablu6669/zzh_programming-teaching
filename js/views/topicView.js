// topicView.js — 知识点详情：讲解 tab + 实战 tab + 演练场 tab
import { t, pick } from '../i18n.js';
import { renderMarkdown } from '../mdrender.js';
import { getLangDef, getTopic } from '../content.js';
import { progressGet, progressSet, draftGet } from '../progress.js';
import { createWorkspace } from '../components/workspace.js';

let cleanups = []; // 当前页面挂载的工作区，语言切换/路由切换时销毁

export function destroyTopicView() {
  cleanups.forEach((fn) => { try { fn(); } catch (e) { /* ignore */ } });
  cleanups = [];
}

export function renderTopic(app, langId, topicId, exId) {
  destroyTopicView();
  const def = getLangDef(langId);
  const topic = getTopic(langId, topicId);
  if (!def || !topic) {
    app.innerHTML = `<div class="empty-state">404</div>`;
    return;
  }

  const passedCount = topic.exercises.filter((ex) => progressGet(langId, topicId, ex.id)).length;
  const wsList = []; // 本页所有工作区，tab 由隐藏变可见后统一 refresh（修复 CodeMirror 布局重叠）
  const stars = '★'.repeat(topic.difficulty || 1);
  const idx = def.topics.findIndex((tp) => tp.id === topicId);
  const prev = idx > 0 ? def.topics[idx - 1] : null;
  const next = idx < def.topics.length - 1 ? def.topics[idx + 1] : null;

  app.innerHTML = `
    <div class="crumb">
      <a href="#/">${t('nav.home')}</a> ›
      <a href="#/lang/${langId}">${def.name}</a> ›
      ${pick(topic.title)}
    </div>
    <div class="roadmap-head">
      <div>
        <h1 class="page-title">${pick(topic.title)}</h1>
        <p class="page-sub">🎯 ${passedCount}/${topic.exercises.length} ${t('roadmap.exercisesUnit')} &nbsp;·&nbsp; <span class="tr-stars">${stars}</span></p>
      </div>
    </div>
    <div class="topic-tabs">
      <button class="tab-btn tab-lecture active" data-tab="lecture">📖 ${t('topic.tabLecture')}</button>
      <button class="tab-btn tab-exercise" data-tab="exercise">🎯 ${t('topic.tabExercise')}</button>
      <button class="tab-btn tab-playground" data-tab="playground">🧪 ${t('topic.tabPlayground')}</button>
    </div>
    <div class="tab-panel" data-panel="lecture">
      <div class="lecture">${renderMarkdown(pick(topic.lecture))}</div>
      ${topic.examples && topic.examples.length ? `
        <h2 style="font-size:18px;margin-top:30px">${t('topic.examples')}</h2>
        <div class="examples-area"></div>` : ''}
    </div>
    <div class="tab-panel" data-panel="exercise" style="display:none">
      <div class="exercise-section"></div>
    </div>
    <div class="tab-panel" data-panel="playground" style="display:none">
      <div class="playground-area"></div>
    </div>
    <div class="section-gap"></div>
    <div style="display:flex;justify-content:space-between;gap:10px">
      ${prev ? `<a class="btn" href="#/lang/${langId}/topic/${prev.id}">‹ ${pick(prev.title)}</a>` : '<span></span>'}
      ${next ? `<a class="btn" href="#/lang/${langId}/topic/${next.id}">${pick(next.title)} ›</a>` : '<span></span>'}
    </div>
  `;

  // ---- Tab 切换 ----
  app.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
  function switchTab(name) {
    app.querySelectorAll('.tab-btn').forEach((b) => b.classList.toggle('active', b.dataset.tab === name));
    app.querySelectorAll('.tab-panel').forEach((p) => { p.style.display = p.dataset.panel === name ? '' : 'none'; });
    // 面板由隐藏变可见后，CodeMirror 需重新测量布局（否则行号栏/代码重叠或空白）
    setTimeout(() => wsList.forEach((ws) => { try { ws.refresh(); } catch (e) { /* ignore */ } }), 0);
  }

  // ---- 讲解 tab：示例代码 ----
  const examplesArea = app.querySelector('.examples-area');
  if (examplesArea && topic.examples) {
    topic.examples.forEach((ex, i) => {
      const card = document.createElement('div');
      card.className = 'example-card';
      card.innerHTML = `
        <div class="example-caption">
          <span>${i + 1}. ${pick(ex.caption)}</span>
          <button class="load-btn">${t('topic.loadToPlayground')}</button>
        </div>
        <div class="code-block-wrap"><pre><code>${escapeHtml(ex.code)}</code></pre></div>`;
      card.querySelector('.load-btn').addEventListener('click', () => {
        switchTab('playground');
        playgroundWs.setCode(ex.code);
      });
      examplesArea.appendChild(card);
    });
  }

  // ---- 实战 tab：题目卡片 ----
  const exSection = app.querySelector('.exercise-section');
  topic.exercises.forEach((ex, i) => {
    const card = document.createElement('div');
    card.className = 'ex-card';
    card.id = 'ex-' + ex.id;
    const passed = progressGet(langId, topicId, ex.id);
    // 分级提示：新版 hints 数组，兼容旧版单个 hint 字段
    const hints = (ex.hints && ex.hints.length) ? ex.hints : (ex.hint ? [ex.hint] : []);
    card.innerHTML = `
      <div class="ex-head">
        <h3 class="ex-title">
          <span class="ex-tag">${passed ? '✅' : '⑉'}${t('exercise.tag')} ${i + 1}</span>${pick(ex.title)}
        </h3>
        <div class="ex-prompt">${renderMarkdown(pick(ex.prompt))}</div>
        ${hints.length ? `<div class="hint-wrap">
          <div class="hint-btns">${hints.map((_, j) => `<button class="hint-btn" data-lvl="${j}">💡 ${t('exercise.hintLevel', { n: j + 1 })}</button>`).join('')}</div>
          <div class="hint-body" style="display:none"></div>
        </div>` : ''}
        ${ex.expectedOutput !== undefined ? `<div class="ex-prompt" style="margin-top:10px"><strong>${t('exercise.expectedOutput')}:</strong><pre><code>${escapeHtml(ex.expectedOutput)}</code></pre></div>` : ''}
      </div>
      <div class="workspace-mount"></div>
    `;
    // 分级提示：点一级、显示一级（从浅到深逐步引导）
    const hintBody = card.querySelector('.hint-body');
    const revealed = new Set();
    card.querySelectorAll('.hint-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('locked')) return;
        const lvl = parseInt(btn.dataset.lvl, 10);
        if (revealed.has(lvl)) return;
        revealed.add(lvl);
        const item = document.createElement('div');
        item.className = 'hint-item';
        item.innerHTML = `<div class="hint-lv">💡 ${t('exercise.hintLevel', { n: lvl + 1 })}</div><div class="hint-txt">${renderMarkdown(pick(hints[lvl]))}</div>`;
        hintBody.appendChild(item);
        hintBody.style.display = '';
        btn.classList.add('revealed');
        // 逐级引导：看完第 n 级才解锁第 n+1 级
        const nextBtn = card.querySelector(`.hint-btn[data-lvl="${lvl + 1}"]`);
        if (nextBtn) nextBtn.classList.remove('locked');
      });
    });
    // 初始只允许点第 1 级
    card.querySelectorAll('.hint-btn').forEach((b, j) => { if (j > 0) b.classList.add('locked'); });
    const firstBtn = card.querySelector('.hint-btn[data-lvl="0"]');
    if (firstBtn) firstBtn.classList.add('enabled');
    const mount = card.querySelector('.workspace-mount');
    const draft = draftGet(langId, topicId, ex.id);
    const ws = createWorkspace(mount, {
      langDef: def,
      langId,
      topicId,
      exercise: ex,
      code: draft !== null && draft !== undefined && draft !== '' ? draft : ex.starter,
      onPass: () => {
        if (!progressGet(langId, topicId, ex.id)) {
          progressSet(langId, topicId, ex.id, true);
          card.querySelector('.ex-tag').innerHTML = '✅' + t('exercise.tag') + ' ' + (i + 1);
        }
      },
    });
    cleanups.push(ws.destroy);
    wsList.push(ws);
    exSection.appendChild(card);
  });

  // ---- 演练场 tab ----
  const pgMount = app.querySelector('.playground-area');
  const pgWs = createWorkspace(pgMount, {
    langDef: def,
    langId,
    topicId,
    exercise: null,
    code: (topic.examples && topic.examples[0] ? topic.examples[0].code : exStarter(def)),
  });
  cleanups.push(pgWs.destroy);
  wsList.push(pgWs);

  // 直达某题
  if (exId) {
    switchTab('exercise');
    const target = app.querySelector('#ex-' + exId);
    if (target) setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 60);
  }
}

function exStarter(def) {
  return def.playgroundStarter || '';
}

function escapeHtml(s) {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
