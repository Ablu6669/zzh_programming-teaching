// verify_content.mjs — 用 Godbolt 在线执行实测每道题的 solution，比对 expectedOutput
// 用法: node tools/verify_content.mjs [语言id...]（默认全部）
import { runCode } from '../js/runner/godbolt.js';

const BASE = new URL('file:///E:/workbuddy/2026-09-07-18-45-52/content/');
const langs = process.argv.slice(2).length ? process.argv.slice(2) : ['python', 'c', 'cpp', 'java'];

function normalizeOutput(s) {
  if (s === null || s === undefined) return '';
  let lines = String(s).replace(/\r\n/g, '\n').split('\n');
  lines = lines.map((l) => l.replace(/[ \t]+$/, ''));
  while (lines.length && lines[lines.length - 1] === '') lines.pop();
  return lines.join('\n').trim();
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let pass = 0, fail = 0;
const failures = [];

for (const lang of langs) {
  const def = (await import(BASE + lang + '.js?v=' + Date.now() + Math.random())).default;
  for (const topic of def.topics) {
    for (const ex of topic.exercises) {
      const tag = `${lang}/${topic.id}/${ex.id}`;
      process.stdout.write(`RUN  ${tag} ... `);
      try {
        const result = await runCode(def, ex.solution);
        if (result.kind !== 'success') {
          fail++; failures.push({ tag, kind: result.kind, detail: (result.compileStderr || result.stderr || '').slice(0, 300) });
          console.log(`FAIL(${result.kind})`);
        } else {
          const got = normalizeOutput(result.stdout);
          const want = normalizeOutput(ex.expectedOutput);
          if (got === want) { pass++; console.log('PASS'); }
          else {
            fail++; failures.push({ tag, kind: 'mismatch', detail: `want=${JSON.stringify(want)} got=${JSON.stringify(got)}` });
            console.log('MISMATCH');
          }
        }
      } catch (err) {
        fail++; failures.push({ tag, kind: err.code || 'error', detail: err.message || '' });
        console.log(`ERROR(${err.code || err.message})`);
        await sleep(3000);
      }
      await sleep(400);
    }
  }
}

console.log('\n========== RESULT ==========');
console.log(`PASS: ${pass}  FAIL: ${fail}`);
if (failures.length) {
  console.log('\nFailures:');
  for (const f of failures) {
    console.log(`\n[${f.tag}] ${f.kind}\n  ${f.detail}`);
  }
  process.exit(1);
}
