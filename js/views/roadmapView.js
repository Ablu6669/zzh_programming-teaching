// roadmapView.js — 知识点路线图
import { t, pick } from '../i18n.js';
import { getLangDef, topicStatus, langStats } from '../content.js';
import { progressGet } from '../progress.js';

const STATUS_ICON = { done: '●', active: '◐', todo: '○' };

export function renderRoadmap(app, langId) {
  const def = getLangDef(langId);
  if (!def) { renderNotFound(app); return; }

  const st = langStats(langId, progressGet);
  const rows = def.topics.map((tp, idx) => {
    const status = topicStatus(langId, tp, progressGet);
    const passed = tp.exercises.filter((ex) => progressGet(langId, tp.id, ex.id)).length;
    const stars = '★'.repeat(tp.difficulty || 1);
    return `
      <a class="topic-row ${status}" href="#/lang/${langId}/topic/${tp.id}">
        <span class="tr-status ${status}">${STATUS_ICON[status]}</span>
        <span class="tr-body">
          <div class="tr-title">${idx + 1}. ${pick(tp.title)}</div>
          <div class="tr-sub">🎯 ${passed}/${tp.exercises.length} ${t('roadmap.exercisesUnit')}</div>
        </span>
        <span class="tr-stars" title="${t('roadmap.difficulty')}">${stars}</span>
        <span class="tr-arrow">›</span>
      </a>`;
  }).join('');

  app.innerHTML = `
    <div class="crumb"><a href="#/">${t('nav.home')}</a> › ${def.name}</div>
    <div class="roadmap-head">
      <div>
        <h1 class="page-title">${def.name} · ${t('roadmap.title')}</h1>
        <p class="page-sub">${pick(def.description)}</p>
      </div>
      <div class="progress-line" style="min-width:220px">
        <span class="progress-num">${st.passed}/${st.exercises}</span>
        <div class="progress-track"><div class="progress-fill" style="width:${st.pct}%"></div></div>
        <span class="progress-num">${st.pct}%</span>
      </div>
    </div>
    <div class="topic-list">${rows}</div>
  `;
}

export function renderNotFound(app) {
  app.innerHTML = `<div class="empty-state">404 · <span data-i18n="nav.notFound">页面不存在</span></div>`;
}
