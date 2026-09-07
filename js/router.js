// router.js — hash 路由
// #/                          → home
// #/lang/:lang                → roadmap
// #/lang/:lang/topic/:tid     → topic（可选 /ex/:eid 直达题目）
import { emit } from './store.js';

const routes = [];

export function registerRoute(pattern, name, handler) {
  // pattern: '/lang/:lang/topic/:tid/ex/:eid'
  // 注意：前导空段（''）必须保留，否则丢失开头的 '/'
  const keys = [];
  const parts = pattern.split('/').map((seg) => {
    if (seg === '') return '';
    if (seg.startsWith(':')) { keys.push(seg.slice(1)); return '([^/]+)'; }
    return seg.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  });
  const regex = new RegExp('^' + parts.join('/') + '/?$');
  routes.push({ regex, keys, name, handler });
}

export function navigate(hash) { location.hash = hash; }

function parse() {
  const raw = location.hash.replace(/^#/, '') || '/';
  for (const r of routes) {
    const m = raw.match(r.regex);
    if (m) {
      const params = {};
      r.keys.forEach((k, i) => { params[k] = decodeURIComponent(m[i + 1]); });
      return { name: r.name, params, handler: r.handler };
    }
  }
  return null;
}

export function startRouter() {
  window.addEventListener('hashchange', () => emit('route:change', parse()));
  emit('route:change', parse());
}
