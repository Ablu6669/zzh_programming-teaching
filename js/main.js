// main.js — 应用入口：路由注册 / 主题 / 语言切换 / 视图分发
import { getState, on } from './store.js';
import { initI18n, setLang, getLang, applyI18n } from './i18n.js';
import { registerRoute, startRouter } from './router.js';
import { renderHome } from './views/homeView.js';
import { renderRoadmap, renderNotFound } from './views/roadmapView.js';
import { renderTopic, destroyTopicView } from './views/topicView.js';
import { getLangDef, getLangIds } from './content.js';
import { lastVisitSet } from './progress.js';

const THEME_KEY = 'plw:theme';

// ---- 主题 ----
function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (e) { /* ignore */ }
  const theme = saved === 'light' || saved === 'dark' ? saved : 'dark';
  document.documentElement.setAttribute('data-theme', theme);
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const next = cur === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', next);
  try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* ignore */ }
  // CodeMirror 主题刷新由重新渲染完成；同时刷新现存编辑器
  window.dispatchEvent(new CustomEvent('theme:change', { detail: next }));
}

// ---- 语言数据 ----
function langDefs() {
  const defs = {};
  for (const id of getLangIds()) {
    const def = getLangDef(id);
    if (def) defs[id] = def;
  }
  return defs;
}

function render(route) {
  const app = document.getElementById('app');
  if (!route) { renderNotFound(app); return; }
  switch (route.name) {
    case 'home': renderHome(app, langDefs()); break;
    case 'roadmap': renderRoadmap(app, route.params.lang); break;
    case 'topic':
      renderTopic(app, route.params.lang, route.params.tid, route.params.eid);
      // 续学追踪（仅在进入题库时记录；切语言重渲染不算）
      lastVisitSet(route.params.lang, route.params.tid, route.params.eid || null);
      break;
    default: renderNotFound(app);
  }
  applyI18n(app);
  window.scrollTo(0, 0);
}

// ---- 启动 ----
initTheme();
initI18n();

registerRoute('/', 'home', null);
registerRoute('/lang/:lang', 'roadmap', null);
registerRoute('/lang/:lang/topic/:tid/ex/:eid', 'topic', null);
registerRoute('/lang/:lang/topic/:tid', 'topic', null);

on('route:change', render);
on('lang:change', () => {
  // 语言切换：销毁编辑器并重渲染当前视图（内容双语即时生效）
  destroyTopicView();
  // 合成 hashchange → 重新解析路由 → 触发 render
  window.dispatchEvent(new Event('hashchange'));
});

document.getElementById('btn-lang').addEventListener('click', () => {
  setLang(getLang() === 'zh' ? 'en' : 'zh');
});
document.getElementById('btn-theme').addEventListener('click', toggleTheme);

startRouter();

// ---- PWA Service Worker ----
function registerSW() {
  if (!('serviceWorker' in navigator)) return;
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const isHttps = location.protocol === 'https:';
  if (!isLocal && !isHttps) return;
  navigator.serviceWorker.register('./service-worker.js').catch((err) => {
    console.warn('[SW] 注册失败：', err);
  });
}
registerSW();
