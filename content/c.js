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
    printf("你好，C\\n");
    return 0;
}
\`\`\`

- Line 1: pulls in the standard input/output toolbox so \`printf\` is available below.
- Line 3: defines the main function — execution starts here.
- Line 4: prints \`Hello, C!\`; the trailing \`\\n\` moves the cursor to the start of the next line.
- Line 5: prints another line, \`你好，C\`, also ending with \`\\n\`. \`printf\` handles Chinese text just fine.
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
          code: '#include <stdio.h>\n\nint main(void) {\n    printf("Hello, C!\\n");\n    printf("你好，C\\n");\n    return 0;\n}\n',
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
            {
              zh: '先想清楚：屏幕上最终要出现几行字？每一行由哪一次 printf 负责？记住 printf 不会自动换行。',
              en: 'Think it through: how many lines must appear on screen, and which printf call is responsible for each? Remember printf never adds newlines by itself.',
            },
            {
              zh: '每次调用 printf 时，在双引号字符串的末尾写上 `\\n`，每条语句用分号 `;` 结尾。',
              en: 'In each printf call, put `\\n` at the end of the double-quoted string, and end every statement with a semicolon `;`.',
            },
            {
              zh: '先写一条 printf 输出 Hello, World! 并换行；再写第二条输出 I am learning C 并换行。对照题目检查大小写、逗号和空格。',
              en: 'Write one printf that outputs Hello, World! with a newline, then a second one for I am learning C with a newline. Check capitalization, the comma and spaces against the task.',
            },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    printf("Hello, World!\\n");\n    printf("I am learning C\\n");\n    return 0;\n}\n',
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
            {
              zh: '三行星号一颗比一颗多。最省心的做法是什么？不急着耍技巧，老老实实写三次 printf，一次负责一行。',
              en: 'The star count grows by one each line. What is the simplest approach? No fancy tricks — just three plain printf calls, one per line.',
            },
            {
              zh: 'printf 的双引号里写要显示的星号，末尾加 `\\n` 换行，整条语句以分号结尾。',
              en: 'Inside the double quotes put the stars to display, end with `\\n` for the line break, and close the statement with a semicolon.',
            },
            {
              zh: '三次 printf 分别输出 `"*"`、`"**"`、`"***"`，每条的字符串末尾都带上 `\\n`。',
              en: 'Three printf calls output `"*"`, then `"**"`, then `"***"`, each string ending with `\\n`.',
            },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    printf("*\\n");\n    printf("**\\n");\n    printf("***\\n");\n    return 0;\n}\n',
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
            {
              zh: '面积怎么算？想想长方形面积公式，然后用上一课学的「声明变量 + printf」把结果打印出来。',
              en: 'How do you compute an area? Recall the rectangle formula, then use last lesson\'s "declare a variable + printf" to print the result.',
            },
            {
              zh: '用 `*` 做乘法，把结果存进一个 `int` 变量，再用 `printf("%d\\n", ...)` 输出它。',
              en: 'Use `*` to multiply, store the result in an `int` variable, and print it with `printf("%d\\n", ...)`.',
            },
            {
              zh: '三步：声明 `int area = width * height;`，然后 printf 输出 area，别忘了分号和 `\\n`。',
              en: 'Three steps: declare `int area = width * height;`, print area with printf, and mind the semicolon and `\\n`.',
            },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int width = 7;\n    int height = 4;\n    int area = width * height;\n    printf("%d\\n", area);\n    return 0;\n}\n',
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
            {
              zh: '题目已经给了公式，你需要把它翻译成 C 的写法：乘、除、加的顺序，以及结果存在哪个变量里。',
              en: 'The formula is given; your job is to translate it into C: the order of multiply, divide, add, and where to store the result.',
            },
            {
              zh: '运算符是 `*`、`/`、`+`；声明一个 `int f` 存结果，用 `%d` 输出。',
              en: 'The operators are `*`, `/`, `+`; declare an `int f` for the result and print it with `%d`.',
            },
            {
              zh: '写 `int f = c * 9 / 5 + 32;`，再 `printf("%d\\n", f);`。注意 c 是 int，整数除法 333/5 得 66，最终 98。',
              en: 'Write `int f = c * 9 / 5 + 32;` then `printf("%d\\n", f);`. Note c is an int: integer division 333/5 gives 66, so the answer is 98.',
            },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int c = 37;\n    int f = c * 9 / 5 + 32;\n    printf("%d\\n", f);\n    return 0;\n}\n',
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
            {
              zh: '一分钟是 60 秒。想想哪个运算能算出「包含几个整分钟」，哪个运算能算出「剩下几秒」。',
              en: 'One minute is 60 seconds. Which operation counts the whole minutes, and which finds the leftover seconds?',
            },
            {
              zh: '整数除法 `total / 60` 得分钟数；取余 `total % 60` 得剩余秒数。',
              en: 'Integer division `total / 60` gives the minutes; the remainder `total % 60` gives the leftover seconds.',
            },
            {
              zh: '两次 printf 分别输出 `total / 60` 和 `total % 60`，每条末尾加 `\\n`，让两行各占一行。',
              en: 'Two printf calls print `total / 60` and `total % 60` respectively, each ending with `\\n` so they occupy one line each.',
            },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int total = 3775;\n    printf("%d\\n", total / 60);\n    printf("%d\\n", total % 60);\n    return 0;\n}\n',
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
            {
              zh: '如果把 a 的值直接赋给 b，a 原来的值就丢了。你需要一个地方先把 a 的值「暂存」一下。',
              en: 'If you assign a to b right away, the original value of a is lost. You need somewhere to "park" the value of a first.',
            },
            {
              zh: '再声明一个临时变量 `int t;`，用它保存 a 的旧值，三条赋值语句配合完成交换。',
              en: 'Declare a temporary `int t;` to hold the old value of a; three assignment statements complete the swap.',
            },
            {
              zh: '依次执行：`t = a;` → `a = b;` → `b = t;`，最后用 `%d %d` 一行输出 a 和 b。',
              en: 'In order: `t = a;` then `a = b;` then `b = t;` finally print a and b on one line with `%d %d`.',
            },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int a = 3;\n    int b = 8;\n    int t = a;\n    a = b;\n    b = t;\n    printf("%d %d\\n", a, b);\n    return 0;\n}\n',
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
            {
              zh: '成绩分五档，自然会想到「从高到低一层层判断」。想想先判断哪一档，才不用写多余的条件？',
              en: 'Five grade bands suggest "checking level by level from the top". Which band should be tested first so no extra conditions are needed?',
            },
            {
              zh: '用 `if (score >= 90) ... else if (score >= 80) ... else if ...` 的链式结构，每档一个 printf。',
              en: 'Chain `if (score >= 90) ... else if (score >= 80) ... else if ...`, one printf per band.',
            },
            {
              zh: '按 A(≥90)、B(≥80)、C(≥70)、D(≥60) 依次 else if，最后 else 输出 F；每条 printf 用 `\\n` 结尾。',
              en: 'Use else-if for A(≥90), B(≥80), C(≥70), D(≥60) in order, with a final else printing F; end each printf with `\\n`.',
            },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int score = 85;\n    if (score >= 90) {\n        printf("A\\n");\n    } else if (score >= 80) {\n        printf("B\\n");\n    } else if (score >= 70) {\n        printf("C\\n");\n    } else if (score >= 60) {\n        printf("D\\n");\n    } else {\n        printf("F\\n");\n    }\n    return 0;\n}\n',
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
            {
              zh: '「最大」意味着什么？就是「不比其他任何一个数小」。想想怎么用条件把这句话写出来。',
              en: 'What does "largest" mean? "Not smaller than any of the others". Think how to phrase that with a condition.',
            },
            {
              zh: '用逻辑与 `&&` 把两个比较连起来，如 `a >= b && a >= c`；用 `%d` 输出找到的数。',
              en: 'Join two comparisons with logical and `&&`, e.g. `a >= b && a >= c`; print the winner with `%d`.',
            },
            {
              zh: '三个分支：若 `a >= b && a >= c` 输出 a；否则若 `b >= a && b >= c` 输出 b；否则输出 c。',
              en: 'Three branches: if `a >= b && a >= c` print a; else if `b >= a && b >= c` print b; otherwise print c.',
            },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int a = 12, b = 7, c = 9;\n    if (a >= b && a >= c) {\n        printf("%d\\n", a);\n    } else if (b >= a && b >= c) {\n        printf("%d\\n", b);\n    } else {\n        printf("%d\\n", c);\n    }\n    return 0;\n}\n',
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
            {
              zh: '你不会想手写 100 个加号。想想累加的套路：一个装总数的变量，一个从 1 走到 100 的计数器。',
              en: 'You do not want to write 100 plus signs. Recall the accumulation pattern: one variable holding the total, one counter walking from 1 to 100.',
            },
            {
              zh: '先 `int total = 0;`，再写 for 循环让 i 从 1 到 100，循环体里用 `total += i` 累加。',
              en: 'Start with `int total = 0;`, then a for loop with i from 1 to 100 whose body does `total += i`.',
            },
            {
              zh: '循环结束后，用 `printf("%d\\n", total);` 输出总数。注意条件是 `i <= 100`，别把 100 漏掉。',
              en: 'After the loop, output the total with `printf("%d\\n", total);`. Mind the condition `i <= 100` — do not drop the 100.',
            },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int total = 0;\n    for (int i = 1; i <= 100; i++) {\n        total += i;\n    }\n    printf("%d\\n", total);\n    return 0;\n}\n',
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
            {
              zh: '九行的结构完全一样，只有数字在变——这正是循环的用武之地。找出每行里「变的部分」和「不变的部分」。',
              en: 'All nine lines share the same shape with only the numbers changing — a perfect loop job. Identify what changes and what stays fixed in each line.',
            },
            {
              zh: '让 i 从 1 循环到 9，每次 printf 里输出字符串 `7 x `、两个 `%d`（i 和 7*i）和 ` = `，末尾 `\\n`。',
              en: 'Loop i from 1 to 9; each printf outputs the literal `7 x `, two `%d` fills (i and 7*i) and ` = `, ending with `\\n`.',
            },
            {
              zh: '写 `for (int i = 1; i <= 9; i++)`，循环体一句 `printf("7 x %d = %d\\n", i, 7 * i);`，注意空格和 x 前后都要有。',
              en: 'Write `for (int i = 1; i <= 9; i++)` with the body `printf("7 x %d = %d\\n", i, 7 * i);` — mind the spaces around x and =.',
            },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    for (int i = 1; i <= 9; i++) {\n        printf("7 x %d = %d\\n", i, 7 * i);\n    }\n    return 0;\n}\n',
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
            {
              zh: '「素数」就是除 1 和自身外没有别的约数。想想怎么判断：拿哪些数去试除？什么时候能提前下结论？',
              en: 'A prime has no divisors besides 1 and itself. Which numbers do you test-divide by, and when can you conclude early?',
            },
            {
              zh: 'is_prime 里用 `for (int i = 2; i < n; i++)` 试除，发现 `n % i == 0` 就 `return 0`；全程没整除就 `return 1`。',
              en: 'Inside is_prime, test divisors with `for (int i = 2; i < n; i++)`; if `n % i == 0` then `return 0`, otherwise `return 1` at the end.',
            },
            {
              zh: '先处理 `n < 2` 返回 0；然后循环试除；main 里 `for (n = 2; n < 20; n++)`，是素数就 `printf("%d\\n", n)`。',
              en: 'Handle `n < 2` by returning 0, then loop the trial divisions; in main loop `for (n = 2; n < 20; n++)` and `printf("%d\\n", n)` when is_prime(n) holds.',
            },
          ],
          solution: '#include <stdio.h>\n\nint is_prime(int n) {\n    if (n < 2) return 0;\n    for (int i = 2; i < n; i++) {\n        if (n % i == 0) return 0;\n    }\n    return 1;\n}\n\nint main(void) {\n    for (int n = 2; n < 20; n++) {\n        if (is_prime(n)) {\n            printf("%d\\n", n);\n        }\n    }\n    return 0;\n}\n',
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
            {
              zh: '阶乘的定义本身就带着「重复」：n! = n × (n-1)!，而且 0! = 1 是递归的出口。想想函数怎么调用自己。',
              en: 'The definition itself repeats: n! = n × (n-1)!, with 0! = 1 as the way out. Think how the function can call itself.',
            },
            {
              zh: '递归写法：`if (n <= 1) return 1;` 是出口；否则 `return n * factorial(n - 1);`。',
              en: 'Recursively: `if (n <= 1) return 1;` is the base case; otherwise `return n * factorial(n - 1);`.',
            },
            {
              zh: '在 factorial 里写出口和递归两步；main 里 `printf("%d\\n", factorial(5));` 输出结果。',
              en: 'Write the base case and the recursive step inside factorial; in main, `printf("%d\\n", factorial(5));` prints the answer.',
            },
          ],
          solution: '#include <stdio.h>\n\nint factorial(int n) {\n    if (n <= 1) return 1;\n    return n * factorial(n - 1);\n}\n\nint main(void) {\n    printf("%d\\n", factorial(5));\n    return 0;\n}\n',
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
            {
              zh: '一堆数求和的套路在数组课里见过：一个从 0 出发的累加器，加一个把每个元素走一遍的循环。',
              en: 'You have seen the sum pattern: an accumulator starting at 0 plus a loop that visits every element.',
            },
            {
              zh: '声明 `int s = 0;`，然后 `for (int i = 0; i < 5; i++)` 里写 `s += a[i];`。',
              en: 'Declare `int s = 0;`, then inside `for (int i = 0; i < 5; i++)` do `s += a[i];`.',
            },
            {
              zh: '循环结束后 `printf("%d\\n", s);` 一行输出总和。检查循环条件是 `i < 5` 而不是 `<=`。',
              en: 'After the loop, `printf("%d\\n", s);` prints the sum on one line. Check the condition is `i < 5`, not `<=`.',
            },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int a[5] = {4, 8, 15, 16, 23};\n    int s = 0;\n    for (int i = 0; i < 5; i++) {\n        s += a[i];\n    }\n    printf("%d\\n", s);\n    return 0;\n}\n',
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
            {
              zh: '矩阵是行和列的组合：外层循环负责走到哪一行，内层循环负责这一行里的每一列。',
              en: 'A matrix combines rows and columns: the outer loop picks the row, the inner loop walks every column within it.',
            },
            {
              zh: '双重 for：外层 `r` 从 0 到 2，内层 `c` 从 0 到 2；输出用 `printf("%d ", m[r][c])`，每行结束后 `printf("\\n")`。',
              en: 'Nested for: outer `r` from 0 to 2, inner `c` from 0 to 2; print with `printf("%d ", m[r][c])` and `printf("\\n")` after each row.',
            },
            {
              zh: '内层循环输出 `m[r][c]` 加一个空格；内层结束后单独 printf 一个换行；两层循环条件都用 `< 3`。',
              en: 'The inner loop prints `m[r][c]` plus a space; once it finishes, print a lone newline; both loops use the condition `< 3`.',
            },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int m[3][3] = {{1,2,3},{4,5,6},{7,8,9}};\n    for (int r = 0; r < 3; r++) {\n        for (int c = 0; c < 3; c++) {\n            printf("%d ", m[r][c]);\n        }\n        printf("\\n");\n    }\n    return 0;\n}\n',
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
            {
              zh: '这题就是「长度 + 复制」两个动作：先想清楚哪个函数管哪件事、结果分别怎么输出。',
              en: 'This task is two actions — "length + copy": figure out which function handles which and how each result gets printed.',
            },
            {
              zh: '用 `strcpy(dst, src);` 完成复制；长度用 `strlen(src)` 输出，格式符是 `%zu`，内容用 `%s`。',
              en: 'Copy with `strcpy(dst, src);`; print the length via `strlen(src)` using `%zu`, and the copy with `%s`.',
            },
            {
              zh: '两行 printf：第一行 `printf("%zu\\n", strlen(src));`，第二行 `printf("%s\\n", dst);`，注意都带 `\\n`。',
              en: 'Two printf lines: first `printf("%zu\\n", strlen(src));`, then `printf("%s\\n", dst);` — both with `\\n`.',
            },
          ],
          solution: '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char src[] = "Hello, C";\n    char dst[20];\n    strcpy(dst, src);\n    printf("%zu\\n", strlen(src));\n    printf("%s\\n", dst);\n    return 0;\n}\n',
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
            {
              zh: '别用 == 比字符串——那比的是地址。回想讲义里哪个函数才是比较内容的，它相等时返回什么？',
              en: 'Do not compare strings with == — that compares addresses. Which function compares contents, and what does it return when equal?',
            },
            {
              zh: '用 `if (strcmp("apple", "banana") == 0)` 判断相等：返回 0 才是相等，否则不等。',
              en: 'Test equality with `if (strcmp("apple", "banana") == 0)`: a return of 0 means equal, anything else means different.',
            },
            {
              zh: 'if 里 `printf("equal\\n");`，else 里 `printf("different\\n");`，字符串和 `\\n` 都在双引号里。',
              en: 'In the if branch `printf("equal\\n");`, in the else branch `printf("different\\n");`, with the text and `\\n` inside double quotes.',
            },
          ],
          solution: '#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    if (strcmp("apple", "banana") == 0) {\n        printf("equal\\n");\n    } else {\n        printf("different\\n");\n    }\n    return 0;\n}\n',
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
            {
              zh: '回顾上一课：函数拿到的是副本，改不动外面的变量。要让 swap 真正生效，你得把什么「递」给函数？',
              en: 'Recall the last lesson: a function only gets a copy and cannot touch outside variables. What must you "hand over" to make swap actually work?',
            },
            {
              zh: '函数体内用 `*a`、`*b` 读写指针指向的值，配合一个临时变量；调用时记得 `swap(&x, &y)`。',
              en: 'Inside the function, read and write through `*a` and `*b` with one temporary; and call it as `swap(&x, &y)`.',
            },
            {
              zh: '三步：`int t = *a;` → `*a = *b;` → `*b = t;`；main 里调用后用 `printf("%d %d\\n", x, y);` 输出。',
              en: 'Three steps: `int t = *a;` then `*a = *b;` then `*b = t;`; after the call in main, print with `printf("%d %d\\n", x, y);`.',
            },
          ],
          solution: '#include <stdio.h>\n\nvoid swap(int *a, int *b) {\n    int t = *a;\n    *a = *b;\n    *b = t;\n}\n\nint main(void) {\n    int x = 3, y = 8;\n    swap(&x, &y);\n    printf("%d %d\\n", x, y);\n    return 0;\n}\n',
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
            {
              zh: '数组名本身就是首元素的地址。想想能不能让一个指针从数组开头出发，每次前进一格，走 5 格。',
              en: 'The array name is already the address of the first element. Could a pointer start there and advance one cell at a time, five times?',
            },
            {
              zh: '声明 `int *p = a;`，循环条件写成 `p < a + 5`，每轮 `p++` 前进一个元素，输出用 `*p`。',
              en: 'Declare `int *p = a;`, loop while `p < a + 5`, advance with `p++` each round, and print `*p`.',
            },
            {
              zh: '`for (; p < a + 5; p++)` 里写 `printf("%d\\n", *p);`——初始化在前面已完成，for 第一段可留空。',
              en: 'Inside `for (; p < a + 5; p++)` write `printf("%d\\n", *p);` — the init already happened before, so the first slot of for can stay empty.',
            },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    int a[5] = {4, 8, 15, 16, 23};\n    int *p = a;\n    for (; p < a + 5; p++) {\n        printf("%d\\n", *p);\n    }\n    return 0;\n}\n',
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
            {
              zh: '题目已经把结构和初始值都给好了，剩下的只是「怎么把两个字段打印出来」。想想变量取字段用什么符号。',
              en: 'The struct and its initial values are given; what remains is "how to print two fields". Which symbol does a variable use to reach its fields?',
            },
            {
              zh: '变量取字段用点号：`p.x`、`p.y`，整数用 `printf("%d\\n", ...)` 输出。',
              en: 'A variable reaches fields with the dot: `p.x` and `p.y`, printed as integers with `printf("%d\\n", ...)`.',
            },
            {
              zh: '两行 printf：`printf("x = %d\\n", p.x);` 和 `printf("y = %d\\n", p.y);`，注意等号两边的空格。',
              en: 'Two printf lines: `printf("x = %d\\n", p.x);` and `printf("y = %d\\n", p.y);` — mind the spaces around the equals sign.',
            },
          ],
          solution: '#include <stdio.h>\n\ntypedef struct {\n    int x;\n    int y;\n} Point;\n\nint main(void) {\n    Point p = {3, 4};\n    printf("x = %d\\n", p.x);\n    printf("y = %d\\n", p.y);\n    return 0;\n}\n',
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
            {
              zh: '数组里有两张「登记表」，逐张打印正是循环擅长的事。想想字符串字段和整数字段分别用什么格式符。',
              en: 'Two "registration forms" sit in the array, and printing them one by one is a loop job. Which format specifier fits the string field, and which fits the integer?',
            },
            {
              zh: '用 `for (int i = 0; i < 2; i++)`，printf 里 `%s` 配 `s[i].name`、`%d` 配 `s[i].score`。',
              en: 'Use `for (int i = 0; i < 2; i++)`; in the printf, `%s` pairs with `s[i].name` and `%d` with `s[i].score`.',
            },
            {
              zh: '格式串写成 `"%s: %d\\n"`——冒号紧跟姓名、后面一个空格，循环里逐个输出即可。',
              en: 'Use the format `"%s: %d\\n"` — a colon right after the name and a space before the number — and print one record per loop round.',
            },
          ],
          solution: '#include <stdio.h>\n\ntypedef struct {\n    char name[20];\n    int score;\n} Student;\n\nint main(void) {\n    Student s[2] = {{"Alice", 90}, {"Bob", 75}};\n    for (int i = 0; i < 2; i++) {\n        printf("%s: %d\\n", s[i].name, s[i].score);\n    }\n    return 0;\n}\n',
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
            {
              zh: '这个任务分三幕：把字写进文件、重新打开读出来、顺便数一数读到了几行。每一步分别用哪个函数？',
              en: 'This task has three acts: write the text to a file, reopen and read it back, and count the lines read. Which function does each act?',
            },
            {
              zh: '写入用 `fopen(..., "w")` + `fprintf`；读回用 `fopen(..., "r")` + `fgets`，每读到一行就把计数加一。',
              en: 'Write with `fopen(..., "w")` + `fprintf`; read back with `fopen(..., "r")` + `fgets`, incrementing a counter per line read.',
            },
            {
              zh: '第一遍输出读到的内容；用一个 `int lines = 0;`，在 while 循环里 `lines++`；最后 `printf("lines: %d\\n", lines);`。别忘了两次 fclose。',
              en: 'In the first pass print the content; keep an `int lines = 0;` and `lines++` inside the while loop; finish with `printf("lines: %d\\n", lines);`. Do not forget both fclose calls.',
            },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    FILE *f = fopen("test.txt", "w");\n    if (!f) return 1;\n    fprintf(f, "Hello File");\n    fclose(f);\n\n    f = fopen("test.txt", "r");\n    if (!f) return 1;\n    char buf[128];\n    int lines = 0;\n    int printed = 0;\n    while (fgets(buf, sizeof(buf), f) != NULL) {\n        if (!printed) {\n            printf("%s\\n", buf);\n            printed = 1;\n        }\n        lines++;\n    }\n    fclose(f);\n    printf("lines: %d\\n", lines);\n    return 0;\n}\n',
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
            {
              zh: '老配方：先用写模式存三个数，再用读模式取回来加总。想想读整数时哪个函数最顺手？',
              en: 'Same recipe: store three numbers in write mode, then fetch and total them in read mode. Which function reads integers most comfortably?',
            },
            {
              zh: '写入 `fprintf(f, "%d %d %d\\n", 10, 20, 30);`；读回用 `fscanf(f, "%d", &x)`——注意 &。',
              en: 'Write with `fprintf(f, "%d %d %d\\n", 10, 20, 30);`; read back with `fscanf(f, "%d", &x)` — mind the &.',
            },
            {
              zh: '循环条件写 `while (fscanf(f, "%d", &x) == 1)`：成功读一个就累加 `sum += x;`，读不动了（返回非 1）就结束，最后输出 sum。',
              en: 'Loop with `while (fscanf(f, "%d", &x) == 1)`: each success does `sum += x;`, and when the return is not 1 the loop ends; print sum last.',
            },
          ],
          solution: '#include <stdio.h>\n\nint main(void) {\n    FILE *f = fopen("nums.txt", "w");\n    if (!f) return 1;\n    fprintf(f, "%d %d %d\\n", 10, 20, 30);\n    fclose(f);\n\n    f = fopen("nums.txt", "r");\n    if (!f) return 1;\n    int x, sum = 0;\n    while (fscanf(f, "%d", &x) == 1) {\n        sum += x;\n    }\n    fclose(f);\n    printf("%d\\n", sum);\n    return 0;\n}\n',
        },
      ],
    },
  ],
};