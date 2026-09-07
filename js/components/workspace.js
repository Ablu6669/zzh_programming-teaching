// workspace.js — 单个工作区：编辑器 + 运行/判定按钮 + 输出面板 + 判题结果
import { t, pick } from '../i18n.js';
import { createEditor } from './editor.js';
import { runCode, isJavaClassNameError } from '../runner/godbolt.js';
import { judge } from '../judge.js';
import { draftSet, draftClear } from '../progress.js';

/**
 * 创建工作区
 * @param {HTMLElement} mount 挂载点
 * @param {object} opts { langDef, code, langId, topicId, exercise(可空: 演练场模式), onPass }
 * @returns {{ destroy, setCode }}
 */
export function createWorkspace(mount, opts) {
  const { langDef, langId, topicId, exercise } = opts;
  let code = opts.code || '';

  // ---- DOM 骨架 ----
  mount.innerHTML = `
    ${exercise && pick(langDef.entryNote) ? `<div class="runner-error" style="border-color:var(--warn);background:rgba(241,250,140,.05)">
      <div class="re-title" style="color:var(--warn)">ℹ ${t('topic.entryNote')}</div>
      <div>${renderNote(pick(langDef.entryNote))}</div>
    </div>` : ''}
    <div class="ws-toolbar">
      <button class="btn btn-primary btn-run"><span class="btn-ico">▶</span> <span class="btn-txt">${t('editor.run')}</span></button>
      ${exercise ? `<button class="btn btn-judge btn-run-judge"><span class="btn-ico">✓</span> <span class="btn-txt">${t('editor.runAndJudge')}</span></button>` : ''}
      <button class="btn btn-reset"><span class="btn-ico">↺</span> <span class="btn-txt">${t('editor.reset')}</span></button>
      <span class="ws-draft">${t('editor.draftSaved')}</span>
    </div>
    <div class="editor-box"></div>
    <div class="output-area"></div>
    <div class="judge-area"></div>
    <div class="runner-error-area"></div>
  `;

  const $ = (sel) => mount.querySelector(sel);
  const editorBox = $('.editor-box');
  const outputArea = $('.output-area');
  const judgeArea = $('.judge-area');
  const errorArea = $('.runner-error-area');
  const runBtn = $('.btn-run');
  const judgeBtn = $('.btn-run-judge');
  const resetBtn = $('.btn-reset');
  const draftLabel = $('.ws-draft');

  const ed = createEditor(editorBox, langId, code);
  ed.onChange(onCodeChange);

  let draftTimer = null;
  function onCodeChange(v) {
    code = v;
    if (!exercise) return;
    clearTimeout(draftTimer);
    draftTimer = setTimeout(() => {
      draftSet(langId, topicId, exercise.id, v);
      draftLabel.style.opacity = '1';
      setTimeout(() => { draftLabel.style.opacity = ''; }, 800);
    }, 600);
  }

  function setBusy(busy) {
    runBtn.disabled = busy;
    if (judgeBtn) judgeBtn.disabled = busy;
    if (busy) {
      runBtn.innerHTML = '<span class="spinner"></span> <span>' + t('editor.running') + '</span>';
    } else {
      runBtn.innerHTML = '<span class="btn-ico">▶</span> <span class="btn-txt">' + t('editor.run') + '</span>';
    }
  }

  function reset() {
    if (!window.confirm(t('editor.resetConfirm'))) return;
    ed.setValue(opts.code || '');
    clearPanels();
    if (exercise) draftClear(langId, topicId, exercise.id);
  }
  resetBtn.addEventListener('click', reset);

  function clearPanels() {
    outputArea.innerHTML = '';
    judgeArea.innerHTML = '';
    errorArea.innerHTML = '';
  }

  // ---- 输出面板 ----
  function renderOutput(result) {
    const tabs = [];
    if (result.compileStderr) tabs.push(['compile', t('runner.compileError'), true]);
    if (result.stdout) tabs.push(['stdout', 'stdout', false]);
    if (result.stderr) tabs.push(['stderr', t('runner.runtimeError'), true]);
    if (tabs.length === 0) {
      outputArea.innerHTML = `<div class="output-panel"><div class="output-body"><span class="output-empty">${t('runner.noOutput')}</span></div></div>`;
      return;
    }
    const bodies = {
      compile: `<pre class="output-stderr">${escapeHtml(result.compileStderr)}</pre>`,
      stdout: `<pre class="output-stdout">${escapeHtml(result.stdout)}</pre>`,
      stderr: `<pre class="output-stderr">${escapeHtml(result.stderr)}</pre>`,
    };
    const first = tabs[0][0];
    outputArea.innerHTML = `
      <div class="output-panel">
        <div class="output-tabs">${tabs.map(([k, label, err]) =>
          `<button class="output-tab ${k === first ? 'active' : ''} ${err ? 'has-err' : ''}" data-tab="${k}">${label}</button>`).join('')}
        </div>
        <div class="output-body">${bodies[first]}</div>
      </div>`;
    outputArea.querySelectorAll('.output-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        outputArea.querySelectorAll('.output-tab').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        outputArea.querySelector('.output-body').innerHTML = bodies[btn.dataset.tab];
      });
    });
  }

  // ---- 判题结果 ----
  function renderJudge(jr) {
    if (jr.pass) {
      judgeArea.innerHTML = `
        <div class="judge-result pass">
          <div class="judge-title">✅ ${t('judge.passed')}</div>
        </div>`;
      return;
    }
    const expHtml = jr.expected.map((l) => `<div class="diff-line">${escapeHtml(l) || ' '}</div>`).join('');
    const actLines = jr.lineResults.map((r) => `<div class="diff-line ${r.ok ? 'ok' : 'bad'}">${escapeHtml(r.actual)}${r.missing ? ' ⚠ ' + t('judge.missingLine') : ''}${r.extra ? ' ⚠ ' + t('judge.extraLine') : ''}</div>`).join('');
    judgeArea.innerHTML = `
      <div class="judge-result fail">
        <div class="judge-title">❌ ${t('judge.failed')}</div>
        <div class="diff-grid">
          <div class="diff-col">
            <h4>${t('judge.expected')}</h4>
            <pre>${expHtml || '<span class="output-empty">—</span>'}</pre>
          </div>
          <div class="diff-col">
            <h4>${t('judge.actual')}</h4>
            <pre>${actLines || '<span class="output-empty">—</span>'}</pre>
          </div>
        </div>
        <div class="judge-note">${t('judge.note')}</div>
      </div>`;
  }

  // ---- 运行器错误 ----
  function renderRunnerError(err, result) {
    const M = {
      TIMEOUT: 'runner.timeoutError',
      RATE_LIMIT: 'runner.rateLimit',
      NETWORK: 'runner.networkError',
      QUEUE_FULL: 'runner.queueFull',
      RUNTIME_UNAVAILABLE: 'runner.runtimeUnavailable',
    };
    const key = M[err && err.code] || 'runner.networkError';
    let extra = '';
    if (err && err.code === 'RUNTIME_UNAVAILABLE') {
      extra = `<pre>${escapeHtml(pick(langDef.localGuide) || '')}</pre>`;
    } else if (err && err.code === 'TIMEOUT') {
      extra = `<pre>${escapeHtml(t('runner.timeoutHint'))}</pre>`;
    } else if (err && err.code === 'NETWORK') {
      extra = `<div>${t('runner.localRunGuide')}</div><pre>${escapeHtml(pick(langDef.localGuide) || '')}</pre>`;
    }
    errorArea.innerHTML = `
      <div class="runner-error">
        <div class="re-title">⚠ ${t(key)}</div>
        ${extra}
      </div>`;
  }

  // ---- 执行 ----
  function execute(doJudge) {
    clearPanels();
    setBusy(true);
    runCode(langDef, ed.getValue()).then((result) => {
      setBusy(false);
      renderOutput(result);
      if (doJudge) {
        if (result.kind === 'compile_error') {
          renderJudge({ pass: false, expected: [], actual: [], lineResults: [] });
          judgeArea.innerHTML = `
            <div class="judge-result fail">
              <div class="judge-title">❌ ${t('judge.failed')}</div>
              <div class="judge-note">${t('judge.compileFailed')}</div>
            </div>`;
          if ((langDef.id || langDef.language) === 'java' && isJavaClassNameError(result.compileStderr)) {
            judgeArea.insertAdjacentHTML('beforeend', `<div class="judge-note">⚠ ${t('judge.javaClassName')}</div>`);
          }
          return;
        }
        const jr = judge(exercise.expectedOutput, result.stdout);
        renderJudge(jr);
        if (jr.pass && opts.onPass) opts.onPass();
      }
    }).catch((err) => {
      setBusy(false);
      renderRunnerError(err);
    });
  }

  runBtn.addEventListener('click', () => execute(false));
  if (judgeBtn) judgeBtn.addEventListener('click', () => execute(true));

  function renderNote(note) {
    return note.split('\n').filter(Boolean).map((l) => {
      const m = l.match(/^(\w+)\s*[:：]\s*(.*)$/);
      return '<div>' + (m ? '<code>' + m[1] + '</code> ' + escapeHtml(m[2]) : escapeHtml(l)) + '</div>';
    }).join('');
  }

  function escapeHtml(s) {
    return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  return {
    destroy: () => { clearTimeout(draftTimer); ed.destroy(); },
    setCode: (v) => ed.setValue(v),
  };
}
