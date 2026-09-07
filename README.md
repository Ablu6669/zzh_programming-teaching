# 编程语言学习工作台 / Polyglot Learning Workbench

Java · C · C++ · Python 四门语言的交互式学习网站：每个知识点配中英双语讲解与实战训练，代码写完直接在线运行并自动判题。

## 特性

- **四门语言 × 11 个知识点 × 2 道实战题**（共 88 题），从 Hello World 到文件 IO
- **在线运行**：基于 [Compiler Explorer (godbolt.org)](https://godbolt.org) 公共 API，无需注册、无后端
  - C (gcc 12.3) · C++ (gcc 12.3) · Python 3.12 · Java (JDK 21)
- **自动判题**：期望输出逐行比对（忽略行尾空格与末尾空行）
- **中英双语**：全部 UI 与内容完整翻译，一键切换
- **学习进度本地持久化**：localStorage 保存做题状态与代码草稿
- **暗色 / 亮色主题**
- **零构建纯静态站**：原生 ES Modules + 自写 hash 路由，可直接部署 GitHub Pages

## 技术栈

- 原生 JavaScript（ES Modules），零框架、零构建步骤
- [CodeMirror 5](https://codemirror.net/5/)（自托管，失败时自动降级 textarea）
- 受限 Markdown 渲染器（自写 ~120 行，先转义后渲染，防 XSS）

## 目录结构

```
index.html            # SPA 唯一入口
style.css             # 全部样式（CSS 变量双主题）
js/
  main.js             # 启动入口
  router.js           # hash 路由
  store.js            # 极简全局状态
  i18n.js             # t() / pick() 翻译运行时
  content.js          # 内容访问层
  progress.js         # 进度与草稿（localStorage）
  judge.js            # 输出比对判题
  mdrender.js         # 受限 Markdown 渲染
  runner/
    godbolt.js        # Godbolt 执行 API 封装（节流/缓存/错误分类）
    throttle.js       # 全局串行请求队列
  components/
    editor.js         # CodeMirror 编辑器（含降级）
    workspace.js      # 运行面板 + 判题面板
  views/
    homeView.js       # 语言选择首页
    roadmapView.js    # 知识点路线图
    topicView.js      # 知识点页（讲解/实战/演练场）
content/              # 四门语言的教学内容（双语）
i18n/                 # UI 词典 zh.js / en.js
vendor/codemirror/   # 自托管 CodeMirror
tools/
  verify_content.mjs  # 用真实执行后端实测全部 88 题
  check_i18n.mjs      # i18n 完整性三重校验
```

## 本地运行

```bash
# 任一静态服务器即可，例如：
npx serve .
# 或
python -m http.server 8000
```

> 注意：直接以 `file://` 打开会因 ES Modules 的 CORS 限制无法工作，需走 HTTP。

## 质量校验

```bash
node tools/check_i18n.mjs     # 词典键一致 / 引用完整 / 双语对非空
node tools/verify_content.mjs # 在线实测全部题目 solution 与期望输出
```

## 部署（GitHub Actions 自动发布）

仓库已内置 `.github/workflows/deploy.yml`：推送到 `main` 分支即自动发布。

1. GitHub 上新建空仓库（如 `polyglot-workbench`，**不要**勾选初始化 README）
2. 本地推送：
   ```bash
   git remote add origin https://github.com/<用户名>/<仓库名>.git
   git push -u origin main
   ```
3. 仓库 **Settings → Pages → Source** 选择 **GitHub Actions**（部分仓库首次推送后会自动配置）
4. 约 1 分钟后访问 `https://<用户名>.github.io/<仓库名>/`

> 发版更新：改完代码提交推送即可；`index.html` 中 `?v=20260907` 版本号建议随发版递增以刷新缓存。

## 致谢

代码执行由 [Compiler Explorer](https://godbolt.org) 的公共 API 提供（Boost Software License）。请合理使用，勿高频滥用。
