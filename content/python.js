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
        zh: `## 这节课学什么

学会运行你的第一个程序：用 \`print()\` 把文字显示在屏幕上。学完这节课，你就能让电脑在屏幕上显示任何你想显示的内容——这是所有编程之旅的第一步。

## print() 是什么

把电脑想象成一个非常听话、但完全听不懂人话的助手。它不会读心术，你想让它做什么，必须用它认识的「指令」告诉它。**print()** 就是其中最简单的一条指令，意思是：「把括号里的内容写到屏幕上」。

- \`print\` 是**函数**的名字，可以当成一个「动词」：打印
- \`()\` 是调用函数的固定写法，要打印的内容放在括号里
- 要打印文字（术语叫**字符串**），必须用引号包起来：\`print("你好")\`

电脑从上到下、一行一行地执行你的代码，就像你照着菜谱做菜：第一行做完做第二行，不跳行，也不倒回去。

## 怎么写

1. **打印一句话**：文字用双引号或单引号包住，两种写法完全等价

\`\`\`python
print("Hello, World!")
print('Hello, World!')
\`\`\`

2. **打印数字**：数字不要加引号，加了引号就变成「文字」了

\`\`\`python
print(42)
\`\`\`

3. **一次打印多个值**：用逗号分隔，输出时逗号的位置会变成一个空格

\`\`\`python
print("我今年", 18, "岁")   # 输出: 我今年 18 岁
\`\`\`

4. **写注释**：以 \`#\` 开头的部分是写给你自己看的笔记，电脑直接忽略

\`\`\`python
# 这一行是注释，不会被执行
print("注释下面这行会执行")
\`\`\`

5. **保存并运行**：把代码存进 \`main.py\` 文件，在终端输入 \`python main.py\` 回车即可执行；在本站直接点「运行」按钮，代码会被送到云端执行并把结果带回来。

## 逐行读懂示例

第一个示例一共两行：

\`\`\`python
print("Hello, World!")
\`\`\`

- \`print\`：调用打印函数
- \`(...)\`：括号告诉 Python「这是要打印的内容」
- \`"Hello, World!"\`：引号里的文字**原样输出**。逗号后面那个空格是你自己写进去的，不是电脑加的

\`\`\`python
print("你好，Python")
\`\`\`

- 第二行紧跟第一行执行。每个 \`print()\` 打印完会**自动换行**，所以两句话各占一行

第二个示例展示了变量和逗号的用法：

\`\`\`python
name = "Python"
\`\`\`

- 这行把文字 \`"Python"\` 存进一个叫 \`name\` 的「盒子」里（下一课细讲变量）

\`\`\`python
print(name, version)
\`\`\`

- 打印两个值时中间自动补一个空格，输出 \`Python 3.1\`（\`3.10\` 会被当成数字 3.1，这是个经典的坑）

\`\`\`python
# 输出: Python 3.1（注意：3.10 会被当作数字 3.1）
\`\`\`

- 以 \`#\` 开头，是注释，不影响程序运行

## 新手常犯的错误

1. **忘了加引号**：\`print(Hello)\` → 报错 \`NameError: name 'Hello' is not defined\`。Python 以为 Hello 是个变量名。改成 \`print("Hello")\` 即可。
2. **用了中文引号**：\`print(“你好”)\`（引号是全角的）→ \`SyntaxError\`。代码里的所有符号都必须是英文半角。
3. **括号没配对**：\`print("hi"\` → \`SyntaxError: '(' was never closed\`。写完数一下左右括号是否一样多。
4. **大小写写错**：\`Print("hi")\` → \`NameError: name 'Print' is not defined\`。Python 严格区分大小写，函数名必须是小写 \`print\`。

## 小结

- \`print()\` 把内容显示到屏幕，是最常用的输出方式
- 文字必须用引号包裹，数字不用
- 程序从上到下逐行执行，每个 \`print()\` 自动换行
- \`#\` 后面是注释，给人看，电脑忽略
- 逗号可以一次打印多个值，输出时中间补空格

下一课学习**变量**——给数据起名字，让程序能记住东西。`,
        en: `## What you'll learn

How to run your very first program: using \`print()\` to display text on the screen. After this lesson you can make the computer show anything you like on screen — the first step of every programming journey.

## What is print()?

Picture the computer as an extremely obedient assistant that does not understand human speech. It cannot read your mind; to make it do something, you must tell it in "instructions" it recognizes. **print()** is the simplest such instruction, and it means: "write whatever is inside the parentheses onto the screen".

- \`print\` is the name of a **function** — think of it as the verb "print"
- \`()\` is the fixed syntax for calling a function; the content to print goes inside
- To print text (formally, a **string**), it must be wrapped in quotes: \`print("Hello")\`

The computer executes your code from top to bottom, one line at a time — like following a recipe: finish step one, then step two. No skipping, no going back.

## How to write it

1. **Print a sentence**: wrap the text in double or single quotes — the two forms are identical

\`\`\`python
print("Hello, World!")
print('Hello, World!')
\`\`\`

2. **Print a number**: no quotes on numbers; quoted digits become "text"

\`\`\`python
print(42)
\`\`\`

3. **Print several values at once**: separate them with commas; each comma becomes a space in the output

\`\`\`python
print("I am", 18, "years old")   # I am 18 years old
\`\`\`

4. **Write comments**: anything after \`#\` is a note for humans; the computer ignores it

\`\`\`python
# This line is a comment and will not run
print("This line below the comment runs")
\`\`\`

5. **Save and run**: store the code in a \`main.py\` file and type \`python main.py\` in a terminal; on this site, just press the Run button — your code is sent to the cloud and the output comes back.

## Reading the example line by line

The first example is two lines:

\`\`\`python
print("Hello, World!")
\`\`\`

- \`print\`: calls the print function
- \`(...)\`: the parentheses tell Python "this is the content to print"
- \`"Hello, World!"\`: the quoted text is printed **exactly as written**. The space after the comma is there because you typed it — the computer added nothing

\`\`\`python
print("你好，Python")
\`\`\`

- The second line runs right after the first. Each \`print()\` ends with an **automatic newline**, so the two sentences each occupy one line

The second example shows variables and commas:

\`\`\`python
name = "Python"
\`\`\`

- This stores the text \`"Python"\` in a "box" labeled \`name\` (variables are covered next lesson)

\`\`\`python
print(name, version)
\`\`\`

- Printing two values inserts a space between them, giving \`Python 3.1\` (\`3.10\` is treated as the number 3.1 — a classic trap)

\`\`\`python
# 输出: Python 3.1（注意：3.10 会被当作数字 3.1）
\`\`\`

- Starts with \`#\` — a comment; it does not affect the program

## Common beginner mistakes

1. **Forgetting the quotes**: \`print(Hello)\` → \`NameError: name 'Hello' is not defined\`. Python thinks Hello is a variable. Write \`print("Hello")\` instead.
2. **Using full-width quotes**: \`print(“你好”)\` with curly quotes → \`SyntaxError\`. Every symbol in code must be half-width English.
3. **Unbalanced parentheses**: \`print("hi"\` → \`SyntaxError: '(' was never closed\`. Count that the opening and closing parentheses match.
4. **Wrong case**: \`Print("hi")\` → \`NameError: name 'Print' is not defined\`. Python is case-sensitive; the function name must be lowercase \`print\`.

## Summary

- \`print()\` displays content on the screen — the most common form of output
- Text must be quoted; numbers must not be
- Programs run top to bottom, and each \`print()\` ends with a newline
- Everything after \`#\` is a comment for humans; the computer ignores it
- Commas let one call print multiple values, separated by spaces

Next lesson we learn **variables** — giving data names so programs can remember things.`,
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
          hints: [
            { zh: '这题练的是「让程序开口说话」——把文字显示到屏幕上。先回忆讲解里那个负责输出的函数叫什么、长什么样（函数名后要跟一对小括号）。', en: 'This exercise is about making the program "speak" — showing text on screen. Recall the function from the lecture that prints output, and how it looks (a name followed by a pair of parentheses).' },
            { zh: '程序从上往下逐行执行，每次调用输出函数都会输出一行并自动换行。题目要两行文字——先把第一条输出语句写对，再照着写第二条。', en: 'Programs run line by line from top to bottom; each call outputs one line and ends with a newline. The task needs two lines — get the first print statement right, then write the second in the same shape.' },
            { zh: '输出函数是 print()，括号里放要显示的内容；文字必须用一对英文引号包住，例如 `print("Hello")`。引号、括号都要是英文半角。', en: 'The output function is print(); put the content inside the parentheses, and text must be wrapped in a pair of English quotes, e.g. `print("Hello")`. Use half-width quotes and parentheses only.' },
            { zh: '骨架是两条 `print("...")`：第一行括号里放 `Hello, World!`，第二行放 `I am learning Python`。易错点：函数名全小写；逗号、感叹号与题目逐字符一致；不要多加空格或文字。', en: 'The skeleton is two `print("...")` lines: the first prints `Hello, World!`, the second prints `I am learning Python`. Watch out: the function name is lowercase, and the comma and exclamation mark must match the task character for character — no extra spaces or words.' },
            { zh: '参考答案：`print("Hello, World!")` 和 `print("I am learning Python")` 两行。每次 print 输出一行并自动换行；大小写、逗号、感叹号都要和题目完全一致，然后点「运行并判定」。', en: 'Reference: two lines — `print("Hello, World!")` and `print("I am learning Python")`. Each print outputs one line and adds a newline automatically; match the capitalization, comma and exclamation mark exactly, then click Run & Judge.' },
          ],
          solution: 'print("Hello, World!")\nprint("I am learning Python")\n',
          solutionNote: { zh: '程序从上往下逐行执行：第一次 print() 输出 Hello, World! 并自动换行，第二次输出 I am learning Python。它正确的关键在于括号与英文引号配对无误，且两行文字的大小写、逗号、感叹号与题目逐字符一致——判题区分大小写和全半角，差一个字符都会判未通过。', en: 'The program runs top to bottom: the first print() outputs Hello, World! and moves to a new line, the second outputs I am learning Python. It passes because the parentheses and English quotes are paired correctly and both lines match the task character for character — the judge is case-sensitive and distinguishes half-width from full-width, so a single wrong character fails the check.' },
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
          hints: [
            { zh: '这题练的还是「把文字显示到屏幕」——输出内容是星号，变化的是每行星号的个数。先想清楚：要打印几行？行与行之间差在哪里？', en: 'This exercise is still about showing text on screen — the content is stars and the only change is how many stars each line holds. First work out: how many lines do you need, and what differs between them?' },
            { zh: '把问题拆成三行、每行一次打印。先把第一行（一个星号）写对并运行看看，再照着同样的格式写第二、第三行，只把引号里的星号个数加一。', en: 'Break the task into three lines, each printed once. Get the first line (a single star) right and run it, then write lines two and three in the same shape, adding one more star inside the quotes each time.' },
            { zh: '打印一行文字用 `print("...")`，要几个星号就在引号里写几个。星号必须待在英文引号里面，例如 `print("*")` 会输出一个星号。', en: 'Print a line of text with `print("...")`; type as many stars between the quotes as you want to show. The stars must stay inside English quotes — for example `print("*")` outputs one star.' },
            { zh: '骨架是三条打印语句，顺序如下：`print("*")`、`print("**")`、`print("***")`。易错点：引号一律英文半角；不要在引号内外多加空格（例如 `"* "` 会在星号后留下空格），否则整行比对会失败。', en: 'The skeleton is three print statements in order: `print("*")`, `print("**")` and `print("***")`. Watch out: keep the quotes half-width English, and do not add spaces inside or outside the quotes (e.g. `"* "` leaves a trailing space) — the judge compares whole lines.' },
            { zh: '参考答案就三行：`print("*")`、`print("**")`、`print("***")`。每次 print 输出一行并自动换行，星号个数逐行加一，正好拼出题目要求的三角形。', en: 'The reference solution is three lines: `print("*")`, `print("**")` and `print("***")`. Each print outputs one line and adds a newline automatically; the star count grows by one each line, forming the requested triangle.' },
          ],
          solution: 'print("*")\nprint("**")\nprint("***")\n',
          solutionNote: { zh: '解法用三次 print() 分别输出 `*`、`**`、`***`：每次调用会自动换行，所以三行星号各占一行。它的正确性来自引号里的内容与题目逐行逐字符一致——星号数量、英文半角引号都不能错，行内也不要出现多余的空格。', en: 'The solution calls print() three times, outputting *, ** and ***; each call adds a newline, so the three lines each occupy their own row. It works because the quoted text matches the task line by line, character for character — the star counts and the half-width quotes must be exact, with no stray spaces in a line.' },
        },
      ],
    },

    // ================= 2. 变量与数据类型 =================
    {
      id: 'variables',
      title: { zh: '变量与数据类型', en: 'Variables & Data Types' },
      difficulty: 1,
      lecture: {
        zh: `## 这节课学什么

学会用**变量**保存数据，并认识 Python 中最常见的四种数据类型（整数、小数、文字、真假值）。学完这节课，你的程序就能「记住」东西，并对它们做计算和展示。

## 变量是什么

把变量想象成一个**贴了标签的盒子**：盒子里装着数据，标签是变量的名字。想用这个数据时，喊一声标签名就行，不用记住数据本身。

\`\`\`python
age = 20
\`\`\`

这行代码的意思是：拿出一个盒子，贴上标签 \`age\`，往里面放数字 20。中间的 \`=\` 不是数学里的「等于」，而是「把右边的东西放进左边」——术语叫**赋值**。

以后想让盒子换内容，再赋值一次即可：

\`\`\`python
age = 20
age = 21      # 盒子里的 20 被换成 21
\`\`\`

Python 的贴心之处：你不用提前声明盒子里会装什么类型的东西，放进去的时候它自己认得。

## 怎么写

1. **赋值**：\`名字 = 值\`。名字只能由字母、数字、下划线组成，且不能以数字开头

\`\`\`python
price = 9.99
my_name = "Alice"
\`\`\`

2. **四种最常用的类型**：

| 类型 | 例子 | 装什么 |
|---|---|---|
| \`int\` 整数 | \`42\`, \`-7\` | 不带小数点的数 |
| \`float\` 浮点数 | \`3.14\`, \`2e5\` | 带小数点的数 |
| \`str\` 字符串 | \`"hello"\` | 文字，必须用引号包裹 |
| \`bool\` 布尔值 | \`True\`, \`False\` | 真假，只有这两个值，首字母要大写 |

3. **查看类型**：\`type(x)\` 会告诉你盒子里装的东西是什么类型

\`\`\`python
x = "123"
print(type(x))    # <class 'str'>
\`\`\`

4. **类型转换**：\`int()\`、\`float()\`、\`str()\` 像「改装工具」，把数据从一种类型转成另一种

\`\`\`python
n = int("123")    # 文字 "123" → 数字 123
s = str(456)      # 数字 456 → 文字 "456"
\`\`\`

5. **f-string：把变量嵌进文字**（强烈推荐）：在引号前加 \`f\`，用 \`{}\` 括住变量名

\`\`\`python
name = "Bob"
age = 18
print(f"{name} is {age} years old")   # Bob is 18 years old
\`\`\`

## 逐行读懂示例

本课示例用变量计算面积：

\`\`\`python
width = 7
height = 4
\`\`\`

- 造两个盒子：\`width\` 装 7，\`height\` 装 4，都是 \`int\` 类型

\`\`\`python
print(f"area = {width * height}")
\`\`\`

- f-string 里的 \`{width * height}\` 表示「先算出 7×4=28，再把 28 塞进这句话」，所以输出 \`area = 28\`

\`\`\`python
print(f"type of width: {type(width)}")
\`\`\`

- \`type(width)\` 返回 \`<class 'int'>\`，同样被嵌进文字一起输出

## 新手常犯的错误

1. **文字和数字混着运算**：\`"3" + 5\` → \`TypeError: can only concatenate str (not "int") to str\`。先用 \`int("3")\` 转成数字再算。
2. **变量名不合法**：\`2nd_place = 1\` → \`SyntaxError\`。名字不能以数字开头。
3. **使用没赋过值的变量**：直接 \`print(score)\` 但前面从没写过 \`score = ...\` → \`NameError: name 'score' is not defined\`。
4. **f-string 忘了写 f**：\`print("{name}")\` 会原样输出 \`{name}\`。引号前面必须加 \`f\`。
5. **赋值方向写反**：\`20 = age\` → \`SyntaxError: cannot assign to literal\`。\`=\` 的左边必须是变量名，右边才是要存的值；口诀是「右边算好，放进左边」。另外，变量名区分大小写：\`Age\` 和 \`age\` 是两个不同的盒子。

## 小结

- 变量 = 贴了标签的盒子，\`=\` 是「赋值」不是「等于」
- 常用类型：\`int\`、\`float\`、\`str\`、\`bool\`，用 \`type()\` 查看
- 类型之间要先转换才能混用：\`int()\`、\`str()\` 等
- f-string（\`f"...{变量}..."\`）是把变量变成文字的最好方式
- 起名习惯：全小写加下划线（\`user_age\`），名字要能说明盒子里装的是什么
- 忘了某个变量里装过什么，直接 \`print()\` 打出来看最可靠

编程是动手的活儿：这一课的每个例子都亲手敲一遍、改一改再运行，比看十遍更管用。

下一课学习**运算符**，让盒子里的数字真正算起来。`,
        en: `## What you'll learn

How to store data in **variables**, and how to recognize Python's four most common data types (integers, decimals, text, and true/false values). After this lesson your programs can "remember" things, compute with them, and display them nicely.

## What is a variable?

Think of a variable as a **labeled box**: the box holds the data, the label is the variable's name. When you need the data, just call the label — no need to remember the data itself.

\`\`\`python
age = 20
\`\`\`

This line means: take a box, stick the label \`age\` on it, and put the number 20 inside. The \`=\` here is not "equals" from math — it means "put the thing on the right into the thing on the left", formally called **assignment**.

To swap the contents later, just assign again:

\`\`\`python
age = 20
age = 21      # the 20 in the box is replaced by 21
\`\`\`

A nice touch in Python: you never declare in advance what type a box will hold — Python figures it out when you put something in.

## How to write it

1. **Assignment**: \`name = value\`. A name may contain letters, digits and underscores, but cannot start with a digit

\`\`\`python
price = 9.99
my_name = "Alice"
\`\`\`

2. **The four most common types**:

| Type | Example | Holds |
|---|---|---|
| \`int\` integer | \`42\`, \`-7\` | numbers without a decimal point |
| \`float\` | \`3.14\`, \`2e5\` | numbers with a decimal point |
| \`str\` string | \`"hello"\` | text, must be quoted |
| \`bool\` boolean | \`True\`, \`False\` | truth values; only these two, capitalized |

3. **Check the type**: \`type(x)\` tells you what type is in the box

\`\`\`python
x = "123"
print(type(x))    # <class 'str'>
\`\`\`

4. **Type conversion**: \`int()\`, \`float()\`, \`str()\` are like "adapters" that convert data from one type to another

\`\`\`python
n = int("123")    # the text "123" -> the number 123
s = str(456)      # the number 456 -> the text "456"
\`\`\`

5. **f-strings: embedding variables in text** (highly recommended): put \`f\` before the quote and wrap variable names in \`{}\`

\`\`\`python
name = "Bob"
age = 18
print(f"{name} is {age} years old")   # Bob is 18 years old
\`\`\`

## Reading the example line by line

This lesson's example computes an area with variables:

\`\`\`python
width = 7
height = 4
\`\`\`

- Two boxes are made: \`width\` holds 7, \`height\` holds 4; both are \`int\`

\`\`\`python
print(f"area = {width * height}")
\`\`\`

- Inside the f-string, \`{width * height}\` means "first compute 7×4=28, then drop the 28 into the sentence", so the output is \`area = 28\`

\`\`\`python
print(f"type of width: {type(width)}")
\`\`\`

- \`type(width)\` returns \`<class 'int'>\`, which is likewise embedded into the text

## Common beginner mistakes

1. **Mixing text and numbers in arithmetic**: \`"3" + 5\` → \`TypeError: can only concatenate str (not "int") to str\`. Convert first with \`int("3")\`.
2. **Illegal variable names**: \`2nd_place = 1\` → \`SyntaxError\`. Names cannot start with a digit.
3. **Using an unassigned variable**: \`print(score)\` without ever writing \`score = ...\` → \`NameError: name 'score' is not defined\`.
4. **Forgetting the f in an f-string**: \`print("{name}")\` literally prints \`{name}\`. The \`f\` must precede the quote.
5. **Reversing the assignment**: \`20 = age\` → \`SyntaxError: cannot assign to literal\`. The left of \`=\` must be a name, the right the value — the mantra is "compute the right side, store into the left". Names are case-sensitive, too: \`Age\` and \`age\` are two different boxes.

## Summary

- A variable is a labeled box; \`=\` means "assign", not "equals"
- Common types: \`int\`, \`float\`, \`str\`, \`bool\`; inspect with \`type()\`
- Convert between types before mixing: \`int()\`, \`str()\`, and friends
- The f-string (\`f"...{variable}..."\`) is the best way to turn variables into text
- Naming habit: lowercase with underscores (\`user_age\`), chosen to say what the box holds
- If you forget what a variable holds, just \`print()\` it — the most reliable check

Programming is hands-on: type every example from this lesson yourself, tweak it, run it — that beats reading it ten times.

Next lesson we learn **operators**, so the numbers in the boxes can actually be computed.`,
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
          hints: [
            { zh: '这题练「变量 + 表达式」的配合：长和宽已经存进两个变量，剩下的是把它们算成面积并展示。先想：面积由哪两个数相乘得到？', en: 'This exercise combines variables with an expression: the length and width are already stored, so all that is left is computing the area and showing it. First think: which two numbers multiply into the area?' },
            { zh: '把任务拆成两步：先用乘法算出面积，再把结果打印出来。可以直接把乘法式子写进 print 的括号，也可以先放进一个新变量再打印——两条路都通。', en: 'Split the task into two steps: multiply to get the area, then print the result. You may put the multiplication straight inside the print parentheses, or store it in a new variable first — either path works.' },
            { zh: '乘法运算符是 `*`，输出用 `print(表达式)`。例如 `print(width * height)` 会先算 7×4 再把结果打出来。', en: 'The multiplication operator is `*`, and printing uses `print(expression)`. For example `print(width * height)` computes 7 times 4 first and then prints it.' },
            { zh: '骨架一行即可：`print(width * height)`。若想存变量，写法是 `area = width * height` 再 `print(area)`。易错点：题目只要一个数字，别加「面积是」这类文字；变量名大小写要与声明一致。', en: 'A single line suffices: `print(width * height)`. If you prefer a variable, write `area = width * height` then `print(area)`. Watch out: the task wants just the number — no text like 「area is」; and keep the variable names exactly as declared, same case.' },
            { zh: '参考答案：`print(width * height)`。`*` 按 7×4 算出 28，print 直接输出这个数。不要打印任何多余内容，判题只看这一行是不是恰好 `28`。', en: 'Reference solution: `print(width * height)`. The `*` evaluates 7 times 4 to 28 and print outputs that number directly. Do not print anything extra — the judge only checks that this line is exactly `28`.' },
          ],
          solution: 'width = 7\nheight = 4\nprint(width * height)\n',
          solutionNote: { zh: '解法把乘法表达式直接放进 print()：`width * height` 先算出 7×4=28，再把结果输出。关键点有二：乘法必须写 `*`（不能写 ×），且题目要求只输出数字本身——任何附加说明文字、或把变量名大小写拼错，都会让输出与预期 28 不符。', en: 'The solution drops the multiplication expression straight into print(): `width * height` evaluates 7 times 4 to 28 and the result is printed. Two keys: multiplication must use `*` (not ×), and the task requires the bare number — any extra explanatory text or a variable name typed with the wrong case would break the expected output of 28.' },
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
          hints: [
            { zh: '这题练「把数学公式翻译成代码」：变量 c 已就位，公式也摆好了，你只需把它变成赋值语句并输出结果。先估计一下：c 换成 37 后公式算出多少？', en: 'This exercise is about translating a math formula into code: variable c is ready and the formula is given — you just turn it into an assignment and print the result. First estimate: what does the formula give for c = 37?' },
            { zh: '拆两步：先按公式算出华氏温度并放进一个新变量 f，再打印 f。动笔前先认清公式里哪些是运算符、哪些是数字。', en: 'Split into two steps: compute the Fahrenheit value from the formula into a new variable f, then print f. Before writing, tell apart the operators and the numbers in the formula.' },
            { zh: '运算符对应：乘法 `*`、除法 `/`、加法 `+`。赋值骨架 `f = c * 9 / 5 + 32` 与公式逐符号对应。', en: 'The operators map as: multiplication `*`, division `/`, addition `+`. The assignment skeleton `f = c * 9 / 5 + 32` mirrors the formula symbol for symbol.' },
            { zh: '骨架：`f = c * 9 / 5 + 32`，下一行 `print(f)`。易错点：`/` 是真除法、结果带小数，不要手动取整成 99；变量名统一小写。', en: 'Skeleton: `f = c * 9 / 5 + 32`, then `print(f)` on the next line. Watch out: `/` is true division and keeps the decimal part, so do not round it to 99 by hand; keep variable names lowercase.' },
            { zh: '参考答案：`f = c * 9 / 5 + 32` 后接 `print(f)`。Python 先乘除后加减，恰好算出 98.6；判题要的就是这个带小数的值。', en: 'Reference solution: `f = c * 9 / 5 + 32` followed by `print(f)`. Python applies multiply and divide before add and subtract, yielding 98.6 — the judge expects exactly this decimal value.' },
          ],
          solution: 'c = 37\nf = c * 9 / 5 + 32\nprint(f)\n',
          solutionNote: { zh: '解法把题目公式逐符号翻译成一行赋值 `f = c * 9 / 5 + 32`，再打印变量 f。它正确的关键在于 `*`、`/`、`+` 与运算顺序同数学一致，且 `/` 是真除法会保留小数——因此算出 98.6。若把结果自行取整，或把 `/` 误写成 `//`，输出就会偏离预期。', en: 'The solution translates the given formula into the assignment `f = c * 9 / 5 + 32`, then prints f. It works because `*`, `/`, `+` and their precedence match ordinary math, and `/` is true division, so the decimal part survives — giving 98.6. Rounding the value by hand, or writing `//` instead of `/`, would drift from the expected output.' },
        },
      ],
    },

    // ================= 3. 运算符 =================
    {
      id: 'operators',
      title: { zh: '运算符与表达式', en: 'Operators & Expressions' },
      difficulty: 1,
      lecture: {
        zh: `## 这节课学什么

学会用**运算符**做计算和比较：加减乘除、整除、取余、幂，以及「大于」「并且」这类逻辑判断。学完这节课，程序能像计算器一样工作，还能对数据「提问」。

## 运算符是什么

运算符就是数学里的那些「符号」：\`+\`、\`-\`、\`*\`、\`/\`。你按计算器时按的就是它们。程序里把「数据 + 运算符」组成的式子叫**表达式**，比如 \`3 * 4\`，它会算出一个结果 \`12\`。

两个容易混淆的「除法」要先分清：

- \`/\` 是真除法，结果永远带小数点（\`10 / 4 = 2.5\`）
- \`//\` 是整除，只取整数部分（\`10 // 4 = 2\`）
- \`%\` 是取余数（\`10 % 4 = 2\`，即 10 除以 4 余 2）——分东西时「剩几个」就靠它

\`2 ** 10\` 里的 \`**\` 是幂：2 的 10 次方等于 1024。

表达式里还可以再套表达式，比如 \`2 * 3 + 4 * 5\`，电脑会按优先级先算两个乘法再相加，得到 26；拿不准的时候加括号最保险。

## 怎么写

1. **算术运算符**：

| 运算符 | 含义 | 例子 | 结果 |
|---|---|---|---|
| \`+\` \`-\` \`*\` | 加减乘 | \`3 * 4\` | \`12\` |
| \`/\` | 除（总是 float） | \`10 / 4\` | \`2.5\` |
| \`//\` | 整除（向下取整） | \`10 // 4\` | \`2\` |
| \`%\` | 取余 | \`10 % 4\` | \`2\` |
| \`**\` | 幂 | \`2 ** 10\` | \`1024\` |

2. **比较运算符**：\`==\`（相等）、\`!=\`（不等）、\`<\`、\`>\`、\`<=\`、\`>=\`，结果是 \`True\` 或 \`False\`

\`\`\`python
print(3 > 2)      # True
print(3 == 3.0)   # True（值相等即可）
\`\`\`

3. **逻辑运算符**：\`and\`（并且）、\`or\`（或者）、\`not\`（取反）

\`\`\`python
print(3 > 2 and 5 < 1)   # False（两边都真才算真）
print(not True)          # False
\`\`\`

4. **优先级**：先乘除后加减，括号最优先。不确定时**加括号**，既保险又好读

\`\`\`python
print((1 + 2) * 3)   # 9，而不是 7
\`\`\`

5. **增强赋值**：\`+=\`、\`-=\`、\`*=\`、\`//=\` 是「先算再存回」的简写，后面学循环累加时会大量用到

\`\`\`python
n = 10
n += 5    # 等价于 n = n + 5
n *= 2    # 等价于 n = n * 2，现在 n 是 30
\`\`\`

## 逐行读懂示例

\`\`\`python
a, b = 17, 5
\`\`\`

- 一行给两个变量赋值：相当于 \`a = 17\`、\`b = 5\`

\`\`\`python
print(a // b)   # 3
\`\`\`

- 17 除以 5 商 3 余 2，\`//\` 取商：3

\`\`\`python
print(a % b)    # 2
\`\`\`

- \`%\` 取余数：2

\`\`\`python
print(a / b)    # 3.4
\`\`\`

- \`/\` 是真除法：3.4（带小数点）

\`\`\`python
print(2 ** 8)   # 256
\`\`\`

- \`**\` 是幂：2 的 8 次方

## 新手常犯的错误

1. **用 \`=\` 判断相等**：\`if x = 5:\` → \`SyntaxError\`。一个等号是赋值，判断相等要用两个：\`==\`。
2. **把 \`//\` 当四舍五入**：\`-10 // 4\` 是 \`-3\` 不是 \`-2\`（它向负无穷方向取整）。
3. **以为浮点数完全精确**：\`0.1 + 0.2 == 0.3\` 是 \`False\`（浮点数有精度误差）。比较小数时用 \`abs(a - b) < 1e-9\` 这类容差写法。
4. **字符串做减法**：\`"a" - "b"\` → \`TypeError\`。字符串只能用 \`+\` 拼接、\`*\` 重复。
5. **把幂写成 \`^\`**：\`2 ^ 10\` 不会报错，但结果是 8——\`^\` 在 Python 里是「按位异或」，和幂毫无关系。幂运算必须写两个星号：\`2 ** 10\`。
6. **以为 \`10 / 5\` 是整数**：\`/\` 的结果永远是 float，\`10 / 5\` 是 \`2.0\` 不是 \`2\`。想要整数商用 \`//\`，或者用 \`int()\` 包一层。
7. **负数的 \`//\` 和 \`%\` 容易反直觉**：\`-7 // 2\` 是 \`-4\`（向下取整），\`-7 % 2\` 是 \`1\`。碰到负数，先在纸上手算一遍再写代码。

## 小结

- \`/\` 得小数、\`//\` 取整、\`%\` 取余、\`**\` 是幂
- 比较运算返回 \`True\` / \`False\`，\`==\` 判断相等
- \`and\` / \`or\` / \`not\` 组合多个条件
- 拿不准优先级就加括号
- \`+=\` 这类增强赋值是「先算再存」的简写，后面课程会反复出现

写算式之前，先在纸上把公式列清楚，再逐个翻译成 Python 的符号，能少走很多弯路；改完记得马上运行验证一次。

下一课学习**条件分支**：让程序根据比较的结果走不同的路。`,
        en: `## What you'll learn

How to compute and compare with **operators**: addition, subtraction, multiplication, division, floor division, remainder, powers — plus "greater than", "and" style logic. After this lesson your program works like a calculator and can even "ask questions" about data.

## What is an operator?

Operators are the "symbols" from math: \`+\`, \`-\`, \`*\`, \`/\`. They are exactly what you press on a calculator. In a program, a formula made of "data + operators" is called an **expression** — for example \`3 * 4\`, which evaluates to \`12\`.

Two easily confused "divisions" to tell apart first:

- \`/\` is true division; the result always has a decimal point (\`10 / 4 = 2.5\`)
- \`//\` is floor division; it keeps only the whole part (\`10 // 4 = 2\`)
- \`%\` is the remainder (\`10 % 4 = 2\), i.e. 10 divided by 4 leaves 2 — it answers "how many are left over" when sharing things out

The \`**\` in \`2 ** 10\` is the power operator: 2 to the 10th equals 1024.

Expressions can nest inside expressions: in \`2 * 3 + 4 * 5\`, Python computes both products first and then adds, giving 26; when unsure, parentheses are the safest.

## How to write it

1. **Arithmetic operators**:

| Operator | Meaning | Example | Result |
|---|---|---|---|
| \`+\` \`-\` \`*\` | add/sub/mul | \`3 * 4\` | \`12\` |
| \`/\` | division (always float) | \`10 / 4\` | \`2.5\` |
| \`//\` | floor division | \`10 // 4\` | \`2\` |
| \`%\` | remainder | \`10 % 4\` | \`2\` |
| \`**\` | power | \`2 ** 10\` | \`1024\` |

2. **Comparison operators**: \`==\` (equal), \`!=\` (not equal), \`<\`, \`>\`, \`<=\`, \`>=\`; the result is \`True\` or \`False\`

\`\`\`python
print(3 > 2)      # True
print(3 == 3.0)   # True (equal values suffice)
\`\`\`

3. **Logical operators**: \`and\`, \`or\`, \`not\`

\`\`\`python
print(3 > 2 and 5 < 1)   # False (both sides must be true)
print(not True)          # False
\`\`\`

4. **Precedence**: multiply/divide before add/subtract; parentheses win. When in doubt, **add parentheses** — safer and more readable

\`\`\`python
print((1 + 2) * 3)   # 9, not 7
\`\`\`

5. **Augmented assignment**: \`+=\`, \`-=\`, \`*=\`, \`//=\` are shorthand for "compute then store back" — you will use them heavily when accumulating in loops

\`\`\`python
n = 10
n += 5    # same as n = n + 5
n *= 2    # same as n = n * 2; n is now 30
\`\`\`

## Reading the example line by line

\`\`\`python
a, b = 17, 5
\`\`\`

- Assigns two variables in one line: equivalent to \`a = 17\`, \`b = 5\`

\`\`\`python
print(a // b)   # 3
\`\`\`

- 17 divided by 5 is quotient 3 remainder 2; \`//\` takes the quotient: 3

\`\`\`python
print(a % b)    # 2
\`\`\`

- \`%\` takes the remainder: 2

\`\`\`python
print(a / b)    # 3.4
\`\`\`

- \`/\` is true division: 3.4 (with a decimal point)

\`\`\`python
print(2 ** 8)   # 256
\`\`\`

- \`**\` is the power operator: 2 to the 8th

## Common beginner mistakes

1. **Using \`=\` to compare**: \`if x = 5:\` → \`SyntaxError\`. One equals sign assigns; comparison needs two: \`==\`.
2. **Treating \`//\` as rounding**: \`-10 // 4\` is \`-3\`, not \`-2\` (it floors toward negative infinity).
3. **Assuming floats are exact**: \`0.1 + 0.2 == 0.3\` is \`False\` (floating-point rounding). Compare decimals with a tolerance such as \`abs(a - b) < 1e-9\`.
4. **Subtracting strings**: \`"a" - "b"\` → \`TypeError\`. Strings only support \`+\` (concatenate) and \`*\` (repeat).
5. **Writing powers with \`^\`**: \`2 ^ 10\` does not error but yields 8 — \`^\` is bitwise XOR in Python and has nothing to do with powers. Powers need two asterisks: \`2 ** 10\`.
6. **Expecting \`10 / 5\` to be an integer**: \`/\` always produces a float; \`10 / 5\` is \`2.0\`, not \`2\`. Use \`//\` for the integer quotient, or wrap with \`int()\`.
7. **Negative \`//\` and \`%\` are counterintuitive**: \`-7 // 2\` is \`-4\` (floored), and \`-7 % 2\` is \`1\`. With negatives, work it out on paper first.

## Summary

- \`/\` gives a float, \`//\` floors, \`%\` gives the remainder, \`**\` is power
- Comparisons return \`True\` / \`False\`; \`==\` tests equality
- \`and\` / \`or\` / \`not\` combine conditions
- When precedence is unclear, add parentheses
- Augmented assignment like \`+=\` is the "compute and store" shorthand you will see constantly

Before writing a formula in code, work it out on paper first, then translate it symbol by symbol into Python — it saves a lot of detours; and run it to verify right after each change.

Next lesson we learn **conditionals**: letting the program take different paths based on a comparison.`,
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
          hints: [
            { zh: '这题练「整除与取余」在真实分东西场景里的分工：把秒数分成整分钟和剩余秒。先想：哪个运算符回答「有几个整分钟」，哪个回答「还剩几秒」？', en: 'This exercise is about the roles of floor division and remainder when sharing out seconds into whole minutes and leftovers. Which operator answers "how many whole minutes" and which answers "how many seconds remain"?' },
            { zh: '拆两步：先用 total 算出完整的 60 秒份数，再算分完后的剩余；两个结果各打印一行。注意输出的先后顺序要与题目一致。', en: 'Two steps: first count the whole 60-second batches in total, then the leftover seconds; print each result on its own line, keeping the order required by the task.' },
            { zh: '整除用 `//`、取余用 `%`，都作用在同一个 total 上：`total // 60` 与 `total % 60`。', en: 'Use `//` for floor division and `%` for the remainder, both applied to the same total: `total // 60` and `total % 60`.' },
            { zh: '骨架两行：先 `print(total // 60)`，再 `print(total % 60)`。易错点：`//` 与 `%` 别写反；两行顺序固定为分钟在前、秒在后。', en: 'A two-line skeleton: `print(total // 60)` first, then `print(total % 60)`. Watch out: do not swap `//` and `%`, and keep minutes before seconds.' },
            { zh: '参考答案：`print(total // 60)` 输出 62，`print(total % 60)` 输出 55。3775 ÷ 60 商 62 余 55，正是题目要的两行。', en: 'Reference solution: `print(total // 60)` outputs 62 and `print(total % 60)` outputs 55. Dividing 3775 by 60 gives quotient 62 remainder 55 — exactly the two lines requested.' },
          ],
          solution: 'total = 3775\nprint(total // 60)\nprint(total % 60)\n',
          solutionNote: { zh: '解法让整除与取余分工：`total // 60` 求出 3775 秒里的完整分钟数 62，`total % 60` 求出分完后的剩余秒数 55，两次结果各自单独打印。易错点是把 `//` 误写成 `/`——真除法会得到带小数的 62.91…，导致判定失败；行序也不能颠倒。', en: 'The solution splits the job between the two operators: `total // 60` yields the 62 whole minutes inside 3775 seconds, `total % 60` yields the 55 leftover seconds, and each result is printed alone. A common pitfall is typing `/` instead of `//` — true division gives a decimal 62.91… and fails the judge; the line order must stay fixed too.' },
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
          hints: [
            { zh: '这题练「同时给多个变量赋值」这个 Python 特性：让 a、b 的值互换，不需要第三个临时变量。先想：右边该写什么，才能让两边拿到对方原来的值？', en: 'This exercise is about multiple assignment, a Python feature that swaps the values of a and b without a third temporary variable. What should the right side be so each variable receives the other original value?' },
            { zh: '拆两步：第一步交换，第二步用一次 print 把两个变量打在同一行。写交换时记住一个原则——右边先用旧值算完，再整体写回左边。', en: 'Two steps: swap first, then print both variables in one line. When writing the swap, remember the rule — the right side is fully computed from the old values before anything is stored on the left.' },
            { zh: '多变量赋值的骨架是 `a, b = b, a`；一次打印两个变量用 `print(a, b)`，逗号会让输出自动补一个空格。', en: 'The multiple-assignment skeleton is `a, b = b, a`; printing two variables at once uses `print(a, b)`, where the comma inserts one automatic space in the output.' },
            { zh: '骨架：交换写 `a, b = b, a`，接着 `print(a, b)`。易错点：别拆成 `a = b` 再 `b = a`——那样 a 的旧值 3 会先被覆盖丢失；打印括号里用逗号而不是字符串拼接。', en: 'Skeleton: swap with `a, b = b, a`, then `print(a, b)`. Watch out: do not split it into `a = b` then `b = a` — the old value 3 in a is lost on the first line; inside the print parentheses use a comma, not string concatenation.' },
            { zh: '参考答案：`a, b = b, a` 后接 `print(a, b)`。右边先算好 (8, 3) 再同时写回，所以一次打印就输出 `8 3`。', en: 'Reference solution: `a, b = b, a` followed by `print(a, b)`. The right side evaluates to (8, 3) first and is then stored together, so a single print outputs `8 3`.' },
          ],
          solution: 'a = 3\nb = 8\na, b = b, a\nprint(a, b)\n',
          solutionNote: { zh: '解法的核心是 Python 的元组式赋值：`a, b = b, a` 会先把右边的旧值 (8, 3) 整体求出，再同时写回左边，因此不需要第三个变量就能交换；随后 `print(a, b)` 用逗号分隔，输出时自动在 8 与 3 之间补一个空格。若拆成 `a = b` 再 `b = a`，a 的原值会先被覆盖而丢失。', en: 'The key is tuple-style assignment: `a, b = b, a` first evaluates the right side into (8, 3) and then stores both into the left at once, so no third variable is needed; `print(a, b)` then prints them with one automatic space between, giving 8 3. Splitting into `a = b` then `b = a` would overwrite and lose the original a.' },
        },
      ],
    },

    // ================= 4. 条件分支 =================
    {
      id: 'conditionals',
      title: { zh: '条件分支', en: 'Conditionals' },
      difficulty: 1,
      lecture: {
        zh: `## 这节课学什么

学会用 \`if / elif / else\` 让程序「做选择」：满足条件走这条路，不满足走那条路。学完这节课，你的程序就不只会一条道走到黑，而是能根据情况随机应变。

## 条件分支是什么

生活里你每天都在做分支：**如果**下雨，就带伞；**否则**不带。程序的 \`if\` 就是这个「如果」：

\`\`\`python
if 下雨:
    带伞
\`\`\`

电脑会检查 \`if\` 后面的条件是 \`True\` 还是 \`False\`：是真，就执行下面缩进的代码；是假，就跳过去。

\`elif\` 是「再如果」（else if 的缩写），\`else\` 是「剩下的所有情况」。整条 if 链像一排安检门，从上到下依次检查，**第一个符合条件的门进了，后面的门就不再看**。也就是说，一条 if/elif/else 链最多只会执行**一个**分支；链走完之后，程序接着执行链后面的代码。

## 怎么写

1. **基本结构**：条件后面必须写**冒号 \`:\`**，下一行**缩进 4 个空格**表示「这行归 if 管」

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

2. **缩进就是语法**：Python 不用大括号 \`{}\`，靠缩进区分「哪些行属于哪个分支」。同一代码块的缩进必须完全一致，多一格少一格都会报错。

3. **组合条件**：用 \`and\` / \`or\` 把多个条件连在一起

\`\`\`python
age = 20
has_ticket = True
if age >= 18 and has_ticket:
    print("可以入场")
\`\`\`

4. **分支数量随意**：\`elif\` 可以有任意多个（也可以一个都不写），\`else\` 最多一个且必须放在最后。
5. **嵌套分支**：分支里面还可以再放分支，处理「先看大条件、再看小条件」的情况

\`\`\`python
if score >= 60:
    if score >= 90:
        print("优秀")
    else:
        print("及格")
else:
    print("不及格")
\`\`\`

## 逐行读懂示例

\`\`\`python
n = 7
\`\`\`

- 造一个变量 \`n\`，装 7

\`\`\`python
if n % 2 == 0:
\`\`\`

- \`n % 2\` 求 n 除以 2 的余数；\`== 0\` 判断余数是不是 0（也就是 n 是不是偶数）。7 % 2 = 1，条件为 \`False\`

\`\`\`python
    print("even")
\`\`\`

- 这行缩进了，属于 if 分支；条件为假时被跳过

\`\`\`python
else:
    print("odd")
\`\`\`

- if 的条件不成立就走 else，所以输出 \`odd\`

## 新手常犯的错误

1. **忘写冒号**：\`if score >= 90\` → \`SyntaxError: expected ':'\`。if/elif/else 行尾都要 \`:\`。
2. **缩进不一致**：同一分支里有的行缩进 4 格、有的缩进 2 格 → \`IndentationError\`。建议统一用 4 个空格。
3. **该缩进没缩进**：\`if x > 0:\` 的下一行顶格写 → \`IndentationError: expected an indented block\`。if 下面至少要有一行缩进的代码。
4. **条件里用 \`=\`**：\`if score = 85:\` → \`SyntaxError\`。判断相等要用 \`==\`，一个等号是赋值。
5. **写成 \`else if\`**：Python 里只能写 \`elif\`，写成 \`else if\` → \`SyntaxError: invalid syntax\`。
6. **\`else\` 后面加了条件**：\`else score < 60:\` → \`SyntaxError\`。\`else\` 表示「剩下所有情况」，不需要也不能再写条件。
7. **判断顺序反了**：如果先判断 \`>= 60\` 再判断 \`>= 90\`，85 分会先命中 60 那一档直接离开。分数分级要从高到低判断，才不会「提前下车」。

## 小结

- \`if\` / \`elif\` / \`else\` 让程序按条件走不同的路
- 条件行尾写冒号，分支代码缩进 4 空格
- 缩进就是 Python 的「大括号」，必须严格一致
- 条件本身是 \`True\` / \`False\`，可用 \`and\` / \`or\` 组合
- 一条 if 链最多执行一个分支；分支可以嵌套，但层级太深不好读，能合并就合并

下一课学习**循环**：让重复的工作只写一次代码。`,
        en: `## What you'll learn

How to use \`if / elif / else\` so the program can "make choices": one path when a condition holds, another when it doesn't. After this lesson your program no longer runs blindly in a straight line — it adapts to the situation.

## What is a conditional?

You make branches every day: **if** it rains, take an umbrella; **otherwise**, don't. The \`if\` in a program is exactly that "if":

\`\`\`python
if raining:
    take_umbrella
\`\`\`

The computer checks whether the condition after \`if\` is \`True\` or \`False\`: if true, it runs the indented code below; if false, it skips over it.

\`elif\` means "else if", and \`else\` covers "all remaining cases". The whole if-chain is like a row of security gates checked top to bottom — **once you pass the first gate that matches, the rest are ignored**. In other words, a single if/elif/else chain executes **at most one** branch; after the chain finishes, the program continues with the code that follows it.

## How to write it

1. **Basic structure**: the condition line must end with a **colon \`:\`**, and the next line is **indented 4 spaces** to show "this line belongs to the if"

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

2. **Indentation is syntax**: Python has no braces \`{}\`; indentation decides "which lines belong to which branch". Every line in the same block must be indented identically — one space off is an error.

3. **Combining conditions**: join several conditions with \`and\` / \`or\`

\`\`\`python
age = 20
has_ticket = True
if age >= 18 and has_ticket:
    print("可以入场")
\`\`\`

4. **Branch count is flexible**: \`elif\` may appear any number of times (or none at all); \`else\` at most once, at the end.
5. **Nesting branches**: a branch may contain further branches, for "check the big condition first, then the small one"

\`\`\`python
if score >= 60:
    if score >= 90:
        print("优秀")
    else:
        print("及格")
else:
    print("不及格")
\`\`\`

## Reading the example line by line

\`\`\`python
n = 7
\`\`\`

- Creates a variable \`n\` holding 7

\`\`\`python
if n % 2 == 0:
\`\`\`

- \`n % 2\` is the remainder of n divided by 2; \`== 0\` asks whether that remainder is 0 (i.e. is n even). 7 % 2 = 1, so the condition is \`False\`

\`\`\`python
    print("even")
\`\`\`

- This line is indented, so it belongs to the if branch; it is skipped when the condition is false

\`\`\`python
else:
    print("odd")
\`\`\`

- When the if condition fails, else runs — so the output is \`odd\`

## Common beginner mistakes

1. **Forgetting the colon**: \`if score >= 90\` → \`SyntaxError: expected ':'\`. Every if/elif/else line needs a trailing \`:\`.
2. **Inconsistent indentation**: some lines in one block indented 4 spaces, others 2 → \`IndentationError\`. Stick to 4 spaces.
3. **Missing indentation entirely**: writing the line after \`if x > 0:\` flush left → \`IndentationError: expected an indented block\`. There must be at least one indented line under an if.
4. **Using \`=\` in a condition**: \`if score = 85:\` → \`SyntaxError\`. Equality uses \`==\`; a single equals sign assigns.
5. **Writing \`else if\`**: Python only accepts \`elif\`; writing \`else if\` → \`SyntaxError: invalid syntax\`.
6. **Putting a condition after \`else\`**: \`else score < 60:\` → \`SyntaxError\`. \`else\` means "all remaining cases" and takes no condition.
7. **Checking in the wrong order**: if you test \`>= 60\` before \`>= 90\`, a score of 85 matches the 60 band first and leaves early. Grade from high to low so no one "gets off early".

## Summary

- \`if\` / \`elif\` / \`else\` route the program along different paths
- Condition lines end with a colon; branch code is indented 4 spaces
- Indentation is Python's "braces" and must be strictly consistent
- Conditions evaluate to \`True\` / \`False\` and can combine via \`and\` / \`or\`
- One if-chain executes at most one branch; nesting is allowed but hard to read — merge when you can

Next lesson we learn **loops**: write repetitive work only once.`,
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
          hints: [
            { zh: '这题练条件分支 if/elif/else，并考察「判断顺序」对结果的影响：一个分数必须恰好落进五档中的一档。先想：为什么档位要从高到低判断，而不是从低到高？', en: 'This exercise practices if/elif/else branches and how the order of checks affects the result: one score must fall into exactly one of the five bands. First think: why test the bands from high to low instead of low to high?' },
            { zh: '拆两步：先搭一条逐档检查的分支链，从 ≥90 问起；命中哪一档就输出对应字母并结束。想清楚 85 分会命中第几档，最低那一档又用什么兜底。', en: 'Two steps: build a chain of bands starting at >=90; print the matching letter and stop as soon as one band matches. Work out which band 85 hits, and how the lowest band is covered.' },
            { zh: '分支链骨架：`if 条件:`、`elif 条件:`、`else:`，行尾必须冒号，分支体缩进 4 个空格。输出字母用 `print("A")` 这种形式。', en: 'The chain skeleton is `if condition:`, `elif condition:` and `else:` — each line ends with a colon and each body is indented 4 spaces. Print the letter with something like `print("A")`.' },
            { zh: '骨架：≥90 打 A，elif ≥80 打 B，elif ≥70 打 C，elif ≥60 打 D，最后 else 打 F。易错点：档位顺序颠倒会让 85 先命中 ≥60 而输出 D；比较用 `>=` 而不是 `>`。', en: 'Skeleton: >=90 prints A, elif >=80 prints B, elif >=70 prints C, elif >=60 prints D, then else prints F. Watch out: reversed bands make 85 hit >=60 first and print D; and the comparisons use `>=`, not `>`.' },
            { zh: '参考答案：五档从高到低依次判断——`if score >= 90:` 打 A、`elif score >= 80:` 打 B、`elif score >= 70:` 打 C、`elif score >= 60:` 打 D、`else:` 打 F。85 命中第二档，输出 B。', en: 'Reference solution: five bands from high to low — `if score >= 90:` prints A, `elif score >= 80:` prints B, `elif score >= 70:` prints C, `elif score >= 60:` prints D, and `else:` prints F. Since 85 matches the second band, the output is B.' },
          ],
          solution: 'score = 85\nif score >= 90:\n    print("A")\nelif score >= 80:\n    print("B")\nelif score >= 70:\n    print("C")\nelif score >= 60:\n    print("D")\nelse:\n    print("F")\n',
          solutionNote: { zh: '解法按从高到低的顺序逐档判断：一旦某个条件成立就输出对应字母并离开分支链，85 ≥ 80 成立所以输出 B。关键点有二：档位必须从 ≥90 往下排，否则 85 会先落入 ≥60 的 D；每个条件行尾的冒号与分支体 4 空格缩进缺一不可。', en: 'The solution checks bands from high to low and leaves the chain as soon as a condition holds — since 85 is at least 80, it prints B. Two keys: order the bands from >=90 downward, otherwise 85 falls into the >=60 D band first; and every condition line needs its trailing colon with the body indented 4 spaces.' },
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
          hints: [
            { zh: '这题练用条件分支解决「比较大小」，并且不借助现成的 max() 函数。核心一步是把「X 是最大」翻成条件语言：X 不小于另外两个数。先想 a 是最大该怎么写。', en: 'This exercise uses conditionals to compare numbers without the ready-made max() function. The core step is translating "X is the largest" into a condition: X is not smaller than the other two. First write out when a is the largest.' },
            { zh: '拆两步：让 a、b、c 轮流当候选人，每次用「同时不小于另外两个」这个条件发问；谁的条件成立就打印谁。两个比较条件要同时成立。', en: 'Two steps: let a, b and c each take a turn as the candidate, asking whether it is not smaller than both of the others; print the one whose condition holds. The two comparisons must hold at the same time.' },
            { zh: '两个条件同时成立用 `and` 连接。三个分支用 `if` / `elif` / `else`：`if a >= b and a >= c:` 打印 a。', en: 'Join two conditions that must hold together with `and`. Route the three cases through `if` / `elif` / `else`: `if a >= b and a >= c:` prints a.' },
            { zh: '骨架：`elif b >= a and b >= c:` 打印 b，`else:` 打印 c。易错点：比较用 `>=`（含等于），只写 `>` 在数值并列时会漏判；条件行尾冒号与分支缩进不能省。', en: 'Skeleton: `elif b >= a and b >= c:` prints b and `else:` prints c. Watch out: use `>=` so ties count, since `>` alone misses a number equal to the maximum; keep the trailing colons and the indentation.' },
            { zh: '参考答案：`if a >= b and a >= c:` → `print(a)`；`elif b >= a and b >= c:` → `print(b)`；`else:` → `print(c)`。a=12 同时不小于 b、c，输出 12。', en: 'Reference solution: `if a >= b and a >= c:` → `print(a)`; `elif b >= a and b >= c:` → `print(b)`; `else:` → `print(c)`. Since a=12 is not smaller than b or c, the output is 12.' },
          ],
          solution: 'a = 12\nb = 7\nc = 9\nif a >= b and a >= c:\n    print(a)\nelif b >= a and b >= c:\n    print(b)\nelse:\n    print(c)\n',
          solutionNote: { zh: '解法用两个同时成立的条件判定「某个数最大」：a 若同时 ≥ b 且 ≥ c 必是最大；否则换 b 用同样方式判定；若前两个都不成立，最大值只可能是 c，交给 else 兜底。易错点是用 `>` 忘了等号——出现并列最大值时条件不成立，判定就会出错。', en: 'The solution decides "this number is the maximum" with two conditions that must both hold: a wins if it is at least b and at least c; otherwise b gets the same test; if neither holds, only c can be the maximum, so else covers it. A common mistake is using `>` without the equals sign — ties at the top then fail the condition.' },
        },
      ],
    },

    // ================= 5. 循环 =================
    {
      id: 'loops',
      title: { zh: '循环', en: 'Loops' },
      difficulty: 1,
      lecture: {
        zh: `## 这节课学什么

学会**循环**：让一段代码重复执行任意多次。学完这节课，打印 1 到 100 不用写 100 行代码，写 2 行就够；所有「重复劳动」类的问题你都能对付。

## 循环是什么

想象老师点名：对名单上的**每一个**学生，念出名字。这就是循环——对一串东西，每个都做同样的事。

Python 有两种循环：

- **for 循环**：知道要重复几次、或对一批数据逐个处理（点名型）
- **while 循环**：只要条件成立就一直重复（闹钟型：没到点就一直响）

\`\`\`python
for i in range(5):   # i 依次取 0,1,2,3,4
    print(i)
\`\`\`

读法是：「对 range(5) 里的每一个 i，执行缩进的那行」。循环变量 \`i\` 每轮自动换成下一个值，一共跑 5 轮。

## 怎么写

1. **range() 造一串数**：\`range(5)\` 得到 0~4（从 0 开始，**含头不含尾**）

\`\`\`python
for i in range(2, 10, 3):   # 从 2 到 10，每次 +3：2,5,8
    print(i)
\`\`\`

- 三个参数依次是：起点、终点（不含）、步长

2. **while 循环**：条件为 True 就一直转

\`\`\`python
n = 1
while n <= 3:
    print(n)
    n += 1      # 千万别漏这行，否则条件永远是 True
\`\`\`

3. **break 与 continue**：

- \`break\`：立刻跳出整个循环（到站下车）
- \`continue\`：跳过本轮剩余代码，直接进入下一轮（这一站不下车）

\`\`\`python
for i in range(10):
    if i == 3:
        continue      # 3 不打印
    if i == 5:
        break         # 到 5 就停
    print(i)          # 输出 0 1 2 4
\`\`\`

4. **累加模式**（最常用的套路）：先造一个「存钱罐」变量，循环里往里加

\`\`\`python
total = 0
for i in range(1, 101):
    total += i       # 等价于 total = total + i
print(total)         # 5050
\`\`\`

## 逐行读懂示例

\`\`\`python
total = 0
\`\`\`

- 造一个存钱罐 \`total\`，先放个 0 进去

\`\`\`python
for i in range(1, 101):
\`\`\`

- \`i\` 依次取 1, 2, 3, …, 100（含头不含尾，所以终点要写 101）

\`\`\`python
    total += i
\`\`\`

- 每一轮把当前的 \`i\` 加进存钱罐：0+1=1，1+2=3，3+3=6……

\`\`\`python
print(total)
\`\`\`

- 这行没缩进，不属于循环，循环结束后才执行，输出 5050

## 新手常犯的错误

1. **while 忘了改变条件变量**：循环体里漏写 \`n += 1\` → 程序永远停不下来（死循环），运行会超时。写 while 前先想好「什么能让条件变成 False」。
2. **range 终点少写 1**：想循环 1~100 却写 \`range(1, 100)\` → 只到 99。记住含头不含尾。
3. **循环体忘了缩进**：\`for i in range(5):\` 的下一行顶格写 → \`IndentationError\`。
4. **把初始化写进循环里**：\`total = 0\` 放到循环体内部 → 每轮都被清零，最后只剩下最后一轮的值。初始化要放在循环**外面**。
5. **在 for 里修改循环变量**：\`for i in range(5)\` 里写 \`i += 1\` 没有效果——下一轮 \`i\` 仍按序列取下一个值，你的修改会被覆盖。想手动控制次数，改用 while。
6. **range 步长写成 0**：\`range(0, 10, 0)\` → \`ValueError: range() arg 3 must not be zero\`。步长可以是负数（倒着数），但不能是 0。

## 小结

- \`for i in range(n)\` 重复 n 次；range 含头不含尾
- while 适合「条件成立就一直做」，必须留出退出路径
- \`break\` 跳出循环，\`continue\` 跳过一轮
- 累加套路：循环外 \`total = 0\`，循环内 \`total += i\`
- 想倒着循环用 \`range(10, 0, -1)\`，步长为负就是倒着数

学循环最好的办法：拿一张纸，一行一行写下每轮循环变量的值和存钱罐里的值，亲手走两轮你就全明白了。这个「人肉调试」的本事，以后排查 bug 也用得上。

下一课学习**函数**：把一段代码打包成可复用的工具。`,
        en: `## What you'll learn

How to use **loops**: making a block of code repeat any number of times. After this lesson, printing 1 to 100 takes 2 lines instead of 100 — and every "repetitive chore" problem becomes manageable.

## What is a loop?

Picture a teacher taking attendance: for **every** student on the list, read out the name. That is a loop — do the same thing to each item of a sequence.

Python has two kinds of loops:

- **for loops**: when you know how many repetitions, or want to process a batch of items one by one (attendance style)
- **while loops**: keep repeating as long as a condition holds (alarm-clock style: it rings until the time is up)

\`\`\`python
for i in range(5):   # i takes 0,1,2,3,4 in turn
    print(i)
\`\`\`

Read it as: "for every i in range(5), run the indented line". The loop variable \`i\` automatically moves to the next value each round — 5 rounds in total.

## How to write it

1. **range() produces a sequence of numbers**: \`range(5)\` gives 0~4 (starts at 0, **includes the start, excludes the stop**)

\`\`\`python
for i in range(2, 10, 3):   # from 2 up to 10, step 3: 2,5,8
    print(i)
\`\`\`

- The three parameters are: start, stop (exclusive), step

2. **while loops**: keep spinning while the condition is True

\`\`\`python
n = 1
while n <= 3:
    print(n)
    n += 1      # never omit this line, or the condition stays True forever
\`\`\`

3. **break and continue**:

- \`break\`: exit the whole loop immediately (get off at this stop)
- \`continue\`: skip the rest of this round and go to the next one (don't get off here)

\`\`\`python
for i in range(10):
    if i == 3:
        continue      # skip 3
    if i == 5:
        break         # stop at 5
    print(i)          # outputs 0 1 2 4
\`\`\`

4. **The accumulator pattern** (the most common idiom): create a "piggy bank" variable first, then add into it inside the loop

\`\`\`python
total = 0
for i in range(1, 101):
    total += i       # same as total = total + i
print(total)         # 5050
\`\`\`

## Reading the example line by line

\`\`\`python
total = 0
\`\`\`

- Create the piggy bank \`total\`, starting with 0 inside

\`\`\`python
for i in range(1, 101):
\`\`\`

- \`i\` takes 1, 2, 3, …, 100 (start inclusive, stop exclusive — hence 101 as the stop)

\`\`\`python
    total += i
\`\`\`

- Each round adds the current \`i\` into the piggy bank: 0+1=1, 1+2=3, 3+3=6…

\`\`\`python
print(total)
\`\`\`

- This line is not indented, so it is outside the loop; it runs after the loop finishes and prints 5050

## Common beginner mistakes

1. **Forgetting to update the condition variable in while**: omitting \`n += 1\` inside the loop → the program never stops (an infinite loop) and times out. Before writing while, decide "what will make the condition False".
2. **Off-by-one in the range stop**: wanting 1~100 but writing \`range(1, 100)\` → only reaches 99. Remember: start inclusive, stop exclusive.
3. **Forgetting to indent the loop body**: writing the line after \`for i in range(5):\` flush left → \`IndentationError\`.
4. **Initializing inside the loop**: putting \`total = 0\` inside the loop body → it resets every round and only the last round's value survives. Initialize **outside** the loop.
5. **Modifying the loop variable inside for**: writing \`i += 1\` inside \`for i in range(5)\` has no effect — next round i still takes the next value from the sequence, overriding your change. Use while when you must control the count manually.
6. **A range step of 0**: \`range(0, 10, 0)\` → \`ValueError: range() arg 3 must not be zero\`. The step may be negative (counting down) but never 0.

## Summary

- \`for i in range(n)\` repeats n times; range includes the start, excludes the stop
- while fits "keep doing it while true" — always leave an exit path
- \`break\` exits the loop; \`continue\` skips a round
- Accumulator pattern: \`total = 0\` outside the loop, \`total += i\` inside
- To loop backwards use \`range(10, 0, -1)\` — a negative step counts down

The best way to learn loops: grab a sheet of paper and write down the loop variable and the piggy-bank value for every round — walk through two rounds by hand and it all clicks. This "manual debugging" skill will also help you chase bugs later.

Next lesson we learn **functions**: packaging a block of code into a reusable tool.`,
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
          hints: [
            { zh: '这题练循环的经典「累加器」套路：把 1 到 100 逐个加进一个总变量。先想这个「存钱罐」变量要从几开始、加的动作该放在循环里还是循环外。', en: 'This exercise practices the classic accumulator pattern: adding 1 through 100 one by one into a running total. First think about what the "piggy bank" should start at, and whether the adding lives inside or outside the loop.' },
            { zh: '拆三步：循环前初始化总和；循环里把当前数加进去；循环结束后打印总和。写 range 前先确定终点：题目要加到哪个数？', en: 'Three steps: initialize the total before the loop; add the current number inside the loop; print the total after the loop ends. Before writing range, decide the stop value for the numbers you must add.' },
            { zh: '循环骨架 `for i in range(起点, 终点):`，终点不含；累加用 `total += i`，等价于 `total = total + i`。', en: 'The loop skeleton is `for i in range(start, stop):` with an exclusive stop; accumulate with `total += i`, which equals `total = total + i`.' },
            { zh: '骨架：循环前 `total = 0`；`for i in range(1, 101):` 下缩进写 `total += i`；循环结束后顶格 `print(total)`。易错点：终点写 100 只能加到 99；把 `total = 0` 放进循环体每轮都会被清零。', en: 'Skeleton: `total = 0` before the loop; `for i in range(1, 101):` with `total += i` indented under it; then `print(total)` flush left after the loop. Watch out: a stop of 100 only reaches 99, and putting `total = 0` inside the loop resets it every round.' },
            { zh: '参考答案：`total = 0`；`for i in range(1, 101):` 内 `total += i`；循环后 `print(total)`。i 依次取 1…100，累计结果正是 5050。', en: 'Reference solution: `total = 0`; `for i in range(1, 101):` with `total += i` inside; `print(total)` after the loop. As i runs from 1 to 100 the running total reaches exactly 5050.' },
          ],
          solution: 'total = 0\nfor i in range(1, 101):\n    total += i\nprint(total)\n',
          solutionNote: { zh: '解法是标准的累加器模式：`total = 0` 在循环外建好，循环内每轮 `total += i`，循环结束后再打印。两个关键点：range 含头不含尾，要加到 100 终点必须写 101；存钱罐的初始化若误放进循环体，每轮都会被清零，最终只剩最后一轮的值，结果必然出错。', en: 'The solution is the standard accumulator pattern: `total = 0` is set up before the loop, each round adds with `total += i`, and the total is printed after the loop. Two keys: range includes the start but excludes the stop, so reaching 100 needs a stop of 101; and if the initialization slips inside the loop, the total resets every round and only the last value survives.' },
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
          hints: [
            { zh: '这题练「循环变量驱动格式化输出」：九行内容结构相同，只有乘数在变。先分清哪些字符每行固定、哪个数字需要从 1 走到 9。', en: 'This exercise combines a loop variable with formatted output: all nine lines share one shape, only the multiplier changes. First tell which characters are fixed and which number must run from 1 to 9.' },
            { zh: '拆两步：先写 for 循环让变量 i 依次取 1 到 9；再在循环体内拼出「7 x i = 积」这一行并打印。写之前想好每一行由哪几段文字和数字组成。', en: 'Two steps: write a for loop that gives i the values 1 through 9, then assemble and print one line "7 x i = product" per round. Before coding, work out which text pieces and numbers make up each line.' },
            { zh: '格式化的利器是 f-string：引号前加 `f`，变化的数字放进花括号 `{}`。例如 `f"7 x {i} = {7 * i}"` 会自动算好乘积。', en: 'The formatting tool is the f-string: put `f` before the quote and wrap the changing numbers in braces `{}`. For example `f"7 x {i} = {7 * i}"` computes the product automatically.' },
            { zh: '骨架：`for i in range(1, 10):` 缩进写 `print(f"7 x {i} = {7 * i}")`。易错点：x 和 = 两侧各要一个空格，格式必须逐字符一致；range 终点写 10，i 才取得到 9。', en: 'Skeleton: `for i in range(1, 10):` with `print(f"7 x {i} = {7 * i}")` indented. Watch out: there is one space on each side of x and of =, and the format must match character for character; the range stop is 10 so i reaches 9.' },
            { zh: '参考答案：`for i in range(1, 10):` 内写 `print(f"7 x {i} = {7 * i}")`。i 从 1 走到 9，依次输出 7、14、…、63；若把格式写成 `"7x{i}"` 少了空格，判定会失败。', en: 'Reference solution: inside `for i in range(1, 10):` write `print(f"7 x {i} = {7 * i}")`. As i runs from 1 to 9 the outputs are 7, 14, …, 63; writing `"7x{i}"` without the spaces fails the judge.' },
          ],
          solution: 'for i in range(1, 10):\n    print(f"7 x {i} = {7 * i}")\n',
          solutionNote: { zh: '解法用一个 for 循环驱动 i 从 1 到 9，再借 f-string 把固定字符与变化数字拼成完整一行。f 前缀让花括号里的内容先求值再替换，`{7 * i}` 自动完成乘法。易错点是 x 与 = 两侧的空格数量、以及 range 终点写 10 才能让 i 取到 9。', en: 'The solution runs one for loop over i from 1 to 9 and uses an f-string to merge the fixed characters with the changing numbers. The f prefix evaluates the braces first, so `{7 * i}` multiplies on the fly. Watch out for the spaces around x and =, and remember the range stop must be 10 for i to reach 9.' },
        },
      ],
    },

    // ================= 6. 函数 =================
    {
      id: 'functions',
      title: { zh: '函数', en: 'Functions' },
      difficulty: 2,
      lecture: {
        zh: `## 这节课学什么

学会**定义和调用函数**：把一段代码打包成一个有名字的工具，需要时喊名字即可。学完这节课，你不用反复复制粘贴代码，还能把大问题拆成一个个小问题。

## 函数是什么

函数就像一台**榨汁机**：你把水果（**参数**）放进去，它加工之后递给你果汁（**返回值**）。你不需要知道里面的刀片怎么转，只要会按按钮（**调用**）。

你已经用过别人造好的「榨汁机」：\`print()\`、\`len()\` 都是函数。现在学着自己造一台：

\`\`\`python
def add(a, b):
    return a + b

result = add(3, 4)   # 7
\`\`\`

- \`def\` 是「我要定义函数了」的关键字
- \`add\` 是函数名（起名规则和变量一样）
- \`(a, b)\` 是参数列表：两个入口，接收放进去的数据
- \`return\` 把加工结果递出去，同时立刻结束函数

## 怎么写

1. **先定义后调用**：Python 从上到下执行，调用时函数必须已经定义过

\`\`\`python
def add(a, b):
    """返回 a 与 b 的和"""   # 文档字符串，说明函数用途
    return a + b

print(add(3, 4))    # 7
\`\`\`

2. **return 与 None**：\`return\` 返回结果并结束函数；没写 return 的函数返回 \`None\`（表示「什么都没有」）

3. **默认参数**：给参数预设一个值，调用时不传就用预设值

\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Bob"))                    # Hello, Bob!
print(greet("Alice", greeting="Hi"))   # Hi, Alice!
\`\`\`

4. **多返回值**：return 可以一次返回多个值，用逗号分隔；接收时也用逗号，术语叫**解包**

\`\`\`python
def divmod_(a, b):
    return a // b, a % b     # 一次返回两个结果

q, r = divmod_(17, 5)       # 解包：q=3, r=2
\`\`\`

## 逐行读懂示例

\`\`\`python
def power(base, exp=2):
    return base ** exp
\`\`\`

- 定义函数 \`power\`：第一个参数必须传，第二个 \`exp\` 不传就默认是 2；返回 base 的 exp 次方

\`\`\`python
print(power(5))        # 25
\`\`\`

- 只传一个参数，\`exp\` 用默认值 2，算出 5 的 2 次方

\`\`\`python
print(power(2, 10))    # 1024
\`\`\`

- 传两个参数，算出 2 的 10 次方

\`\`\`python
def min_max(nums):
    return min(nums), max(nums)
\`\`\`

- 一次返回列表的最小值和最大值两个结果

\`\`\`python
lo, hi = min_max([3, 1, 4, 1, 5])
print(lo, hi)          # 1 5
\`\`\`

- 用两个变量接住两个返回值，再一起打印

## 新手常犯的错误

1. **调用写在定义前面**：先写 \`add(1, 2)\` 再写 \`def add\` → \`NameError: name 'add' is not defined\`。把 def 放到前面。
2. **调用时忘写括号**：\`result = add\` 只是把函数本身赋给变量，并没有执行；要执行必须 \`add(3, 4)\`。
3. **return 写成 print**：函数里 \`print(x)\` 只是显示，调用方拿不到值；要把结果交给调用方必须 \`return x\`。
4. **参数个数不对**：\`add(3)\` → \`TypeError: add() missing 1 required positional argument: 'b'\`。按定义传够参数。
5. **函数名被变量覆盖**：先 \`def add()\`，又写 \`add = 10\`，之后调用 \`add(1, 2)\` → \`TypeError: 'int' object is not callable\`。函数名和变量名共用同一套名字空间，不要重名。

## 小结

- \`def 名字(参数):\` 定义函数，\`return\` 交出结果
- 先定义后调用；没有 return 的函数返回 \`None\`
- 默认参数让调用更灵活；多返回值配合解包很好用
- 一个函数只做一件事，名字要说明它做什么
- 参数在函数内部是一个独立的名字，给它重新赋值不会影响外面的变量

拿到题目先想清楚：这件事的输入是什么、输出是什么？把它包装成函数之后，剩下的就只是填空。

下一课学习**列表**：一次保存一大批数据。`,
        en: `## What you'll learn

How to **define and call functions**: packaging a block of code into a named tool you can summon by name. After this lesson you stop copy-pasting code, and you can break big problems into small ones.

## What is a function?

A function is like a **juicer**: you put fruit in (the **parameters**), it processes them and hands you juice back (the **return value**). You don't need to know how the blades spin inside — you just press the button (**calling**).

You have already used juicers built by others: \`print()\` and \`len()\` are functions. Now build your own:

\`\`\`python
def add(a, b):
    return a + b

result = add(3, 4)   # 7
\`\`\`

- \`def\` is the keyword announcing "I'm defining a function"
- \`add\` is the function name (naming rules same as variables)
- \`(a, b)\` is the parameter list: two slots that receive the incoming data
- \`return\` hands the processed result out and ends the function immediately

## How to write it

1. **Define before calling**: Python executes top to bottom; a function must already exist when called

\`\`\`python
def add(a, b):
    """Return the sum of a and b."""   # docstring: what the function does
    return a + b

print(add(3, 4))    # 7
\`\`\`

2. **return and None**: \`return\` sends back a result and ends the function; a function without return returns \`None\` (meaning "nothing")

3. **Default parameters**: give a parameter a preset value used when the caller omits it

\`\`\`python
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Bob"))                    # Hello, Bob!
print(greet("Alice", greeting="Hi"))   # Hi, Alice!
\`\`\`

4. **Multiple return values**: return can hand back several values separated by commas; receive them with commas too — formally called **unpacking**

\`\`\`python
def divmod_(a, b):
    return a // b, a % b     # two results at once

q, r = divmod_(17, 5)       # unpack: q=3, r=2
\`\`\`

## Reading the example line by line

\`\`\`python
def power(base, exp=2):
    return base ** exp
\`\`\`

- Defines \`power\`: the first parameter is required; the second, \`exp\`, defaults to 2 when omitted; returns base to the exp-th power

\`\`\`python
print(power(5))        # 25
\`\`\`

- Only one argument is passed, so \`exp\` uses the default 2 — 5 squared

\`\`\`python
print(power(2, 10))    # 1024
\`\`\`

- Two arguments: 2 to the 10th power

\`\`\`python
def min_max(nums):
    return min(nums), max(nums)
\`\`\`

- Returns both the minimum and the maximum of the list in one call

\`\`\`python
lo, hi = min_max([3, 1, 4, 1, 5])
print(lo, hi)          # 1 5
\`\`\`

- Two variables catch the two return values, then print them together

## Common beginner mistakes

1. **Calling before defining**: writing \`add(1, 2)\` above \`def add\` → \`NameError: name 'add' is not defined\`. Put the def first.
2. **Forgetting the parentheses when calling**: \`result = add\` merely assigns the function itself to a variable without running it; to run it, write \`add(3, 4)\`.
3. **Writing print instead of return**: \`print(x)\` inside a function only displays — the caller gets nothing; hand results back with \`return x\`.
4. **Wrong argument count**: \`add(3)\` → \`TypeError: add() missing 1 required positional argument: 'b'\`. Pass as many arguments as defined.
5. **Function name shadowed by a variable**: after \`def add()\`, writing \`add = 10\` makes \`add(1, 2)\` → \`TypeError: 'int' object is not callable\`. Function and variable names share one namespace — don't reuse names.

## Summary

- \`def name(params):\` defines a function; \`return\` hands back the result
- Define before calling; a function without return gives \`None\`
- Default parameters make calls flexible; multiple returns pair well with unpacking
- One job per function, and a name that says what it does
- A parameter is an independent name inside the function; reassigning it does not affect the outside variable

When facing a task, think first: what goes in, and what comes out? Once it is wrapped in a function, the rest is just filling in the blanks.

Next lesson we learn **lists**: storing a whole batch of data at once.`,
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
          hints: [
            { zh: '这题练「定义函数 + 试除算法」：素数是大于 1 且只有 1 和自身两个因数的数。先想：函数该先排除哪类数？判断的依据是「能不能被某个更小的数整除」。', en: 'This exercise combines defining a function with trial division: a prime is greater than 1 and divisible only by 1 and itself. First think: which numbers should the function rule out at once, and what test reveals an extra divisor?' },
            { zh: '拆两步：先实现 is_prime(n)——边界处理 + 试除循环，用 return 给出 True/False；再在函数外用循环遍历 2 到 19，是素数就打印。先想试除要从几试到几。', en: 'Two steps: implement is_prime(n) with an edge case and a trial loop, returning True or False; then loop over 2 to 19 outside and print each prime. Decide where the trial division starts and stops.' },
            { zh: '试除循环 `for i in range(2, n):`；「能整除」的判断是余数为 0：`n % i == 0`。函数用 `return` 立即给出结论。', en: 'The trial loop is `for i in range(2, n):`; "divides evenly" means the remainder is 0, tested with `n % i == 0`. Use `return` to hand the verdict back immediately.' },
            { zh: '骨架：先 `if n < 2: return False`；循环里一遇 `n % i == 0` 就 `return False`；循环走完没有整除，`return True`。主循环 `for n in range(2, 20):` 配 `if is_prime(n):` 打印。易错点：边界 1 不是素数，别漏掉 n<2 的判断。', en: 'Skeleton: `if n < 2: return False` first; inside the loop return False at the first `n % i == 0`; if the loop finishes with no divisor, return True. Then `for n in range(2, 20):` with `if is_prime(n):` prints. Watch out: 1 is not prime, so the n < 2 guard matters.' },
            { zh: '参考答案：函数先排除 n<2，再试除 2 到 n-1，整除即返回 False，最后返回 True；主程序遍历 2~19 打印所有命中 True 的数。输出 2、3、5、7、11、13、17、19 共 8 行。', en: 'Reference solution: the function rules out n < 2, trial-divides from 2 to n-1, returns False on any divisor and True at the end; the main program loops over 2..19 and prints every true hit. The output is 2, 3, 5, 7, 11, 13, 17, 19 — 8 lines.' },
          ],
          solution: 'def is_prime(n):\n    if n < 2:\n        return False\n    for i in range(2, n):\n        if n % i == 0:\n            return False\n    return True\n\nfor n in range(2, 20):\n    if is_prime(n):\n        print(n)\n',
          solutionNote: { zh: '解法采用试除法：小于 2 的数直接返回 False；从 2 试除到 n-1，一旦 `n % i == 0` 说明存在真因数，立即返回 False；循环走完仍无整除，n 就是素数，返回 True。主程序遍历 2 到 19 逐个调用。易错点是整除判断写成单等号、或漏掉 n<2 的边界把 1 误判为素数。', en: 'The solution uses trial division: any n < 2 returns False at once; dividing by 2 through n-1, the first `n % i == 0` proves a real divisor and returns False; if the loop ends clean, n is prime and True goes back. The main program calls it for every number from 2 to 19. Common mistakes: a single equals sign in the test, or dropping the n < 2 guard so 1 counts as prime.' },
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
          hints: [
            { zh: '这题练「让两个变量像履带一样滚动」来生成斐波那契数列：每一项是前两项之和，开头是 1、1。先想：只记住前一个数够不够？为什么需要同时记住两个？', en: 'This exercise builds the Fibonacci sequence by rolling two variables forward: each term sums the two before it, starting 1, 1. First think: is remembering just the last number enough, or do you need two at once?' },
            { zh: '拆三步：建一个空列表准备收集结果；循环 n 次，每轮把当前数放进列表，再让两个「记住的变量」整体前移一位；循环结束把列表返回。主程序拿到列表后逐个打印。', en: 'Three steps: create an empty list to collect results; loop n times, each round append the current number and slide the two remembered variables forward by one; return the list when done. The main program then prints the items one by one.' },
            { zh: '滚动更新的写法是 `a, b = b, a + b`：右边先用旧值算出新数，再同时赋给左边。往列表末尾加元素用 `result.append(x)`。', en: 'The rolling update is `a, b = b, a + b`: the right side is computed from the old values first, then both are assigned together. Add to the end of a list with `result.append(x)`.' },
            { zh: '骨架：`result = []`；`a, b = 1, 1`；`for _ in range(n):` 内先 `result.append(a)` 再 `a, b = b, a + b`；最后 `return result`。易错点：先收集旧的 a 再滚动，顺序不能反；开头两项都是 1。', en: 'Skeleton: `result = []`; `a, b = 1, 1`; inside `for _ in range(n):` append a first, then `a, b = b, a + b`; finally `return result`. Watch out: collect the old a before rolling, and both starting values are 1.' },
            { zh: '参考答案：fib(10) 循环 10 轮，每轮把当前的 a 收进列表再执行 `a, b = b, a + b`，返回后主程序 for 循环逐个打印，输出 1、1、2、3、5、8、13、21、34、55。', en: 'Reference solution: fib(10) loops 10 times, appending the current a and running `a, b = b, a + b` each round; the returned list is printed item by item — 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.' },
          ],
          solution: 'def fib(n):\n    result = []\n    a, b = 1, 1\n    for _ in range(n):\n        result.append(a)\n        a, b = b, a + b\n    return result\n\nfor x in fib(10):\n    print(x)\n',
          solutionNote: { zh: '解法用两个变量 a、b 记住最近的两个斐波那契数：每轮先把当前的 a 追加进列表，再用 `a, b = b, a + b` 整体前移。因为右边先按旧值算好再同时赋值，两个变量不会互相覆盖，这正是它正确的关键。循环恰好 n 轮便得到前 n 项，主程序逐个打印。', en: 'The solution keeps the two latest Fibonacci numbers in a and b: each round appends the current a, then runs `a, b = b, a + b` to slide forward. Since the right side is evaluated from the old values before either assignment, the two variables never overwrite each other — that is why it works. Exactly n rounds yield the first n terms, printed one per line.' },
        },
      ],
    },

    // ================= 7. 列表 =================
    {
      id: 'lists',
      title: { zh: '列表', en: 'Lists' },
      difficulty: 2,
      lecture: {
        zh: `## 这节课学什么

学会用**列表**（list）一次保存一批数据，并掌握增删、排序、切片和列表推导式。学完这节课，处理 100 个成绩、1000 个名字都不在话下。

## 列表是什么

变量是一个盒子，列表是**一排编了号的盒子**——像一列火车车厢，每节车厢存一个数据，从车头开始编号，而且**编号从 0 开始**（这是编程世界的通用惯例）。

\`\`\`python
nums = [4, 8, 15, 16, 23, 42]
\`\`\`

- 方括号 \`[]\` 表示列表，元素之间用逗号隔开
- \`nums[0]\` 是 4（第 1 节车厢），\`nums[1]\` 是 8，依此类推
- \`nums[-1]\` 是 42（负数下标从车尾往前数：-1 表示最后一个）

列表是**可变的**：你可以随时往里加东西、删东西、给某节车厢换货。

## 怎么写

1. **取元素与切片**：切片 \`nums[1:4]\` 取第 1 到第 3 个元素（**含头不含尾**），得到一个新列表

\`\`\`python
print(nums[1:4])   # [8, 15, 16]
print(nums[::-1])  # 反转整个列表
\`\`\`

2. **增删改**：

| 操作 | 说明 |
|---|---|
| \`nums.append(x)\` | 尾部追加一个元素 |
| \`nums.insert(i, x)\` | 在位置 i 插入 |
| \`nums.remove(x)\` | 删除第一个等于 x 的元素 |
| \`nums.sort()\` | 原地排序（升序） |

3. **聚合统计**：\`len()\`（个数）、\`sum()\`（求和）、\`max()\` / \`min()\`（最大最小）

4. **遍历**：

\`\`\`python
for v in nums:                  # 直接取值（推荐）
    print(v)
for i, v in enumerate(nums):   # 需要下标时
    print(i, v)
\`\`\`

5. **列表推导式**：一行完成「加工 + 筛选」，是 Python 最有代表性的写法

\`\`\`python
squares = [x * x for x in range(1, 6)]        # [1, 4, 9, 16, 25]
evens = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]
\`\`\`

读法：「对每个 x，若满足条件，就把表达式放进来」。

## 逐行读懂示例

\`\`\`python
nums = [4, 8, 15, 16, 23, 42]
\`\`\`

- 造一列 6 节车厢的火车，下标 0~5

\`\`\`python
print(nums[::-1])
\`\`\`

- 切片步长为 -1，从尾到头取一遍：\`[42, 23, 16, 15, 8, 4]\`

\`\`\`python
print(sum(nums), max(nums))
\`\`\`

- 求和得 108，最大值 42；逗号分隔输出，中间补空格

\`\`\`python
print([x * x for x in nums if x % 2 == 0])
\`\`\`

- 推导式：对每个偶数 x 计算 x*x，得到 \`[16, 64, 256, 576, 1764]\`

## 新手常犯的错误

1. **下标越界**：只有 6 个元素却取 \`nums[6]\` → \`IndexError: list index out of range\`。最大下标是 \`len(nums) - 1\`。
2. **以为下标从 1 开始**：\`nums[1]\` 取的是第 **2** 个元素，不是第 1 个。
3. **删除不存在的值**：\`nums.remove(99)\` → \`ValueError: list.remove(x): x not in list\`。
4. **边遍历边删除**：在 for 循环里 remove 元素会跳过一些元素。先拷贝一份再改，或用推导式生成新列表。
5. **\`b = a\` 不是复制**：这只是给同一个列表又贴了一张标签，改 \`b\` 时 \`a\` 也跟着变。真正复制要用 \`a.copy()\` 或切片 \`a[:]\`。
6. **append 整个列表**：\`nums.append([5, 6])\` 会把 \`[5, 6]\` 当成**一个**元素塞进去，变成嵌套列表。想一次接多个元素，用 \`extend\` 或 \`+\`。
7. **切片越界不报错**：\`nums[10:20]\` 不会报错，而是返回空列表（或截到结尾）；会报 \`IndexError\` 的只有单个下标取元素。

## 小结

- 列表 = 有序、可变的一排数据；下标从 0 开始，\`[-1]\` 是最后一个
- \`append\` / \`remove\` / \`sort\` 是最常用的操作
- \`len\` / \`sum\` / \`max\` / \`min\` 一行搞定统计
- 列表推导式 \`[表达式 for x in 序列 if 条件]\` 值得练到熟练
- \`b = a\` 只是起别名；复制用 \`a.copy()\` 或 \`a[:]\`

列表的操作多到记不住很正常：先把 \`append\`、下标、切片和 \`len\` 用熟，其他的等用到时再回来查这一课就行。忘了列表里装了什么，随时 \`print(nums)\` 看一眼；动手做练习，才是掌握列表的最快路径。

下一课学习**字符串**的更多玩法。`,
        en: `## What you'll learn

How to use **lists** to store a whole batch of data at once, plus adding, removing, sorting, slicing and list comprehensions. After this lesson, handling 100 grades or 1000 names is no trouble at all.

## What is a list?

A variable is one box; a list is **a row of numbered boxes** — like a train: each car holds one piece of data, numbered from the front, and **the numbering starts at 0** (a universal convention in programming).

\`\`\`python
nums = [4, 8, 15, 16, 23, 42]
\`\`\`

- Square brackets \`[]\` denote a list; elements are separated by commas
- \`nums[0]\` is 4 (the first car), \`nums[1]\` is 8, and so on
- \`nums[-1]\` is 42 (negative indices count from the rear: -1 means the last one)

Lists are **mutable**: you can add items, remove items, or swap the cargo of any car at any time.

## How to write it

1. **Indexing and slicing**: the slice \`nums[1:4]\` takes elements 1 through 3 (**start inclusive, stop exclusive**) and yields a new list

\`\`\`python
print(nums[1:4])   # [8, 15, 16]
print(nums[::-1])  # the whole list reversed
\`\`\`

2. **Add / remove / modify**:

| Operation | Description |
|---|---|
| \`nums.append(x)\` | append to the end |
| \`nums.insert(i, x)\` | insert at index i |
| \`nums.remove(x)\` | remove the first element equal to x |
| \`nums.sort()\` | in-place ascending sort |

3. **Aggregations**: \`len()\` (count), \`sum()\` (total), \`max()\` / \`min()\` (extremes)

4. **Iteration**:

\`\`\`python
for v in nums:                  # values directly (recommended)
    print(v)
for i, v in enumerate(nums):   # when you need the index
    print(i, v)
\`\`\`

5. **List comprehensions**: do "transform + filter" in one line — Python's signature move

\`\`\`python
squares = [x * x for x in range(1, 6)]        # [1, 4, 9, 16, 25]
evens = [x for x in range(10) if x % 2 == 0]  # [0, 2, 4, 6, 8]
\`\`\`

Read it as: "for each x that passes the condition, put the expression in".

## Reading the example line by line

\`\`\`python
nums = [4, 8, 15, 16, 23, 42]
\`\`\`

- Build a train of 6 cars, indices 0~5

\`\`\`python
print(nums[::-1])
\`\`\`

- A slice with step -1 walks from the end to the front: \`[42, 23, 16, 15, 8, 4]\`

\`\`\`python
print(sum(nums), max(nums))
\`\`\`

- Sum is 108, max is 42; the comma-separated output gets a space in between

\`\`\`python
print([x * x for x in nums if x % 2 == 0])
\`\`\`

- Comprehension: compute x*x for each even x, giving \`[16, 64, 256, 576, 1764]\`

## Common beginner mistakes

1. **Index out of range**: only 6 elements but \`nums[6]\` → \`IndexError: list index out of range\`. The largest index is \`len(nums) - 1\`.
2. **Assuming indices start at 1**: \`nums[1]\` fetches the **2nd** element, not the first.
3. **Removing a missing value**: \`nums.remove(99)\` → \`ValueError: list.remove(x): x not in list\`.
4. **Removing while iterating**: remove inside a for loop skips elements. Modify a copy, or build a new list with a comprehension.
5. **\`b = a\` is not a copy**: it merely sticks another label on the same list — changing \`b\` changes \`a\` too. To truly copy, use \`a.copy()\` or the slice \`a[:]\`.
6. **Appending a whole list**: \`nums.append([5, 6])\` inserts \`[5, 6]\` as a **single** element, creating a nested list. To absorb several elements use \`extend\` or \`+\`.
7. **Slicing out of range doesn't error**: \`nums[10:20]\` returns an empty list (or is clipped at the end) instead of raising; only single-index access raises \`IndexError\`.

## Summary

- A list is an ordered, mutable row of data; indices start at 0, and \`[-1]\` is the last item
- \`append\` / \`remove\` / \`sort\` are the everyday operations
- \`len\` / \`sum\` / \`max\` / \`min\` do statistics in one call
- The comprehension \`[expr for x in seq if cond]\` is worth practicing until fluent
- \`b = a\` is just an alias; copy with \`a.copy()\` or \`a[:]\`

There are too many list operations to memorize — that's normal. First get fluent with \`append\`, indexing, slicing and \`len\`; come back to this lesson for the rest when you need them. And whenever you forget what a list holds, just \`print(nums)\` and look. Doing the exercises by hand is the fastest way to master lists.

Next lesson: more tricks with **strings**.`,
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
          hints: [
            { zh: '这题练「用内置函数对列表做聚合统计」：四个输出分别回答求和、最大、最小、个数。先回忆讲解里为每个问题准备的现成工具叫什么名字。', en: 'This exercise uses built-in functions to summarize a list: four outputs answer the total, the maximum, the minimum and the count. Recall the ready-made tool the lesson provided for each question.' },
            { zh: '把任务拆成四行独立的打印，每行解决一个问题，互不影响。动手前先确认四行的先后顺序，要和题目列出的顺序一一对应。', en: 'Split the task into four independent print lines, each solving one question. Before coding, confirm that the order of the four lines matches the order listed in the prompt.' },
            { zh: '四个内置工具：`sum(nums)` 求和、`max(nums)` 取最大、`min(nums)` 取最小、`len(nums)` 数个数。', en: 'Four built-in tools: `sum(nums)` totals, `max(nums)` finds the maximum, `min(nums)` finds the minimum, and `len(nums)` counts the items.' },
            { zh: '骨架四行：`print(sum(nums))`、`print(max(nums))`、`print(min(nums))`、`print(len(nums))`。易错点：个数用 `len` 而不是 `length`；顺序是总和、最大、最小、个数，最大和最小别颠倒。', en: 'Four-line skeleton: `print(sum(nums))`, `print(max(nums))`, `print(min(nums))`, `print(len(nums))`. Watch out: the count uses `len`, not `length`; the order is total, max, min, count — do not swap max and min.' },
            { zh: '参考答案：四条 print 依次调用 sum、max、min、len，输出 108、42、4、6，各占一行。这四个函数都直接接收列表并返回结果，无需自己写循环。', en: 'Reference solution: four prints calling sum, max, min and len in turn output 108, 42, 4 and 6, one per line. Each function takes the list directly and returns the answer, so no manual loop is needed.' },
          ],
          solution: 'nums = [4, 8, 15, 16, 23, 42]\nprint(sum(nums))\nprint(max(nums))\nprint(min(nums))\nprint(len(nums))\n',
          solutionNote: { zh: '解法直接调用四个针对列表的内置函数，每行一个：sum 求和得 108，max 与 min 分别取出最大值 42 与最小值 4，len 返回元素个数 6。四个函数都吃进同一个列表、各自返回一个答案，因此顺序要与题目保持一致（总和、最大、最小、个数）。', en: 'The solution calls four list-focused built-ins, one per line: sum totals to 108, max and min pull out 42 and 4, and len returns 6 elements. Each function takes the same list and returns one answer, so keep the order aligned with the prompt: total, max, min, count.' },
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
          hints: [
            { zh: '这题练列表推导式的两个动作：从 1~10 中筛选出偶数、再对每个偶数求平方。先想清楚哪部分是筛选条件、哪部分是变换表达式。', en: 'This exercise practices the two actions inside a list comprehension: filtering the evens from 1 to 10, then squaring each one. First tell which part is the filter and which is the transform.' },
            { zh: '拆两步：先用一条推导式把「筛选 + 求平方」的结果收集成一个列表；再用 for 循环把这个列表逐行打印。写之前先确定筛选的判断式。', en: 'Two steps: first use one comprehension to collect the filtered and squared results into a list; then print that list line by line with a for loop. Decide on the filtering test before writing it.' },
            { zh: '推导式骨架：`[表达式 for 变量 in range(起点, 终点) if 条件]`。偶数的判断是 `x % 2 == 0`，平方写成 `x * x`。', en: 'The comprehension skeleton is `[expression for variable in range(start, stop) if condition]`. An even number tests as `x % 2 == 0`, and squaring is written `x * x`.' },
            { zh: '骨架：`result = [x * x for x in range(1, 11) if x % 2 == 0]`，再 `for v in result:` 里 `print(v)`。易错点：range 终点不含，要取到 10 就得写 11；判断相等用 `==` 而不是 `=`。', en: 'Skeleton: `result = [x * x for x in range(1, 11) if x % 2 == 0]`, then `print(v)` inside `for v in result:`. Watch out: the exclusive range stop means writing 11 to reach 10, and equality uses `==`, not `=`.' },
            { zh: '参考答案：上面的推导式先得到 `[4, 16, 36, 64, 100]`，再由 for 循环打印成五行。若不用推导式，也可以改写为 for + if 的普通循环逐个求平方。', en: 'Reference solution: the comprehension above first yields `[4, 16, 36, 64, 100]`, then a loop prints five lines. Without a comprehension, a plain for plus if loop that squares each even works just as well.' },
          ],
          solution: 'result = [x * x for x in range(1, 11) if x % 2 == 0]\nfor v in result:\n    print(v)\n',
          solutionNote: { zh: '解法用一条推导式完成「筛选 + 加工」：遍历 1 到 10 时 `if x % 2 == 0` 只放行偶数，`x * x` 立即求平方，结果直接收集成列表，再由 for 循环逐行打印。关键点是 range 含头不含尾（终点写 11）以及整除判断用双等号。换用普通 for + if 写法思路相同。', en: 'The solution does both jobs in one comprehension: as x walks from 1 to 10, `if x % 2 == 0` admits only evens and `x * x` squares them at once, collecting a list that a for loop then prints line by line. Keys: range excludes its stop, so write 11, and equality uses two equals signs. A plain for plus if loop would follow the same idea.' },
        },
      ],
    },

    // ================= 8. 字符串 =================
    {
      id: 'strings',
      title: { zh: '字符串', en: 'Strings' },
      difficulty: 2,
      lecture: {
        zh: `## 这节课学什么

学会处理**文字**：大小写转换、去空格、切分、拼接、查找、格式化。学完这节课，你能处理用户输入、清洗数据、生成格式漂亮的输出。

## 字符串是什么

字符串就是**一串文字**，用引号包起来（单引号双引号都行）。可以把它想象成一挂珍珠项链：每颗珍珠是一个字符，**从 0 开始编号**，还能像切香肠一样切出一段（切片）。

和列表最大的区别：字符串是**不可变的**——项链上的珍珠不能摘下来换。所有「修改」操作其实是造了一条**新项链**给你，原来那条原封不动。

## 怎么写

1. **索引与切片**（和列表同一套语法）

\`\`\`python
s = "Hello"
print(s[0])      # H
print(s[-1])     # o
print(s[1:4])    # ell（含头不含尾）
\`\`\`

2. **常用方法**（注意：它们都返回**新字符串**）

| 方法 | 例子 | 结果 |
|---|---|---|
| \`upper()\` / \`lower()\` | \`"ab".upper()\` | \`"AB"\` |
| \`strip()\` | \`" hi ".strip()\` | \`"hi"\`（去两端空白） |
| \`split()\` | \`"a,b".split(",")\` | \`['a', 'b']\`（切成列表） |
| \`join()\` | \`"-".join(["a","b"])\` | \`"a-b"\`（列表拼回字符串） |
| \`replace()\` | \`"aba".replace("a","c")\` | \`"cbc"\` |
| \`find()\` | \`"abc".find("b")\` | \`1\`（找不到返回 -1） |
| \`count()\` | \`"banana".count("an")\` | \`2\` |

3. **判断类方法**：返回 True / False

\`\`\`python
"123".isdigit()          # True
"abc".isalpha()          # True
"s.py".endswith(".py")   # True
\`\`\`

4. **f-string 格式化**：控制小数位数和对齐

\`\`\`python
pi = 3.14159
print(f"{pi:.2f}")     # 3.14（保留两位小数）
print(f"{42:5d}|")     #    42|（占 5 格宽，右对齐）
\`\`\`

5. **转义字符**：\`\\n\` 表示换行、\`\\t\` 表示制表符；想在字符串里放一个同款引号，在它前面加一个反斜杠转义

\`\`\`python
print("line1\\nline2")     # \\n 让输出分成两行
print('it\\'s fine')       # 转义单引号
\`\`\`

## 逐行读懂示例

\`\`\`python
s = "Hello Python"
\`\`\`

- 造一个字符串。注意中间的空格也是一个字符，会参与计数

\`\`\`python
print(len(s))            # 12
\`\`\`

- 长度：12，空格也算

\`\`\`python
print(s.upper())
\`\`\`

- 全部转大写：\`HELLO PYTHON\`。\`s\` 本身没变，这行得到的是一个新字符串

\`\`\`python
print(s.replace("l", "L"))
\`\`\`

- 把所有小写 l 换成大写 L：\`HeLLo Python\`

\`\`\`python
print(s.split())
\`\`\`

- 按空白切分：\`['Hello', 'Python']\`

\`\`\`python
print("-".join(["2026", "09", "07"]))
\`\`\`

- 用 \`-\` 把列表拼回一个字符串：\`2026-09-07\`

## 新手常犯的错误

1. **试图修改某个字符**：\`s[0] = "x"\` → \`TypeError: 'str' object does not support item assignment\`。要改就生成新串：\`s = "x" + s[1:]\` 或用 \`replace\`。
2. **以为方法改了原串**：\`s.upper()\` 之后直接打印 \`s\` 还是原样——必须接住返回值：\`s = s.upper()\`。
3. **复制代码带来全角符号**：从网页复制的代码常混入全角引号或空格 → \`SyntaxError\`。
4. **误会 find 的返回值**：\`"abc".find("a")\` 返回 0（位置 0），不是「没找到」；没找到返回 -1。判断包含时用 \`if "a" in s\` 更清晰。
5. **引号提前结束字符串**：\`'it's'\` → \`SyntaxError\`。写英文缩写（it's、don't）时最容易踩这个坑。外面换双引号（\`"it's"\`）或转义（\`'it\\'s'\`）都可以。
6. **用 \`+\` 拼接数字**：\`"age: " + 18\` → \`TypeError\`。数字和文字拼接首选 f-string：\`f"age: {18}"\`。

## 小结

- 字符串是不可变序列：索引、切片与列表同款语法
- 方法返回新字符串：\`upper\` / \`strip\` / \`split\` / \`join\` / \`replace\` 最常用
- \`in\` 判断包含；\`f"{x:.2f}"\` 控制格式
- 空格也是字符，长度和下标都要算上它
- \`\\n\` 换行、\`\\t\` 制表；特殊字符用反斜杠转义

字符串方法不需要背：记住「一定有个方法能干这件事」，然后去查就行。查的时候想想中文关键词的英文，比如「切分」是 split、「拼接」是 join，用得多了自然就记住了。

下一课学习**字典与集合**，用「标签」而非「编号」管理数据。`,
        en: `## What you'll learn

How to process **text**: case conversion, trimming, splitting, joining, searching and formatting. After this lesson you can handle user input, clean up data, and produce nicely formatted output.

## What is a string?

A string is simply **a run of text** wrapped in quotes (single or double both work). Picture it as a strand of pearls: each pearl is one character, **numbered from 0**, and you can slice off a segment like cutting a sausage.

The big difference from lists: strings are **immutable** — the pearls on the strand cannot be swapped. Every "modification" actually builds you a **new strand**; the original stays untouched.

## How to write it

1. **Indexing and slicing** (same syntax as lists)

\`\`\`python
s = "Hello"
print(s[0])      # H
print(s[-1])     # o
print(s[1:4])    # ell (start inclusive, stop exclusive)
\`\`\`

2. **Common methods** (note: they all return **new strings**)

| Method | Example | Result |
|---|---|---|
| \`upper()\` / \`lower()\` | \`"ab".upper()\` | \`"AB"\` |
| \`strip()\` | \`" hi ".strip()\` | \`"hi"\` (trim surrounding whitespace) |
| \`split()\` | \`"a,b".split(",")\` | \`['a', 'b']\` (split into a list) |
| \`join()\` | \`"-".join(["a","b"])\` | \`"a-b"\` (glue a list back into a string) |
| \`replace()\` | \`"aba".replace("a","c")\` | \`"cbc"\` |
| \`find()\` | \`"abc".find("b")\` | \`1\` (-1 if not found) |
| \`count()\` | \`"banana".count("an")\` | \`2\` |

3. **Predicate methods**: return True / False

\`\`\`python
"123".isdigit()          # True
"abc".isalpha()          # True
"s.py".endswith(".py")   # True
\`\`\`

4. **f-string formatting**: control decimals and alignment

\`\`\`python
pi = 3.14159
print(f"{pi:.2f}")     # 3.14 (two decimal places)
print(f"{42:5d}|")     #    42| (width 5, right-aligned)
\`\`\`

5. **Escape characters**: \`\\n\` means newline and \`\\t\` means tab; to put a matching quote inside the string, precede it with a backslash

\`\`\`python
print("line1\\nline2")     # \\n splits the output into two lines
print('it\\'s fine')       # escaped single quote
\`\`\`

## Reading the example line by line

\`\`\`python
s = "Hello Python"
\`\`\`

- Creates a string. Note the space in the middle is also a character and counts

\`\`\`python
print(len(s))            # 12
\`\`\`

- Length: 12 — the space counts too

\`\`\`python
print(s.upper())
\`\`\`

- Uppercase everything: \`HELLO PYTHON\`. \`s\` itself is unchanged; this line produces a new string

\`\`\`python
print(s.replace("l", "L"))
\`\`\`

- Replace every lowercase l with capital L: \`HeLLo Python\`

\`\`\`python
print(s.split())
\`\`\`

- Split on whitespace: \`['Hello', 'Python']\`

\`\`\`python
print("-".join(["2026", "09", "07"]))
\`\`\`

- Glue the list back into one string with \`-\`: \`2026-09-07\`

## Common beginner mistakes

1. **Trying to modify a character**: \`s[0] = "x"\` → \`TypeError: 'str' object does not support item assignment\`. Build a new string instead: \`s = "x" + s[1:]\` or use \`replace\`.
2. **Assuming the method changed the original**: after \`s.upper()\`, printing \`s\` still shows the old text — you must capture the return value: \`s = s.upper()\`.
3. **Full-width symbols from copy-paste**: code copied from web pages often contains full-width quotes or spaces → \`SyntaxError\`.
4. **Misreading find's return**: \`"abc".find("a")\` returns 0 (position 0), not "not found"; not found is -1. To test containment, \`if "a" in s\` is clearer.
5. **A quote ends the string early**: \`'it's'\` → \`SyntaxError\`. This bites most when typing English contractions (it's, don't). Either switch the outer quotes (\`"it's"\`) or escape (\`'it\\'s'\`).
6. **Concatenating numbers with \`+\`**: \`"age: " + 18\` → \`TypeError\`. Prefer an f-string: \`f"age: {18}"\`.

## Summary

- Strings are immutable sequences; indexing and slicing work like lists
- Methods return new strings: \`upper\` / \`strip\` / \`split\` / \`join\` / \`replace\` are the workhorses
- \`in\` tests containment; \`f"{x:.2f}"\` controls formatting
- Spaces are characters too — they count in lengths and indices
- \`\\n\` for newline, \`\\t\` for tab; escape special characters with a backslash

Don't memorize string methods: remember that "there is surely a method that does this", then look it up. When searching, translate the Chinese keyword into English — "切分" is split, "拼接" is join — and they stick once you have used them a few times.

Next lesson we learn **dicts and sets**: managing data by "label" instead of "number".`,
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
          hints: [
            { zh: '这题练字符串的基本度量与下标访问：长度、全大写、首尾字符。先回忆：字符串的下标从几开始？空格算不算一个字符？', en: 'This exercise practices string basics: length, uppercase, and indexing. Recall: at what number do string indices start, and does a space count as a character?' },
            { zh: '拆成三行互不依赖的打印：先数长度，再转全大写，最后把第一个和最后一个字符放在同一行。三个问题各用一个现成工具回答。', en: 'Split into three independent print lines: count the length, then uppercase the whole string, then put the first and last characters on one line. Each question has a ready-made tool.' },
            { zh: '工具对应：`len(s)` 求长度；`s.upper()` 返回全大写的新串；`s[0]` 取第一个字符，`s[-1]` 取最后一个；一次打印两个值用逗号隔开。', en: 'The tools: `len(s)` for the length; `s.upper()` returns a new fully-uppercased string; `s[0]` takes the first character and `s[-1]` the last; separate two printed values with a comma.' },
            { zh: '骨架三行：`print(len(s))`、`print(s.upper())`、`print(s[0], s[-1])`。易错点：字符串中间的空格也是字符，会被算进长度；upper 不改原串，要使用它返回的新串；用 `+` 拼接会得到 Hn 而不是 H n。', en: 'A three-line skeleton: `print(len(s))`, `print(s.upper())`, `print(s[0], s[-1])`. Watch out: the space in the middle is a character too and counts toward the length; upper does not change the original, so use the string it returns; joining with `+` would give Hn instead of H n.' },
            { zh: '参考答案：三行如上。s="Hello Python" 共 12 个字符（含中间空格），全大写是 HELLO PYTHON，首字符 H、末字符 n。', en: 'Reference solution: the three lines above. With s="Hello Python" the length is 12 (the inner space counts), the uppercase form is HELLO PYTHON, and the ends are H and n.' },
          ],
          solution: 's = "Hello Python"\nprint(len(s))\nprint(s.upper())\nprint(s[0], s[-1])\n',
          solutionNote: { zh: '解法分三行：`len(s)` 数出 12 个字符（中间空格也算一位）；`s.upper()` 生成全大写的新串 HELLO PYTHON；`s[0]` 与 `s[-1]` 用正负下标取首尾字符，print 里用逗号分隔会自动补一个空格。注意 upper 不修改原串、而是返回新串，必须使用它的返回值。', en: 'The solution uses three lines: `len(s)` counts 12 characters (the inner space counts too); `s.upper()` builds the fully-uppercased HELLO PYTHON; `s[0]` and `s[-1]` take the ends with positive and negative indices, and a comma in print inserts the space, giving H n. Note that upper does not modify the original — use the string it returns.' },
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
          hints: [
            { zh: '这题练「函数返回布尔值」+ 字符串切片：回文是正着读与倒着读一样的词。先想两件事——怎么得到反转后的字符串，以及大小写要不要先统一。', en: 'This exercise practices returning a boolean from a function and slicing strings: a palindrome reads the same forward and backward. Consider two things — how to reverse a string, and whether case should be normalized first.' },
            { zh: '拆两步：先在函数里把参数统一成小写（题目要求忽略大小写），再拿它与自己的反转比较，把比较结果直接 return；主程序对两个测试词各调用一次并打印返回值。', en: 'Two steps: inside the function normalize the argument to lowercase (the task ignores case), then compare it with its own reversal and return the boolean directly; the main program calls the function once per test word and prints each result.' },
            { zh: '统一大小写用 `s.lower()`；反转用切片 `[::-1]`；两个字符串是否相同用 `==` 判断。', en: 'Normalize case with `s.lower()`; reverse a string with the slice `[::-1]`; test whether two strings are identical with `==`.' },
            { zh: '骨架：`def is_palindrome(s):` 里写 `t = s.lower()`，然后 `return t == t[::-1]`。易错点：先转小写再比较，别拿原串直接比；`[::-1]` 的写法一个字符都不能少。', en: 'Skeleton: inside `def is_palindrome(s):` write `t = s.lower()`, then `return t == t[::-1]`. Watch out: lowercase before comparing — do not compare the raw string; and the slice `[::-1]` needs every character.' },
            { zh: '参考答案：函数内转小写后与自己的反转比较并 return；主程序对 "racecar" 与 "hello" 各调用一次打印，输出 True 和 False。也可以压缩成一行 `return s.lower() == s.lower()[::-1]`。', en: 'Reference solution: inside the function, lowercase the string, compare it with its reversal and return; the main program prints True for "racecar" and False for "hello". It can be compressed to one line: `return s.lower() == s.lower()[::-1]`.' },
          ],
          solution: 'def is_palindrome(s):\n    t = s.lower()\n    return t == t[::-1]\n\nprint(is_palindrome("racecar"))\nprint(is_palindrome("hello"))\n',
          solutionNote: { zh: '解法先把输入统一成小写（满足忽略大小写的要求），再用切片 `[::-1]` 造出反转串，直接与原串比较并把布尔结果返回。若省去 lower，像大写开头的回文会被误判。主程序对两个单词各调用一次，分别输出 True 与 False。', en: 'The solution lowercases the input first (satisfying the case-insensitive rule), builds the reversed copy with the slice `[::-1]`, compares it with the original, and returns the boolean. Without lower, a capitalized palindrome would be misjudged. The main program calls the function for both words, printing True and False.' },
        },
      ],
    },

    // ================= 9. 字典与集合 =================
    {
      id: 'dicts',
      title: { zh: '字典与集合', en: 'Dicts & Sets' },
      difficulty: 2,
      lecture: {
        zh: `## 这节课学什么

学会两种新容器：**字典**（dict，按「标签」存取数据）和**集合**（set，自动去重）。学完这节课，你能实现投票计数、去重、交集并集这类真实需求。

## 字典是什么

列表靠**编号**取数据（\`nums[0]\`），字典靠**标签**取数据。它就像一本通讯录：你知道人名（**键 key**），就能查到电话（**值 value**），不用翻遍整本。

\`\`\`python
ages = {"Alice": 20, "Bob": 22}
print(ages["Alice"])   # 20
\`\`\`

- 花括号里写 \`键: 值\`，多组之间用逗号分隔
- 取值的语法和列表下标一样是方括号，只是方括号里放的是键
- 键必须是不可变的（字符串、数字都行）；值随便放什么

新增和修改都是赋值：键不存在就是新增，已存在就是覆盖旧值。

## 怎么写

1. **增删改查**

\`\`\`python
ages["Carol"] = 19          # 新增
ages["Bob"] = 23            # 修改（覆盖旧值）
print("Bob" in ages)        # True（判断键是否存在）
print(ages.get("Dave", 0))  # 0（键不存在给默认值，不报错）
\`\`\`

2. **遍历**：\`items()\` 一次拿到键和值

\`\`\`python
for name, age in ages.items():
    print(name, age)
\`\`\`

3. **计数模式**（超高频套路）：\`get(键, 0)\` 实现「没有就当 0」

\`\`\`python
counts = {}
for word in "a b a c a b".split():
    counts[word] = counts.get(word, 0) + 1
print(counts)   # {'a': 3, 'b': 2, 'c': 1}
\`\`\`

4. **集合 set**：可以理解为「只有键、没有值」的字典，元素**自动去重**、不会重复

\`\`\`python
A = {1, 2, 3}
B = {3, 4}
print(A | B)   # 并 {1, 2, 3, 4}
print(A & B)   # 交 {3}
print(A - B)   # 差 {1, 2}
\`\`\`

注意：集合是无序的，要按顺序输出先 \`sorted()\`。另外，\`set(列表)\` 可以快速去重：\`set([1, 1, 2])\` 得到 \`{1, 2}\`，在「查重」场景非常好用。

## 逐行读懂示例

\`\`\`python
text = "the quick brown fox jumps over the lazy dog"
\`\`\`

- 待统计的句子

\`\`\`python
counts = {}
\`\`\`

- 造一个空字典当「计分板」

\`\`\`python
for w in text.split():
\`\`\`

- \`split()\` 把句子按空格切成单词列表，for 逐个处理

\`\`\`python
    counts[w] = counts.get(w, 0) + 1
\`\`\`

- 核心一行：先查旧计数（没有就当 0），加 1，再存回去

\`\`\`python
for w in sorted(counts):
    print(w, counts[w])
\`\`\`

- \`sorted()\` 把键排好序再遍历，输出一张按字母序排列的词频表

## 新手常犯的错误

1. **取不存在的键**：\`ages["Dave"]\` → \`KeyError: 'Dave'\`。不确定键是否存在时用 \`ages.get("Dave", 默认值)\`。
2. **以为 \`{}\` 是空集合**：\`{1, 2}\` 是集合，但 \`{}\` 是空**字典**。空集合要写 \`set()\`。
3. **拿列表当键**：\`d = {[1,2]: "x"}\` → \`TypeError: unhashable type: 'list'\`。键必须不可变，可以换成元组 \`(1,2)\`。
4. **依赖字典的输出顺序**：需要有序输出时必须显式 \`sorted(d)\`，不要靠运气。
5. **遍历字典默认只拿到键**：\`for k in ages:\` 里的 k 是键，不是值。要同时拿键和值，用 \`.items()\`。
6. **循环里增删键**：遍历字典时新增或删除键 → \`RuntimeError: dictionary changed size during iteration\`。先把要处理的键存进列表，循环结束后再改。

## 小结

- 字典按「键」存取：\`d[键]\` 读、\`d[键] = 值\` 写、\`in\` 判断存在
- \`get(键, 默认值)\` 让「不存在」不报错，计数套路全靠它
- 集合自动去重，\`| & -\` 做并、交、差
- 需要有序输出就 \`sorted()\`
- \`for k in d\` 默认遍历键；\`.items()\` 同时给键和值
- \`set(列表)\` 一行去重，查重场景首选

字典和列表怎么选？看数据有没有天然的「名字」：有就用字典按名字存取，没有就用列表按顺序排队。计数、查重、分组这三类问题，字典和集合几乎是标准答案。

下一课学习**类与对象**：把数据和行为打包成自己的类型。`,
        en: `## What you'll learn

Two new containers: **dictionaries** (dict — store and fetch data by "label") and **sets** (automatic de-duplication). After this lesson you can build real features like vote counting, de-duplication, and intersection/union.

## What is a dictionary?

Lists fetch data by **index** (\`nums[0]\`); dictionaries fetch by **label**. It works like a phone book: if you know the name (the **key**), you can look up the number (the **value**) without flipping through every page.

\`\`\`python
ages = {"Alice": 20, "Bob": 22}
print(ages["Alice"])   # 20
\`\`\`

- Inside the braces you write \`key: value\` pairs separated by commas
- Fetching uses square brackets just like list indexing, except a key goes inside
- Keys must be immutable (strings and numbers are fine); values can be anything

Adding and updating are both assignment: a missing key adds a new pair; an existing key overwrites the old value.

## How to write it

1. **CRUD**

\`\`\`python
ages["Carol"] = 19          # add
ages["Bob"] = 23            # update (overwrite)
print("Bob" in ages)        # True (does the key exist?)
print(ages.get("Dave", 0))  # 0 (default when missing — no error)
\`\`\`

2. **Iteration**: \`items()\` hands you key and value together

\`\`\`python
for name, age in ages.items():
    print(name, age)
\`\`\`

3. **The counting pattern** (extremely common): \`get(key, 0)\` means "treat missing as 0"

\`\`\`python
counts = {}
for word in "a b a c a b".split():
    counts[word] = counts.get(word, 0) + 1
print(counts)   # {'a': 3, 'b': 2, 'c': 1}
\`\`\`

4. **Sets**: think of them as dictionaries with keys but no values; elements are **automatically de-duplicated**

\`\`\`python
A = {1, 2, 3}
B = {3, 4}
print(A | B)   # union {1, 2, 3, 4}
print(A & B)   # intersection {3}
print(A - B)   # difference {1, 2}
\`\`\`

Note: sets are unordered — \`sorted()\` first when you need ordered output. Also, \`set(list)\` de-duplicates in one step: \`set([1, 1, 2])\` gives \`{1, 2}\` — very handy for "has this appeared before?" checks.

## Reading the example line by line

\`\`\`python
text = "the quick brown fox jumps over the lazy dog"
\`\`\`

- The sentence to be counted

\`\`\`python
counts = {}
\`\`\`

- Create an empty dictionary as the "scoreboard"

\`\`\`python
for w in text.split():
\`\`\`

- \`split()\` cuts the sentence into a list of words; the for loop handles them one by one

\`\`\`python
    counts[w] = counts.get(w, 0) + 1
\`\`\`

- The key line: look up the old count (0 if absent), add 1, store it back

\`\`\`python
for w in sorted(counts):
    print(w, counts[w])
\`\`\`

- \`sorted()\` orders the keys before iterating, printing an alphabetized frequency table

## Common beginner mistakes

1. **Fetching a missing key**: \`ages["Dave"]\` → \`KeyError: 'Dave'\`. When unsure, use \`ages.get("Dave", default)\`.
2. **Thinking \`{}\` is an empty set**: \`{1, 2}\` is a set, but \`{}\` is an empty **dict**. An empty set is \`set()\`.
3. **Using a list as a key**: \`d = {[1,2]: "x"}\` → \`TypeError: unhashable type: 'list'\`. Keys must be immutable; use a tuple \`(1,2)\` instead.
4. **Relying on dictionary order for output**: always \`sorted(d)\` explicitly when order matters.
5. **Iterating a dict yields only keys**: in \`for k in ages:\`, k is the key, not the value. Use \`.items()\` to get both.
6. **Adding/removing keys while iterating**: → \`RuntimeError: dictionary changed size during iteration\`. First collect the keys to process into a list, then modify after the loop.

## Summary

- Dicts fetch by key: \`d[key]\` reads, \`d[key] = value\` writes, \`in\` tests existence
- \`get(key, default)\` avoids errors on missing keys — the heart of the counting pattern
- Sets de-duplicate automatically; \`| & -\` give union, intersection, difference
- Use \`sorted()\` for ordered output
- \`for k in d\` iterates keys by default; \`.items()\` gives key and value
- \`set(list)\` de-duplicates in one line — the first tool for "already seen?" checks

Dict or list? Ask whether the data has a natural "name": if yes, use a dict and fetch by name; if not, use a list and keep things in order. Counting, de-duplication and grouping are the three problems where dicts and sets are practically the standard answer.

Next lesson: **classes and objects** — packaging data and behavior into your own types.`,
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
          hints: [
            { zh: '这题练「字典当计数器」：以单词为键、出现次数为值。核心难点是第一次遇到某个词时它还不存在于字典，直接取值会怎样？先想好应对办法。', en: 'This exercise uses a dict as a counter: keys are words and values are counts. The tricky part is the first time a word appears it is not yet in the dict — what happens if you fetch it directly? Plan for that.' },
            { zh: '拆两步：先把句子按空白切成单词列表并逐一累加计数；再对题目点名的三个单词，从字典里取值并按规定格式各打印一行。', en: 'Two steps: split the sentence into words and accumulate a count for each; then look up the three named words and print one formatted line per word.' },
            { zh: '切分用 `text.split()`；安全取计数用 `counts.get(w, 0)`——查不到就按 0 处理；写回格式是 `counts[w] = 新值`。输出行用 f-string 组装。', en: 'Split with `text.split()`; read a count safely with `counts.get(w, 0)`, which treats a missing key as 0; store back as `counts[w] = new_value`. Assemble each output line with an f-string.' },
            { zh: '骨架：`for w in text.split():` 内写 `counts[w] = counts.get(w, 0) + 1`；随后对 `["the", "fox", "dog"]` 循环打印 `f"{w}: {counts[w]}"`。易错点：直接写 `counts[w] += 1` 会在首见单词上报 KeyError；冒号后要有一个空格。', en: 'Skeleton: inside `for w in text.split():` write `counts[w] = counts.get(w, 0) + 1`; then loop over `["the", "fox", "dog"]` printing `f"{w}: {counts[w]}"`. Watch out: a bare `counts[w] += 1` raises KeyError on a first-seen word; and keep one space after the colon.' },
            { zh: '参考答案：先用空字典 `counts = {}` 统计全文，再按 the、fox、dog 三个键打印 `f"{w}: {counts[w]}"`，输出 the: 3、fox: 1、dog: 1。get 的第二个参数 0 专门用于处理首次出现的词。', en: 'Reference solution: start with an empty dict `counts = {}`, tally the whole text, then print `f"{w}: {counts[w]}"` for the, fox and dog — the outputs are the: 3, fox: 1, dog: 1. The second argument 0 in get handles first-seen words.' },
          ],
          solution: 'text = "the quick brown fox jumps over the lazy dog the end"\ncounts = {}\nfor w in text.split():\n    counts[w] = counts.get(w, 0) + 1\nfor w in ["the", "fox", "dog"]:\n    print(f"{w}: {counts[w]}")\n',
          solutionNote: { zh: '解法以单词为键、次数为值构造字典：每遇一词就 `counts.get(w, 0)` 取出旧计数（首次取到 0），加一后写回同一键，完成累加。最后按 the、fox、dog 依次取值，用 f-string 输出。get 的默认值参数避免了首次出现时的 KeyError；输出格式冒号后带一个空格。', en: 'The solution builds a dict from words to counts: for each word it reads the old count with `counts.get(w, 0)` (0 on first sight), adds one and writes it back to the same key. Then it prints lines for the, fox and dog with an f-string. The default argument of get prevents a KeyError on a first appearance, and the output keeps one space after the colon.' },
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
          hints: [
            { zh: '这题练集合的三种运算，外加「把无序集合变成有序的字符串行」。先回答：并集、交集、差集分别用哪个符号？三者各含哪些元素？', en: 'This exercise practices the three set operations and turning an unordered set into an ordered line of text. First answer: which symbols express union, intersection and difference, and what elements does each result hold?' },
            { zh: '拆两步：先分别算出三个结果集合；再把每个集合排成升序、元素用空格分隔并打印成一行。想清楚数字元素在拼接前要先做什么转换。', en: 'Two steps: compute the three result sets first; then sort each one ascending, separate its elements with spaces, and print as one line. Consider what conversion the numeric elements need before joining.' },
            { zh: '运算符号：并 `A | B`、交 `A & B`、差 `A - B`；排序用 `sorted(...)`；把每个元素转成文字再拼接：`" ".join(str(x) for x in ...)`。', en: 'The operators: union `A | B`, intersection `A & B`, difference `A - B`; sort with `sorted(...)`; convert every element to text and join with `" ".join(str(x) for x in ...)`.' },
            { zh: '骨架三行，每行形如 `print(" ".join(str(x) for x in sorted(A | B)))`，把 `|` 换成 `&`、`-` 各再来一行。易错点：join 只接受字符串，必须先 `str(x)`；不排序时集合输出顺序不可预测。', en: 'Three lines, each shaped like `print(" ".join(str(x) for x in sorted(A | B)))`; repeat once with `&` and once with `-`. Watch out: join only takes strings, so `str(x)` is required first; without sorted the order of a set is unpredictable.' },
            { zh: '参考答案：三行如上，输出依次为 `1 2 3 4 5 6 7`、`4 5`、`1 2 3`。A - B 表示「属于 A 但不属于 B」，因此不含 4、5。', en: 'Reference solution: the three lines above output `1 2 3 4 5 6 7`, `4 5` and `1 2 3` in turn. A - B means "in A but not in B", so it leaves out 4 and 5.' },
          ],
          solution: 'A = {1, 2, 3, 4, 5}\nB = {4, 5, 6, 7}\nprint(" ".join(str(x) for x in sorted(A | B)))\nprint(" ".join(str(x) for x in sorted(A & B)))\nprint(" ".join(str(x) for x in sorted(A - B)))\n',
          solutionNote: { zh: '解法先用三个运算符求出集合结果，再统一走「sorted 排序 → str 转文字 → join 拼接」的流程输出成一行。A | B 去重合并得 1..7；A & B 取共同元素 4、5；A - B 取仅属于 A 的 1、2、3。关键点：join 只能拼接字符串列表，数字必须先经 str() 转换。', en: 'The solution computes the three results with the operators, then runs each through the same pipeline — sorted for order, str to convert numbers, join to glue one line. A | B merges without duplicates into 1..7; A & B keeps the shared 4 and 5; A - B keeps only 1, 2, 3. Key point: join only concatenates strings, so each number needs str() first.' },
        },
      ],
    },

    // ================= 10. 类与对象 =================
    {
      id: 'oop',
      title: { zh: '类与对象', en: 'Classes & Objects' },
      difficulty: 3,
      lecture: {
        zh: `## 这节课学什么

学会**类与对象**：自己定义一种数据类型，把「属性（数据）」和「方法（行为）」打包在一起。学完这节课，你能写出 \`Rectangle(3, 4).area()\` 这样自然好读的代码。

## 类和对象是什么

**类是图纸，对象是照图纸造出来的产品。**

- 类（class）：描述「这一类东西长什么样、能干什么」——比如「矩形有宽和高，能算面积」
- 对象（object）：按图纸造出的具体实例——比如「宽 3 高 4 的那一个矩形」

一张图纸可以造出无数个产品。其实你已经偷偷用过对象：字符串 \`"abc"\` 是 str 类的对象，\`"abc".upper()\` 就是在调用它的方法。现在学着自己画图纸。

\`\`\`python
r = Rectangle(3, 4)
\`\`\`

这行的意思是：「照 Rectangle 这张图纸，造一个宽 3 高 4 的对象，贴上标签 r」。

## 怎么写

1. **定义类**：\`class 类名:\`（类名习惯首字母大写），里面写属性和方法

\`\`\`python
class Rectangle:
    def __init__(self, width, height):   # 构造方法
        self.width = width                # 实例属性
        self.height = height

    def area(self):                       # 实例方法
        return self.width * self.height

r = Rectangle(3, 4)
print(r.area())    # 12
\`\`\`

2. **\`__init__\` 是构造方法**：造对象时自动执行，负责把数据装进对象。调用 \`Rectangle(3, 4)\` 时，3 和 4 就传给了 \`width\` 和 \`height\`。

3. **self 是「我自己」**：每个实例方法的第一个参数都是 \`self\`，指当前这个对象。调用 \`r.area()\` 时不用传 self，Python 自动把 \`r\` 填进去。\`self.width\` 读作「这个对象自己的 width」。

4. **继承**：新类复用旧类的代码，只写差异部分

\`\`\`python
class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)      # 调用父类构造

s = Square(5)
print(s.area())    # 25
\`\`\`

5. **魔术方法**：名字前后各有两个下划线的方法，Python 会在特定时机自动调用

| 方法 | 触发时机 |
|---|---|
| \`__str__\` | \`print(obj)\` / \`str(obj)\` |
| \`__eq__\` | \`obj == other\` |
| \`__len__\` | \`len(obj)\` |

## 逐行读懂示例

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name
\`\`\`

- 定义 Animal 图纸：每个动物对象都有一个 \`name\` 属性

\`\`\`python
    def speak(self):
        return f"{self.name} makes a sound"
\`\`\`

- 通用方法：返回「某名字 makes a sound」

\`\`\`python
class Dog(Animal):
\`\`\`

- Dog **继承** Animal：自动拥有 name 属性和 speak 方法

\`\`\`python
    def speak(self):                # 方法重写
        return f"{self.name} barks"
\`\`\`

- 同名方法**覆盖**父类版本：狗的叫声不一样

\`\`\`python
for a in [Animal("Cat"), Dog("Rex")]:
    print(a.speak())
\`\`\`

- 列表里混放两种对象，各自调用自己的 \`speak\`：输出 \`Cat makes a sound\` 和 \`Rex barks\`

## 新手常犯的错误

1. **忘写 self**：\`def area():\` → 调用 \`r.area()\` 时报 \`TypeError: area() takes 0 positional arguments but 1 was given\`。实例方法第一个参数必须是 \`self\`。
2. **\`__init__\` 里忘了 self 前缀**：写 \`width = width\` 只是局部变量，对象上没有这个属性；要写 \`self.width = width\`。
3. **\`__init__\` 拼错**：写成 \`_init_\` 或 \`__int__\` → 构造不会执行、属性丢失，而且不报错，很难查。前后各**两个**下划线。
4. **调用时多传 self**：\`r.area(r)\` → \`TypeError\`。self 是自动传的，调用时只传定义里除 self 之外的参数。
5. **造对象忘了括号**：\`r = Rectangle\` 只是把「图纸」本身赋给 r，之后 \`r.area()\` 会报 \`TypeError\`。造对象必须带括号传参：\`Rectangle(3, 4)\`。

## 小结

- 类是图纸，对象是产品；\`类(参数)\` 造对象
- \`__init__\` 构造方法装数据，\`self\` 指当前对象
- 方法用 \`对象.方法()\` 调用，属性用 \`对象.属性\` 读写
- 继承复用代码，同名方法覆盖父类版本
- 造对象必须带括号；漏了括号，拿到的是类本身而不是对象

刚接触类觉得绕很正常：先学会写 \`__init__\` 和带 \`self\` 的方法，把练习做出来，继承和魔术方法后面自然会懂。

下一课学习**文件操作**：让程序把数据存进硬盘。`,
        en: `## What you'll learn

How to use **classes and objects**: defining your own data type that bundles **attributes (data)** and **methods (behavior)** together. After this lesson you can write naturally readable code like \`Rectangle(3, 4).area()\`.

## What are classes and objects?

**A class is a blueprint; an object is a product built from that blueprint.**

- Class: describes "what this kind of thing looks like and what it can do" — e.g. "a rectangle has a width and height, and can compute its area"
- Object: a concrete instance built from the blueprint — e.g. "the rectangle that is 3 wide and 4 tall"

One blueprint can produce countless products. You have secretly used objects already: the string \`"abc"\` is an object of the str class, and \`"abc".upper()\` calls one of its methods. Now learn to draw your own blueprint.

\`\`\`python
r = Rectangle(3, 4)
\`\`\`

This line means: "following the Rectangle blueprint, build an object 3 wide and 4 tall, and label it r".

## How to write it

1. **Define a class**: \`class ClassName:\` (class names are conventionally capitalized); inside go attributes and methods

\`\`\`python
class Rectangle:
    def __init__(self, width, height):   # constructor
        self.width = width                # instance attributes
        self.height = height

    def area(self):                       # instance method
        return self.width * self.height

r = Rectangle(3, 4)
print(r.area())    # 12
\`\`\`

2. **\`__init__\` is the constructor**: it runs automatically when an object is created and loads the data in. In \`Rectangle(3, 4)\`, the 3 and 4 are passed to \`width\` and \`height\`.

3. **self means "me"**: the first parameter of every instance method is \`self\`, referring to the current object. When calling \`r.area()\` you don't pass self — Python fills in \`r\` automatically. Read \`self.width\` as "this object's own width".

4. **Inheritance**: a new class reuses an old class's code and only spells out the differences

\`\`\`python
class Square(Rectangle):
    def __init__(self, side):
        super().__init__(side, side)      # call the parent constructor

s = Square(5)
print(s.area())    # 25
\`\`\`

5. **Magic methods**: methods with double underscores before and after the name, called automatically by Python on certain occasions

| Method | Triggered by |
|---|---|
| \`__str__\` | \`print(obj)\` / \`str(obj)\` |
| \`__eq__\` | \`obj == other\` |
| \`__len__\` | \`len(obj)\` |

## Reading the example line by line

\`\`\`python
class Animal:
    def __init__(self, name):
        self.name = name
\`\`\`

- Defines the Animal blueprint: every animal object has a \`name\` attribute

\`\`\`python
    def speak(self):
        return f"{self.name} makes a sound"
\`\`\`

- A generic method: returns "some-name makes a sound"

\`\`\`python
class Dog(Animal):
\`\`\`

- Dog **inherits from** Animal: it automatically has the name attribute and the speak method

\`\`\`python
    def speak(self):                # method overriding
        return f"{self.name} barks"
\`\`\`

- The same-named method **overrides** the parent's version: dogs bark differently

\`\`\`python
for a in [Animal("Cat"), Dog("Rex")]:
    print(a.speak())
\`\`\`

- Two kinds of objects share a list; each calls its own \`speak\`, printing \`Cat makes a sound\` and \`Rex barks\`

## Common beginner mistakes

1. **Forgetting self**: \`def area():\` → calling \`r.area()\` raises \`TypeError: area() takes 0 positional arguments but 1 was given\`. The first parameter of an instance method must be \`self\`.
2. **Missing the self prefix in \`__init__\`**: \`width = width\` is just a local variable; the object gets no attribute. Write \`self.width = width\`.
3. **Misspelling \`__init__\`**: writing \`_init_\` or \`__int__\` → the constructor never runs and attributes go missing, with no error — very hard to spot. **Two** underscores on each side.
4. **Passing self when calling**: \`r.area(r)\` → \`TypeError\`. self is passed automatically; only supply the parameters after self.
5. **Forgetting the parentheses when constructing**: \`r = Rectangle\` assigns the blueprint itself to r; later \`r.area()\` raises a \`TypeError\`. Construction always needs parentheses and arguments: \`Rectangle(3, 4)\`.

## Summary

- A class is a blueprint; an object is a product; \`Class(args)\` builds one
- \`__init__\` loads data; \`self\` refers to the current object
- Call methods as \`object.method()\` and read/write attributes as \`object.attribute\`
- Inheritance reuses code; same-named methods override the parent's
- Construction always needs parentheses — without them you get the class itself, not an object

Feeling dizzy when first meeting classes is normal: start by learning to write \`__init__\` and methods with \`self\`, finish the exercises, and inheritance plus magic methods will click later.

Next lesson: **file I/O** — letting programs persist data to disk.`,
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
          hints: [
            { zh: '这题练「定义自己的类」：类把数据和操作打包在一起。矩形要记住哪两个数？要能回答哪两个问题？想清楚谁负责记住、谁负责回答。', en: 'This exercise practices defining your own class, which bundles data with behavior. Which two numbers must a rectangle remember, and which two questions must it answer? Decide who stores and who computes.' },
            { zh: '拆四步：构造方法 __init__ 接收宽高并存成属性；area 方法用属性算面积并返回；perimeter 方法算周长并返回；主程序创建对象后调用两个方法各打印一次。', en: 'Four steps: the constructor __init__ takes the width and height and stores them as attributes; area computes and returns the area from the attributes; perimeter returns the perimeter; the main program creates an object and prints the result of each method.' },
            { zh: '构造方法 `def __init__(self, width, height):` 里写 `self.width = width`；每个实例方法的第一个参数都是 `self`，通过 `self.属性` 取用数据；调用方法用 `r.area()`。', en: 'The constructor `def __init__(self, width, height):` stores with `self.width = width`; every instance method takes `self` first and reads data through `self.attribute`; methods are called as `r.area()`.' },
            { zh: '骨架：`def area(self):` 返回 `self.width * self.height`；`def perimeter(self):` 返回 `2 * (self.width + self.height)`。易错点：`__init__` 两侧各是两条下划线；方法体要用 self 前缀取属性，否则会 NameError。', en: 'Skeleton: `def area(self):` returns `self.width * self.height`; `def perimeter(self):` returns `2 * (self.width + self.height)`. Watch out: `__init__` has two underscores on each side, and methods must read attributes through self or a NameError occurs.' },
            { zh: '参考答案：实现 __init__、area、perimeter 后，`r = Rectangle(3, 4)` 创建对象，`print(r.area())`、`print(r.perimeter())` 输出 12 和 14。调用方法要带括号，漏掉括号打印的是方法对象本身。', en: 'Reference solution: after implementing __init__, area and perimeter, create the object with `r = Rectangle(3, 4)` and print `r.area()` and `r.perimeter()` — 12 and 14. Calling a method needs parentheses; without them you print the method object itself.' },
          ],
          solution: 'class Rectangle:\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n\n    def area(self):\n        return self.width * self.height\n\n    def perimeter(self):\n        return 2 * (self.width + self.height)\n\n\nr = Rectangle(3, 4)\nprint(r.area())\nprint(r.perimeter())\n',
          solutionNote: { zh: '解法把属性与行为装进同一个类：__init__ 把宽高存入 self.width、self.height；area 用 `self.width * self.height` 计算，perimeter 用周长公式计算并返回。主程序创建 Rectangle(3, 4) 后调用两个方法。易错点：__init__ 双下划线拼写、方法首参 self、以及调用方法时不能漏括号。', en: 'The solution packages attributes and behavior into one class: __init__ stores the width and height on self, area returns their product and perimeter returns twice their sum. The main program builds Rectangle(3, 4) and calls both methods. Common pitfalls: spelling __init__ with two underscores each side, giving every method a self parameter, and keeping the parentheses when calling.' },
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
          hints: [
            { zh: '这题练「在类的方法里组合内置函数」：average 要算总分、数门数并保留两位小数。先想这三个动作各用哪个工具，平均分由哪两个量相除。', en: 'This exercise combines built-in functions inside a class method: average must total the scores, count them and round to two decimals. First think which tool does each job and which two quantities are divided.' },
            { zh: '拆三步：__init__ 记住姓名和成绩列表；average 用成绩列表算平均值并返回；主程序把姓名与平均分拼成一行打印。', en: 'Three steps: __init__ stores the name and the scores list; average computes the mean from that list and returns it; the main program prints the name and the average together on one line.' },
            { zh: '工具组合：`sum(self.scores)` 求总分、`len(self.scores)` 数门数、`round(数值, 2)` 保留两位小数；输出行用 f-string 拼装。', en: 'The toolset: `sum(self.scores)` totals, `len(self.scores)` counts, and `round(value, 2)` keeps two decimals; assemble the output with an f-string.' },
            { zh: '骨架：average 返回 `round(sum(self.scores) / len(self.scores), 2)`；主程序 `print(f"{s.name}: {s.average()}")`。易错点：先除后 round，顺序不能反；冒号后有一个空格，输出格式要逐字符对齐。', en: 'Skeleton: average returns `round(sum(self.scores) / len(self.scores), 2)`; the main program prints `f"{s.name}: {s.average()}"`. Watch out: divide first, then round — never the reverse; there is one space after the colon to match the format exactly.' },
            { zh: '参考答案：Student("Alice", [90, 85, 88]) 的 average 返回 round(263 / 3, 2)，即 87.67；最终输出 `Alice: 87.67`。若漏掉 round，会得到 87.666…。', en: 'Reference solution: for Student("Alice", [90, 85, 88]), average returns round(263 / 3, 2) — that is 87.67; the final output is `Alice: 87.67`. Leaving out round would print 87.666….' },
          ],
          solution: 'class Student:\n    def __init__(self, name, scores):\n        self.name = name\n        self.scores = scores\n\n    def average(self):\n        return round(sum(self.scores) / len(self.scores), 2)\n\n\ns = Student("Alice", [90, 85, 88])\nprint(f"{s.name}: {s.average()}")\n',
          solutionNote: { zh: '解法让 average() 组合三个内置工具：sum 求总分、len 数门数、round 保留两位小数，返回 87.67；主程序用 f-string 把姓名与平均值拼进一行。易错点有二：必须先除后 round，舍入位置才对；输出冒号后带一个空格，要与题目逐字符一致。', en: 'The solution has average() combine three built-ins: sum totals the scores, len counts them, and round keeps two decimals, returning 87.67; an f-string joins the name and the average on one line. Two pitfalls: divide before rounding, or the precision lands wrong; and keep the space after the colon so the output matches exactly.' },
        },
      ],
    },

    // ================= 11. 文件操作 =================
    {
      id: 'files',
      title: { zh: '文件操作', en: 'File I/O' },
      difficulty: 3,
      lecture: {
        zh: `## 这节课学什么

学会**读写文件**：把数据存进硬盘、再读回来。学完这节课，程序关掉后数据也不会丢——记事本、待办清单、成绩单都能真正落地保存。

## 文件操作是什么

程序运行时，变量都住在**内存**里，程序一关就被清空。想让数据活得比程序久，就要写进**文件**（保存在硬盘上）。

读写文件的三步曲：**打开 → 操作 → 关闭**。Python 提供 \`open()\` 负责打开，并推荐用 \`with\` 语句自动完成关闭——就像宾馆房卡：\`with\` 块一结束（你退房了），门自动锁上，不用你操心。

\`\`\`python
with open("note.txt", "w", encoding="utf-8") as f:
    f.write("first line\\n")
\`\`\`

- \`"note.txt"\`：文件名（相对当前目录）
- \`"w"\`：打开**模式**，w 表示写
- \`encoding="utf-8"\`：指定编码，内容含中文时务必带上
- \`as f\`：把打开的文件对象贴上标签 f，后面都用 f 操作它

## 怎么写

1. **写文件**：模式 \`"w"\`（覆盖写，文件不存在会自动创建）

\`\`\`python
with open("note.txt", "w", encoding="utf-8") as f:
    f.write("first line\\n")
    f.write("second line\\n")
\`\`\`

2. **读文件**：模式 \`"r"\`（只读，是默认值）

\`\`\`python
with open("note.txt", "r", encoding="utf-8") as f:
    content = f.read()          # 一次读完，得到整个字符串
\`\`\`

3. **模式速查**

| 模式 | 含义 |
|---|---|
| \`"r"\` | 只读（默认），文件不存在报错 |
| \`"w"\` | 覆盖写，不存在则创建 |
| \`"a"\` | 追加写（接着文件末尾往下写） |
| \`"r+"\` | 读写 |

4. **逐行读取**：大文件别一次读完，一行一行来更省内存

\`\`\`python
with open("note.txt") as f:
    for line in f:
        print(line.rstrip())    # 去掉行尾换行符
\`\`\`

或者 \`lines = f.readlines()\` 一次读成列表，每个元素都带换行符。

## 逐行读懂示例

\`\`\`python
with open("demo.txt", "w") as f:
\`\`\`

- 以覆盖写模式打开（文件不存在就创建）\`demo.txt\`，文件对象叫 \`f\`

\`\`\`python
    f.write("apple\\n")
    f.write("banana\\n")
\`\`\`

- 写两行文字。\`\\n\` 是换行符，不写它两行会黏成一行；\`with\` 块结束后文件自动关闭

\`\`\`python
with open("demo.txt") as f:
\`\`\`

- 重新打开同一个文件，默认只读模式

\`\`\`python
    for line in f:
        print(line.rstrip())
\`\`\`

- 文件对象可以直接 for：每轮拿到一行（**含**行尾的 \`\\n\`）；\`rstrip()\` 把它去掉再打印，输出 apple 和 banana 两行

## 新手常犯的错误

1. **读不存在的文件**：用模式 \`"r"\` 打开没有的文件 → \`FileNotFoundError\`。先确认路径，或改用 \`"w"\` / \`"a"\` 创建。
2. **忘了写换行符**：连续 \`write\` 不加 \`\\n\` → 内容全挤在一行。写到哪行结束，哪里就要补 \`\\n\`。
3. **打印时出现空行**：\`print(line)\` 里的 line 自带 \`\\n\`，print 又补一个 → 每行之间多一个空行。用 \`line.rstrip()\` 或 \`print(line, end="")\`。
4. **在 with 块外用 f**：\`with\` 结束后文件已关闭，再 \`f.read()\` → \`ValueError: I/O operation on closed file\`。读写都放在 with 块**里面**。
5. **文件名打错**：\`open("notes.txt")\` 但文件实际叫 \`note.txt\` → \`FileNotFoundError\`。文件名是字符串，多一个字母都不行；本地运行拿不准时，先确认当前目录下有哪些文件。

## 小结

- \`with open(文件名, 模式) as f:\` 是标准写法，块结束自动关闭
- \`"w"\` 覆盖写、\`"a"\` 追加写、\`"r"\` 只读
- \`f.write()\` 写；\`f.read()\` 全读；\`for line in f\` 逐行读
- 换行符 \`\\n\` 要自己写；读出来的行自带 \`\\n\`，记得处理
- 内容含中文时，打开文件带上 \`encoding="utf-8"\` 避免乱码

文件操作写错了最多是报个错，不会弄坏电脑，放心大胆地多试几次。

到这里 Python 入门的 11 课全部完成——去写一个属于你自己的小项目吧！`,
        en: `## What you'll learn

How to **read and write files**: saving data to disk and loading it back. After this lesson, data survives even after the program exits — notes, to-do lists and score sheets can truly be persisted.

## What is file I/O?

While a program runs, its variables live in **memory** and are wiped when it exits. To make data outlive the program, write it into a **file** (stored on disk).

Reading and writing follows three steps: **open → operate → close**. Python's \`open()\` handles opening, and the \`with\` statement is the recommended way to handle closing automatically — like a hotel key card: when the \`with\` block ends (you check out), the door locks itself; nothing for you to worry about.

\`\`\`python
with open("note.txt", "w", encoding="utf-8") as f:
    f.write("first line\\n")
\`\`\`

- \`"note.txt"\`: the file name (relative to the current directory)
- \`"w"\`: the open **mode** — w means write
- \`encoding="utf-8"\`: the encoding; always include it when the content has non-ASCII text
- \`as f\`: labels the opened file object f; all later operations go through f

## How to write it

1. **Writing**: mode \`"w"\` (overwrites; creates the file if missing)

\`\`\`python
with open("note.txt", "w", encoding="utf-8") as f:
    f.write("first line\\n")
    f.write("second line\\n")
\`\`\`

2. **Reading**: mode \`"r"\` (read-only, the default)

\`\`\`python
with open("note.txt", "r", encoding="utf-8") as f:
    content = f.read()          # read everything into one string
\`\`\`

3. **Mode cheat sheet**

| Mode | Meaning |
|---|---|
| \`"r"\` | read (default); error if the file is missing |
| \`"w"\` | truncate & write; create if missing |
| \`"a"\` | append (write after the existing end) |
| \`"r+"\` | read + write |

4. **Line-by-line reading**: for big files, read one line at a time to save memory

\`\`\`python
with open("note.txt") as f:
    for line in f:
        print(line.rstrip())    # strip the trailing newline
\`\`\`

Or \`lines = f.readlines()\` reads everything into a list, each element keeping its newline.

## Reading the example line by line

\`\`\`python
with open("demo.txt", "w") as f:
\`\`\`

- Opens \`demo.txt\` in overwrite mode (creating it if absent); the file object is called \`f\`

\`\`\`python
    f.write("apple\\n")
    f.write("banana\\n")
\`\`\`

- Writes two lines. \`\\n\` is the newline character — without it the two lines would glue together. The file closes automatically when the \`with\` block ends

\`\`\`python
with open("demo.txt") as f:
\`\`\`

- Reopens the same file in the default read-only mode

\`\`\`python
    for line in f:
        print(line.rstrip())
\`\`\`

- A file object can be iterated directly: each round yields one line (**including** the trailing \`\\n\`); \`rstrip()\` removes it before printing, so the output is the two lines apple and banana

## Common beginner mistakes

1. **Reading a missing file**: opening a nonexistent file with mode \`"r"\` → \`FileNotFoundError\`. Check the path, or use \`"w"\` / \`"a"\` to create it.
2. **Forgetting newlines**: repeated \`write\` calls without \`\\n\` → everything squashes onto one line. End each written line with \`\\n\`.
3. **Blank lines when printing**: \`print(line)\` where line already ends in \`\\n\`, and print adds another → an empty line between every two lines. Use \`line.rstrip()\` or \`print(line, end="")\`.
4. **Using f outside the with block**: after \`with\` ends the file is closed; calling \`f.read()\` → \`ValueError: I/O operation on closed file\`. Keep all reads and writes **inside** the block.
5. **Typo in the file name**: \`open("notes.txt")\` when the file is actually \`note.txt\` → \`FileNotFoundError\`. A file name is a string — one extra letter breaks it; when running locally and unsure, first check which files exist in the current directory.

## Summary

- \`with open(filename, mode) as f:\` is the standard pattern; it closes automatically
- \`"w"\` overwrites, \`"a"\` appends, \`"r"\` reads
- \`f.write()\` writes; \`f.read()\` reads all; \`for line in f\` reads line by line
- You must write \`\\n\` yourself; lines you read back carry \`\\n\`, so handle it
- Pass \`encoding="utf-8"\` when the content includes non-ASCII text, to avoid mojibake

At worst, a file-operation mistake just raises an error — it won't break your computer, so experiment boldly.

That completes all 11 lessons of this Python introduction — go build a little project of your own!`,
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
          hints: [
            { zh: '这题练文件读写的完整闭环：写文件 → 重新打开读回 → 统计行数。先想清楚「行数」是按什么切分的——内容里有没有换行符，结果会完全不同。', en: 'This exercise runs the full file loop: write to a file, reopen and read it back, then count lines. Think about what splits text into lines — whether a newline is present changes the answer completely.' },
            { zh: '拆三步：先用覆盖写模式把一句话存入 test.txt；再以只读方式重新打开并读出全部内容；最后打印内容与行数。先决定写入时句尾要不要补换行符。', en: 'Three steps: write the sentence into test.txt in overwrite mode; reopen it read-only and fetch all the content; finally print the content and the line count. Decide first whether a newline should follow the written text.' },
            { zh: '写入骨架 `with open("test.txt", "w") as f:` 的缩进块里写 `f.write(内容)`；读回用 `f.read()`；行数用 `len(内容.splitlines())`。', en: 'The write skeleton is `with open("test.txt", "w") as f:` with `f.write(content)` indented inside; read back with `f.read()`; count lines with `len(content.splitlines())`.' },
            { zh: '骨架：写入块里写 `f.write("Hello File")`（句尾不要加换行符）；读回后先 `print(content)`，再 `print(f"lines: {len(content.splitlines())}")`。易错点：若写入的字符串以 `\\n` 结尾，splitlines 会数出两行。', en: 'Skeleton: write `f.write("Hello File")` with no trailing newline; after reading back, use `print(content)` then `print(f"lines: {len(content.splitlines())}")`. Watch out: if the written string ends with `\\n`, splitlines counts two lines.' },
            { zh: '参考答案：两次 with open 分别完成写入与读回，读到的 content 就是 "Hello File"；`print(content)` 输出它，`print(f"lines: {len(content.splitlines())}")` 输出 `lines: 1`。要点：内容不带换行符时行数就是 1。', en: 'Reference solution: two with blocks handle the write and the read; content comes back as "Hello File"; `print(content)` shows it and `print(f"lines: {len(content.splitlines())}")` prints `lines: 1`. The point: text without a newline counts as a single line.' },
          ],
          solution: 'with open("test.txt", "w") as f:\n    f.write("Hello File")\n\nwith open("test.txt") as f:\n    content = f.read()\n\nprint(content)\nprint(f"lines: {len(content.splitlines())}")\n',
          solutionNote: { zh: '解法分两个阶段：先以 "w" 模式打开 test.txt 写入 "Hello File"（结尾不带换行符），再重新以只读方式打开，用 f.read() 读回全文并打印，最后用 `len(content.splitlines())` 数出行数 1。关键点：splitlines 按换行符切行——写入时多补一个结尾换行符，行数就会变成 2。', en: 'The solution works in two phases: it opens test.txt with mode "w" and writes "Hello File" with no trailing newline, reopens the file read-only, fetches everything with f.read() and prints it, then counts the lines with `len(content.splitlines())` — 1. Key point: splitlines breaks on newlines, so one extra trailing newline at write time would make the count 2.' },
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
          hints: [
            { zh: '这题练「写多行 → 读回 → 逐行统计」的组合拳。先想两个量怎么得到：行数是行列表的长度，字符数则是每一行的长度相加。', en: 'This exercise chains writing multiple lines, reading them back, and per-line statistics. First think how each quantity arises: the line count is the length of the line list, while the character total adds up every line length.' },
            { zh: '拆三步：先把三个水果名各带一个换行符写入文件；再重新打开读回，得到不含换行符的行列表；最后分别打印行数与字符总数。', en: 'Three steps: write each of the three fruit names followed by a newline; reopen the file and read back a list of lines without newlines; then print the line count and the character total.' },
            { zh: '写入循环里写 `f.write(fruit + "\\n")`；读回用 `f.read().splitlines()` 得到无换行的行列表；长度累加用 `sum(len(line) for line in lines)`。', en: 'Inside the write loop use `f.write(fruit + "\\n")`; read back with `f.read().splitlines()` for a newline-free list; total the lengths with `sum(len(line) for line in lines)`.' },
            { zh: '骨架：循环写入三行；`lines = f.read().splitlines()`；`print(len(lines))` 输出 3；`print(sum(len(line) for line in lines))` 输出 17。易错点：写入忘了补换行符会让三行挤成一行；统计字符数若直接对 f.read() 数长度，会把换行符也算进去。', en: 'Skeleton: loop the three writes; `lines = f.read().splitlines()`; `print(len(lines))` outputs 3; `print(sum(len(line) for line in lines))` outputs 17. Watch out: forgetting the newline in the writes squashes everything onto one line, and taking the length of the raw f.read() would count the newline characters too.' },
            { zh: '参考答案：三个单词各带一个换行符写入 fruits.txt；splitlines 切出的行列表长度为 3；各行长度 5+6+6=17，所以两行输出是 3 和 17。', en: 'Reference solution: write the three words each ending with a newline; splitlines yields a list of length 3; the line lengths 5+6+6 total 17, so the two outputs are 3 and 17.' },
          ],
          solution: 'fruits = ["apple", "banana", "cherry"]\nwith open("fruits.txt", "w") as f:\n    for fruit in fruits:\n        f.write(fruit + "\\n")\n\nwith open("fruits.txt") as f:\n    lines = f.read().splitlines()\n\nprint(len(lines))\nprint(sum(len(line) for line in lines))\n',
          solutionNote: { zh: '解法先把三个单词各追加一个换行符写入，保证文件里是独立的三行；读回后用 splitlines() 得到不含换行符的行列表，len 数出 3 行；再借生成式 `sum(len(line) for line in lines)` 累加各行长度 5+6+6 得 17。关键点：写入要显式补换行符，统计字符数时又要排除它们。', en: 'The solution appends a newline to each word at write time so the file holds three real lines; reading back with splitlines() gives a newline-free list whose length is 3; the generator expression `sum(len(line) for line in lines)` then adds 5+6+6 to 17. Keys: newlines must be written explicitly, yet excluded from the character count.' },
        },
      ],
    },
  ],
};
