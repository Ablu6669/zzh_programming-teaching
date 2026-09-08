// editor.js — 代码编辑器组件：CodeMirror 5，加载失败降级 textarea
// 增强（批 1）：括号自动闭合 + 括号匹配高亮 + 当前行高亮 + 关键词/内建函数补全
//            （Ctrl-Space 手动触发；输入标识符 ≥2 个字符后自动弹出）+ Ctrl-/ 注释切换
import { WORDS, MODE_NAME } from './completions.js';

/**
 * 创建编辑器
 * @param {HTMLElement} container 挂载点
 * @param {string} langId 语言 id
 * @param {string} value 初始代码
 * @returns {{getValue, setValue, onChange, destroy, refresh, refreshTheme}}
 */
export function createEditor(container, langId, value) {
  const mode = MODE_NAME[langId] || 'null';

  if (typeof window.CodeMirror === 'function') {
    let cm;
    try {
      cm = window.CodeMirror(container, {
        value: value || '',
        mode: mode,
        lineNumbers: true,
        indentUnit: 4,
        tabSize: 4,
        theme: currentTheme(),
        lineWrapping: true,
        // 以下三项需要 vendor/codemirror 的 addon（matchbrackets/closebrackets/activeline），已随页面加载
        matchBrackets: true,
        autoCloseBrackets: true,
        styleActiveLine: { nonEmpty: false },
        // 补全：Enter/Tab 选中，允许输入中自动弹出（completeSingle:false 避免唯一候选项也打断输入）
        hintOptions: { completeSingle: false },
        extraKeys: {
          'Ctrl-/': toggleLineComment,
          'Cmd-/': toggleLineComment,
          'Ctrl-Space': 'autocomplete',
        },
      });
      cm.setSize('100%', '340px');

      // 输入标识符 ≥2 字符时自动弹出补全（字符串/注释内不触发）
      cm.on('inputRead', (c, change) => {
        const txt = (change.text || []).join('');
        if (!/^[A-Za-z_]\w*$/.test(txt)) return; // 仅标识符增量
        const cur = c.getCursor();
        const tok = c.getTokenAt(cur);
        const tt = tok && tok.type ? String(tok.type) : '';
        if (tt.indexOf('comment') >= 0 || tt.indexOf('string') >= 0) return;
        if (cur.ch - tok.start < 2) return; // 词长不足 2
        if (c.state.completionActive) return; // 已在补全中
        if (!c.hasFocus()) return;
        setTimeout(() => {
          if (c.state.completionActive || !c.hasFocus()) return;
          c.showHint({ hint: makeHint(langId), completeSingle: false });
        }, 250);
      });

      const api = {
        kind: 'codemirror',
        getValue: () => cm.getValue(),
        setValue: (v) => cm.setValue(v || ''),
        onChange: (fn) => cm.on('change', (c) => fn(c.getValue())),
        destroy: () => { if (cm.display && cm.display.wrapper && cm.display.wrapper.parentNode) cm.display.wrapper.parentNode.removeChild(cm.display.wrapper); },
        refreshTheme: () => cm.setOption('theme', currentTheme()),
        // CodeMirror 在隐藏容器(如未显示的 tab)里创建时，行号栏宽度/正文左边距会按 0 测量而错误。
        // 容器变为可见后调用 refresh() 强制重新测量布局。
        refresh: () => { try { cm.refresh(); } catch (e) { /* ignore */ } },
      };
      return api;
    } catch (e) {
      console.warn('[editor] CodeMirror init failed, fallback to textarea:', e);
    }
  }

  // 降级：等宽 textarea（无补全/括号自动闭合等增强）
  container.innerHTML = '';
  const ta = document.createElement('textarea');
  ta.className = 'fallback-editor';
  ta.value = value || '';
  ta.spellcheck = false;
  container.appendChild(ta);
  const handlers = [];
  ta.addEventListener('input', () => handlers.forEach((fn) => fn(ta.value)));
  return {
    kind: 'textarea',
    getValue: () => ta.value,
    setValue: (v) => { ta.value = v || ''; },
    onChange: (fn) => handlers.push(fn),
    destroy: () => { ta.remove(); },
    refreshTheme: () => {},
    refresh: () => {},
  };
}

function currentTheme() {
  return document.documentElement.getAttribute('data-theme') === 'light' ? 'default' : 'dracula';
}

/**
 * 生成当前语言的补全 Hint 函数。
 * 匹配当前光标前的标识符前缀，从词表中筛出候选。
 */
function makeHint(langId) {
  const words = WORDS[langId] || [];
  return (cm) => {
    const cur = cm.getCursor();
    const token = cm.getTokenAt(cur);
    const start = token.string ? token.start : cur.ch;
    const prefix = (token.string || '').slice(0, cur.ch - start);
    const lower = prefix.toLowerCase();
    if (!lower) return null;
    const list = words
      .filter((w) => w.toLowerCase().indexOf(lower) === 0)
      .slice(0, 24)
      .map((w) => ({ text: w, display: w, className: 'cm-hint-word' }));
    return list.length ? { list, from: { line: cur.line, ch: start }, to: cur } : null;
  };
}

/** 注释切换（# 或 //），支持多行选区，行内注释位置在行首缩进之后 */
function toggleLineComment(cm) {
  const isPy = cm.getOption('mode').indexOf('python') >= 0;
  const token = isPy ? '#' : '//';
  const from = cm.getCursor('from');
  const to = cm.getCursor('to');
  // 收集选区覆盖的所有行（无选区 = 当前行）
  const lineFrom = from.line, lineTo = to.ch === 0 && to.line > from.line ? to.line - 1 : to.line;
  const lines = [];
  for (let l = lineFrom; l <= lineTo; l++) lines.push(l);

  let allCommented = true;
  const texts = lines.map((l) => cm.getLine(l));
  for (const s of texts) {
    const m = s.match(/^\s*/);
    if (s.slice(m[0].length, m[0].length + token.length) !== token) { allCommented = false; break; }
  }

  cm.operation(() => {
    lines.forEach((l) => {
      const s = cm.getLine(l);
      const ws = s.match(/^\s*/)[0];
      const body = s.slice(ws.length);
      if (allCommented && body.startsWith(token)) {
        cm.replaceRange(s.slice(0, ws.length) + body.slice(token.length).replace(/^ /, ''), { line: l, ch: 0 }, { line: l, ch: s.length });
      } else if (!allCommented) {
        cm.replaceRange(ws + token + (body ? ' ' + body : body), { line: l, ch: 0 }, { line: l, ch: s.length });
      }
    });
  });
}
