// python.js — Python 学习内容（11 知识点 × 2 题双语）
// Schema 说明见 tools/check_i18n.mjs；所有 expectedOutput 已通过 Godbolt 在线实测验证。
export default {
  id: 'python',
  name: 'Python',
  description: {
    zh: '简洁优雅的通用语言，语法接近自然语言，最适合作为第一门编程语言。',
    en: 'A clean, readable general-purpose language — an ideal first programming language.',
  },
  engine: { compiler: 'python312' },
  fileName: 'main.py',
  playgroundStarter: '# 在这里写代码，点「运行」查看输出\nprint("Hello, Python!")\n',
  entryNote: {
    zh: 'python main.py',
    en: 'python main.py',
  },
  localGuide: {
    zh: 'python3 main.py',
    en: 'python3 main.py',
  },
  topics: [
    // ================= 1. Hello World =================
    {
      id: 'hello',
      title: { zh: '第一个程序', en: 'Your First Program' },
      difficulty: 1,
      lecture: {
        zh: `## 从 print() 开始

Python 程序从上到下逐行执行。**print()** 是最常用的输出函数，把内容打印到屏幕：

\`\`\`python
print("Hello, World!")
\`\`\`

### 几个要点

- 字符串用**单引号或双引号**包裹，两者等价：\`'hi'\` 与 \`"hi"\` 相同
- 每个 \`print()\` 输出后自动**换行**
- 多个值用逗号分隔，输出时中间会补一个空格：
  \`print(1, 2, 3)\` 输出 \`1 2 3\`
- 注释以 \`#\` 开头，解释器会忽略这一行剩余内容

### 文件就是程序

把代码保存进 \`main.py\`，运行 \`python main.py\` 即可执行。本站的「运行」按钮会替你把代码送到云端执行并返回输出。

> 在右侧「实战」标签完成两道练习：先打印两行问候，再用 print 画一个三角形。`,
        en: `## Start with print()

Python programs run top to bottom, one line at a time. **print()** is the most common output function:

\`\`\`python
print("Hello, World!")
\`\`\`

### Key points

- Strings are wrapped in **single or double quotes** — \`'hi'\` and \`"hi"\` are identical
- Each \`print()\` appends a **newline** by default
- Separate multiple values with commas and they are printed with spaces between them:
  \`print(1, 2, 3)\` outputs \`1 2 3\`
- Comments start with \`#\`; the rest of the line is ignored

### A file is a program

Save your code into \`main.py\` and run \`python main.py\`. The Run button on this site sends your code to a cloud sandbox and shows the output.

> Head to the Exercises tab: print two greetings, then draw a triangle with print().`,
      },
      examples: [
        {
          caption: { zh: '你好，世界', en: 'Hello, world' },
          code: 'print("Hello, World!")\nprint("你好，Python")\n',
        },
        {
          caption: { zh: '逗号分隔输出多个值', en: 'Multiple values separated by commas' },
          code: 'name = "Python"\nversion = 3.10\nprint(name, version)\n# 输出: Python 3.1（注意：3.10 会被当作数字 3.1）\nprint("name =", name)\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '打印两句问候', en: 'Print two greetings' },
          prompt: {
            zh: '使用两次 \`print()\`，依次输出下面两行（注意大小写和标点）：\n\n\`\`\`\nHello, World!\nI am learning Python\n\`\`\`',
            en: 'Use \`print()\` twice to output these two lines (watch capitalization and punctuation):\n\n\`\`\`\nHello, World!\nI am learning Python\n\`\`\`',
          },
          starter: '# 练习 1：输出两行文字\n# 在下面写你的代码\n\n',
          expectedOutput: 'Hello, World!\nI am learning Python\n',
          hint: {
            zh: '每次调用 \`print()\` 自动换行，所以直接写两个 print 即可。',
            en: 'Each \`print()\` ends with a newline, so two print calls will do.',
          },
          solution: 'print("Hello, World!")\nprint("I am learning Python")\n',
        },
        {
          id: 'ex2',
          title: { zh: '打印三角形', en: 'Print a triangle' },
          prompt: {
            zh: '用三次 \`print()\` 输出一个左对齐的三角形：\n\n\`\`\`\n*\n**\n***\n\`\`\`',
            en: 'Use three \`print()\` calls to output a left-aligned triangle:\n\n\`\`\`\n*\n**\n***\n\`\`\`',
          },
          starter: '# 练习 2：输出三角形\n\n',
          expectedOutput: '*\n**\n***\n',
          hint: {
            zh: '\`print("*")\`、\`print("**")\`、\`print("***")\`。',
            en: '\`print("*")\`, \`print("**")\`, \`print("***")\`.',
          },
          solution: 'print("*")\nprint("**")\nprint("***")\n',
        },
      ],
    },

    // ================= 2. 变量与数据类型 =================
    {
      id: 'variables',
      title: { zh: '变量与数据类型', en: 'Variables & Data Types' },
      difficulty: 1,
      lecture: {
        zh: `## 变量：给值起名字

变量不需要声明类型，赋值即创建：

\`\`\`python
age = 20          # int（整数）
price = 9.99      # float（浮点数）
name = "Alice"    # str（字符串）
is_ok = True      # bool（布尔值，True / False）
\`\`\`

### 常用类型

| 类型 | 例子 | 说明 |
|---|---|---|
| \`int\` | \`42\`, \`-7\` | 任意精度整数 |
| \`float\` | \`3.14\`, \`2e5\` | 64 位浮点数 |
| \`str\` | \`"hello"\` | 文本，不可变序列 |
| \`bool\` | \`True\`, \`False\` | 逻辑值 |

### type() 与类型转换

\`\`\`python
x = "123"
print(type(x))        # <class 'str'>
n = int(x)            # 字符串 → 整数
s = str(456)          # 整数 → 字符串
\`\`\`

### f-string 格式化（推荐）

\`\`\`python
name = "Bob"
age = 18
print(f"{name} is {age} years old")   # Bob is 18 years old
\`\`\`

> 动态类型 ≠ 随意混用：\`"3" + 5\` 会报错，必须先转换类型。`,
        en: `## Variables: naming values

No type declaration needed — assignment creates the variable:

\`\`\`python
age = 20          # int
price = 9.99      # float
name = "Alice"    # str
is_ok = True      # bool (True / False)
\`\`\`

### Common types

| Type | Example | Notes |
|---|---|---|
| \`int\` | \`42\`, \`-7\` | arbitrary-precision integers |
| \`float\` | \`3.14\`, \`2e5\` | 64-bit floating point |
| \`str\` | \`"hello"\` | text, immutable sequence |
| \`bool\` | \`True\`, \`False\` | logical values |

### type() and conversions

\`\`\`python
x = "123"
print(type(x))        # <class 'str'>
n = int(x)            # string -> int
s = str(456)          # int -> string
\`\`\`

### f-string formatting (recommended)

\`\`\`python
name = "Bob"
age = 18
print(f"{name} is {age} years old")   # Bob is 18 years old
\`\`\`

> Dynamic typing ≠ mixing freely: \`"3" + 5\` raises an error — convert first.`,
      },
      examples: [
        {
          caption: { zh: '变量与 f-string', en: 'Variables and f-strings' },
          code: 'width = 7\nheight = 4\nprint(f"area = {width * height}")\nprint(f"type of width: {type(width)}")\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '计算矩形面积', en: 'Rectangle area' },
          prompt: {
            zh: '定义变量 \`width = 7\` 和 \`height = 4\`，计算面积并**只输出一个数**（矩形的面积）。',
            en: 'Define \`width = 7\` and \`height = 4\`, compute the area and **print just the number** (the area).',
          },
          starter: '# 练习 1：计算并输出面积\nwidth = 7\nheight = 4\n# 在下面计算并输出\n\n',
          expectedOutput: '28\n',
          hint: {
            zh: '\`print(width * height)\`。',
            en: '\`print(width * height)\`.',
          },
          solution: 'width = 7\nheight = 4\nprint(width * height)\n',
        },
        {
          id: 'ex2',
          title: { zh: '摄氏转华氏', en: 'Celsius to Fahrenheit' },
          prompt: {
            zh: '变量 \`c = 37\` 表示摄氏温度。公式：\`f = c * 9 / 5 + 32\`。输出 \`f\` 的值（应为 \`98.6\`）。',
            en: 'Variable \`c = 37\` is a Celsius temperature. Formula: \`f = c * 9 / 5 + 32\`. Print the value of \`f\` (should be \`98.6\`).',
          },
          starter: '# 练习 2：摄氏 → 华氏\nc = 37\n# 在下面计算并输出\n\n',
          expectedOutput: '98.6\n',
          hint: {
            zh: '直接 \`print(f)\`，Python 会输出 98.6。',
            en: 'Just \`print(f)\` — Python prints 98.6.',
          },
          solution: 'c = 37\nf = c * 9 / 5 + 32\nprint(f)\n',
        },
      ],
    },

    // ================= 3. 运算符 =================
    {
      id: 'operators',
      title: { zh: '运算符与表达式', en: 'Operators & Expressions' },
      difficulty: 1,
      lecture: {
        zh: `## 算术运算符

| 运算符 | 含义 | 例子 | 结果 |
|---|---|---|---|
| \`+\` \`-\` \`*\` | 加减乘 | \`3 * 4\` | \`12\` |
| \`/\` | 除（总是 float） | \`10 / 4\` | \`2.5\` |
| \`//\` | 整除（向下取整） | \`10 // 4\` | \`2\` |
| \`%\` | 取余 | \`10 % 4\` | \`2\` |
| \`**\` | 幂 | \`2 ** 10\` | \`1024\` |

### 注意 / 与 // 的区别

\`10 / 4 = 2.5\`，\`10 // 4 = 2\`。对负数：\`-10 // 4 = -3\`（向下取整，不是 -2）。

### 比较与逻辑运算符

- 比较：\`==\`、\`!=\`、\`<\`、\`>\`、\`<=\`、\`>=\`，结果是 \`True\` / \`False\`
- 逻辑：\`and\`、\`or\`、\`not\`

\`\`\`python
print(3 > 2 and 5 < 1)   # False
print(not True)          # False
\`\`\`

### 优先级

先乘除后加减，括号最优先。不确定时**加括号**，可读性更好。`,
        en: `## Arithmetic operators

| Operator | Meaning | Example | Result |
|---|---|---|---|
| \`+\` \`-\` \`*\` | add/sub/mul | \`3 * 4\` | \`12\` |
| \`/\` | division (always float) | \`10 / 4\` | \`2.5\` |
| \`//\` | floor division | \`10 // 4\` | \`2\` |
| \`%\` | remainder | \`10 % 4\` | \`2\` |
| \`**\` | power | \`2 ** 10\` | \`1024\` |

### / vs //

\`10 / 4 = 2.5\`, \`10 // 4 = 2\`. For negatives: \`-10 // 4 = -3\` (floored, not -2).

### Comparison & logical operators

- Comparison: \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\` → \`True\` / \`False\`
- Logical: \`and\`, \`or\`, \`not\`

\`\`\`python
print(3 > 2 and 5 < 1)   # False
print(not True)          # False
\`\`\`

### Precedence

Multiply/divide bind tighter than add/subtract; parentheses win. When in doubt, **add parentheses**.`,
      },
      examples: [
        {
          caption: { zh: '整除与取余', en: 'Floor division and remainder' },
          code: 'a, b = 17, 5\nprint(a // b)   # 3\nprint(a % b)    # 2\nprint(a / b)    # 3.4\nprint(2 ** 8)   # 256\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '拆分秒数', en: 'Split seconds' },
          prompt: {
            zh: '变量 \`total = 3775\` 是总秒数。分别输出分钟数和剩余秒数，**每个数一行**（即输出 62 和 55 两行）。',
            en: 'Variable \`total = 3775\` is a number of seconds. Print the number of whole minutes and the leftover seconds, **one number per line** (i.e. output 62 and then 55).',
          },
          starter: '# 练习 1：3775 秒 = ? 分 ? 秒\ntotal = 3775\n# 分钟 = total // 60，剩余秒 = total % 60\n\n',
          expectedOutput: '62\n55\n',
          hint: {
            zh: '\`print(total // 60)\` 和 \`print(total % 60)\`。',
            en: '\`print(total // 60)\` and \`print(total % 60)\`.',
          },
          solution: 'total = 3775\nprint(total // 60)\nprint(total % 60)\n',
        },
        {
          id: 'ex2',
          title: { zh: '交换变量', en: 'Swap variables' },
          prompt: {
            zh: '变量 \`a = 3\`、\`b = 8\`。交换两者的值后，用**一次 print** 输出 \`a b\`（输出应为 \`8 3\`）。',
            en: 'Variables \`a = 3\`, \`b = 8\`. Swap their values, then print \`a b\` with **one print** (output should be \`8 3\`).',
          },
          starter: '# 练习 2：交换 a 和 b\na = 3\nb = 8\n# 在下面交换并输出\n\n',
          expectedOutput: '8 3\n',
          hint: {
            zh: 'Python 特性写法：\`a, b = b, a\`；然后 \`print(a, b)\`。',
            en: 'Pythonic way: \`a, b = b, a\`; then \`print(a, b)\`.',
          },
          solution: 'a = 3\nb = 8\na, b = b, a\nprint(a, b)\n',
        },
      ],
    },

    // ================= 4. 条件分支 =================
    {
      id: 'conditionals',
      title: { zh: '条件分支', en: 'Conditionals' },
      difficulty: 1,
      lecture: {
        zh: `## if / elif / else

\`\`\`python
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"
print(grade)   # B
\`\`\`

### 语法要点

- 条件后面要**冒号 \`:\`**，代码块用**缩进**（4 空格）表示
- 同一代码块缩进必须完全一致，多一格少一格都会报错
- \`elif\` 是 else if 的缩写，可以有多个；\`else\` 最多一个且放最后

### 嵌套与组合条件

\`\`\`python
age = 20
has_ticket = True
if age >= 18 and has_ticket:
    print("可以入场")
\`\`\`

> Python 用缩进表达代码块，这是它最鲜明的特征——没有大括号。`,
        en: `## if / elif / else

\`\`\`python
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
else:
    grade = "C"
print(grade)   # B
\`\`\`

### Syntax notes

- A **colon \`:\`** ends each condition line; the block is marked by **indentation** (4 spaces)
- Every line in the same block must be indented identically
- \`elif\` (short for else if) may appear many times; \`else\` at most once, at the end

### Nesting & combined conditions

\`\`\`python
age = 20
has_ticket = True
if age >= 18 and has_ticket:
    print("可以入场")
\`\`\`

> Python uses indentation instead of braces to define blocks — its most distinctive trait.`,
      },
      examples: [
        {
          caption: { zh: '判断奇偶', en: 'Even or odd' },
          code: 'n = 7\nif n % 2 == 0:\n    print("even")\nelse:\n    print("odd")\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '成绩等级', en: 'Grade a score' },
          prompt: {
            zh: '变量 \`score = 85\`。按规则输出等级（一个字母）：≥90 为 \`A\`，≥80 为 \`B\`，≥70 为 \`C\`，≥60 为 \`D\`，否则 \`F\`。',
            en: 'Variable \`score = 85\`. Output the grade letter: ≥90 → \`A\`, ≥80 → \`B\`, ≥70 → \`C\`, ≥60 → \`D\`, otherwise \`F\`.',
          },
          starter: '# 练习 1：成绩等级\nscore = 85\n# 用 if / elif / else 输出等级\n\n',
          expectedOutput: 'B\n',
          hint: {
            zh: '从高到低依次判断：\`if score >= 90: ... elif score >= 80: ...\`',
            en: 'Check from high to low: \`if score >= 90: ... elif score >= 80: ...\`',
          },
          solution: 'score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelif score >= 60:\n    print("D")\nelse:\n    print("F")\n',
        },
        {
          id: 'ex2',
          title: { zh: '三个数找最大', en: 'Max of three' },
          prompt: {
            zh: '变量 \`a = 12\`、\`b = 7\`、\`c = 9\`。用 if/elif/else 判断并输出最大的数（不要用 \`max()\` 函数）。',
            en: 'Variables \`a = 12\`, \`b = 7\`, \`c = 9\`. Use if/elif/else to print the largest (do not use \`max()\`).',
          },
          starter: '# 练习 2：找最大值\na = 12\nb = 7\nc = 9\n# 在下面判断并输出最大值\n\n',
          expectedOutput: '12\n',
          hint: {
            zh: '先假设 a 最大；用 elif 比较 b 和 c。',
            en: 'Assume a is the max; compare b and c with elif branches.',
          },
          solution: 'a = 12\nb = 7\nc = 9\nif a >= b and a >= c:\n    print(a)\nelif b >= a and b >= c:\n    print(b)\nelse:\n    print(c)\n',
        },
      ],
    },

    // ================= 5. 循环 =================
    {
      id: 'loops',
      title: { zh: '循环', en: 'Loops' },
      difficulty: 1,
      lecture: {
        zh: `## for 循环与 range()

\`\`\`python
for i in range(5):       # 0,1,2,3,4
    print(i)

for i in range(2, 10, 3): # 2,5,8（起点，终点，步长）
    print(i)
\`\`\`

\`range(a, b)\` 含头不含尾。遍历列表/字符串也一样用 for。

### while 循环

\`\`\`python
n = 1
while n <= 3:
    print(n)
    n += 1
\`\`\`

### break 与 continue

- \`break\`：立即跳出整个循环
- \`continue\`：跳过本次剩余语句，进入下一轮

\`\`\`python
for i in range(10):
    if i == 3:
        continue
    if i == 5:
        break
    print(i)          # 0 1 2 4
\`\`\`

> while 一定要有让条件变 False 的路径，否则死循环（运行会超时）.`,
        en: `## for loops and range()

\`\`\`python
for i in range(5):       # 0,1,2,3,4
    print(i)

for i in range(2, 10, 3): # 2,5,8 (start, stop, step)
    print(i)
\`\`\`

\`range(a, b)\` includes a but excludes b. for also iterates over lists and strings.

### while loops

\`\`\`python
n = 1
while n <= 3:
    print(n)
    n += 1
\`\`\`

### break & continue

- \`break\`: exit the loop immediately
- \`continue\`: skip the rest of this iteration

\`\`\`python
for i in range(10):
    if i == 3:
        continue
    if i == 5:
        break
    print(i)          # 0 1 2 4
\`\`\`

> A while loop must have a path that makes the condition False, otherwise it never ends (and times out).`,
      },
      examples: [
        {
          caption: { zh: '累加 1 到 100', en: 'Sum 1 to 100' },
          code: 'total = 0\nfor i in range(1, 101):\n    total += i\nprint(total)   # 5050\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '求和 1~100', en: 'Sum 1..100' },
          prompt: {
            zh: '用循环计算 1+2+…+100 的和并输出（应为 5050）。不要用公式直接算。',
            en: 'Use a loop to compute 1+2+…+100 and print the sum (should be 5050). Do not use the closed-form formula.',
          },
          starter: '# 练习 1：累加\n# 提示：total = 0，循环里 total += i\n\n',
          expectedOutput: '5050\n',
          hint: {
            zh: '`total = 0`，`for i in range(1, 101): total += i`，最后 `print(total)`。',
            en: '`total = 0`, `for i in range(1, 101): total += i`, then `print(total)`.',
          },
          solution: 'total = 0\nfor i in range(1, 101):\n    total += i\nprint(total)\n',
        },
        {
          id: 'ex2',
          title: { zh: '9 行乘法口诀', en: '9-row times table' },
          prompt: {
            zh: '输出 7 的乘法口诀，共 9 行，格式**严格**为 \`7 x 1 = 7\`、\`7 x 2 = 14\`……\`7 x 9 = 63\`（数字与字母 x 之间有空格）。',
            en: 'Print the 7 times table, 9 lines, in the **exact** format \`7 x 1 = 7\`, \`7 x 2 = 14\`, …, \`7 x 9 = 63\` (spaces around \`x\` and \`=\`).',
          },
          starter: '# 练习 2：乘法口诀\n# 用 f-string: print(f"7 x {i} = {7*i}")\n\n',
          expectedOutput: '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n',
          hint: {
            zh: '`for i in range(1, 10): print(f"7 x {i} = {7 * i}")`。',
            en: '`for i in range(1, 10): print(f"7 x {i} = {7 * i}")`.',
          },
          solution: 'for i in range(1, 10):\n    print(f"7 x {i} = {7 * i}")\n',
        },
      ],
    },

    // ================= 6. 函数 =================
    {
      id: 'functions',
      title: { zh: '函数', en: 'Functions' },
      difficulty: 2,
      lecture: {
        zh: `## 定义与调用

\`\`\`python
def add(a, b):
    """返回 a 与 b 的和"""   # 文档字符串
    return a + b

result = add(3, 4)   # 7
\`\`\`

### 要点

- \`def\` 定义函数，**参数**写在括号里，函数体缩进
- \`return\` 返回结果并结束函数；没有 return 时返回 \`None\`
- **先定义后调用**：Python 从上到下执行，调用时函数必须已存在

### 默认参数与关键字参数

\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Bob"))                    # Hello, Bob!
print(greet("Alice", greeting="Hi"))   # Hi, Alice!
\`\`\`

### 多返回值

\`\`\`python
def divmod_(a, b):
    return a // b, a % b     # 返回元组

q, r = divmod_(17, 5)       # 解包：q=3, r=2
\`\`\`

> 函数是组织代码的基本单元：一个函数只做一件事，名字说明它做什么。`,
        en: `## Define & call

\`\`\`python
def add(a, b):
    """Return the sum of a and b."""   # docstring
    return a + b

result = add(3, 4)   # 7
\`\`\`

### Notes

- \`def\` defines a function; **parameters** go in parentheses, body is indented
- \`return\` sends back a value and exits; without it the function returns \`None\`
- **Define before you call**: Python executes top-down

### Default & keyword arguments

\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Bob"))                    # Hello, Bob!
print(greet("Alice", greeting="Hi"))   # Hi, Alice!
\`\`\`

### Multiple return values

\`\`\`python
def divmod_(a, b):
    return a // b, a % b     # returns a tuple

q, r = divmod_(17, 5)       # unpack: q=3, r=2
\`\`\`

> Functions are the basic unit of organization: one job per function, and a name that says what it does.`,
      },
      examples: [
        {
          caption: { zh: '默认参数与多返回值', en: 'Defaults and multiple returns' },
          code: 'def power(base, exp=2):\n    return base ** exp\n\ndef min_max(nums):\n    return min(nums), max(nums)\n\nprint(power(5))        # 25\nprint(power(2, 10))    # 1024\nlo, hi = min_max([3, 1, 4, 1, 5])\nprint(lo, hi)          # 1 5\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '判断素数', en: 'Prime checker' },
          prompt: {
            zh: '编写函数 \`is_prime(n)\`：n 是素数返回 \`True\`，否则 \`False\`。然后用它**每行一个**输出 20 以内的所有素数（2 3 5 7 11 13 17 19，共 8 行）。',
            en: 'Write \`is_prime(n)\` returning \`True\` for primes, else \`False\`. Then print every prime below 20, **one per line** (2 3 5 7 11 13 17 19 — 8 lines).',
          },
          starter: '# 练习 1：素数\ndef is_prime(n):\n    # 在下面实现\n    pass\n\n# 输出 20 以内的素数\n',
          expectedOutput: '2\n3\n5\n7\n11\n13\n17\n19\n',
          hint: {
            zh: '小于 2 不是素数；用 \`for i in range(2, n)\` 检查能否整除。',
            en: 'Anything below 2 is not prime; test divisors with \`for i in range(2, n)\`.',
          },
          solution: 'def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, n):\n        if n % i == 0:\n            return False\n    return True\n\nfor n in range(2, 20):\n    if is_prime(n):\n        print(n)\n',
        },
        {
          id: 'ex2',
          title: { zh: '斐波那契数列', en: 'Fibonacci sequence' },
          prompt: {
            zh: '用函数生成斐波那契数列（从 1 开始：1, 1, 2, 3, 5…），输出前 10 个数，**每行一个**（第 10 个是 55）。',
            en: 'Generate the Fibonacci sequence starting at 1 (1, 1, 2, 3, 5…). Print the first 10 numbers, **one per line** (the 10th is 55).',
          },
          starter: '# 练习 2：斐波那契\ndef fib(n):\n    # 返回前 n 个斐波那契数组成的列表\n    pass\n\n# 在下面输出\n',
          expectedOutput: '1\n1\n2\n3\n5\n8\n13\n21\n34\n55\n',
          hint: {
            zh: 'a, b = 1, 1 循环 n 次：记录 a，然后 \`a, b = b, a + b\`。',
            en: 'Start a, b = 1, 1; loop n times appending a, then \`a, b = b, a + b\`.',
          },
          solution: 'def fib(n):\n    result = []\n    a, b = 1, 1\n    for _ in range(n):\n        result.append(a)\n        a, b = b, a + b\n    return result\n\nfor x in fib(10):\n    print(x)\n',
        },
      ],
    },

    // ================= 7. 列表 =================
    {
      id: 'lists',
      title: { zh: '列表', en: 'Lists' },
      difficulty: 2,
      lecture: {
        zh: `## 列表：有序可变序列

\`\`\`python
nums = [4, 8, 15, 16, 23, 42]
print(nums[0])     # 4（下标从 0 开始）
print(nums[-1])    # 42（负数从末尾数）
print(nums[1:4])   # [8, 15, 16]（切片，含头不含尾）
\`\`\`

### 常用操作

| 操作 | 说明 |
|---|---|
| \`nums.append(x)\` | 尾部追加 |
| \`nums.insert(i, x)\` | 在位置 i 插入 |
| \`nums.remove(x)\` | 删除第一个等于 x 的元素 |
| \`nums.sort()\` | 原地排序（升序） |
| \`len(nums)\` / \`sum(nums)\` / \`max(nums)\` / \`min(nums)\` | 内置聚合 |

### 列表推导式（Pythonic 核心）

\`\`\`python
squares = [x * x for x in range(1, 6)]   # [1, 4, 9, 16, 25]
evens = [x for x in range(10) if x % 2 == 0]
\`\`\`

### 遍历

\`\`\`python
for v in nums:          # 直接取值（推荐）
    print(v)
for i, v in enumerate(nums):   # 需要下标时
    print(i, v)
\`\`\``,
        en: `## Lists: ordered, mutable sequences

\`\`\`python
nums = [4, 8, 15, 16, 23, 42]
print(nums[0])     # 4 (index starts at 0)
print(nums[-1])    # 42 (negative counts from the end)
print(nums[1:4])   # [8, 15, 16] (slice: start inclusive, stop exclusive)
\`\`\`

### Common operations

| Operation | Description |
|---|---|
| \`nums.append(x)\` | append to the end |
| \`nums.insert(i, x)\` | insert at index i |
| \`nums.remove(x)\` | remove first equal value |
| \`nums.sort()\` | in-place ascending sort |
| \`len(nums)\` / \`sum(nums)\` / \`max(nums)\` / \`min(nums)\` | built-in aggregations |

### List comprehensions (core Python idiom)

\`\`\`python
squares = [x * x for x in range(1, 6)]   # [1, 4, 9, 16, 25]
evens = [x for x in range(10) if x % 2 == 0]
\`\`\`

### Iteration

\`\`\`python
for v in nums:          # values directly (recommended)
    print(v)
for i, v in enumerate(nums):   # when you need the index
    print(i, v)
\`\`\``,
      },
      examples: [
        {
          caption: { zh: '切片与推导式', en: 'Slices and comprehensions' },
          code: 'nums = [4, 8, 15, 16, 23, 42]\nprint(nums[::-1])          # 反转\nprint(sum(nums), max(nums))\nprint([x * x for x in nums if x % 2 == 0])\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '列表统计', en: 'List statistics' },
          prompt: {
            zh: '给定 \`nums = [4, 8, 15, 16, 23, 42]\`，**每行一个**依次输出：总和、最大值、最小值、元素个数。',
            en: 'Given \`nums = [4, 8, 15, 16, 23, 42]\`, print — **one per line** — the sum, maximum, minimum, and number of elements.',
          },
          starter: '# 练习 1：统计\nnums = [4, 8, 15, 16, 23, 42]\n# 在下面输出四行\n\n',
          expectedOutput: '108\n42\n4\n6\n',
          hint: {
            zh: '`sum(nums)`、`max(nums)`、`min(nums)`、`len(nums)`。',
            en: '`sum(nums)`, `max(nums)`, `min(nums)`, `len(nums)`.',
          },
          solution: 'nums = [4, 8, 15, 16, 23, 42]\nprint(sum(nums))\nprint(max(nums))\nprint(min(nums))\nprint(len(nums))\n',
        },
        {
          id: 'ex2',
          title: { zh: '偶数的平方', en: 'Squares of evens' },
          prompt: {
            zh: '用**列表推导式**求 1~10 中所有偶数的平方，**每行一个**输出（4、16、36、64、100）。',
            en: 'Use a **list comprehension** to compute the squares of all even numbers from 1 to 10, printing **one per line** (4, 16, 36, 64, 100).',
          },
          starter: '# 练习 2：偶数平方\n# 提示: [x*x for x in range(1, 11) if x % 2 == 0]\n\n',
          expectedOutput: '4\n16\n36\n64\n100\n',
          hint: {
            zh: '`result = [x * x for x in range(1, 11) if x % 2 == 0]` 再循环输出。',
            en: '`result = [x * x for x in range(1, 11) if x % 2 == 0]` then loop and print.',
          },
          solution: 'result = [x * x for x in range(1, 11) if x % 2 == 0]\nfor v in result:\n    print(v)\n',
        },
      ],
    },

    // ================= 8. 字符串 =================
    {
      id: 'strings',
      title: { zh: '字符串', en: 'Strings' },
      difficulty: 2,
      lecture: {
        zh: `## 不可变序列

字符串和列表一样可下标、可切片，但**不能修改**（\`s[0] = "x"\` 报错）。

### 常用方法

| 方法 | 例子 | 结果 |
|---|---|---|
| \`upper()\` / \`lower()\` | \`"ab".upper()\` | \`"AB"\` |
| \`strip()\` | \`" hi ".strip()\` | \`"hi"\` |
| \`split()\` | \`"a,b".split(",")\` | \`['a', 'b']\` |
| \`join()\` | \`"-".join(["a","b"])\` | \`"a-b"\` |
| \`replace()\` | \`"aba".replace("a","c")\` | \`"cbc"\` |
| \`find()\` | \`"abc".find("b")\` | \`1\`（找不到 -1） |
| \`count()\` | \`"banana".count("an")\` | \`2\` |

### 判断类方法

\`s.isdigit()\`、\`s.isalpha()\`、\`s.startswith("http")\`、\`s.endswith(".py")\`

### f-string 进阶

\`\`\`python
pi = 3.14159
print(f"{pi:.2f}")     # 3.14（保留两位小数）
print(f"{42:5d}|")     #    42|（宽度 5 右对齐）
\`\`\`

> 字符串方法都返回**新字符串**，原串不变：\`s.upper()\` 不会改变 \`s\`。`,
        en: `## Immutable sequences

Strings can be indexed and sliced like lists, but **cannot be modified** (\`s[0] = "x"\` is an error).

### Common methods

| Method | Example | Result |
|---|---|---|
| \`upper()\` / \`lower()\` | \`"ab".upper()\` | \`"AB"\` |
| \`strip()\` | \`" hi ".strip()\` | \`"hi"\` |
| \`split()\` | \`"a,b".split(",")\` | \`['a', 'b']\` |
| \`join()\` | \`"-".join(["a","b"])\` | \`"a-b"\` |
| \`replace()\` | \`"aba".replace("a","c")\` | \`"cbc"\` |
| \`find()\` | \`"abc".find("b")\` | \`1\` (-1 if absent) |
| \`count()\` | \`"banana".count("an")\` | \`2\` |

### Predicates

\`s.isdigit()\`, \`s.isalpha()\`, \`s.startswith("http")\`, \`s.endswith(".py")\`

### f-string extras

\`\`\`python
pi = 3.14159
print(f"{pi:.2f}")     # 3.14 (two decimals)
print(f"{42:5d}|")     #    42| (width 5, right-aligned)
\`\`\`

> String methods return **new strings** — the original never changes.`,
      },
      examples: [
        {
          caption: { zh: '字符串方法串烧', en: 'Method medley' },
          code: 's = "Hello Python"\nprint(len(s))            # 12\nprint(s.upper())\nprint(s.replace("l", "L"))\nprint(s.split())\nprint("-".join(["2026", "09", "07"]))\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '字符串统计', en: 'String stats' },
          prompt: {
            zh: '给定 \`s = "Hello Python"\`，**每行一个**输出：长度、全大写形式、第一个字符和最后一个字符（中间用空格分隔，即 \`H n\`）。',
            en: 'Given \`s = "Hello Python"\`, print **one per line**: its length, its uppercase form, and the first & last characters separated by a space (i.e. \`H n\`).',
          },
          starter: '# 练习 1：字符串统计\ns = "Hello Python"\n# 三行输出\n\n',
          expectedOutput: '12\nHELLO PYTHON\nH n\n',
          hint: {
            zh: '`len(s)`、`s.upper()`、`print(s[0], s[-1])`。',
            en: '`len(s)`, `s.upper()`, `print(s[0], s[-1])`.',
          },
          solution: 's = "Hello Python"\nprint(len(s))\nprint(s.upper())\nprint(s[0], s[-1])\n',
        },
        {
          id: 'ex2',
          title: { zh: '回文判断', en: 'Palindrome check' },
          prompt: {
            zh: '编写函数 \`is_palindrome(s)\`（忽略大小写），对 \`"racecar"\` 和 \`"hello"\` 分别输出判定结果（\`True\` / \`False\`，各占一行）。',
            en: 'Write \`is_palindrome(s)\` (case-insensitive). Output the verdict for \`"racecar"\` and \`"hello"\` — \`True\` / \`False\`, one per line.',
          },
          starter: '# 练习 2：回文\ndef is_palindrome(s):\n    # 在下面实现\n    pass\n\nprint(is_palindrome("racecar"))\nprint(is_palindrome("hello"))\n',
          expectedOutput: 'True\nFalse\n',
          hint: {
            zh: '回文：\`s.lower() == s.lower()[::-1]\`。',
            en: 'Palindrome check: \`s.lower() == s.lower()[::-1]\`.',
          },
          solution: 'def is_palindrome(s):\n    t = s.lower()\n    return t == t[::-1]\n\nprint(is_palindrome("racecar"))\nprint(is_palindrome("hello"))\n',
        },
      ],
    },

    // ================= 9. 字典与集合 =================
    {
      id: 'dicts',
      title: { zh: '字典与集合', en: 'Dicts & Sets' },
      difficulty: 2,
      lecture: {
        zh: `## 字典 dict：键值对

\`\`\`python
ages = {"Alice": 20, "Bob": 22}
print(ages["Alice"])        # 20
ages["Carol"] = 19          # 新增
ages["Bob"] = 23            # 修改
print("Bob" in ages)        # True（成员判断）
print(ages.get("Dave", 0))  # 0（键不存在返回默认值，不报错）
\`\`\`

### 遍历

\`\`\`python
for name, age in ages.items():
    print(name, age)
\`\`\`

### 计数模式（高频用法）

\`\`\`python
counts = {}
for word in "a b a c a b".split():
    counts[word] = counts.get(word, 0) + 1
print(counts)   # {'a': 3, 'b': 2, 'c': 1}
\`\`\`

## 集合 set：去重与集合运算

\`\`\`python
A = {1, 2, 3}
B = {3, 4}
print(A | B)   # 并 {1, 2, 3, 4}
print(A & B)   # 交 {3}
print(A - B)   # 差 {1, 2}
print(len({1, 1, 2, 2, 3}))   # 3（自动去重）
\`\`\`

> dict 保持**插入顺序**（3.7+），但查找是 O(1)；需要排序输出时先 \`sorted()\`。`,
        en: `## Dictionaries: key → value

\`\`\`python
ages = {"Alice": 20, "Bob": 22}
print(ages["Alice"])        # 20
ages["Carol"] = 19          # add
ages["Bob"] = 23            # update
print("Bob" in ages)        # True (membership)
print(ages.get("Dave", 0))  # 0 (default instead of error)
\`\`\`

### Iteration

\`\`\`python
for name, age in ages.items():
    print(name, age)
\`\`\`

### The counting idiom (very common)

\`\`\`python
counts = {}
for word in "a b a c a b".split():
    counts[word] = counts.get(word, 0) + 1
print(counts)   # {'a': 3, 'b': 2, 'c': 1}
\`\`\`

## Sets: uniqueness & set algebra

\`\`\`python
A = {1, 2, 3}
B = {3, 4}
print(A | B)   # union {1, 2, 3, 4}
print(A & B)   # intersection {3}
print(A - B)   # difference {1, 2}
print(len({1, 1, 2, 2, 3}))   # 3 (duplicates collapse)
\`\`\`

> dicts preserve **insertion order** (3.7+) with O(1) lookup; \`sorted()\` when you need ordered output.`,
      },
      examples: [
        {
          caption: { zh: '词频统计', en: 'Word frequency' },
          code: 'text = "the quick brown fox jumps over the lazy dog"\ncounts = {}\nfor w in text.split():\n    counts[w] = counts.get(w, 0) + 1\nfor w in sorted(counts):\n    print(w, counts[w])\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '词频统计', en: 'Word counts' },
          prompt: {
            zh: '统计句子 \`"the quick brown fox jumps over the lazy dog the end"\` 中指定单词的出现次数，**每行一个**输出（格式 \`the: 3\`、\`fox: 1\`、\`dog: 1\`，共三行）。',
            en: 'Count occurrences in \`"the quick brown fox jumps over the lazy dog the end"\` and print, **one per line** with format \`the: 3\`, \`fox: 1\`, \`dog: 1\` (three lines total).',
          },
          starter: '# 练习 1：词频\ntext = "the quick brown fox jumps over the lazy dog the end"\n# 用字典统计后输出三行\n\n',
          expectedOutput: 'the: 3\nfox: 1\ndog: 1\n',
          hint: {
            zh: '`counts.get(w, 0) + 1` 累加；输出用 f-string：`print(f"{w}: {counts[w]}")`。',
            en: 'Accumulate with `counts.get(w, 0) + 1`; print with an f-string `print(f"{w}: {counts[w]}")`.',
          },
          solution: 'text = "the quick brown fox jumps over the lazy dog the end"\ncounts = {}\nfor w in text.split():\n    counts[w] = counts.get(w, 0) + 1\nfor w in ["the", "fox", "dog"]:\n    print(f"{w}: {counts[w]}")\n',
        },
        {
          id: 'ex2',
          title: { zh: '集合运算', en: 'Set algebra' },
          prompt: {
            zh: '给定 \`A = {1,2,3,4,5}\`、\`B = {4,5,6,7}\`。**每行一个**输出：并集（升序，空格分隔：\`1 2 3 4 5 6 7\`）、交集（\`4 5\`）、差集 A-B（\`1 2 3\`）。',
            en: 'Given \`A = {1,2,3,4,5}\` and \`B = {4,5,6,7}\`, print **one per line**: the union sorted ascending, space-separated (\`1 2 3 4 5 6 7\`), the intersection (\`4 5\`), and the difference A-B (\`1 2 3\`).',
          },
          starter: '# 练习 2：集合运算\nA = {1, 2, 3, 4, 5}\nB = {4, 5, 6, 7}\n# 三行输出：并集、交集、差集\n\n',
          expectedOutput: '1 2 3 4 5 6 7\n4 5\n1 2 3\n',
          hint: {
            zh: '`" ".join(str(x) for x in sorted(A | B))`。',
            en: '`" ".join(str(x) for x in sorted(A | B))`.',
          },
          solution: 'A = {1, 2, 3, 4, 5}\nB = {4, 5, 6, 7}\nprint(" ".join(str(x) for x in sorted(A | B)))\nprint(" ".join(str(x) for x in sorted(A & B)))\nprint(" ".join(str(x) for x in sorted(A - B)))\n',
        },
      ],
    },

    // ================= 10. 类与对象 =================
    {
      id: 'oop',
      title: { zh: '类与对象', en: 'Classes & Objects' },
      difficulty: 3,
      lecture: {
        zh: `## 定义类

\`\`\`python
class Rectangle:
    def __init__(self, width, height):   # 构造方法
        self.width = width                # 实例属性
        self.height = height

    def area(self):                       # 实例方法，第一个参数是 self
        return self.width * self.height

r = Rectangle(3, 4)
print(r.area())    # 12
\`\`\`

### 要点

- \`__init__\` 是构造方法，创建对象时自动调用
- **self** 指当前实例，是所有实例方法的第一个参数，调用时不用传
- \`self.x = ...\` 创建实例属性

### 继承

\`\`\`python
class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)      # 调用父类构造

s = Square(5)
print(s.area())    # 25
\`\`\`

### 特殊方法（魔术方法）

| 方法 | 触发时机 |
|---|---|
| \`__str__\` | \`print(obj)\` / \`str(obj)\` |
| \`__eq__\` | \`obj == other\` |
| \`__len__\` | \`len(obj)\` |`,
        en: `## Defining a class

\`\`\`python
class Rectangle:
    def __init__(self, width, height):   # constructor
        self.width = width                # instance attributes
        self.height = height

    def area(self):                       # instance method, first param is self
        return self.width * self.height

r = Rectangle(3, 4)
print(r.area())    # 12
\`\`\`

### Notes

- \`__init__\` is the constructor, called automatically on creation
- **self** refers to the current instance; it is the first parameter of every instance method and is not passed explicitly
- \`self.x = ...\` creates an instance attribute

### Inheritance

\`\`\`python
class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)      # call parent constructor

s = Square(5)
print(s.area())    # 25
\`\`\`

### Dunder methods

| Method | Triggered by |
|---|---|
| \`__str__\` | \`print(obj)\` / \`str(obj)\` |
| \`__eq__\` | \`obj == other\` |
| \`__len__\` | \`len(obj)\` |`,
      },
      examples: [
        {
          caption: { zh: '类、继承与 __str__', en: 'Class, inheritance, __str__' },
          code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n\n    def speak(self):\n        return f"{self.name} makes a sound"\n\nclass Dog(Animal):\n    def speak(self):                # 方法重写\n        return f"{self.name} barks"\n\nfor a in [Animal("Cat"), Dog("Rex")]:\n    print(a.speak())\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '矩形类', en: 'Rectangle class' },
          prompt: {
            zh: '定义类 \`Rectangle\`（属性 \`width\`、\`height\`，方法 \`area()\` 和 \`perimeter()\`）。创建 \`Rectangle(3, 4)\`，**每行一个**输出面积和周长。',
            en: 'Define a \`Rectangle\` class (attributes \`width\`, \`height\`; methods \`area()\` and \`perimeter()\`). Create \`Rectangle(3, 4)\` and print the area and perimeter, **one per line**.',
          },
          starter: '# 练习 1：矩形类\nclass Rectangle:\n    # 在下面实现 __init__ / area / perimeter\n    pass\n\nr = Rectangle(3, 4)\n# 输出面积和周长\n',
          expectedOutput: '12\n14\n',
          hint: {
            zh: '周长 = 2 * (width + height)。',
            en: 'Perimeter = 2 * (width + height).',
          },
          solution: 'class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n\n    def area(self):\n        return self.width * self.height\n\n    def perimeter(self):\n        return 2 * (self.width + self.height)\n\n\nr = Rectangle(3, 4)\nprint(r.area())\nprint(r.perimeter())\n',
        },
        {
          id: 'ex2',
          title: { zh: '学生平均分', en: 'Student average' },
          prompt: {
            zh: '定义类 \`Student\`（属性 \`name\` 和 \`scores\` 列表，方法 \`average()\` 返回保留两位小数的平均分）。创建 \`Student("Alice", [90, 85, 88])\` 并输出 \`Alice: 87.67\`。',
            en: 'Define a \`Student\` class (attributes \`name\` and a \`scores\` list; method \`average()\` returning the mean rounded to 2 decimals). Create \`Student("Alice", [90, 85, 88])\` and print \`Alice: 87.67\`.',
          },
          starter: '# 练习 2：学生类\nclass Student:\n    # 在下面实现\n    pass\n\ns = Student("Alice", [90, 85, 88])\n# 输出 Alice: 87.67\n',
          expectedOutput: 'Alice: 87.67\n',
          hint: {
            zh: '`round(sum(self.scores) / len(self.scores), 2)`；输出用 f-string。',
            en: '`round(sum(self.scores) / len(self.scores), 2)`; print with an f-string.',
          },
          solution: 'class Student:\n    def __init__(self, name, scores):\n        self.name = name\n        self.scores = scores\n\n    def average(self):\n        return round(sum(self.scores) / len(self.scores), 2)\n\n\ns = Student("Alice", [90, 85, 88])\nprint(f"{s.name}: {s.average()}")\n',
        },
      ],
    },

    // ================= 11. 文件操作 =================
    {
      id: 'files',
      title: { zh: '文件操作', en: 'File I/O' },
      difficulty: 3,
      lecture: {
        zh: `## with open(...) — 标准写法

\`\`\`python
# 写文件
with open("note.txt", "w", encoding="utf-8") as f:
    f.write("first line\\n")
    f.write("second line\\n")

# 读文件
with open("note.txt", "r", encoding="utf-8") as f:
    content = f.read()          # 一次读完
\`\`\`

### 模式

| 模式 | 含义 |
|---|---|
| \`"r"\` | 只读（默认），文件不存在报错 |
| \`"w"\` | 覆盖写，文件不存在则创建 |
| \`"a"\` | 追加写 |
| \`"r+"\` | 读写 |

### 逐行读取

\`\`\`python
with open("note.txt") as f:
    for line in f:              # 内存友好
        print(line.rstrip())    # 去掉行尾换行符
\`\`\`

或 \`lines = f.readlines()\`（一次性读成列表）。

> \`with\` 块结束自动关文件，即使中途出异常也不会泄漏句柄。写文本时记得 \`\\n\`。`,
        en: `## with open(...) — the standard pattern

\`\`\`python
# write
with open("note.txt", "w", encoding="utf-8") as f:
    f.write("first line\\n")
    f.write("second line\\n")

# read
with open("note.txt", "r", encoding="utf-8") as f:
    content = f.read()          # read everything
\`\`\`

### Modes

| Mode | Meaning |
|---|---|
| \`"r"\` | read (default); error if missing |
| \`"w"\` | truncate & write; create if missing |
| \`"a"\` | append |
| \`"r+"\` | read + write |

### Reading line by line

\`\`\`python
with open("note.txt") as f:
    for line in f:              # memory friendly
        print(line.rstrip())    # strip the trailing newline
\`\`\`

Or \`lines = f.readlines()\` (whole file as a list).

> \`with\` closes the file automatically — even on exceptions. Remember \`\\n\` when writing text.`,
      },
      examples: [
        {
          caption: { zh: '写入再读回', en: 'Write then read back' },
          code: 'with open("demo.txt", "w") as f:\n    f.write("apple\\n")\n    f.write("banana\\n")\n\nwith open("demo.txt") as f:\n    for line in f:\n        print(line.rstrip())\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '写入并读回', en: 'Write and read back' },
          prompt: {
            zh: '把字符串 \`"Hello File"\` 写入 \`test.txt\`（模式 \`"w"\`），再重新打开读出内容。**两行输出**：第一行是文件内容 \`Hello File\`，第二行是 \`lines: 1\`（行数）。',
            en: 'Write \`"Hello File"\` into \`test.txt\` (mode \`"w"\`), then reopen and read it back. Output **two lines**: the file content \`Hello File\`, then \`lines: 1\` (the line count).',
          },
          starter: '# 练习 1：写入并读回\n# 提示：写完记得换行符会影响行数统计\n\n',
          expectedOutput: 'Hello File\nlines: 1\n',
          hint: {
            zh: '写入 \`"Hello File"\`（不带 \\n 则读回为 1 行）；读回后 \`len(content.splitlines())\`。',
            en: 'Write \`"Hello File"\` (no trailing \\n keeps it 1 line); count with \`len(content.splitlines())\`.',
          },
          solution: 'with open("test.txt", "w") as f:\n    f.write("Hello File")\n\nwith open("test.txt") as f:\n    content = f.read()\n\nprint(content)\nprint(f"lines: {len(content.splitlines())}")\n',
        },
        {
          id: 'ex2',
          title: { zh: '统计文件行数与字符数', en: 'Count lines and characters' },
          prompt: {
            zh: '把三行 \`apple\`、\`banana\`、\`cherry\` 写入 \`fruits.txt\`，再读回并输出：总行数 \`3\` 和总字符数 \`17\`（不含换行符），**每行一个**。',
            en: 'Write the three lines \`apple\`, \`banana\`, \`cherry\` to \`fruits.txt\`, read it back, and print the line count \`3\` and total character count \`17\` (excluding newlines), **one per line**.',
          },
          starter: '# 练习 2：行数与字符数\nfruits = ["apple", "banana", "cherry"]\n# 写入 → 读回 → 统计\n\n',
          expectedOutput: '3\n17\n',
          hint: {
            zh: '字符数 = \`sum(len(line) for line in lines)\`，lines 用 \`read().splitlines()\`。',
            en: 'Chars = \`sum(len(line) for line in lines)\` with \`read().splitlines()\`.',
          },
          solution: 'fruits = ["apple", "banana", "cherry"]\nwith open("fruits.txt", "w") as f:\n    for fruit in fruits:\n        f.write(fruit + "\\n")\n\nwith open("fruits.txt") as f:\n    lines = f.read().splitlines()\n\nprint(len(lines))\nprint(sum(len(line) for line in lines))\n',
        },
      ],
    },
  ],
};
