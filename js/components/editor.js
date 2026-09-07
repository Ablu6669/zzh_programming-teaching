// editor.js — 代码编辑器组件：CodeMirror 5，加载失败降级 textarea

const MODE_MAP = {
  python: 'python',
  c: 'text/x-csrc',
  cpp: 'text/x-c++src',
  java: 'text/x-java',
};

/**
 * 创建编辑器
 * @param {HTMLElement} container 挂载点
 * @param {string} langId 语言 id
 * @param {string} value 初始代码
 * @returns {{getValue, setValue, onChange, destroy}}
 */
export function createEditor(container, langId, value) {
  const mode = MODE_MAP[langId] || 'null';

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
      });
      cm.setSize('100%', '340px');
      const api = {
        kind: 'codemirror',
        getValue: () => cm.getValue(),
        setValue: (v) => cm.setValue(v || ''),
        onChange: (fn) => cm.on('change', fn),
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

  // 降级：等宽 textarea
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
