# 批 2 内容规范 — hints 5 档渐进提示 + 精选解法讲解（solutionNote）

> 适用：`content/python.js`、`content/c.js`、`content/cpp.js`、`content/java.js`
> 每个文件：11 个知识点（topic）× 每 topic 2 道练习（exercise）= 22 题
> 参照实现：`content/python.js` 内任意一道已改造完成的题目（若尚无一题完成，则以下文规范为准）

## 一、本次只允许改两处

对**每道 exercise**：

1. 把 `hints` 数组从当前的 3 条 `{zh, en}` 扩写为 **5 条** `{zh, en}`（渐进式，见第二节档位定义）。
2. 在 `solution:` 那一行**之后**新增一行字段：
   ```js
   solutionNote: { zh: '中文讲解', en: 'English explanation' },
   ```

**严禁改动**（一个字都不能动）：`id`、`title`、`prompt`、`starter`、`expectedOutput`、`solution`、`tests`，以及 topic 的 `lecture`、`examples`、顶层 `name/description/entryNote/localGuide/engine/fileName/playgroundStarter`。
`solution` 是线上判题与 Godbolt 实测的基准代码，改动会导致全站判定失真。

## 二、hints 5 档档位定义（从抽象到具体逐步收敛）

每档是一条 `{zh, en}`，**5 条彼此不重复**，从第 1 档到第 5 档逐级揭开答案：

| 档位 | 给到什么 | 要求 |
|---|---|---|
| 提示 1 | 概念定位 | 这题在练哪个概念、先想哪一步。不点具体函数名/语法（可点概念名）。半句话到一句话。 |
| 提示 2 | 拆解思路 | 把问题拆成几步，指出第一个关键动作或决策。仍不贴代码。 |
| 提示 3 | 语法工具 | 点出该用的语法/函数/运算符及正确形态；可给**一行以内**的短代码示例（用反引号包住）。 |
| 提示 4 | 骨架与易错点 | 代码骨架或关键行（反引号），并提醒 1–2 个易错点（大小写、括号/分号、换行、引号、类型、多余输出等）。 |
| 提示 5 | 最深提示 | **允许给出接近完整、可直接参考的答案代码**（放在反引号代码块里），后跟一句“为什么这样写/注意什么”。这是学习者连点 5 次才看得到的保底。 |

写作语气：引导、鼓励、零基础友好；避免说教；不与讲解页重复大段文字。
语言特性必须贴合目标语言：Python（`print`/`input`/`#`）、C（`printf`/`scanf`）、C++（`cout`/`cin`）、Java（`System.out.println`/`Scanner`、入口 `class Main`）。

## 三、solutionNote 精选解法讲解

紧跟在 `solution` 后的双语讲解，**中文 60–150 字，英文对应长度**，内容：
1. 核心思路一句话（这个解为什么对）；
2. 1–2 个关键点或易错点；
3. 如有更“优雅”的替代写法，用**一句话文字描述**带过（例如“也可以改成 for 循环”）——**不要**贴第二份完整代码。

讲解必须与该题 `solution` 代码一致，不得讲别的写法算出的不同结果。

## 四、文件书写硬约束（防语法错误，务必遵守）

- 文件是 ES Module（`export default {…}`），所有字符串用**英文单引号**包裹。
- 正文中要展示代码/符号时用反引号 `` ` `` 包住（前端会渲染成行内代码）。反引号在单引号字符串里是安全字符，无需转义。
- **禁止**在单引号字符串内部出现裸单引号 `'`；若想表达英文撇号/所有格，改用中文引号「」或把该词放进反引号内（反引号内可用双引号）。
- 每条 hint、每条 note 一律写**单行字符串**，不要引入字面换行、不要用 `\n` 拼接多行（短代码片段放反引号内即可）。
- 缩进：exercise 字段本身缩进 10 空格（视文件实际，保持与相邻字段一致），hints 数组元素与 solutionNote 对齐到同一缩进层级。
- 格式示例（参照目标文件中现有 exercise 结构）：
  ```js
  hints: [
    { zh: '提示一中文……', en: 'Hint one text…' },
    { zh: '提示二中文……', en: 'Hint two text…' },
    { zh: '提示三中文……', en: 'Hint three text…' },
    { zh: '提示四中文……', en: 'Hint four text…' },
    { zh: '提示五中文……', en: 'Hint five text…' },
  ],
  solution: '...',
  solutionNote: { zh: '讲解中文……', en: 'Explanation…' },
  ```
- 中英文都要**完整**，不许只写一半或互留空白；中文简体、英文通顺。

## 五、完成后的自检（必须全部通过）

```bash
node tools/_batch2_check.mjs <python|c|cpp|java>
```

该脚本会校验：文件可正常 import；每道题 `hints` 恰为 5 条且每条 `{zh,en}` 非空；`solutionNote` 存在且双语非空；`solution/expectedOutput/starter/prompt` 等关键字段未被破坏。

再跑 `git diff --stat` 确认改动行数合理（只应新增/改写 hints 与 solutionNote 相关行，其余字段的行不应出现 diff）。若 diff 中出现 `starter:`、`expectedOutput:`、`solution:` 等行的内容变化，立即用 `git checkout -- content/<file>.js` 还原整个文件后重做，只允许动 hints 与 solutionNote。

**验收口径**：11 个 topic × 2 题共 22 题全部完成，缺一题都不算完成。
