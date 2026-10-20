// main.js — 应用入口：路由注册 / 主题 / 语言切换 / 视图分发
import { getState, on } from './store.js';
import { initI18n, setLang, getLang, applyI18n } from './i18n.js';
import { registerRoute, startRouter } from './router.js';
import { renderHome } from './views/homeView.js';
import { renderRoadmap, renderNotFound } from './views/roadmapView.js';
import { renderTopic, destroyTopicView } from './views/topicView.js';
import { getLangDef, getLangIds } from './content.js';
import { lastVisitSet } from './progress.js';
import { createAiChat } from './components/aiChat.js';

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

// ---- AI 悬浮助手 ----
createAiChat();

// ---- PWA Service Worker ----
// SW 是「改了没生效」这类幽灵 bug 的常见源头：预缓存存的是无指纹的裸 URL，
// network-first 一旦回落到缓存就会喂出旧 CSS/JS。两道保险：
//   1) 新 SW 进入 installed 后立刻 skipWaiting 激活（旧缓存由 activate 清掉）
//   2) 本页 JS 的版本号与最新 index.html 不一致 → 注销 SW → 带新版本重载一次
function registerSW() {
  if (!('serviceWorker' in navigator)) return;
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  const isHttps = location.protocol === 'https:';
  if (!isLocal && !isHttps) return;

  navigator.serviceWorker.register('./service-worker.js').then((reg) => {
    if (reg.waiting) reg.waiting.postMessage('SKIP_WAITING');
    reg.addEventListener('updatefound', () => {
      const sw = reg.installing;
      if (!sw) return;
      sw.addEventListener('statechange', () => {
        if (sw.state === 'installed' && navigator.serviceWorker.controller) {
          sw.postMessage('SKIP_WAITING');
        }
      });
    });
    reg.update().catch(() => { /* 离线时忽略 */ });
  }).catch((err) => {
    console.warn('[SW] 注册失败：', err);
  });

  // 二次兜底：页面跑的是旧 JS（本地脚本的 v 与最新 index.html 不一致）时，
  // 注销 SW + 清空缓存后带新版本号重载，避免被旧 shell 永久困住。
  navigator.serviceWorker.ready.then(async () => {
    try {
      const res = await fetch('./index.html', { cache: 'reload' });
      const txt = await res.text();
      const latest = (txt.match(/js\/main\.js\?v=([^"']+)/) || [])[1];
      const scriptEl = document.querySelector('script[src*="js/main.js"]');
      const running = scriptEl ? scriptEl.src : '';
      if (!latest || running.includes(`?v=${latest}`)) return;
      if (sessionStorage.getItem('plw-sw-heal') === latest) return;
      sessionStorage.setItem('plw-sw-heal', latest);
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg) await reg.unregister();
      if (window.caches) {
        const keys = await caches.keys();
        await Promise.all(keys.map((k) => caches.delete(k)));
      }
      location.reload();
    } catch (e) { /* 离线或读取失败时静默 */ }
  });
}
registerSW();
