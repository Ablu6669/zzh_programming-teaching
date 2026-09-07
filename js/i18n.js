// i18n.js — UI 文案：t(key) + data-i18n 扫描 + 持久化
import { getState, setState, emit } from './store.js';
import zh from '../i18n/zh.js';
import en from '../i18n/en.js';

const PACKS = { zh, en };
const LS_KEY = 'plw:ui-lang';

export function initI18n() {
  let saved = null;
  try { saved = localStorage.getItem(LS_KEY); } catch (e) { /* ignore */ }
  const nav = (navigator.language || 'zh').toLowerCase();
  const lang = saved === 'zh' || saved === 'en' ? saved : (nav.startsWith('en') ? 'en' : 'zh');
  setState({ lang });
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}

export function setLang(lang) {
  if (lang !== 'zh' && lang !== 'en') return;
  setState({ lang });
  try { localStorage.setItem(LS_KEY, lang); } catch (e) { /* ignore */ }
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  applyI18n();
  emit('lang:change', lang);
}

export function getLang() { return getState().lang; }

/** 取 UI 文案，支持 {param} 占位 */
export function t(key, params) {
  const pack = PACKS[getLang()] || zh;
  let s = pack[key];
  if (s === undefined) { console.warn('[i18n] missing key:', key, getLang()); s = (PACKS.zh[key] !== undefined ? PACKS.zh[key] : key); }
  if (params) for (const [k, v] of Object.entries(params)) s = s.split('{' + k + '}').join(String(v));
  return s;
}

/** 内容双语字段取值：pick({zh, en}) */
export function pick(field) {
  if (field === null || field === undefined) return '';
  if (typeof field === 'string') return field; // 代码等单语字段
  const lang = getLang();
  return field[lang] !== undefined && field[lang] !== '' ? field[lang] : (field.zh || field.en || '');
}

/** 扫描 [data-i18n] 批量填充 */
export function applyI18n(root) {
  const scope = root || document;
  scope.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key) el.textContent = t(key);
  });
  scope.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const key = el.getAttribute('data-i18n-title');
    if (key) el.title = t(key);
  });
}
