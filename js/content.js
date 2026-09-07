// content.js — 四门语言内容数据加载与查询
import python from '../content/python.js';
import c from '../content/c.js';
import cpp from '../content/cpp.js';
import java from '../content/java.js';

const LANGS = { python, c, cpp, java };

export function getLangIds() { return Object.keys(LANGS); }

export function getLangDef(id) { return LANGS[id] || null; }

export function getTopic(langId, topicId) {
  const def = getLangDef(langId);
  if (!def) return null;
  return def.topics.find((tp) => tp.id === topicId) || null;
}

export function getExercise(langId, topicId, exId) {
  const tp = getTopic(langId, topicId);
  if (!tp) return null;
  return tp.exercises.find((ex) => ex.id === exId) || null;
}

/** 统计：总题数 / 已通过题数 */
export function langStats(langId, progressGet) {
  const def = getLangDef(langId);
  if (!def) return { topics: 0, exercises: 0, passed: 0, pct: 0 };
  let exercises = 0, passed = 0;
  for (const tp of def.topics) {
    for (const ex of tp.exercises) {
      exercises++;
      if (progressGet(langId, tp.id, ex.id)) passed++;
    }
  }
  return { topics: def.topics.length, exercises, passed, pct: exercises ? Math.round(passed / exercises * 100) : 0 };
}

/** 知识点状态：done（全部题通过）/ active（至少一题通过）/ todo */
export function topicStatus(langId, topic, progressGet) {
  const total = topic.exercises.length;
  let passed = 0;
  for (const ex of topic.exercises) if (progressGet(langId, topic.id, ex.id)) passed++;
  if (passed >= total && total > 0) return 'done';
  if (passed > 0) return 'active';
  return 'todo';
}
