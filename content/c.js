// c.js — C 语言学习内容（11 知识点 × 2 题双语）
// Schema 说明见 tools/check_i18n.mjs；所有 expectedOutput 已通过 Godbolt 在线实测验证（gcc 12.3）。
export default {
  id: 'c',
  name: 'C',
  description: {
    zh: '现代主流系统级编程语言，性能极致、控制力极强，是理解操作系统与编译器的入门钥匙。',
    en: 'A mainstream systems language with ultimate performance and low-level control — the gateway to operating systems and compilers.',
  },
  engine: { compiler: 'cg123' },
  fileName: 'main.c',
  playgroundStarter: '#include <stdio.h>\n\nint main(void) {\n    printf("Hello, C!\\n");\n    return 0;\n}\n',
  entryNote: {
    zh: 'gcc main.c -o main && ./main',
    en: 'gcc main.c -o main && ./main',
  },
  localGuide: {
    zh: 'gcc main.c -o main && ./main',
    en: 'gcc main.c -o main && ./main',
  },
  topics: [
    // ================= 1. Hello World =================
    {
      id: 'hello',
      title: { zh: '第一个程序', en: 'Your First Program' },
      difficulty: 1,
      lecture: {
        zh: `## 这节课学什么

这节课带你写出人生第一个程序：在屏幕上打印几行字，并让它成功跑起来。学完之后，你会知道一个 C 程序由哪几块组成、每一块是干什么的，以及你敲下的代码是怎么一步步变成电脑真正执行的程序的。

## 一个 C 程序是什么

可以把程序想象成一份**菜谱**：你按顺序写下步骤，电脑一步步照做。C 语言就是写菜谱用的语言。但电脑只认识 0 和 1，所以中间需要一位「翻译」——**编译器**——把你写的菜谱翻译成机器指令，这个翻译过程叫**编译**。编译完会得到一个「可执行文件」，双击或命令行运行它，程序才开始干活。

一个最小的 C 程序长这样：

\`\`\`c
#include <stdio.h>

int main(void) {
    printf("Hello, World!\\n");
    return 0;
}
\`\`\`

先记住三个角色：

- **main 函数**：程序的**起点**。电脑运行程序时，就是从 main 的第一行开始执行，相当于菜谱的「第一步」。
- **printf**：一个现成的「打印工具」，负责把文字显示到屏幕上。
- **编译器**（比如 gcc）：把你的源代码翻译成可执行文件。

## 怎么写

把上面的程序逐条拆开讲：

- \`#include <stdio.h>\`：\`stdio\` 是 standard input/output（标准输入输出）的缩写。\`printf\` 这个工具就放在 stdio 这个「工具箱」里，想用它必须先写这一行，相当于声明「我要用别人的工具」。\`#\` 必须顶格写，这一行**不加分号**。
- \`int main(void) {\`：定义 main 函数。\`int\` 表示它结束时向操作系统交回一个整数（报告运行状态），\`void\` 表示它不接收任何参数。\`{\` 是代码块的开始。
- \`printf("Hello, World!\\n");\`：把双引号里的文字打印出来。\`\\n\` 表示「换行」——屏幕上的光标跳到下一行开头。**结尾的分号 \`;\`** 不能少，C 靠它判断一条语句到哪里结束。
- \`return 0;\`：main 函数到此结束，返回 0 表示「程序正常跑完，没有出错」。
- \`}\`：代码块结束，与前面的 \`{\` 一一配对。

在你的电脑上编译并运行（本站的「运行」按钮会自动帮你完成这两步）：

\`\`\`bash
gcc main.c -o main
./main
\`\`\`

## 逐行读懂示例

本课示例代码：

\`\`\`c
#include <stdio.h>

int main(void) {
    printf("Hello, C!\\n");
    printf("你好，C\\n");
    return 0;
}
\`\`\`

- 第 1 行：引入标准输入输出工具箱，下面的 \`printf\` 才能用。
- 第 3 行：定义 main 函数，程序从这里开始执行。
- 第 4 行：打印 \`Hello, C!\`，末尾的 \`\\n\` 让光标跳到下一行开头。
- 第 5 行：再打印一行 \`你好，C\`，同样以 \`\\n\` 收尾。\`printf\` 打印中文毫无压力。
- 第 6 行：返回 0，向操作系统报告「一切正常」。
- 第 7 行：main 函数结束。屏幕上最终留下两行字。

## 新手常犯的错误

- **漏写分号**：\`printf("Hi\\n")\` 后少了 \`;\`，编译时会看到类似 \`expected ';' before ...\` 的报错。补上分号即可。
- **用了中文标点**：在中文输入法下敲出全角分号 \`；\` 或全角引号 \`“”\`，会得到一串莫名其妙的报错。写代码时请切换到英文输入法。
- **引号不配对**：\`printf("Hi\\n);\` 少了右引号，编译器会报字符串未结束。每个 \`"\` 都要有另一半。
- **忘了 \\n**：程序能跑，但两行字挤在同一行。\`printf\` **不会自动换行**，需要你在字符串末尾自己写 \`\\n\`。

## 小结

- C 程序从 \`main\` 函数开始执行，函数体用 \`{\` 和 \`}\` 包起来。
- 每条语句以分号 \`;\` 结尾；\`#include\` 那一行是例外。
- \`printf\` 负责输出，\`\\n\` 表示换行。
- 源代码要先经编译器变成可执行文件，电脑才能运行。

下一课我们学**变量**：让程序记住数据。`,
        en: `## What you will learn

In this lesson you write your very first program: printing a few lines of text on the screen and getting it to run. By the end you will know which building blocks make up a C program, what each block does, and how the code you type eventually becomes a program the computer executes.

## What a C program is

Think of a program as a **recipe**: you write steps in order, and the computer follows them one by one. C is the language you write the recipe in. But a computer only understands zeros and ones, so a "translator" — the **compiler** — converts your recipe into machine instructions. That translation process is called **compilation**, and its output is an "executable file". Only when you run that file does the program actually do its work.

The smallest C program looks like this:

\`\`\`c
#include <stdio.h>

int main(void) {
    printf("Hello, World!\\n");
    return 0;
}
\`\`\`

Remember three roles:

- The **main function**: the **starting point** of the program. When the computer runs your program, it begins at the first line of main — like step one of the recipe.
- **printf**: a ready-made "printing tool" that displays text on the screen.
- The **compiler** (for example gcc): translates your source code into an executable file.

## How to write it

Take the program above apart rule by rule:

- \`#include <stdio.h>\`: \`stdio\` is short for standard input/output. The \`printf\` tool lives in the stdio "toolbox", so you must write this line first — it declares "I want to use someone else's tool". The \`#\` must be the very first character of the line, and this line takes **no semicolon**.
- \`int main(void) {\`: defines the main function. \`int\` means it hands an integer back to the operating system when it finishes (a status report); \`void\` means it takes no parameters. \`{\` opens the code block.
- \`printf("Hello, World!\\n");\`: prints the text between the double quotes. \`\\n\` means "newline" — the cursor jumps to the start of the next line. **The semicolon \`;\`** at the end is mandatory: C uses it to know where a statement ends.
- \`return 0;\`: the main function ends here, returning 0 to say "the program finished normally, nothing went wrong".
- \`}\`: closes the code block, pairing with the earlier \`{\`.

Compile and run on your machine (the Run button on this site does both steps for you):

\`\`\`bash
gcc main.c -o main
./main
\`\`\`

## Reading the example line by line

The example code for this lesson:

\`\`\`c
#include <stdio.h>

int main(void) {
    printf("Hello, C!\\n");
    printf("Hello, C\\n");
    return 0;
}
\`\`\`

- Line 1: pulls in the standard input/output toolbox so \`printf\` is available below.
- Line 3: defines the main function — execution starts here.
- Line 4: prints \`Hello, C!\`; the trailing \`\\n\` moves the cursor to the start of the next line.
- Line 5: prints another line, \`Hello, C\`, also ending with \`\\n\`. \`printf\` handles any text you give it.
- Line 6: returns 0, telling the operating system "all is well".
- Line 7: the main function ends. Two lines of text remain on the screen.

## Common beginner mistakes

- **Missing semicolon**: \`printf("Hi\\n")\` without the \`;\` produces an error like \`expected ';' before ...\`. Add the semicolon.
- **Chinese punctuation**: typing a full-width semicolon \`；\` or full-width quotes \`“”\` under a Chinese input method leads to baffling errors. Switch to an English input method while coding.
- **Unmatched quotes**: \`printf("Hi\\n);\` is missing the closing quote; the compiler reports an unterminated string. Every \`"\` needs its partner.
- **Forgetting \\n**: the program runs, but the two lines run together. \`printf\` **never adds newlines by itself** — write \`\\n\` at the end of the string yourself.

## Summary

- A C program starts executing at \`main\`; the function body is wrapped in \`{\` and \`}\`.
- Every statement ends with a semicolon \`;\`; the \`#include\` line is the exception.
- \`printf\` does the printing and \`\\n\` means newline.
- Source code must be compiled into an executable before the computer can run it.

Next lesson: **variables** — teaching your program to remember data.`,
      },
      examples: [
        {
          caption: { zh: '你好，世界', en: 'Hello, world' },
          code: '#include <stdio.h>\n\nint main(void) {\n    printf("Hello, C!\\n");\n    printf("Hello, C\\n");\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '打印两行问候', en: 'Print two greetings' },
          prompt: {
            zh: '使用两次 `printf` 输出下面两行（注意大小写和标点）：\n\n```\nHello, World!\nI am learning C\n```',
            en: 'Use two `printf` calls to output these two lines (watch capitalization and punctuation):\n\n```\nHello, World!\nI am learning C\n```',
          },
          starter: '/* 练习 1：输出两行文字 */\n#include <stdio.h>\n\nint main(void) {\n    /* 在下面写你的代码 */\n\n    return 0;\n}\n',
          expectedOutput: 'Hello, World!\nI am learning C\n',
          hints: [
            { zh: '这题练的是把文字显示到屏幕上。回想讲解里 C 负责输出的那条语句叫什么，以及想用它时文件顶部必须先包含哪个头文件。', en: 'This task is about showing text on screen. Recall the name of the C statement that outputs text, and which header must be included at the top of the file before it works.' },
            { zh: '题目要两行文字，程序从上往下执行，一行交给一次输出。先分清哪次输出负责第一行、哪次负责第二行，两行的文字要原样搬进代码。', en: 'Two lines of text are needed and the program runs from top to bottom, one line per output. Decide which call prints the first line and which prints the second, then move both lines into the code unchanged.' },
            { zh: '输出一行用 `printf("文字");`，文字放进英文双引号里；要让光标换到下一行，就在双引号内末尾写 `\\n`。文件顶部先写 `#include <stdio.h>`。', en: 'Print one line as `printf("text");`, wrapping the text in English double quotes; to move to the next line, write `\\n` at the end inside the quotes. Start the file with `#include <stdio.h>`.' },
            { zh: '骨架是两条 `printf`：第一条双引号里放 `Hello, World!\\n`，第二条放 `I am learning C\\n`。注意每条以分号结尾、引号要配对，大小写、逗号与空格都要和题目逐字符一致，别加多余文字。', en: 'The skeleton is two `printf` calls: the first holds `Hello, World!\\n` between its quotes, the second `I am learning C\\n`. End each with a semicolon, pair every quote, and match capitalization, comma and spaces exactly — no extra words.' },
            { zh: '参考写法：文件顶部 `#include <stdio.h>`，main 函数体内依次写 `printf("Hello, World!\\n");` 与 `printf("I am learning C\\n");`。两行都以 `\\n` 收尾才各占一行；`World` 的 W 大写、`learning` 前有空格，照抄即可。', en: 'Reference: `#include <stdio.h>` at the top, then inside main write `printf("Hello, World!\\n");` followed by `printf("I am learning C\\n");`. Both end with `\\n` so each gets its own line; keep the capital W in `World` and the space before `learning`.' },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    printf("Hello, World!\\n");\n    printf("I am learning C\\n");\n    return 0;\n}\n',
          solutionNote: { zh: '程序从上往下执行：第一条 printf 输出 `Hello, World!` 后换行，第二条接着输出 `I am learning C`。解法成立的关键是引号配对、分号齐全，且文字大小写、逗号与空格都和题目完全一致——判题区分大小写与全半角，差一个字符都判不过。', en: 'The program runs top to bottom: the first printf prints `Hello, World!` and breaks the line, then the second prints `I am learning C`. It passes because the quotes pair up, every semicolon is in place, and the capitalization, comma and spaces match the task exactly — the judge is case-sensitive, so a single wrong character fails the check.' },
        },
        {
          id: 'ex2',
          title: { zh: '打印三角形', en: 'Print a triangle' },
          prompt: {
            zh: '用三次 `printf` 输出一个左对齐的三角形（**严格**按下面三行）：\n\n```\n*\n**\n***\n```',
            en: 'Use three `printf` calls to output a left-aligned triangle (**exactly** these three lines):\n\n```\n*\n**\n***\n```',
          },
          starter: '/* 练习 2：输出三角形 */\n#include <stdio.h>\n\nint main(void) {\n\n    return 0;\n}\n',
          expectedOutput: '*\n**\n***\n',
          hints: [
            { zh: '这题仍是「一次输出一行」的文字输出练习，只不过内容从句子换成了星号。先想清楚：三角形每一行各有几颗星，一共需要几次输出。', en: 'This is still a print-one-line-per-call task, with the text being stars instead of sentences. First work out how many stars each row has and how many output calls you need in total.' },
            { zh: '把三角形拆成三行看，一行一次输出。任务真正要你拿捏的只有一点：每次双引号里写几颗星才能和题目对得上。', en: 'Split the triangle into three rows, one output per row. The only thing you really control is how many stars go inside the quotes each time so it matches the task.' },
            { zh: '每行用 `printf("星号\\n");`，星号个数就是双引号里写的个数；`\\n` 负责行末换行，整条语句以分号 `;` 结尾。', en: 'Each row is `printf("stars\\n");` — the star count is whatever you type inside the quotes, `\\n` handles the line break, and the statement ends with a semicolon `;`.' },
            { zh: '三条输出语句的格式串分别是 `"*\\n"`、`"**\\n"`、`"***\\n"`——共 1、2、3 颗星。易错点：别把某一行数错，也别漏掉任意一条语句末尾的分号。', en: 'The three statements use the format strings `"*\\n"`, `"**\\n"` and `"***\\n"` — 1, 2 and 3 stars in total. Watch out: count each row correctly and do not drop the semicolon at the end of any statement.' },
            { zh: '参考写法：main 里依次写 `printf("*\\n");`、`printf("**\\n");`、`printf("***\\n");`。每条语句结束后光标都在下一行开头，三行拼起来正好是题目要求的三角形，个数 1、2、3 一个都不能错。', en: 'Reference: inside main write `printf("*\\n");`, then `printf("**\\n");`, then `printf("***\\n");`. After each statement the cursor sits at the start of the next line, so the three lines form the triangle in the task — the counts 1, 2 and 3 must be exact.' },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    printf("*\\n");\n    printf("**\\n");\n    printf("***\\n");\n    return 0;\n}\n',
          solutionNote: { zh: '三条 printf 各自负责一行：第一条输出一颗星后换行，第二、三条依次增多。解法的关键在于每行字符串都以 `\\n` 结尾、每条语句分号齐全，且星号个数分别是 1、2、3——多一颗或少一颗，拼出来的三角形就和预期不一致。', en: 'Three printf calls each own one row: the first prints one star and breaks the line, the next two add one star each. The key is that every string ends with `\\n`, every statement keeps its semicolon, and the star counts are exactly 1, 2 and 3 — one star too many or too few and the triangle no longer matches.' },
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

学会在程序里**存数据**：把整数、小数、字符放进带名字的「盒子」（变量）里，再用 printf 把它们打印出来。学完之后，你就能让程序完成各种简单计算并显示结果，比如算面积、做温度换算。

## 变量是什么

程序运行时要处理数据——年龄、价格、成绩。数据需要存放在内存里，还要有个名字方便日后取用，这就是**变量**。

可以把变量想象成一个**贴了标签的盒子**：标签是变量名（比如 \`age\`），盒子里装着值（比如 20）。盒子还有**规格**，也就是**类型**：装整数的盒子（\`int\`）和装小数的盒子（\`double\`）大小不同、用法不同。C 是**静态类型语言**——用盒子之前必须先声明规格，而且整个程序里规格不能再变，装进去的东西必须和规格匹配。

## 怎么写

声明变量的语法是「\`类型 变量名 = 初始值;\`」：

\`\`\`c
int age = 20;          // 整数盒子，装 20
double pi = 3.14159;   // 双精度小数盒子（小数推荐用它）
char grade = 'A';      // 字符盒子，装一个字符
\`\`\`

规则逐条看：

- \`int\` 装整数（大约 ±21 亿以内都安全）。
- \`double\` 装小数；\`float\` 也装小数但精度低，初学统一用 \`double\` 更省心。
- \`char\` 装**单个字符**，用**单引号** \`'A'\`；双引号 \`"A"\` 表示的是字符串，两者不同。
- 变量名只能由字母、数字、下划线组成，**不能以数字开头**（\`1st\` 不行，\`first_1\` 可以），也不能和关键字（如 \`int\`）重名。
- \`=\` 是**赋值**：把右边的值放进左边的盒子。

想打印变量，要用 printf 的**格式符**（占位符）：

\`\`\`c
printf("age = %d\\n", age);       // %d 处填入 age 的值
printf("pi = %.2f\\n", pi);       // %.2f 保留两位小数
printf("grade = %c\\n", grade);   // %c 填一个字符
\`\`\`

\`%d\` 就像填空题的横线：双引号里是模板，逗号后面依次给出要填的值，**个数和顺序必须一一对应**。常用对应关系：\`int\` 用 \`%d\`，\`float\`/\`double\` 用 \`%f\`，\`char\` 用 \`%c\`。

类型之间可以转换：\`int x = (int)3.14;\` 会把小数**直接砍掉**（x 变成 3，不是四舍五入）；整数和小数混合运算时，整数会自动升为小数。

## 逐行读懂示例

本课示例代码：

\`\`\`c
#include <stdio.h>

int main(void) {
    int age = 25;
    double height = 1.75;
    char initial = 'A';
    printf("age = %d\\n", age);
    printf("height = %.2f\\n", height);
    printf("initial = %c\\n", initial);
    return 0;
}
\`\`\`

- 第 4 行：声明整数变量 age，装进 25。
- 第 5 行：声明双精度小数变量 height，装进 1.75。
- 第 6 行：声明字符变量 initial，装进字母 A（注意单引号）。
- 第 7 行：\`%d\` 处填入 age，输出 \`age = 25\`。
- 第 8 行：\`%.2f\` 把 height 保留两位小数输出 \`height = 1.75\`。
- 第 9 行：\`%c\` 处填入 initial，输出 \`initial = A\`。
- 第 10 行：返回 0，程序正常结束。

## 新手常犯的错误

- **格式符用错**：用 \`%d\` 打印 double、用 \`%f\` 打印 int，程序可能不报错但输出乱码或 0。格式符必须和变量类型匹配：int → \`%d\`，double → \`%f\`。
- **字符用了双引号**：\`char c = "A";\` 编译报错或警告，因为 \`"A"\` 是字符串不是字符。改成 \`'A'\`。
- **非法变量名**：\`int 1st_place;\` 报错——变量名不能以数字开头。改成 \`first_place\`。
- **给 int 装小数**：\`int x = 3.14;\` 不报错，但 x 是 3——小数部分被**直接丢弃**，不是四舍五入。

## 小结

- 变量是贴了标签的盒子：名字 + 类型 + 值；用前必须先声明。
- 常用类型：\`int\`（整数）、\`double\`（小数）、\`char\`（单字符，单引号）。
- printf 用格式符填空：\`%d\`、\`%f\`、\`%c\`，个数顺序要对齐。
- int 装小数会截断；转换类型用 \`(类型)\` 强转。

下一课学**运算符**：让盒子里的值算起来。`,
        en: `## What you will learn

Learn to **store data** in a program: put integers, decimals and characters into named "boxes" (variables), then print them with printf. Afterwards you can make the program do simple calculations and show the results — areas, temperature conversions and so on.

## What is a variable?

A running program works with data — ages, prices, grades. The data must live somewhere in memory, with a name so you can refer to it later. That is a **variable**.

Picture a variable as a **labeled box**: the label is the variable name (say \`age\`), and inside the box is a value (say 20). Boxes also come in **sizes**, i.e. **types**: a box for integers (\`int\`) and a box for decimals (\`double\`) differ in size and usage. C is a **statically typed language** — you must declare the size before using the box, the size can never change afterwards, and whatever you put in must match the size.

## How to write it

The syntax is "type name = initial value;":

\`\`\`c
int age = 20;          // integer box holding 20
double pi = 3.14159;   // double-precision decimal box (recommended for decimals)
char grade = 'A';      // character box holding one character
\`\`\`

Rule by rule:

- \`int\` holds integers (safe up to about ±2.1 billion).
- \`double\` holds decimals; \`float\` also holds decimals but with less precision — beginners can just use \`double\`.
- \`char\` holds a **single character** in **single quotes** \`'A'\`; double quotes \`"A"\` mean a string, which is a different thing.
- Variable names may contain letters, digits and underscores, but **cannot start with a digit** (\`1st\` is invalid, \`first_1\` is fine) and cannot collide with keywords like \`int\`.
- \`=\` means **assignment**: put the value on the right into the box on the left.

To print a variable, use printf **format specifiers** (placeholders):

\`\`\`c
printf("age = %d\\n", age);       // %d is where age's value goes
printf("pi = %.2f\\n", pi);       // %.2f keeps two decimals
printf("grade = %c\\n", grade);   // %c fills in a character
\`\`\`

\`%d\` works like the blank in a fill-in question: the double quotes hold the template, and the values after the comma fill the blanks in order — **the count and order must match**. Common pairings: \`int\` with \`%d\`, \`float\`/\`double\` with \`%f\`, \`char\` with \`%c\`.

Types can be converted: \`int x = (int)3.14;\` **cuts off** the fraction (x becomes 3, not rounded); when integers and decimals mix in arithmetic, the integer is promoted to a decimal automatically.

## Reading the example line by line

The example code for this lesson:

\`\`\`c
#include <stdio.h>

int main(void) {
    int age = 25;
    double height = 1.75;
    char initial = 'A';
    printf("age = %d\\n", age);
    printf("height = %.2f\\n", height);
    printf("initial = %c\\n", initial);
    return 0;
}
\`\`\`

- Line 4: declares the integer variable age and stores 25.
- Line 5: declares the double variable height and stores 1.75.
- Line 6: declares the character variable initial holding the letter A (note the single quotes).
- Line 7: fills age into \`%d\`, printing \`age = 25\`.
- Line 8: \`%.2f\` prints height with two decimals: \`height = 1.75\`.
- Line 9: fills initial into \`%c\`, printing \`initial = A\`.
- Line 10: returns 0; the program ends normally.

## Common beginner mistakes

- **Wrong format specifier**: printing a double with \`%d\` or an int with \`%f\` may not fail to compile, but produces garbage or 0. Match the specifier to the type: int → \`%d\`, double → \`%f\`.
- **Double quotes on a char**: \`char c = "A";\` is an error or warning, because \`"A"\` is a string, not a character. Use \`'A'\`.
- **Illegal variable name**: \`int 1st_place;\` fails — names cannot start with a digit. Rename it \`first_place\`.
- **Storing a decimal in an int**: \`int x = 3.14;\` compiles, but x is 3 — the fraction is **discarded**, not rounded.

## Summary

- A variable is a labeled box: name + type + value; declare it before use.
- Common types: \`int\` (integers), \`double\` (decimals), \`char\` (single character, single quotes).
- printf fills blanks with format specifiers: \`%d\`, \`%f\`, \`%c\`; counts and order must line up.
- Storing a decimal in an int truncates; use \`(type)\` to cast explicitly.

Next lesson: **operators** — making the values in the boxes do math.`,
      },
      examples: [
        {
          caption: { zh: '基本类型与 printf', en: 'Basic types and printf' },
          code: '#include <stdio.h>\n\nint main(void) {\n    int age = 25;\n    double height = 1.75;\n    char initial = \'A\';\n    printf("age = %d\\n", age);\n    printf("height = %.2f\\n", height);\n    printf("initial = %c\\n", initial);\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '矩形面积', en: 'Rectangle area' },
          prompt: {
            zh: '声明 `int width = 7`、`int height = 4`，计算面积并用 `printf` 输出**只一个数字**（应为 28）。',
            en: 'Declare `int width = 7`, `int height = 4`, compute the area and use `printf` to print **just the number** (should be 28).',
          },
          starter: '/* 练习 1：矩形面积 */\n#include <stdio.h>\n\nint main(void) {\n    int width = 7;\n    int height = 4;\n    /* 在下面输出面积 */\n\n    return 0;\n}\n',
          expectedOutput: '28\n',
          hints: [
            { zh: '这题练的是「计算再加输出」：先做一次乘法得到面积，再把整数结果显示出来。先回忆长方形面积公式，以及 printf 输出整数时该用哪种格式符。', en: 'This task combines computation and output: do one multiplication to get the area, then show that integer. Recall the rectangle area formula and which format specifier printf needs for an integer.' },
            { zh: '把「算」和「打印」分开想：先用一个变量把 `width * height` 的结果存起来，再让 printf 输出这个变量的值。题目只要一个数字，别打印任何多余文字。', en: 'Separate computing from printing: store the value of `width * height` in a variable first, then let printf print that variable. The task wants a single number — no extra words on screen.' },
            { zh: '乘法用运算符 `*`，整数格式符是 `%d`。先声明 `int area = width * height;` 存结果，再用 `printf("%d\\n", area);` 输出。', en: 'Multiplication uses the `*` operator and the integer specifier is `%d`. Declare `int area = width * height;` to hold the result, then output with `printf("%d\\n", area);`.' },
            { zh: '骨架：在题目给的两条声明后面加 `int area = width * height;`，再加一条 `printf("%d\\n", area);`。易错点：printf 里不要写 `area = %d` 之类的文字——`%d` 以外的字符都会原样输出，结果就和预期对不上。', en: 'Skeleton: after the two given declarations add `int area = width * height;`, then `printf("%d\\n", area);`. Pitfall: never write text like `area = %d` inside printf — anything beyond `%d` is printed literally and breaks the match.' },
            { zh: '参考写法：main 里 `int width = 7;`、`int height = 4;` 之后依次写 `int area = width * height;` 和 `printf("%d\\n", area);`。屏幕上只会留下数字 28；`\\n` 负责换行，说明文字一律不要带进输出。', en: 'Reference: inside main, after `int width = 7;` and `int height = 4;`, write `int area = width * height;` followed by `printf("%d\\n", area);`. Only the number 28 appears; `\\n` breaks the line and no descriptive text should reach the output.' },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int width = 7;\n    int height = 4;\n    int area = width * height;\n    printf("%d\\n", area);\n    return 0;\n}\n',
          solutionNote: { zh: '解法先用 `width * height` 把 28 算好存入 `int area`，再让 printf 用 `%d` 输出 area，两条语句都以分号收尾。它正确的关键是输出里没有任何多余文字——若在格式串里写 `area = %d`，判题会因多出字符而判未通过；同时 `%d` 必须与 area 的 int 类型匹配。', en: 'The solution computes 28 into `int area` with `width * height`, then printf prints area through `%d`, each statement closed by a semicolon. It passes because the output carries no extra text — writing `area = %d` in the format string would add characters and fail the judge — and because `%d` matches the int type of area.' },
        },
        {
          id: 'ex2',
          title: { zh: '摄氏转华氏', en: 'Celsius to Fahrenheit' },
          prompt: {
            zh: '变量 `int c = 37` 表示摄氏温度。公式：`f = c * 9 / 5 + 32`。用整数算术后输出 `f` 的值（应为 98）。',
            en: 'Variable `int c = 37` is a Celsius temperature. Formula: `f = c * 9 / 5 + 32`. With integer arithmetic print `f` (should be 98).',
          },
          starter: '/* 练习 2：摄氏 → 华氏 */\n#include <stdio.h>\n\nint main(void) {\n    int c = 37;\n    /* 在下面计算并输出 f */\n\n    return 0;\n}\n',
          expectedOutput: '98\n',
          hints: [
            { zh: '题目把公式直接给了你，要练的是「把数学公式翻译成 C 表达式」。动手前先想清楚：乘、除、加分别对应哪个符号，算式从哪头开始算。', en: 'The formula is handed to you, so the skill being practiced is translating a math formula into a C expression. Before typing, work out which symbol stands for multiply, divide and add, and which end the expression evaluates from.' },
            { zh: '把任务拆成两步：先在 main 里用一个整型变量装华氏度结果，再把它单独打印出来。题目只要结果这一个数字，输出里别带任何文字。', en: 'Split the work in two: first store the Fahrenheit result in an integer variable inside main, then print that variable on its own. Only the numeric result is wanted — keep all text out of the output.' },
            { zh: '按公式原样写 `int f = c * 9 / 5 + 32;` 存结果，输出用整数格式符 `%d`：`printf("%d\\n", f);`。', en: 'Write the formula as-is to store the result: `int f = c * 9 / 5 + 32;`, and output it with the integer specifier `%d`: `printf("%d\\n", f);`.' },
            { zh: '骨架：在 `int c = 37;` 后面加 `int f = c * 9 / 5 + 32;` 与 `printf("%d\\n", f);`。易错点：`*` 和 `/` 同级、从左到右算，别写成 `c * (9 / 5)`——那样 9/5 先被算成 1，结果会变成 69。', en: 'Skeleton: after `int c = 37;` add `int f = c * 9 / 5 + 32;` and `printf("%d\\n", f);`. Pitfall: `*` and `/` share the same precedence and evaluate left to right, so do not write `c * (9 / 5)` — 9/5 becomes 1 first and the result turns into 69.' },
            { zh: '参考写法：`int c = 37;` 之后写 `int f = c * 9 / 5 + 32;`，最后 `printf("%d\\n", f);`。实际计算是 333/5 得 66（整数除法丢掉小数）再加 32 得 98；全程保持整数，别引入 9.0 之类的小数，否则会得到 98.6。', en: 'Reference: after `int c = 37;` write `int f = c * 9 / 5 + 32;` and finally `printf("%d\\n", f);`. The real math is 333/5 → 66 (integer division drops the fraction) plus 32 → 98; keep everything integer and do not introduce a decimal like `9.0`, which would produce 98.6.' },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int c = 37;\n    int f = c * 9 / 5 + 32;\n    printf("%d\\n", f);\n    return 0;\n}\n',
          solutionNote: { zh: '表达式 `c * 9 / 5 + 32` 严格照抄公式：先算 `37 * 9 = 333`，再做整数除法 `333 / 5 = 66`（小数部分被丢弃），最后加 32 得 98，`%d` 与 f 的 int 类型匹配。易错点是给除法掺入小数——写成 `9.0 / 5` 会把整条表达式抬成 double，算出 98.6 就对不上预期。', en: 'The expression `c * 9 / 5 + 32` copies the formula exactly: 37 times 9 is 333, integer division 333 / 5 is 66 (the fraction is dropped), plus 32 gives 98, and `%d` matches the int type of f. The trap is mixing decimals into the division — writing `9.0 / 5` promotes the whole expression to double and yields 98.6, which no longer matches the expected output.' },
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

学会用**运算符**对变量做计算：加减乘除、取余数、自增自减，以及比较和逻辑判断。学完之后，你能写出「分钟换算」「成绩判断」这类带计算的程序。

## 运算符是什么

运算符就是数学里的「运算符号」在编程里的版本：\`+\`、\`-\`、\`*\`、\`/\` 分别是加减乘除。把变量和运算符连起来就得到**表达式**，比如 \`width * height\`，它会被计算出一个值。

要注意的是，C 的运算符比数学课本里多几个「编程特有」的家伙：取余 \`%\`（除法的余数）、自增 \`++\`（加 1）、以及把「比较」和「判断」也变成运算符。

## 怎么写

**算术运算符**：

| 运算符 | 含义 | 例子 | 结果 |
|---|---|---|---|
| \`+\` \`-\` \`*\` | 加减乘 | \`3 * 4\` | \`12\` |
| \`/\` | 除（对整数会**截断**小数） | \`10 / 4\` | \`2\` |
| \`%\` | 取余数 | \`10 % 4\` | \`2\` |

两个**整数**相除，C 只保留整数部分：\`10 / 4\` 是 \`2\`，**不是 2.5**。想保留小数，至少让一个操作数是小数：\`10.0 / 4\` 得 \`2.5\`。\`%\` 只能用于整数，它非常有用——比如判断奇偶（\`n % 2\`）、把秒数拆成分和秒。

**自增自减**：\`i++\` 让 i 加 1，\`i--\` 让 i 减 1。

\`\`\`c
int a = 5, b = 5;
printf("%d %d\\n", a++, ++b);   // 5 6
\`\`\`

- \`a++\`：**先用** a 的旧值，再 +1——所以打印 5。
- \`++b\`：**先 +1**，再用新值——所以打印 6。
- 单独一行写 \`i++;\` 时两者没区别，区别只出现在表达式里。

**赋值简写**：\`x += 5\` 等价于 \`x = x + 5\`，同理还有 \`-=\`、\`*=\`、\`/=\`。当一个变量参与运算后又存回自己，就可以用这种简写；后面循环里累加用的 \`total += i\` 就是它，写起来更短，读起来也顺。

**比较与逻辑**：

- 比较运算符：\`==\`（相等）、\`!=\`（不等）、\`<\`、\`>\`、\`<=\`、\`>=\`，结果是 \`0\`（假）或 \`1\`（真）。
- 逻辑运算符：\`&&\`（且）、\`||\`（或）、\`!\`（非）——注意是**两个** \`&\`、**两个** \`|\`。

**优先级**：\`()\` > \`++\` \`--\` > \`*\` \`/\` \`%\` > \`+\` \`-\` > 比较 > \`&&\` > \`||\`。记不清就加括号，括号永远优先。

## 逐行读懂示例

本课示例代码：

\`\`\`c
int a = 17, b = 5;
printf("%d %d %d\\n", a / b, a % b, 2 * a + b);   // 3 2 39
\`\`\`

- 第 1 行：一行声明两个变量 a=17、b=5，逗号分隔，这是合法且常见的写法。
- 第 2 行：三个格式符对应三个表达式。\`a / b\` 即 17/5，整数除法得 3；\`a % b\` 即 17 除以 5 的余数 2；\`2 * a + b\` 先乘后加，34+5=39。
- 输出是 \`3 2 39\`，三个值被空格隔开是因为格式字符串里 \`%d\` 之间写了空格。

## 新手常犯的错误

- **整数除法丢小数**：\`int avg = total / count;\` 想算平均分却只得到整数。需要小数时先转成 double：\`(double)total / count\`。
- **= 和 == 混用**：\`if (x = 5)\` 是赋值不是比较，条件永远为真，逻辑悄悄出错。比较要写 \`==\`。
- **% 用于小数**：\`5.5 % 2\` 直接编译报错，\`%\` 只能用于整数。
- **单 & 当且用**：\`if (a > 0 & b > 0)\` 结果碰巧对但语义不同，逻辑与必须写 \`&&\`。
- **连写比较**：\`if (0 < x < 10)\` 在数学上说得通，但 C 会先算 \`0 < x\` 得 0 或 1，再拿它和 10 比较——结果**永远为真**。正确写法是 \`if (x > 0 && x < 10)\`。

## 小结

- \`+\` \`-\` \`*\` \`/\` \`%\` 是算术五兄弟；整数除法截断，想留小数先转 double。
- \`a++\` 先用后加，\`++a\` 先加后用。
- 比较结果只有 0/1；逻辑运算用 \`&&\` \`||\` \`!\`。
- 括号可以随时改变优先级，拿不准就加。

下一课学**条件分支**：让程序学会「看情况做事」。`,
        en: `## What you will learn

Learn to compute with **operators**: addition, subtraction, multiplication, division, remainder, increment/decrement, plus comparison and logical operators. Afterwards you can write calculating programs such as time conversions and grade checks.

## What is an operator?

Operators are the programming version of arithmetic symbols: \`+\`, \`-\`, \`*\`, \`/\` for add, subtract, multiply, divide. Variables and operators chained together form an **expression**, like \`width * height\`, which evaluates to a value.

Note that C has a few operators math class never showed you: the remainder \`%\` (leftover of a division), the increment \`++\` (add 1), and operators that turn "comparison" and "reasoning" into arithmetic.

## How to write it

**Arithmetic operators**:

| Operator | Meaning | Example | Result |
|---|---|---|---|
| \`+\` \`-\` \`*\` | add/sub/mul | \`3 * 4\` | \`12\` |
| \`/\` | divide (**truncates** for integers) | \`10 / 4\` | \`2\` |
| \`%\` | remainder | \`10 % 4\` | \`2\` |

Dividing two **integers** keeps only the whole part: \`10 / 4\` is \`2\`, **not 2.5**. To keep the fraction, make at least one operand a decimal: \`10.0 / 4\` gives \`2.5\`. \`%\` only works on integers, and it is remarkably useful — testing even/odd (\`n % 2\`), splitting seconds into minutes and seconds, and so on.

**Increment / decrement**: \`i++\` adds 1 to i; \`i--\` subtracts 1.

\`\`\`c
int a = 5, b = 5;
printf("%d %d\\n", a++, ++b);   // 5 6
\`\`\`

- \`a++\`: **use** the old value of a first, then add 1 — so it prints 5.
- \`++b\`: **add 1 first**, then use the new value — so it prints 6.
- On a line of its own, \`i++;\` and \`++i;\` are identical; the difference only matters inside a larger expression.

**Assignment shorthand**: \`x += 5\` is equivalent to \`x = x + 5\`, likewise \`-=\`, \`*=\`, \`/=\`. Whenever a variable takes part in an operation and the result goes back into itself, use the shorthand; the accumulator \`total += i\` you will meet in later loops is exactly this — shorter to write, easier to read.

**Comparison & logical**:

- Comparison: \`==\` (equal), \`!=\` (not equal), \`<\`, \`>\`, \`<=\`, \`>=\` — the result is \`0\` (false) or \`1\` (true).
- Logical: \`&&\` (and), \`||\` (or), \`!\` (not) — note they are **two** \`&\`s and **two** \`|\`s.

**Precedence**: \`()\` > \`++\` \`--\` > \`*\` \`/\` \`%\` > \`+\` \`-\` > comparisons > \`&&\` > \`||\`. When in doubt, add parentheses — they always win.

## Reading the example line by line

The example code for this lesson:

\`\`\`c
int a = 17, b = 5;
printf("%d %d %d\\n", a / b, a % b, 2 * a + b);   // 3 2 39
\`\`\`

- Line 1: declares two variables in one statement, a=17 and b=5, separated by a comma — legal and common.
- Line 2: three format specifiers match three expressions. \`a / b\` is 17/5, integer division gives 3; \`a % b\` is the remainder of 17 over 5, which is 2; \`2 * a + b\` multiplies first, 34+5=39.
- The output is \`3 2 39\`; the values are separated by spaces because the format string has spaces between the \`%d\`s.

## Common beginner mistakes

- **Integer division drops the fraction**: \`int avg = total / count;\` computes an average but yields an integer. Cast to double first when you need decimals: \`(double)total / count\`.
- **Mixing = and ==**: \`if (x = 5)\` assigns rather than compares, and the condition is always true — the logic silently breaks. Write \`==\` to compare.
- **% on decimals**: \`5.5 % 2\` is a compile error; \`%\` is integers-only.
- **Single & as "and"**: \`if (a > 0 & b > 0)\` happens to work but means something else — logical and must be \`&&\`.
- **Chained comparison**: \`if (0 < x < 10)\` makes sense in math, but C first evaluates \`0 < x\` to 0 or 1 and then compares that with 10 — the result is **always true**. Write \`if (x > 0 && x < 10)\` instead.

## Summary

- \`+\` \`-\` \`*\` \`/\` \`%\` are the arithmetic five; integer division truncates, so cast to double for fractions.
- \`a++\` uses first then adds; \`++a\` adds first then uses.
- Comparisons yield only 0/1; logic uses \`&&\` \`||\` \`!\`.
- Parentheses override precedence any time — add them when unsure.

Next lesson: **conditionals** — teaching the program to act differently depending on the situation.`,
      },
      examples: [
        {
          caption: { zh: '整数除法与取余', en: 'Integer division and remainder' },
          code: '#include <stdio.h>\n\nint main(void) {\n    int a = 17, b = 5;\n    printf("%d %d %d\\n", a / b, a % b, 2 * a + b);   // 3 2 39\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '拆分秒数', en: 'Split seconds' },
          prompt: {
            zh: '变量 `int total = 3775` 是总秒数。**每行一个**输出分钟数和剩余秒数（应为 62 和 55）。',
            en: 'Variable `int total = 3775` is a number of seconds. Print the number of whole minutes and the leftover seconds, **one per line** (should be 62 and 55).',
          },
          starter: '/* 练习 1：拆分秒数 */\n#include <stdio.h>\n\nint main(void) {\n    int total = 3775;\n\n    return 0;\n}\n',
          expectedOutput: '62\n55\n',
          hints: [
            { zh: '这题考的是单位换算里的两个互补运算：把总秒数拆成「整分钟」和「剩下的秒数」。先想清楚：哪种运算得到完整的 60 秒段数，哪种得到不满 60 秒的零头。', en: 'This task is about the two complementary operations in a unit conversion: splitting total seconds into whole minutes and leftover seconds. Which operation gives the full 60-second chunks, and which gives the remainder under 60?' },
            { zh: '结果要两个数字、各占一行。先别管代码，先想输出顺序：第一行是整分钟数，第二行是剩余秒数，两个值都由 `total` 直接算出来，无需新变量。', en: 'Two numbers are needed, one per line. Before coding, fix the order: line one is the whole minutes, line two the leftover seconds — both computed straight from `total`, no new variable required.' },
            { zh: '整数除法得到段数、取余得到零头：`total / 60` 与 `total % 60`。两者都用整数格式符输出，例如 `printf("%d\\n", total / 60);`。', en: 'Integer division gives the chunks and remainder gives the leftover: `total / 60` and `total % 60`. Print both with the integer specifier, e.g. `printf("%d\\n", total / 60);`.' },
            { zh: '骨架是两条输出语句：`printf("%d\\n", total / 60);` 和 `printf("%d\\n", total % 60);`。易错点：先分钟后秒、顺序别反；`%` 只能用于整数；每条末尾的 `\\n` 不能少，否则两行会并成一行。', en: 'The skeleton is two output statements: `printf("%d\\n", total / 60);` and `printf("%d\\n", total % 60);`. Watch out: minutes come first, seconds second; `%` works on integers only; and each trailing `\\n` is required or the two lines merge into one.' },
            { zh: '参考写法：main 里直接写 `printf("%d\\n", total / 60);` 再写 `printf("%d\\n", total % 60);`。因为 3775 = 62 × 60 + 55，所以第一行是 62、第二行是 55；除法截断与取余正好互补。', en: 'Reference: inside main write `printf("%d\\n", total / 60);` then `printf("%d\\n", total % 60);`. Since 3775 = 62 × 60 + 55, the lines print 62 and 55; truncating division and remainder complement each other.' },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int total = 3775;\n    printf("%d\\n", total / 60);\n    printf("%d\\n", total % 60);\n    return 0;\n}\n',
          solutionNote: { zh: '解法让整数除法与取余分工：`total / 60` 得整分钟数 62，`total % 60` 得剩余秒数 55，一次输出一行。它正确的关键是理解 3775 = 62 × 60 + 55 中除法取商、`%` 取余的互补关系；若把两条语句顺序写反，或漏掉 `\\n` 让两行合并，都会判未通过。', en: 'The solution lets integer division and remainder share the work: `total / 60` gives the 62 whole minutes and `total % 60` the 55 leftover seconds, one line each. It passes because of the complementary relationship in 3775 = 62 × 60 + 55 — division takes the quotient and `%` the remainder; swapping the two statements or dropping a `\\n` so the lines merge would fail the judge.' },
        },
        {
          id: 'ex2',
          title: { zh: '交换两个变量', en: 'Swap two variables' },
          prompt: {
            zh: '变量 `int a = 3`、`int b = 8`。交换它们的值后**只输出一行** `a b`（输出应为 8 3）。',
            en: 'Variables `int a = 3`, `int b = 8`. Swap them and print **one line** `a b` (output should be 8 3).',
          },
          starter: '/* 练习 2：交换 a 和 b */\n#include <stdio.h>\n\nint main(void) {\n    int a = 3;\n    int b = 8;\n\n    return 0;\n}\n',
          expectedOutput: '8 3\n',
          hints: [
            { zh: '这题练的是「交换两个变量的值」。关键障碍在于：把一个变量的值赋给另一个，被覆盖的旧值会立刻消失。想想怎么避免任何值被弄丢。', en: 'This task practices swapping the values of two variables. The core obstacle: assigning one variable into another immediately destroys the old value being overwritten. Think about how to avoid losing anything.' },
            { zh: '多准备一个空盒子当「中转站」：先把 a 的值搬进去，再让 a 接收 b 的值，最后把中转站里的原值倒给 b——三步完成交换。', en: 'Bring in one extra empty box as a temporary stop: first move the value of a into it, then let a receive the value of b, then pour the saved original into b — three steps finish the swap.' },
            { zh: '临时变量写作 `int t;`，随后是三条赋值：`t = a; a = b; b = t;`。', en: 'The temporary is declared as `int t;`, followed by three assignments: `t = a; a = b; b = t;`.' },
            { zh: '骨架：在 `int a = 3; int b = 8;` 后加 `int t = a;`、`a = b;`、`b = t;`，最后 `printf("%d %d\\n", a, b);`。易错点：三条顺序不能乱；格式串两个 `%d` 之间是一个空格，别多加也别漏掉。', en: 'Skeleton: after `int a = 3; int b = 8;` add `int t = a;`, then `a = b;`, then `b = t;`, and finally `printf("%d %d\\n", a, b);`. Pitfall: the three statements must stay in order, and the format string has exactly one space between the two `%d` — no extra, none missing.' },
            { zh: '参考写法：`int a = 3; int b = 8; int t = a; a = b; b = t; printf("%d %d\\n", a, b);`。a 的值先存进 t 才不会被覆盖，最终屏幕上只有一行 `8 3`。', en: 'Reference: `int a = 3; int b = 8; int t = a; a = b; b = t; printf("%d %d\\n", a, b);`. The value of a is parked in t before being overwritten, so the screen ends with a single line `8 3`.' },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int a = 3;\n    int b = 8;\n    int t = a;\n    a = b;\n    b = t;\n    printf("%d %d\\n", a, b);\n    return 0;\n}\n',
          solutionNote: { zh: '核心是「先备份再覆盖」：`int t = a;` 把 a 的原值 3 存进临时变量，随后 `a = b;` 让 a 变成 8，`b = t;` 再把 3 写回 b，两步之间 a 的旧值从未丢失。易错点是三条赋值顺序颠倒会得到错误结果，且格式串里两个 `%d` 之间必须恰有一个空格。', en: 'The idea is backup before overwrite: `int t = a;` parks the original 3 of a in a temporary, then `a = b;` turns a into 8 and `b = t;` writes 3 back into b — the old value of a is never lost. The traps are reordering the three assignments (which gives a wrong result) and missing the single space between the two `%d` in the format string.' },
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

学会让程序「看情况做事」：满足条件就走这条路，不满足就走那条路。学完之后，你能写出成绩分级、判断奇偶、找最大值这类有「判断力」的程序。

## 条件分支是什么

到目前为止你写的程序都是**从上到下一条道走到黑**。但真实逻辑往往是「如果……就……否则……」：如果分不低于 90 就给 A，否则再看 80……这就是**条件分支**。

可以想象成走到一个**岔路口**：先看路牌（条件），条件成立走左边，不成立走右边。\`if\` 就是「如果」，\`else\` 就是「否则」。\`switch\` 则像**电梯按键面板**——按了哪个键就去哪层，适合「一个值对应多种情况」。

## 怎么写

if / else if / else 的基本骨架：

\`\`\`c
int score = 85;
if (score >= 90) {
    printf("A\\n");
} else if (score >= 80) {
    printf("B\\n");
} else {
    printf("C\\n");
}
\`\`\`

规则逐条看：

- 条件必须写在小括号 \`()\` 里，**不能省**。
- 条件成立时执行后面 \`{\` \`}\` 里的代码块；哪怕只有一条语句，也建议把大括号写全，防止以后加语句时出错。
- \`else if\` 可以连很多个，从上往下依次检查，**命中一个就跳过其余**。
- \`else\` 兜底「以上都不满足」，最多一个，放在最后。
- 判断顺序有讲究：上面示例从高分往低分查，所以 \`score >= 80\` 不用再写 \`score < 90\`。

**嵌套 if**：if 的代码块里还能再放 if，适合「先分大类、再分小类」的两层判断。不过嵌套太深可读性会变差，能用 \`else if\` 摊平的场景就尽量摊平。

当分支由一个**整数或字符**决定时，\`switch\` 更直观：

\`\`\`c
int day = 3;
switch (day) {
    case 1: printf("Mon\\n"); break;
    case 2: printf("Tue\\n"); break;
    case 3: printf("Wed\\n"); break;
    default: printf("Other\\n");
}
\`\`\`

- \`case 值:\` 相当于「如果 day 等于这个值」。\`default:\` 是兜底。
- 每个 case 末尾的 \`break\` **千万不能漏**：漏了会「穿透」到下一个 case 继续执行。

## 逐行读懂示例

本课示例（判断奇偶）：

\`\`\`c
int n = 7;
if (n % 2 == 0) {
    printf("even\\n");
} else {
    printf("odd\\n");
}
\`\`\`

- 第 1 行：n 装着要判断的数 7。
- 第 2 行：\`n % 2 == 0\` 意思是「n 除以 2 的余数是不是 0」——偶数余 0，奇数余 1。
- 第 3 行：条件成立（n 是偶数）时执行，打印 even。
- 第 4 行：\`else\`：上面的条件不成立（n 是奇数）时执行，打印 odd。
- n=7 余 1，条件不成立，所以输出 \`odd\`。

## 新手常犯的错误

- **= 写成了 ==**：\`if (n = 0)\` 是把 0 赋给 n，条件永远为假，还悄悄改坏了变量。比较必须用 \`==\`。
- **if 后面误加分号**：\`if (n > 5);\` 里的分号成了「空语句」，后面的花括号无论条件真假都会执行。
- **switch 忘了 break**：命中 case 后一路穿透，把后面几个 case 的语句也全执行了，输出莫名其妙的多行。
- **条件误加中文符号**：中文括号 \`（）\` 或中文引号会直接编译报错，写条件时保持英文输入法。

## 小结

- \`if (条件) {...} else if (...) {...} else {...}\`，条件必须带小括号。
- 从上往下依次检查，命中即停；else 兜底且最多一个。
- switch 适合单个整数/字符的多路分发，每个 case 记得 \`break\`。
- \`==\` 是比较、\`=\` 是赋值，条件里别写错。

下一课学**循环**：让电脑替你重复干活。`,
        en: `## What you will learn

Teach the program to "act depending on the situation": if a condition holds, take this path; otherwise take that one. Afterwards you can write programs with judgement — grade levels, even/odd checks, finding the maximum.

## What are conditionals?

So far your programs have run **straight from top to bottom**. Real logic is usually "if ... then ... otherwise ...": if the score is at least 90 give an A, otherwise check 80... That is a **conditional branch**.

Picture a **fork in the road**: read the sign (the condition); if it holds, go left, otherwise go right. \`if\` means "if", \`else\` means "otherwise". \`switch\` is like an **elevator button panel** — press a button, arrive at that floor — ideal when one value maps to several cases.

## How to write it

The basic if / else if / else skeleton:

\`\`\`c
int score = 85;
if (score >= 90) {
    printf("A\\n");
} else if (score >= 80) {
    printf("B\\n");
} else {
    printf("C\\n");
}
\`\`\`

Rule by rule:

- The condition must sit inside parentheses \`()\` — they are **required**.
- When the condition holds, the code block in the following \`{\` \`}\` runs; write the braces even for a single statement, to stay safe when you add lines later.
- You may chain many \`else if\` branches; they are checked top-down and checking **stops at the first hit**.
- \`else\` catches "none of the above" — at most one, placed last.
- Order matters: the example checks from high scores down, so \`score >= 80\` does not also need \`score < 90\`.

**Nested if**: an if block can contain another if, suited to "split into broad categories first, then subdivide" two-level decisions. Deep nesting hurts readability, though — flatten with \`else if\` whenever you can.

When the branch depends on a single **integer or character**, \`switch\` reads better:

\`\`\`c
int day = 3;
switch (day) {
    case 1: printf("Mon\\n"); break;
    case 2: printf("Tue\\n"); break;
    case 3: printf("Wed\\n"); break;
    default: printf("Other\\n");
}
\`\`\`

- \`case value:\` means "if day equals this value". \`default:\` is the catch-all.
- The \`break\` at the end of each case is **critical**: without it, execution **falls through** into the next case.

## Reading the example line by line

The example for this lesson (even or odd):

\`\`\`c
int n = 7;
if (n % 2 == 0) {
    printf("even\\n");
} else {
    printf("odd\\n");
}
\`\`\`

- Line 1: n holds the number to test, 7.
- Line 2: \`n % 2 == 0\` asks "is the remainder of n over 2 zero?" — even numbers leave 0, odd numbers leave 1.
- Line 3: runs when the condition holds (n is even), printing even.
- Line 4: \`else\` runs when the condition fails (n is odd), printing odd.
- n=7 leaves remainder 1, so the condition fails and the output is \`odd\`.

## Common beginner mistakes

- **= instead of ==**: \`if (n = 0)\` assigns 0 to n and the condition is always false — while silently corrupting the variable. Compare with \`==\`.
- **Stray semicolon after if**: \`if (n > 5);\` — the semicolon becomes an "empty statement", and the block after it runs no matter what.
- **Missing break in switch**: after a case matches, execution falls through and runs the following cases too, producing baffling extra output.
- **Chinese punctuation in conditions**: full-width parentheses \`（）\` or quotes are compile errors; keep an English input method.

## Summary

- \`if (condition) {...} else if (...) {...} else {...}\` — the condition always needs parentheses.
- Branches are checked top-down and stop at the first hit; else is the single catch-all.
- switch suits multi-way dispatch on one integer/character; \`break\` every case.
- \`==\` compares, \`=\` assigns — never mix them up in a condition.

Next lesson: **loops** — letting the computer do the repeating for you.`,
      },
      examples: [
        {
          caption: { zh: '判断奇偶', en: 'Even or odd' },
          code: '#include <stdio.h>\n\nint main(void) {\n    int n = 7;\n    if (n % 2 == 0) {\n        printf("even\\n");\n    } else {\n        printf("odd\\n");\n    }\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '成绩等级', en: 'Grade a score' },
          prompt: {
            zh: '变量 `int score = 85`。按规则输出等级（一个字母）：≥90 为 `A`，≥80 为 `B`，≥70 为 `C`，≥60 为 `D`，否则 `F`。',
            en: 'Variable `int score = 85`. Output the grade letter: ≥90 → `A`, ≥80 → `B`, ≥70 → `C`, ≥60 → `D`, otherwise `F`.',
          },
          starter: '/* 练习 1：成绩等级 */\n#include <stdio.h>\n\nint main(void) {\n    int score = 85;\n\n    return 0;\n}\n',
          expectedOutput: 'B\n',
          hints: [
            { zh: '这题练的是「多分支选择」：一个分数只能落进一个等级。动手前先想好从哪一档开始判断，才能让后面的条件不必重复写范围。', en: 'This task practices multi-way branching: one score lands in exactly one band. Decide which band to test first so the later conditions do not need to repeat ranges.' },
            { zh: '把五个等级想成一道从上往下走的楼梯：先问是否达到 A 的线，达不到再问 B 的线，一旦命中就停。每个后续条件于是只需写下限，不用再管上限。', en: 'Picture the five bands as a staircase walked from the top: first ask whether the A line is reached, and only if not, ask about B, stopping at the first hit. Each later condition then needs just its lower bound, no upper bound.' },
            { zh: '分支结构写作 `if (条件) { ... } else if (条件) { ... } else { ... }`；「大于或等于」是 `>=`，注意别写成单个 `>`。', en: 'The structure is `if (condition) { ... } else if (condition) { ... } else { ... }`; "greater than or equal" is `>=` — take care not to write a lone `>`.' },
            { zh: '骨架：`if (score >= 90) { printf("A\\n"); } else if (score >= 80) { printf("B\\n"); }` 一路往下，C、D 的线是 70、60，最后 `else { printf("F\\n"); }`。易错点：从高到低排列、花括号成对、`\\n` 别漏。', en: 'Skeleton: `if (score >= 90) { printf("A\\n"); } else if (score >= 80) { printf("B\\n"); }` and so on, with C and D at 70 and 60, ending in `else { printf("F\\n"); }`. Pitfalls: order the bands from high to low, keep braces paired, and never drop the `\\n`.' },
            { zh: '参考写法：score 为 85，`if (score >= 90)` 不成立，转入 `else if (score >= 80)` 成立，输出 B。其余分支不再执行；五个输出里最终只会命中并打印一个字母。', en: 'Reference: with score 85, `if (score >= 90)` fails and control moves to `else if (score >= 80)`, which holds and prints B. The remaining branches never run; only one letter is printed in total.' },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int score = 85;\n    if (score >= 90) {\n        printf("A\\n");\n    } else if (score >= 80) {\n        printf("B\\n");\n    } else if (score >= 70) {\n        printf("C\\n");\n    } else if (score >= 60) {\n        printf("D\\n");\n    } else {\n        printf("F\\n");\n    }\n    return 0;\n}\n',
          solutionNote: { zh: '解法把条件按阈值从高到低排成一条链：85 先不满足 ≥90，接着命中 `score >= 80`，随即停在 B 分支，后面的 else if 与 else 都不执行，因此只输出一个字母。关键点在于阈值必须从大到小排列、比较用 `>=` 而非 `>`，否则 85 会落入错误等级。', en: 'The solution lines the conditions up as a chain with thresholds from high to low: 85 fails the ≥90 test, then hits `score >= 80` and stops at the B branch, so the remaining else-if and else never run and only one letter prints. The keys are ordering thresholds from largest to smallest and comparing with `>=` instead of `>`, otherwise 85 falls into the wrong band.' },
        },
        {
          id: 'ex2',
          title: { zh: '三个数找最大', en: 'Max of three' },
          prompt: {
            zh: '变量 `a = 12`、`b = 7`、`c = 9`。用 if/else 输出最大的数（不要用 `?:` 之外的库函数）。',
            en: 'Variables `a = 12`, `b = 7`, `c = 9`. Use if/else to print the largest (no library helpers).',
          },
          starter: '/* 练习 2：找最大值 */\n#include <stdio.h>\n\nint main(void) {\n    int a = 12, b = 7, c = 9;\n\n    return 0;\n}\n',
          expectedOutput: '12\n',
          hints: [
            { zh: '「最大」可以翻译成一句更程序化的话：它不比另外两个数中的任何一个小。这一课要在 if 里同时验证两个关系，先想清楚用哪个逻辑连接词。', en: '"Largest" can be reworded in a more program-like way: it is not smaller than either of the other two. Here the if must verify two relations at once — work out which logical connector joins them.' },
            { zh: '把候选者一个个试：先假设 a 最大，看它是否同时盖过 b 和 c；若不行，再假设 b 最大；若 a、b 都不是，剩下的 c 就是最大。', en: 'Try the candidates one by one: first assume a is largest and check whether it beats both b and c; if not, assume b is largest; if neither a nor b wins, the remaining c is the largest.' },
            { zh: '两个比较同时成立用逻辑与 `&&` 连接，例如 `a >= b && a >= c`；命中的数用整数格式符 `%d` 输出。', en: 'Two comparisons that must hold together are joined with logical and `&&`, e.g. `a >= b && a >= c`; print the winner with the integer specifier `%d`.' },
            { zh: '骨架：`if (a >= b && a >= c)` 输出 a；`else if (b >= a && b >= c)` 输出 b；`else` 输出 c。易错点：`&&` 必须写两个 &，单个 & 是按位与；用 `>=` 让相等时也能正确判定；每行输出都带 `\\n`。', en: 'Skeleton: print a under `if (a >= b && a >= c)`, print b under `else if (b >= a && b >= c)`, and print c in `else`. Pitfalls: `&&` needs two ampersands (one `&` is a bitwise operator), `>=` keeps ties correct, and each printed line ends with `\\n`.' },
            { zh: '参考写法：`if (a >= b && a >= c) { printf("%d\\n", a); } else if (b >= a && b >= c) { printf("%d\\n", b); } else { printf("%d\\n", c); }`。a=12 同时满足两个条件，第一分支直接输出 12。', en: 'Reference: `if (a >= b && a >= c) { printf("%d\\n", a); } else if (b >= a && b >= c) { printf("%d\\n", b); } else { printf("%d\\n", c); }`. With a=12 both conditions hold, so the first branch prints 12 right away.' },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int a = 12, b = 7, c = 9;\n    if (a >= b && a >= c) {\n        printf("%d\\n", a);\n    } else if (b >= a && b >= c) {\n        printf("%d\\n", b);\n    } else {\n        printf("%d\\n", c);\n    }\n    return 0;\n}\n',
          solutionNote: { zh: '解法把「最大」翻成「同时不小于另外两个」：a 既 ≥b 又 ≥c 就输出 a，否则让 b 接受同样检验，两者都失败则说明 c 最大。a=12 的两个条件同时成立，因此第一分支直接输出 12。注意 `&&` 要写两个 &，用 `>=` 能让并列值也判定正确；也可以用「max 变量逐个比较」的写法，效果相同。', en: 'The solution translates "largest" into "not smaller than both others": if a is ≥b and ≥c print a, otherwise let b pass the same test, and if both fail then c is the largest. Both conditions hold for a=12, so the first branch prints 12 immediately. Remember that `&&` needs two ampersands and `>=` keeps ties correct; a "max variable compared one by one" approach also works.' },
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

学会让程序**重复干活**：用循环把 1 加到 100、打印九九乘法表这类任务交给电脑。学完之后，你就掌握了编程里最省力的武器——让几行代码干几万次的活。

## 循环是什么

如果让你写「打印 1 到 100」，总不能写 100 行 printf。**循环**就是让一段代码**有条件地重复执行**的结构：设一个计数器，每重复一轮就把计数器加一，直到条件不再满足才停。

可以想象成**跑操场圈数**：出发前定好跑 5 圈（条件），每跑完一圈数一次（步进），数够 5 圈就停下（条件失效）。C 提供三种循环写法，最常用的是 \`for\`；\`while\` 适合「不知道要跑多少轮，只知道何时停」的场景。

## 怎么写

**for 循环**——已知要重复几次时的首选：

\`\`\`c
for (int i = 0; i < 5; i++) {
    printf("%d\\n", i);       // 依次输出 0 1 2 3 4
}
\`\`\`

小括号里三段用分号隔开，缺一不可：

- \`int i = 0\`：**初始化**，进跑道前先做一次（这里顺便声明了计数器 i）。
- \`i < 5\`：**条件**，每轮开始前检查，成立才继续跑。
- \`i++\`：**步进**，每轮结束后执行，让 i 逐渐逼近终点，否则条件永远成立。

**while 循环**——条件成立就一直转：

\`\`\`c
int n = 1;
while (n <= 3) {
    printf("%d\\n", n);
    n++;                      // 忘了这句就死循环！
}
\`\`\`

**do-while 循环**——先跑一轮再检查条件，**至少执行一次**：

\`\`\`c
int n = 0;
do {
    printf("%d\\n", n);
    n++;
} while (n < 1);             // 注意末尾有分号
\`\`\`

**break 与 continue**——循环里的两个「急刹车」：

- \`break\`：立即跳出**整个**循环，后面的轮次全不跑了。
- \`continue\`：跳过**本轮**剩余语句，直接进入下一轮。

\`\`\`c
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;    // 3 这轮直接跳过
    if (i == 6) break;       // 到 6 就收工
    printf("%d\\n", i);       // 输出 0 1 2 4 5
}
\`\`\`

## 逐行读懂示例

本课示例（累加 1 到 100）：

\`\`\`c
int total = 0;
for (int i = 1; i <= 100; i++) {
    total += i;
}
printf("%d\\n", total);   // 5050
\`\`\`

- 第 1 行：准备一个「累加器」total，先装 0——加法的起点。
- 第 2 行：计数器 i 从 1 出发，条件是「i 还没超过 100」，每轮 i 加 1。
- 第 3 行：\`total += i\` 是 \`total = total + i\` 的简写——把这一轮的 i 累加进盒子。
- 循环结束后，total 里装着 1+2+…+100 = 5050。
- 最后一行：打印结果。

## 新手常犯的错误

- **死循环**：while 里忘了 \`i++\`，条件永远成立，程序卡死直到超时被杀。检查每轮是否有让条件变假的语句。
- **条件边界差一**：想跑 5 轮写成 \`i <= 5\` 而初始化是 \`i = 0\`，实际跑了 6 轮（0~5）。数清楚起止。
- **for 里用逗号分隔三段**：\`for (int i = 0, i < 5, i++)\` 报错——三段之间是**分号**。
- **do-while 忘了分号**：\`} while (n < 1)\` 后面少了 \`;\`，编译报错。
- **循环外使用循环变量**：\`for (int i = 0; ...)\` 里声明的 i 出了循环就不存在了，循环结束后再引用 i 会报「未声明」。想在循环后继续用 i，就把它声明在 for 外面。

## 小结

- for 三段：初始化；条件；步进，用分号隔开。
- while 先检查再执行；do-while 先执行再检查，至少跑一轮。
- break 跳出整个循环，continue 只跳过本轮。
- 循环体内必须存在让条件最终变假的路径，否则死循环。

下一课学**函数**：把一段逻辑打包成可以反复使用的「零件」。`,
        en: `## What you will learn

Make the program **do repetitive work**: with loops, tasks like summing 1 to 100 or printing a times table are handed to the computer. Afterwards you wield the most labor-saving weapon in programming — a few lines doing tens of thousands of rounds.

## What is a loop?

You obviously cannot write 100 printf lines to print 1 to 100. A **loop** is a structure that **repeats a block of code while a condition holds**: set a counter, bump it after each round, and stop once the condition fails.

Picture **running laps on a track**: decide before starting that you will run 5 laps (the condition), count one lap each time you pass (the step), and stop when you reach 5 (the condition fails). C offers three loop forms; \`for\` is the most common, while \`while\` fits "I do not know how many rounds, only when to stop".

## How to write it

**for loop** — the first choice when the number of rounds is known:

\`\`\`c
for (int i = 0; i < 5; i++) {
    printf("%d\\n", i);       // prints 0 1 2 3 4
}
\`\`\`

Three parts inside the parentheses, separated by semicolons, all required:

- \`int i = 0\`: **init** — runs once before entering the track (and declares the counter i here).
- \`i < 5\`: **condition** — checked before every round; run only while it holds.
- \`i++\`: **step** — runs after every round, moving i toward the finish; without it the condition would hold forever.

**while loop** — spins while the condition holds:

\`\`\`c
int n = 1;
while (n <= 3) {
    printf("%d\\n", n);
    n++;                      // forget this and you get an infinite loop!
}
\`\`\`

**do-while loop** — runs one round first, then checks; **always runs at least once**:

\`\`\`c
int n = 0;
do {
    printf("%d\\n", n);
    n++;
} while (n < 1);             // note the trailing semicolon
\`\`\`

**break & continue** — the two emergency brakes inside loops:

- \`break\`: exit the **entire** loop immediately; all remaining rounds are skipped.
- \`continue\`: skip the rest of **this** round and jump straight to the next one.

\`\`\`c
for (int i = 0; i < 10; i++) {
    if (i == 3) continue;    // skip the round for 3
    if (i == 6) break;       // stop at 6
    printf("%d\\n", i);       // prints 0 1 2 4 5
}
\`\`\`

## Reading the example line by line

The example for this lesson (sum 1 to 100):

\`\`\`c
int total = 0;
for (int i = 1; i <= 100; i++) {
    total += i;
}
printf("%d\\n", total);   // 5050
\`\`\`

- Line 1: prepare an "accumulator" total, starting at 0 — the starting point of any sum.
- Line 2: the counter i starts at 1, the condition is "i has not exceeded 100", and i gains 1 each round.
- Line 3: \`total += i\` is shorthand for \`total = total + i\` — add this round's i into the box.
- After the loop, total holds 1+2+…+100 = 5050.
- The last line prints the result.

## Common beginner mistakes

- **Infinite loop**: forgetting \`i++\` inside while, so the condition never turns false; the program hangs until it is killed. Verify each round moves the condition toward false.
- **Off-by-one bounds**: intending 5 rounds but writing \`i <= 5\` with \`i = 0\` runs 6 rounds (0 through 5). Count your start and end carefully.
- **Commas between the three for parts**: \`for (int i = 0, i < 5, i++)\` is an error — the separators are **semicolons**.
- **Missing semicolon after do-while**: \`} while (n < 1)\` without the \`;\` fails to compile.
- **Using the loop variable outside**: the i declared in \`for (int i = 0; ...)\` stops existing once the loop ends; referencing i afterwards reports "undeclared". Declare it above the for if you need it later.

## Summary

- The three for parts — init; condition; step — are separated by semicolons.
- while checks first, runs after; do-while runs first, checks after, and always runs at least once.
- break exits the whole loop; continue only skips the current round.
- The body must eventually make the condition false, or the loop never ends.

Next lesson: **functions** — packaging a block of logic into a reusable "part".`,
      },
      examples: [
        {
          caption: { zh: '累加 1 到 100', en: 'Sum 1 to 100' },
          code: '#include <stdio.h>\n\nint main(void) {\n    int total = 0;\n    for (int i = 1; i <= 100; i++) {\n        total += i;\n    }\n    printf("%d\\n", total);   // 5050\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '求和 1~100', en: 'Sum 1..100' },
          prompt: {
            zh: '用循环计算 1+2+…+100 的和并输出（应为 5050）。不要直接套公式。',
            en: 'Use a loop to compute 1+2+…+100 and print the sum (should be 5050). Do not use the closed-form formula.',
          },
          starter: '/* 练习 1：累加 */\n#include <stdio.h>\n\nint main(void) {\n    /* int total = 0; for (i = 1; i <= 100; i++) total += i; */\n\n    return 0;\n}\n',
          expectedOutput: '5050\n',
          hints: [
            { zh: '一百个数挨个相加，本质就是「循环 + 累加」。回想这课的核心套路：一个变量装总和、一个当计数器，让循环把计数器走完整个范围，每轮把计数器的值加进总和。', en: 'Adding one hundred numbers one by one is, at heart, "loop + accumulation". Recall the core pattern of this lesson: one variable holds the running total, one acts as a counter, the loop walks the counter through the whole range, and each round adds the counter into the total.' },
            { zh: '把任务拆成三步：先把总数变量初始化为 0；再让计数器从 1 走到 100；循环体里把「这一轮的 i」累加进总数。输出要放在循环结束之后，且只输出一次。', en: 'Break it into three jobs: initialize the total variable to 0; make the counter walk from 1 to 100; and inside the loop add "the current i" to the total. Print after the loop finishes, exactly once.' },
            { zh: '循环头写作 `for (int i = 1; i <= 100; i++)`，循环体用 `total += i;` 累加——`+=` 是「自己加自己」的简写。', en: 'The loop header is `for (int i = 1; i <= 100; i++)` and the body accumulates with `total += i;` — `+=` is the shorthand for adding a value to the variable itself.' },
            { zh: '骨架：`int total = 0;`，接着 `for (int i = 1; i <= 100; i++) { total += i; }`，最后 `printf("%d\\n", total);`。易错点：条件是 `i <= 100`，写成 `<` 会漏掉 100；total 必须在循环前归零；输出在循环外，只打一次。', en: 'Skeleton: `int total = 0;`, then `for (int i = 1; i <= 100; i++) { total += i; }`, then `printf("%d\\n", total);`. Pitfalls: the condition is `i <= 100` — a `<` would skip the 100 — total must be zeroed before the loop, and the print stays outside the loop so it runs once.' },
            { zh: '参考写法：`int total = 0;` 后写 `for (int i = 1; i <= 100; i++) { total += i; }`，循环外 `printf("%d\\n", total);`。i 从 1 走到 100，total 逐个累加，最终输出 5050。', en: 'Reference: `int total = 0;`, then `for (int i = 1; i <= 100; i++) { total += i; }`, then `printf("%d\\n", total);` outside the loop. As i walks from 1 to 100, total grows step by step and the final output is 5050.' },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int total = 0;\n    for (int i = 1; i <= 100; i++) {\n        total += i;\n    }\n    printf("%d\\n", total);\n    return 0;\n}\n',
          solutionNote: { zh: '解法用「计数器 + 累加器」两个变量：for 让 i 从 1 递增到 100，每轮把 i 加进 total（等价于 `total = total + i`），循环结束后一次 printf 输出 5050。关键是 total 初始化为 0、循环条件写成 `i <= 100` 不漏掉 100、输出放在循环外只执行一次；用 while 循环也能写同样的逻辑。', en: 'The solution pairs a counter with an accumulator: the for loop advances i from 1 to 100 and each round adds i into total (equivalent to `total = total + i`), then one printf after the loop prints 5050. The essentials are initializing total to 0, writing `i <= 100` so the 100 is not skipped, and printing once outside the loop; a while loop could express the same logic.' },
        },
        {
          id: 'ex2',
          title: { zh: '乘法口诀', en: 'Times table' },
          prompt: {
            zh: '输出 7 的乘法口诀，共 9 行，格式**严格**为 `7 x 1 = 7`、`7 x 2 = 14`…`7 x 9 = 63`（数字与字母 x 之间有空格）。',
            en: 'Print the 7 times table, 9 lines, in the **exact** format `7 x 1 = 7`, `7 x 2 = 14`, …, `7 x 9 = 63` (spaces around `x` and `=`).',
          },
          starter: '/* 练习 2：乘法口诀 */\n#include <stdio.h>\n\nint main(void) {\n\n    return 0;\n}\n',
          expectedOutput: '7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n',
          hints: [
            { zh: '九行输出的形状完全相同，只是数字在变——这正是循环最典型的用武之地。先分辨每行里哪些是「每次变化的量」，哪些是「原样不变的字」。', en: 'All nine lines share one identical shape with only the numbers changing — the most typical job for a loop. First separate each line into what varies every time and what stays literally the same.' },
            { zh: '拆解成两条线：让计数器 i 走 1 到 9，代表等号左边的 1 到 9；等号右边的结果不是写死的数字，而是用 i 实时算出来的乘积。', en: 'Split it into two threads: the counter i walks 1 to 9 and supplies the number on the left of the equals sign, while the right side is not a fixed digit but the product computed from i on the fly.' },
            { zh: '一条 printf 里可以放多个占位符：`printf("7 x %d = %d\\n", i, 7 * i);`——第一个 `%d` 填 i，第二个填乘积。', en: 'One printf can carry several placeholders: `printf("7 x %d = %d\\n", i, 7 * i);` — the first `%d` takes i, the second takes the product.' },
            { zh: '骨架：`for (int i = 1; i <= 9; i++) { printf("7 x %d = %d\\n", i, 7 * i); }`。易错点：格式串里 `x` 和 `=` 两边各有一个空格；两个占位符与后面两个参数按顺序一一对应；固定文字 7 直接写字面，不要写成占位符。', en: 'Skeleton: `for (int i = 1; i <= 9; i++) { printf("7 x %d = %d\\n", i, 7 * i); }`. Pitfalls: keep one space on each side of `x` and `=`, line up the two placeholders with the two arguments in order, and write the fixed 7 as a literal, not a placeholder.' },
            { zh: '参考写法：`for (int i = 1; i <= 9; i++) { printf("7 x %d = %d\\n", i, 7 * i); }`。i 每取一个值就印一行，i=1 到 9 正好 9 行，例如第 2 轮输出 `7 x 2 = 14`。', en: 'Reference: `for (int i = 1; i <= 9; i++) { printf("7 x %d = %d\\n", i, 7 * i); }`. Each value of i prints one line, so i=1 through 9 gives exactly nine lines, e.g. round two prints `7 x 2 = 14`.' },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    for (int i = 1; i <= 9; i++) {\n        printf("7 x %d = %d\\n", i, 7 * i);\n    }\n    return 0;\n}\n',
          solutionNote: { zh: '循环每次迭代只改变两个量：等号左边的乘数 i 和等号右边的乘积 `7 * i`，格式串其余部分原样重复，于是 9 轮拼出 9 行口诀。关键在于格式串中空格的位置必须与题目一致，且两个 `%d` 与参数 i、`7 * i` 按先后顺序对应；同样的思路套上双重循环即可输出整张乘法表。', en: 'Each iteration of the loop varies only two things — the multiplier i on the left and the product `7 * i` on the right — while the rest of the format string repeats unchanged, so nine rounds produce the nine lines. The key is matching the spaces in the format string to the task and pairing the two `%d` placeholders with i and `7 * i` in order; nesting another loop around this idea would print the whole times table.' },
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

学会把一段逻辑**打包成函数**：起个名字、定好输入和输出，之后随叫随到。学完之后，你能写出 \`is_prime\`、\`factorial\` 这样的自定义工具，让 main 变得清爽。

## 函数是什么

你其实早就在用函数了——\`printf\` 就是别人写好的函数。**函数**是「把一段代码打包、起名、可重复调用」的机制，就像厨房里的**搅拌机**：你不用关心里面刀片怎么转，只要按配方放料（**参数**）、按下开关，就能得到成品（**返回值**）。

写函数的意义：一段逻辑写一次，到处复用；main 里只剩「做什么」，细节全藏在函数里。**递归**是函数的特别玩法——函数自己调用自己，适合「大问题可以拆成同款小问题」的场景，比如阶乘。

## 怎么写

定义函数的语法：

\`\`\`c
返回类型 函数名(参数类型 参数名, ...) {
    函数体
    return 返回值;
}
\`\`\`

一个加法函数：

\`\`\`c
int add(int a, int b) {
    return a + b;
}
\`\`\`

规则逐条看：

- \`int\` 在最前面：**返回类型**，说明函数算完交回什么类型的结果；不交回任何东西就写 \`void\`。
- \`(int a, int b)\`：**参数表**，每个参数都要写类型；调用时传入的值会按顺序装进 a、b。
- \`return a + b;\`：把结果送回调用处，并**立即结束**函数。
- 调用就是写函数名加实参：\`add(3, 4)\` 得到 7。

**定义位置有讲究**：C 是从上往下读代码的，如果函数定义在 main **之后**，main 里调用它会报「未声明」。解决办法是先给一行**原型声明**：

\`\`\`c
int add(int, int);        // 原型：只写类型，不写参数名

int main(void) {
    printf("%d\\n", add(2, 3));
    return 0;
}

int add(int a, int b) {
    return a + b;
}
\`\`\`

**值传递**：C 默认把参数**复制一份**给函数，函数内改动的是副本，**影响不到**外面的原变量：

\`\`\`c
void bump(int x) {
    x = x + 1;       // 改的只是副本
}
\`\`\`

想让函数真正改外面的变量？下一章「指针」会揭晓。

## 逐行读懂示例

本课示例代码：

\`\`\`c
int square(int n);
int sum(int a, int b);

int main(void) {
    printf("%d %d\\n", square(5), sum(3, 4));   // 25 7
    return 0;
}

int square(int n) {
    return n * n;
}

int sum(int a, int b) {
    return a + b;
}
\`\`\`

- 第 1~2 行：两个原型声明，告诉编译器「这两个函数存在，长这样」，定义在后面也没问题。
- 第 4~7 行：main 里直接调用 \`square(5)\` 和 \`sum(3, 4)\`，返回值 25 和 7 被填进 \`%d\` 打印。
- 第 10 行起：\`square\` 的真正定义——算 n 的平方并 return 回去。
- 最后：\`sum\` 定义同理，返回两数之和。

## 新手常犯的错误

- **忘了原型**：函数定义在 main 之后又不声明原型，报 \`implicit declaration\` 之类错误。把定义搬到 main 前面，或补一行原型。
- **return 类型不匹配**：声明返回 \`int\` 却 \`return 3.14;\`，小数被悄悄截断。类型要前后一致。
- **void 函数里 return 值**：\`void f() { return 5; }\` 编译报错——void 表示什么都不交回。
- **参数个数不匹配**：\`add(3)\` 少给参数，编译警告或报错，实参个数和类型要对上。

## 小结

- 函数 = 返回类型 + 名字 + 参数表 + 函数体，\`return\` 交回结果并立即退出。
- 先定义后使用；定义在后面就补原型声明。
- C 按值传递：函数拿到的是副本，改不动外面的变量。
- 递归是函数调用自己，必须有让递归停止的出口条件。

下一课学**数组**：把一排数据装进一个名字里。`,
        en: `## What you will learn

Learn to **package logic into functions**: give it a name, define its inputs and output, then call it whenever needed. Afterwards you can build custom tools like \`is_prime\` and \`factorial\`, keeping main clean and tidy.

## What is a function?

You have been using functions all along — \`printf\` is a function someone else wrote. A **function** is a mechanism that "wraps a block of code, names it, and lets it be called repeatedly" — like a **blender** in the kitchen: you never worry about how the blades spin; you load the ingredients (**parameters**), press the button, and collect the result (**return value**).

Why functions matter: write the logic once, reuse it everywhere; main keeps only the "what to do" while the details hide inside functions. **Recursion** is a special move — a function calling itself — great when a big problem splits into smaller copies of itself, like factorials.

## How to write it

The syntax for defining a function:

\`\`\`c
return_type name(parameter_type parameter_name, ...) {
    body
    return value;
}
\`\`\`

An add function:

\`\`\`c
int add(int a, int b) {
    return a + b;
}
\`\`\`

Rule by rule:

- The leading \`int\` is the **return type**, saying what type of result the function hands back; write \`void\` if it returns nothing.
- \`(int a, int b)\` is the **parameter list**; every parameter needs a type. Values you pass in are loaded into a and b in order.
- \`return a + b;\` sends the result back to the caller and **immediately ends** the function.
- Calling it is just the name plus arguments: \`add(3, 4)\` yields 7.

**Position matters**: C reads code top-down, so if a function is defined **after** main, calling it inside main triggers an "undeclared" error. The fix is a one-line **prototype declaration**:

\`\`\`c
int add(int, int);        // prototype: types only, no parameter names

int main(void) {
    printf("%d\\n", add(2, 3));
    return 0;
}

int add(int a, int b) {
    return a + b;
}
\`\`\`

**Pass by value**: C **copies** each argument for the function; changes inside only touch the copy and **cannot reach** the caller's variables:

\`\`\`c
void bump(int x) {
    x = x + 1;       // only the copy changes
}
\`\`\`

Want a function to genuinely modify an outside variable? The next chapter — Pointers — reveals how.

## Reading the example line by line

The example code for this lesson:

\`\`\`c
int square(int n);
int sum(int a, int b);

int main(void) {
    printf("%d %d\\n", square(5), sum(3, 4));   // 25 7
    return 0;
}

int square(int n) {
    return n * n;
}

int sum(int a, int b) {
    return a + b;
}
\`\`\`

- Lines 1-2: two prototype declarations telling the compiler "these functions exist and look like this", so defining them later is fine.
- Lines 4-7: main simply calls \`square(5)\` and \`sum(3, 4)\`; the returned 25 and 7 fill the \`%d\` slots and get printed.
- From line 10: the actual definition of \`square\` — compute the square of n and return it.
- Finally: \`sum\` is defined the same way, returning the sum of two numbers.

## Common beginner mistakes

- **Missing prototype**: defining the function after main without a prototype produces errors like \`implicit declaration\`. Move the definition above main, or add a prototype line.
- **Return type mismatch**: declaring \`int\` but writing \`return 3.14;\` silently truncates the fraction. Keep types consistent.
- **Returning a value from void**: \`void f() { return 5; }\` is a compile error — void means nothing comes back.
- **Argument count mismatch**: \`add(3)\` with a missing argument warns or errors; the count and types of arguments must line up.

## Summary

- A function = return type + name + parameter list + body; \`return\` hands back the result and exits immediately.
- Define before use; if the definition comes later, add a prototype.
- C passes by value: the function gets a copy and cannot change the caller's variables.
- Recursion is a function calling itself and needs a stopping condition.

Next lesson: **arrays** — packing a row of data under one name.`,
      },
      examples: [
        {
          caption: { zh: '原型 + 多函数', en: 'Prototype + multiple functions' },
          code: '#include <stdio.h>\n\nint square(int n);\nint sum(int a, int b);\n\nint main(void) {\n    printf("%d %d\\n", square(5), sum(3, 4));   // 25 7\n    return 0;\n}\n\nint square(int n) {\n    return n * n;\n}\n\nint sum(int a, int b) {\n    return a + b;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '判断素数', en: 'Prime checker' },
          prompt: {
            zh: '编写函数 `is_prime(int n)`：是素数返回 1，否则返回 0。然后用它**每行一个**输出 20 以内的所有素数（2 3 5 7 11 13 17 19，共 8 行）。',
            en: 'Write `is_prime(int n)` returning 1 for primes else 0. Then print every prime below 20, **one per line** (2 3 5 7 11 13 17 19 — 8 lines).',
          },
          starter: '/* 练习 1：素数 */\n#include <stdio.h>\n\nint is_prime(int n) {\n    /* 在下面实现 */\n    return 0;\n}\n\nint main(void) {\n    /* 输出 20 以内的素数 */\n    return 0;\n}\n',
          expectedOutput: '2\n3\n5\n7\n11\n13\n17\n19\n',
          hints: [
            { zh: '先抓住素数的定义：除 1 和它本身外没有别的约数。这决定了检验方法——拿一组候选数逐个去试除；同时留意定义里的边界：哪些数连试都不必试，就该直接判「不是素数」。', en: 'Start from the definition of a prime: no divisors besides 1 and itself. That decides the method — trial-divide by a set of candidates; also notice the boundary in the definition: which numbers can be rejected as non-prime without any trial at all.' },
            { zh: '题目分两半：一半是让 `is_prime(n)` 返回 1 或 0（试除加提前返回），另一半是在 main 里走一遍 2 到 19，命中素数就打印一行。先写函数，再写调用它的循环。', en: 'The task splits in two: make `is_prime(n)` return 1 or 0 (trial division with early returns), and loop 2 through 19 in main, printing each prime on its own line. Write the function first, then the loop that calls it.' },
            { zh: '「能整除」的判断式是 `n % i == 0`——余数为 0 说明 i 是 n 的约数，此时应立刻 `return 0`；函数里的 return 会当场结束这次调用。', en: 'The divisibility test is `n % i == 0` — a remainder of 0 means i is a divisor of n, so return 0 right away; a return inside the function ends that call on the spot.' },
            { zh: '函数骨架：先 `if (n < 2) return 0;`，再 `for (int i = 2; i < n; i++) { if (n % i == 0) return 0; }`，循环结束后 `return 1;`。易错点：小于 2 的数直接判非素数；试除只要到 `i < n`，写成 `i <= n` 会让素数都被自己整除而误判；main 的范围是 2 到 19。', en: 'Function skeleton: `if (n < 2) return 0;`, then `for (int i = 2; i < n; i++) { if (n % i == 0) return 0; }`, and `return 1;` after the loop. Pitfalls: numbers below 2 are non-prime immediately; trial-divide only up to `i < n` — `i <= n` lets every prime be divided by itself and misjudged; and the main loop runs 2 through 19.' },
            { zh: '参考写法：is_prime 内依次是 `if (n < 2) return 0;`、`for (int i = 2; i < n; i++) { if (n % i == 0) return 0; }`、`return 1;`；main 里 `for (int n = 2; n < 20; n++)`，只要 `is_prime(n)` 为真就 `printf("%d\\n", n);`。结果依次是 2、3、5、7、11、13、17、19，共 8 行。', en: 'Reference: inside is_prime write `if (n < 2) return 0;`, `for (int i = 2; i < n; i++) { if (n % i == 0) return 0; }` and `return 1;`; in main loop `for (int n = 2; n < 20; n++)` and print `printf("%d\\n", n);` whenever `is_prime(n)` is true. The output is 2, 3, 5, 7, 11, 13, 17, 19 — eight lines.' },
          ],
          solution: '#include <stdio.h>\n\nint is_prime(int n) {\n    if (n < 2) return 0;\n    for (int i = 2; i < n; i++) {\n        if (n % i == 0) return 0;\n    }\n    return 1;\n}\n\nint main(void) {\n    for (int n = 2; n < 20; n++) {\n        if (is_prime(n)) {\n            printf("%d\\n", n);\n        }\n    }\n    return 0;\n}\n',
          solutionNote: { zh: '解法把判断封装进 `is_prime`：小于 2 直接返回 0；对 2 到 n-1 逐个取余，一旦发现整除立即返回 0，整轮无约数则返回 1。main 对 2 到 19 逐个调用它并把素数按行打印。关键点：整除用 `n % i == 0` 判定，试除只需到 `i < n`；若要提速可只试除到 n 的平方根，思路完全相同。', en: 'The solution wraps the test in `is_prime`: values below 2 return 0 at once; trial-dividing by every integer from 2 to n-1, it returns 0 the moment a divisor shows up and returns 1 when none does. Main calls it for each number from 2 to 19 and prints the primes line by line. The essentials are the remainder test `n % i == 0` and stopping the trial at `i < n`; stopping at the square root of n speeds it up with the same idea.' },
        },
        {
          id: 'ex2',
          title: { zh: '求阶乘', en: 'Factorial' },
          prompt: {
            zh: '编写函数 `int factorial(int n)`（0! = 1）。调用它输出 5! 的值（应为 120），单独一行。',
            en: 'Write `int factorial(int n)` (with 0! = 1). Call it to print the value of 5! (should be 120), on its own line.',
          },
          starter: '/* 练习 2：阶乘 */\n#include <stdio.h>\n\nint factorial(int n) {\n    /* 在下面实现 */\n    return 1;\n}\n\nint main(void) {\n\n    return 0;\n}\n',
          expectedOutput: '120\n',
          hints: [
            { zh: '阶乘的定义本身就带着「重复」：`n! = n × (n-1)!`。这题练递归——函数在函数体内调用自己。先想：这种自我调用如果没有尽头会怎样？', en: 'The definition of factorial already repeats itself: `n! = n × (n-1)!`. This task practices recursion — a function calling itself inside its own body. First ask: what happens if such self-calls never stop?' },
            { zh: '递归永远由两半拼成：一半是「出口」，参数小到某个值时直接返回一个固定结果，不再往下调；另一半是「递推」，返回当前参数乘上再小一号的递归调用。', en: 'Recursion always has two halves: the "exit", where a small enough parameter returns a fixed result and stops the chain, and the "recurrence", which returns the current parameter times a recursive call one size smaller.' },
            { zh: '题目的函数签名已经给定：`int factorial(int n)`。出口写作 `if (n <= 1) return 1;`，递推写作 `return n * factorial(n - 1);`。', en: 'The signature `int factorial(int n)` is already given. Write the exit as `if (n <= 1) return 1;` and the recurrence as `return n * factorial(n - 1);`.' },
            { zh: '骨架：函数体内第一行放出口 `if (n <= 1) return 1;`，随后 `return n * factorial(n - 1);`；main 里用 `printf("%d\\n", factorial(5));` 输出。易错点：出口必须写在递推之前且确实能到达——参数每次减 1，最终落进 n=1 或 0 停住，才不会无限递归。', en: 'Skeleton: put the exit `if (n <= 1) return 1;` first inside the body, then `return n * factorial(n - 1);`; in main print with `printf("%d\\n", factorial(5));`. Pitfall: the exit must come first and actually be reachable — the argument drops by 1 each call until it lands on 1 or 0 and stops, which is what prevents endless recursion.' },
            { zh: '参考写法：`int factorial(int n) { if (n <= 1) return 1; return n * factorial(n - 1); }`，main 里 `printf("%d\\n", factorial(5));`。5! 一路展开为 5×4×3×2×1，输出 120。', en: 'Reference: `int factorial(int n) { if (n <= 1) return 1; return n * factorial(n - 1); }`, and in main `printf("%d\\n", factorial(5));`. The chain unfolds 5! as 5 × 4 × 3 × 2 × 1 and prints 120.' },
          ],
          solution: '#include <stdio.h>\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint main(void) {\n    printf("%d\\n", factorial(5));\n    return 0;\n}\n',
          solutionNote: { zh: '递归解法把阶乘定义直接写成代码：`if (n <= 1) return 1;` 同时兜住 0! 与 1!，其余情况返回 `n * factorial(n - 1)`，参数每层减一，最终停在出口上。5 的调用会依次展开成 5×4×3×2×1 得到 120。易错点：忘记出口会导致无限递归；本题也可用 for 循环迭代实现，结果一致。', en: 'The recursive solution turns the definition of factorial straight into code: `if (n <= 1) return 1;` covers both 0! and 1!, while every other case returns `n * factorial(n - 1)`, shrinking the argument by one each level until it reaches the exit. The call for 5 unfolds into 5 × 4 × 3 × 2 × 1 and yields 120. Forgetting the exit causes infinite recursion; an iterative for loop would produce the same result.' },
        },
      ],
    },

    // ================= 7. 数组 =================
    {
      id: 'arrays',
      title: { zh: '数组', en: 'Arrays' },
      difficulty: 2,
      lecture: {
        zh: `## 这节课学什么

学会用**一个名字管理一排数据**：把 5 个成绩、100 个温度装进数组，配合循环批量处理。学完之后，你能完成求和、找最大值、打印矩阵这类任务。

## 数组是什么

前面的变量一个名字只能装**一个**值。如果要存全班 50 人的成绩，总不能声明 50 个变量。**数组**就是「一排规格相同、连续摆放的盒子」——它们共用一个名字（比如 \`a\`），靠**下标**编号区分（\`a[0]\`、\`a[1]\`、\`a[2]\`……）。

可以想象成**酒店的一排房间**：酒店名是数组名，房号是下标。关键规则：**房号从 0 开始**——5 个房间是 0 到 4 号，没有 5 号房。数组还有个重要特点：**规格（大小）在建好后就定死了**，不能中途加房间。

## 怎么写

**声明并初始化一维数组**：

\`\`\`c
int nums[5] = {4, 8, 15, 16, 23};
\`\`\`

- \`int\` 是每个元素的类型；\`[5]\` 表示共 5 个元素。
- 花括号里按顺序列出初始值，用逗号分隔。
- 访问某个元素：\`nums[0]\` 是第一个（4），\`nums[4]\` 是最后一个（23）。

**遍历**：数组天生配 for 循环——下标从 0 走到「长度减 1」：

\`\`\`c
for (int i = 0; i < 5; i++) {
    printf("%d\\n", nums[i]);   // i 依次是 0 1 2 3 4
}
\`\`\`

**求长度**（仅在声明处可见时有效）：

\`\`\`c
int n = sizeof(nums) / sizeof(nums[0]);
\`\`\`

即「整个数组占的字节数 ÷ 单个元素的字节数」。C **没有**自带的 length 属性，长度需要自己记录。

**二维数组**——表格/矩阵：

\`\`\`c
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
printf("%d\\n", matrix[1][2]);   // 6：第 1 行第 2 列
\`\`\`

用**双重 for** 遍历：外层走行，内层走列。

## 逐行读懂示例

本课示例（找最大值 + 二维遍历）：

\`\`\`c
int a[5] = {3, 1, 4, 1, 5};
int max = a[0];
for (int i = 1; i < 5; i++) {
    if (a[i] > max) max = a[i];
}
printf("max = %d\\n", max);     // max = 5
\`\`\`

- 第 1 行：装好 5 个数。
- 第 2 行：先假设**第一个元素**最大——擂台赛总得有个初始擂主。
- 第 3~4 行：从第 2 个元素起依次打擂台：\`a[i] > max\` 就让它当新擂主。
- 第 5 行：循环结束，max 里装着最大值 5。

## 新手常犯的错误

- **下标越界**：5 个元素的数组访问 \`a[5]\`——C **不检查**，读到的是垃圾值甚至程序崩溃，而且编译器不报错。牢记下标上限是**长度减 1**。
- **遍历边界写错**：\`for (int i = 0; i <= 5; i++)\` 访问到 \`a[5]\`，越界。条件用 \`i < 5\`。
- **初始化列表和大小不符**：\`int a[2] = {1, 2, 3};\` 多余的初始值报错；不写大小 \`int a[] = {1,2,3};\` 则自动定为 3。
- **中途改大小**：数组大小在声明后就固定了，不能 \`a[10] = ...\` 临时扩容——需要更大的盒子，就一开始声明大一点。
- **数组整体赋值**：两个数组之间写 \`a = b;\` 编译直接报错——C 不支持数组整体拷贝，想复制得用循环逐个元素赋值。

## 小结

- 数组 = 同类型元素的连续序列；下标从 0 到「长度-1」。
- 遍历配 for：\`for (int i = 0; i < n; i++) a[i]\`。
- 长度要自己记：\`sizeof(a)/sizeof(a[0])\` 或直接存个变量 n。
- 二维数组用双重循环，先行后列；越界不会报错但后果严重。
- 数组名在表达式中会退化为首元素地址，这件事下一课「指针」会讲透。

下一课学**字符串**：字符数组的特殊玩法。`,
        en: `## What you will learn

Learn to **manage a row of data under one name**: store 5 grades or 100 temperatures in an array and process them in bulk with loops. Afterwards you can sum elements, find the maximum, and print matrices.

## What is an array?

A plain variable holds exactly **one** value. Storing the grades of 50 students with 50 separate variables is absurd. An **array** is "a row of same-sized boxes placed side by side" — they share one name (say \`a\`) and are told apart by an **index** (\`a[0]\`, \`a[1]\`, \`a[2]\`, ...).

Picture **a row of hotel rooms**: the hotel name is the array name and the room numbers are the indices. The key rule: **room numbers start at 0** — five rooms are numbered 0 to 4, and room 5 does not exist. Another key property: the **size is fixed once built**; you cannot add rooms later.

## How to write it

**Declare and initialize a one-dimensional array**:

\`\`\`c
int nums[5] = {4, 8, 15, 16, 23};
\`\`\`

- \`int\` is the type of every element; \`[5]\` means 5 elements total.
- Initial values are listed in order inside the braces, separated by commas.
- Access an element: \`nums[0]\` is the first (4), \`nums[4]\` is the last (23).

**Iteration**: arrays pair naturally with for loops — the index walks from 0 to "length minus 1":

\`\`\`c
for (int i = 0; i < 5; i++) {
    printf("%d\\n", nums[i]);   // i goes 0 1 2 3 4
}
\`\`\`

**Computing the length** (only valid where the array is visible):

\`\`\`c
int n = sizeof(nums) / sizeof(nums[0]);
\`\`\`

That is "bytes of the whole array ÷ bytes of one element". C has **no** built-in length property — record it yourself.

**Two-dimensional arrays** — tables and matrices:

\`\`\`c
int matrix[2][3] = {
    {1, 2, 3},
    {4, 5, 6}
};
printf("%d\\n", matrix[1][2]);   // 6: row 1, column 2
\`\`\`

Iterate with **nested for** loops: outer over rows, inner over columns.

## Reading the example line by line

The example for this lesson (find the max, then 2D iteration):

\`\`\`c
int a[5] = {3, 1, 4, 1, 5};
int max = a[0];
for (int i = 1; i < 5; i++) {
    if (a[i] > max) max = a[i];
}
printf("max = %d\\n", max);     // max = 5
\`\`\`

- Line 1: the five numbers are loaded.
- Line 2: assume the **first element** is the max — every tournament needs an initial champion.
- Lines 3-4: from the second element on, each challenger fights: if \`a[i] > max\`, it becomes the new champion.
- Line 5: after the loop, max holds the largest value, 5.

## Common beginner mistakes

- **Out-of-bounds index**: accessing \`a[5]\` on a 5-element array — C **does not check**, so you read garbage or crash, with no compiler error. The top index is always **length minus 1**.
- **Wrong loop bounds**: \`for (int i = 0; i <= 5; i++)\` touches \`a[5]\` and goes out of bounds. Use \`i < 5\`.
- **Initializer count mismatch**: \`int a[2] = {1, 2, 3};\` errors on the extra value; omitting the size as in \`int a[] = {1,2,3};\` makes it 3 automatically.
- **Resizing later**: the size is fixed at declaration; you cannot \`a[10] = ...\` to expand — declare a bigger box from the start.
- **Whole-array assignment**: writing \`a = b;\` between two arrays is a compile error — C cannot copy arrays wholesale; copy element by element with a loop.

## Summary

- An array = a contiguous run of same-type elements; indices run from 0 to "length - 1".
- Pair iteration with for: \`for (int i = 0; i < n; i++) a[i]\`.
- Track the length yourself: \`sizeof(a)/sizeof(a[0])\` or just store an n variable.
- Use nested loops for 2D arrays, rows first then columns; going out of bounds never warns but can be fatal.
- An array name decays to the address of its first element in expressions; the next chapter, Pointers, covers this in depth.

Next lesson: **strings** — the special flavor of character arrays.`,
      },
      examples: [
        {
          caption: { zh: '求最大与二维遍历', en: 'Max and 2D iteration' },
          code: '#include <stdio.h>\n\nint main(void) {\n    int a[5] = {3, 1, 4, 1, 5};\n    int max = a[0];\n    for (int i = 1; i < 5; i++) {\n        if (a[i] > max) max = a[i];\n    }\n    printf("max = %d\\n", max);     // max = 5\n\n    int m[2][3] = {{1,2,3},{4,5,6}};\n    for (int r = 0; r < 2; r++) {\n        for (int c = 0; c < 3; c++) {\n            printf("%d ", m[r][c]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '数组求和', en: 'Array sum' },
          prompt: {
            zh: '给定 `int a[5] = {4, 8, 15, 16, 23}`，**只输出一行**数组元素的总和（应为 66）。',
            en: 'Given `int a[5] = {4, 8, 15, 16, 23}`, print **one line** with the sum of its elements (should be 66).',
          },
          starter: '/* 练习 1：数组求和 */\n#include <stdio.h>\n\nint main(void) {\n    int a[5] = {4, 8, 15, 16, 23};\n\n    return 0;\n}\n',
          expectedOutput: '66\n',
          hints: [
            { zh: '这题把「循环累加」从 1..100 换成了数组元素。先回忆 C 数组的下标从几开始：5 个元素的下标范围是什么，才能保证每个元素都被访问且不越界。', en: 'This task moves the accumulate-with-a-loop pattern from 1..100 onto array elements. First recall which number C array indices start from: what index range covers all five elements without going out of bounds?' },
            { zh: '拆成三件事：准备一个从 0 出发的累加器；用循环把下标 0 到 4 走一遍；每轮把「下标为 i 的那个元素」累加进去。全部加完后再输出一次。', en: 'Split it into three jobs: set up an accumulator starting at 0, walk the indices 0 through 4 with a loop, and each round add in "the element at index i". Output once after everything is summed.' },
            { zh: '访问数组元素用下标运算符 `a[i]`；累加用 `s += a[i];`。循环头写 `for (int i = 0; i < 5; i++)`。', en: 'Access an element with the subscript operator `a[i]` and accumulate with `s += a[i];`. The loop header is `for (int i = 0; i < 5; i++)`.' },
            { zh: '骨架：`int s = 0;`，接着 `for (int i = 0; i < 5; i++) { s += a[i]; }`，结束后 `printf("%d\\n", s);`。易错点：下标从 0 开始，条件写 `i < 5`——写成 `<=` 会访问不存在的 `a[5]`；输出必须放在循环外，否则每个元素都会被打印一次。', en: 'Skeleton: `int s = 0;`, then `for (int i = 0; i < 5; i++) { s += a[i]; }`, then `printf("%d\\n", s);` after the loop. Pitfalls: indices start at 0 so the condition is `i < 5` — writing `<=` reaches the nonexistent `a[5]`; and the print must sit outside the loop or every element would be printed.' },
            { zh: '参考写法：`int s = 0; for (int i = 0; i < 5; i++) { s += a[i]; } printf("%d\\n", s);`。五个元素依次加进 s：4+8+15+16+23，一行输出 66。', en: 'Reference: `int s = 0; for (int i = 0; i < 5; i++) { s += a[i]; } printf("%d\\n", s);`. The five elements feed into s one by one — 4+8+15+16+23 — and a single line prints 66.' },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int a[5] = {4, 8, 15, 16, 23};\n    int s = 0;\n    for (int i = 0; i < 5; i++) {\n        s += a[i];\n    }\n    printf("%d\\n", s);\n    return 0;\n}\n',
          solutionNote: { zh: '解法用累加器 s 从 0 出发，配合下标循环 `for (int i = 0; i < 5; i++)` 把 `a[i]` 逐个累加，循环结束后一次 printf 输出总和 66。它正确的关键是对齐 C 的 0 起始下标——条件用 `i < 5` 而非 `<=`，否则会越界读到 `a[5]`；若输出误放进循环体，每一轮都会打印一次当前和。', en: 'The solution starts an accumulator s at 0 and, with the index loop `for (int i = 0; i < 5; i++)`, adds each `a[i]` in turn before printing the total 66 once after the loop. It works because it respects C zero-based indexing — the condition is `i < 5`, not `<=`, which would read out of bounds at `a[5]` — and the print stays outside the loop, otherwise every round would print the running total.' },
        },
        {
          id: 'ex2',
          title: { zh: '打印 3×3 矩阵', en: 'Print 3x3 matrix' },
          prompt: {
            zh: '用双重 for 循环按行输出 3×3 矩阵 `{{1,2,3},{4,5,6},{7,8,9}}`，数字之间用空格，行末换行（最后一行也换行）。',
            en: 'Use nested for loops to print the 3x3 matrix `{{1,2,3},{4,5,6},{7,8,9}}` row by row, numbers separated by a space, each row terminated by a newline (last row included).',
          },
          starter: '/* 练习 2：3x3 矩阵 */\n#include <stdio.h>\n\nint main(void) {\n    int m[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n\n    return 0;\n}\n',
          expectedOutput: '1 2 3\n4 5 6\n7 8 9\n',
          hints: [
            { zh: '这题的主菜是「嵌套循环 + 二维数组」：外层循环管行、内层循环管列。先想清楚两层各自的职责和先后，以及一行打完后由谁负责换行。', en: 'The core here is nested loops over a 2D array: the outer loop manages rows and the inner loop manages columns. First clarify the job and order of the two loops, and who handles the newline after each row.' },
            { zh: '按行拆开看：对每一行，先把这一行的 3 个元素从左到右、各带一个空格打出来；整行走完后补一个换行，再进入下一行。', en: 'Look at it row by row: for each row, print its three elements from left to right with a space after each; once the whole row is done, add one newline and move on to the next row.' },
            { zh: '二维访问写作 `m[r][c]`——行下标在前、列下标在后；单个元素用 `printf("%d ", m[r][c]);` 输出，行末换行单独写 `printf("\\n");`。', en: 'A 2D access reads `m[r][c]` — row index first, then column index. Print a single element as `printf("%d ", m[r][c]);` and the end-of-row newline on its own as `printf("\\n");`.' },
            { zh: '骨架：外层 `for (int r = 0; r < 3; r++) {`，内层 `for (int c = 0; c < 3; c++) { printf("%d ", m[r][c]); }`，内层结束后立刻 `printf("\\n");`。易错点：两层条件都要写 `< 3`（下标 0 到 2）；换行放内层循环之后而不是每个元素之后；最后一行也要换行。', en: 'Skeleton: outer `for (int r = 0; r < 3; r++) {`, inner `for (int c = 0; c < 3; c++) { printf("%d ", m[r][c]); }`, then `printf("\\n");` right after the inner loop. Pitfalls: both conditions are `< 3` (indices 0 through 2), the newline sits after the inner loop rather than after every element, and the last row still needs its newline.' },
            { zh: '参考写法：`for (int r = 0; r < 3; r++) { for (int c = 0; c < 3; c++) { printf("%d ", m[r][c]); } printf("\\n"); }`。外层跑 3 次对应 3 行，每行由内层打出 3 个数，输出正好是 1 2 3、4 5 6、7 8 9 三行。', en: 'Reference: `for (int r = 0; r < 3; r++) { for (int c = 0; c < 3; c++) { printf("%d ", m[r][c]); } printf("\\n"); }`. The outer loop runs three times for the three rows, the inner prints three numbers per row, and the output is exactly the lines 1 2 3, 4 5 6 and 7 8 9.' },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int m[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    for (int r = 0; r < 3; r++) {\n        for (int c = 0; c < 3; c++) {\n            printf("%d ", m[r][c]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n',
          solutionNote: { zh: '解法用两层 for 把「行」和「列」分开驱动：外层 r 每取一个值就进入新的一行，内层 c 依次取出该行的 `m[r][c]` 并用 `"%d "` 制造数字间隔，内层循环结束后由 `printf("\\n");` 收尾换行。易错点：下标从 0 开始、两层都用 `< 3`，且换行必须等整行打完再补。', en: 'The solution drives rows and columns with two nested loops: each value of the outer r starts a new row, the inner c fetches every `m[r][c]` of that row with `"%d "` as the spacing, and `printf("\\n");` closes the row once the inner loop ends. The traps are the zero-based indices, the `< 3` limit in both loops, and saving the newline until the whole row is printed.' },
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

学会在 C 里处理**文字**：存储字符串、算长度、复制、比较。学完之后，你能读懂并使用 \`<string.h>\` 里最常用的四个函数。

## C 的字符串是什么

很多语言有专门的字符串类型，C **没有**。C 的字符串其实是**末尾藏了一个 \`\\0\` 的字符数组**。\`\\0\` 叫「空字符」，是字符串的**结束标记**——所有字符串函数都靠它判断「字到哪算完」。

\`\`\`c
char name[] = "Alice";     // 实际占 6 格：A l i c e \\0
\`\`\`

可以想象成**一串灯笼**，最后挂了一盏**熄灭的灯**（\`\\0\`）表示「到此为止」。灯笼串（数组）必须至少多留一格挂这盏灯——这就是为什么 \`char s[6] = "hello"\` 恰好装得下，\`char s[5]\` 就装不下。

\`\\0\` 平时看不见：打印不会显示任何东西，\`strlen\` 数长度时也不数它。

## 怎么写

**声明**：双引号引起来的内容自动带上结尾 \`\\0\`：

\`\`\`c
char s[] = "hi";        // 大小自动算出 3
char t[20];             // 留 20 格，之后往里装内容
\`\`\`

**输出**：

\`\`\`c
printf("%s\\n", s);      // 用 %s 输出整个字符串
printf("%c\\n", s[0]);   // 用 %c 输出单个字符（s 也是数组！）
\`\`\`

**<string.h> 常用函数**（用之前记得 \`#include <string.h>\`）：

| 函数 | 作用 | 例子 |
|---|---|---|
| \`strlen(s)\` | 字符数（不含 \\0） | \`strlen("hi")\` → 2 |
| \`strcpy(dst, src)\` | 把 src 复制进 dst | \`strcpy(t, "hi")\` |
| \`strcmp(a, b)\` | 比较；相等返回 **0** | \`strcmp("a","b")\` → 负数 |
| \`strcat(dst, src)\` | 把 src 接到 dst 后面 | — |

\`\`\`c
#include <string.h>
char s[20];
strcpy(s, "hello");
printf("%zu %s\\n", strlen(s), s);   // 5 hello
\`\`\`

注意 \`strlen\` 返回的类型是 \`size_t\`，printf 要用 \`%zu\`（或强转成 unsigned long 后用 \`%lu\`）。

## 逐行读懂示例

本课示例代码：

\`\`\`c
char a[20] = "Hello";
char b[20];
strcpy(b, a);
printf("%zu %s\\n", strlen(a), b);
printf("%d\\n", strcmp(a, "World"));   // 负数（H < W）
\`\`\`

- 第 1 行：a 是 20 格的字符数组，前 6 格装着 \`Hello\` 和 \`\\0\`，其余空着。
- 第 2 行：b 也开了 20 格，但内容还没填——之后 strcpy 要往里写，所以格子必须够。
- 第 3 行：\`strcpy(b, a)\` 把 a 的内容（含 \`\\0\`）逐字符复制进 b，现在 b 也是 "Hello"。
- 第 4 行：\`%zu\` 打印 strlen(a) 得 5（不数 \`\\0\`），\`%s\` 打印 b 得 Hello。
- 第 5 行：\`strcmp(a, "World")\` 逐字符比较，第一个字符 H 的编码小于 W，返回负数。

## 新手常犯的错误

- **用 == 比较字符串**：\`if (a == "hi")\` 比较的是地址，**永远不成立**。比内容必须用 \`strcmp(a, "hi") == 0\`。
- **目标数组太小**：\`char t[3]; strcpy(t, "hello");\` 装不下还硬写，破坏相邻内存，程序可能当场崩溃。目标要 **至少** 源长度 + 1。
- **strlen 用 %d 打印**：能跑但告警，正确做法是 \`%zu\`。
- **单引号双引号混用**：\`char c = "A";\` 错（那是字符串）；\`printf('hi');\` 也错——字符串永远用双引号。
- **修改字符串字面量**：\`char *p = "hi"; p[0] = 'H';\` 属于未定义行为——字面量存放在只读内存，程序可能直接崩溃。想改内容就改用数组：\`char p[] = "hi";\`。
- **strlen 数的不是容量**：\`char s[20] = "hi";\` 里 strlen(s) 是 2 不是 20——它数的是 \`\\0\` 之前的字符个数，和数组开了多少格无关。

## 小结

- C 字符串 = 以 \`\\0\` 结尾的 char 数组；双引号自动补 \`\\0\`。
- \`%s\` 输出整串，\`%c\` 输出单字符。
- 四件套：strlen 数长度、strcpy 复制、strcmp 比较（相等返 0）、strcat 拼接。
- strcpy 前确认目标格子够大；比较内容别用 ==。
- strcat 拼接的前提是 dst 的剩余空间装得下 src 加结尾的 \`\\0\`，装不下同样会越界。
- \`%s\` 会一直打印到 \`\\0\` 为止——万一 \`\\0\` 丢了，就会一路打印垃圾字符，直到碰巧撞上一个为止。

下一课是 C 的重头戏——**指针**。`,
        en: `## What you will learn

Learn to handle **text** in C: storing strings, measuring lengths, copying and comparing. Afterwards you can read and use the four most common \`<string.h>\` functions.

## What is a C string?

Many languages have a dedicated string type — C does **not**. A C string is really a **character array with a hidden \`\\0\` at the end**. \`\\0\` is the "null character", the string's **terminator** — every string function relies on it to know "where the text stops".

\`\`\`c
char name[] = "Alice";     // actually 6 cells: A l i c e \\0
\`\`\`

Picture **a string of lanterns** with one **unlit lantern** (\`\\0\`) hung at the end saying "this is the end". The lantern chain (the array) must reserve at least one extra cell for that lantern — which is why \`char s[6] = "hello"\` fits exactly while \`char s[5]\` does not.

You never see \`\\0\` in normal life: printing shows nothing, and \`strlen\` does not count it.

## How to write it

**Declaration**: text in double quotes automatically carries the trailing \`\\0\`:

\`\`\`c
char s[] = "hi";        // size is auto-computed as 3
char t[20];             // reserve 20 cells to fill later
\`\`\`

**Printing**:

\`\`\`c
printf("%s\\n", s);      // %s prints the whole string
printf("%c\\n", s[0]);   // %c prints one character (s is an array!)
\`\`\`

**Common <string.h> functions** (remember \`#include <string.h>\`):

| Function | Purpose | Example |
|---|---|---|
| \`strlen(s)\` | char count (no \\0) | \`strlen("hi")\` → 2 |
| \`strcpy(dst, src)\` | copy src into dst | \`strcpy(t, "hi")\` |
| \`strcmp(a, b)\` | compare; **0** means equal | \`strcmp("a","b")\` → negative |
| \`strcat(dst, src)\` | append src to dst | — |

\`\`\`c
#include <string.h>
char s[20];
strcpy(s, "hello");
printf("%zu %s\\n", strlen(s), s);   // 5 hello
\`\`\`

Note that \`strlen\` returns a \`size_t\`; print it with \`%zu\` (or cast to unsigned long and use \`%lu\`).

## Reading the example line by line

The example code for this lesson:

\`\`\`c
char a[20] = "Hello";
char b[20];
strcpy(b, a);
printf("%zu %s\\n", strlen(a), b);
printf("%d\\n", strcmp(a, "World"));   // negative (H < W)
\`\`\`

- Line 1: a is a 20-cell character array; the first 6 cells hold \`Hello\` plus \`\\0\`, the rest stay empty.
- Line 2: b also gets 20 cells but is not filled yet — strcpy will write into it later, so it must be big enough.
- Line 3: \`strcpy(b, a)\` copies a's content (including \`\\0\`) character by character into b; now b is also "Hello".
- Line 4: \`%zu\` prints strlen(a) as 5 (not counting \`\\0\`), and \`%s\` prints b as Hello.
- Line 5: \`strcmp(a, "World")\` compares character by character; the first character H has a smaller code than W, so a negative number comes back.

## Common beginner mistakes

- **Comparing strings with ==**: \`if (a == "hi")\` compares addresses and **is never true**. To compare contents use \`strcmp(a, "hi") == 0\`.
- **Destination too small**: \`char t[3]; strcpy(t, "hello");\` writes past the cells, corrupts neighboring memory, and may crash instantly. The target needs **at least** source length + 1.
- **Printing strlen with %d**: it runs but warns; the correct specifier is \`%zu\`.
- **Mixing single and double quotes**: \`char c = "A";\` is wrong (that is a string); \`printf('hi');\` is wrong too — strings always use double quotes.
- **Modifying a string literal**: \`char *p = "hi"; p[0] = 'H';\` is undefined behavior — literals live in read-only memory, and the program may crash outright. Use an array when you want to edit: \`char p[] = "hi";\`.
- **strlen counts the wrong thing**: in \`char s[20] = "hi";\`, strlen(s) is 2, not 20 — it counts the characters before \`\\0\`, which has nothing to do with the array capacity.

## Summary

- A C string = a char array ending in \`\\0\`; double quotes add the \`\\0\` for you.
- \`%s\` prints the whole string, \`%c\` a single character.
- The big four: strlen for length, strcpy for copying, strcmp for comparing (0 means equal), strcat for joining.
- Check the destination size before strcpy; never compare contents with ==.
- strcat requires the remaining space in dst to fit src plus the terminating \`\\0\`; otherwise it overruns just the same.
- \`%s\` keeps printing until it hits a \`\\0\` — lose the terminator and it spills garbage characters until it happens to bump into one.

Next up is the heart of C — **pointers**.`,
      },
      examples: [
        {
          caption: { zh: '字符串函数', en: 'String functions' },
          code: '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char a[20] = "Hello";\n    char b[20];\n    strcpy(b, a);\n    printf("%zu %s\\n", strlen(a), b);\n    printf("%d\\n", strcmp(a, "World"));   // negative (H < W)\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '字符串长度与复制', en: 'String length and copy' },
          prompt: {
            zh: '用 `strlen` 与 `strcpy` 处理字符串 `"Hello, C"`：**每行一个**输出长度（应为 8）、复制到新数组后的内容。',
            en: 'Use `strlen` and `strcpy` on the string `"Hello, C"`: print **one per line** the length (should be 8), and the contents after copying to a new array.',
          },
          starter: '/* 练习 1：长度与复制 */\n#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char src[] = "Hello, C";\n    char dst[20];\n\n    return 0;\n}\n',
          expectedOutput: '8\nHello, C\n',
          hints: [
            { zh: '这题把两个字符串动作放进同一道题：「量长度」和「复制」。先回忆 <string.h> 这个工具箱里分别由哪个函数负责，再想两个结果该用什么格式符打印。', en: 'This task packs two string actions into one exercise: measuring length and copying. Recall which function in the <string.h> toolbox handles each, then decide which format specifier prints the two results.' },
            { zh: '按顺序拆：第一步把 src 复制到 dst，让 dst 也拥有同样的内容；第二步输出两个东西——src 的长度、dst 的内容，各占一行。', en: 'Break it in order: first copy src into dst so dst holds the same text; then print two things — the length of src and the content of dst — one per line.' },
            { zh: '复制写 `strcpy(dst, src);`（目标在前、源在后），测长写 `strlen(src)`；长度类型是 size_t，打印用 `%zu`，字符串内容用 `%s`。', en: 'Copy as `strcpy(dst, src);` (destination first, source second) and measure with `strlen(src)`; the length has type size_t and prints with `%zu`, while string content prints with `%s`.' },
            { zh: '骨架：先 `strcpy(dst, src);`，再 `printf("%zu\\n", strlen(src));` 与 `printf("%s\\n", dst);`。易错点：`dst[20]` 要够大能装下内容；`strlen` 数的是字符个数，不含结尾的空字符 `\\0`；`Hello, C` 中的空格和逗号都算，长度是 8。', en: 'Skeleton: `strcpy(dst, src);` first, then `printf("%zu\\n", strlen(src));` and `printf("%s\\n", dst);`. Pitfalls: `dst[20]` must be big enough; `strlen` counts characters, excluding the terminating null `\\0`; in `Hello, C` the space and the comma both count, so the length is 8.' },
            { zh: '参考写法：`strcpy(dst, src); printf("%zu\\n", strlen(src)); printf("%s\\n", dst);`。输出第一行 8（strlen 不计结尾空字符），第二行 Hello, C；两个头文件 `stdio.h` 与 `string.h` 都要包含。', en: 'Reference: `strcpy(dst, src); printf("%zu\\n", strlen(src)); printf("%s\\n", dst);`. Line one prints 8 (strlen ignores the trailing null) and line two prints Hello, C; both `stdio.h` and `string.h` must be included.' },
          ],
          solution: '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char src[] = "Hello, C";\n    char dst[20];\n    strcpy(dst, src);\n    printf("%zu\\n", strlen(src));\n    printf("%s\\n", dst);\n    return 0;\n}\n',
          solutionNote: { zh: '解法先复制再输出：`strcpy(dst, src);` 把 src 连同结尾的空字符一起搬进 dst，随后两行 printf 分别给出 `strlen(src)`（8）与 dst 的内容。它正确的关键：长度用 `%zu` 匹配 strlen 的 size_t 返回类型，且 strlen 不数结尾的 `\\0`，所以 `Hello, C` 含空格和逗号共 8 个字符。', en: 'The solution copies first, then prints: `strcpy(dst, src);` moves src together with its terminating null character into dst, and two printf calls then report `strlen(src)` (8) and the content of dst. It works because the length is printed with `%zu` to match the size_t return of strlen, and strlen does not count the trailing `\\0`, so `Hello, C` — space and comma included — has 8 characters.' },
        },
        {
          id: 'ex2',
          title: { zh: '字符串比较', en: 'String compare' },
          prompt: {
            zh: '用 `strcmp` 比较 `"apple"` 和 `"banana"`：若相等输出 `equal`，否则输出 `different`（应为 `different`，单独一行）。',
            en: 'Use `strcmp` to compare `"apple"` with `"banana"`. If equal print `equal`, otherwise `different` (should be `different`, on its own line).',
          },
          starter: '/* 练习 2：字符串比较 */\n#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n\n    return 0;\n}\n',
          expectedOutput: 'different\n',
          hints: [
            { zh: '字符串不能拿等号直接比——C 里那样比的是地址而不是内容。先回忆哪个函数才是逐字符比较内容的，以及它在「相等」时返回什么值。', en: 'Strings cannot be compared with an equals sign — in C that compares addresses, not content. Recall which function compares contents character by character, and what it returns when the two are equal.' },
            { zh: '结果只有两种：相等输出 equal，不相等输出 different。把「是否相等」的检验放进 if 的条件里，再用 if/else 分出两个分支。', en: 'There are only two outcomes: print equal when they match, different otherwise. Put the equality test into the if condition and split the work with if/else.' },
            { zh: '判断写作 `if (strcmp("apple", "banana") == 0)`——strcmp 相等时返回 0，所以要用 `== 0` 来检测相等。', en: 'Write the test as `if (strcmp("apple", "banana") == 0)` — strcmp returns 0 when equal, so equality is detected by comparing against `== 0`.' },
            { zh: '骨架：`if (strcmp("apple", "banana") == 0) { printf("equal\\n"); } else { printf("different\\n"); }`。易错点：判断里是 `== 0` 不是 `= 0`；也不要写成 `if (strcmp(...))`——那会在「不相等」时成立，正好弄反。', en: 'Skeleton: `if (strcmp("apple", "banana") == 0) { printf("equal\\n"); } else { printf("different\\n"); }`. Pitfalls: the condition uses `== 0`, not `= 0`; and never write `if (strcmp(...))` alone — that is true when they differ, which is backwards.' },
            { zh: '参考写法：if 分支输出 `equal`，else 分支输出 `different`，每个字符串和 `\\n` 都放进双引号。apple 与 banana 不相等，所以本题实际打印的是 different。', en: 'Reference: the if branch prints `equal` and the else branch prints `different`, each word together with `\\n` inside double quotes. Since apple and banana are not equal, this task actually prints different.' },
          ],
          solution: '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    if (strcmp("apple", "banana") == 0) {\n        printf("equal\\n");\n    } else {\n        printf("different\\n");\n    }\n    return 0;\n}\n',
          solutionNote: { zh: 'apple 与 banana 内容不同，所以 `strcmp("apple", "banana") == 0` 为假，程序走进 else 输出 different。strcmp 是逐字符比较、相等才返回 0，这是它和普通等号最大的区别——普通 `==` 比较的是指针地址。易错点：条件是 `== 0`，写成 `= 0` 会变成赋值。', en: 'apple and banana differ in content, so `strcmp("apple", "banana") == 0` is false and the program takes the else branch to print different. strcmp compares character by character and returns 0 only when equal — that is exactly why it differs from a plain equals sign, which would compare pointer addresses. The trap is writing `== 0`; a single `= 0` would assign instead of compare.' },
        },
      ],
    },

    // ================= 9. 指针（重点） =================
    {
      id: 'pointers',
      title: { zh: '指针', en: 'Pointers' },
      difficulty: 3,
      lecture: {
        zh: `## 这节课学什么

认识 C 的招牌概念——**指针**：变量的门牌号。学完之后，你能解释 \`&\` 和 \`*\` 的区别，并写出能**真正修改外部变量**的 swap 函数。这是理解 C 的分水岭，请放慢速度。

## 指针是什么

每个变量都住在内存的某个位置，这个位置有个编号，叫**地址**（一串十六进制数，形如 \`0x7ffe...\`，可以理解为变量的门牌号）。

\`\`\`c
int x = 42;
int *p = &x;          // & 读作 "x 的地址"
\`\`\`

指针变量 p 里装的不是 42，而是 **x 的门牌号**。可以想象成：变量 x 是一栋房子，指针 p 是一张**写着这栋房子地址的纸条**。拿着纸条就能找到房子，还能改房子里的东西。

两个符号务必分清：

| 符号 | 名字 | 作用 |
|---|---|---|
| \`&\` | 取地址 | \`&x\` 得到 x 的地址（看纸条上写的房号） |
| \`*\` | 解引用 | \`*p\` 取出/修改 p 指向的变量（按纸条找房子） |

一个小陷阱：声明里的 \`int *p\` 表示「p 是一个指向 int 的指针」，这里的 \`*\` 是类型的一部分，**不是**解引用。

## 怎么写

**声明并使用指针**：

\`\`\`c
int x = 42;
int *p = &x;          // p 指向 x

printf("%d\\n", x);    // 42：直接读 x
printf("%d\\n", *p);   // 42：通过地址读 x（解引用）
printf("%p\\n", p);    // x 的地址，一串十六进制

*p = 100;              // 通过地址改 x
printf("%d\\n", x);    // 100
\`\`\`

**指针与数组**：数组名 \`a\` 在表达式里会退化为「指向首元素的指针」：

\`\`\`c
int a[3] = {10, 20, 30};
int *p = a;              // p 指向 a[0]
printf("%d\\n", *p);     // 10
printf("%d\\n", *(p+1)); // 20：p+1 是"下一个元素"
\`\`\`

注意 \`p+1\` 不是地址加 1 个字节，而是**前进一个元素**（int 通常是 4 字节，编译器自动算）。

**为什么需要指针——swap 案例**：C 按值传递，函数拿到的是副本，直接改副本动不了外面：

\`\`\`c
void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int x = 3, y = 8;
swap(&x, &y);           // 传地址！
printf("%d %d\\n", x, y);   // 8 3
\`\`\`

调用 \`swap(&x, &y)\` 时：\`&x\`、\`&y\` 把两张地址纸条递给函数；函数内 \`*a\`、\`*b\` 按纸条找到真身 x、y，把交换**写回原地址**，于是外面的 x、y 真的变了。

## 逐行读懂示例

本课示例核心（swap + 指针遍历数组）：

\`\`\`c
void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}
\`\`\`

- 第 1 行：参数是两个指针——接收的是「地址」而不是值。
- 第 2 行：\`*a\` 解引用取出 x 的值 3，存进临时变量 t。
- 第 3 行：\`*b\` 取出 y 的值 8，通过 \`*a\` 写进 x——x 变成 8。
- 第 4 行：把 t 里的 3 通过 \`*b\` 写进 y——交换完成。

\`\`\`c
int arr[3] = {10, 20, 30};
int *p = arr;
printf("%d %d %d\\n", *p, *(p+1), *(p+2));   // 10 20 30
\`\`\`

- \`p = arr\` 让 p 指向首元素；\`*p\` 是 10，\`(p+1)\` 前进一个元素，\`*(p+1)\` 是 20，依此类推。

## 新手常犯的错误

- **忘了 &**：调用 \`swap(x, y)\` 编译报错（类型不匹配：int 给了 int*）——函数要地址就得给 \`&x\`。
- **解引用未初始化的指针**：\`int *p; *p = 5;\`——p 是张没写字的纸条，写到随机地址，程序崩溃。指针必须先指向有效变量。
- **\* 和 & 傻傻分不清**：\`&x\` 是地址，\`*p\` 是取值，方向相反。
- **声明处乱写 \***：\`int* a, b;\` 里其实只有 a 是指针，b 是普通 int；要么分行声明，要么每个都写 \`*\`。

## 小结

- 指针 = 存地址的变量；\`&\` 取地址，\`*\` 解引用。
- 数组名在表达式中退化为首元素地址；\`p+1\` 前进一个元素。
- 按值传递改不动外部变量，传地址（指针）才行——swap 是经典示范。
- 指针必须先初始化再解引用。

下一课学**结构体**：把不同类型的数据打包。`,
        en: `## What you will learn

Meet the signature concept of C — the **pointer**: the house number of a variable. Afterwards you can explain the difference between \`&\` and \`*\`, and write a swap function that **actually modifies outside variables**. This is the watershed for understanding C, so slow down.

## What is a pointer?

Every variable lives somewhere in memory, and that spot has a number — its **address** (a hex string like \`0x7ffe...\`, which you can think of as the variable's house number).

\`\`\`c
int x = 42;
int *p = &x;          // & reads as "the address of x"
\`\`\`

The pointer variable p does not hold 42; it holds **x's house number**. Picture it this way: the variable x is a house, and the pointer p is a **slip of paper with that house's address written on it**. Holding the slip, you can find the house — and even redecorate it.

Keep two symbols firmly apart:

| Symbol | Name | Effect |
|---|---|---|
| \`&\` | address-of | \`&x\` yields x's address (read the number on the slip) |
| \`*\` | dereference | \`*p\` fetches/modifies the variable p points to (go find the house) |

One small trap: in the declaration \`int *p\`, the \`*\` is part of the type meaning "p is a pointer to int" — it is **not** a dereference there.

## How to write it

**Declare and use a pointer**:

\`\`\`c
int x = 42;
int *p = &x;          // p points to x

printf("%d\\n", x);    // 42: read x directly
printf("%d\\n", *p);   // 42: read x through its address (dereference)
printf("%p\\n", p);    // x's address, a hex string

*p = 100;              // modify x through its address
printf("%d\\n", x);    // 100
\`\`\`

**Pointers and arrays**: in expressions the array name \`a\` decays into "a pointer to the first element":

\`\`\`c
int a[3] = {10, 20, 30};
int *p = a;              // p points to a[0]
printf("%d\\n", *p);     // 10
printf("%d\\n", *(p+1)); // 20: p+1 means "the next element"
\`\`\`

Note \`p+1\` does not add 1 byte to the address — it advances **one whole element** (an int is usually 4 bytes; the compiler does the math).

**Why pointers exist — the swap case**: C passes by value, so a function only receives a copy and cannot touch the originals directly:

\`\`\`c
void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}

int x = 3, y = 8;
swap(&x, &y);           // pass the addresses!
printf("%d %d\\n", x, y);   // 8 3
\`\`\`

When \`swap(&x, &y)\` runs: \`&x\` and \`&y\` hand the function two address slips; inside, \`*a\` and \`*b\` follow the slips to the real x and y, and the swap is **written back to the original addresses** — so the outside x and y really change.

## Reading the example line by line

The core of this lesson's example (swap + pointer iteration):

\`\`\`c
void swap(int *a, int *b) {
    int t = *a;
    *a = *b;
    *b = t;
}
\`\`\`

- Line 1: the parameters are two pointers — the function receives "addresses", not values.
- Line 2: \`*a\` dereferences to fetch x's value 3, stored in the temporary t.
- Line 3: \`*b\` fetches y's value 8 and writes it into x through \`*a\` — x becomes 8.
- Line 4: the 3 sitting in t is written into y through \`*b\` — the swap is complete.

\`\`\`c
int arr[3] = {10, 20, 30};
int *p = arr;
printf("%d %d %d\\n", *p, *(p+1), *(p+2));   // 10 20 30
\`\`\`

- \`p = arr\` makes p point to the first element; \`*p\` is 10, \`(p+1)\` advances one element so \`*(p+1)\` is 20, and so on.

## Common beginner mistakes

- **Forgetting &**: calling \`swap(x, y)\` is a compile error (type mismatch: int handed to int*) — the function wants addresses, so pass \`&x\`.
- **Dereferencing an uninitialized pointer**: \`int *p; *p = 5;\` — p is a blank slip, so you write to a random address and the program crashes. A pointer must first point at a real variable.
- **Confusing * and &**: \`&x\` takes the address, \`*p\` fetches the value — opposite directions.
- **Sloppy * in declarations**: in \`int* a, b;\` only a is a pointer while b is a plain int; declare on separate lines, or give each its own \`*\`.

## Summary

- A pointer = a variable holding an address; \`&\` takes the address, \`*\` dereferences.
- An array name decays to the address of its first element; \`p+1\` advances one element.
- Pass-by-value cannot modify outside variables — pass addresses (pointers) instead; swap is the classic demo.
- Initialize a pointer before dereferencing it.

Next lesson: **structs** — packaging data of different types together.`,
      },
      examples: [
        {
          caption: { zh: '指针与 swap', en: 'Pointers and swap' },
          code: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int t = *a;\n    *a = *b;\n    *b = t;\n}\n\nint main(void) {\n    int x = 3, y = 8;\n    swap(&x, &y);\n    printf("%d %d\\n", x, y);          // 8 3\n\n    int arr[3] = {10, 20, 30};\n    int *p = arr;\n    printf("%d %d %d\\n", *p, *(p+1), *(p+2));   // 10 20 30\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: 'swap 两数', en: 'swap two numbers' },
          prompt: {
            zh: '编写函数 `void swap(int *a, int *b)`。初始 `x = 3`、`y = 8`，调用 swap 后**只输出一行** `x y`（应为 8 3）。',
            en: 'Write `void swap(int *a, int *b)`. Starting from `x = 3`, `y = 8`, after calling swap print **one line** `x y` (should be 8 3).',
          },
          starter: '/* 练习 1：swap */\n#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    /* 在下面实现 */\n}\n\nint main(void) {\n    int x = 3, y = 8;\n\n    return 0;\n}\n',
          expectedOutput: '8 3\n',
          hints: [
            { zh: '函数默认拿到的是实参的副本，在函数里改动影响不到外面的变量。回想要让函数真正改写调用方的变量，参数要声明成什么、调用时又要传什么。', en: 'By default a function receives copies of its arguments, so changes inside it never touch the caller variables. Recall what the parameters must be declared as, and what the caller must pass, for the function to really modify outside variables.' },
            { zh: '两个层面各就各位：函数体内通过解引用读写指针所指的真身，用临时变量完成老一套的三步交换；main 里调用时把 x、y 的地址传进去，调用后再打印。', en: 'Get both layers right: inside the function, dereference the pointers to read and write the real variables and do the usual three-step swap with a temporary; in main, pass the addresses of x and y, then print after the call.' },
            { zh: '函数签名 `void swap(int *a, int *b)` 已经给定；解引用一个指针写 `*a`，取一个变量的地址写 `&x`。', en: 'The signature `void swap(int *a, int *b)` is already given; dereference a pointer with `*a` and take the address of a variable with `&x`.' },
            { zh: '骨架：函数体写 `int t = *a;`、`*a = *b;`、`*b = t;`；main 里调用 `swap(&x, &y);` 后再 `printf("%d %d\\n", x, y);`。易错点：函数里凡是想碰真身都要带 `*`，调用处两个参数的 `&` 一个都不能漏。', en: 'Skeleton: the body is `int t = *a;`, `*a = *b;`, `*b = t;`; main calls `swap(&x, &y);` and then prints `printf("%d %d\\n", x, y);`. Pitfalls: every touch of the real variables inside the function needs a `*`, and neither `&` may be missing at the call site.' },
            { zh: '参考写法：函数体三行 `int t = *a; *a = *b; *b = t;`，main 里 `swap(&x, &y); printf("%d %d\\n", x, y);`。swap 通过地址改写 x、y 本身，所以输出是 8 3。', en: 'Reference: the body is `int t = *a; *a = *b; *b = t;`, and main does `swap(&x, &y); printf("%d %d\\n", x, y);`. Because swap rewrites x and y themselves through their addresses, the output is 8 3.' },
          ],
          solution: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int t = *a;\n    *a = *b;\n    *b = t;\n}\n\nint main(void) {\n    int x = 3, y = 8;\n    swap(&x, &y);\n    printf("%d %d\\n", x, y);\n    return 0;\n}\n',
          solutionNote: { zh: 'swap 接收的是 x、y 的地址，函数内 `*a`、`*b` 解引用后指向的就是 x、y 本体，配合临时变量 t 完成「先备份再覆盖」的三步交换，因此调用后 main 里的 x、y 真的被换成了 8 和 3。关键点：形参是指针、调用要传 `&` 地址、函数内读写都要带 `*`，三者缺一不可。', en: 'swap receives the addresses of x and y, and inside the function `*a` and `*b` dereference to x and y themselves, so the backup-then-overwrite three-step swap with the temporary t really does turn x and y into 8 and 3 back in main. The essentials — pointer parameters, `&` addresses at the call site, and `*` on every read and write inside — must all be present.' },
        },
        {
          id: 'ex2',
          title: { zh: '指针遍历数组', en: 'Pointer iteration' },
          prompt: {
            zh: '给定 `int a[5] = {4, 8, 15, 16, 23}`。用**指针 + 循环**（不写 `a[i]`）**每行一个**输出全部元素。',
            en: 'Given `int a[5] = {4, 8, 15, 16, 23}`. Iterate with a **pointer and loop** (without `a[i]`) and print each element **on its own line**.',
          },
          starter: '/* 练习 2：指针遍历 */\n#include <stdio.h>\n\nint main(void) {\n    int a[5] = {4, 8, 15, 16, 23};\n\n    return 0;\n}\n',
          expectedOutput: '4\n8\n15\n16\n23\n',
          hints: [
            { zh: '这题考的是不借助下标、只用指针把数组从头到尾走一遍。先回忆：数组名在表达式中代表什么？对指针做 `p++` 又意味着什么？', en: 'This task is about walking through an array from start to end using only a pointer, with no subscripts. First recall what an array name stands for in an expression, and what `p++` does to a pointer.' },
            { zh: '把任务拆成两步：先让指针指向数组第一个元素，再让它一步一步前进；每走一步就读出当前指向的那个元素，直到走完 5 个为止。', en: 'Split it into two steps: first point the pointer at the first element, then let it advance step by step, reading the element it currently points to, until all 5 have been covered.' },
            { zh: '数组名可直接赋给指针：`int *p = a;`；`*p` 读出 p 当前指向的元素，`p++` 让 p 移到下一个元素。', en: 'An array name can be assigned straight to a pointer: `int *p = a;`; `*p` reads the element p points to, and `p++` moves p to the next element.' },
            { zh: '骨架是「先写 `int *p = a;`，再写 `for (; p < a + 5; p++)`，循环体 `printf("%d\\n", *p);`」。易错点：条件是 `p < a + 5` 而非 `a + 4`，否则末元素 `a[4]` 不会输出；也别再混用 `a[i]`。', en: 'The skeleton is `int *p = a;` followed by `for (; p < a + 5; p++)` whose body is `printf("%d\\n", *p);`. Pitfall: loop while `p < a + 5`, not `a + 4`, or the last element `a[4]` is skipped; also do not mix in `a[i]`.' },
            { zh: '最直接的写法：在 starter 的数组声明后补 `int *p = a;`，再写 `for (; p < a + 5; p++) { printf("%d\\n", *p); }`——p 从 `a` 一直指到 `a + 5` 之前，正好 5 次、输出 5 行。', en: 'Straightforward version: after the array declaration in the starter add `int *p = a;`, then write `for (; p < a + 5; p++) { printf("%d\\n", *p); }` — p runs from `a` to just before `a + 5`, exactly 5 iterations and 5 lines.' },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int a[5] = {4, 8, 15, 16, 23};\n    int *p = a;\n    for (; p < a + 5; p++) {\n        printf("%d\\n", *p);\n    }\n    return 0;\n}\n',
          solutionNote: { zh: '解法的核心是数组名会退化为指向首元素的指针：`int *p = a;` 让 p 指向 `a[0]`，循环里每次 `p++` 前进一个元素，条件 `p < a + 5` 保证恰好访问到 `a[4]`，输出用 `*p`。易错点是把停止条件写成 `a + 4`，会漏掉最后一个元素；也不要混用下标 `a[i]`。用下标 for 循环同样能完成遍历，但这道题专门练习指针写法。', en: 'The key idea is that an array name decays into a pointer to its first element: `int *p = a;` points p at `a[0]`, each `p++` advances one element, and the condition `p < a + 5` ensures the five elements up to `a[4]` are all read via `*p`. A common pitfall is stopping at `a + 4`, which skips the last element, or mixing in the subscript `a[i]`. An index loop could traverse the same array, but this exercise is specifically about pointer iteration.' },
        },
      ],
    },

    // ================= 10. 结构体 =================
    {
      id: 'structs',
      title: { zh: '结构体', en: 'Structs' },
      difficulty: 3,
      lecture: {
        zh: `## 这节课学什么

学会把**相关的不同类型数据打包**：一个「学生」有姓名（字符串）、年龄（整数）、成绩（小数）。学完之后，你能定义自己的数据类型并批量使用它们。

## 结构体是什么

只用 int、double 这些「散装」类型描述学生，得开好几个变量：\`name\`、\`age\`、\`score\`——人一多就乱套。**结构体（struct）**允许你把几个字段**捆成一个整体**，再给这个整体起个类型名。

可以想象成**一张登记表**：表上印好了栏目（字段），每个学生填一张表（变量）。\`struct Point { int x; int y; }\` 就是设计了一张「坐标表」，栏目是 x 和 y。C 的基础类型是散装零件，结构体让你能**自己发明新零件**。

## 怎么写

**定义结构体类型**：

\`\`\`c
struct Point {
    int x;
    int y;
};
\`\`\`

- \`struct\` 是关键字；\`Point\` 是你起的类型名。
- 花括号里列出字段：每个字段写「类型 + 名字」，**末尾分号**——整个定义结束的大括号后面也有个分号，**两处都不能漏**。

**用 typedef 省掉 struct**：

\`\`\`c
typedef struct Point {
    int x;
    int y;
} Point;

Point p = {3, 4};      // 之后直接写 Point 就行
\`\`\`

**声明变量并访问字段**：

\`\`\`c
Point p = {3, 4};          // 按顺序填 x=3, y=4
printf("%d %d\\n", p.x, p.y);
p.x = 10;                  // 用 . 修改字段
\`\`\`

- 用 **点操作符 \`.\`** 访问字段：\`p.x\` 就是「p 这张表的 x 栏」。
- 初始化用花括号按顺序填值；没填到的字段会自动置 0，比如 \`Point p = {3};\` 里 y 就是 0，不必担心残留的垃圾值。

**结构体数组**——一排表：

\`\`\`c
Point pts[3] = {{1,2}, {3,4}, {5,6}};
for (int i = 0; i < 3; i++) {
    printf("%d %d\\n", pts[i].x, pts[i].y);
}
\`\`\`

**指针访问结构体**——换成箭头：

\`\`\`c
Point p = {3, 4};
Point *pp = &p;         // pp 指向 p
printf("%d\\n", pp->x); // 箭头 -> 访问字段
\`\`\`

\`pp->x\` 等价于 \`(*pp).x\`。规律：**变量用点、指针用箭头**。

## 逐行读懂示例

本课示例代码：

\`\`\`c
typedef struct {
    char name[20];
    int age;
} Person;

int main(void) {
    Person people[2] = {{"Alice", 20}, {"Bob", 22}};
    for (int i = 0; i < 2; i++) {
        printf("%s %d\\n", people[i].name, people[i].age);
    }
    return 0;
}
\`\`\`

- 第 1~4 行：定义匿名结构体并用 typedef 起名 Person——含一个 20 格的字符数组 name 和一个整数 age。
- 第 7 行：声明结构体数组，两组花括号分别初始化两张「登记表」。
- 第 8~10 行：循环遍历，\`people[i].name\` 取第 i 张表的姓名栏（用 \`%s\`），\`people[i].age\` 取年龄栏（用 \`%d\`）。

## 新手常犯的错误

- **结构体定义末尾忘分号**：\`}; \` 漏写，编译器在后续行报一堆莫名其妙的错。定义结尾的 \`};\` 必须写。
- **点用在了指针上**：\`pp.x\` 报错——pp 是指针，要用 \`pp->x\`；反过来 \`p->x\`（p 是普通变量）也错。
- **初始化顺序错**：\`{4, 3}\` 会让 x=4、y=3——花括号里的值**按字段声明顺序**对号入座。
- **字段名写错大小写**：C 区分大小写，\`p.X\` 和 \`p.x\` 是两回事（前者报「没有这个成员」）。
- **给字符数组字段用 = 赋值**：\`s.name = "Bob";\` 编译报错——数组不能整体赋值，要改用 \`strcpy(s.name, "Bob")\`。

## 小结

- struct 把多个字段打包成自定义类型；typedef 让名字更简洁。
- 变量访问字段用 \`.\`，指针访问用 \`->\`。
- 结构体可以放数组里批量管理，遍历配 for 循环。
- 结构体变量之间可以整体赋值：\`p2 = p1;\` 会逐字段拷贝，这是它比数组省心的地方。
- 定义结尾的 \`};\` 别漏。

下一课学**文件操作**：让数据在程序关闭后依然存在。`,
        en: `## What you will learn

Learn to **package related data of different types**: a "student" has a name (string), an age (integer), a score (decimal). Afterwards you can define your own data types and use them in bulk.

## What is a struct?

Describing a student with loose basic types means juggling several variables — \`name\`, \`age\`, \`score\` — and it turns to chaos with many students. A **struct** lets you **bundle several fields into one unit** and give that unit a type name.

Picture a **registration form**: the form lists the fields, and each student fills out one copy (a variable). \`struct Point { int x; int y; }\` designs a "coordinates form" whose fields are x and y. Basic types are loose parts; structs let you **invent new parts of your own**.

## How to write it

**Define a struct type**:

\`\`\`c
struct Point {
    int x;
    int y;
};
\`\`\`

- \`struct\` is the keyword; \`Point\` is the type name you pick.
- The braces list the fields, each as "type + name" with a **semicolon after each** — and the closing brace of the whole definition is followed by a semicolon too. **Neither may be omitted**.

**typedef to drop the struct keyword**:

\`\`\`c
typedef struct Point {
    int x;
    int y;
} Point;

Point p = {3, 4};      // afterwards just write Point
\`\`\`

**Declare variables and access fields**:

\`\`\`c
Point p = {3, 4};          // fills x=3, y=4 in order
printf("%d %d\\n", p.x, p.y);
p.x = 10;                  // modify a field with .
\`\`\`

- Use the **dot operator \`.\`** to access fields: \`p.x\` is "the x column of form p".
- Initialization fills values in order inside braces; fields left out are zeroed, so in \`Point p = {3};\` y is 0 — no leftover garbage values to worry about.

**Arrays of structs** — a row of forms:

\`\`\`c
Point pts[3] = {{1,2}, {3,4}, {5,6}};
for (int i = 0; i < 3; i++) {
    printf("%d %d\\n", pts[i].x, pts[i].y);
}
\`\`\`

**Accessing through a pointer** — switch to the arrow:

\`\`\`c
Point p = {3, 4};
Point *pp = &p;         // pp points to p
printf("%d\\n", pp->x); // the arrow -> accesses the field
\`\`\`

\`pp->x\` is equivalent to \`(*pp).x\`. The rule: **dot for variables, arrow for pointers**.

## Reading the example line by line

The example code for this lesson:

\`\`\`c
typedef struct {
    char name[20];
    int age;
} Person;

int main(void) {
    Person people[2] = {{"Alice", 20}, {"Bob", 22}};
    for (int i = 0; i < 2; i++) {
        printf("%s %d\\n", people[i].name, people[i].age);
    }
    return 0;
}
\`\`\`

- Lines 1-4: define an anonymous struct named Person via typedef — with a 20-cell character array name and an integer age.
- Line 7: declare an array of structs; the two brace groups initialize the two "registration forms".
- Lines 8-10: loop through them; \`people[i].name\` fetches the name column of form i (printed with \`%s\`), \`people[i].age\` the age column (with \`%d\`).

## Common beginner mistakes

- **Missing semicolon after the struct definition**: forgetting the \`};\` makes the compiler spew baffling errors on later lines. The closing \`};\` is mandatory.
- **Dot on a pointer**: \`pp.x\` is an error — pp is a pointer, use \`pp->x\`; conversely \`p->x\` is wrong when p is a plain variable.
- **Initialization order mix-up**: \`{4, 3}\` sets x=4, y=3 — brace values are seated **in field declaration order**.
- **Wrong field capitalization**: C is case-sensitive; \`p.X\` and \`p.x\` are different things (the former reports "no such member").
- **Assigning a char-array field with =**: \`s.name = "Bob";\` is a compile error — arrays cannot be assigned wholesale; use \`strcpy(s.name, "Bob")\` instead.

## Summary

- A struct bundles fields into a custom type; typedef keeps the name short.
- Variables access fields with \`.\`, pointers with \`->\`.
- Structs can live in arrays for bulk management, iterated with for loops.
- Struct variables can be assigned as a whole: \`p2 = p1;\` copies field by field — one way structs are kinder than arrays.
- Never omit the trailing \`};\` of a definition.

Next lesson: **file I/O** — making data outlive the program.`,
      },
      examples: [
        {
          caption: { zh: '结构体与数组', en: 'Struct and array' },
          code: '#include <stdio.h>\n\ntypedef struct {\n    char name[20];\n    int age;\n} Person;\n\nint main(void) {\n    Person people[2] = {{"Alice", 20}, {"Bob", 22}};\n    for (int i = 0; i < 2; i++) {\n        printf("%s %d\\n", people[i].name, people[i].age);\n    }\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '点坐标', en: 'Point coordinates' },
          prompt: {
            zh: '定义结构体 `Point`（含 int x, y）。初始化一个 `Point p = {3, 4}` 并**每行一个**输出 `x = 3` 和 `y = 4`。',
            en: 'Define a `Point` struct (with int x, y). Initialize `Point p = {3, 4}` and print **one per line** `x = 3` and `y = 4`.',
          },
          starter: '/* 练习 1：Point */\n#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nint main(void) {\n    Point p = {3, 4};\n\n    return 0;\n}\n',
          expectedOutput: 'x = 3\ny = 4\n',
          hints: [
            { zh: '这题考的是**访问结构体成员并输出**。结构体 `Point` 和初值 `{3, 4}` 题目都已给好，剩下的只是拿到 `x`、`y` 两个字段的值，再各打印一行。', en: 'This task is about reaching struct members and printing them. The `Point` struct and its initial value `{3, 4}` are already provided; all that is left is to get the values of the `x` and `y` fields and print each on its own line.' },
            { zh: '把目标拆成两行输出：每行由「固定的文字部分 + 字段的值」拼成，比如 `x = ` 后跟 `p.x`。先想清楚用哪个符号能从结构体变量身上取到某个字段。', en: 'Break the goal into two output lines: each is literal text plus a field value, e.g. `x = ` followed by `p.x`. First decide which symbol extracts one field from a struct variable.' },
            { zh: '取字段用点号 `.`：`p.x` 就是 p 的 x 字段；打印用 `printf("x = %d\\n", p.x);`，`%d` 会被字段值替换。', en: 'Reach a field with the dot: `p.x` is the x field of p; print with `printf("x = %d\\n", p.x);`, where `%d` is replaced by the field value.' },
            { zh: '骨架是两条 printf：`printf("x = %d\\n", p.x);` 与 `printf("y = %d\\n", p.y);`。易错点：等号两边的空格要写进双引号里，`%d` 对应 int 字段，每行以 `\\n` 结尾，文字别多写或少写。', en: 'The skeleton is two printf calls: `printf("x = %d\\n", p.x);` and `printf("y = %d\\n", p.y);`. Pitfalls: the spaces around the equals sign must be inside the quotes, `%d` matches an int field, each line ends with `\\n`, and no extra or missing text.' },
            { zh: '直接在 starter 的 `Point p = {3, 4};` 之后补两行即可：`printf("x = %d\\n", p.x);` 输出 `x = 3`，`printf("y = %d\\n", p.y);` 输出 `y = 4`。若 p 是指针才用 `p->x`，这里是普通变量，用点号。', en: 'Simply add two lines after `Point p = {3, 4};` in the starter: `printf("x = %d\\n", p.x);` prints `x = 3`, and `printf("y = %d\\n", p.y);` prints `y = 4`. Arrow `p->x` is only for a pointer to a struct; p is a plain variable here, so use the dot.' },
          ],
          solution: '#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nint main(void) {\n    Point p = {3, 4};\n    printf("x = %d\\n", p.x);\n    printf("y = %d\\n", p.y);\n    return 0;\n}\n',
          solutionNote: { zh: '解法的核心是结构体成员用点号 `.` 访问：`p.x` 取得 x 字段的值 3。每条输出由格式串加参数构成，`printf("x = %d\\n", p.x)` 中 `x = ` 按原样显示、`%d` 被 `p.x` 替换、`\\n` 换行。易错点是等号两边的空格必须写进双引号里，且文字与题目完全一致。若 p 是指针则要写 `p->x`，这里 p 是普通变量，用点号即可。', en: 'The key idea is that a struct member is reached with the dot: `p.x` yields the value 3 of field x. Each line is a format string plus arguments — in `printf("x = %d\\n", p.x)` the literal `x = ` is shown as-is, `%d` is replaced by `p.x`, and `\\n` breaks the line. A pitfall is that the spaces around the equals sign must sit inside the quotes and the text must match exactly. You would write `p->x` only if p were a pointer; here p is a plain variable, so the dot works.' },
        },
        {
          id: 'ex2',
          title: { zh: '学生结构体数组', en: 'Array of students' },
          prompt: {
            zh: '定义结构体 `Student`（含 `name[20]`、`score`）。创建数组 `{ "Alice", 90 }, { "Bob", 75 }`，**每行一个**输出 `Alice: 90` 和 `Bob: 75`。',
            en: 'Define a `Student` struct (with `name[20]`, `score`). Build an array `{ "Alice", 90 }, { "Bob", 75 }` and print **one per line** `Alice: 90` and `Bob: 75`.',
          },
          starter: '/* 练习 2：学生数组 */\n#include <stdio.h>\n\ntypedef struct {\n    char name[20];\n    int score;\n} Student;\n\nint main(void) {\n    Student s[2] = {{"Alice", 90}, {"Bob", 75}};\n\n    return 0;\n}\n',
          expectedOutput: 'Alice: 90\nBob: 75\n',
          hints: [
            { zh: '这题把结构体放进了数组：`Student s[2]` 就像两张「学生登记表」。结构体定义和数组初值题目都已给好，真正要写的是**怎么逐条把记录打印出来**。', en: 'This task puts structs into an array: `Student s[2]` is like two student record cards. The struct definition and the array initializer are already given, so what you actually write is how to print each record one by one.' },
            { zh: '把目标拆成两层：外层遍历数组（共 2 条记录），内层把每一条输出成 `姓名: 分数` 一行。先想清楚按下标取第 i 条记录时，姓名和分数分别写作什么。', en: 'Split the goal in two: the outer layer walks the array (2 records), and the inner layer prints one record as `name: score` per line. First decide how the name and the score of record i are written by subscript.' },
            { zh: '第 i 条记录的字段写作 `s[i].name`、`s[i].score`；输出用 `printf("%s: %d\\n", s[i].name, s[i].score);`，`%s` 取字符串、`%d` 取整数。', en: 'The fields of record i are `s[i].name` and `s[i].score`; print with `printf("%s: %d\\n", s[i].name, s[i].score);`, where `%s` takes the string and `%d` the integer.' },
            { zh: '骨架是 `for (int i = 0; i < 2; i++)` 里放那条 printf。易错点：条件写 `i <= 2` 会越界访问 `s[2]`；冒号后要有一个空格（`Alice: 90`），别写错冒号位置或空格数。', en: 'The skeleton is `for (int i = 0; i < 2; i++)` wrapped around that printf. Pitfalls: writing `i <= 2` reads out of bounds at `s[2]`; and there is one space after the colon (`Alice: 90`), so keep the colon and the spacing exact.' },
            { zh: '在 starter 的数组初始化后补 `for (int i = 0; i < 2; i++) { printf("%s: %d\\n", s[i].name, s[i].score); }`——i 依次取 0、1，各输出一行，正好得到 `Alice: 90` 和 `Bob: 75`。', en: 'After the array initializer in the starter add `for (int i = 0; i < 2; i++) { printf("%s: %d\\n", s[i].name, s[i].score); }` — i runs over 0 then 1, printing one line each, which yields exactly `Alice: 90` and `Bob: 75`.' },
          ],
          solution: '#include <stdio.h>\n\ntypedef struct {\n    char name[20];\n    int score;\n} Student;\n\nint main(void) {\n    Student s[2] = {{"Alice", 90}, {"Bob", 75}};\n    for (int i = 0; i < 2; i++) {\n        printf("%s: %d\\n", s[i].name, s[i].score);\n    }\n    return 0;\n}\n',
          solutionNote: { zh: '解法的核心是把循环遍历与点号取字段组合起来：`s[i]` 是第 i 个学生，`s[i].name`、`s[i].score` 分别取姓名和分数，`printf("%s: %d\\n", ...)` 用 `%s`、`%d` 两个格式符一次输出一条记录，冒号后留一个空格。易错点是循环写成 `i <= 2` 会越界访问 `s[2]`；写法上也可把姓名与分数分两次打印，但每条记录一行最直接。', en: 'The key is combining a loop over the array with dot access to fields: `s[i]` is the i-th student, `s[i].name` and `s[i].score` read the name and the score, and `printf("%s: %d\\n", ...)` emits one record at a time with the `%s` and `%d` specifiers, one space after the colon. A pitfall is writing `i <= 2`, which reads out of bounds at `s[2]`; printing the name and score in separate calls also works, but one line per record is the most direct fit.' },
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

学会**把数据写进文件、再从文件读回来**。学完之后，你的程序保存的数据在关闭之后依然存在——这是记事本、游戏存档背后的基本原理。

## 文件操作是什么

程序里的变量活在内存里，**程序一关就全没了**。想让数据长期保存，就要写进**硬盘上的文件**。

C 的文件操作像**去仓库存取货**：先登记开门（\`fopen\`，拿到一个「仓库通行证」FILE*），凭通行证存（\`fprintf\`）或取（\`fscanf\`/\`fgets\`）数据，办完事必须锁门（\`fclose\`）。不做检查就硬闯、或走时不锁门，都可能出大问题。

## 怎么写

**打开与关闭**：

\`\`\`c
FILE *f = fopen("data.txt", "w");   // 想写入，用 "w" 模式
if (f == NULL) {
    return 1;          // 打开失败（fopen 返回 NULL），及时退出
}
// ... 存取数据 ...
fclose(f);             // 务必关闭
\`\`\`

- \`fopen(文件名, 模式)\` 返回 FILE 指针；失败返回 \`NULL\`，**必须检查**。
- 模式决定你是来干嘛的：

| 模式 | 含义 |
|---|---|
| \`"r"\` | 只读；文件不存在会失败 |
| \`"w"\` | 写入；文件不存在就创建，**已有内容会被清空** |
| \`"a"\` | 追加；在文件末尾续写，不动原内容 |

另外还有 \`"r+"\` 模式：读写都行，但文件必须已经存在，需要对着同一份文件边读边改时才用它。

**写入**：\`fprintf\` 长得和 printf 一模一样，只是第一个参数是文件指针：

\`\`\`c
fprintf(f, "%d %s\\n", age, name);
\`\`\`

**读取**：

\`\`\`c
fscanf(f, "%d", &age);          // 读一个整数——注意 &！
char line[128];
while (fgets(line, sizeof(line), f) != NULL) {
    printf("%s", line);         // line 自带 \\n
}
\`\`\`

- \`fscanf\` 和 scanf 一样，变量前要加 \`&\`。
- \`fgets\` 一次读一整行，返回 \`NULL\` 表示读到文件末尾——这是循环条件。

## 逐行读懂示例

本课示例（写入再读回）：

\`\`\`c
FILE *f = fopen("demo.txt", "w");
if (!f) return 1;
fprintf(f, "apple\\n");
fprintf(f, "banana\\n");
fclose(f);
\`\`\`

- 第 1 行：以写模式打开（或创建）demo.txt，拿到通行证 f。
- 第 2 行：\`!f\` 等价于 \`f == NULL\`——打开失败就退出。
- 第 3~4 行：两次 fprintf 写入两行文字，含换行符。
- 第 5 行：关闭文件，数据真正落盘。

\`\`\`c
f = fopen("demo.txt", "r");
if (!f) return 1;
char buf[64];
while (fgets(buf, sizeof(buf), f) != NULL) {
    printf("%s", buf);
}
fclose(f);
\`\`\`

- 重新以读模式打开；\`while (fgets(...) != NULL)\` 一轮读一行，直到文件末尾。
- buf 里带着换行，所以 printf 不用再补 \`\\n\`。

## 新手常犯的错误

- **不检查 fopen**：文件打开失败（返回 NULL）还继续用，程序直接崩溃。养成 \`if (f == NULL)\` 的习惯。
- **忘了 fclose**：数据可能还留在缓冲区没写进文件，程序退出后文件是空的或不完整。
- **fscanf 忘了 &**：\`fscanf(f, "%d", age)\` 传了值而不是地址，编译警告且运行崩溃。要写 \`&age\`。
- **"w" 误清了文件**：想读文件却写成 \`"w"\`，内容瞬间被清空。读用 \`"r"\`，追加用 \`"a"\`。
- **写完不重开就读**：刚用 \`"w"\` 写完就想读同一个文件，必须先 \`fclose\` 再以 \`"r"\` 重新打开；不重开直接读，读到的往往是空的或不完整的。

## 小结

- 文件三步走：fopen → 读/写 → fclose。
- 模式：\`"r"\` 读、\`"w"\` 写（清空）、\`"a"\` 追加。
- 写用 fprintf，读用 fscanf（带 \`&\`）或 fgets（读整行）。
- fopen 返回 NULL 表示失败，必须检查。
- 读到文件尾时，fgets 返回 NULL、fscanf 返回 EOF——这是判断「读完了」的标准信号。

到这里 C 的入门知识就串起来了——恭喜你走完第一程！`,
        en: `## What you will learn

Learn to **write data into files and read it back**. Afterwards, data saved by your program survives after it closes — the basic principle behind notepads and game saves.

## What is file I/O?

Variables live in memory and **vanish the moment the program exits**. To keep data long-term, write it into a **file on disk**.

File operations in C are like **depositing and retrieving goods at a warehouse**: register and open the door first (\`fopen\`, which hands you a "pass" — the FILE*), use the pass to store (\`fprintf\`) or fetch (\`fscanf\`/\`fgets\`) data, and always lock up when done (\`fclose\`). Forcing your way in without checking, or leaving without locking, can cause real trouble.

## How to write it

**Open and close**:

\`\`\`c
FILE *f = fopen("data.txt", "w");   // to write, use "w" mode
if (f == NULL) {
    return 1;          // open failed (fopen returns NULL) — bail out early
}
// ... store or fetch data ...
fclose(f);             // always close
\`\`\`

- \`fopen(filename, mode)\` returns a FILE pointer; on failure it returns \`NULL\`, which you **must check**.
- The mode says why you came:

| Mode | Meaning |
|---|---|
| \`"r"\` | read; fails if the file does not exist |
| \`"w"\` | write; creates the file if missing, **wipes existing content** |
| \`"a"\` | append; writes at the end, leaving old content alone |

There is also the \`"r+"\` mode: it allows both reading and writing, but the file must already exist — reach for it only when you need to read and modify the same file.

**Writing**: \`fprintf\` looks exactly like printf, except the first argument is the file pointer:

\`\`\`c
fprintf(f, "%d %s\\n", age, name);
\`\`\`

**Reading**:

\`\`\`c
fscanf(f, "%d", &age);          // read one integer — mind the &!
char line[128];
while (fgets(line, sizeof(line), f) != NULL) {
    printf("%s", line);         // line already carries \\n
}
\`\`\`

- \`fscanf\` works like scanf: variables need \`&\` in front.
- \`fgets\` reads one whole line and returns \`NULL\` at end of file — that is your loop condition.

## Reading the example line by line

The example for this lesson (write then read back):

\`\`\`c
FILE *f = fopen("demo.txt", "w");
if (!f) return 1;
fprintf(f, "apple\\n");
fprintf(f, "banana\\n");
fclose(f);
\`\`\`

- Line 1: open (or create) demo.txt in write mode, receiving the pass f.
- Line 2: \`!f\` is the same as \`f == NULL\` — exit if the open failed.
- Lines 3-4: two fprintf calls write two lines of text, newline included.
- Line 5: close the file so the data actually lands on disk.

\`\`\`c
f = fopen("demo.txt", "r");
if (!f) return 1;
char buf[64];
while (fgets(buf, sizeof(buf), f) != NULL) {
    printf("%s", buf);
}
fclose(f);
\`\`\`

- Reopen in read mode; \`while (fgets(...) != NULL)\` reads one line per round until end of file.
- buf already contains the newline, so printf needs no extra \`\\n\`.

## Common beginner mistakes

- **Not checking fopen**: using the file after a failed open (NULL pointer) crashes instantly. Build the \`if (f == NULL)\` habit.
- **Forgetting fclose**: data may still sit in the buffer, leaving the file empty or incomplete after exit.
- **Missing & in fscanf**: \`fscanf(f, "%d", age)\` passes the value instead of the address — a warning at compile time and a crash at run time. Write \`&age\`.
- **"w" wiping the file**: opening with \`"w"\` when you meant to read clears the content instantly. Read with \`"r"\`, append with \`"a"\`.
- **Reading right after writing**: to read the file you just wrote in \`"w"\` mode, you must \`fclose\` first and reopen with \`"r"\`; reading without reopening usually yields empty or partial data.

## Summary

- The three-step file dance: fopen → read/write → fclose.
- Modes: \`"r"\` read, \`"w"\` write (wipes), \`"a"\` append.
- Write with fprintf; read with fscanf (mind \`&\`) or fgets (whole lines).
- fopen returning NULL means failure — always check.
- At end of file, fgets returns NULL and fscanf returns EOF — the standard signal that you have "read it all".

That completes the beginner tour of C — congratulations on finishing the first leg!`,
      },
      examples: [
        {
          caption: { zh: '写入再读回', en: 'Write then read back' },
          code: '#include <stdio.h>\n\nint main(void) {\n    FILE *f = fopen("demo.txt", "w");\n    if (!f) return 1;\n    fprintf(f, "apple\\n");\n    fprintf(f, "banana\\n");\n    fclose(f);\n\n    f = fopen("demo.txt", "r");\n    if (!f) return 1;\n    char buf[64];\n    while (fgets(buf, sizeof(buf), f) != NULL) {\n        printf("%s", buf);\n    }\n    fclose(f);\n    return 0;\n}\n',
        },
      ],
      exercises: [
        {
          id: 'ex1',
          title: { zh: '写入再读回', en: 'Write then read back' },
          prompt: {
            zh: '把字符串 `"Hello File"` 写入 `test.txt`（模式 `"w"`），再重新打开读出内容。**两行输出**：第一行是文件内容 `Hello File`，第二行是 `lines: 1`。',
            en: 'Write `"Hello File"` into `test.txt` (mode `"w"`), reopen and read it back. Output **two lines**: the file content `Hello File`, then `lines: 1`.',
          },
          starter: '/* 练习 1：写入再读回 */\n#include <stdio.h>\n\nint main(void) {\n    /* 写入 → 读回 → 输出 */\n    return 0;\n}\n',
          expectedOutput: 'Hello File\nlines: 1\n',
          hints: [
            { zh: '任务分三幕：把字符串写进文件、重新打开按行读回、边读边数一共几行并输出。整条流程都在 `<stdio.h>` 的 fopen/fprintf/fclose/fgets 之间，先回忆每一幕该用哪个函数。', en: 'The task has three acts: write the string into a file, reopen and read it back line by line, counting the lines while reading and printing them. The whole flow lives among `fopen`/`fprintf`/`fclose`/`fgets` from `<stdio.h>` — first recall which function belongs to which act.' },
            { zh: '先写：用 `"w"` 模式打开 `test.txt`，`fprintf` 写入 `Hello File`，然后 `fclose`。再读：用 `"r"` 模式重开，靠 `fgets` 逐行读，读到 NULL 表示文件结束。最后输出文件内容与行数。', en: 'Write first: open `test.txt` in mode `"w"`, store `Hello File` with `fprintf`, then `fclose`. Then read: reopen in mode `"r"`, read line by line with `fgets` until it returns NULL at the end of the file. Finally print the content and the line count.' },
            { zh: '`fgets(buf, sizeof(buf), f)` 每次读入一行并返回非 NULL，读到文件末尾返回 NULL——把它当 while 条件，每次成功读一行就让计数器加一。', en: '`fgets(buf, sizeof(buf), f)` reads one line per call and returns non-NULL, or NULL at end of file — use it as the while condition, adding one to a counter on every successful read.' },
            { zh: '骨架：先声明 `char buf[128]; int lines = 0;`，再写 `while (fgets(buf, sizeof(buf), f) != NULL)`，循环体内 `lines++` 并输出内容。易错点：内容只输出一次、文件内容不含换行要自己补 `\\n`；两次 fopen 都应判空，两把文件都要 fclose。', en: 'Skeleton: declare `char buf[128]; int lines = 0;`, then write `while (fgets(buf, sizeof(buf), f) != NULL)` whose body does `lines++` and prints the content. Pitfalls: the content must appear only once, and since the stored text has no newline you must add `\\n` yourself; check both fopen calls and fclose both files.' },
            { zh: '参考写法：读循环里加个标记保证只输出一次——`while (fgets(buf, sizeof(buf), f) != NULL) { if (!printed) { printf("%s\\n", buf); printed = 1; } lines++; }`，循环外再 `printf("lines: %d\\n", lines);`。文件只有一行，读一次即结束，行数正好为 1。', en: 'Reference: use a flag in the read loop so the content prints once — `while (fgets(buf, sizeof(buf), f) != NULL) { if (!printed) { printf("%s\\n", buf); printed = 1; } lines++; }`, then `printf("lines: %d\\n", lines);` after the loop. The file holds a single line, so the loop ends after one read and the count is exactly 1.' },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    FILE *f = fopen("test.txt", "w");\n    if (!f) return 1;\n    fprintf(f, "Hello File");\n    fclose(f);\n\n    f = fopen("test.txt", "r");\n    if (!f) return 1;\n    char buf[128];\n    int lines = 0;\n    int printed = 0;\n    while (fgets(buf, sizeof(buf), f) != NULL) {\n        if (!printed) {\n            printf("%s\\n", buf);\n            printed = 1;\n        }\n        lines++;\n    }\n    fclose(f);\n    printf("lines: %d\\n", lines);\n    return 0;\n}\n',
          solutionNote: { zh: '解法的核心是「写入 → 关闭 → 重开读回」的完整流程：写入后必须 `fclose` 再以 `"r"` 重开，内容才稳定落盘可读。写入用 `fprintf` 存 `Hello File`，读回靠 `fgets` 循环，返回 NULL 表示读到末尾，循环内 `lines++` 计数。文件只写了一行且不含换行符，读回后输出要补 `\\n`，行数恰好为 1。也可在写入时把换行一并存进文件，读回打印就不用再补。', en: 'The key idea is the complete write-close-reread flow: after writing you must `fclose` and reopen with `"r"` so the content is safely on disk before reading. Writing stores `Hello File` via `fprintf`; reading loops with `fgets`, which returns NULL at end of file, incrementing `lines` each round. The file holds a single line with no trailing newline, so the output must add `\\n`, and the count comes out exactly 1. Alternatively you can store the newline inside the file while writing, and then print the buffer without adding one.' },
        },
        {
          id: 'ex2',
          title: { zh: '数字求和', en: 'Sum numbers in file' },
          prompt: {
            zh: '把三个整数 `10 20 30`（空格分隔、单行）写入 `nums.txt`，再读回累加求和并输出（应为 60）。',
            en: 'Write the three integers `10 20 30` (space-separated, one line) to `nums.txt`, read them back, sum them up, and print the result (should be 60).',
          },
          starter: '/* 练习 2：数字求和 */\n#include <stdio.h>\n\nint main(void) {\n\n    return 0;\n}\n',
          expectedOutput: '60\n',
          hints: [
            { zh: '这题练的是把整数写进文件、再读回累加。与上一题按行读字符串不同，整数应该走**格式化读写**：写靠 `fprintf`，读靠 `fscanf`。先想清楚这对函数各自怎么用。', en: 'This task is about writing integers to a file and reading them back to add up. Unlike the previous line-based string task, integers use formatted I/O: write with `fprintf`, read with `fscanf`. First work out how each of these two functions is used.' },
            { zh: '把流程拆成两段：第一段用 `"w"` 打开 `nums.txt`，把 `10 20 30` 以空格分隔写成一行后 `fclose`；第二段用 `"r"` 重开，循环一次读一个整数并累加，直到读不到为止，最后输出总和。', en: 'Split the flow in two: first open `nums.txt` in mode `"w"`, write `10 20 30` as one line separated by spaces, then `fclose`; second, reopen in mode `"r"`, loop reading one integer at a time and adding it to a total until nothing is left, then print the sum.' },
            { zh: '写：`fprintf(f, "%d %d %d\\n", 10, 20, 30);`；读：`fscanf(f, "%d", &x)` 把整数放进 x（`&` 不能少），成功读到一个就返回 1。', en: 'Write with `fprintf(f, "%d %d %d\\n", 10, 20, 30);`; read with `fscanf(f, "%d", &x)`, which stores the integer into x (the `&` is required) and returns 1 on each successful read.' },
            { zh: '骨架：声明 `int x, sum = 0;`，写 `while (fscanf(f, "%d", &x) == 1) { sum += x; }`，退出后 `printf("%d\\n", sum);`。易错点：漏掉 `&x` 的 `&`、把条件写成 `== 3`、或读数据用写死三次的 for——用 while 才稳妥。', en: 'Skeleton: declare `int x, sum = 0;`, write `while (fscanf(f, "%d", &x) == 1) { sum += x; }`, then `printf("%d\\n", sum);` after it. Pitfalls: dropping the `&` in `&x`, comparing with `== 3`, or reading with a hard-coded three-iteration loop — a while loop is the safe way.' },
            { zh: '参考实现：写段 `fprintf(f, "%d %d %d\\n", 10, 20, 30);` 后 `fclose`；读段以 `"r"` 重开后写 `int x, sum = 0; while (fscanf(f, "%d", &x) == 1) sum += x;`，`fclose` 后 `printf("%d\\n", sum);`——三个数依次累加正好得 60。', en: 'Reference: in the write phase `fprintf(f, "%d %d %d\\n", 10, 20, 30);` then `fclose`; in the read phase reopen with `"r"` and write `int x, sum = 0; while (fscanf(f, "%d", &x) == 1) sum += x;`, then `fclose` and `printf("%d\\n", sum);` — the three numbers add up to exactly 60.' },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    FILE *f = fopen("nums.txt", "w");\n    if (!f) return 1;\n    fprintf(f, "%d %d %d\\n", 10, 20, 30);\n    fclose(f);\n\n    f = fopen("nums.txt", "r");\n    if (!f) return 1;\n    int x, sum = 0;\n    while (fscanf(f, "%d", &x) == 1) {\n        sum += x;\n    }\n    fclose(f);\n    printf("%d\\n", sum);\n    return 0;\n}\n',
          solutionNote: { zh: '解法的核心是格式化读写：写入用 `fprintf` 把三个整数以空格分隔存成一行；读回时 `fscanf(f, "%d", &x) == 1` 每成功读到一个整数就返回 1，循环 `sum += x` 直到返回非 1，因此不必预先知道文件里有几个数。易错点是漏掉 `&x` 的 `&`，或读数据用写死三次的 for 循环。也可用 `fgets` 读整行再 `sscanf` 解析，但 `fscanf` 边读边加最简洁。', en: 'The core is formatted I/O: writing uses `fprintf` to store the three integers on one line separated by spaces, while reading uses `fscanf(f, "%d", &x) == 1`, which returns 1 per integer successfully read, so the loop accumulates `sum += x` until a non-1 return means nothing is left — no advance knowledge of the count is needed. Pitfalls are omitting the `&` in `&x` or reading with a fixed three-iteration loop. Reading the whole line with `fgets` and parsing it with `sscanf` also works, but the `fscanf` loop is the most concise.' },
        },
      ],
    },
  ],
};