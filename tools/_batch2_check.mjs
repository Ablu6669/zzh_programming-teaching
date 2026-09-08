// _batch2_check.mjs — 批 2 内容改造自检：hints 恰 5 条 + solutionNote 双语非空 + 关键字段未被破坏
// 用法: node tools/_batch2_check.mjs <python|c|cpp|java>
import { fileURLToPath } from 'node:url';

const lang = process.argv[2];
if (!lang) { console.error('用法: node tools/_batch2_check.mjs <python|c|cpp|java>'); process.exit(1); }
const BASE = fileURLToPath(new URL('../content/', import.meta.url));
let errors = 0;
const err = (m) => { errors++; console.log('  ✗ ' + m); };

const def = (await import('file://' + BASE.replace(/\\/g, '/') + lang + '.js?v=' + Date.now() + Math.random())).default;

let total = 0;
for (const topic of def.topics) {
  for (const ex of topic.exercises) {
    const tag = `${lang}/${topic.id}/${ex.id}`;
    total++;
    // hints 恰为 5 条且每条双语非空
    if (!Array.isArray(ex.hints)) { err(`${tag}: hints 缺失`); continue; }
    if (ex.hints.length !== 5) err(`${tag}: hints 长度 ${ex.hints.length}（应为 5）`);
    ex.hints.forEach((h, i) => {
      if (!h || typeof h.zh !== 'string' || !h.zh.trim() || typeof h.en !== 'string' || !h.en.trim())
        err(`${tag}: hints[${i}] 双语不全`);
    });
    // solutionNote 双语非空
    if (!ex.solutionNote || typeof ex.solutionNote.zh !== 'string' || !ex.solutionNote.zh.trim() ||
        typeof ex.solutionNote.en !== 'string' || !ex.solutionNote.en.trim())
      err(`${tag}: solutionNote 缺失或双语不全`);
    // 关键字段未被破坏
    if (typeof ex.solution !== 'string' || !ex.solution.trim()) err(`${tag}: solution 被破坏`);
    if (typeof ex.expectedOutput !== 'string') err(`${tag}: expectedOutput 被破坏`);
    if (typeof ex.starter !== 'string') err(`${tag}: starter 被破坏`);
    if (!ex.prompt || typeof ex.prompt.zh !== 'string' || typeof ex.prompt.en !== 'string') err(`${tag}: prompt 被破坏`);
    if (!ex.title || !ex.title.zh || !ex.title.en) err(`${tag}: title 被破坏`);
  }
}
console.log(`${lang}.js: 共 ${total} 题检查完毕`);
if (errors === 0) console.log(`✅ ${lang} 批 2 改造自检全部通过（hints×5 + solutionNote 齐全，关键字段完好）`);
else { console.log(`❌ ${errors} 处问题`); process.exit(1); }
