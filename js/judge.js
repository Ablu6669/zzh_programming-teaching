// judge.js — 判题：stdout 归一化比对 + 行级 diff

/** 归一化：\r\n→\n → 每行 trimEnd → 去尾部空行 → 整体 trim（保留行内前导空格） */
export function normalizeOutput(s) {
  if (s === null || s === undefined) return '';
  let lines = String(s).replace(/\r\n/g, '\n').split('\n');
  lines = lines.map((l) => l.replace(/[ \t]+$/, ''));
  while (lines.length && lines[lines.length - 1] === '') lines.pop();
  return lines.join('\n').trim();
}

/** 比对，返回 { pass, expected[], actual[], lineResults[] } */
export function judge(expectedOutput, actualOutput) {
  const expected = normalizeOutput(expectedOutput).split('\n');
  const actual = normalizeOutput(actualOutput).split('\n');
  const n = Math.max(expected.length, actual.length);
  const lineResults = [];
  let pass = true;
  for (let i = 0; i < n; i++) {
    const e = i < expected.length ? expected[i] : null;
    const a = i < actual.length ? actual[i] : null;
    const ok = e === a;
    if (!ok) pass = false;
    lineResults.push({
      expected: e === null ? '' : e,
      actual: a === null ? '' : a,
      ok,
      missing: e !== null && a === null,
      extra: e === null && a !== null,
    });
  }
  // 空输出特殊处理
  if (expected.length === 1 && expected[0] === '') { expected.length = 0; }
  if (actual.length === 1 && actual[0] === '') { actual.length = 0; }
  return { pass, expected, actual, lineResults };
}
