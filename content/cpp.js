// cpp.js — C++ 学习内容（11 知识点 × 2 题双语）
// Schema 说明见 tools/check_i18n.mjs；所有 expectedOutput 已通过 Godbolt 在线实测验证（gcc 12.3）。
export default {
  id: 'cpp',
  name: 'C++',
  description: {
    zh: '系统级高性能语言，C 的超集，加入了面向对象、模板和标准库，适合做底层与性能敏感的工程。',
    en: 'A high-performance systems language. A superset of C with OOP, templates, and a powerful standard library.',
  },
  engine: { compiler: 'g123' },
  fileName: 'main.cpp',
  playgroundStarter: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, C++!" << std::endl;\n    return 0;\n}\n',
  entryNote: {
    zh: 'g++ main.cpp -o main && ./main',
    en: 'g++ main.cpp -o main && ./main',
  },
  localGuide: {
    zh: 'g++ main.cpp -o main && ./main',
    en: 'g++ main.cpp -o main && ./main',
  },
  topics: [
    // ================= 1. Hello World =================
    {
      id: 'hello',
      title: { zh: '第一个程序', en: 'Your First Program' },
      difficulty: 1,
      lecture: {
        zh: `## 这节课学什么

这节课你要写出人生第一个程序：让电脑在屏幕上打印文字。学完之后，你就能输出任何想输出的内容，并认识 C++ 程序的最小骨架——以后每个程序都长这个样子。

## 程序是什么

电脑本身只认识 0 和 1，人写的代码要先经过**编译器**（一个翻译软件，本站用的是 g++）翻译成机器指令才能执行。所以 C++ 的玩法是「先翻译、再运行」。

程序像一份菜谱：从上往下一句句执行。但它有个固定入口——\`main()\` 函数，操作系统就是从这里开始「读菜谱」的。**函数**先混个脸熟：把一段代码打包并起个名字。现在只需记住：每个程序都必须有一个 \`main\`。

## 怎么写

\`\`\`cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
\`\`\`

逐条拆解：

1. \`#include <iostream>\` —— \`#\` 开头的行是给编译器的**预处理指令**，在正式编译前执行。\`#include\` 意思是「把 iostream 文件的内容复制到这里」。\`iostream\` 提供输入输出工具，不包含它，\`std::cout\` 就不存在。这行末尾**不写分号**。
2. \`int main() {\` —— 定义名为 \`main\` 的函数。\`int\` 表示它结束时交回一个整数给操作系统；\`()\` 是参数列表，暂时为空；\`{\` 是函数体的开始。
3. \`std::cout << "Hello, World!" << std::endl;\` —— 输出语句。每条语句以**分号 \`;\`** 结尾，分号是 C++ 判断「这句话说完了」的标志。
4. \`return 0;\` —— 把 \`0\` 交回操作系统，约定 \`0\` 表示「成功结束」。
5. \`}\` —— 函数体结束，与 \`{\` 配对。

\`<<\` 叫**流插入运算符**，可以想象成水流方向：把右边的东西「冲向」左边的 \`std::cout\`（屏幕）。可以连续串联：

\`\`\`cpp
std::cout << "I am " << 18 << " years old" << std::endl;
\`\`\`

- \`std::\` 是标准库命名空间前缀，意思是「用标准库里那个叫 cout 的工具」
- \`std::endl\` 输出一个换行并刷新缓冲区，效果和输出 \`"\\n"\` 差不多
- 字符串用**双引号** \`"..."\` 包住；单个字符才用**单引号** \`'a'\`
- 注释：\`// 单行\` 或 \`/* 多行 */\`，写给人看的，编译器忽略

### 偷懒写法：using namespace std;

每次都写 \`std::\` 很啰嗦，可以在开头声明「直接使用 std 里的名字」：

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
\`\`\`

小程序这样写没问题；大型项目里容易重名冲突，正式工程慎用。

## 逐行读懂示例

示例一（多行输出）的核心：

\`\`\`cpp
std::cout << "Hello, World!" << std::endl;
std::cout << "I am learning C++" << std::endl;
\`\`\`

- 第一行：把字符串 \`Hello, World!\` 送进屏幕，再送一个换行。\`!\` 是字符串的一部分，原样输出
- 第二行：再来一次。**每个 \`std::endl\` 结束一行**，所以两句话分成两行

示例二（一行多个值）的核心：

\`\`\`cpp
int year = 2026;
std::cout << "Year: " << year << std::endl;
\`\`\`

- 第一行：定义整数变量 \`year\` 并放入 \`2026\`（变量下节课细讲）
- 第二行：链式输出——先送字符串 \`Year: \`，再送变量值 \`2026\`，最后换行。屏幕显示 \`Year: 2026\`

## 新手常犯的错误

1. **忘写分号**：\`std::cout << "hi"\` 少了 \`;\`，报 \`expected ';' before ...\`，且报错位置常指向下一行。回到上一行末尾补分号
2. **用了中文标点**：分号写成 \`；\`、引号写成中文引号，报 \`stray '\\343' in program\` 之类的错。写代码请切到英文输入法
3. **漏了头文件**：不写 \`#include <iostream>\` 就用 cout，报 \`'cout' was not declared in this scope\`。补上头文件
4. **引号用错**：\`std::cout << 'Hello';\` 不合法——单引号只能放单个字符，字符串必须用双引号

## 小结

- 程序从 \`main()\` 开始，每条语句以 \`;\` 结尾
- \`std::cout << 值\` 打印到屏幕，\`std::endl\` 换行
- 用标准库的工具前要 \`#include\` 对应头文件
- 看编译报错先看**第一条**，后面的常是连锁反应

下一课学「变量」——让程序记住数字和文字。`,
        en: `## What you will learn

In this lesson you write your first program: printing text on the screen. Afterwards you will be able to output anything you like, and you will know the minimal skeleton of a C++ program — every program you write later looks like this.

## What is a program

The computer only understands 0s and 1s. Code written by humans must first be translated by a **compiler** (a translation program; this site uses g++) into machine instructions before it can run. So the C++ workflow is "translate first, then run".

A program is like a recipe: statements execute one by one from top to bottom. But there is one fixed entry point — the \`main()\` function. That is where the operating system starts "reading the recipe". You will meet **functions** properly later; for now think of them as "a block of code with a name". Remember just one thing today: every program must have a \`main\`.

## How to write it

\`\`\`cpp
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
\`\`\`

Line by line:

1. \`#include <iostream>\` — a line starting with \`#\` is a **preprocessor directive** that runs before compilation. \`#include\` means "paste the contents of the file iostream here". \`iostream\` provides the I/O tools; without it \`std::cout\` does not exist. No semicolon at the end of this line.
2. \`int main() {\` — defines a function named \`main\`. \`int\` says it hands an integer back to the operating system; \`()\` is the (currently empty) parameter list; \`{\` opens the function body.
3. \`std::cout << "Hello, World!" << std::endl;\` — the output statement. Every statement ends with a **semicolon \`;\`** — that is how C++ knows a statement is finished.
4. \`return 0;\` — hands \`0\` back to the OS; by convention \`0\` means "finished successfully".
5. \`}\` — closes the function body, matching the \`{\`.

\`<<\` is the **stream insertion operator**. Picture the direction of flowing water: it flushes whatever is on the right into \`std::cout\` (the screen) on the left. It chains:

\`\`\`cpp
std::cout << "I am " << 18 << " years old" << std::endl;
\`\`\`

- \`std::\` is the standard-library namespace prefix: "use that tool called cout from the standard library"
- \`std::endl\` prints a newline and flushes the buffer; almost the same as printing \`"\\n"\`
- Strings go in **double quotes** \`"..."\`; **single quotes** \`'a'\` hold a single character
- Comments: \`// one line\` or \`/* several lines */\` — for humans, ignored by the compiler

### The lazy way: using namespace std;

Typing \`std::\` everywhere is noisy. You can declare "use the names from std directly" at the top:

\`\`\`cpp
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
\`\`\`

Fine for small programs; in large projects it invites name clashes, so avoid it in serious codebases.

## Reading the examples line by line

Example 1 (multiple lines), the core:

\`\`\`cpp
std::cout << "Hello, World!" << std::endl;
std::cout << "I am learning C++" << std::endl;
\`\`\`

- Line 1: sends the string \`Hello, World!\` to the screen, then a newline. The \`!\` is part of the string and is printed as-is
- Line 2: same again. **Each \`std::endl\` ends a line**, so the two sentences appear on two lines

Example 2 (several values on one line), the core:

\`\`\`cpp
int year = 2026;
std::cout << "Year: " << year << std::endl;
\`\`\`

- Line 1: defines an integer variable \`year\` holding \`2026\` (variables are the next lesson)
- Line 2: chained output — first the string \`Year: \`, then the value \`2026\`, then a newline. The screen shows \`Year: 2026\`

## Common beginner mistakes

1. **Missing semicolon**: \`std::cout << "hi"\` without \`;\` gives \`expected ';' before ...\`, often pointing at the next line. Add the semicolon at the end of the previous line
2. **Full-width punctuation**: typing a Chinese semicolon or Chinese quotes produces errors like \`stray '\\343' in program\`. Switch to an English input method when coding
3. **Missing header**: using cout without \`#include <iostream>\` gives \`'cout' was not declared in this scope\`. Add the include
4. **Wrong quotes**: \`std::cout << 'Hello';\` is illegal — single quotes hold one character; strings need double quotes

## Summary

- A program starts at \`main()\`; every statement ends with \`;\`
- \`std::cout << value\` prints to the screen; \`std::endl\` breaks the line
- Include the right header before using standard-library tools
- Read the **first** compiler error first — the rest are often cascade effects

Next lesson: variables — letting your program remember numbers and text.`,
      },
      examples: [
        {
          caption: { zh: '多行输出', en: 'Multiple lines' },
          code: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    std::cout << "I am learning C++" << std::endl;\n    return 0;\n}\n',
        },
        {
          caption: { zh: '一行多个值', en: 'Multiple values on one line' },
          code: '#include <iostream>\n\nint main() {\n    int year = 2026;\n    std::cout << "Year: " << year << std::endl;\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '打印两行问候', en: 'Print two greetings' },
          prompt: {
            zh: '编写完整程序，使用两次 \`std::cout\` 依次输出下面两行（注意标点）：\n\n\`\`\`\nHello, World!\nI am learning C++\n\`\`\`',
            en: 'Write a full program that uses \`std::cout\` twice to output these two lines (mind the punctuation):\n\n\`\`\`\nHello, World!\nI am learning C++\n\`\`\`',
          },
          starter: '#include <iostream>\n\nint main() {\n    // 在下面写你的代码\n    return 0;\n}\n',
          expectedOutput: 'Hello, World!\nI am learning C++\n',
          hints: [
            { zh: '程序要「开口说话」。回想讲解里，C++ 靠哪个工具把文字送到屏幕上？两句话要分成两行，每句话结束时该补上什么？', en: 'The program needs to "speak". Recall from the lecture: which tool does C++ use to send text to the screen? The two sentences must land on separate lines — what should follow each sentence?' },
            { zh: '语法：输出一行用 \`std::cout << "内容" << std::endl;\`。把要说的内容用英文双引号包住，\`std::endl\` 负责换行；注意每条语句末尾的分号不能漏。', en: 'Syntax: one line goes out as \`std::cout << "text" << std::endl;\` — wrap the text in double quotes, let \`std::endl\` handle the newline, and never omit the trailing semicolon.' },
            { zh: '写两条输出语句：第一条输出 \`Hello, World!\`，第二条输出 \`I am learning C++\`，每条末尾接 \`<< std::endl;\`。逗号、感叹号、空格必须与题目逐字符一致，一个都不能差。', en: 'Write two output statements: the first prints \`Hello, World!\`, the second prints \`I am learning C++\`, each ending with \`<< std::endl;\`. The comma, exclamation mark, and spacing must match the required output character for character.' },
            { zh: '骨架是两条 \`std::cout << "..." << std::endl;\`，第一条放 \`Hello, World!\`，第二条放 \`I am learning C++\`。易错点：\`std::\` 前缀不能漏；引号必须英文半角双引号；末尾分号不要写成英文句号；中间不要加多余的空格或文字。', en: 'The skeleton is two \`std::cout << "..." << std::endl;\` lines, the first holding \`Hello, World!\` and the second \`I am learning C++\`. Watch out: the \`std::\` prefix is mandatory, quotes must be half-width double quotes, do not replace the semicolon with a period, and never sneak in extra spaces or words.' },
            { zh: '完整参考：\`std::cout << "Hello, World!" << std::endl;\` 和 \`std::cout << "I am learning C++" << std::endl;\` 两行。\`std::endl\` 每次输出后自动换行，所以两次输出自然分两行；注意标点和空格必须逐字符与题目一致，然后点「运行并判定」。', en: 'Reference: two lines — \`std::cout << "Hello, World!" << std::endl;\` and \`std::cout << "I am learning C++" << std::endl;\`. \`std::endl\` appends a newline after each output, so two prints naturally occupy two lines; match the punctuation and spacing character for character, then click Run & Judge.' },
          ],
          solution: '#include <iostream>\n\nint main() {\n    std::cout << "Hello, World!" << std::endl;\n    std::cout << "I am learning C++" << std::endl;\n    return 0;\n}\n',
          solutionNote: { zh: '程序从上往下逐行执行：第一条 \`std::cout\` 输出 Hello, World! 并通过 \`std::endl\` 换行，第二条输出 I am learning C++。它正确的关键在于 \`std::cout\` 与 \`<<\` 的串联写法、\`std::endl\` 的位置，以及逗号、感叹号、空格与题目逐字符一致——判题区分大小写和全半角，差一个字符都会判未通过。也可以用 \`\\n\` 替代 \`std::endl\` 达到相同换行效果。', en: 'The program runs top to bottom: the first \`std::cout\` prints Hello, World! and uses \`std::endl\` to move to a new line, the second prints I am learning C++. It passes because the \`std::cout\` chain with \`<<\`, the placement of \`std::endl\`, and every comma, exclamation mark and space match the task character for character — the judge distinguishes case and half- vs full-width, so a single wrong character fails. You can also swap \`std::endl\` for \`\\n\` to get the same line break.' },
        },
        {
          id: 'ex2',
          title: { zh: '打印三角形', en: 'Print a triangle' },
          prompt: {
            zh: '用三次 \`std::cout\` 输出一个左对齐三角形：\n\n\`\`\`\n*\n**\n***\n\`\`\`',
            en: 'Use three \`std::cout\` statements to print a left-aligned triangle:\n\n\`\`\`\n*\n**\n***\n\`\`\`',
          },
          starter: '#include <iostream>\n\nint main() {\n    // 三行输出 * / ** / ***\n    return 0;\n}\n',
          expectedOutput: '*\n**\n***\n',
          hints: [
            { zh: '三行星号逐行递增。先数一数每行各要几个星号？一行打完后靠什么换到下一行？', en: 'The three lines grow one star at a time. Count how many stars each line needs, and ask yourself what moves the cursor to the next line.' },
            { zh: '语法：\`std::cout << "星号串" << std::endl;\`，双引号里放几个星号就输出几个，一行结束时接换行标记。', en: 'Syntax: \`std::cout << "stars" << std::endl;\` — however many stars you put between the quotes is how many appear; end each line with the newline marker.' },
            { zh: '分三条语句分别输出 \`*\`、\`**\`、\`***\`，每条末尾接 \`<< std::endl;\`。数量必须是 1、2、3 个星号，多一个少一个都过不了。', en: 'Use three statements printing \`*\`, \`**\`, and \`***\`, each ending with \`<< std::endl;\`. The counts must be exactly 1, 2, and 3 — one more or one less fails.' },
            { zh: '骨架是三条 \`std::cout << "..." << std::endl;\`，引号里依次放 \`*\`、\`**\`、\`***\`。易错点：每行星号数严格 1、2、3 个；星号字符必须是英文乘号式星号（不是中文句号「·」）；末尾分号别丢。', en: 'The skeleton is three \`std::cout << "..." << std::endl;\` lines whose quoted text is \`*\`, \`**\`, then \`***\`. Watch out: the star count must be exactly 1, 2, 3 per line; the star must be the ASCII asterisk character (not a full-width dot); do not drop the trailing semicolon.' },
            { zh: '完整参考：分三行写 \`std::cout << "*" << std::endl;\`、\`std::cout << "**" << std::endl;\`、\`std::cout << "***" << std::endl;\`。每条语句都靠 \`std::endl\` 换行；星号数严格 1/2/3 个，多一个少一个都会判未通过。', en: 'Reference: three lines — \`std::cout << "*" << std::endl;\`, \`std::cout << "**" << std::endl;\`, then \`std::cout << "***" << std::endl;\`. Each statement relies on \`std::endl\` to break the line; the star counts must be exactly 1, 2, 3 — one more or one less fails the judge.' },
          ],
          solution: '#include <iostream>\n\nint main() {\n    std::cout << "*" << std::endl;\n    std::cout << "**" << std::endl;\n    std::cout << "***" << std::endl;\n    return 0;\n}\n',
          solutionNote: { zh: '三行依次调用 `std::cout` 输出 1、2、3 个星号，每次通过 `std::endl` 换行。它正确的关键在于每行星号数量严格 1、2、3，不能多也不能少，且语句末尾分号一个都不能漏。也可以用一个 for 循环搭配字符串拼接或循环计数器来实现，效果相同。', en: 'Three sequential `std::cout` calls print 1, 2, then 3 stars, each terminated by `std::endl` for the newline. It passes because the star counts per line are exactly 1, 2, and 3 with no extras or omissions, and every trailing semicolon is in place. You can also drive the same output with a `for` loop plus a string built star by star, with identical results.' },
        },
      ],
    },

    // ================= 2. 变量与基本类型 =================
    {
      id: 'variables',
      title: { zh: '变量与基本类型', en: 'Variables & Basic Types' },
      difficulty: 1,
      lecture: {
        zh: `## 这节课学什么

这节课学习**变量**：让程序记住数字、文字等信息，之后随时取出来用、参与计算。学完后你能定义各种类型的变量并打印它们。

## 变量是什么

变量就像一个**贴了标签的盒子**：盒子里放东西（值），标签上写着「这个盒子只能装某类东西」（类型）。

和 Python「先扔东西进盒子再说是啥」不同，C++ 是**静态类型**语言：**先声明盒子装什么类型，才能使用**，而且装进 int 盒子的就永远只能装整数。这样做的好处是编译器在你运行之前就能帮你查出「装错东西」的错误。

常见类型速览：

| 类型 | 装什么 | 例子 |
|---|---|---|
| \`int\` | 整数（通常 32 位） | \`42\`, \`-7\`, \`0\` |
| \`double\` | 小数（双精度） | \`3.14\`, \`2e5\` |
| \`char\` | 单个字符 | \`'A'\`, \`'7'\` |
| \`bool\` | 真 / 假 | \`true\` / \`false\` |
| \`std::string\` | 一串文字 | \`"hello"\` |

注意区分：\`'A'\` 是单个字符（单引号），\`"hello"\` 是字符串（双引号），\`7\` 是数字而 \`'7'\` 是字符。

## 怎么写

定义变量的一般形式是 \`类型 变量名 = 初始值;\`：

\`\`\`cpp
int age = 20;               // 整数
double price = 9.99;        // 小数
char letter = 'A';          // 单个字符，单引号
bool ok = true;             // 布尔值
std::string name = "Alice"; // 字符串，需要 #include <string>
\`\`\`

规则要点：

1. **先声明后使用**：没声明的名字直接用，编译器报 \`was not declared in this scope\`
2. **声明可以不初始化，但千万别依赖未初始化的值**：

\`\`\`cpp
int a;      // 声明了但没赋值：里面是随机的垃圾值！
int b = 0;  // 声明并初始化：安全
\`\`\`

3. **赋值用 \`=\`**，意思是「把右边的值放进左边的盒子」，不是数学的相等：

\`\`\`cpp
int count = 0;
count = count + 1;  // 先算右边 (0+1)，再放回 count，现在 count 是 1
\`\`\`

4. **auto 让编译器猜类型**（C++11 起）：类型依然在编译期固定，只是不用自己写：

\`\`\`cpp
auto x = 42;       // x 是 int
auto pi = 3.14;    // pi 是 double
auto s = "hello";  // s 是 const char*，不是 string！
\`\`\`

5. **输出变量**：直接把变量接在 \`<<\` 后面，可以和字符串混着串：

\`\`\`cpp
std::cout << "name=" << name << ", age=" << age << std::endl;
\`\`\`

## 逐行读懂示例

本课示例（矩形面积）的核心：

\`\`\`cpp
int width = 7;
int height = 4;
int area = width * height;
std::cout << "area = " << area << std::endl;
\`\`\`

- 第一、二行：准备两个 int 盒子，分别放入 7 和 4
- 第三行：右边的 \`width * height\` 先算出 28，再放入新盒子 \`area\`
- 第四行：先输出字符串 \`area = \`，再输出 area 里的值 28，最后换行。屏幕显示 \`area = 28\`

## 新手常犯的错误

1. **用未初始化的变量**：\`int x; std::cout << x;\` 可能输出任意垃圾值甚至崩溃。习惯是定义时**顺手给个初值**，如 \`int x = 0;\`
2. **字符串没包含头文件**：用 \`std::string\` 却没 \`#include <string>\`（有些编译器经由 \`<iostream>\` 间接可用，但别赌运气），报 \`string is not a member of std\`。老老实实包含 \`<string>\`
3. **类型混用**：\`int x = 3.14;\` 能编译但 x 是 3（小数被截断）；\`char c = "A";\` 直接报错——双引号是字符串不是字符。想清楚每个值的类型
4. **变量名不合法**：\`int 2nd;\`（数字开头）、\`int my age;\`（带空格）都报错。变量名只能由字母、数字、下划线组成且不能以数字开头

## 小结

- 变量 = 带类型标签的盒子；\`类型 名字 = 值;\` 一句话完成声明加初始化
- 常用类型：\`int\`、\`double\`、\`char\`、\`bool\`、\`std::string\`
- 未初始化的内置类型变量是垃圾值，定义时就赋初值
- \`auto\` 可以推导类型，本质仍是静态类型

下一课学「运算符」——让这些盒子里的值真正算起来。`,
        en: `## What you will learn

This lesson is about **variables**: letting your program remember numbers, text and other information, then retrieving and computing with them later. Afterwards you can define variables of the common types and print them.

## What is a variable

A variable is like a **labeled box**: the box holds something (the value), and the label says what kind of thing this box may hold (the type).

Unlike Python, where you throw something in first and ask questions later, C++ is **statically typed**: you must **declare the box's type before using it**, and an int box only ever holds integers. The payoff: the compiler catches "wrong kind of content" mistakes before you even run the program.

A quick tour of the common types:

| Type | Holds | Example |
|---|---|---|
| \`int\` | integer (usually 32-bit) | \`42\`, \`-7\`, \`0\` |
| \`double\` | decimal (double precision) | \`3.14\`, \`2e5\` |
| \`char\` | a single character | \`'A'\`, \`'7'\` |
| \`bool\` | true / false | \`true\` / \`false\` |
| \`std::string\` | a run of text | \`"hello"\` |

Note the distinction: \`'A'\` is one character (single quotes), \`"hello"\` is a string (double quotes), \`7\` is a number while \`'7'\` is a character.

## How to write it

The general form is \`type name = initial value;\`:

\`\`\`cpp
int age = 20;               // integer
double price = 9.99;        // decimal
char letter = 'A';          // single character, single quotes
bool ok = true;             // boolean
std::string name = "Alice"; // string; needs #include <string>
\`\`\`

Rules to remember:

1. **Declare before use**: using an undeclared name gives \`was not declared in this scope\`
2. **You may declare without initializing — but never rely on the value**:

\`\`\`cpp
int a;      // declared, not assigned: holds garbage!
int b = 0;  // declared and initialized: safe
\`\`\`

3. **Assignment uses \`=\`**, meaning "put the right-hand value into the left-hand box" — it is not mathematical equality:

\`\`\`cpp
int count = 0;
count = count + 1;  // right side computes 0+1 first, then stores into count
\`\`\`

4. **auto lets the compiler deduce the type** (since C++11): the type is still fixed at compile time, you just do not write it yourself:

\`\`\`cpp
auto x = 42;       // x is int
auto pi = 3.14;    // pi is double
auto s = "hello";  // s is const char*, not string!
\`\`\`

5. **Printing variables**: just chain them after \`<<\`, mixed with strings:

\`\`\`cpp
std::cout << "name=" << name << ", age=" << age << std::endl;
\`\`\`

## Reading the example line by line

The core of this lesson's example (rectangle area):

\`\`\`cpp
int width = 7;
int height = 4;
int area = width * height;
std::cout << "area = " << area << std::endl;
\`\`\`

- Lines 1–2: prepare two int boxes holding 7 and 4
- Line 3: the right side \`width * height\` computes 28 first, then stores it into the new box \`area\`
- Line 4: print the string \`area = \`, then the value 28, then a newline. The screen shows \`area = 28\`

## Common beginner mistakes

1. **Using an uninitialized variable**: \`int x; std::cout << x;\` may print garbage or even crash. Get into the habit of **assigning an initial value** at definition, e.g. \`int x = 0;\`
2. **Missing string header**: using \`std::string\` without \`#include <string>\` (some compilers pull it in via \`<iostream>\`, but do not bet on it) gives \`string is not a member of std\`. Include \`<string>\` explicitly
3. **Mixing types**: \`int x = 3.14;\` compiles but x is 3 (the fraction is truncated); \`char c = "A";\` fails outright — double quotes make a string, not a character. Think about each value's type
4. **Illegal names**: \`int 2nd;\` (starts with a digit) and \`int my age;\` (contains a space) are errors. Names consist of letters, digits and underscores, and cannot start with a digit

## Summary

- A variable is a typed box; \`type name = value;\` declares and initializes in one statement
- Common types: \`int\`, \`double\`, \`char\`, \`bool\`, \`std::string\`
- An uninitialized built-in variable holds garbage — always assign at definition
- \`auto\` deduces types, but the language is still statically typed

Next lesson: operators — making the values inside those boxes actually compute.`,
      },
      examples: [
        {
          caption: { zh: '基本类型与 cout', en: 'Basic types and cout' },
          code: '#include <iostream>\n#include <string>\n\nint main() {\n    int width = 7;\n    int height = 4;\n    int area = width * height;\n    std::cout << "area = " << area << std::endl;\n    std::cout << "type of area: int" << std::endl;\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '计算矩形面积', en: 'Rectangle area' },
          prompt: {
            zh: '定义 \`int width = 7;\` 和 \`int height = 4;\`，计算面积并**只输出一个整数**（应为 \`28\`）。',
            en: 'Define \`int width = 7;\` and \`int height = 4;\`, compute the area, and **print only the integer** (should be \`28\`).',
          },
          starter: '#include <iostream>\n\nint main() {\n    int width = 7;\n    int height = 4;\n    // 计算并输出面积\n    return 0;\n}\n',
          expectedOutput: '28\n',
          hints: [
            { zh: '面积就是「宽 × 高」。你手里已经有存着宽和高的两个变量了：面积该由它们怎样算出来？算完之后交给谁显示到屏幕上？', en: 'Area is width times height. You already hold the two variables storing width and height: how should the area be computed from them? And which tool displays the result on the screen?' },
            { zh: '语法：可以先 \`int 变量名 = width * height;\` 把结果存下来再输出；也可以把表达式直接放进 \`std::cout << 表达式 << std::endl;\`。乘号是 \`*\`，语句末尾的分号不能漏。', en: 'Syntax: either store the result first with \`int 变量名 = width * height;\` and print it, or put the expression straight into \`std::cout << 表达式 << std::endl;\`. The multiplication sign is \`*\`; do not forget the semicolon at the end.' },
            { zh: '定义 \`int area = width * height;\`，然后输出 area 并换行。只输出这个整数（28），前后不要带任何文字、空格或多余符号。', en: 'Define \`int area = width * height;\`, then print area with a newline. Output only the integer (28) — no extra text, spaces, or symbols before or after it.' },
            { zh: '骨架：先 \`int area = width * height;\` 算出结果，再 \`std::cout << area << std::endl;\` 输出一行。易错点：题目明确说「只输出一个整数」，不能在 cout 里夹任何引号包住的文字、提示；分号不可丢；乘号不能写成字母 x。', en: 'Skeleton: first \`int area = width * height;\` to compute the result, then \`std::cout << area << std::endl;\` to print one line. Watch out: the prompt demands "only one integer" — never embed any quoted text or label inside the cout; the semicolon must stay; the multiplication sign must be \`*\`, not the letter x.' },
            { zh: '完整参考：\`int area = width * height; std::cout << area << std::endl;\` 两行搞定，乘号用 \`*\` 而非字母 x；也可以省去中间变量，把 \`width * height\` 直接放进 cout 的链里。注意题目只允许输出纯整数 28，任何附加文字都会判未通过。', en: 'Reference: \`int area = width * height;\` followed by \`std::cout << area << std::endl;\` — the multiplication sign is \`*\`, not the letter x. You can also skip the intermediate variable and place \`width * height\` straight inside the cout chain. The judge demands the bare integer 28 only; any extra text fails the check.' },
          ],
          solution: '#include <iostream>\n\nint main() {\n    int width = 7;\n    int height = 4;\n    std::cout << width * height << std::endl;\n    return 0;\n}\n',
          solutionNote: { zh: '直接用表达式 \`width * height\` 作为 cout 的输出对象：乘法表达式会被求值成 28，再交给 \`std::endl\` 完成换行。它正确的关键在于只用乘法算子 \`*\`（不是字母 x），输出只能是纯整数 28，cout 链里不能夹杂任何字符串或提示文字。也可以先存进 \`int area\` 再输出，等价且更易读。', en: 'The expression \`width * height\` is used directly as the operand of cout: the multiplication evaluates to 28, and \`std::endl\` appends the newline. It passes because the multiplication sign is the operator \`*\` (not the letter x) and only the bare integer 28 is emitted, with no quoted label or extra text inside the cout chain. You can also stash the product into an \`int area\` first and print that — same result, slightly more readable.' },
        },
        {
          id: 'ex2',
          title: { zh: '整数拆位', en: 'Digits of an integer' },
          prompt: {
            zh: '给定 \`int n = 123;\`，**每行一个整数**依次输出个位、十位、百位（输出 \`3\`、\`2\`、\`1\`）。提示：用 \`%\` 取余、\`/\` 整除。',
            en: 'Given \`int n = 123;\`, print its ones, tens, and hundreds digits, **one per line** (\`3\`, \`2\`, \`1\`). Hint: use \`%\` for the digit and \`/\` to shift.',
          },
          starter: '#include <iostream>\n\nint main() {\n    int n = 123;\n    // 个位: n % 10；十位: (n / 10) % 10；百位: n / 100\n    return 0;\n}\n',
          expectedOutput: '3\n2\n1\n',
          hints: [
            { zh: '想「抠」出 123 的最低位：一个数对 10 取余，得到的是什么？再想：怎样把 123 变成 12，让十位成为新的最低位？百位呢？', en: 'To pry out the lowest digit of 123: what does the remainder of a number divided by 10 give you? And how can you turn 123 into 12 so the tens digit becomes the new lowest one? What about the hundreds digit?' },
            { zh: '语法：\`n % 10\` 得到最低位；\`n / 10\` 是整数除法，会丢掉个位、整体右移一位；百位直接 \`n / 100\`。', en: 'Syntax: \`n % 10\` gives the lowest digit; \`n / 10\` is integer division, which drops the ones digit and shifts the number right by one; the hundreds digit is simply \`n / 100\`.' },
            { zh: '三行输出，依次是 \`n % 10\`、\`(n / 10) % 10\`、\`n / 100\`，即 3、2、1。顺序不能颠倒，每行恰好一个整数。', en: 'Three lines in order: \`n % 10\`, \`(n / 10) % 10\`, then \`n / 100\` — that is 3, 2, 1. The order must not be reversed, and each line holds exactly one integer.' },
            { zh: '骨架是三条 \`std::cout << 表达式 << std::endl;\`。易错点：组合表达式 \`(n / 10) % 10\` 必须用括号把 \`n / 10\` 包起来，否则优先级会出错；顺序必须是个位→十位→百位，不能颠倒；cout 链里也不要夹任何提示文字。', en: 'Skeleton: three \`std::cout << 表达式 << std::endl;\` lines. Watch out: the compound expression \`(n / 10) % 10\` must be wrapped in parentheses so \`n / 10\` is evaluated first; the order must be ones → tens → hundreds and must not be reversed; the cout chain must not embed any label string.' },
            { zh: '完整参考：三行依次为 \`std::cout << (n % 10) << std::endl;\`、\`std::cout << ((n / 10) % 10) << std::endl;\`、\`std::cout << (n / 100) << std::endl;\`。输出 3、2、1，顺序与题目一致；不要把整除结果当成浮点除法，否则 123 / 10 会变 12.3。', en: 'Reference: three lines — \`std::cout << (n % 10) << std::endl;\`, then \`std::cout << ((n / 10) % 10) << std::endl;\`, then \`std::cout << (n / 100) << std::endl;\`. Output is 3, 2, 1 in that order; be sure to use integer division, not floating-point — otherwise \`123 / 10\` becomes 12.3.' },
          ],
          solution: '#include <iostream>\n\nint main() {\n    int n = 123;\n    std::cout << (n % 10) << std::endl;\n    std::cout << ((n / 10) % 10) << std::endl;\n    std::cout << (n / 100) << std::endl;\n    return 0;\n}\n',
          solutionNote: { zh: '三条 cout 分别输出 \`n % 10\`（个位）、\`(n / 10) % 10\`（十位，先整除丢个位再取余）、\`n / 100\`（百位，整数除法直接右移两位）。关键点在于整除 \`/\` 在两个 int 之间会丢弃小数部分，所以 \`123 / 10\` 得到 12 而非 12.3；组合表达式必须用括号保证求值顺序。也可以先把每位存到局部变量再输出，等价但啰嗦。', en: 'Three cout statements emit \`n % 10\` (ones), \`(n / 10) % 10\` (tens — integer-divide first to drop the ones, then take the remainder), and \`n / 100\` (hundreds — integer division shifts the number right by two places). The key is that integer \`/\` between two ints drops the fractional part, so \`123 / 10\` is 12, not 12.3, and the compound expression needs parentheses to enforce order. You can also stash each digit into a local variable first and print from there — same result, just wordier.' },
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

这节课学习**运算符**：加、减、乘、除、取余、比较、逻辑判断。学完后你能写出真正的「算式」，并理解 C++ 里几个最容易踩的坑（尤其是整数除法）。

## 运算符是什么

运算符就是数学课上的「+ − × ÷」在编程里的版本，但比数学课多两类：

- **算术运算符**：算数值，如 \`3 * 4\` 得 \`12\`
- **比较运算符**：比大小，如 \`3 < 5\` 得 \`true\`
- **逻辑运算符**：组合判断，如「年龄大于 18 **且** 有票」才能进场

一个重要概念：任何运算符作用在数据上都会**产出一个值**。\`3 + 4\` 产出 \`7\`，\`3 < 5\` 产出 \`true\`。而 \`true\` / \`false\` 这种「真 / 假」类型就是上节课的 \`bool\`。

## 怎么写

### 算术运算符

| 运算符 | 含义 | 例子 | 结果 |
|---|---|---|---|
| \`+\` \`-\` \`*\` | 加减乘 | \`3 * 4\` | \`12\` |
| \`/\` | 除法（见下方大坑） | \`10 / 4\` | \`2\` |
| \`%\` | 取余（仅限整数） | \`10 % 4\` | \`2\` |

**最大的坑：整数除法**。当 \`/\` 两边都是整数时，结果**也是整数**，小数部分直接丢掉：

\`\`\`cpp
std::cout << 10 / 4;     // 2，不是 2.5！
std::cout << 10.0 / 4;  // 2.5：只要一边是小数就是小数除法
\`\`\`

\`%\` 只能用于整数，含义是「除完剩下的余数」：\`10 % 4\` 是 \`2\`。它有个经典用途——判断奇偶：\`n % 2 == 0\` 就是偶数。

### 比较与逻辑运算符

- 比较：\`==\`（等于）、\`!=\`（不等于）、\`<\`、\`>\`、\`<=\`、\`>=\`，结果都是 \`bool\`
- 逻辑：\`&&\`（并且）、\`||\`（或者）、\`!\`（取反）

\`\`\`cpp
int a = 3, b = 5;
std::cout << (a < b) << std::endl;            // 1：true 打印出来是 1
std::cout << (a == b) << std::endl;           // 0：false 打印出来是 0
std::cout << (a < b && b < 10) << std::endl;  // 1：两边都成立才是 1
\`\`\`

注意比较运算的**结果是数字 1 / 0** 而不是单词 true / false。

### 自增自减

\`x++\` 让 x 加 1，\`x--\` 让 x 减 1；\`++x\` 和 \`x++\` 的区别只在于表达式本身的返回值：

\`\`\`cpp
int x = 5;
std::cout << x++ << std::endl;  // 5：先打印旧值，再加 1
std::cout << x << std::endl;    // 6：此时已经加过了
\`\`\`

### 复合赋值运算符

「自己运算再存回自己」有更短的写法，\`x = x + 5\` 可以写成 \`x += 5\`：

\`\`\`cpp
int total = 0;
total += 10;   // 等价于 total = total + 10
total *= 2;    // 等价于 total = total * 2，现在 total 是 20
\`\`\`

加 \`+=\`、减 \`-=\`、乘 \`*=\`、除 \`/=\`、取余 \`%=\` 都有，循环累加时几乎只用 \`+=\`。

### 优先级

先乘除后加减；比较低于算术；逻辑 \`&&\` 低于 \`||\`……记不住就**加括号**，括号永远最优先，还更可读：

\`\`\`cpp
int r = (a + b) * 2;   // 明确先加后乘
bool ok = (a > 0) && (b > 0);
\`\`\`

## 逐行读懂示例

本课示例（整数除法与取余）：

\`\`\`cpp
int a = 17, b = 5;
std::cout << (a / b) << std::endl;    // 3
std::cout << (a % b) << std::endl;    // 2
std::cout << (10.0 / 4) << std::endl; // 2.5
\`\`\`

- 第一行：a、b 都是 int，\`a / b\` 是整数除法，17 除 5 商 3（余数被丢掉）
- 第二行：\`a % b\` 是 17 除 5 的余数 2。验证：\`3 * 5 + 2 = 17\`，没错
- 第三行：\`10.0\` 是小数，触发了浮点除法，得到 \`2.5\`

## 新手常犯的错误

1. **以为 \`10 / 4\` 是 2.5**：两边都是整数就是整数除法。想要小数，把一边写成 \`10.0\` 或 \`double(a)\`
2. **对小数用 \`%\`**：\`10.5 % 3\` 直接编译错误（\`invalid operands\`）。取余只对整数合法；小数请用 \`std::fmod\`（需要 \`<cmath>\`）
3. **比较写成赋值**：\`if (x = 5)\` 不是判断 x 等不等于 5，而是把 5 塞给 x 并返回真。判断相等必须写 \`==\`（下节课细说）
4. **漏括号导致逻辑错**：\`a & b == c\` 会先算 \`b == c\`。判断组合条件时给每个比较都套上括号

## 小结

- 算术：\`+ - * / %\`；整数 / 整数 = 整数（截断）
- 比较：\`== != < > <= >=\`，结果 \`bool\`，打印为 1 / 0
- 逻辑：\`&&\` 且、\`||\` 或、\`!\` 非
- 拿不准优先级就加括号

下一课学「条件分支」——让程序根据判断结果走不同的路。`,
        en: `## What you will learn

This lesson covers **operators**: addition, subtraction, multiplication, division, remainder, comparison, and logical connectives. Afterwards you can write real "formulas" — and you will understand the classic traps, integer division above all.

## What is an operator

Operators are the programming version of the "+ − × ÷" you know from math, plus two extra families:

- **Arithmetic operators**: compute numbers, e.g. \`3 * 4\` yields \`12\`
- **Comparison operators**: compare values, e.g. \`3 < 5\` yields \`true\`
- **Logical operators**: combine conditions, like "age over 18 **and** has a ticket" to enter

One key idea: an operator applied to data always **produces a value**. \`3 + 4\` produces \`7\`; \`3 < 5\` produces \`true\`. That true/false type is exactly the \`bool\` from last lesson.

## How to write it

### Arithmetic operators

| Operator | Meaning | Example | Result |
|---|---|---|---|
| \`+\` \`-\` \`*\` | add/sub/mul | \`3 * 4\` | \`12\` |
| \`/\` | division (see the trap) | \`10 / 4\` | \`2\` |
| \`%\` | remainder (integers only) | \`10 % 4\` | \`2\` |

**The biggest trap: integer division.** When both sides of \`/\` are integers, the result **is an integer too** — the fraction is simply dropped:

\`\`\`cpp
std::cout << 10 / 4;     // 2, not 2.5!
std::cout << 10.0 / 4;  // 2.5: one floating side makes it floating division
\`\`\`

\`%\` only works on integers and means "what is left over": \`10 % 4\` is \`2\`. A classic use is even/odd checks: \`n % 2 == 0\` means even.

### Comparison & logical operators

- Comparison: \`==\` (equal), \`!=\` (not equal), \`<\`, \`>\`, \`<=\`, \`>=\`; all produce \`bool\`
- Logical: \`&&\` (and), \`||\` (or), \`!\` (not)

\`\`\`cpp
int a = 3, b = 5;
std::cout << (a < b) << std::endl;            // 1: true prints as 1
std::cout << (a == b) << std::endl;           // 0: false prints as 0
std::cout << (a < b && b < 10) << std::endl;  // 1: both sides hold
\`\`\`

Note that comparison results **print as the digits 1 / 0**, not the words true / false.

### Increment / decrement

\`x++\` adds 1 to x; \`x--\` subtracts 1:

\`\`\`cpp
int x = 5;
std::cout << x++ << std::endl;  // 5: prints the old value first, then increments
std::cout << x << std::endl;    // 6: now it has been incremented
\`\`\`

### Compound assignment operators

"operate on myself and store back" has a shorter form: \`x = x + 5\` can be written \`x += 5\`:

\`\`\`cpp
int total = 0;
total += 10;   // equivalent to total = total + 10
total *= 2;    // equivalent to total = total * 2; total is now 20
\`\`\`

Add \`+=\`, subtract \`-=\`, multiply \`*=\`, divide \`/=\`, remainder \`%=\` — they all exist, and \`+=\` is nearly the only one you need when accumulating in loops.

### Precedence

Multiply/divide before add/subtract; comparisons sit below arithmetic; \`&&\` binds tighter than \`||\`... If you cannot remember — **use parentheses**. They are always first and read better:

\`\`\`cpp
int r = (a + b) * 2;   // add first, then multiply
bool ok = (a > 0) && (b > 0);
\`\`\`

## Reading the example line by line

This lesson's example (integer division and remainder):

\`\`\`cpp
int a = 17, b = 5;
std::cout << (a / b) << std::endl;    // 3
std::cout << (a % b) << std::endl;    // 2
std::cout << (10.0 / 4) << std::endl; // 2.5
\`\`\`

- Line 1: a and b are ints, so \`a / b\` is integer division: 17 divided by 5 gives quotient 3 (the remainder is dropped)
- Line 2: \`a % b\` is the remainder of 17 over 5, which is 2. Check: \`3 * 5 + 2 = 17\` — correct
- Line 3: \`10.0\` is a double, triggering floating-point division, so we get \`2.5\`

## Common beginner mistakes

1. **Assuming \`10 / 4\` is 2.5**: two integers means integer division. For a decimal result, write one side as \`10.0\` or \`double(a)\`
2. **Using \`%\` on decimals**: \`10.5 % 3\` is a compile error (\`invalid operands\`). Remainder only works on integers; for doubles use \`std::fmod\` (with \`<cmath>\`)
3. **Writing = instead of ==**: \`if (x = 5)\` does not test whether x equals 5 — it assigns 5 to x and returns true. Equality tests need \`==\` (more next lesson)
4. **Missing parentheses**: \`a & b == c\` evaluates \`b == c\` first. Wrap every comparison in parentheses when combining conditions

## Summary

- Arithmetic: \`+ - * / %\`; integer / integer = integer (truncated)
- Comparison: \`== != < > <= >=\`, produces \`bool\`, printed as 1 / 0
- Logical: \`&&\` and, \`||\` or, \`!\` not
- When in doubt about precedence, add parentheses

Next lesson: conditionals — letting the program take different paths based on a test.`,
      },
      examples: [
        {
          caption: { zh: '整数除法与取余', en: 'Integer division and remainder' },
          code: '#include <iostream>\n\nint main() {\n    int a = 17, b = 5;\n    std::cout << (a / b) << std::endl;    // 3\n    std::cout << (a % b) << std::endl;    // 2\n    std::cout << (10.0 / 4) << std::endl; // 2.5\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '拆分秒数', en: 'Split seconds' },
          prompt: {
            zh: '变量 \`int total = 3775;\` 是总秒数。**每行一个**输出分钟数和剩余秒数（即输出 \`62\` 和 \`55\` 两行）。',
            en: 'Variable \`int total = 3775;\` is a number of seconds. Print the number of whole minutes and the leftover seconds, **one per line** (\`62\` and \`55\`).',
          },
          starter: '#include <iostream>\n\nint main() {\n    int total = 3775;\n    // minutes = total / 60, leftover = total % 60\n    return 0;\n}\n',
          expectedOutput: '62\n55\n',
          hints: [
            { zh: '一分钟是 60 秒。「3775 秒里有多少个整分钟」和「除完整分钟后还剩几秒」这两个问题，分别该用整除还是取余来回答？', en: 'A minute is 60 seconds. For "how many whole minutes are in 3775 seconds" and "how many seconds are left over", which one needs integer division and which one needs the remainder?' },
            { zh: '语法：\`total / 60\` 得到整分钟数，\`total % 60\` 得到剩余秒数，两个结果各输出一行即可。', en: 'Syntax: \`total / 60\` gives whole minutes and \`total % 60\` gives the leftover seconds; print each result on its own line.' },
            { zh: '两行输出：先 \`std::cout << (total / 60) << std::endl;\`，再 \`std::cout << (total % 60) << std::endl;\`，即 62 和 55。不要带任何多余文字。', en: 'Two lines: first \`std::cout << (total / 60) << std::endl;\`, then \`std::cout << (total % 60) << std::endl;\` — that is 62 and 55. Do not add any extra text.' },
            { zh: '骨架是两条 \`std::cout << (表达式) << std::endl;\`。易错点：两个 int 之间用 \`/\` 是整除，会丢小数，所以 \`3775 / 60\` 不是 62.91 而是 62；除数 60 不要写成 60.0，否则结果会变成 double；每条末尾的分号一个不能漏。', en: 'Skeleton: two \`std::cout << (表达式) << std::endl;\` lines. Watch out: \`/\` between two ints is integer division and drops the fraction, so \`3775 / 60\` is 62, not 62.91; do not write the divisor as 60.0 or the result becomes a double; never drop a trailing semicolon.' },
            { zh: '完整参考：\`std::cout << (total / 60) << std::endl;\` 输出 62，再 \`std::cout << (total % 60) << std::endl;\` 输出 55，两个数都靠整数除法和取余得到。整除先输出、取余后输出，顺序与题目一致；不要在 cout 里夹杂引号包住的文字。', en: 'Reference: \`std::cout << (total / 60) << std::endl;\` emits 62, then \`std::cout << (total % 60) << std::endl;\` emits 55 — both numbers come from integer arithmetic. Print the quotient first, the remainder second, exactly as the task orders; never embed a quoted label string inside cout.' },
          ],
          solution: '#include <iostream>\n\nint main() {\n    int total = 3775;\n    std::cout << (total / 60) << std::endl;\n    std::cout << (total % 60) << std::endl;\n    return 0;\n}\n',
          solutionNote: { zh: '两条 cout 分别输出 \`total / 60\`（整除得到 62）和 \`total % 60\`（取余得到 55），整除与取余互为逆运算，拼起来正好把秒数拆成分钟与剩余秒两部分。关键点在于 \`/\` 在两个 int 之间是整除，会直接舍掉小数部分，所以即使 3775 除以 60 真实值是 62.91…，输出仍是 62。也可以把 \`int total\` 改成 60 的倍数验证自己的公式。', en: 'Two cout statements emit \`total / 60\` (integer division yields 62) and \`total % 60\` (the remainder yields 55); the two operators are inverses that together split seconds into whole minutes plus leftover. The key is that \`/\` between two ints is integer division and discards the fraction, so even though 3775 / 60 is really 62.91…, the output stays 62. You can also temporarily change \`int total\` to a clean multiple of 60 to sanity-check the formula.' },
        },
        {
          id: 'ex2',
          title: { zh: '整数除法 vs 浮点除法', en: 'Integer vs floating-point division' },
          prompt: {
            zh: '**每行一个**输出下面四个表达式的值（顺序）：\`7 / 2\`、\`7.0 / 2\`、\`7 / 2.0\`、\`7.0 / 2.0\`。期望输出 \`3\`、\`3.5\`、\`3.5\`、\`3.5\`。',
            en: 'Print, **one per line**, the values of these four expressions in order: \`7 / 2\`, \`7.0 / 2\`, \`7 / 2.0\`, \`7.0 / 2.0\`. Expected: \`3\`, \`3.5\`, \`3.5\`, \`3.5\`.',
          },
          starter: '#include <iostream>\n#include <iomanip>\n\nint main() {\n    // 注意：浮点结果要输出小数部分\n    return 0;\n}\n',
          expectedOutput: '3\n3.5\n3.5\n3.5\n',
          hints: [
            { zh: '四个式子唯一的区别是「有没有带小数点的数参与」。逐个检查每条除法的两边：都是整数时结果会怎样？只要有一边是小数又会怎样？', en: 'The only difference among the four expressions is "whether a number with a decimal point takes part". Check both sides of each division: what happens when both are integers, and what happens as soon as one side is a decimal?' },
            { zh: '语法：用 \`std::cout << (表达式) << std::endl;\` 逐个输出。两个整数相除会舍去小数部分；含小数的结果会自动打印出小数位，无需额外设置。', en: 'Syntax: print each one with \`std::cout << (表达式) << std::endl;\`. Dividing two integers discards the fraction; a result involving a double shows its decimal part automatically, with no extra setup.' },
            { zh: '依次输出 \`(7 / 2)\`、\`(7.0 / 2)\`、\`(7 / 2.0)\`、\`(7.0 / 2.0)\`，各占一行，结果是 3、3.5、3.5、3.5。注意从第二行起的小数点不能丢。', en: 'Print \`(7 / 2)\`, \`(7.0 / 2)\`, \`(7 / 2.0)\`, \`(7.0 / 2.0)\` one per line — the results are 3, 3.5, 3.5, 3.5. Mind the decimal point from the second line on.' },
            { zh: '骨架是四条 \`std::cout << (表达式) << std::endl;\`。易错点：表达式必须用括号包起来，否则 \`<<\` 优先级会先吃掉后续操作数；常量 \`7.0\` 的小数点不能丢，否则 C++ 仍按 int 算；浮点结果 std::cout 默认输出最短表示，刚好是 3.5。', en: 'Skeleton: four \`std::cout << (表达式) << std::endl;\` lines. Watch out: each expression must sit in parentheses so \`<<\` does not gobble following operands; the literal \`7.0\` must keep its decimal point or C++ still treats it as int; std::cout prints the shortest representation of a double by default, which happens to be 3.5 here.' },
            { zh: '完整参考：四行依次为 \`std::cout << (7 / 2) << std::endl;\`、\`(7.0 / 2)\`、\`(7 / 2.0)\`、\`(7.0 / 2.0)\`，对应 3、3.5、3.5、3.5。区别仅在于除号两边是否含 \`.0\`；其它条件相同，输出顺序与题目一致即可。', en: 'Reference: four lines — \`std::cout << (7 / 2) << std::endl;\`, then \`std::cout << (7.0 / 2) << std::endl;\`, then \`std::cout << (7 / 2.0) << std::endl;\`, then \`std::cout << (7.0 / 2.0) << std::endl;\`, yielding 3, 3.5, 3.5, 3.5. The only knob is the presence of \`.0\` on each operand; everything else is identical.' },
          ],
          solution: '#include <iostream>\n\nint main() {\n    std::cout << (7 / 2) << std::endl;\n    std::cout << (7.0 / 2) << std::endl;\n    std::cout << (7 / 2.0) << std::endl;\n    std::cout << (7.0 / 2.0) << std::endl;\n    return 0;\n}\n',
          solutionNote: { zh: '四条 cout 按顺序输出四个除法表达式的结果：两边都是 int 时结果也是 int（小数位被截掉），只要有一边是 double，结果就提升为 double 保留小数部分。关键点在于 C++ 的隐式类型提升规则：\`/\` 操作符只要任一操作数是 double，整数也会被「提升」参与浮点除法；输出顺序与题目逐项对应，差一项都会判未通过。也可以把结果先存到 double 变量再输出，等价但更冗长。', en: 'Four cout statements emit the four expressions in order: when both operands are int, the result is int and the fraction is discarded; as soon as one operand is double, the result is promoted to double and keeps its decimal. The key is C++ implicit promotion: if either side of \`/\` is double, the int on the other side is promoted to double and the division becomes floating-point; the print order matches the prompt line for line, and missing or swapping one fails the check. You can also stash each value into a double variable first, with the same results but more verbose.' },
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

这节课学习**条件分支**：让程序「看情况办事」——成绩 85 输出 B、3 选 1 输出最大值。学完后你的程序第一次拥有了「做判断」的能力。

## 条件分支是什么

生活里到处是分支：「如果下雨就带伞，否则不带」。条件分支就是让程序在**岔路口选一条路走**：

- \`if (条件) {...}\`：条件成立就进大括号，不成立就跳过
- \`else if (条件) {...}\`：前面的都不成立，但这个成立就走这条
- \`else {...}\`：以上全不成立时的兜底

程序从上往下**依次检查**，一旦某个条件成立就执行对应代码块，其余分支全部跳过。

\`(条件)\` 里放的是上节课的比较 / 逻辑表达式，如 \`score >= 80\`、\`age > 18 && hasTicket\`，结果必须是 \`bool\`。

## 怎么写

基本骨架：

\`\`\`cpp
if (score >= 90) {
    grade = "A";        // 条件成立时执行
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "F";        // 兜底
}
\`\`\`

规则要点：

1. **条件必须写在圆括号 \`()\` 里**，忘了括号直接编译错误
2. **代码块用大括号 \`{ }\` 包住**。哪怕里面只有一句话也建议写大括号——以后加代码时不容易出错
3. \`else if\` 可以有任意多个；\`else\` 最多一个且必须放最后；两者都**可以省略**
4. **判断相等用 \`==\`，两个等号**。\`=\` 是赋值，写错会把值塞进变量并且条件永远为真

### 嵌套与化简

if 里还可以再放 if（嵌套），但嵌套太深可读性差。能用 \`&&\` / \`||\` 合并的尽量合并：\`if (isWeekend && !onDuty)\` 比两层嵌套清晰得多。函数里还有一种常用技巧叫**提前返回**——条件不满足就先 return，主逻辑不用裹在 else 里：

\`\`\`cpp
void check(int n) {
    if (n < 0) return;   // 不合格直接走人
    std::cout << n;      // 主逻辑不用缩进
}
\`\`\`

### switch：一个变量对多个固定值

当判断「一个变量等于哪个具体值」时可以换用 \`switch\`：

\`\`\`cpp
switch (day) {
    case 1: std::cout << "Mon" << std::endl; break;
    case 2: std::cout << "Tue" << std::endl; break;
    default: std::cout << "Other" << std::endl;
}
\`\`\`

每个 \`case\` 末尾要写 \`break;\` 跳出 switch，否则会**贯穿**到下一个 case 继续执行；\`default\` 是兜底。

### 三元运算符：迷你版 if

\`条件 ? 值A : 值B\`——成立取 A，不成立取 B，适合「二选一赋值」：

\`\`\`cpp
int mx = (a > b) ? a : b;   // a 大取 a，否则取 b
\`\`\`

## 逐行读懂示例

本课示例（判断奇偶）：

\`\`\`cpp
int n = 7;
if (n % 2 == 0) {
    std::cout << "even" << std::endl;
} else {
    std::cout << "odd" << std::endl;
}
\`\`\`

- 第一行：把 7 放进 int 盒子 n
- 第二行：\`n % 2\` 是 7 除 2 的余数 1，\`1 == 0\` 不成立，所以整个条件是 false
- 条件不成立，跳过 if 块，进入 else 块，输出 \`odd\`

## 新手常犯的错误

1. **\`=\` 写成条件**：\`if (x = 5)\` 永远成立且把 x 改成了 5。想判断相等要写 \`if (x == 5)\`。把常量放左边（\`if (5 == x)\`）可以让手误变成编译错误
2. **\`case\` 里忘写 \`break\`**：\`day\` 为 1 时会连着打印 Mon、Tue、Wed……现象是「输出多了一串」，逐个检查 case 补 break
3. **大括号后误加分号**：\`if (a > b); {...}\`——分号成了「空语句」，大括号变成无条件执行，程序行为诡异。删掉 if 后面的分号
4. **在条件里写赋值意图的比较链**：数学式 \`80 <= score < 90\` 在 C++ 里不会按你想的工作（先算 \`80 <= score\` 得 0/1，再和 90 比）。要写成 \`score >= 80 && score < 90\`

## 小结

- \`if / else if / else\`：从上往下找到第一个成立的条件执行，其余跳过
- 条件放 \`()\` 里，结果必须是 \`bool\`；判断相等用 \`==\`
- switch 适合「对多个固定值」，case 记得 break
- 三元运算符 \`? :\` 是二选一的迷你 if

下一课学「循环」——让电脑替你重复干活。`,
        en: `## What you will learn

This lesson is about **conditionals**: letting the program "act depending on the situation" — print B for a score of 85, or pick the largest of three numbers. Afterwards your program can, for the first time, make decisions.

## What is a conditional

Life is full of branches: "if it rains, take an umbrella, otherwise don't". A conditional lets the program **choose one path at a fork**:

- \`if (condition) {...}\`: if the condition holds, enter the braces; otherwise skip them
- \`else if (condition) {...}\`: if the previous ones failed but this holds, take this path
- \`else {...}\`: the fallback when none of the above held

The program checks conditions **top to bottom**; the first one that holds gets its block executed, and all other branches are skipped.

The \`(condition)\` holds a comparison or logical expression from last lesson, such as \`score >= 80\` or \`age > 18 && hasTicket\`, and it must produce a \`bool\`.

## How to write it

The basic skeleton:

\`\`\`cpp
if (score >= 90) {
    grade = "A";        // runs when the condition holds
} else if (score >= 80) {
    grade = "B";
} else {
    grade = "F";        // fallback
}
\`\`\`

Rules to remember:

1. **The condition must sit inside parentheses \`()\`** — forgetting them is a compile error
2. **The block is wrapped in braces \`{ }\`**. Use braces even for a single statement — it prevents mistakes when you add code later
3. \`else if\` can appear any number of times; \`else\` at most once and always last; both are **optional**
4. **Equality tests use \`==\`, two equals signs**. \`=\` assigns; using it by mistake stores a value and makes the condition always true

### Nesting & simplification

An if can contain another if (nesting), but deep nesting reads badly. Merge with \`&&\` / \`||\` where you can: \`if (isWeekend && !onDuty)\` beats two nested levels. Another handy technique in functions is the **early return** — bail out as soon as a condition fails, so the main logic needs no else wrapper:

\`\`\`cpp
void check(int n) {
    if (n < 0) return;   // leave immediately if invalid
    std::cout << n;      // main logic stays unindented
}
\`\`\`

### switch: one variable against several fixed values

When checking "which exact value does this variable equal", \`switch\` is an alternative:

\`\`\`cpp
switch (day) {
    case 1: std::cout << "Mon" << std::endl; break;
    case 2: std::cout << "Tue" << std::endl; break;
    default: std::cout << "Other" << std::endl;
}
\`\`\`

Every \`case\` needs \`break;\` to exit the switch, otherwise execution **falls through** into the next case; \`default\` is the fallback.

### The ternary operator: a mini if

\`condition ? valueA : valueB\` — yields A if it holds, otherwise B; great for "pick one of two when assigning":

\`\`\`cpp
int mx = (a > b) ? a : b;   // a if a is bigger, otherwise b
\`\`\`

## Reading the example line by line

This lesson's example (even or odd):

\`\`\`cpp
int n = 7;
if (n % 2 == 0) {
    std::cout << "even" << std::endl;
} else {
    std::cout << "odd" << std::endl;
}
\`\`\`

- Line 1: put 7 into the int box n
- Line 2: \`n % 2\` is the remainder of 7 over 2, which is 1; \`1 == 0\` does not hold, so the whole condition is false
- The condition fails, so the if block is skipped and the else block runs, printing \`odd\`

## Common beginner mistakes

1. **= inside a condition**: \`if (x = 5)\` always holds and overwrites x with 5. For an equality test write \`if (x == 5)\`. Putting the constant first (\`if (5 == x)\`) turns the typo into a compile error
2. **Forgetting break in a case**: with \`day\` equal to 1, the program prints Mon, Tue, Wed... in a row. The symptom is "extra output in a chain" — add break to each case
3. **A semicolon after the if**: \`if (a > b); {...}\` — the semicolon becomes an "empty statement", so the braces run unconditionally and the program behaves strangely. Delete the semicolon after the if
4. **Math-style chained comparisons**: \`80 <= score < 90\` does not do what you expect in C++ (it first computes \`80 <= score\` to 0 or 1, then compares that with 90). Write \`score >= 80 && score < 90\` instead

## Summary

- \`if / else if / else\`: the first condition that holds, top to bottom, gets executed; the rest are skipped
- Conditions go in \`()\` and must produce \`bool\`; equality tests use \`==\`
- switch fits "one variable against fixed values"; remember break in each case
- The ternary \`? :\` is a mini if for picking one of two

Next lesson: loops — making the computer repeat work for you.`,
      },
      examples: [
        {
          caption: { zh: '判断奇偶', en: 'Even or odd' },
          code: '#include <iostream>\n\nint main() {\n    int n = 7;\n    if (n % 2 == 0) {\n        std::cout << "even" << std::endl;\n    } else {\n        std::cout << "odd" << std::endl;\n    }\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '成绩等级', en: 'Grade a score' },
          prompt: {
            zh: '变量 \`int score = 85;\`。按规则输出等级字母：≥90 为 \`A\`，≥80 为 \`B\`，≥70 为 \`C\`，≥60 为 \`D\`，否则 \`F\`。',
            en: 'Variable \`int score = 85;\`. Print the grade letter: ≥90 → \`A\`, ≥80 → \`B\`, ≥70 → \`C\`, ≥60 → \`D\`, otherwise \`F\`.',
          },
          starter: '#include <iostream>\n\nint main() {\n    int score = 85;\n    // 用 if / else if / else 输出等级\n    return 0;\n}\n',
          expectedOutput: 'B\n',
          hints: [
            { zh: '这是典型的「分段判断」：像漏斗一样从最高档往下检查，第一个命中的档次就输出对应等级并结束。想想 85 会落在哪一档？', en: 'This is a classic banded check: like a funnel, test from the highest band downward — the first band that matches prints its letter and stops. Which band does 85 fall into?' },
            { zh: '语法：\`if (score >= 90) { ... } else if (score >= 80) { ... } else { ... }\`，每个分支里输出对应字母；条件要从高到低依次写。', en: 'Syntax: \`if (score >= 90) { ... } else if (score >= 80) { ... } else { ... }\`, printing the matching letter inside each branch; write the conditions from high to low.' },
            { zh: '按 A、B、C、D、F 写五个分支，条件依次是 \`score >= 90\`、\`>= 80\`、\`>= 70\`、\`>= 60\`，最后的 else 兜底 F。只输出一个字母加换行，本题结果是 B。', en: 'Write five branches for A, B, C, D, F with conditions \`score >= 90\`, \`>= 80\`, \`>= 70\`, \`>= 60\`, and a final else for F. Print just one letter plus a newline; for this input the answer is B.' },
            { zh: '骨架：五个 \`if / else if / else\` 串起来的分支，每个分支里 \`std::cout << "等级" << std::endl;\`。易错点：条件顺序必须从高到低（90 → 80 → 70 → 60），若先判 \`>= 60\` 会让 85 也命中 D；每个字母必须英文大写且夹在双引号里；每个分支的 \`std::endl\` 别漏。', en: 'Skeleton: a chain of five \`if / else if / else\` branches, each emitting its letter with \`std::cout << "letter" << std::endl;\`. Watch out: the order of conditions must run from high to low (90 → 80 → 70 → 60); testing \`>= 60\` first would let 85 wrongly hit D; every letter is uppercase English inside double quotes; never drop the `std::endl` of any branch.' },
            { zh: '完整参考：从 \`if (score >= 90)\` 开始，依次写四个 \`else if\` 条件分别是 \`>= 80\`、\`>= 70\`、\`>= 60\`，最后 \`else\` 输出 F；每个分支里 \`std::cout << "字母" << std::endl;\`。注意只能输出一个字母加换行，多输出任何文字或多余的换行都会判未通过。', en: 'Reference: start with \`if (score >= 90)\`, then four \`else if\` branches with conditions \`>= 80\`, \`>= 70\`, \`>= 60\`, and a final \`else\` for F; each branch ends with \`std::cout << "letter" << std::endl;\`. The judge accepts exactly one letter plus a newline — any extra text or stray newline fails the check.' },
          ],
          solution: '#include <iostream>\n\nint main() {\n    int score = 85;\n    if (score >= 90) {\n        std::cout << "A" << std::endl;\n    } else if (score >= 80) {\n        std::cout << "B" << std::endl;\n    } else if (score >= 70) {\n        std::cout << "C" << std::endl;\n    } else if (score >= 60) {\n        std::cout << "D" << std::endl;\n    } else {\n        std::cout << "F" << std::endl;\n    }\n    return 0;\n}\n',
          solutionNote: { zh: '用一连串 if / else if 把分数映射到 A-F 五个等级：条件从高到低依次写，遇到第一个命中的分支就输出字母并跳过其余分支。关键点在于「从高到低」的顺序——一旦先写 \`>= 60\`，85 会被错判为 D；同时每个分支的 cout 必须只输出一个字母加换行，多输出或漏换行都会判未通过。也可以用 switch 表达式（score / 10）映射等级，但要注意边界值的处理方式略有不同。', en: 'A chain of if / else if maps the score to one of A–F: conditions are written from high to low, and the first matching branch prints its letter and short-circuits the rest. The key is the high-to-low order — testing \`>= 60\` first would wrongly classify 85 as D; each branch must emit exactly one letter followed by a newline, no more and no less. You could also rewrite this with a `switch` on `score / 10`, but the boundary handling is slightly different.' },
        },
        {
          id: 'ex2',
          title: { zh: '三个数找最大', en: 'Max of three' },
          prompt: {
            zh: '变量 \`int a = 12, b = 7, c = 9;\`。用 if / else if / else 判断并**只输出**最大的数（不要用 \`std::max\`）。',
            en: 'Variables \`int a = 12, b = 7, c = 9;\`. Use if / else if / else to print only the largest (do not use \`std::max\`).',
          },
          starter: '#include <iostream>\n\nint main() {\n    int a = 12, b = 7, c = 9;\n    // 在下面判断并输出最大值\n    return 0;\n}\n',
          expectedOutput: '12\n',
          hints: [
            { zh: '最大值「不小于另外两个数」。分三种情况想：a 最大、b 最大、c 最大——每种情况下，怎样用两个比较来确认这个数确实是最大的？', en: 'The maximum is "not smaller than the other two". Think in three cases: a is largest, b is largest, or c is largest — in each case, how do two comparisons confirm that this one is truly the largest?' },
            { zh: '语法：\`if (a >= b && a >= c) { ... } else if (b >= a && b >= c) { ... } else { ... }\`，其中 \`&&\` 表示两个条件必须同时成立。', en: 'Syntax: \`if (a >= b && a >= c) { ... } else if (b >= a && b >= c) { ... } else { ... }\`, where \`&&\` means both conditions must hold at once.' },
            { zh: '三个分支分别输出 a、b、c，最后的 else 覆盖「c 最大」的情况。只输出数字本身（本题是 12），不带任何文字或符号。', en: 'The three branches print a, b, and c; the final else covers the case where c is largest. Print only the number itself (12 here) with no extra text or symbols.' },
            { zh: '骨架：三个 \`if / else if / else\` 分支，每个分支里 \`std::cout << 变量 << std::endl;\`。易错点：\`&&\` 是逻辑与，两个不等式都要成立才算「最大」，不能写成 \`a > b > c\` 那种伪链式比较；只输出变量本身，cout 里不要再夹任何文字或引号。', en: 'Skeleton: three \`if / else if / else\` branches, each with \`std::cout << 变量 << std::endl;\`. Watch out: \`&&\` is logical AND — both inequalities must hold simultaneously; never write Python-style chained comparisons like \`a > b > c\` in C++; print only the variable itself with no quoted label.' },
            { zh: '完整参考：\`if (a >= b && a >= c) cout << a;\`，\`else if (b >= a && b >= c) cout << b;\`，\`else cout << c;\`。三个分支严格按 a、b、c 顺序覆盖所有情形；本题 12 落在第一个分支，因此只输出 12 加换行。', en: 'Reference: \`if (a >= b && a >= c) cout << a;\`, \`else if (b >= a && b >= c) cout << b;\`, \`else cout << c;\`. The three branches cover every case in a, b, c order; here 12 wins the first branch, so only 12 followed by a newline is emitted.' },
          ],
          solution: '#include <iostream>\n\nint main() {\n    int a = 12, b = 7, c = 9;\n    if (a >= b && a >= c) {\n        std::cout << a << std::endl;\n    } else if (b >= a && b >= c) {\n        std::cout << b << std::endl;\n    } else {\n        std::cout << c << std::endl;\n    }\n    return 0;\n}\n',
          solutionNote: { zh: '用三个分支按 a、b、c 的顺序判断「同时不小于其它两个」的变量，第一个命中即输出，否则由最后的 else 输出 c。关键点在于用 \`&&\` 把两次不等式连起来，且分支顺序无所谓（任意一个分支命中都会短路后续），但最终 else 必须兜底——c 最大或三数相等时由它处理。也可以两两比较后交换指针或直接调用 std::max，但题目禁用 std::max。', en: 'Three branches test, in order, which variable is "not smaller than both others" using \`&&\`; the first match wins and the final else handles c (or a tie). The branch order does not matter because each branch short-circuits the rest, but the final else is mandatory to cover the case where c is largest or values tie. You can also swap pointers after pairwise comparisons, or call std::max — but the prompt forbids std::max.' },
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

这节课学习**循环**：让电脑替你重复执行同一段代码成千上万次。学完后你能算 1 加到 100、输出九九乘法表这类「重复劳动」。

## 循环是什么

假设要打印 1 到 100，你当然可以写 100 条 cout，但那是人干的事，不是电脑该干的。循环就是告诉电脑：**「这段代码重复跑，直到我说停」**。

C++ 有三种循环，本质都一样——**在条件成立时反复执行一段代码**，区别只在「条件写在哪、什么时候检查」：

- \`for\`：知道要重复几次时用（最常用）
- \`while\`：不知道几次、只知道「还能继续」的条件时用
- \`do-while\`：先斩后奏，至少执行一次

另外还有专门遍历容器（后面课程讲）的**范围 for**。

## 怎么写

### for：三段式

\`\`\`cpp
for (int i = 0; i < 5; i++) {
    std::cout << i << std::endl;
}
\`\`\`

括号里被两个分号隔成三段：

1. \`int i = 0\` —— **初始化**：进入循环前执行一次，造出计数器 i
2. \`i < 5\` —— **继续条件**：每轮开始前检查，成立才进入本轮，不成立就退出循环
3. \`i++\` —— **步进**：每轮结束后执行，让 i 变化、向终点靠近

上面例子 i 依次是 0、1、2、3、4（注意不包含 5），共 5 轮。**i 的作用域只在 for 内部**，出了循环就消失。

### while：条件在开头

\`\`\`cpp
int n = 1;
while (n <= 3) {
    std::cout << n << std::endl;
    n++;               // 忘了这句就是死循环！
}
\`\`\`

条件成立就继续，不成立就退出。循环体内**必须有什么东西在逼近终点**（这里是 \`n++\`），否则永远退不出去。

### do-while：先做再说

\`\`\`cpp
int k = 0;
do {
    std::cout << k << std::endl;
    k++;
} while (k < 0);   // 即使条件不成立，上面也执行过一次
\`\`\`

先执行一次循环体，再检查条件。用得少，适合「至少跑一次」的场景（如菜单）。

### 范围 for（C++11）：直接「取出每个元素」

\`\`\`cpp
std::vector<int> nums = {4, 8, 15};
for (int x : nums) {        // 每轮把一个元素拷贝进 x
    std::cout << x << std::endl;
}
\`\`\`

读作「对 nums 里的每个 x」。不用自己管下标，最省心。

### break 与 continue

- \`break\`：立刻跳出**整个**循环
- \`continue\`：跳过本轮剩下的语句，直接进入下一轮

\`\`\`cpp
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;   // 3 不打印
    if (i == 7) break;      // 到 7 彻底停
    std::cout << i << " ";  // 输出 0 1 2 4 5 6
}
\`\`\`

## 逐行读懂示例

本课示例（累加 1 到 100）：

\`\`\`cpp
int total = 0;
for (int i = 1; i <= 100; i++) {
    total += i;
}
std::cout << total << std::endl;  // 5050
\`\`\`

- 第一行：准备一个「存钱罐」total，初始为 0
- 第二行：计数器 i 从 1 出发，条件是 \`i <= 100\`（所以 100 也算），每轮 i 加 1
- 第三行：\`total += i\` 是 \`total = total + i\` 的缩写——把本轮的 i 存进存钱罐
- 循环结束后输出 total：1+2+…+100 = 5050

## 新手常犯的错误

1. **死循环**：\`while (n > 0) {}\` 里忘了 \`n--\`。现象是程序卡住没有输出（云端运行会超时被强制结束）。检查循环体内是否有让条件趋于不成立的语句
2. **边界差一**：\`i < 5\` 跑 5 轮（0~4），\`i <= 5\` 跑 6 轮（0~5）。想清楚要不要包含终点
3. **for 后误加分号**：\`for (int i = 0; i < 5; i++);\`——分号成了循环体，真正的输出语句在循环外只执行一次
4. **在循环里重复定义同名变量**：\`for (int i...) {}\` 之后又写 \`int i\` 在同一作用域是合法的，但在 for **里面**再定义 i 会报 shadowing 相关错误或引起混乱；循环变量交给 for 管

## 小结

- for 三段式：初始化、条件、步进；条件不成立即退出
- while 适合「不知次数」的场景；体内必须有逼近终点的语句
- break 跳出整个循环，continue 跳过本轮
- 范围 for 是遍历容器的首选写法

下一课学「函数」——把常用的代码打包复用。`,
        en: `## What you will learn

This lesson is about **loops**: making the computer repeat the same code thousands of times for you. Afterwards you can handle "repetitive labor" like summing 1 to 100 or printing a times table.

## What is a loop

To print the numbers 1 to 100 you could of course write 100 cout statements — but that is work for humans, not computers. A loop tells the computer: **"keep running this code until I say stop."**

C++ has three kinds of loops; all share the same essence — **repeat a block while a condition holds** — differing only in where the condition lives and when it is checked:

- \`for\`: when you know how many times to repeat (the most common)
- \`while\`: when you do not know the count, only the "can we keep going" condition
- \`do-while\`: act first, ask later — runs at least once

There is also the **range-based for** dedicated to walking through containers (a later lesson).

## How to write it

### for: the three-part form

\`\`\`cpp
for (int i = 0; i < 5; i++) {
    std::cout << i << std::endl;
}
\`\`\`

The parentheses hold three parts separated by two semicolons:

1. \`int i = 0\` — **initialization**: runs once before the loop; creates the counter i
2. \`i < 5\` — **condition**: checked before every round; enter the body only if it holds, otherwise exit the loop
3. \`i++\` — **step**: runs after each round, moving i toward the finish line

Above, i takes 0, 1, 2, 3, 4 (note: not 5) — five rounds. **i's scope is limited to the for**; it disappears after the loop.

### while: condition at the top

\`\`\`cpp
int n = 1;
while (n <= 3) {
    std::cout << n << std::endl;
    n++;               // forgetting this line means an infinite loop!
}
\`\`\`

Keep going while the condition holds; exit when it fails. Something inside the body **must move toward the finish** (here \`n++\`), or the loop never ends.

### do-while: run first, ask later

\`\`\`cpp
int k = 0;
do {
    std::cout << k << std::endl;
    k++;
} while (k < 0);   // even though the condition fails, the body ran once
\`\`\`

Executes the body once, then checks the condition. Rarely used; fits "must run at least once" cases like menus.

### Range-based for (C++11): "take each element"

\`\`\`cpp
std::vector<int> nums = {4, 8, 15};
for (int x : nums) {        // each round copies one element into x
    std::cout << x << std::endl;
}
\`\`\`

Read it as "for each x in nums". No index to manage — the most convenient form.

### break & continue

- \`break\`: exit the **entire** loop immediately
- \`continue\`: skip the rest of this round and jump to the next

\`\`\`cpp
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;   // skip 3
    if (i == 7) break;      // stop entirely at 7
    std::cout << i << " ";  // prints 0 1 2 4 5 6
}
\`\`\`

## Reading the example line by line

This lesson's example (sum 1 to 100):

\`\`\`cpp
int total = 0;
for (int i = 1; i <= 100; i++) {
    total += i;
}
std::cout << total << std::endl;  // 5050
\`\`\`

- Line 1: prepare a "piggy bank" total, starting at 0
- Line 2: the counter i starts at 1, the condition is \`i <= 100\` (so 100 counts), and i grows by 1 each round
- Line 3: \`total += i\` is short for \`total = total + i\` — drop this round's i into the piggy bank
- After the loop ends, print total: 1+2+…+100 = 5050

## Common beginner mistakes

1. **Infinite loop**: \`while (n > 0) {}\` without \`n--\`. The symptom: the program hangs with no output (cloud runs get force-killed on timeout). Check that the body contains a statement moving the condition toward false
2. **Off-by-one bounds**: \`i < 5\` runs 5 rounds (0–4); \`i <= 5\` runs 6 (0–5). Decide whether the endpoint is included
3. **A semicolon after for**: \`for (int i = 0; i < 5; i++);\` — the semicolon becomes the loop body, and the real statement after it runs only once
4. **Conflicting loop variables**: declaring \`int i\` inside the same scope after a \`for (int i...) {}\` is legal, but declaring another i **inside** the for causes shadowing errors or confusion; let the for own its variable

## Summary

- The for has three parts: init, condition, step; the loop exits when the condition fails
- while fits "unknown number of rounds"; the body must move toward the exit
- break leaves the whole loop; continue skips one round
- The range-based for is the preferred way to walk a container

Next lesson: functions — packaging reusable code.`,
      },
      examples: [
        {
          caption: { zh: '累加 1 到 100', en: 'Sum 1 to 100' },
          code: '#include <iostream>\n\nint main() {\n    int total = 0;\n    for (int i = 1; i <= 100; i++) {\n        total += i;\n    }\n    std::cout << total << std::endl;  // 5050\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '求和 1~100', en: 'Sum 1..100' },
          prompt: {
            zh: '用循环计算 1+2+…+100 的和并输出（应为 \`5050\`）。不要用公式 \`(n*(n+1))/2\` 直接算。',
            en: 'Use a loop to compute 1+2+…+100 and print it (should be \`5050\`). Do not use the closed-form formula.',
          },
          starter: '#include <iostream>\n\nint main() {\n    int total = 0;\n    // 循环里 total += i，最后输出\n    return 0;\n}\n',
          expectedOutput: '5050\n',
          hints: [
            { zh: '逐个数太累，交给循环。准备一个「累加器」从 0 开始，让数字 1 到 100 轮流进循环，每轮把它加进累加器，最后一次性输出。', en: 'Adding by hand is tedious — hand the job to a loop. Keep an accumulator starting at 0, let the numbers 1 through 100 take turns in the loop body, add each into the accumulator, and print once at the end.' },
            { zh: '语法：\`for (int i = 1; i <= 100; i++) { 累加语句 }\`，其中 \`total += i;\` 等价于 \`total = total + i;\`。注意 \`<=\` 不要写成 \`<\`，否则会漏掉 100。', en: 'Syntax: \`for (int i = 1; i <= 100; i++) { 累加语句 }\`, where \`total += i;\` is short for \`total = total + i;\`. Note the \`<=\` — writing \`<\` would miss 100.' },
            { zh: 'total 从 0 开始，循环体内只做累加；循环结束后输出一次 total 并换行，结果是 5050。不要在循环里输出。', en: 'Start total at 0 and only accumulate inside the loop; after the loop ends, print total once with a newline — the result is 5050. Do not print inside the loop.' },
            { zh: '骨架：\`int total = 0; for (int i = 1; i <= 100; i++) { total += i; }\` 之后 \`std::cout << total << std::endl;\`。易错点：循环条件用 \`<=\` 而不是 \`<\`，否则到 99 就停了；累加语句必须放在大括号内，否则只会执行一次；输出语句必须在循环外面，否则会打印 100 次中间值。', en: 'Skeleton: \`int total = 0; for (int i = 1; i <= 100; i++) { total += i; }\` then \`std::cout << total << std::endl;\`. Watch out: the loop condition uses \`<=\`, not \`<\`, otherwise it stops at 99; the accumulation must sit inside the braces or it runs once; the print must live outside the loop or it fires 100 times with intermediate values.' },
            { zh: '完整参考：\`int total = 0; for (int i = 1; i <= 100; i++) total += i; std::cout << total << std::endl;\`。循环里只做累加，循环外做输出，结果为 5050；不要在循环条件或循环体内混入任何额外输出语句。', en: 'Reference: \`int total = 0; for (int i = 1; i <= 100; i++) total += i; std::cout << total << std::endl;\`. The loop only accumulates; printing happens after the loop, yielding 5050; never add extra cout calls inside the loop body or condition.' },
          ],
          solution: '#include <iostream>\n\nint main() {\n    int total = 0;\n    for (int i = 1; i <= 100; i++) {\n        total += i;\n    }\n    std::cout << total << std::endl;\n    return 0;\n}\n',
          solutionNote: { zh: '用 for 循环从 1 累加到 100：循环体只做 \`total += i;\`，循环结束后再统一输出 total。关键点在于循环条件用 \`<=\` 包含 100（写成 \`<\` 会少一次累加，结果变成 4949），且输出必须在循环外（否则会打印 100 次中间值）。也可以用 while 循环替代 for，把 \`i++\` 写在循环体末尾，等价但 for 更紧凑。', en: 'A for loop accumulates from 1 to 100: the body only does `total += i;`, and the print happens once after the loop. The key is the loop condition using `<=` so 100 is included (writing `<` would skip one addition and produce 4949), and the print must be outside the loop (otherwise 100 intermediate values are emitted). You can also use a while loop and move `i++` to the body, which is equivalent though the for form is more compact.' },
        },
        {
          id: 'ex2',
          title: { zh: '9 行乘法口诀', en: '9-row times table' },
          prompt: {
            zh: '输出 7 的乘法口诀，共 9 行，格式**严格**为 \`7 x 1 = 7\`、\`7 x 2 = 14\` …… \`7 x 9 = 63\`（数字与字母 x 之间有一个空格）。',
            en: 'Print the 7 times table, 9 lines, in the **exact** format \`7 x 1 = 7\`, \`7 x 2 = 14\`, …, \`7 x 9 = 63\` (single spaces around \`x\` and \`=\`).',
          },
          starter: '#include <iostream>\n\nint main() {\n    // for (int i = 1; i <= 9; i++) { ... }\n    return 0;\n}\n',
          expectedOutput: '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n',
          hints: [
            { zh: '九行长得很像：哪部分是固定不变的？有几个部分在变、且变得有规律？把「变得有规律的部分」交给循环的计数器去生成。', en: 'The nine lines look alike: which part stays fixed, and how many parts change in a regular way? Let the loop counter generate the parts that vary regularly.' },
            { zh: '语法：\`std::cout << "固定文本" << i << " = " << (7 * i) << std::endl;\`——字符串和数字可以交替串联；要显示出来的空格必须写在双引号里。', en: 'Syntax: \`std::cout << "固定文本" << i << " = " << (7 * i) << std::endl;\` — strings and numbers can be chained alternately; any visible space must live inside the double quotes.' },
            { zh: '写一个 i 从 1 到 9 的 for 循环，每轮输出一行口诀。空格必须与题目逐字符一致：字母 x 前后各一个、等号前后各一个；结果依次是 7、14……63。', en: 'Write a for loop with i from 1 to 9, printing one line per round. The spaces must match the task character for character: one around the letter x and one around the equal sign; the results run 7, 14, ..., 63.' },
            { zh: '骨架：循环里 \`std::cout << "7 x " << i << " = " << (7 * i) << std::endl;\`。易错点：固定文本 \`"7 x "\` 里「7、空格、字母 x、空格」的顺序与空格数必须精确；乘法结果 \`(7 * i)\` 必须用括号包住，否则 \`<<\` 的优先级会出错；乘号是星号 \`*\`，不是字母 x。', en: 'Skeleton: inside the loop \`std::cout << "7 x " << i << " = " << (7 * i) << std::endl;\`. Watch out: the literal \`"7 x "\` must keep exactly "7, space, letter x, space"; the product \`(7 * i)\` must be parenthesized so \`<<\` does not steal operands; the multiplication operator is the asterisk \`*\`, not the letter x.' },
            { zh: '完整参考：\`for (int i = 1; i <= 9; i++) { std::cout << "7 x " << i << " = " << (7 * i) << std::endl; }\`。每一行的空格数严格为：字母 x 前后各一个、等号前后各一个；9 行依次是 7、14、21……63，乘号固定为字母 x 而非星号。', en: 'Reference: \`for (int i = 1; i <= 9; i++) { std::cout << "7 x " << i << " = " << (7 * i) << std::endl; }\`. Each line carries a single space before and after the letter x and the equals sign; the nine results are 7, 14, 21, …, 63, and the multiplication sign is the letter x, not an asterisk.' },
          ],
          solution: '#include <iostream>\n\nint main() {\n    for (int i = 1; i <= 9; i++) {\n        std::cout << "7 x " << i << " = " << (7 * i) << std::endl;\n    }\n    return 0;\n}\n',
          solutionNote: { zh: '用 for 循环从 1 跑到 9，每轮把固定文本 \`"7 x "\`、循环变量 i、固定文本 \`" = "\`、乘积 \`(7 * i)\` 通过 \`<<` 串联输出，乘号在源码里是字母 x 而非星号。关键点在于固定文本中的空格必须精确（一字母一空格），且 \`(7 * i)\` 用括号保证乘法先求值。也可以把 \`"7 x "\` 和 \`" = "\` 拆成两个常量字符串再拼接，等价但更冗长。', en: 'A for loop runs from 1 to 9, and each round chains the fixed literal `"7 x "`, the loop variable `i`, the fixed literal `" = "`, and the product `(7 * i)` through `<<` to print one line; the multiplication sign in the source is the letter x, not an asterisk. The key is that the spaces inside the fixed literals must be exact (single spaces flanking the letter x and the equals sign), and `(7 * i)` needs parentheses so multiplication is evaluated first. You can also split `"7 x "` and `" = "` into two named constants and concatenate them — same result, just wordier.' },
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

这节课学习**函数**：把一段常用代码打包、起个名字，以后一句调用就复用。学完后你能写出 \`is_prime\`、\`swap\` 这样的自造工具，并理解 C++ 传参的核心机制（值传递与引用）。

## 函数是什么

函数就像一台**榨汁机**：从进料口塞进水果（**参数**），机器内部加工（**函数体**），出料口流出果汁（**返回值**）。

\`\`\`cpp
int add(int a, int b) {
    return a + b;
}
\`\`\`

- \`int\` —— 返回类型：果汁是什么（这里是一个整数）
- \`add\` —— 函数名：贴在机器上的标签
- \`(int a, int b)\` —— 参数列表：进料口规格（要两个整数）
- \`return a + b;\` —— 把结果送出，并立刻结束函数

调用时写成 \`add(3, 4)\`，这个表达式**本身就等于 7**，可以直接放进 cout 或再参与运算。

为什么需要函数？一是**复用**（写一次到处用）；二是**命名**（\`is_prime(n)\` 一读就懂，比一大段裸代码强）；三是把大问题拆成小问题。

## 怎么写

### 定义与调用

\`\`\`cpp
int add(int a, int b) {
    return a + b;
}

int main() {
    std::cout << add(3, 4) << std::endl;  // 7
    return 0;
}
\`\`\`

规则要点：

1. **函数必须先声明（或定义）再使用**：把 add 写在 main 前面就行；写在后面则要先给一行前向声明 \`int add(int, int);\`
2. **return 做两件事**：交出返回值 + 结束函数。一个函数可以有多处 return（如各种提前返回）
3. 参数和返回值都有类型，类型对不上编译不过

### 没有返回值：void

只干活不交货的机器用 \`void\`：

\`\`\`cpp
void greet(const std::string& name) {
    std::cout << "Hello, " << name << std::endl;
}
\`\`\`

void 函数里 \`return;\` 可以直接写（不带值），用于提前退出。

### 默认参数

给参数预设一个值，调用时不传就用默认的：

\`\`\`cpp
int power(int base, int exp = 2) { ... }
power(5);      // 不传 exp，按 2 算，得 25
power(2, 10);  // 传了 10，得 1024
\`\`\`

默认值必须**从右往左连续**给：\`(int a, int b = 2)\` 合法，\`(int a = 1, int b)\` 不合法。

### 函数重载

**同名**但**参数列表不同**的函数可以共存，编译器按你传的参数类型自动挑：

\`\`\`cpp
int    add(int a, int b);       // 整数版
double add(double a, double b); // 小数版
\`\`\`

仅返回类型不同**不算**重载。

### 引用传参：真正改到外面的变量

C++ 默认**值传递**——形参是实参的**复印件**，函数里改复印件不影响原件：

\`\`\`cpp
void swap(int& a, int& b) {   // & 表示引用：直接用原件
    int t = a; a = b; b = t;
}
int x = 3, y = 8;
swap(x, y);   // x=8, y=3，真的换了！
\`\`\`

\`&\` 让形参成为实参的**别名**（同一个盒子的另一个名字）。反过来，只读不写的大对象（如 string、vector）建议用 \`const T&\`：不拷贝、也改不了。

## 逐行读懂示例

本课示例涉及重载、默认参数和引用，核心三处：

\`\`\`cpp
greet("Bob");            // 调用 void 函数，直接执行打印
greet("Alice", "Hi");    // 第二个参数覆盖默认值 "Hello"
std::cout << add(1.5, 2.5) << std::endl;  // 两个 double，自动选 double 版
\`\`\`

- 第一行：只传名字，greeting 用默认的 "Hello"，打印 \`Hello, Bob!\`
- 第二行：两个参数都给，打印 \`Hi, Alice!\`
- 第三行：\`add(1.5, 2.5)\` 的参数是小数，编译器选择 \`double add(double, double)\` 这个重载，输出 \`4\`

## 新手常犯的错误

1. **函数定义在 main 之后**：报 \`'add' was not declared in this scope\`。把函数挪到 main 前面，或在 main 前写前向声明
2. **非 void 函数忘记 return**：编译能过（有警告），但返回值是未定义的垃圾。每个分支都要保证有 return
3. **在函数里改参数却没生效**：\`void addOne(int n) { n++; }\` 调用后原变量不变——因为 n 只是复印件。想改原件，参数写成 \`int& n\`
4. **重载写成了仅返回类型不同**：\`int f(int)\` 和 \`double f(int)\` 共存直接报错。重载必须参数列表不同

## 小结

- 函数 = 打包的代码 + 名字 + 参数 + 返回值；调用即执行并得到结果
- 值传递是拷贝；\`&\` 引用传参才能改到调用方的变量
- 默认参数从右往左给；同名重载靠参数列表区分
- 用函数把大问题拆小，是写出可维护代码的第一步

下一课学「数组与 vector」——一次管理一大堆数据。`,
        en: `## What you will learn

This lesson is about **functions**: packaging a reusable block of code with a name, then reusing it with a single call. Afterwards you can build your own tools like \`is_prime\` and \`swap\`, and understand the core parameter-passing mechanism of C++ (by value vs. by reference).

## What is a function

A function is like a **juicer**: you drop fruit into the intake (**parameters**), the machine processes it (**the body**), and juice flows out of the spout (**the return value**).

\`\`\`cpp
int add(int a, int b) {
    return a + b;
}
\`\`\`

- \`int\` — return type: what the juice is (here, an integer)
- \`add\` — function name: the label on the machine
- \`(int a, int b)\` — parameter list: the intake spec (two integers)
- \`return a + b;\` — ships the result out and ends the function immediately

You call it as \`add(3, 4)\`; this expression **itself equals 7**, so it can go straight into cout or into further arithmetic.

Why functions? **Reuse** (write once, use everywhere), **naming** (\`is_prime(n)\` reads better than a wall of raw code), and breaking big problems into small ones.

## How to write it

### Define & call

\`\`\`cpp
int add(int a, int b) {
    return a + b;
}

int main() {
    std::cout << add(3, 4) << std::endl;  // 7
    return 0;
}
\`\`\`

Rules to remember:

1. **Declare (or define) before use**: put add above main; if it must live below, write a forward declaration \`int add(int, int);\` first
2. **return does two things**: hands the value back and ends the function. A function may have several returns (early exits)
3. Parameters and return values have types; mismatches fail to compile

### No return value: void

A machine that just does work and ships nothing uses \`void\`:

\`\`\`cpp
void greet(const std::string& name) {
    std::cout << "Hello, " << name << std::endl;
}
\`\`\`

Inside a void function you may write a bare \`return;\` to exit early.

### Default arguments

Give a parameter a preset value; omit it at the call site to use the default:

\`\`\`cpp
int power(int base, int exp = 2) { ... }
power(5);      // exp omitted, treated as 2, yields 25
power(2, 10);  // exp given as 10, yields 1024
\`\`\`

Defaults must be **right-to-left and consecutive**: \`(int a, int b = 2)\` is legal, \`(int a = 1, int b)\` is not.

### Function overloading

Functions with the **same name** but **different parameter lists** may coexist; the compiler picks based on the argument types:

\`\`\`cpp
int    add(int a, int b);       // integer version
double add(double a, double b); // double version
\`\`\`

A different return type alone does **not** count as overloading.

### Pass by reference: actually change the caller's variable

C++ passes **by value** by default — the parameter is a **photocopy** of the argument; changing the copy does not affect the original:

\`\`\`cpp
void swap(int& a, int& b) {   // & means reference: use the original
    int t = a; a = b; b = t;
}
int x = 3, y = 8;
swap(x, y);   // x=8, y=3 — really swapped!
\`\`\`

\`&\` makes the parameter an **alias** of the argument (another name for the same box). Conversely, for big read-only objects (string, vector), prefer \`const T&\`: no copy, no modification.

## Reading the example line by line

This lesson's example involves overloading, defaults, and references; the core:

\`\`\`cpp
greet("Bob");            // calls the void function, which prints
greet("Alice", "Hi");    // second argument overrides the default "Hello"
std::cout << add(1.5, 2.5) << std::endl;  // two doubles pick the double overload
\`\`\`

- Line 1: only the name is passed, so greeting uses the default "Hello" and prints \`Hello, Bob!\`
- Line 2: both arguments given, prints \`Hi, Alice!\`
- Line 3: \`add(1.5, 2.5)\` has double arguments, so the compiler selects \`double add(double, double)\` and outputs \`4\`

## Common beginner mistakes

1. **Function defined after main**: gives \`'add' was not declared in this scope\`. Move the function above main, or add a forward declaration before main
2. **Forgetting return in a non-void function**: it may compile (with a warning), but the returned value is garbage. Make sure every branch returns
3. **Changing a parameter with no effect**: \`void addOne(int n) { n++; }\` leaves the caller's variable untouched — n is just a photocopy. To change the original, declare the parameter as \`int& n\`
4. **Overloads differing only in return type**: \`int f(int)\` alongside \`double f(int)\` is an error. Overloads must differ in the parameter list

## Summary

- A function = packaged code + name + parameters + return value; calling runs it and yields a result
- Passing by value copies; \`&\` reference parameters can modify the caller's variables
- Defaults fill from the right; same-name overloads are told apart by their parameter lists
- Splitting big problems into functions is the first step to maintainable code

Next lesson: arrays and vector — managing a whole pile of data at once.`,
      },
      examples: [
        {
          caption: { zh: '重载、默认参数、引用', en: 'Overloading, defaults, references' },
          code: '#include <iostream>\n#include <string>\n\nvoid greet(const std::string& name, const std::string& greeting = "Hello") {\n    std::cout << greeting << ", " << name << "!" << std::endl;\n}\n\nint add(int a, int b) { return a + b; }\ndouble add(double a, double b) { return a + b; }\n\nint main() {\n    greet("Bob");              // Hello, Bob!\n    greet("Alice", "Hi");      // Hi, Alice!\n    std::cout << add(3, 4) << std::endl;       // 7\n    std::cout << add(1.5, 2.5) << std::endl;   // 4\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '判断素数', en: 'Prime checker' },
          prompt: {
            zh: '编写函数 \`bool is_prime(int n);\`：n 是素数返回 \`true\`，否则 \`false\`。然后用它**每行一个**输出 20 以内的所有素数（2 3 5 7 11 13 17 19，共 8 行）。注意 cout 打印 bool 时默认是 \`0\` / \`1\`，但我们打印的是数字本身，所以 cout << i，不要打 \`true\`。',
            en: 'Write \`bool is_prime(int n);\` returning \`true\` for primes, else \`false\`. Then print every prime below 20, **one per line** (2 3 5 7 11 13 17 19 — 8 lines). Print the numbers themselves, not booleans.',
          },
          starter: '#include <iostream>\n\nbool is_prime(int n) {\n    // 在下面实现\n    return false;\n}\n\nint main() {\n    // 输出 20 以内的素数\n    return 0;\n}\n',
          expectedOutput: '2\n3\n5\n7\n11\n13\n17\n19\n',
          hints: [
            { zh: '素数的定义：大于 1，且除了 1 和自身没有别的因子。判定思路——拿比它小的数逐个试除，只要发现一个能整除的就能下结论。试除范围从几开始、到几结束？别忘了先处理小于 2 的数。', en: 'A prime is greater than 1 and has no divisors besides 1 and itself. The idea: try dividing by smaller numbers one by one and conclude as soon as one divides evenly. Where does the trial range start and end? Handle values below 2 first.' },
            { zh: '语法：\`for (int i = 2; i < n; i++) { if (n % i == 0) return false; }\`——检测到因子立即返回；函数的返回类型是 bool。', en: 'Syntax: \`for (int i = 2; i < n; i++) { if (n % i == 0) return false; }\` — return at once upon finding a factor; the function return type is bool.' },
            { zh: 'is_prime 开头先写 \`if (n < 2) return false;\`，再循环找因子，一个都找不到就返回 true。main 里从 2 到 19 逐个判断，是素数就输出该数字本身，共 8 行。', en: 'At the top of is_prime write \`if (n < 2) return false;\`, then loop for factors and return true when none is found. In main test 2 through 19 and print each number that passes — 8 lines in total.' },
            { zh: '骨架：\`is_prime\` 内部 \`if (n < 2) return false;\` + \`for (int i = 2; i < n; i++) { if (n % i == 0) return false; } return true;\`；main 里 \`for (int n = 2; n < 20; n++) if (is_prime(n)) cout << n;\`。易错点：注意 \`< 2\` 而非 \`<= 2`，否则 2 会被错判为合数；循环条件用 \`i < n\` 即可（不必到到 n-1），因为 n 自身不是因子；输出的是数字本身，cout 里不要写 \`<< true\`。', en: 'Skeleton: inside \`is_prime\` first \`if (n < 2) return false;\` then \`for (int i = 2; i < n; i++) { if (n % i == 0) return false; } return true;\`; in main \`for (int n = 2; n < 20; n++) if (is_prime(n)) cout << n;\`. Watch out: the guard is \`< 2\`, not \`<= 2\`, otherwise 2 is wrongly classified as composite; the loop bound is \`i < n\` (n itself is never a factor); print the number itself, never write \`<< true\`.' },
            { zh: '完整参考：\`bool is_prime(int n) { if (n < 2) return false; for (int i = 2; i < n; i++) if (n % i == 0) return false; return true; }\`，main 里 \`for (int n = 2; n < 20; n++) if (is_prime(n)) std::cout << n << std::endl;\`。20 以内的 8 个素数是 2、3、5、7、11、13、17、19；输出顺序由循环变量 n 递增自然保证。', en: 'Reference: \`bool is_prime(int n) { if (n < 2) return false; for (int i = 2; i < n; i++) if (n % i == 0) return false; return true; }\`, and in main \`for (int n = 2; n < 20; n++) if (is_prime(n)) std::cout << n << std::endl;\`. The eight primes below 20 are 2, 3, 5, 7, 11, 13, 17, 19; the print order is naturally enforced by the ascending loop variable n.' },
          ],
          solution: '#include <iostream>\n\nbool is_prime(int n) {\n    if (n < 2) return false;\n    for (int i = 2; i < n; i++) {\n        if (n % i == 0) return false;\n    }\n    return true;\n}\n\nint main() {\n    for (int n = 2; n < 20; n++) {\n        if (is_prime(n)) {\n            std::cout << n << std::endl;\n        }\n    }\n    return 0;\n}\n',
          solutionNote: { zh: 'is_prime 用「小于 2 直接 false、否则试除 2 到 n-1」的暴力判定：找到因子立即返回 false，全跑完没找到就返回 true；main 里从 2 到 19 依次调用，把通过的数原样输出。关键点在于 \`< 2\` 的边界（避免把 0、1、负数判成素数）和循环条件 \`i < n\`（n 自身不必试除）。也可以只试除到 \`sqrt(n)\` 来加速，但题目数据小不必优化。', en: '`is_prime` does a brute-force check: below 2 it returns false, otherwise it tries dividing by every integer from 2 to n-1 and returns false on the first hit; reaching the end with no hit returns true. In main, values 2 through 19 are tested in order and each passing number is printed as-is. The key is the `< 2` guard (so 0, 1, and negatives are never primes) and the loop bound `i < n` (n itself is never a factor). You can stop the trial at `sqrt(n)` for speed, but the data set here is small enough that brute force is fine.' },
        },
        {
          id: 'ex2',
          title: { zh: '引用交换两数', en: 'Swap by reference' },
          prompt: {
            zh: '编写函数 \`void swap(int& a, int& b);\` 交换两个整数。给定 \`int a = 3, b = 8;\`，调用后**每行一个**输出 a 和 b（即 \`8\` 和 \`3\`）。',
            en: 'Write \`void swap(int& a, int& b);\`. Given \`int a = 3, b = 8;\`, after calling it print a and b, **one per line** (\`8\` then \`3\`).',
          },
          starter: '#include <iostream>\n\nvoid swap(int& a, int& b) {\n    // 在下面实现\n}\n\nint main() {\n    int a = 3, b = 8;\n    swap(a, b);\n    // 两行输出\n    return 0;\n}\n',
          expectedOutput: '8\n3\n',
          hints: [
            { zh: '想让函数真正改动调用方的变量，参数就得「引用」而不是复制一份值。交换时直接把一个赋给另一个，会先把谁弄丢？所以需要谁来临时保存它？', en: 'For the function to truly change the variables of the caller, the parameters must be "references" rather than copied values. In a swap, assigning one directly to the other would destroy which value first? So who should hold it temporarily?' },
            { zh: '语法：参数写成 \`int& a, int& b\`；函数体内三步：\`int t = a;\`、\`a = b;\`、\`b = t;\`。', en: 'Syntax: declare the parameters as \`int& a, int& b\`; the body is three steps: \`int t = a;\`, \`a = b;\`, \`b = t;\`.' },
            { zh: '实现 swap 后在 main 里调用 \`swap(a, b)\`，然后分两行输出 a 和 b，即 8 和 3，每行一个、不要多余文字。', en: 'After implementing swap, call \`swap(a, b)\` in main, then print a and b on two lines — 8 then 3, one per line, with no extra text.' },
            { zh: '骨架：\`void swap(int& a, int& b) { int t = a; a = b; b = t; }\`，main 里 \`swap(a, b);\` 后 \`cout << a; cout << b;\`。易错点：参数必须是 \`int& a\` 形式的引用，而不是普通 int（否则函数里改的是副本）；三步赋值顺序错（先 \`a = b\` 再 \`b = t\` 没问题，但先 \`b = a\` 再 \`a = t\` 也可以，关键是 t 必须先备份）；函数没有返回值。', en: 'Skeleton: \`void swap(int& a, int& b) { int t = a; a = b; b = t; }\`; in main after \`swap(a, b);\` print a then b. Watch out: the parameters must be \`int& a\` style references, not plain ints (otherwise only the copies change); the three assignments can go either direction, the only rule is that t must hold a backup before either side is overwritten; the function returns nothing.' },
            { zh: '完整参考：\`void swap(int& a, int& b) { int t = a; a = b; b = t; }\`，main 调用后用两条 \`std::cout\` 分别输出 a 和 b，每条末尾接 \`std::endl\`。交换后 a 变成 8、b 变成 3；输出顺序先 a 后 b，恰好是 8 然后 3。', en: 'Reference: \`void swap(int& a, int& b) { int t = a; a = b; b = t; }\`; in main after the call print a and b with two separate \`std::cout\` statements, each ending in \`std::endl\`. After the swap a is 8 and b is 3; printing a first then b yields 8 followed by 3.' },
          ],
          solution: '#include <iostream>\n\nvoid swap(int& a, int& b) {\n    int t = a;\n    a = b;\n    b = t;\n}\n\nint main() {\n    int a = 3, b = 8;\n    swap(a, b);\n    std::cout << a << std::endl;\n    std::cout << b << std::endl;\n    return 0;\n}\n',
          solutionNote: { zh: 'swap 的核心是引用参数 \`int& a, int& b\`：因为是引用，函数内对 a、b 的修改会直接作用到 main 里的两个变量；再用临时变量 t 做中转，三步赋值完成交换。关键点在于引用 vs 传值的区别（传值只改副本，调用方完全无感），以及三步赋值的逻辑（t 必须先备份，否则会丢值）。也可以用 std::swap(a, b) 一行搞定，但那是调库，不是自己实现。', en: 'The heart of `swap` is the reference parameters `int& a, int& b`: because they are references, the function writes to a and b land directly on the caller variables in main; a temporary `t` then acts as the middleman across three assignments. The key is the value-vs-reference distinction (a plain value parameter would only mutate a copy, leaving main untouched) and the order of the three assignments — `t` must capture the backup first or the original value is lost. You could also call `std::swap(a, b)` in one line, but the prompt asks for a hand-rolled implementation.' },
        },
      ],
    },

      // ================= 7. 数组与 std::vector =================
    {
      id: 'arrays',
      title: { zh: '数组与 std::vector', en: 'Arrays & std::vector' },
      difficulty: 2,
      lecture: {
        zh: `## 这节课学什么

这节课学习**数组与 std::vector**：用一个名字管理一整批数据（比如全班 50 个人的成绩）。学完后你能创建动态数组、增删元素、遍历统计。

## vector 是什么

之前每个变量只能装一个值。要存 1000 个分数，总不能定义 1000 个变量——你需要**一排编号的格子**：

- **C 风格数组**：定长的一排格子，格子数量创建时就焊死，还不知道自己有多长
- **std::vector**：会**自动伸缩**的一排格子，像可以随时加长的火车，需要多少节车厢自己挂

vector 就是「数组 + 自动管理内存」的升级版，是实际工程中最重要的容器。用之前要 \`#include <vector>\`。

\`std::vector<int>\` 读作「一个存放 int 的 vector」；尖括号里放元素类型，这叫**模板参数**（后面课程会再遇到，现在照抄即可）。

## 怎么写

### 创建

\`\`\`cpp
#include <vector>
std::vector<int> v1;                // 空：0 个元素
std::vector<int> v2(5);             // 5 个 0
std::vector<int> v3(5, 7);          // 5 个 7
std::vector<int> v4 = {1, 2, 3, 4}; // 按花括号列表初始化
\`\`\`

### 下标访问：从 0 开始数

\`\`\`cpp
std::vector<int> v = {10, 20, 30};
std::cout << v[0] << std::endl;   // 10：第一个元素
std::cout << v[2] << std::endl;   // 30：最后一个（长度 3，下标最大是 2）
\`\`\`

**下标从 0 开始**：第一个元素是 \`v[0]\` 不是 \`v[1]\`；长度为 n 时最后一个下标是 n-1。\`v[i]\` 越界**不会报编译错误**，程序直接崩溃，这是新手大坑。

### 常用操作

| 操作 | 说明 |
|---|---|
| \`v.size()\` | 元素个数 |
| \`v.empty()\` | 是否为空 |
| \`v.push_back(x)\` | 尾部追加一个元素（自动扩容） |
| \`v.pop_back()\` | 删掉尾部元素 |
| \`v.front()\` / \`v.back()\` | 读第一个 / 最后一个 |
| \`v.clear()\` | 清空所有元素 |

最常用的是 **push_back**：vector 生下来是空的，一个个 \`push_back\` 喂大。

### 遍历：两种写法

\`\`\`cpp
std::vector<int> nums = {4, 8, 15};
for (int i = 0; i < nums.size(); i++) {   // 经典：用下标
    std::cout << nums[i] << std::endl;
}
for (int x : nums) {                      // 范围 for：直接取元素
    std::cout << x << std::endl;
}
\`\`\`

### 二维 vector：格子里再放格子

\`\`\`cpp
std::vector<std::vector<int>> grid = {
    {1, 2, 3},
    {4, 5, 6}
};
std::cout << grid[0][1] << std::endl;  // 2：第 0 行第 1 列
\`\`\`

### C 风格数组：了解即可

C++ 也保留了老式的定长数组，了解它的写法有助于读旧代码：

\`\`\`cpp
int a[5] = {1, 2, 3, 4, 5};   // 长度 5，创建时就定死
std::cout << a[0] << std::endl;  // 下标同样从 0 开始
\`\`\`

它的三个硬伤：**长度固定不能扩、不知道自己多长、传给函数会退化成裸指针**。实际工程几乎一律用 vector 代替，你只要能认出这种写法即可。

## 逐行读懂示例

本课示例（vector 常用操作）：

\`\`\`cpp
std::vector<int> v;      // 出生时是空的
v.push_back(10);         // 追加 10，长度 1
v.push_back(20);         // 追加 20，长度 2
v.push_back(30);         // 追加 30，长度 3
std::cout << v.size() << std::endl;   // 3
std::cout << v[1] << std::endl;       // 20：下标 1 是第二个元素
v.pop_back();            // 删掉 30，长度 2
for (int x : v) { ... } // 依次取出 10、20
\`\`\`

## 新手常犯的错误

1. **下标越界**：\`std::vector<int> v = {1}; std::cout << v[5];\` 编译能过但运行崩溃（\`Segmentation fault\`）。记住最后一个下标是 \`size() - 1\`；怕手滑可以用 \`v.at(i)\`，越界会抛出可捕获的错误
2. **忘了 push_back 前的空 vector 不能下标写**：\`v[0] = 1;\` 在空 vector 上是未定义行为。空 vector 要用 push_back 追加，或先 resize
3. **用 \`<=\` 遍历**：\`for (int i = 0; i <= v.size(); i++)\` 最后一轮访问 \`v[size]\` 越界。用 \`<\`
4. **漏头文件**：不写 \`#include <vector>\` 报 \`vector is not a member of std\`

## 小结

- vector 是自动伸缩的动态数组，优先于 C 风格数组使用
- \`push_back\` 追加、\`pop_back\` 删除、\`size()\` 计数、\`v[i]\` 下标访问（从 0 开始）
- 遍历首选范围 for；需要下标时才用经典 for
- 越界不会编译报错，靠好习惯预防

下一课学「字符串」——文本数据的专门容器。`,
        en: `## What you will learn

This lesson covers **arrays and std::vector**: managing a whole batch of data under one name (say, 50 exam scores). Afterwards you can create dynamic arrays, add and remove elements, and iterate for statistics.

## What is a vector

So far each variable held a single value. Storing 1000 scores cannot mean defining 1000 variables — you need **a row of numbered slots**:

- **C-style arrays**: a fixed-length row of slots, size welded shut at creation, with no idea how long it is
- **std::vector**: a row of slots that **grows and shrinks automatically**, like a train you can extend with more carriages whenever needed

A vector is "array + automatic memory management", the most important container in real-world code. Include \`<vector>\` before use.

Read \`std::vector<int>\` as "a vector of int"; the angle brackets hold the element type. This is called a **template parameter** (you will meet it again later; for now just copy the pattern).

## How to write it

### Creating

\`\`\`cpp
#include <vector>
std::vector<int> v1;                // empty: 0 elements
std::vector<int> v2(5);             // five 0s
std::vector<int> v3(5, 7);          // five 7s
std::vector<int> v4 = {1, 2, 3, 4}; // brace-list initialization
\`\`\`

### Indexing: counting starts at 0

\`\`\`cpp
std::vector<int> v = {10, 20, 30};
std::cout << v[0] << std::endl;   // 10: the first element
std::cout << v[2] << std::endl;   // 30: the last (length 3, max index 2)
\`\`\`

**Indices start at 0**: the first element is \`v[0]\`, not \`v[1]\`; with length n the last index is n-1. Going out of bounds with \`v[i]\` **does not fail to compile** — the program just crashes. A classic beginner trap.

### Common operations

| Operation | Description |
|---|---|
| \`v.size()\` | element count |
| \`v.empty()\` | is it empty? |
| \`v.push_back(x)\` | append at the end (grows automatically) |
| \`v.pop_back()\` | remove the last element |
| \`v.front()\` / \`v.back()\` | read the first / last |
| \`v.clear()\` | remove everything |

The most used is **push_back**: vectors are born empty and grow by feeding them one \`push_back\` at a time.

### Iterating: two styles

\`\`\`cpp
std::vector<int> nums = {4, 8, 15};
for (int i = 0; i < nums.size(); i++) {   // classic: by index
    std::cout << nums[i] << std::endl;
}
for (int x : nums) {                      // range-based for: take elements directly
    std::cout << x << std::endl;
}
\`\`\`

### 2D vectors: slots inside slots

\`\`\`cpp
std::vector<std::vector<int>> grid = {
    {1, 2, 3},
    {4, 5, 6}
};
std::cout << grid[0][1] << std::endl;  // 2: row 0, column 1
\`\`\`

### C-style arrays: just so you know

C++ also keeps the old fixed-length arrays; knowing the syntax helps you read older code:

\`\`\`cpp
int a[5] = {1, 2, 3, 4, 5};   // length 5, fixed at creation
std::cout << a[0] << std::endl;  // indices start at 0 here too
\`\`\`

Three fatal flaws: **the size is fixed, it does not know its own length, and passing it to a function decays it to a bare pointer**. Real code almost always uses vector instead; you only need to recognize this syntax.

## Reading the example line by line

This lesson's example (common vector operations):

\`\`\`cpp
std::vector<int> v;      // born empty
v.push_back(10);         // append 10, length 1
v.push_back(20);         // append 20, length 2
v.push_back(30);         // append 30, length 3
std::cout << v.size() << std::endl;   // 3
std::cout << v[1] << std::endl;       // 20: index 1 is the second element
v.pop_back();            // removes 30, length 2
for (int x : v) { ... } // takes 10, then 20
\`\`\`

## Common beginner mistakes

1. **Out-of-range index**: \`std::vector<int> v = {1}; std::cout << v[5];\` compiles but crashes at run time (\`Segmentation fault\`). The last valid index is \`size() - 1\`; if unsure, use \`v.at(i)\`, which throws a catchable error instead of crashing
2. **Indexing into an empty vector**: \`v[0] = 1;\` on an empty vector is undefined behavior. Empty vectors grow via push_back, or resize first
3. **Using <= in the loop**: \`for (int i = 0; i <= v.size(); i++)\` touches \`v[size]\` on the last round — out of bounds. Use \`<\`
4. **Missing header**: without \`#include <vector>\` you get \`vector is not a member of std\`

## Summary

- A vector is a growable dynamic array; prefer it over C-style arrays
- \`push_back\` appends, \`pop_back\` removes, \`size()\` counts, \`v[i]\` indexes (from 0)
- Prefer the range-based for; use the classic for only when you need the index
- Out-of-bounds access does not fail at compile time — prevention is habit

Next lesson: strings — a dedicated container for text.`,
      },
      examples: [
        {
          caption: { zh: 'vector 常用操作', en: 'Common vector operations' },
          code: '#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> v;\n    v.push_back(10);\n    v.push_back(20);\n    v.push_back(30);\n    std::cout << v.size() << std::endl;   // 3\n    std::cout << v[1] << std::endl;       // 20\n    v.pop_back();\n    std::cout << v.size() << std::endl;   // 2\n    for (int x : v) {\n        std::cout << x << " ";           // 10 20\n    }\n    std::cout << std::endl;\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: 'vector 统计', en: 'vector statistics' },
          prompt: {
            zh: '给定 \`std::vector<int> nums = {4, 8, 15, 16, 23, 42};\`，**每行一个**依次输出：总和、最大值、最小值、元素个数。',
            en: 'Given \`std::vector<int> nums = {4, 8, 15, 16, 23, 42};\`, print — **one per line** — the sum, maximum, minimum, and element count.',
          },
          starter: '#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> nums = {4, 8, 15, 16, 23, 42};\n    // 在下面输出四行\n    return 0;\n}\n',
          expectedOutput: '108\n42\n4\n6\n',
          hints: [
            { zh: '四个量分开想：总和靠累加器从 0 加起；最大最小可以先拿第一个元素当「暂定冠军」，再让后面的元素逐个挑战；个数是容器自己的属性，直接「问」它。', en: 'Think about the four quantities separately: the sum via an accumulator starting from 0; the max and min by crowning the first element as champion and letting the rest challenge it; the count is a property of the container — just ask it.' },
            { zh: '语法：\`for (int x : nums) total += x;\` 范围循环累加；\`std::max_element\` / \`std::min_element\` 返回的是迭代器，前面加 \`*\` 才能取到值；\`nums.size()\` 是元素个数。', en: 'Syntax: accumulate with \`for (int x : nums) total += x;\`; \`std::max_element\` / \`std::min_element\` return iterators, so prefix a \`*\` to get the value; \`nums.size()\` is the element count.' },
            { zh: '四行输出，顺序是：总和、\`*std::max_element(nums.begin(), nums.end())\`、\`*std::min_element(...)\`、\`nums.size()\`，即 108、42、4、6。', en: 'Four lines in order: the sum, \`*std::max_element(nums.begin(), nums.end())\`, \`*std::min_element(...)\`, then \`nums.size()\` — that is 108, 42, 4, 6.' },
            { zh: '骨架：先用范围循环 \`for (int x : nums) total += x;\` 算总和，再 \`int mx = *std::max_element(nums.begin(), nums.end());\`、\`int mn = *std::min_element(...);\`，最后用四条 cout 分别输出 total、mx、mn、\`nums.size()\`。易错点：忘了写 \`<algorithm>\` 头文件会编译失败；\`max_element\` 返回的是迭代器，忘记加 \`*\` 会把迭代器本身当成指针打印；cout 里不要再夹任何文字或符号。', en: 'Skeleton: a range loop \`for (int x : nums) total += x;\` for the sum, then \`int mx = *std::max_element(nums.begin(), nums.end());\` and \`int mn = *std::min_element(...);\`, finally four cout statements for total, mx, mn, and \`nums.size()\`. Watch out: omitting \`<algorithm>\` makes the code fail to compile; \`max_element\` returns an iterator so forgetting \`*\` prints the iterator itself; never embed a label string inside cout.' },
            { zh: '完整参考：\`int total = 0; for (int x : nums) total += x; int mx = *std::max_element(nums.begin(), nums.end()); int mn = *std::min_element(nums.begin(), nums.end());\` 后四条 cout 分别输出 total、mx、mn、\`nums.size()\`，对应 108、42、4、6。顺序是总和 → 最大 → 最小 → 个数，与题目逐行对应。', en: 'Reference: \`int total = 0; for (int x : nums) total += x; int mx = *std::max_element(nums.begin(), nums.end()); int mn = *std::min_element(nums.begin(), nums.end());\` followed by four cout statements for total, mx, mn, then \`nums.size()\` — emitting 108, 42, 4, 6. The order is sum → max → min → count, exactly matching the prompt.' },
          ],
          solution: '#include <iostream>\n#include <vector>\n#include <algorithm>\n\nint main() {\n    std::vector<int> nums = {4, 8, 15, 16, 23, 42};\n    int total = 0;\n    for (int x : nums) total += x;\n    int mx = *std::max_element(nums.begin(), nums.end());\n    int mn = *std::min_element(nums.begin(), nums.end());\n    std::cout << total << std::endl;\n    std::cout << mx << std::endl;\n    std::cout << mn << std::endl;\n    std::cout << nums.size() << std::endl;\n    return 0;\n}\n',
          solutionNote: { zh: '三步分别求总和、最大、最小，再问容器的元素个数：范围循环把每个元素累加进 total，\`std::max_element\` / \`std::min_element\` 在 \`<algorithm>\` 头里提供，返回迭代器，需要解引用 \`*\` 拿到真正的整数值，\`nums.size()\` 直接给出元素个数。关键点在于 \`<algorithm>\` 头不能少、迭代器必须解引用、输出顺序是总和→最大→最小→个数。也可以手写两个 for 循环求最大最小，避免引入 algorithm 头，等价但更冗长。', en: 'Three steps handle sum, max, min; the element count is then queried from the container: a range loop folds every element into `total`, `std::max_element` / `std::min_element` (from `<algorithm>`) return iterators and need dereferencing with `*` to yield the actual int values, and `nums.size()` gives the count directly. The key is that `<algorithm>` must be included, the iterators must be dereferenced, and the print order must be sum → max → min → count. You can also write two manual for loops for max/min and skip `<algorithm>` — same result, more verbose.' },
        },
        {
          id: 'ex2',
          title: { zh: '偶数的平方', en: 'Squares of evens' },
          prompt: {
            zh: '把 1~10 中的偶数平方后**每行一个**输出（4、16、36、64、100）。用 \`std::vector\` 暂存结果。',
            en: 'Compute the squares of even numbers from 1 to 10 and print **one per line** (4, 16, 36, 64, 100). Stash results in a \`std::vector\`.',
          },
          starter: '#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> result;\n    // for 循环里 push_back\n    return 0;\n}\n',
          expectedOutput: '4\n16\n36\n64\n100\n',
          hints: [
            { zh: '两步走：先从 1 到 10 里挑出偶数——怎样判断一个数是偶数？把它们的平方存进容器；最后再统一逐行输出。', en: 'Two phases: first pick out the evens from 1 to 10 — how do you tell that a number is even? Store their squares in a container; then print them all line by line.' },
            { zh: '语法：\`if (i % 2 == 0) result.push_back(i * i);\`——对 2 取余为 0 即偶数；\`push_back\` 把元素追加到容器末尾。', en: 'Syntax: \`if (i % 2 == 0) result.push_back(i * i);\` — a zero remainder on division by 2 means even; \`push_back\` appends the element to the end.' },
            { zh: '第一个循环处理 1..10，把偶数的平方存进 result；第二个范围循环逐行输出。五行结果：4、16、36、64、100。', en: 'The first loop covers 1..10 and stores the squares of evens into result; the second is a range loop printing one per line. Five results: 4, 16, 36, 64, 100.' },
            { zh: '骨架：先 \`for (int i = 1; i <= 10; i++) if (i % 2 == 0) result.push_back(i * i);\` 填充容器，再 \`for (int x : result) cout << x << endl;\` 逐行输出。易错点：循环边界是 \`<= 10\` 不是 \`< 10\`，否则会漏掉 100；判断偶数用 \`i % 2 == 0\` 不是 \`i % 2 != 0\`；push_back 的元素是 \`i * i\` 不是 \`i\`。', en: 'Skeleton: first \`for (int i = 1; i <= 10; i++) if (i % 2 == 0) result.push_back(i * i);\` to fill the container, then \`for (int x : result) cout << x << endl;\` to print one per line. Watch out: the loop bound is \`<= 10\`, not \`< 10\` (otherwise 100 is dropped); the even test is \`i % 2 == 0\`, not \`!= 0\`; the element pushed is \`i * i\`, not \`i\`.' },
            { zh: '完整参考：\`for (int i = 1; i <= 10; i++) if (i % 2 == 0) result.push_back(i * i);\` 后 \`for (int x : result) std::cout << x << std::endl;\`。填进去的偶数平方按 2、4、6、8、10 顺序依次是 4、16、36、64、100；输出顺序由容器内的存储顺序决定。', en: 'Reference: \`for (int i = 1; i <= 10; i++) if (i % 2 == 0) result.push_back(i * i);\` followed by \`for (int x : result) std::cout << x << std::endl;\`. The even squares in order (2, 4, 6, 8, 10) are 4, 16, 36, 64, 100; the print order follows the container insertion order.' },
          ],
          solution: '#include <iostream>\n#include <vector>\n\nint main() {\n    std::vector<int> result;\n    for (int i = 1; i <= 10; i++) {\n        if (i % 2 == 0) {\n            result.push_back(i * i);\n        }\n    }\n    for (int x : result) {\n        std::cout << x << std::endl;\n    }\n    return 0;\n}\n',
          solutionNote: { zh: '两阶段做法：第一阶段用 for 循环遍历 1..10，对每个偶数（\`i % 2 == 0\`）把它的平方 \`i * i\` 用 \`push_back\` 追加进 vector；第二阶段再用范围 for 循环逐行输出所有元素。关键点在于循环边界 \`<= 10\`（漏掉 10 就少一行 100）、偶数判断用 \`== 0\` 而非 \`!= 0\`、push 进去的是 \`i * i\` 而非 \`i\` 本身。也可以省掉中间的 vector，直接在循环里即时输出平方，结果一样但没法复用中间数据。', en: 'Two-phase approach: the first loop walks 1..10 and pushes the square `i * i` of each even (`i % 2 == 0`) into the vector via `push_back`; the second phase is a range for loop printing every stored element line by line. The key is the loop bound `<= 10` (dropping 10 omits the line 100), the even test using `== 0` rather than `!= 0`, and pushing `i * i`, not `i` itself. You can also drop the intermediate vector and print on the fly during the first loop, with the same output but no reusable intermediate data.' },
        },
      ],
    },

    // ================= 8. 字符串 =================
    {
      id: 'strings',
      title: { zh: '字符串 std::string', en: 'Strings (std::string)' },
      difficulty: 2,
      lecture: {
        zh: `## 这节课学什么

这节课学习**std::string**：专门存放和加工文本的容器。学完后你能拼接、查找、截取字符串，还能在字符串和数字之间来回转换。

## string 是什么

字符串就是「一串字符」。\`std::string\` 可以想象成**一列火车车厢**：每节车厢坐一个字符（\`char\`），车厢数量自动增减，并且自带乘务员（各种方法帮你干活）。

在 C++ 里有两种「文本」写法，先分清：

- \`"hello"\` 这种**双引号字面量**本质是老式的 C 字符串（末尾偷偷藏了一个 \`\\0\` 结束符）
- \`std::string s = "hello";\` 是把这份文本装进功能齐全的 string 盒子

老式 C 字符串长度难算、容易越界，是历史包袱；**日常写代码一律用 std::string**（记得 \`#include <string>\`）。

string 和 vector 有很多像的地方：\`s.size()\` 求长度、\`s[i]\` 按下标取字符、支持范围 for 遍历。区别是它专门为文本优化，还能用 \`+\` 直接拼接。

## 怎么写

### 创建与拼接

\`\`\`cpp
#include <string>
std::string s = "hello";
std::string t = s + " world";   // 拼接出 "hello world"
s += "!";                        // 追加，s 变成 "hello!"
\`\`\`

注意：\`"ab" + "cd"\` **两个裸字面量不能直接相加**（会编译错误），至少一边要是 std::string。

### 常用操作

| 操作 | 例子 | 说明 |
|---|---|---|
| \`s.size()\` | \`"hi".size()\` | 长度 2（不含结束符） |
| \`s[i]\` | \`s[0]\` | 取第 i 个字符（从 0 开始） |
| \`s == t\` | — | **按内容比较**，不是比地址 |
| \`s.substr(pos, len)\` | \`"hello".substr(1, 3)\` | 截出 \`"ell"\`：从下标 1 起取 3 个字符 |
| \`s.find(t)\` | \`"abc".find("b")\` | 查 t 首次出现的下标，找不到返回 \`std::string::npos\` |

### 修改操作

\`\`\`cpp
std::string s = "hello";
s.push_back('!');        // 尾部加一个字符，变成 "hello!"
s.append(" world");      // 尾部接一串
s.insert(0, ">> ");      // 在下标 0 处插入，变成 ">> hello!"
s.erase(0, 3);           // 从下标 0 起删 3 个字符
s[0] = 'H';              // 直接改某个字符（string 是可修改的！）
\`\`\`

### 与数字互转

\`\`\`cpp
int n = std::stoi("123");            // 文字 → 整数
std::string s = std::to_string(42); // 整数 → 文字
\`\`\`

这在「读入的数字是文本」或「要把数字拼进句子」时非常有用。

### 遍历每个字符

\`\`\`cpp
for (char c : s) {           // 依次取出每个字符
    std::cout << c << std::endl;
}
\`\`\`

配合 \`std::toupper\` / \`std::tolower\`（需要 \`<cctype>\`）可以统一大小写。

## 逐行读懂示例

本课示例（string 方法串烧）：

\`\`\`cpp
std::string s = "Hello C++";
std::cout << s.size() << std::endl;          // 9：字符个数（空格也算）
std::cout << s.substr(0, 5) << std::endl;    // Hello：从 0 起取 5 个
std::cout << s.find("C++") << std::endl;     // 6：C++ 首次出现的下标
std::string t = s + " world";                // 拼接
std::cout << std::stoi("123") + 1 << std::endl; // 124：先转数字再加
\`\`\`

- \`s.size()\` 数的是**字符**，空格也占一个位置；\`H-e-l-l-o-空格-C-+-+\` 共 9 个
- \`substr(0, 5)\` 参数是「起点 + 个数」，不是「起点 + 终点」
- \`find\` 返回**下标**；找不到时返回一个特殊值 \`npos\`，不能直接当数字用

## 新手常犯的错误

1. **裸字面量相加**：\`std::string s = "ab" + "cd";\` 编译错误。改成 \`std::string("ab") + "cd"\` 或让左边先是一个 string 变量
2. **把 find 的 npos 当下标用**：\`s.find("x")\` 找不到时返回 npos（一个超大数），直接输出会得到怪数字。判断要用 \`if (s.find("x") != std::string::npos)\`
3. **用 = 比较**：\`if (s = "abc")\` 是赋值不是比较，条件还永远成立。比较字符串用 \`==\`（string 重载了它，按内容比）
4. **substr 参数搞反**：\`substr(起点, 个数)\`。\`"hello".substr(1, 3)\` 是 \`"ell"\`；想要「到结尾为止」可以省略第二个参数

## 小结

- std::string 是文本专用容器：可拼接、可比较、可按下标修改
- 常用：\`size()\`、\`substr\`、\`find\`、\`+\`、\`push_back\`、\`s[i]\`
- \`stoi\` 文字转数字、\`to_string\` 数字转文字
- 遍历用范围 for，处理字符用 \`<cctype>\` 的 toupper / tolower

下一课进入 C++ 的深水区：「指针与引用」——直接操作内存地址。`,
        en: `## What you will learn

This lesson covers **std::string**: the container dedicated to holding and processing text. Afterwards you can concatenate, search, and slice strings, and convert between strings and numbers.

## What is a string

A string is "a run of characters". Think of \`std::string\` as **a train**: each carriage carries one character (\`char\`), the number of carriages adjusts automatically, and a crew comes along (the methods that do the work for you).

C++ has two kinds of "text"; tell them apart first:

- A **double-quoted literal** like \`"hello"\` is really an old C string (with a hidden \`\\0\` terminator at the end)
- \`std::string s = "hello";\` loads that text into a full-featured string box

Old C strings make length awkward and overflow easy — historical baggage; **always use std::string in day-to-day code** (remember \`#include <string>\`).

string resembles vector in many ways: \`s.size()\` for length, \`s[i]\` for indexing, and it supports the range-based for. The differences: it is optimized for text, and you can concatenate directly with \`+\`.

## How to write it

### Creating & concatenating

\`\`\`cpp
#include <string>
std::string s = "hello";
std::string t = s + " world";   // concatenated into "hello world"
s += "!";                        // append; s becomes "hello!"
\`\`\`

Careful: \`"ab" + "cd"\` — **two bare literals cannot be added** (compile error); at least one side must be a std::string.

### Common operations

| Operation | Example | Notes |
|---|---|---|
| \`s.size()\` | \`"hi".size()\` | length 2 (no terminator) |
| \`s[i]\` | \`s[0]\` | the i-th character (from 0) |
| \`s == t\` | — | compares **by content**, not by address |
| \`s.substr(pos, len)\` | \`"hello".substr(1, 3)\` | slices \`"ell"\`: 3 characters starting at index 1 |
| \`s.find(t)\` | \`"abc".find("b")\` | index of the first occurrence; \`std::string::npos\` if absent |

### Mutating operations

\`\`\`cpp
std::string s = "hello";
s.push_back('!');        // append one character, now "hello!"
s.append(" world");      // append a run
s.insert(0, ">> ");      // insert at index 0, now ">> hello!"
s.erase(0, 3);           // delete 3 characters from index 0
s[0] = 'H';              // overwrite one character (strings are mutable!)
\`\`\`

### Converting to and from numbers

\`\`\`cpp
int n = std::stoi("123");            // text -> integer
std::string s = std::to_string(42); // integer -> text
\`\`\`

Very useful when "the number arrives as text" or "you need to embed a number in a sentence".

### Iterating over characters

\`\`\`cpp
for (char c : s) {           // take each character in turn
    std::cout << c << std::endl;
}
\`\`\`

Combined with \`std::toupper\` / \`std::tolower\` (with \`<cctype>\`) you can normalize case.

## Reading the example line by line

This lesson's example (string method medley):

\`\`\`cpp
std::string s = "Hello C++";
std::cout << s.size() << std::endl;          // 9: character count (spaces included)
std::cout << s.substr(0, 5) << std::endl;    // Hello: 5 characters starting at 0
std::cout << s.find("C++") << std::endl;     // 6: index of the first "C++"
std::string t = s + " world";                // concatenation
std::cout << std::stoi("123") + 1 << std::endl; // 124: convert first, then add
\`\`\`

- \`s.size()\` counts **characters**; the space occupies a slot too: H-e-l-l-o-space-C-+-+ makes 9
- \`substr(0, 5)\` takes "start + count", not "start + end"
- \`find\` returns an **index**; on failure it returns the special value \`npos\`, which must not be used as a number

## Common beginner mistakes

1. **Adding two bare literals**: \`std::string s = "ab" + "cd";\` is a compile error. Use \`std::string("ab") + "cd"\`, or make the left side a string variable first
2. **Treating find's npos as an index**: \`s.find("x")\` returns npos (a huge number) when absent; printing it yields a weird number. Test with \`if (s.find("x") != std::string::npos)\`
3. **Comparing with =**: \`if (s = "abc")\` assigns instead of comparing, and the condition always holds. Strings compare with \`==\` (string overloads it to compare by content)
4. **Mixing up substr's parameters**: \`substr(start, count)\`.\`"hello".substr(1, 3)\` is \`"ell"\`; to run "to the end", omit the second argument

## Summary

- std::string is the text container: concatenatable, comparable, and mutable by index
- Everyday tools: \`size()\`, \`substr\`, \`find\`, \`+\`, \`push_back\`, \`s[i]\`
- \`stoi\` turns text into numbers; \`to_string\` turns numbers into text
- Iterate with the range-based for; handle characters with toupper / tolower from \`<cctype>\`

Next lesson we enter deeper water: pointers and references — operating on memory addresses directly.`,
      },
      examples: [
        {
          caption: { zh: 'string 方法串烧', en: 'String method medley' },
          code: '#include <iostream>\n#include <string>\n\nint main() {\n    std::string s = "Hello C++";\n    std::cout << s.size() << std::endl;          // 9\n    std::cout << s.substr(0, 5) << std::endl;     // Hello\n    std::cout << s.find("C++") << std::endl;      // 6\n    std::string t = s + " world";\n    std::cout << t << std::endl;                  // Hello C++ world\n    std::cout << std::stoi("123") + 1 << std::endl; // 124\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '字符串统计', en: 'String stats' },
          prompt: {
            zh: '给定 \`std::string s = "Hello C++";\`，**每行一个**输出：长度、全大写形式、首尾字符（中间空格分隔，即 \`H +\`）。',
            en: 'Given \`std::string s = "Hello C++";\`, print **one per line**: length, uppercase form, and the first & last chars separated by a space (i.e. \`H +\`).',
          },
          starter: '#include <iostream>\n#include <string>\n\nint main() {\n    std::string s = "Hello C++";\n    // 三行输出\n    return 0;\n}\n',
          expectedOutput: '9\nHELLO C++\nH +\n',
          hints: [
            { zh: '三个输出分开想：长度是字符串自己的属性，直接「问」它；大写形式可以先复制一份，再逐个字符转换；首尾字符就是第一个位置和最后一个位置上的字符。', en: 'Three outputs, one at a time: the length is a property of the string itself — just ask it; the uppercase form can be made by copying it and converting character by character; the first and last are simply the characters at the first and last positions.' },
            { zh: '语法：\`s.size()\` 是长度；\`s[i] = std::toupper(s[i])\` 把字符转大写（需要 \`<cctype>\`）；\`s[0]\` 与 \`s.back()\` 取首尾字符。', en: 'Syntax: \`s.size()\` for the length; \`s[i] = std::toupper(s[i])\` to uppercase a character (needs \`<cctype>\`); \`s[0]\` and \`s.back()\` for the first and last characters.' },
            { zh: '复制 \`std::string upper = s;\` 后循环 toupper；三行输出：长度（9）、upper、\`s[0] << " " << s.back()\`（即 \`H +\`，中间恰好一个空格）。', en: 'Copy with \`std::string upper = s;\` then toupper each character in a loop; print three lines: the length (9), upper, then \`s[0] << " " << s.back()\` (that is \`H +\`, with exactly one space in between).' },
            { zh: '骨架：\`std::string upper = s;\` 后 \`for (size_t i = 0; i < upper.size(); i++) upper[i] = std::toupper(...);\`；三条 cout 分别输出 \`s.size()\`、upper、\`s[0] << " " << s.back() << endl\`。易错点：\`std::toupper\` 的参数是 int，传 char 必须先 \`static_cast<unsigned char>\` 再 cast 一次避免未定义行为；忘了 \`<cctype>\` 头会编译失败；首尾之间的空格只能一个，多写或少写都判未通过。', en: 'Skeleton: \`std::string upper = s;\` followed by \`for (size_t i = 0; i < upper.size(); i++) upper[i] = std::toupper(...);\`; three cout statements output \`s.size()\`, upper, then \`s[0] << " " << s.back() << endl\`. Watch out: \`std::toupper\` takes an int, so passing a char needs an intermediate \`static_cast<unsigned char>\` (and another cast back to char) to avoid undefined behavior; omitting \`<cctype>\` fails to compile; the gap between first and last must be exactly one space — extra or missing spaces fail the judge.' },
            { zh: '完整参考：\`std::string upper = s; for (size_t i = 0; i < upper.size(); i++) upper[i] = static_cast<char>(std::toupper(static_cast<unsigned char>(upper[i])));\` 后三条 cout 分别输出 \`s.size()\`、upper、\`s[0] << " " << s.back() << std::endl\`，结果是 9、HELLO C++、\`H +\`（中间恰好一个空格）。', en: 'Reference: \`std::string upper = s; for (size_t i = 0; i < upper.size(); i++) upper[i] = static_cast<char>(std::toupper(static_cast<unsigned char>(upper[i])));\` followed by three cout statements for \`s.size()\`, upper, and \`s[0] << " " << s.back() << std::endl\` — yielding 9, HELLO C++, and \`H +\` (with exactly one space in between).' },
          ],
          solution: '#include <iostream>\n#include <string>\n#include <cctype>\n\nint main() {\n    std::string s = "Hello C++";\n    std::string upper = s;\n    for (size_t i = 0; i < upper.size(); i++) {\n        upper[i] = static_cast<char>(std::toupper(static_cast<unsigned char>(upper[i])));\n    }\n    std::cout << s.size() << std::endl;\n    std::cout << upper << std::endl;\n    std::cout << s[0] << " " << s.back() << std::endl;\n    return 0;\n}\n',
          solutionNote: { zh: '三步分别处理：长度直接 \`s.size()\` 得到 9；大写形式通过复制 \`upper = s\` 再逐字符用 \`std::toupper\` 转换（注意 cctype 头与 unsigned char 转换）；首尾字符用 \`s[0]\` 与 \`s.back()\` 取，中间塞一个空格串起来。关键点在于 \`<cctype>\` 头不可少、字符转换必须先转 \`unsigned char\` 防止负值触发未定义行为、首尾之间空格恰好一个。也可以用 \`std::transform\` 配合 \`::toupper\` 一行写完转换，思路更函数式。', en: 'Three steps handle the three outputs: length is `s.size()` (9); the uppercase form is built by copying into `upper` and converting each character via `std::toupper` (note the `<cctype>` include and the `unsigned char` cast); the first and last characters are picked with `s[0]` and `s.back()`, then glued by a single space in the middle. The key is that `<cctype>` must be included, characters must first be cast to `unsigned char` to avoid undefined behavior on negative values, and the gap between first and last is exactly one space. You can also do the uppercase pass with `std::transform` and `::toupper` in one line — same result, more functional style.' },
        },
        {
          id: 'ex2',
          title: { zh: '回文判断', en: 'Palindrome check' },
          prompt: {
            zh: '编写函数 \`bool is_palindrome(const std::string& s);\`（忽略大小写）。对 \`"racecar"\` 和 \`"hello"\` 分别输出判定结果（\`1\` / \`0\`，各占一行，注意 C++ 打印 bool 是 \`1\` / \`0\`）。',
            en: 'Write \`bool is_palindrome(const std::string& s);\` (case-insensitive). Print the verdict for \`"racecar"\` and \`"hello"\` — \`1\` / \`0\`, one per line (C++ prints bools as \`1\` / \`0\`).',
          },
          starter: '#include <iostream>\n#include <string>\n\nbool is_palindrome(const std::string& s) {\n    // 在下面实现\n    return false;\n}\n\nint main() {\n    std::cout << is_palindrome("racecar") << std::endl;\n    std::cout << is_palindrome("hello") << std::endl;\n    return 0;\n}\n',
          expectedOutput: '1\n0\n',
          hints: [
            { zh: '回文就是「正着读、反着读都一样」。派两个位置标记从字符串两头出发相向而行，边走边比较对应的一对字符；走到中途都没发现不同，就是回文。比较之前别忘了统一大小写。', en: 'A palindrome reads the same forwards and backwards. Send two position markers from the two ends toward the middle, comparing each pair of characters as they walk; if no mismatch appears before they meet, it is a palindrome. Remember to normalize the case before comparing.' },
            { zh: '语法：\`size_t i = 0, j = s.size() - 1;\` 配 \`while (i < j)\`；比较前用 \`std::tolower\` 统一大小写；每轮结束 \`i++\`、\`j--\`。', en: 'Syntax: \`size_t i = 0, j = s.size() - 1;\` with \`while (i < j)\`; lower-case both characters with \`std::tolower\` before comparing; end each round with \`i++\` and \`j--\`.' },
            { zh: '发现一对不相等立即返回假；两个标记相遇仍未发现不等就返回真。参数是常量引用、不能修改原串；输出的是函数返回值，打印出来是 1 和 0 两行。', en: 'Return false the moment a pair mismatches; if the markers meet with no mismatch, return true. The parameter is a const reference — never modify the original; you print the return values, which come out as 1 and 0 on two lines.' },
            { zh: '骨架：\`size_t i = 0, j = s.size() - 1; while (i < j) { 比较 s[i] 和 s[j] 大写化或小写化；不等则 return false; i++; j--; } return true;\`。易错点：空串要先单独处理（长度 0 时 \`j = -1\` 会因 size_t 溢出成超大值）；比较前必须先用 \`std::tolower\` 把两边都小写化；参数是 \`const std::string&\`，不能修改原串。', en: 'Skeleton: \`size_t i = 0, j = s.size() - 1; while (i < j) { compare lower-cased s[i] and s[j]; if unequal return false; i++; j--; } return true;\`. Watch out: empty strings must be handled first (with length 0, \`j = -1\` underflows size_t to a huge value); always \`std::tolower\` both sides before comparing; the parameter is \`const std::string&\` so the original must not be mutated.' },
            { zh: '完整参考：\`size_t i = 0, j = s.size(); if (j == 0) return true; j--; while (i < j) { char a = std::tolower((unsigned char)s[i]); char b = std::tolower((unsigned char)s[j]); if (a != b) return false; i++; j--; } return true;\`。cout 打印 bool 时是 1/0；忽略大小写让 "racecar" 输出 1、"hello" 输出 0。', en: 'Reference: \`size_t i = 0, j = s.size(); if (j == 0) return true; j--; while (i < j) { char a = std::tolower((unsigned char)s[i]); char b = std::tolower((unsigned char)s[j]); if (a != b) return false; i++; j--; } return true;\`. cout prints a bool as 1/0; case-insensitive matching makes "racecar" emit 1 and "hello" emit 0.' },
          ],
          solution: '#include <iostream>\n#include <string>\n#include <cctype>\n\nbool is_palindrome(const std::string& s) {\n    size_t i = 0, j = s.size();\n    if (j == 0) return true;\n    j--;\n    while (i < j) {\n        char a = static_cast<char>(std::tolower(static_cast<unsigned char>(s[i])));\n        char b = static_cast<char>(std::tolower(static_cast<unsigned char>(s[j])));\n        if (a != b) return false;\n        i++; j--;\n    }\n    return true;\n}\n\nint main() {\n    std::cout << is_palindrome("racecar") << std::endl;\n    std::cout << is_palindrome("hello") << std::endl;\n    return 0;\n}\n',
          solutionNote: { zh: '用左右两个下标相向而行，每轮把两边字符都通过 \`std::tolower\` 统一小写再比较，发现不等就 return false，全部走完仍相等则 return true。关键点在于 size_t 是无符号类型，对长度 0 的串要先单独 return true 防止 \`j = -1\` 溢出；比较前必须小写化以满足「忽略大小写」的要求；cout 打印 bool 时默认就是 1/0，不必额外处理。也可以用 std::equal 把原串和反转串对照，但反转需要额外内存，思路不如双指针直接。', en: 'Two pointers walk inward from both ends; each round lower-cases both characters with `std::tolower` and compares them, returning false on the first mismatch and true if the walk completes with all pairs matching. The key is that `size_t` is unsigned, so an empty string needs a separate early `return true` to avoid `j = -1` underflowing into a huge value; the comparison must lowercase both sides to honor the case-insensitive requirement; cout prints a bool as 1/0 with no extra effort. You can also compare the string with its reverse via `std::equal`, but reversing needs extra memory and is less direct than the two-pointer walk.' },
        },
      ],
    },

    // ================= 9. 指针与引用 =================
    {
      id: 'pointers',
      title: { zh: '指针与引用', en: 'Pointers & References' },
      difficulty: 3,
      lecture: {
        zh: `## 这节课学什么

这节课学习**指针与引用**：C++ 最「玄」也最强大的两个概念——让你**直接操作另一个变量本身**（而不是它的复印件）。学完后你能写出真正能交换两个变量的 swap，理解函数怎么修改外部数据。

## 引用和指针是什么

先回忆一个事实：函数传参默认是**拷贝**，函数里改的是复印件，碰不到原件。要碰到原件，有两条路：

**引用（\`&\`）——给变量起外号。**

\`\`\`cpp
int x = 42;
int& r = x;   // r 是 x 的外号：r 和 x 是同一个盒子的两个名字
r = 100;      // 改 r 就是改 x，x 现在是 100
\`\`\`

就像「小王」和「王老师」是同一个人——叫哪个名字都能找到他本人。引用**必须在出生时绑定一个变量，且终身不改绑**。

**指针（\`*\`）——记下变量家的门牌号。**

\`\`\`cpp
int x = 42;
int* p = &x;   // p 是指针：存的是 x 的地址（门牌号）
std::cout << *p;   // 42：按地址「找上门」取出值（解引用）
*p = 100;      // 通过地址直接改 x 的内容
\`\`\`

- \`&x\` 是「取地址」：x 住在哪
- \`*p\` 是「解引用」：按地址找上门，取到（或修改）住着的东西

两者的区别：引用是**别名**（安全、省心，但一生只跟一个人）；指针是**地址**（灵活、可以改指向，但也可能是空地址 \`nullptr\`，用之前要小心）。日常写法：**能用引用就用引用**，确需「可空、可换目标」时才用指针。

## 怎么写

### 引用传参（最常见用法）

\`\`\`cpp
void swap(int& a, int& b) {   // 形参是实参的别名
    int t = a; a = b; b = t;
}
int x = 3, y = 8;
swap(x, y);   // 真的交换了：x=8, y=3
\`\`\`

只读大对象（string、vector）时用 const 引用，不拷贝也不可改：

\`\`\`cpp
void print(const std::string& s) { std::cout << s << std::endl; }
\`\`\`

### 指针基础

\`\`\`cpp
int x = 42;
int* p = &x;    // 声明指针：类型* 名字
std::cout << *p << std::endl;  // 42：解引用读值
*p = 100;       // 解引用写值，x 变成 100
int* q = nullptr;  // 空指针：指向「什么都没有」
\`\`\`

声明时 \`*\` 贴着类型（\`int* p\`）；使用时 \`*p\` 表示「去 p 记录的地址取内容」。同一个符号两种含义，靠位置区分。

### 堆内存：new / delete

程序的数据可以放在两个地方：**栈**（自动管理，函数结束就回收）和**堆**（自己申请、自己归还）。用 \`new\` 申请、\`delete\` 归还：

\`\`\`cpp
int* arr = new int[5];      // 在堆上申请 5 个 int 的空间
arr[0] = 1;                 // 像数组一样用
delete[] arr;               // 用完必须归还，否则内存泄漏
\`\`\`

单个对象用 \`delete p\`，数组用 \`delete[] p\`，别混。忘了 delete，那块内存要到程序结束才回收（泄漏）；delete 两次或继续用已 delete 的指针，程序可能直接崩溃。

## 逐行读懂示例

本课示例（引用传参与指针解引用）：

\`\`\`cpp
void swap(int& a, int& b) { int t = a; a = b; b = t; }
int x = 3, y = 8;
swap(x, y);                    // 引用传参：改的就是 x、y 本尊
std::cout << x << " " << y << std::endl;   // 8 3
int* p = &x;                   // p 记下 x 的地址
std::cout << *p << std::endl;  // 解引用：读出 x 的值 8
\`\`\`

- swap 的形参是 \`int&\`，所以 a 就是 x、b 就是 y，交换直接发生在原变量上
- \`&x\` 取地址放进 p；\`*p\` 顺着地址找回去，读到的正是 x 的当前值 8

## 新手常犯的错误

1. **解引用空指针**：\`int* p = nullptr; std::cout << *p;\` 直接段错误（Segmentation fault）。用指针前确保它指向有效内存
2. **忘了 delete（泄漏）或 delete 后继续用（悬空指针）**：现象是内存越用越多或随机崩溃。new 和 delete 成对出现，delete 后把指针置空是好习惯
3. **混淆声明和使用位置的 \`*\`**：\`int* p, q;\` 其实只声明了一个指针 p，q 是普通 int。一行只声明一个指针最安全
4. **引用试图改绑**：\`int& r = x; r = y;\` 不是「让 r 改指 y」，而是「把 y 的值赋给 x」。引用出生时绑定谁就是谁

## 小结

- 引用是别名，指针是地址；改引用 / 解引用写值都能影响原变量
- 值传递是拷贝；想改原件用 \`T&\`，只读大对象用 \`const T&\`
- \`&\` 取地址、\`*\` 解引用；指针可为 nullptr
- new / delete 手动管理堆内存，用完必还

下一课用这些知识学习「类与对象」——把数据和操作打包成自定义类型。`,
        en: `## What you will learn

This lesson covers **pointers and references** — the two most "mystical" yet most powerful concepts in C++. They let you operate on **another variable itself** (not on a photocopy of it). Afterwards you can write a swap that really swaps, and understand how functions modify outside data.

## What are references and pointers

Recall a fact: passing arguments copies by default — a function editing the copy never touches the original. To reach the original there are two roads:

**A reference (\`&\`) — a nickname for a variable.**

\`\`\`cpp
int x = 42;
int& r = x;   // r is x's nickname: two names for the same box
r = 100;      // editing r edits x; x is now 100
\`\`\`

Like "Xiao Wang" and "Mr. Wang" being the same person — either name reaches the man himself. A reference **must bind to a variable at birth and never rebinds**.

**A pointer (\`*\`) — writes down the variable's home address.**

\`\`\`cpp
int x = 42;
int* p = &x;   // p is a pointer: it stores x's address
std::cout << *p;   // 42: follow the address and read the value (dereference)
*p = 100;      // write through the address, changing x itself
\`\`\`

- \`&x\` means "take the address": where x lives
- \`*p\` means "dereference": go to that address and read (or modify) what lives there

The difference: a reference is an **alias** (safe, carefree, but bound for life); a pointer is an **address** (flexible, re-pointable, but possibly the empty address \`nullptr\` — handle with care). Rule of thumb: **prefer references**; use pointers only when you need "can be null / can retarget".

## How to write it

### Reference parameters (the most common use)

\`\`\`cpp
void swap(int& a, int& b) {   // parameters are aliases of the arguments
    int t = a; a = b; b = t;
}
int x = 3, y = 8;
swap(x, y);   // really swapped: x=8, y=3
\`\`\`

For read-only access to big objects (string, vector), use a const reference — no copy, no modification:

\`\`\`cpp
void print(const std::string& s) { std::cout << s << std::endl; }
\`\`\`

### Pointer basics

\`\`\`cpp
int x = 42;
int* p = &x;    // declare a pointer: type* name
std::cout << *p << std::endl;  // 42: read through the pointer
*p = 100;       // write through the pointer; x becomes 100
int* q = nullptr;  // a null pointer: points at "nothing"
\`\`\`

In declarations the \`*\` hugs the type (\`int* p\`); in use, \`*p\` means "fetch what lives at the address p records". Same symbol, two meanings, told apart by position.

### Heap memory: new / delete

A program's data lives in two places: the **stack** (managed automatically, reclaimed when the function ends) and the **heap** (you request it, you return it). Request with \`new\`, return with \`delete\`:

\`\`\`cpp
int* arr = new int[5];      // request space for 5 ints on the heap
arr[0] = 1;                 // use it like an array
delete[] arr;               // must return it, or the memory leaks
\`\`\`

Single objects use \`delete p\`; arrays use \`delete[] p\` — do not mix. Forgetting delete means the memory is not reclaimed until the program exits (a leak); deleting twice or using a deleted pointer may crash outright.

## Reading the example line by line

This lesson's example (reference params & pointer deref):

\`\`\`cpp
void swap(int& a, int& b) { int t = a; a = b; b = t; }
int x = 3, y = 8;
swap(x, y);                    // pass by reference: edits x and y themselves
std::cout << x << " " << y << std::endl;   // 8 3
int* p = &x;                   // p records x's address
std::cout << *p << std::endl;  // dereference: reads x's current value, 8
\`\`\`

- swap's parameters are \`int&\`, so a *is* x and b *is* y — the swap happens on the original variables
- \`&x\` puts x's address into p; \`*p\` follows the address back and reads x's current value, 8

## Common beginner mistakes

1. **Dereferencing a null pointer**: \`int* p = nullptr; std::cout << *p;\` is an immediate segmentation fault. Make sure a pointer targets valid memory before using it
2. **Forgetting delete (leak) or using after delete (dangling pointer)**: symptoms are ever-growing memory use or random crashes. new and delete come in pairs; setting the pointer to null after delete is a good habit
3. **Confusing \`*\` in declarations vs. use**: \`int* p, q;\` actually declares one pointer p — q is a plain int. Declare one pointer per line to stay safe
4. **Trying to rebind a reference**: \`int& r = x; r = y;\` does not "point r at y" — it assigns y's value into x. A reference is bound for life

## Summary

- A reference is an alias; a pointer is an address; both can affect the original variable
- Passing by value copies; use \`T&\` to modify the original, \`const T&\` for read-only big objects
- \`&\` takes an address; \`*\` dereferences; pointers may be nullptr
- new / delete manage heap memory manually — always return what you borrow

Next lesson we build on this with classes and objects — packaging data and operations into your own types.`,
      },
      examples: [
        {
          caption: { zh: '引用传参与指针解引用', en: 'Reference params & pointer deref' },
          code: '#include <iostream>\n\nvoid swap(int& a, int& b) { int t = a; a = b; b = t; }\n\nint main() {\n    int x = 3, y = 8;\n    swap(x, y);\n    std::cout << x << " " << y << std::endl;   // 8 3\n\n    int* p = &x;\n    std::cout << *p << std::endl;              // 8\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '用引用交换两个数', en: 'Swap via references' },
          prompt: {
            zh: '编写函数 \`void mySwap(int& a, int& b)\` 用引用交换两个整数。在 main 里令 \`a = 3\`、\`b = 8\`，交换后输出 \`8 3\`（空格分隔，一行）。',
            en: 'Write \`void mySwap(int& a, int& b)\` that swaps two ints via references. In main set \`a = 3\`, \`b = 8\`, swap, then print \`8 3\` (space-separated, one line).',
          },
          starter: '#include <iostream>\n\n// 在下面实现 mySwap\n\nint main() {\n    int a = 3, b = 8;\n    // 调用 mySwap 后输出\n    return 0;\n}\n',
          expectedOutput: '8 3\n',
          hints: [
            { zh: '要改到 main 里的变量，函数参数必须是「引用」而不是普通复制；交换时若直接把一个赋给另一个，先被赋值的那个值就丢了——需要谁来临时保存它？', en: 'To modify the variables in main, the parameters must be "references" rather than plain copies; in a swap, assigning one directly to the other clobbers the value that gets overwritten first — who should hold it temporarily?' },
            { zh: '语法：参数写作 \`int& a, int& b\`；函数体内三步：\`int t = a;\`、\`a = b;\`、\`b = t;\`。', en: 'Syntax: declare the parameters as \`int& a, int& b\`; the body is three steps: \`int t = a;\`, \`a = b;\`, \`b = t;\`.' },
            { zh: '调用 \`mySwap(a, b);\` 之后用 \`std::cout << a << " " << b << std::endl;\` 一行输出：两个数中间恰好一个空格，结果是 8 3。', en: 'After calling \`mySwap(a, b);\` print one line with \`std::cout << a << " " << b << std::endl;\` — exactly one space between the two numbers; the result is 8 3.' },
            { zh: '骨架：\`void mySwap(int& a, int& b) { int t = a; a = b; b = t; }\`，main 里 \`mySwap(a, b);\` 后 \`std::cout << a << " " << b << std::endl;\`。易错点：参数必须是 \`int& a\` 而不是 \`int a\`（传值只改副本）；三步赋值顺序的关键是 t 必须先备份；输出空格只能一个，多了少了都判未通过。', en: 'Skeleton: \`void mySwap(int& a, int& b) { int t = a; a = b; b = t; }\`; in main after \`mySwap(a, b);\` print \`std::cout << a << " " << b << std::endl;\`. Watch out: parameters are \`int& a\`, not \`int a\` (pass-by-value only mutates the copy); the three-step order hinges on backing up into t first; the gap between the two numbers is exactly one space — extra or missing spaces fail the judge.' },
            { zh: '完整参考：\`void mySwap(int& a, int& b) { int t = a; a = b; b = t; }\` 中交换两数；main 调用后用一条 \`std::cout << a << " " << b << std::endl;\` 把两个数空格分隔在一行输出，结果 8 3。注意交换与输出方向一致，先交换后输出，且只输出一行。', en: 'Reference: \`void mySwap(int& a, int& b) { int t = a; a = b; b = t; }\` performs the swap; after the call in main a single \`std::cout << a << " " << b << std::endl;\` prints the two numbers space-separated on one line, yielding 8 3. Mind the swap-then-print order, and only one line of output is allowed.' },
          ],
          solution: '#include <iostream>\n\nvoid mySwap(int& a, int& b) {\n    int t = a;\n    a = b;\n    b = t;\n}\n\nint main() {\n    int a = 3, b = 8;\n    mySwap(a, b);\n    std::cout << a << " " << b << std::endl;\n    return 0;\n}\n',
          solutionNote: { zh: 'mySwap 用引用参数 \`int& a, int& b\` 直接操作调用方的变量；函数体内用临时变量 t 中转，三步赋值完成交换；main 调用后用一条 cout 把 a 与 b 用空格串起来。关键点在于引用 vs 传值的差异（传值改不到调用方）、三步赋值的逻辑（t 先备份再覆盖），以及一行输出里空格数恰好为 1。也可以写成 \`std::swap(a, b)\` 一行，但本题要求自己实现 mySwap。', en: '`mySwap` takes reference parameters `int& a, int& b` so writes land directly on the caller variables; a temporary `t` acts as the middleman across three assignments, and main prints a and b space-separated on one line after the call. The key is the reference-vs-value distinction (pass-by-value leaves main untouched), the three-step order (`t` must capture the backup first), and that the gap in the one-line output is exactly one space. You can also write `std::swap(a, b)` in one line, but the prompt requires a hand-rolled `mySwap`.' },
        },
        {
          id: 'ex2',
          title: { zh: '动态数组与平方表', en: 'Dynamic array of squares' },
          prompt: {
            zh: '用 \`new int[5]\` 在堆上创建数组，填入 1~5 的平方，**每行一个**输出（1、4、9、16、25），最后 \`delete[]\` 释放。',
            en: 'Allocate an array with \`new int[5]\` on the heap, fill it with squares of 1..5, print them **one per line** (1, 4, 9, 16, 25), then free with \`delete[]\`.',
          },
          starter: '#include <iostream>\n\nint main() {\n    // 1) new int[5]  2) 填平方  3) 输出  4) delete[]\n    return 0;\n}\n',
          expectedOutput: '1\n4\n9\n16\n25\n',
          hints: [
            { zh: '堆上内存的使用规矩是四步：申请 → 填数据 → 使用 → 归还。注意数组下标从 0 开始：五个格子分别对应 1 到 5 中的哪几个数？', en: 'The discipline of heap memory is four steps: allocate, fill, use, give back. Note that array indices start at 0 — which numbers of 1 to 5 do the five slots correspond to?' },
            { zh: '语法：\`int* arr = new int[5];\` 申请内存；循环里 \`arr[i] = (i + 1) * (i + 1);\` 填平方；用完 \`delete[] arr;\` 归还，方括号不能丢。', en: 'Syntax: allocate with \`int* arr = new int[5];\`; fill squares in a loop with \`arr[i] = (i + 1) * (i + 1);\`; give the memory back with \`delete[] arr;\` — the brackets must not be dropped.' },
            { zh: '两个循环：先填（下标 0..4 依次存 1、4、9、16、25），再逐行输出；全部输出完成后才 delete[]。', en: 'Two loops: fill first (indices 0..4 holding 1, 4, 9, 16, 25 in order), then print one per line; call delete[] only after all printing is done.' },
            { zh: '骨架：\`int* arr = new int[5];\` 后 \`for (int i = 0; i < 5; i++) arr[i] = (i + 1) * (i + 1);\`，再一个循环 \`cout << arr[i];\`，最后 \`delete[] arr;\`。易错点：下标从 0 开始，所以第 i 个格子对应 \`i + 1\`（不是 i）；申请的是 \`int[5]\` 必须用 \`delete[]\` 配对释放，写成 \`delete\` 会触发未定义行为；释放前要确保所有输出已完成。', en: 'Skeleton: after \`int* arr = new int[5];\` run \`for (int i = 0; i < 5; i++) arr[i] = (i + 1) * (i + 1);\`, then a second loop \`cout << arr[i];\`, finally \`delete[] arr;\`. Watch out: indices start at 0 so slot i corresponds to \`i + 1\` (not i); a heap array allocated as \`int[5]\` must be freed with \`delete[]\`, and writing \`delete\` triggers undefined behavior; free only after every output has completed.' },
            { zh: '完整参考：\`int* arr = new int[5]; for (int i = 0; i < 5; i++) arr[i] = (i + 1) * (i + 1); for (int i = 0; i < 5; i++) std::cout << arr[i] << std::endl; delete[] arr;\`。下标 0..4 对应 1、2、3、4、5 的平方，结果五行分别是 1、4、9、16、25。', en: 'Reference: \`int* arr = new int[5]; for (int i = 0; i < 5; i++) arr[i] = (i + 1) * (i + 1); for (int i = 0; i < 5; i++) std::cout << arr[i] << std::endl; delete[] arr;\`. Indices 0..4 store the squares of 1, 2, 3, 4, 5, so the five output lines are 1, 4, 9, 16, 25.' },
          ],
          solution: '#include <iostream>\n\nint main() {\n    int* arr = new int[5];\n    for (int i = 0; i < 5; i++) {\n        arr[i] = (i + 1) * (i + 1);\n    }\n    for (int i = 0; i < 5; i++) {\n        std::cout << arr[i] << std::endl;\n    }\n    delete[] arr;\n    return 0;\n}\n',
          solutionNote: { zh: '用 \`new int[5]\` 在堆上申请五个 int 的内存，第一个循环按 \`(i + 1) * (i + 1)\` 写入 1..5 的平方，第二个循环逐行输出，最后用 \`delete[] arr\` 把内存归还。关键点在于「申请的是数组就必须用 \`delete[]\` 配对」——写成 \`delete\` 会触发未定义行为；下标 i 对应 \`i + 1\`（不是 i）；释放前所有输出必须完成。也可以改用 std::vector<int> 自动管理内存，省去手动 delete，但本题要求显式 new/delete 来练习堆内存用法。', en: '`new int[5]` claims a five-slot int block on the heap; the first loop writes `(i + 1) * (i + 1)` so slot i holds the square of i+1; the second loop prints one per line; `delete[] arr` returns the memory. The key is that an array allocated with `new[]` must be paired with `delete[]` — writing `delete` triggers undefined behavior; slot i maps to i+1 (not i); and all output must finish before the free. You can also use `std::vector<int>` to manage memory automatically and skip the manual delete, but the prompt asks for explicit `new`/`delete[]` to practice heap memory.' },
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

这节课学习**类与对象**：自定义新类型，把「数据」和「操作数据的方法」打包在一起。学完后你能造出 \`Rectangle\` 这样的自造类型，并理解封装、继承、多态三大特性。

## 类和对象是什么

**类**是「图纸」，**对象**是「照图纸造出来的实物」。类 \`Rectangle\` 定义了「每个矩形都有宽和高、都能算面积」；\`Rectangle r(3, 4)\` 则是按图纸造出一个具体的 3×4 矩形。一张图纸可以造任意多个实物。

这就像 \`int\` 是语言自带的类型，而**类是你自己发明的类型**——你可以规定它内部存什么（成员变量）、能干什么（成员函数）。

三个核心概念，先建立直觉：

- **封装**：数据锁进保险柜（\`private\`），只开放几个按钮（\`public\` 方法）给人用。外人不能伸手直接改数据，只能走正规入口，数据就不容易被改坏
- **继承**：子类白拿父类的家当再加自己的特长。\`Dog\` 继承 \`Animal\`，天生就会 Animal 的一切
- **多态**：同一句 \`p->speak()\`，p 指向谁就调用谁的版本——指向 Dog 就「汪」，指向 Cat 就「喵」，运行时才见分晓

## 怎么写

### 定义一个类

\`\`\`cpp
class Rectangle {
private:                  // 私有：只有类内部能碰
    double width, height;

public:                   // 公开：外部可用的接口
    Rectangle(double w, double h) : width(w), height(h) {}  // 构造函数

    double area() const { return width * height; }          // 成员函数
};
\`\`\`

规则要点：

1. \`class 名字 { ... };\` —— 注意**结尾的分号**，忘写是高频编译错误
2. \`private:\` / \`public:\` 是「访问权限」标签，影响它下面所有成员
3. **构造函数**：与类同名、无返回类型的特殊函数，对象出生时自动执行。参数表后的 \` : width(w), height(h)\` 叫**初始化列表**，把参数塞进成员
4. **成员函数**：写在类里的函数，用 \`.点\` 调用：\`r.area()\`
5. \`const\` 成员函数（\`double area() const\`）承诺「只读不改成员」，不修改成员的函数都该加

### 使用对象

\`\`\`cpp
Rectangle r(3, 4);       // 造对象（调用构造函数）
std::cout << r.area();   // 调用成员函数，输出 12
\`\`\`

对象用点 \`.\` 访问成员；如果拿到的是**指针**，则用箭头 \`->\`：

\`\`\`cpp
Rectangle* p = &r;
std::cout << p->area();  // 指针专用的箭头写法
\`\`\`

### 继承与多态

\`\`\`cpp
class Animal {
public:
    virtual std::string speak() const { return "..."; }  // virtual：允许子类改写
    virtual ~Animal() = default;      // 基类析构必须是 virtual
};

class Dog : public Animal {           // Dog 继承 Animal
public:
    std::string speak() const override { return "Woof"; }  // 重写
};

Animal* a = new Dog();
std::cout << a->speak();    // Woof：运行时看 a 实际指向谁
\`\`\`

- \`class Dog : public Animal\` 读作「Dog 是一种 Animal」
- 父类函数标 \`virtual\`，子类才能在运行时「顶替」它（多态的前提）
- 子类重写时加 \`override\`，拼错函数名编译器会报错提醒你
- 通过**基类指针**调用时，\`delete\` 前提是基类析构是 virtual，否则清理不完整

## 逐行读懂示例

本课示例里，\`Animal\` 构造函数接收名字存进成员 \`name\`；\`Dog\` 的构造函数委托父类：\`Dog(std::string n) : Animal(n) {}\`。主循环：

\`\`\`cpp
Animal* pets[] = { new Animal("Cat"), new Dog("Rex") };
for (Animal* p : pets) {
    std::cout << p->speak() << std::endl;
    delete p;
}
\`\`\`

- 数组里放的是**基类指针**，但各自指向不同类型的对象
- \`p->speak()\` 到底执行谁的版本，看 p 实际指向的对象——指向 Cat 输出 \`Cat makes a sound\`，指向 Dog 输出 \`Rex barks\`，这就是多态
- \`delete p\` 借助 virtual 析构正确清理每个对象

## 新手常犯的错误

1. **类定义结尾漏分号**：\`class X { ... }\` 后少了 \`;\`，报错常出现在**下一段代码**（如 \`expected unqualified-id\`），很迷惑。类结尾必须 \`};\`
2. **访问 private 成员**：\`r.width = 5;\` 在类外部非法，报 \`'double Rectangle::width' is private\`。要改数据，通过 public 的方法（如构造函数或 setter）
3. **构造函数名字写错或加了返回类型**：构造函数必须与类同名且不写返回类型，写了就变成普通函数，对象没法初始化
4. **多态忘了 virtual**：父类 \`speak()\` 没标 virtual 时，\`a->speak()\` 永远执行父类版本，重写不生效。要被重写的函数一律加 virtual，重写处加 override

## 小结

- 类 = 图纸（数据 + 方法），对象 = 按图纸造的实物
- private 藏数据、public 开接口，成员函数用 \`.\` 或 \`->\` 调用
- 构造函数负责出生初始化；初始化列表是最标准的写法
- 继承 + virtual + 基类指针 = 多态；override 防手滑

下一课学习「文件流」——把数据写进文件、再读回来。`,
        en: `## What you will learn

This lesson covers **classes and objects**: defining your own types that bundle "data" together with "the methods that operate on it". Afterwards you can build types like \`Rectangle\`, and understand the three pillars — encapsulation, inheritance, and polymorphism.

## What are classes and objects

A **class** is the *blueprint*; an **object** is a *thing built from it*. The class \`Rectangle\` says "every rectangle has a width and a height, and can compute its area"; \`Rectangle r(3, 4)\` builds one concrete 3×4 rectangle from that blueprint. One blueprint, any number of things.

\`int\` is a built-in type; a class is **a type you invent** — you decide what it stores inside (member variables) and what it can do (member functions).

Three core ideas, intuition first:

- **Encapsulation**: the data goes into a safe (with \`private\`), and only a few buttons are exposed (\`public\` methods). Outsiders cannot reach in and fiddle with the data directly; they must use the official entrances, so the data is hard to corrupt
- **Inheritance**: a subclass inherits the parent's estate and adds its own tricks. \`Dog\` inherits \`Animal\`, so it can do everything Animal does from birth
- **Polymorphism**: the same \`p->speak()\` calls whichever version p points at — a Dog barks, a Cat meows — decided at run time

## How to write it

### Defining a class

\`\`\`cpp
class Rectangle {
private:                  // private: only the class itself may touch
    double width, height;

public:                   // public: the interface for the outside
    Rectangle(double w, double h) : width(w), height(h) {}  // constructor

    double area() const { return width * height; }          // member function
};
\`\`\`

Rules to remember:

1. \`class Name { ... };\` — mind the **final semicolon**; forgetting it is a top-frequency compile error
2. \`private:\` / \`public:\` are access labels affecting everything below them
3. **Constructor**: a special function with the class's name and no return type, executed automatically when the object is born. The \` : width(w), height(h)\` after the parameter list is the **initializer list**, stuffing arguments into members
4. **Member functions**: functions declared inside the class, called with the dot: \`r.area()\`
5. A \`const\` member function (\`double area() const\`) promises "read-only, no member changes" — mark every non-mutating function const

### Using an object

\`\`\`cpp
Rectangle r(3, 4);       // build an object (invokes the constructor)
std::cout << r.area();   // call a member function, prints 12
\`\`\`

Objects access members with a dot \`.\`; if you hold a **pointer**, use the arrow \`->\`:

\`\`\`cpp
Rectangle* p = &r;
std::cout << p->area();  // the arrow syntax for pointers
\`\`\`

### Inheritance & polymorphism

\`\`\`cpp
class Animal {
public:
    virtual std::string speak() const { return "..."; }  // virtual: subclasses may override
    virtual ~Animal() = default;      // base destructor must be virtual
};

class Dog : public Animal {           // Dog inherits Animal
public:
    std::string speak() const override { return "Woof"; }  // override
};

Animal* a = new Dog();
std::cout << a->speak();    // Woof: depends on what a actually points at
\`\`\`

- Read \`class Dog : public Animal\` as "a Dog is-a Animal"
- Mark the parent function \`virtual\`, or the subclass cannot replace it at run time (the premise of polymorphism)
- Add \`override\` when overriding; a misspelled function name then becomes a compile error
- When deleting through a **base pointer**, the base destructor must be virtual or cleanup is incomplete

## Reading the example line by line

In this lesson's example, \`Animal\`'s constructor takes a name into the member \`name\`; \`Dog\`'s constructor delegates to the parent: \`Dog(std::string n) : Animal(n) {}\`. The main loop:

\`\`\`cpp
Animal* pets[] = { new Animal("Cat"), new Dog("Rex") };
for (Animal* p : pets) {
    std::cout << p->speak() << std::endl;
    delete p;
}
\`\`\`

- The array holds **base-class pointers**, each pointing at a different concrete type
- Which version \`p->speak()\` runs depends on what p actually points at — a Cat prints \`Cat makes a sound\`, a Dog prints \`Rex barks\`. That is polymorphism
- \`delete p\` cleans up each object correctly thanks to the virtual destructor

## Common beginner mistakes

1. **Missing semicolon after the class**: \`class X { ... }\` without \`;\` produces errors in the *following* code (e.g. \`expected unqualified-id\`), which is confusing. Classes always end with \`};\`
2. **Touching private members**: \`r.width = 5;\` outside the class is illegal — \`'double Rectangle::width' is private\`. Modify data through public methods (constructors or setters)
3. **Misspelled constructor or adding a return type**: constructors share the class name and have no return type; adding one turns it into an ordinary function and objects cannot initialize
4. **Forgetting virtual**: without \`virtual\` on the parent's \`speak()\`, \`a->speak()\` always runs the parent version and overrides do nothing. Mark overridable functions virtual, and mark overrides with \`override\`

## Summary

- A class = blueprint (data + methods); an object = a thing built from it
- private hides data, public exposes interfaces; call members with \`.\` or \`->\`
- Constructors handle birth; the initializer list is the standard way
- Inheritance + virtual + base pointers = polymorphism; override guards against slips

Next lesson: file streams — writing data into files and reading it back.`,
      },
      examples: [
        {
          caption: { zh: '类、继承与多态', en: 'Class, inheritance, polymorphism' },
          code: '#include <iostream>\n#include <string>\n\nclass Animal {\npublic:\n    Animal(std::string n) : name(n) {}\n    virtual std::string speak() const { return name + " makes a sound"; }\n    virtual ~Animal() = default;\nprotected:\n    std::string name;\n};\n\nclass Dog : public Animal {\npublic:\n    Dog(std::string n) : Animal(n) {}\n    std::string speak() const override { return name + " barks"; }\n};\n\nint main() {\n    Animal* pets[] = { new Animal("Cat"), new Dog("Rex") };\n    for (Animal* p : pets) {\n        std::cout << p->speak() << std::endl;\n        delete p;\n    }\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '矩形类', en: 'Rectangle class' },
          prompt: {
            zh: '定义类 \`Rectangle\`（私有成员 \`width\`、\`height\`，构造函数，\`area()\` 和 \`perimeter()\`）。创建 \`Rectangle(3, 4)\`，**每行一个**输出面积和周长。',
            en: 'Define a \`Rectangle\` class (private \`width\`, \`height\`; constructor; \`area()\` and \`perimeter()\`). Create \`Rectangle(3, 4)\` and print the area and perimeter, **one per line**.',
          },
          starter: '#include <iostream>\n\nclass Rectangle {\n    // 在下面实现：私有成员、构造函数、area、perimeter\n};\n\nint main() {\n    Rectangle r(3, 4);\n    // 输出面积和周长\n    return 0;\n}\n',
          expectedOutput: '12\n14\n',
          hints: [
            { zh: '一个类要能「记住」宽和高（成员变量），「出生时」就被赋好值（构造函数），并对外提供两个计算动作（成员函数）。面积和周长的公式分别是什么？', en: 'The class must "remember" width and height (member variables), be initialized "at birth" (constructor), and offer two actions that compute results (member functions). What are the formulas for area and perimeter?' },
            { zh: '语法：\`Rectangle(int w, int h) : width(w), height(h) {}\` 用初始化列表；成员函数写成 \`int area() const { return width * height; }\`。', en: 'Syntax: use the initializer list \`Rectangle(int w, int h) : width(w), height(h) {}\`; write the member function as \`int area() const { return width * height; }\`.' },
            { zh: '周长 = \`2 * (width + height)\`。创建 \`Rectangle r(3, 4);\` 后分两行输出 \`r.area()\` 与 \`r.perimeter()\`，即 12 和 14。', en: 'Perimeter = \`2 * (width + height)\`. After creating \`Rectangle r(3, 4);\` print \`r.area()\` and \`r.perimeter()\` on two lines — 12 then 14.' },
            { zh: '骨架：\`class Rectangle { private: int width, height; public: Rectangle(int w, int h) : width(w), height(h) {} int area() const { return width * height; } int perimeter() const { return 2 * (width + height); } };\`，main 里 \`Rectangle r(3, 4); cout << r.area(); cout << r.perimeter();\`。易错点：成员变量必须用 private（题目要求），初始化列表里 \`width(w)\` 的顺序不能写反；成员函数后加 \`const\` 表示不会修改成员；cout 里只放表达式，不夹引号或符号。', en: 'Skeleton: \`class Rectangle { private: int width, height; public: Rectangle(int w, int h) : width(w), height(h) {} int area() const { return width * height; } int perimeter() const { return 2 * (width + height); } };\`, then \`Rectangle r(3, 4); cout << r.area(); cout << r.perimeter();\` in main. Watch out: members must be private (per the prompt); the initializer list order \`width(w)\` must not be reversed; member functions are tagged \`const\` to mark that they do not mutate members; cout only emits the expression, no quoted label.' },
            { zh: '完整参考：\`class Rectangle { private: int width, height; public: Rectangle(int w, int h) : width(w), height(h) {} int area() const { return width * height; } int perimeter() const { return 2 * (width + height); } };\`，main 里 \`Rectangle r(3, 4); std::cout << r.area() << std::endl; std::cout << r.perimeter() << std::endl;\`。结果分两行：12 和 14，对应面积和周长。', en: 'Reference: \`class Rectangle { private: int width, height; public: Rectangle(int w, int h) : width(w), height(h) {} int area() const { return width * height; } int perimeter() const { return 2 * (width + height); } };\` followed in main by \`Rectangle r(3, 4); std::cout << r.area() << std::endl; std::cout << r.perimeter() << std::endl;\`. The two output lines are 12 and 14 — area first, then perimeter.' },
          ],
          solution: '#include <iostream>\n\nclass Rectangle {\nprivate:\n    int width, height;\npublic:\n    Rectangle(int w, int h) : width(w), height(h) {}\n\n    int area() const { return width * height; }\n    int perimeter() const { return 2 * (width + height); }\n};\n\nint main() {\n    Rectangle r(3, 4);\n    std::cout << r.area() << std::endl;\n    std::cout << r.perimeter() << std::endl;\n    return 0;\n}\n',
          solutionNote: { zh: '把 Rectangle 设计成「数据 + 操作」的封装：私有成员 width 和 height 通过构造函数的初始化列表被赋值，\`area()\` 与 \`perimeter()\` 作为只读成员函数返回计算结果；main 里创建对象后逐行调用两个成员函数即可。关键点在于「私有成员 + 公开接口」的封装模式、初始化列表用法、const 成员函数表示不修改成员。也可以把成员设为 public 简化写法，但题目明确要求私有，封装更规范。', en: '`Rectangle` is built as a "data + operations" package: the private members `width` and `height` are set through the constructor initializer list, and `area()` / `perimeter()` are read-only member functions returning the computed values; main just constructs an object and calls both members line by line. The key is the "private members + public interface" encapsulation pattern, the initializer list syntax, and the `const` qualifier marking read-only member functions. You could mark the members public for a shorter write-up, but the prompt explicitly requires private members, which is the more disciplined style.' },
        },
        {
          id: 'ex2',
          title: { zh: '动物多态', en: 'Animal polymorphism' },
          prompt: {
            zh: '定义基类 \`Animal\`（构造接收名字 name，\`virtual std::string speak() const\` 默认返回 \`名字 + " makes a sound"\`），派生类 \`Dog\` 重写为 \`名字 + " barks"\`。用基类指针数组存放 \`Animal("Cat")\` 和 \`Dog("Rex")\`，依次调用 \`speak()\` 输出（每行一个，注意用完 delete）。',
            en: 'Define base class \`Animal\` (constructor takes name; \`virtual std::string speak() const\` returning \`name + " makes a sound"\`) and derived class `Dog` overriding with \`name + " barks"\`. Store an \`Animal("Cat")\` and a \`Dog("Rex")\` in a base-pointer array and call \`speak()\` on each (one per line; remember to delete).',
          },
          starter: '#include <iostream>\n#include <string>\n\n// 在下面定义 Animal 和 Dog\n\nint main() {\n    // 用基类指针数组 + 多态输出两行\n    return 0;\n}\n',
          expectedOutput: 'Cat makes a sound\nRex barks\n',
          hints: [
            { zh: '多态三件套：基类的「说话」函数要能被改写，派生类给出自己的版本，再统一用基类指针去调用——运行时每个对象表现出自己的行为。基类还需要记住「名字」这个成员。', en: 'Polymorphism needs three pieces: the base "speak" function must be overridable, the derived class provides its own version, and everything is called uniformly through base pointers — each object then shows its own behavior at run time. The base also needs to remember a "name" member.' },
            { zh: '语法：基类写 \`virtual std::string speak() const;\`；派生类用 \`std::string speak() const override\` 重写；派生构造 \`Dog(std::string n) : Animal(n) {}\` 要把名字传给基类。', en: 'Syntax: declare \`virtual std::string speak() const;\` in the base; override in the derived class as \`std::string speak() const override\`; the derived constructor \`Dog(std::string n) : Animal(n) {}\` forwards the name to the base.' },
            { zh: '基类析构写 \`virtual ~Animal() = default;\`；main 里 \`Animal* pets[] = { new Animal("Cat"), new Dog("Rex") };\`，循环输出 \`p->speak()\` 后 \`delete p\`。两行必须是 \`Cat makes a sound\` 和 \`Rex barks\`，大小写、空格逐字符一致。', en: 'Give the base \`virtual ~Animal() = default;\`; in main use \`Animal* pets[] = { new Animal("Cat"), new Dog("Rex") };\`, loop printing \`p->speak()\` then \`delete p\`. The two lines must be \`Cat makes a sound\` and \`Rex barks\`, character-exact including case and spaces.' },
            { zh: '骨架：\`class Animal { public: Animal(string n) : name(n) {} virtual string speak() const { return name + " makes a sound"; } virtual ~Animal() = default; protected: string name; };\`，派生类 \`class Dog : public Animal { public: Dog(string n) : Animal(n) {} string speak() const override { return name + " barks"; } };\`，main 里 \`Animal* pets[] = { new Animal("Cat"), new Dog("Rex") };\` 循环输出与 delete。易错点：基类 \`speak\` 必须 \`virtual\`、派生类必须 \`override\`；基类析构也要 \`virtual\`；指针数组里 new 出来的对象必须逐个 delete；字符串拼接必须用 \`+\`，空格数与拼写逐字符一致。', en: 'Skeleton: \`class Animal { public: Animal(string n) : name(n) {} virtual string speak() const { return name + " makes a sound"; } virtual ~Animal() = default; protected: string name; };\`, derived \`class Dog : public Animal { public: Dog(string n) : Animal(n) {} string speak() const override { return name + " barks"; } };\`, and main uses \`Animal* pets[] = { new Animal("Cat"), new Dog("Rex") };\` with a print-and-delete loop. Watch out: the base \`speak\` must be \`virtual\` and the derived must \`override\`; the base destructor must also be \`virtual\`; each `new`-ed object in the pointer array must be `delete`-d; string concatenation uses \`+\`; the exact spacing and spelling must match the task.' },
            { zh: '完整参考：基类 Animal 含构造函数与 \`virtual string speak() const\` 默认实现，派生 Dog 用 \`override\` 重写为 \`name + " barks"\`；main 里 \`Animal* pets[] = { new Animal("Cat"), new Dog("Rex") };\`、循环 \`cout << p->speak() << endl; delete p;\`。两行分别是 Cat makes a sound 与 Rex barks。', en: 'Reference: base `Animal` carries a constructor and a `virtual string speak() const` default implementation; derived `Dog` overrides it with `name + " barks"`; main builds `Animal* pets[] = { new Animal("Cat"), new Dog("Rex") };` and loops `cout << p->speak() << endl; delete p;`. The two lines are `Cat makes a sound` and `Rex barks`.' },
          ],
          solution: '#include <iostream>\n#include <string>\n\nclass Animal {\npublic:\n    Animal(std::string n) : name(n) {}\n    virtual std::string speak() const { return name + " makes a sound"; }\n    virtual ~Animal() = default;\nprotected:\n    std::string name;\n};\n\nclass Dog : public Animal {\npublic:\n    Dog(std::string n) : Animal(n) {}\n    std::string speak() const override { return name + " barks"; }\n};\n\nint main() {\n    Animal* pets[] = { new Animal("Cat"), new Dog("Rex") };\n    for (Animal* p : pets) {\n        std::cout << p->speak() << std::endl;\n        delete p;\n    }\n    return 0;\n}\n',
          solutionNote: { zh: '多态三件套齐活：基类 Animal 的 speak 标 virtual 给默认行为、派生 Dog 用 override 重写为自定义版本，再统一用基类指针数组遍历调用；指针数组里 new 出来的对象每个都要 delete 避免内存泄漏。关键点在于 virtual / override 缺一不可、基类析构也要 virtual（否则 delete 时可能切错类型）、字符串拼接里空格数与拼写必须与题目逐字符一致。也可以用 std::unique_ptr<Animal> 自动管理生命周期，免去手动 delete，但本题显式考察多态与资源管理。', en: 'The three-piece polymorphism kit is in place: base `Animal` marks `speak` as `virtual` for default behavior; derived `Dog` uses `override` for its own version; a base-pointer array calls everything uniformly; every `new`-ed object gets `delete`-d to avoid leaks. The key is that `virtual` and `override` cannot be skipped; the base destructor must also be `virtual` (otherwise `delete` may slice to the wrong type); the string concatenation must match the task spacing and spelling character for character. You can also use `std::unique_ptr<Animal>` for automatic lifetime management and skip manual `delete`, but the task explicitly practices polymorphism together with manual resource management.' },
        },
      ],
    },

    // ================= 11. 文件流 =================
    {
      id: 'files',
      title: { zh: '文件流', en: 'File Streams' },
      difficulty: 3,
      lecture: {
        zh: `## 这节课学什么

这节课学习**文件流**：把数据写进硬盘上的文件、再原样读回来。学完后你的程序就拥有了「记忆」——关掉程序数据也不丢。

## 文件流是什么

到目前为止，你的数据都活在内存里：程序一结束，cout 打印过的东西、变量里的值全部消失。文件是硬盘上的永久存储，**程序退出后依然存在**。

C++ 读写文件的方式出奇地眼熟：**文件流对象用起来和 cout / cin 一模一样**，只是目的地从「屏幕 / 键盘」换成了「文件」：

- \`std::ofstream\`（output file stream）：往文件**写**——它是「文件版 cout」
- \`std::ifstream\`（input file stream）：从文件**读**——它是「文件版 cin」
- \`std::fstream\`：既能读又能写

三者都住在 \`<fstream>\` 头文件里。想象文件是水箱：ofstream 往里灌水，ifstream 从里抽水。

## 怎么写

### 写文件：ofstream

\`\`\`cpp
#include <fstream>

std::ofstream out("note.txt");   // 打开（不存在则创建）文件
out << "first line" << std::endl;   // 像用 cout 一样用 out
out << "second line" << std::endl;
out.close();                     // 关闭
\`\`\`

- \`std::ofstream out("note.txt")\`：创建 out 的同时打开文件；文件不存在会**自动新建**，已存在会被**清空重写**
- 写入用 \`out << ...\`，和 cout 语法完全一致
- \`out.close()\` 关闭文件；就算忘了写，out 离开作用域时（析构函数）也会自动关闭

### 读文件：ifstream + getline

\`\`\`cpp
std::ifstream in("note.txt");   // 打开文件准备读
std::string line;
while (std::getline(in, line)) {  // 每次读一整行
    std::cout << line << std::endl;
}
\`\`\`

- \`std::getline(流, 字符串)\`：从流里读**一行**（不含换行符）存进 line；读到文件尾再读就失败
- getline 的返回值就是流本身，可以直接当 while 条件用：**读成功继续循环，读失败（到文件尾）结束**——这是最标准的逐行读取套路

### 检查打开是否成功

文件可能不存在、或没有权限，打开会失败。养成先检查的习惯：

\`\`\`cpp
std::ifstream in("missing.txt");
if (!in) {
    std::cout << "cannot open file";
}
\`\`\`

### getline 与 >> 的区别

\`\`\`cpp
std::getline(in, line);   // 读一整行，空格也在内
in >> word;                // 只读一个「词」：遇到空白（空格/换行）就停
\`\`\`

读带空格的文本用 getline；读一串数字 / 单词用 \`>>\`。

## 逐行读懂示例

本课示例（写入再读回）：

\`\`\`cpp
{
    std::ofstream out("demo.txt");
    out << "apple" << std::endl;
    out << "banana" << std::endl;
}   // out 在这里离开作用域，文件自动关闭

std::ifstream in("demo.txt");
std::string line;
while (std::getline(in, line)) {
    std::cout << line << std::endl;
}
\`\`\`

- 一对多余的花括号圈住写入段：让 out **提前结束生命**并关闭文件，确保后面的读取能读到完整内容
- 写入两行后，读取循环每轮取一行打印，输出 \`apple\` 和 \`banana\`
- 循环条件 \`std::getline(in, line)\` 在读完最后一行后再读会失败，循环自然停止

## 新手常犯的错误

1. **写完没关文件就去读**：写操作可能还躺在缓冲区没落盘。像示例那样用 \`{\` \`}\` 圈住写入段，或显式 \`out.close()\`
2. **打开失败不检查**：\`std::ifstream in("no_such.txt")\` 不会报编译错误，之后 getline 全部失败、循环一次都不进。先 \`if (!in)\` 判断
3. **以为 ofstream 会「追加」**：默认模式是**清空重写**，第二次运行程序旧内容就没了。想追加要在打开时加模式：\`std::ofstream out("log.txt", std::ios::app);\`
4. **\`in >> word\` 后立刻 getline 混用**：\`>>\` 会把换行符留在流里，紧跟着的 getline 会读到一个「空行」。先用 \`in.ignore()\` 跳过残留换行

## 小结

- ofstream 写、ifstream 读，用法和 cout / cin 如出一辙
- \`getline(流, 行)\` 逐行读；返回值直接当 while 条件
- 打开文件先 \`if (!in)\` 检查；默认写模式是覆盖，追加用 \`std::ios::app\`
- 离开作用域自动关文件，但顺序很重要：先写完再读

到这里 C++ 入门 11 课全部完成——你已经能写带输入输出、函数、容器和面向对象的完整程序了。`,
        en: `## What you will learn

This lesson covers **file streams**: writing data into files on disk and reading it back. Afterwards your program gains "memory" — the data survives even after the program exits.

## What is a file stream

So far your data lived in memory: when the program ends, everything printed to cout and every variable vanishes. A file is permanent storage on disk that **persists after the program exits**.

Reading and writing files in C++ looks strikingly familiar: **file stream objects behave exactly like cout / cin**, only the destination changes from "screen / keyboard" to "file":

- \`std::ofstream\` (output file stream): **writes** to files — "cout for files"
- \`std::ifstream\` (input file stream): **reads** from files — "cin for files"
- \`std::fstream\`: reads and writes

All three live in the \`<fstream>\` header. Picture a file as a tank: ofstream pumps water in, ifstream draws it out.

## How to write it

### Writing files: ofstream

\`\`\`cpp
#include <fstream>

std::ofstream out("note.txt");   // opens (creates if missing) the file
out << "first line" << std::endl;   // use out exactly like cout
out << "second line" << std::endl;
out.close();                     // close
\`\`\`

- \`std::ofstream out("note.txt")\`: opens the file while constructing out; a missing file is **created automatically**, an existing one is **truncated**
- Writing uses \`out << ...\`, identical to cout syntax
- \`out.close()\` closes the file; even if you forget, out closes itself when it leaves scope (its destructor)

### Reading files: ifstream + getline

\`\`\`cpp
std::ifstream in("note.txt");   // open for reading
std::string line;
while (std::getline(in, line)) {  // one whole line per call
    std::cout << line << std::endl;
}
\`\`\`

- \`std::getline(stream, string)\`: reads **one line** (without the newline) into line; a read past the end of file fails
- getline returns the stream itself, which works directly as the while condition: **keep looping while reads succeed, stop when one fails (end of file)** — the standard line-by-line idiom

### Checking whether the open succeeded

The file may not exist or may be unreadable; the open then fails. Check first, always:

\`\`\`cpp
std::ifstream in("missing.txt");
if (!in) {
    std::cout << "cannot open file";
}
\`\`\`

### getline vs >>

\`\`\`cpp
std::getline(in, line);   // reads a whole line, spaces included
in >> word;                // reads one "word": stops at any whitespace
\`\`\`

Use getline for text with spaces; use \`>>\` for numbers or single words.

## Reading the example line by line

This lesson's example (write then read back):

\`\`\`cpp
{
    std::ofstream out("demo.txt");
    out << "apple" << std::endl;
    out << "banana" << std::endl;
}   // out leaves scope here; the file closes automatically

std::ifstream in("demo.txt");
std::string line;
while (std::getline(in, line)) {
    std::cout << line << std::endl;
}
\`\`\`

- The extra pair of braces wraps the writing phase: out **ends its life early** and closes the file, guaranteeing the later read sees the full content
- After writing two lines, the read loop prints one line per round: \`apple\` then \`banana\`
- The loop condition \`std::getline(in, line)\` fails on the read after the last line, ending the loop naturally

## Common beginner mistakes

1. **Reading before the write is closed**: written data may still sit in the buffer, not yet on disk. Wrap the writing phase in \`{ }\` like the example, or call \`out.close()\` explicitly
2. **Not checking the open**: \`std::ifstream in("no_such.txt")\` produces no compile error; every getline then fails and the loop never runs. Test with \`if (!in)\` first
3. **Assuming ofstream appends**: the default mode **truncates and rewrites** — running the program again wipes the old content. To append, pass a mode: \`std::ofstream out("log.txt", std::ios::app);\`
4. **Mixing \`in >> word\` with getline**: \`>>\` leaves the newline in the stream, so a getline right after reads an "empty line". Clear the leftover newline with \`in.ignore()\`

## Summary

- ofstream writes, ifstream reads, both used just like cout / cin
- \`getline(stream, line)\` reads line by line; its return value doubles as the loop condition
- Check opens with \`if (!in)\`; the default write mode truncates, \`std::ios::app\` appends
- Streams close automatically at scope exit — but order matters: finish writing first

That completes all 11 beginner lessons — you can now write complete programs with I/O, functions, containers, and object orientation.`,
      },
      examples: [
        {
          caption: { zh: '写入再读回', en: 'Write then read back' },
          code: '#include <fstream>\n#include <iostream>\n#include <string>\n\nint main() {\n    {\n        std::ofstream out("demo.txt");\n        out << "apple" << std::endl;\n        out << "banana" << std::endl;\n    }\n    std::ifstream in("demo.txt");\n    std::string line;\n    while (std::getline(in, line)) {\n        std::cout << line << std::endl;\n    }\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '写入并读回', en: 'Write and read back' },
          prompt: {
            zh: '用 \`std::ofstream\` 把 \`Hello File\` 写入 \`test.txt\`，再用 \`std::ifstream\` + \`getline\` 读出。**两行输出**：第一行是文件内容 \`Hello File\`，第二行是 \`lines: 1\`（行数）。',
            en: 'Write \`Hello File\` into \`test.txt\` with \`std::ofstream\`, then read it back with \`std::ifstream\` + \`getline\`. Output **two lines**: the content \`Hello File\`, then \`lines: 1\` (the line count).',
          },
          starter: '#include <fstream>\n#include <iostream>\n#include <string>\n\nint main() {\n    // 1) 写入 test.txt  2) 读回  3) 输出内容与行数\n    return 0;\n}\n',
          expectedOutput: 'Hello File\nlines: 1\n',
          hints: [
            { zh: '分两个阶段：先打开文件写入内容并关闭，再重新打开读回来。读的时候用「每次读一行」的循环，行数计数器在循环里累加。', en: 'Two phases: open the file, write the content, and close it; then reopen and read it back. While reading, use a "one line per round" loop, and let a line counter accumulate inside it.' },
            { zh: '语法：\`std::ofstream out("test.txt"); out << "Hello File";\` 写入；\`std::ifstream in("test.txt");\` 读回，循环 \`while (std::getline(in, line)) lines++;\`。', en: 'Syntax: write with \`std::ofstream out("test.txt"); out << "Hello File";\`; read back with \`std::ifstream in("test.txt");\` looping \`while (std::getline(in, line)) lines++;\`.' },
            { zh: '写入时不要换行（保持一行）；读回循环里把首行内容存进变量、每轮计数加 1；最后两行输出：文件内容和 \`"lines: " << lines\`（注意冒号后恰好一个空格）。', en: 'Write without a newline so it stays one line; in the read loop save the first line into a variable and increment the counter each round; finally print two lines: the content, then \`"lines: " << lines\` (note the single space after the colon).' },
            { zh: '骨架：先 \`{ std::ofstream out("test.txt"); out << "Hello File"; }\` 写入并离开作用域关闭文件，再 \`std::ifstream in("test.txt"); std::string content, line; int lines = 0; while (getline(in, line)) { if (lines == 0) content = line; lines++; }\`，最后两行 cout 输出 content 和 \`"lines: " << lines\`。易错点：写入时不加 \`endl\` 以保持一行；ifstream 默认以文本模式打开；冒号后空格只能一个；首行内容要单独保存，因为 lines 递增后再读不到首行。', en: 'Skeleton: first \`{ std::ofstream out("test.txt"); out << "Hello File"; }\` writes and closes by going out of scope, then \`std::ifstream in("test.txt"); std::string content, line; int lines = 0; while (getline(in, line)) { if (lines == 0) content = line; lines++; }\` reads back, finally two cout lines for content and \`"lines: " << lines\`. Watch out: writing must skip \`endl\` to stay one line; ifstream opens in text mode by default; the colon must be followed by exactly one space; the first line must be saved into content because lines keeps incrementing and the first line is only seen once.' },
            { zh: '完整参考：\`{ std::ofstream out("test.txt"); out << "Hello File"; } std::ifstream in("test.txt"); std::string content, line; int lines = 0; while (std::getline(in, line)) { if (lines == 0) content = line; lines++; } std::cout << content << std::endl; std::cout << "lines: " << lines << std::endl;\`。两行输出分别是文件内容与 \`lines: 1\`，冒号后空格恰好一个。', en: 'Reference: \`{ std::ofstream out("test.txt"); out << "Hello File"; } std::ifstream in("test.txt"); std::string content, line; int lines = 0; while (std::getline(in, line)) { if (lines == 0) content = line; lines++; } std::cout << content << std::endl; std::cout << "lines: " << lines << std::endl;\`. The two output lines are the file content followed by `lines: 1`, with exactly one space after the colon.' },
          ],
          solution: '#include <fstream>\n#include <iostream>\n#include <string>\n\nint main() {\n    {\n        std::ofstream out("test.txt");\n        out << "Hello File";\n    }\n\n    std::ifstream in("test.txt");\n    std::string content;\n    std::string line;\n    int lines = 0;\n    while (std::getline(in, line)) {\n        if (lines == 0) content = line;\n        lines++;\n    }\n\n    std::cout << content << std::endl;\n    std::cout << "lines: " << lines << std::endl;\n    return 0;\n}\n',
          solutionNote: { zh: '两阶段做法：第一阶段在单独作用域里打开 ofstream 写入并离开作用域自动关闭文件，第二阶段 ifstream 重新打开读回，用 getline 边读边数行数；读到的同时把首行内容另存到一个变量里。关键点在于写入时不能加 endl（否则文件会有两行、读回来 lines 就不是 1），以及首行内容必须专门存下来（lines 累加后无法再回到第一行）。也可以省掉 content 变量、直接在 lines == 0 时记录指针，但写法不够更直接。', en: 'Two-phase approach: the first phase opens an `ofstream` in its own scope to write and closes automatically when the scope ends; the second phase reopens the file with `ifstream` and uses `getline` to walk line by line while counting; the first line content is captured into a separate variable while reading. The key is not adding `endl` while writing (otherwise the file has two lines and the count is not 1), and stashing the first line content separately (once `lines` has incremented there is no going back). You can also drop the `content` variable and remember the pointer when `lines == 0`, but that is less direct.' },
        },
        {
          id: 'ex2',
          title: { zh: '统计行数与字符数', en: 'Count lines and characters' },
          prompt: {
            zh: '把三行 \`apple\`、\`banana\`、\`cherry\` 写入 \`fruits.txt\`，再读回并输出：总行数 \`3\` 和总字符数 \`17\`（不含换行符），**每行一个**。',
            en: 'Write the three lines \`apple\`, \`banana\`, \`cherry\` to \`fruits.txt\`, read it back, and print the line count \`3\` and total character count \`17\` (excluding newlines), **one per line**.',
          },
          starter: '#include <fstream>\n#include <iostream>\n#include <string>\n\nint main() {\n    // 写入 → 读回 → 统计行数与字符数\n    return 0;\n}\n',
          expectedOutput: '3\n17\n',
          hints: [
            { zh: '先把三个水果各写一行，再逐行读回。行数和字符数两个统计量，可以在同一个读循环里一并完成——每读一行，行数加多少？字符数加多少（注意：读回来的内容含换行符吗）？', en: 'Write the three fruits one per line first, then read back line by line. Both statistics — line count and character count — can be gathered in the same reading loop: per line read, what does the line count grow by, and the character count (note: does a line read back include the newline?).' },
            { zh: '语法：循环体内 \`lines++;\` 且 \`chars += line.size();\`——\`size()\` 不含换行符，正好符合「不含换行」的要求。', en: 'Syntax: inside the loop, \`lines++;\` and \`chars += line.size();\` — \`size()\` excludes the newline, which matches the "excluding newlines" requirement exactly.' },
            { zh: '写入时每个水果后接一次换行；读回循环里同时累加两个计数；最后分两行输出 lines 和 chars（3 和 17）。', en: 'Write each fruit followed by one newline; accumulate both counters in the read loop; finally print lines then chars on two lines (3 and 17).' },
            { zh: '骨架：\`{ std::ofstream out("fruits.txt"); out << "apple" << endl; out << "banana" << endl; out << "cherry" << endl; } std::ifstream in("fruits.txt"); int lines = 0, chars = 0; std::string line; while (getline(in, line)) { lines++; chars += line.size(); } cout << lines; cout << chars;\`。易错点：写入时每个水果后必须接一次 endl，文件才有三行；\`line.size()\` 是字符数但不包含换行符，正符合「不含换行」的要求；不要把 \`chars += line.size() + 1\`（那样会多算换行）；输出顺序是 lines 先、chars 后。', en: 'Skeleton: \`{ std::ofstream out("fruits.txt"); out << "apple" << endl; out << "banana" << endl; out << "cherry" << endl; } std::ifstream in("fruits.txt"); int lines = 0, chars = 0; std::string line; while (getline(in, line)) { lines++; chars += line.size(); } cout << lines; cout << chars;\`. Watch out: every fruit must be followed by one endl during writing or the file has fewer than three lines; \`line.size()\` counts characters but not the newline, which exactly matches the "excluding newlines" requirement; do not write \`chars += line.size() + 1\` (that would over-count newlines); print lines first, then chars.' },
            { zh: '完整参考：\`{ std::ofstream out("fruits.txt"); out << "apple" << endl; out << "banana" << endl; out << "cherry" << endl; } std::ifstream in("fruits.txt"); std::string line; int lines = 0, chars = 0; while (std::getline(in, line)) { lines++; chars += (int)line.size(); } std::cout << lines << endl; std::cout << chars << endl;\`。三行写入后读回，lines = 3，chars = 5+6+6 = 17。', en: 'Reference: \`{ std::ofstream out("fruits.txt"); out << "apple" << endl; out << "banana" << endl; out << "cherry" << endl; } std::ifstream in("fruits.txt"); std::string line; int lines = 0, chars = 0; while (std::getline(in, line)) { lines++; chars += (int)line.size(); } std::cout << lines << endl; std::cout << chars << endl;\`. After writing three lines and reading back, lines = 3 and chars = 5 + 6 + 6 = 17.' },
          ],
          solution: '#include <fstream>\n#include <iostream>\n#include <string>\n\nint main() {\n    {\n        std::ofstream out("fruits.txt");\n        out << "apple" << std::endl;\n        out << "banana" << std::endl;\n        out << "cherry" << std::endl;\n    }\n\n    std::ifstream in("fruits.txt");\n    std::string line;\n    int lines = 0, chars = 0;\n    while (std::getline(in, line)) {\n        lines++;\n        chars += static_cast<int>(line.size());\n    }\n\n    std::cout << lines << std::endl;\n    std::cout << chars << std::endl;\n    return 0;\n}\n',
          solutionNote: { zh: '先在单独作用域里用 ofstream 把三个水果分行写入 fruits.txt（每个水果后接 endl），离开作用域自动关闭；再用 ifstream 配合 getline 一行行读回来，在循环里同时累加 lines 与 chars。关键点在于 getline 读到的 line 不含换行符，所以 line.size() 直接就是「不含换行」的字符数，无需再 -1；输出顺序是 lines 先、chars 后，差一项都判未通过。也可以改用 std::istreambuf_iterator 一次性读全文按字符数统计，但 getline 更直观，也方便复用 lines 计数。', en: 'First an `ofstream` in its own scope writes the three fruits line by line (each followed by `endl`) and closes automatically when the scope ends; then an `ifstream` paired with `getline` reads line by line, accumulating both `lines` and `chars` in the same loop. The key is that `getline` strips the newline, so `line.size()` is already the "no-newline" character count with no need to subtract 1; the print order is lines first then chars — missing either value fails the check. You can also switch to `std::istreambuf_iterator` to read the whole file at once for character counting, but `getline` is more intuitive and conveniently reuses the lines counter.' },
        },
      ],
    },

  ],
};
