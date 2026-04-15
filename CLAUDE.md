# CLAUDE.md

本文件为 Claude Code (claude.ai/code) 在此仓库中工作时提供指导。

## 项目概述

这是一个受开发者"鱼皮"(Yu Pi)启发的个人作品集网站。这是一个现代化的、以技术为核心的博客/作品集网站，采用"极客"美学设计，包含深色主题、霓虹绿色点缀以及各种赛博朋克风格的动画和效果。

## 技术栈

- **框架**: Vue 3 与 Composition API
- **构建工具**: Vite
- **路由**: Vue Router 4
- **样式**: Tailwind CSS 配合自定义 CSS 动画
- **图标**: Lucide Vue Next
- **部署**: GitHub Pages

## 开发命令

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览生产构建
npm run preview

# 部署到 GitHub Pages
npm run deploy
```

## 架构与关键组件

### 布局结构
- **App.vue**: 根组件，包含布局结构，包括导航栏和页脚
- **NavBar.vue**: 响应式导航栏，带移动端汉堡菜单
- **Footer.vue**: 页脚组件
- **ScrollAnimate.vue**: 自定义滚动动画组件（当前未使用）

### 视图（页面）
- **Home.vue**: 首页，包含打字机动画、鼠标轨迹效果和粒子背景
- **Projects.vue**: 网格布局展示开源项目，带动画卡片
- **About.vue**: 关于页面内容

### 样式系统
- **Tailwind CSS**: 基础样式配合自定义主题颜色
  - `geek-black`: #0a0a0a（最深的背景色）
  - `geek-green`: #00ff41（主要强调色）
  - `geek-dark`: #111111（次要背景色）
- **自定义 CSS 动画**: `src/style.css` 中的大量动画库
  - 霓虹发光效果
  - 故障艺术动画
  - 扫描线效果
  - 打字机效果
  - 页面转场动画
  - 悬停效果和微交互

### 路由
简单的 Vue Router 设置，包含三个主要路由：
- `/`: 首页
- `/projects`: 项目展示
- `/about`: 关于页面

## 主要功能与效果

### 视觉效果
- 带拖尾粒子的鼠标光标
- 跨组件的动画扫描线
- 霓虹发光和脉冲效果
- 故障文字动画
- 3D 卡片悬停效果
- 多种类型的平滑页面转场动画

### 设计模式
- 使用 Tailwind 工具类的组件作用域动画
- 用于复杂效果的 CSS 关键帧动画
- 用于玻璃态效果的背景模糊效果
- 渐变叠加和文字效果
- 移动优先的响应式设计

## 文件结构说明

- 资源文件存储在 `src/assets/`（目前包含 avatar.jpg）
- 组件在 `src/components/`
- 视图在 `src/views/`
- 路由配置在 `src/router/`
- Vite 配置设置了指向 `src` 的路径别名 `@`

## 构建与部署

- 使用 Vite 进行快速开发和构建
- 构建后步骤将 `index.html` 复制到 `404.html` 以支持 GitHub Pages
- 部署命令推送到 `gh-pages` 分支
- 基础 URL 配置为 `/` 以支持 GitHub Pages 部署

## 重要样式说明

- 全程使用 `font-mono` 等宽字体
- 使用 `bg-zinc-950` 的深色主题
- `style.css` 中定义的自定义动画遵循命名约定，如 `animate-neon-glow`
- 许多组件同时使用 Tailwind 类和自定义 CSS 以实现复杂效果