// workspace.js — 单个工作区：编辑器 + 运行/判定按钮 + 输出面板 + 判题结果
import { t, pick } from '../i18n.js';
import { createEditor } from './editor.js';
import { runCode, isJavaClassNameError } from '../runner/godbolt.js';
import { judge } from '../judge.js';
import { diagnoseCompile, diagnoseRuntime, diagnoseMismatch } from '../diagnose.js';
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

  let failCount = 0; // 本会话连续判定失败次数（通过后清零），≥2 时引导看提示

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
    confirmDialog(t('editor.resetConfirm')).then((ok) => {
      if (!ok) return;
      ed.setValue(opts.code || '');
      clearPanels();
      if (exercise) draftClear(langId, topicId, exercise.id);
    });
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
  /** 诊断块：出错位置 + 通俗解释（给零基础用户） */
  function renderDiagHTML(diag) {
    if (!diag || (!diag.line && !diag.explanation)) return '';
    let html = '<div class="judge-diag">';
    if (diag.line) html += `<div class="jd-row">📍 <strong>${t('judge.errorAt')}</strong>：${t('judge.lineNum', { n: diag.line })}</div>`;
    if (diag.explanation) html += `<div class="jd-row">💡 <strong>${t('judge.possibleCause')}</strong>：${mdInline(diag.explanation)}</div>`;
    html += '</div>';
    return html;
  }

  /** 连续失败时的引导提示（指向题目下方的分级提示） */
  function stuckTipHTML() {
    if (failCount < 2 || !exercise) return '';
    const hints = (exercise.hints && exercise.hints.length) ? exercise.hints : (exercise.hint ? [exercise.hint] : []);
    if (!hints.length) return '';
    return `<div class="judge-stuck">💡 ${t('judge.stuck')}</div>`;
  }

  function renderJudge(jr, mismatchDiag) {
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
        ${mismatchDiag ? `<div class="judge-diag"><div class="jd-row">🔎 ${mdInline(mismatchDiag)}</div></div>` : ''}
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
        ${stuckTipHTML()}
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
        // ① 编译失败：定位行号 + 通俗解释
        if (result.kind === 'compile_error') {
          failCount++;
          const diag = diagnoseCompile(langId, result.compileStderr);
          let javaNote = '';
          if ((langDef.id || langDef.language) === 'java' && isJavaClassNameError(result.compileStderr)) {
            javaNote = `<div class="judge-note">⚠ ${t('judge.javaClassName')}</div>`;
          }
          judgeArea.innerHTML = `
            <div class="judge-result fail">
              <div class="judge-title">❌ ${t('judge.failed')}</div>
              ${renderDiagHTML(diag)}
              ${diag ? '' : `<div class="judge-note">${t('judge.compileFailed')}</div>`}
              ${javaNote}
              ${stuckTipHTML()}
            </div>`;
          return;
        }
        // ② 运行时崩溃（stderr 有内容）：解释为什么崩
        if (result.stderr && result.stderr.trim()) {
          failCount++;
          const diag = diagnoseRuntime(langId, result.stderr);
          judgeArea.innerHTML = `
            <div class="judge-result fail">
              <div class="judge-title">💥 ${t('judge.runtimeCrashed')}</div>
              ${renderDiagHTML(diag)}
              <div class="judge-note">${t('judge.runtimeNote')}</div>
              ${stuckTipHTML()}
            </div>`;
          return;
        }
        // ③ 输出比对：哪一行不一致、差在哪
        const jr = judge(exercise.expectedOutput, result.stdout);
        if (jr.pass) failCount = 0; else failCount++;
        renderJudge(jr, jr.pass ? null : diagnoseMismatch(jr));
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

  /** 诊断文本轻量渲染：先转义，再把 \`xxx\` 变成 <code>、\*\*x\*\* 变成 <strong> */
  function mdInline(s) {
    return escapeHtml(s)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  }

  return {
    destroy: () => { clearTimeout(draftTimer); ed.destroy(); },
    setCode: (v) => ed.setValue(v),
    // 容器从 display:none 变为可见后调用，让 CodeMirror 重新测量布局（修复行号栏/代码重叠）
    refresh: () => { try { ed.refresh(); } catch (e) { /* ignore */ } },
  };
}

/**
 * 自绘确认对话框，替代 window.confirm。
 * 原因：站点在沙箱 iframe（如 GitHub Pages 预览面板，缺 allow-modals）里运行时，
 * 原生 confirm/alert 会被浏览器直接忽略并返回 false，导致“点了没反应”。
 * 该实现基于 DOM，任何环境下都能正常展示并返回 Promise<boolean>。
 * @param {string} message 提示文本
 * @returns {Promise<boolean>}
 */
function confirmDialog(message) {
  return new Promise((resolve) => {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `
      <div class="modal-box" role="dialog" aria-modal="true">
        <div class="modal-title">${t('editor.resetTitle')}</div>
        <div class="modal-msg">${escapeText(message)}</div>
        <div class="modal-actions">
          <button class="btn" data-act="cancel">${t('editor.resetCancel')}</button>
          <button class="btn btn-primary" data-act="ok">${t('editor.resetOk')}</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) { close(false); return; }
      const act = e.target.closest('[data-act]') && e.target.closest('[data-act]').dataset.act;
      if (act === 'ok') close(true);
      else if (act === 'cancel') close(false);
    });
    function close(val) {
      overlay.remove();
      resolve(val);
    }
    // Esc 关闭
    const onKey = (e) => { if (e.key === 'Escape') { document.removeEventListener('keydown', onKey, true); close(false); } };
    document.addEventListener('keydown', onKey, true);
    overlay.querySelector('[data-act="ok"]').focus();
  });
}

function escapeText(s) {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
