// homeView.js — 语言选择页
import { t, pick } from '../i18n.js';
import { langStats } from '../content.js';
import { progressGet } from '../progress.js';

const META = {
  java:   { logo: '☕', accent: '#f89820' },
  c:      { logo: '🇨', accent: '#5c8dbc' },
  cpp:    { logo: '➕', accent: '#649ad2' },
  python: { logo: '🐍', accent: '#ffd43b' },
};

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
    <div class="lang-grid">${cards}</div>
  `;
}
