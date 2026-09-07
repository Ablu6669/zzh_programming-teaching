// progress.js — localStorage 进度 + 每题代码草稿
const P_KEY = 'plw:progress';
const DRAFT_PREFIX = 'plw:code-draft:';

function readJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) { return fallback; }
}

function writeJSON(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* 存储满等异常忽略 */ }
}

// ---- 进度 ----

export function progressGet(langId, topicId, exId) {
  const map = readJSON(P_KEY, {});
  return !!map[langId + ':' + topicId + ':' + exId];
}

export function progressSet(langId, topicId, exId, value) {
  const map = readJSON(P_KEY, {});
  const k = langId + ':' + topicId + ':' + exId;
  if (value) map[k] = 1; else delete map[k];
  writeJSON(P_KEY, map);
}

// ---- 草稿 ----

export function draftKey(langId, topicId, exId) { return DRAFT_PREFIX + langId + ':' + topicId + ':' + exId; }

export function draftGet(langId, topicId, exId) {
  try { return localStorage.getItem(draftKey(langId, topicId, exId)); } catch (e) { return null; }
}

export function draftSet(langId, topicId, exId, code) {
  try { localStorage.setItem(draftKey(langId, topicId, exId), code); } catch (e) { /* ignore */ }
}

export function draftClear(langId, topicId, exId) {
  try { localStorage.removeItem(draftKey(langId, topicId, exId)); } catch (e) { /* ignore */ }
}
