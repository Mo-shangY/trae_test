# 部署指南

## 1. 关联 GitHub 仓库
首先，你需要在 GitHub 上创建一个新的仓库（建议命名为 `yupi-blog`）。
然后在终端运行以下命令（将 `<your-repo-url>` 替换为你的仓库地址）：

```bash
git remote add origin https://github.com/liyupi/yupi-blog.git
git push -u origin master
```

## 2. 一键部署
关联仓库后，只需运行以下命令即可将 `dist` 文件夹部署到 GitHub Pages：

```bash
npm run deploy
```

## 3. 访问网站
部署完成后，你的网站将在 `https://liyupi.github.io/yupi-blog/` 上线（地址取决于你的 GitHub 用户名和仓库名）。
