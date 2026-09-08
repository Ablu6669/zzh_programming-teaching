// workspace.js — 单个工作区：编辑器 + 运行/判定按钮 + 输出面板 + 判题结果
// 批 1 新增：① 自定义输入"试跑"（🧪 不计分）；② 多用例判题（exercise.tests 存在时逐用例跑并渲染 ✅/❌ 网格）
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
 * @returns {{ destroy, setCode, refresh }}
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
      <button class="btn btn-trial"><span class="btn-ico">🧪</span> <span class="btn-txt">${t('editor.trialToggle')}</span></button>
      <span class="ws-draft">${t('editor.draftSaved')}</span>
    </div>
    <div class="trial-box" hidden>
      <div class="trial-head">
        <span class="trial-title">🧪 ${t('editor.trialTitle')}</span>
        <span class="trial-note">${t('editor.trialNote')}</span>
      </div>
      <textarea class="trial-stdin" rows="2" spellcheck="false" placeholder="${t('editor.trialPlaceholder')}"></textarea>
      <button class="btn btn-trial-run"><span class="btn-ico">▶</span> <span class="btn-txt">${t('editor.trialRun')}</span></button>
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
  const trialBtn = $('.btn-trial');
  const trialBox = $('.trial-box');
  const trialStdin = $('.trial-stdin');
  const trialRunBtn = $('.btn-trial-run');
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
    [runBtn, resetBtn, trialBtn, trialRunBtn].forEach((b) => { if (b) b.disabled = busy; });
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

  // ---- 自定义输入试跑（🧪 不计分）----
  trialBtn.addEventListener('click', () => {
    trialBox.hidden = !trialBox.hidden;
    if (!trialBox.hidden) trialStdin.focus();
  });
  function runTrial() {
    clearPanels();
    setBusy(true);
    runCode(langDef, ed.getValue(), { stdin: trialStdin.value })
      .then((result) => {
        setBusy(false);
        renderOutput(result, { trial: true });
      })
      .catch((err) => {
        setBusy(false);
        renderRunnerError(err);
      });
  }
  trialRunBtn.addEventListener('click', runTrial);
  trialStdin.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + Enter 快捷试跑
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') { e.preventDefault(); runTrial(); }
  });

  function clearPanels() {
    outputArea.innerHTML = '';
    judgeArea.innerHTML = '';
    errorArea.innerHTML = '';
  }

  // ---- 输出面板 ----
  /** @param {object} result 归一化运行结果
   *  @param {object} [ext] { trial?: boolean } 试跑模式：面板顶部加"试跑不计分"标记 */
  function renderOutput(result, ext) {
    const trial = !!(ext && ext.trial);
    const tabs = [];
    if (result.compileStderr) tabs.push(['compile', t('runner.compileError'), true]);
    if (result.stdout) tabs.push(['stdout', 'stdout', false]);
    if (result.stderr) tabs.push(['stderr', t('runner.runtimeError'), true]);
    if (tabs.length === 0) {
      outputArea.innerHTML = `<div class="output-panel">${trial ? `<div class="output-flag">🧪 ${t('editor.trialResult')}</div>` : ''}<div class="output-body"><span class="output-empty">${t('runner.noOutput')}</span></div></div>`;
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
        ${trial ? `<div class="output-flag">🧪 ${t('editor.trialResult')}</div>` : ''}
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

  /** 单个用例的期望 vs 实际 diff 网格 */
  function diffGridHTML(jr) {
    const expHtml = jr.expected.map((l) => `<div class="diff-line">${escapeHtml(l) || ' '}</div>`).join('');
    const actLines = jr.lineResults.map((r) => `<div class="diff-line ${r.ok ? 'ok' : 'bad'}">${escapeHtml(r.actual)}${r.missing ? ' ⚠ ' + t('judge.missingLine') : ''}${r.extra ? ' ⚠ ' + t('judge.extraLine') : ''}</div>`).join('');
    return `<div class="diff-grid">
      <div class="diff-col">
        <h4>${t('judge.expected')}</h4>
        <pre>${expHtml || '<span class="output-empty">—</span>'}</pre>
      </div>
      <div class="diff-col">
        <h4>${t('judge.actual')}</h4>
        <pre>${actLines || '<span class="output-empty">—</span>'}</pre>
      </div>
    </div>
    <div class="judge-note">${t('judge.note')}</div>`;
  }

  // 全部通过
  function renderPassHTML(caseCount) {
    return `
      <div class="judge-result pass">
        <div class="judge-title">✅ ${t('judge.passed')}</div>
        ${caseCount > 1 ? `<div class="judge-sub">${t('judge.allCasesPass', { n: caseCount })}</div>` : ''}
      </div>`;
  }

  // 单用例判定结果（默认无 tests 的路径，视觉与旧版一致：pass 显示 ✅）
  function renderJudge(jr, mismatchDiag) {
    if (jr.pass) {
      judgeArea.innerHTML = `
        <div class="judge-result pass">
          <div class="judge-title">✅ ${t('judge.passed')}</div>
        </div>${solutionFoldHTML()}`;
      bindSolutionToggle();
      return;
    }
    judgeArea.innerHTML = `
      <div class="judge-result fail">
        <div class="judge-title">❌ ${t('judge.failed')}</div>
        ${mismatchDiag ? `<div class="judge-diag"><div class="jd-row">🔎 ${mdInline(mismatchDiag)}</div></div>` : ''}
        ${diffGridHTML(jr)}
        ${stuckTipHTML()}
      </div>`;
  }

  /** 精选解法折叠区：判题通过后展示标准解代码 + 双语讲解（默认收起，点击展开）。批 2 新增 */
  function solutionFoldHTML() {
    if (!exercise) return '';
    const sol = exercise.solution;
    if (!sol || !sol.trim()) return '';
    const note = (exercise.solutionNote && pick(exercise.solutionNote)) || '';
    return `
      <div class="solution-fold">
        <button type="button" class="solution-toggle" aria-expanded="false">💡 ${t('judge.solutionLabel')} <span class="sol-caret">▸</span></button>
        <div class="solution-body" hidden>
          ${note ? `<div class="solution-note">${mdInline(note).replace(/\n+/g, '<br>')}</div>` : ''}
          <div class="solution-code"><pre><code>${escapeHtml(sol)}</code></pre></div>
        </div>
      </div>`;
  }

  /** 绑定精选解法折叠切换（judgeArea 每次判题被重写，故每次渲染后重新绑定） */
  function bindSolutionToggle() {
    const btn = judgeArea.querySelector('.solution-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const body = judgeArea.querySelector('.solution-body');
      const caret = btn.querySelector('.sol-caret');
      const open = body && body.hidden;
      if (body) body.hidden = !body.hidden;
      if (caret) caret.textContent = open ? '▾' : '▸';
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // ---- 判题：用例定义 ----
  /** 题目判定用例：优先 ex.tests（[{in?, out}]），否则退化为单组 expectedOutput */
  function judgeCases() {
    if (exercise && Array.isArray(exercise.tests) && exercise.tests.length) {
      return exercise.tests.map((tc) => ({
        stdin: tc.in != null ? String(tc.in) : '',
        out: tc.out,
        fromTests: true,
      }));
    }
    return [{
      stdin: '',
      out: exercise && exercise.expectedOutput !== undefined ? exercise.expectedOutput : '',
      fromTests: false,
    }];
  }

  /** 逐用例渲染状态条（运行中/✅/❌/编译失败/崩溃） */
  function casesBarHTML(states) {
    const chips = states.map((s, i) => {
      const icon = s.status === 'pass' ? '✅' : s.status === 'fail' ? '❌' : s.status === 'run' ? '⏳' : (s.status === 'compile' ? '⚠' : '💥');
      return `<span class="case-chip ${s.status}" title="${t('judge.caseLabel', { n: i + 1 })}">${t('judge.caseLabel', { n: i + 1 })} ${icon}</span>`;
    }).join('');
    return `<div class="judge-cases">${chips}</div>`;
  }

  /** 多用例判定主流程：编译错误/崩溃中止（代码级问题，其余用例同错），输出不匹配跑完全部再汇总 */
  async function runJudge() {
    clearPanels();
    setBusy(true);
    const cases = judgeCases();
    const multi = cases.length > 1;
    const states = cases.map((c) => ({ ...c, status: 'wait' }));

    // 先渲染进度条，逐用例回填状态
    if (multi) judgeArea.innerHTML = casesBarHTML(states);
    let stopKind = null;      // 'compile' | 'crash' | null
    let diag = null;
    let firstFailCase = -1;   // 首个输出不匹配的用例下标（用于展开 diff）

    for (let i = 0; i < cases.length && !stopKind; i++) {
      states[i].status = 'run';
      if (multi) judgeArea.innerHTML = casesBarHTML(states);
      let result;
      try {
        result = await runCode(langDef, code, { stdin: cases[i].stdin });
      } catch (err) {
        setBusy(false);
        renderRunnerError(err);
        return;
      }
      if (result.kind === 'compile_error') {
        states[i].status = 'compile'; stopKind = 'compile'; diag = diagnoseCompile(langId, result.compileStderr); states[i].diag = diag;
      } else if (result.stderr && result.stderr.trim()) {
        states[i].status = 'crash'; stopKind = 'crash'; diag = diagnoseRuntime(langId, result.stderr); states[i].diag = diag;
      } else {
        const jr = judge(cases[i].out, result.stdout);
        states[i].status = jr.pass ? 'pass' : 'fail';
        states[i].jr = jr;
        if (!jr.pass && firstFailCase < 0) { firstFailCase = i; diag = diagnoseMismatch(jr); }
        // 输出不匹配不中止，继续跑剩余用例，让用户看到全部结果
      }
    }
    setBusy(false);

    const allPass = states.every((s) => s.status === 'pass');

    // ---- 汇总渲染 ----
    if (allPass) {
      failCount = 0;
      judgeArea.innerHTML = (multi ? casesBarHTML(states) : '') + renderPassHTML(cases.length) + solutionFoldHTML();
      bindSolutionToggle();
      if (opts.onPass) opts.onPass();
      return;
    }
    failCount++;

    // 多用例汇总：先决性失败（编译/崩溃）展示第一个失败用例的诊断
    const firstBad = states.find((s) => s.status === 'compile' || s.status === 'crash' || s.status === 'fail');
    const title = stopKind === 'compile' ? `❌ ${t('judge.failed')} · ${t('judge.compileError')}`
      : stopKind === 'crash' ? `💥 ${t('judge.failed')} · ${t('judge.runtimeCrashed')}`
      : `❌ ${t('judge.failed')} · ${firstFailCase >= 0 ? t('judge.casesFail', { n: firstFailCase + 1 }) : ''}`;

    let detail = '';
    if (firstBad) {
      if (firstBad.status === 'compile' || firstBad.status === 'crash') {
        detail = renderDiagHTML(firstBad.diag);
      } else if (firstBad.jr) {
        const caseDiag = (firstFailCase >= 0 && states[firstFailCase] === firstBad) ? diag : diagnoseMismatch(firstBad.jr);
        detail = `${caseDiag ? `<div class="judge-diag"><div class="jd-row">🔎 ${mdInline(caseDiag)}</div></div>` : ''}${diffGridHTML(firstBad.jr)}`;
      }
    }
    judgeArea.innerHTML = `
      <div class="judge-result fail">
        <div class="judge-title">${title}</div>
        ${casesBarHTML(states)}
        ${detail}
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
    // 多用例判题：exercise.tests 存在即直接走 runJudge——它内部会逐用例执行
    // （含编译失败/崩溃判定）。不能在此先 runCode 一次：那会多打一发无输入请求，
    // 徒增一倍 Godbolt 请求量与失败面，且与 runJudge 的判定逻辑重复。
    const hasTests = !!(exercise && Array.isArray(exercise.tests) && exercise.tests.length);
    if (doJudge && hasTests) {
      runJudge().catch((err) => {
        setBusy(false);
        renderRunnerError(err);
      });
      return;
    }
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
        // ③ 单用例（无 tests）：与旧版一致的比对
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
 * 原生 confirm/alert 会被浏览器直接忽略并返回 false，导致"点了没反应"。
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
