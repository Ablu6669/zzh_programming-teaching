// roadmapView.js — 学习路径节点图（含解锁 + 进度可视化）
import { t, pick } from '../i18n.js';
import { getLangDef, langStats } from '../content.js';
import { progressGet } from '../progress.js';

const STATUS_ICON = { done: '✓', active: '◐', todo: '○' };

/** topic 是否全部完成（用于解锁判定） */
function isTopicDone(langId, tp) {
  if (!tp.exercises.length) return true;
  return tp.exercises.every((ex) => progressGet(langId, tp.id, ex.id));
}

export function renderRoadmap(app, langId) {
  const def = getLangDef(langId);
  if (!def) { renderNotFound(app); return; }

  const st = langStats(langId, progressGet);
  const topics = def.topics;

  // 第一个非 done 的 topic 作为「从这里开始」徽章
  const startIdx = topics.findIndex((tp) => !isTopicDone(langId, tp));

  // 渲染节点 + 节点间箭头
  const blocks = [];
  topics.forEach((tp, i) => {
    const locked = i > 0 && !isTopicDone(langId, topics[i - 1]);
    const passed = tp.exercises.filter((ex) => progressGet(langId, tp.id, ex.id)).length;
    const done = isTopicDone(langId, tp);
    const status = done ? 'done' : (passed > 0 ? 'active' : 'todo');
    const stars = '★'.repeat(tp.difficulty || 1);
    const pct = tp.exercises.length ? Math.round(passed / tp.exercises.length * 100) : 0;
    const startBadge = (i === startIdx) ? `<span class="start-here-badge">${t('roadmap.startHere')}</span>` : '';

    // 节点间箭头（i > 0 时才有）
    if (i > 0) {
      const prevDone = isTopicDone(langId, topics[i - 1]);
      blocks.push(
        `<div class="path-arrow${prevDone ? ' unlocked' : ' locked'}" aria-hidden="true"></div>`
      );
    }

    if (locked) {
      const prevTitle = pick(topics[i - 1].title);
      blocks.push(`
        <div class="topic-node locked" data-topic-id="${tp.id}" data-locked-hint="${t('roadmap.lockedHint').replace('{prev}', prevTitle)}">
          <div class="tn-icon" aria-hidden="true">🔒</div>
          <div class="tn-body">
            <div class="tn-title">${i + 1}. ${pick(tp.title)}</div>
            <div class="tn-sub">${t('roadmap.locked')} · ${stars}</div>
          </div>
          <div class="lock-tip">${t('roadmap.lockedHint').replace('{prev}', prevTitle)}</div>
        </div>`);
    } else {
      blocks.push(`
        <a class="topic-node ${status}" href="#/lang/${langId}/topic/${tp.id}">
          <div class="tn-icon" aria-hidden="true">${STATUS_ICON[status]}</div>
          <div class="tn-body">
            <div class="tn-title">${i + 1}. ${pick(tp.title)}${startBadge}</div>
            <div class="tn-sub">🎯 ${passed}/${tp.exercises.length} ${t('roadmap.exercisesUnit')} · ${stars}</div>
            <div class="tn-progress-bar"><div class="tn-progress-fill" style="width:${pct}%"></div></div>
          </div>
        </a>`);
    }
  });

  // 顶部总进度摘要
  const summary = t('roadmap.summary')
    .replace('{topics}', topics.length)
    .replace('{passed}', st.passed)
    .replace('{total}', st.exercises);

  app.innerHTML = `
    <div class="roadmap-page">
      <div class="crumb"><a href="#/">${t('nav.home')}</a> › ${def.name}</div>
      <div class="roadmap-head">
        <h1 class="page-title">${def.name} · ${t('roadmap.title')}</h1>
        <p class="page-sub">${pick(def.description)}</p>
      </div>
      <div class="roadmap-summary">
        <span>${summary}</span>
        <div class="progress-track"><div class="progress-fill" style="width:${st.pct}%"></div></div>
        <span class="progress-num">${st.pct}%</span>
      </div>
      <div class="roadmap-grid">${blocks.join('')}</div>
    </div>
  `;

  // 锁定节点点击 → 临时显示 tooltip（避免 sandbox iframe 拦截 alert）
  app.querySelectorAll('.topic-node.locked').forEach((el) => {
    let tipTimer = null;
    el.addEventListener('click', (ev) => {
      ev.preventDefault();
      el.classList.add('lock-tip-visible');
      clearTimeout(tipTimer);
      tipTimer = setTimeout(() => el.classList.remove('lock-tip-visible'), 2200);
    });
  });
}

export function renderNotFound(app) {
  app.innerHTML = `<div class="empty-state">404 · <span data-i18n="nav.notFound">页面不存在</span></div>`;
}
