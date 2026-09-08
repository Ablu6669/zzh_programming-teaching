// stepper.js — 逐步执行面板（Python）
// 交互模型：点 🐢 打开面板 → 快照当前编辑器代码 → Pyodide 录制轨迹 → 回放。
// 回放状态机：steps[] 由 line 事件 + 终态步构成；步进时按序重建输出与变量快照。
// 设计约定：面板打开期间编辑器仍可改代码，但轨迹是快照——「重新录制」按钮用最新代码重跑。
import { t } from '../i18n.js';
import { tracePython } from './trace.js';

/**
 * @param {HTMLElement} mount 挂载点（.step-area）
 * @param {{getCode: () => string}} opts
 * @returns {{ toggle, destroy }}
 */
export function createStepController(mount, opts) {
  let open = false;
  let steps = [];        // [{kind:'line', line, stk, out}, {kind:'end'|'error'|'limit', out, err?}]
  let idx = -1;          // 当前步：-1 = 未开始
  let tracing = false;
  const $ = (sel) => mount.querySelector(sel);

  function toggle() {
    open = !open;
    if (open) {
      renderShell();
      void ensureTrace();
    } else {
      destroyKeyHandler();
      mount.innerHTML = '';
    }
  }

  function renderShell() {
    mount.innerHTML = `
      <div class="step-panel">
        <div class="step-head">
          <span class="step-title">🐢 ${t('step.title')}</span>
          <span class="step-count"></span>
          <span class="step-state"></span>
          <button type="button" class="step-mini-btn step-retrace" title="${t('step.retrace')}">↺</button>
          <button type="button" class="step-mini-btn step-close" title="${t('step.close')}">✕</button>
        </div>
        <div class="step-statusbar"></div>
        <div class="step-main">
          <div class="step-code"><pre></pre></div>
          <div class="step-vars"><div class="step-vars-title">${t('step.vars')}</div><div class="step-vars-body"></div></div>
        </div>
        <div class="step-bottom">
          <div class="step-ctrl">
            <button type="button" class="step-btn" data-act="first" title="|◀">⏮</button>
            <button type="button" class="step-btn" data-act="prev" title="◀">◀</button>
            <button type="button" class="step-btn" data-act="next" title="▶">▶</button>
            <button type="button" class="step-btn" data-act="last" title="▶|">⏭</button>
            <input type="range" class="step-slider" min="0" max="0" value="0" step="1">
          </div>
          <div class="step-out"><div class="step-out-title">${t('step.output')}</div><pre class="step-out-body"></pre></div>
        </div>
      </div>`;
    $('.step-close').addEventListener('click', toggle);
    $('.step-retrace').addEventListener('click', () => { if (!tracing) void ensureTrace(); });
    mount.querySelectorAll('.step-btn').forEach((b) => {
      b.addEventListener('click', () => {
        const act = b.dataset.act;
        if (act === 'first') go(0);
        else if (act === 'prev') go(idx - 1);
        else if (act === 'next') go(idx + 1);
        else if (act === 'last') go(steps.length - 1);
      });
    });
    $('.step-slider').addEventListener('input', (e) => go(Number(e.target.value)));
    installKeyHandler();
  }

  function setStatus(html) {
    // 仅管理加载/提示状态栏，不动 step-state（后者由 go() 每次步进设置）
    const bar = $('.step-statusbar');
    if (bar) bar.innerHTML = html || '';
  }

  /** 录制（或重新录制）当前代码的轨迹 */
  async function ensureTrace() {
    const code = opts.getCode();
    tracing = true;
    steps = []; idx = -1;
    renderCode(code, -1);
    setStatus(`<span class="spinner"></span> ${t('step.loadingEngine')}`);
    try {
      setStatus(`<span class="spinner"></span> ${t('step.tracing')}`);
      const r = await tracePython(code);
      steps = buildSteps(r);
    } catch (err) {
      // 引擎加载失败（多半是离线/CDN 不通）：给出明确指引
      setStatus(`<div class="step-net-err">⚠ ${t('step.networkError')}</div>`);
      tracing = false;
      return;
    }
    tracing = false;
    const slider = $('.step-slider');
    if (slider) { slider.max = String(steps.length - 1); slider.value = '0'; }
    go(0);
    setStatus('');   // 触发 step-count/state 前清掉加载提示
  }

  /** 轨迹事件 → 回放步骤（line 事件各一步 + 末尾终态步） */
  function buildSteps(r) {
    const steps = [];
    let out = '';
    for (const ev of r.events) {
      if (ev.t === 'line') {
        steps.push({ kind: 'line', line: ev.n, stk: ev.stk || [], out });
      } else if (ev.t === 'w') {
        out += ev.s;
      } else if (ev.t === 'err') {
        steps.push({ kind: 'error', err: ev.s, out });
      } else if (ev.t === 'end') {
        steps.push({ kind: 'end', out });
      }
    }
    if (r.reason === 'limit' && steps.length && steps[steps.length - 1].kind === 'line') {
      steps.push({ kind: 'limit', out });
    }
    if (!steps.length) steps.push({ kind: 'end', out: '' });
    return steps;
  }

  function go(i) {
    if (!steps.length) return;
    idx = Math.max(0, Math.min(steps.length - 1, i));
    const s = steps[idx];
    const slider = $('.step-slider');
    if (slider && Number(slider.value) !== idx) slider.value = String(idx);
    const cnt = $('.step-count');
    if (cnt) cnt.textContent = t('step.counter', { a: idx + 1, b: steps.length });
    const st = $('.step-state');
    if (st) {
      st.textContent = s.kind === 'end' ? ' · ' + t('step.finished')
        : s.kind === 'error' ? ' · ' + t('step.errorTitle')
        : s.kind === 'limit' ? ' · ' + t('step.limitTitle') : '';
    }
    const line = s.kind === 'line' ? s.line
      : (s.kind === 'error' ? lastLineBefore(idx) : -1);
    renderCode(codeOfTrace(), line);
    renderVars(s);
    renderOut(s);
  }

  let tracedCode = '';
  function codeOfTrace() { return tracedCode; }

  function lastLineBefore(i) {
    for (let k = i; k >= 0; k--) if (steps[k].kind === 'line') return steps[k].line;
    return -1;
  }

  /** 代码区渲染：带行号 + 当前行高亮（code 参数在录制时快照一次） */
  function renderCode(code, hl) {
    tracedCode = code;
    const pre = $('.step-code pre');
    if (!pre) return;
    const lines = String(code || '').split('\n');
    // 去掉末尾空行
    while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
    pre.innerHTML = lines.map((l, i) => {
      const n = i + 1;
      const cls = n === hl ? ' cur' : '';
      return `<div class="step-ln${cls}"><span class="step-ln-no">${n}</span><span class="step-ln-code">${escapeHtml(l) || ' '}</span></div>`;
    }).join('');
    const cur = pre.querySelector('.step-ln.cur');
    if (cur && hl > 0) cur.scrollIntoView({ block: 'nearest' });
  }

  function renderVars(s) {
    const body = $('.step-vars-body');
    if (!body) return;
    if (s.kind !== 'line' || !s.stk.length) {
      body.innerHTML = `<div class="step-vars-empty">${t('step.noVars')}</div>`;
      return;
    }
    body.innerHTML = s.stk.map((f) => {
      const entries = Object.entries(f.locals || {});
      const vars = entries.length
        ? entries.map(([k, v]) => `<div class="step-var"><span class="step-var-name">${escapeHtml(k)}</span><span class="step-var-val">${escapeHtml(v)}</span></div>`).join('')
        : `<div class="step-vars-empty">${t('step.noVars')}</div>`;
      const fn = f.fn === '<module>' ? t('step.mainFrame') : escapeHtml(f.fn);
      return `<div class="step-frame"><div class="step-frame-name">${fn}</div>${vars}</div>`;
    }).join('');
  }

  function renderOut(s) {
    const body = $('.step-out-body');
    if (!body) return;
    let html = s.out ? escapeHtml(s.out) : '';
    if (s.kind === 'error' && s.err) html += `<span class="step-out-err">${escapeHtml(s.err)}</span>`;
    if (s.kind === 'limit') html += `<span class="step-out-err">${escapeHtml(t('step.limitNote'))}</span>`;
    body.innerHTML = html || `<span class="output-empty">${t('runner.noOutput')}</span>`;
    body.scrollTop = body.scrollHeight;
  }

  // ---- 键盘：面板打开时 ←/→ 步进、Home/End 首尾（编辑器聚焦时不抢键） ----
  let keyHandler = null;
  function installKeyHandler() {
    keyHandler = (e) => {
      if (!open || tracing) return;
      if (e.target.closest && e.target.closest('.CodeMirror, textarea, input, select, [contenteditable]')) return;
      if (e.key === 'ArrowRight') { e.preventDefault(); go(idx + 1); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); go(idx - 1); }
      else if (e.key === 'Home') { e.preventDefault(); go(0); }
      else if (e.key === 'End') { e.preventDefault(); go(steps.length - 1); }
    };
    document.addEventListener('keydown', keyHandler, true);
  }
  function destroyKeyHandler() {
    if (keyHandler) { document.removeEventListener('keydown', keyHandler, true); keyHandler = null; }
  }

  function escapeHtml(s) {
    return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  return {
    toggle,
    destroy: () => { open = false; destroyKeyHandler(); mount.innerHTML = ''; },
  };
}
