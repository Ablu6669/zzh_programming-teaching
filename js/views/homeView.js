// homeView.js — 语言选择页（含续学入口）
import { t, pick } from '../i18n.js';
import { getLangDef, getTopic, getExercise, langStats } from '../content.js';
import { progressGet, lastVisitGet } from '../progress.js';

const META = {
  java:   { logo: '☕', accent: '#f89820' },
  c:      { logo: '🇨', accent: '#5c8dbc' },
  cpp:    { logo: '➕', accent: '#649ad2' },
  python: { logo: '🐍', accent: '#ffd43b' },
};

function buildContinueCard() {
  const lv = lastVisitGet();
  if (!lv) return '';
  const def = getLangDef(lv.langId);
  if (!def) return '';
  const tp = getTopic(lv.langId, lv.topicId);
  if (!tp) return '';
  const ex = lv.exId ? getExercise(lv.langId, lv.topicId, lv.exId) : null;

  const langLabel = def.name;
  const topicLabel = pick(tp.title);
  const exLabel = ex ? ` · ${pick(ex.title)}` : '';
  const lastVisitText = t('home.lastVisited')
    .replace('{lang}', langLabel)
    .replace('{topic}', topicLabel)
    .replace('{ex}', exLabel);
  const href = ex
    ? `#/lang/${lv.langId}/topic/${lv.topicId}/ex/${lv.exId}`
    : `#/lang/${lv.langId}/topic/${lv.topicId}`;

  return `
    <a class="continue-card" href="${href}">
      <span class="cc-icon" aria-hidden="true">▶</span>
      <div>
        <div class="cc-title">${t('home.continueLearning')}</div>
        <div class="cc-sub">${lastVisitText}</div>
      </div>
      <span class="cc-arrow" aria-hidden="true">›</span>
    </a>`;
}

export function renderHome(app, langDefs) {
  const cards = Object.entries(langDefs).map(([id, def]) => {
    const st = langStats(id, progressGet);
    const started = st.passed > 0;
    const pct = st.pct;
    return `
      <a class="lang-card" href="#/lang/${id}" style="--lc:${META[id] ? META[id].accent : 'var(--accent)'}">
        ${started ? `<span class="lc-badge ${pct === 100 ? '' : 'partial'}">${pct}%</span>` : ''}
        <div class="lc-logo">${META[id] ? META[id].logo : '⌨'}</div>
        <div class="lc-name">${def.name}</div>
        <div class="lc-desc">${pick(def.description)}</div>
        <div class="lc-meta">
          <span>📘 ${st.topics} ${t('home.topicsUnit')}</span>
          <span>🎯 ${st.exercises} ${t('home.exercisesUnit')}</span>
          <span>✓ ${st.passed}</span>
        </div>
      </a>`;
  }).join('');

  app.innerHTML = `
    <div class="page-head">
      <h1 class="page-title">${t('home.title')}</h1>
      <p class="page-sub">${t('home.subtitle')}</p>
    </div>
    ${buildContinueCard()}
    <div class="lang-grid">${cards}</div>
  `;
}
