// store.js — 极简全局状态（Pub/Sub）
const state = {
  lang: 'zh',        // UI 语言 zh|en
  theme: 'dark',     // dark|light
  route: null,       // 当前路由 { name, params }
};

const listeners = new Map(); // event -> Set<fn>

export function getState() { return state; }

export function setState(patch) {
  Object.assign(state, patch);
  emit('state:change', state);
}

export function on(event, fn) {
  if (!listeners.has(event)) listeners.set(event, new Set());
  listeners.get(event).add(fn);
  return () => listeners.get(event).delete(fn);
}

export function emit(event, payload) {
  const set = listeners.get(event);
  if (set) set.forEach((fn) => { try { fn(payload); } catch (e) { console.error(e); } });
}

export function html(strings, ...vals) {
  // 极小模板 helper：不做转义，调用方自行注意（内容均来自本地数据文件）
  return strings.reduce((acc, s, i) => acc + (i ? vals[i - 1] : '') + s, '');
}
