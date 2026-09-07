// check_i18n.mjs — i18n 完整性三重校验
// 1) i18n/zh.js 与 en.js 键集合完全一致
// 2) 代码中 t('key') 与 HTML 中 data-i18n="key" 的引用都存在于词典
// 3) 内容文件中所有 {zh, en} 双语对两份均非空
// 用法: node tools/check_i18n.mjs
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
let errors = 0;
const err = (msg) => { errors++; console.log('  ✗ ' + msg); };

// ---- 1) 词典键集合 diff ----
console.log('[1] 词典键集合一致性');
const zh = (await import('file://' + join(ROOT, 'i18n/zh.js'))).default;
const en = (await import('file://' + join(ROOT, 'i18n/en.js'))).default;
const zhKeys = new Set(Object.keys(zh));
const enKeys = new Set(Object.keys(en));
for (const k of zhKeys) if (!enKeys.has(k)) err(`en.js 缺少键: ${k}`);
for (const k of enKeys) if (!zhKeys.has(k)) err(`zh.js 缺少键: ${k}`);
console.log(`  zh.js ${zhKeys.size} 键, en.js ${enKeys.size} 键`);

// ---- 2) 引用完整性 ----
console.log('[2] t()/data-i18n 引用完整性');
const refFiles = readdirSync(join(ROOT, 'js'), { recursive: true })
  .filter(f => f.endsWith('.js'))
  .map(f => join(ROOT, 'js', f));
refFiles.push(join(ROOT, 'index.html'));
const usedKeys = new Set();
for (const f of refFiles) {
  const text = readFileSync(f, 'utf8');
  for (const m of text.matchAll(/\bt\(\s*'([^']+)'/g)) usedKeys.add(m[1]);
  for (const m of text.matchAll(/data-i18n="([^"]+)"/g)) usedKeys.add(m[1]);
}
console.log(`  共发现 ${usedKeys.size} 个被引用的键`);
for (const k of usedKeys) {
  if (!zhKeys.has(k)) err(`zh.js 缺少被引用的键: ${k}`);
  if (!enKeys.has(k)) err(`en.js 缺少被引用的键: ${k}`);
}

// 未被引用的词典键（仅提示）
const unused = [...zhKeys].filter(k => !usedKeys.has(k));
if (unused.length) console.log(`  (提示) 未被引用的键 ${unused.length} 个: ${unused.slice(0, 10).join(', ')}${unused.length > 10 ? ' …' : ''}`);

// ---- 3) 内容双语完整性 ----
console.log('[3] 内容文件双语对完整性');
const langIds = ['python', 'c', 'cpp', 'java'];
for (const lang of langIds) {
  const def = (await import('file://' + join(ROOT, 'content', lang + '.js?v=' + Date.now() + Math.random()))).default;
  let pairs = 0, bad = 0;
  const walk = (node, path) => {
    if (node === null || typeof node !== 'object') return;
    const ks = Object.keys(node);
    if (ks.length === 2 && 'zh' in node && 'en' in node) {
      pairs++;
      const z = node.zh, e = node.en;
      if (typeof z !== 'string' || !z.trim() || typeof e !== 'string' || !e.trim()) {
        bad++;
        err(`${lang}.js ${path}: zh/en 存在空值 (zh=${JSON.stringify(z).slice(0, 40)}, en=${JSON.stringify(e).slice(0, 40)})`);
      }
      return; // {zh,en} 叶子节点不再深入
    }
    for (const k of ks) walk(node[k], path ? path + '.' + k : k);
  };
  walk(def, '');
  // 每道题必须有分级提示 hints（兼容旧版单个 hint）
  let hintCount = 0;
  for (const topic of def.topics) {
    for (const ex of topic.exercises) {
      if (Array.isArray(ex.hints) && ex.hints.length >= 1) hintCount++;
      else if (ex.hint && typeof ex.hint === 'object') hintCount++; // 旧版字段
      else err(`${lang}.js ${topic.id}/${ex.id}: 缺少 hints 数组（分级提示）`);
    }
  }
  console.log(`  ${lang}.js: ${pairs} 个双语对, ${bad} 个异常, ${def.topics.length} 个知识点, ` +
    `${def.topics.reduce((s, t) => s + t.exercises.length, 0)} 道题, ${hintCount} 题有分级提示`);
}

console.log(errors === 0 ? '\n✅ i18n 校验全部通过' : `\n❌ 共 ${errors} 处问题`);
process.exit(errors === 0 ? 0 : 1);
