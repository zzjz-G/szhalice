# 苏州艾丽斯装备科技有限公司 官网

Suzhou Alice Equipment Technology Co., Ltd. 官方网站，中英双语、响应式、纯前端静态站点。

- 线上域名：www.szhalice.com
- 技术栈：React 19 + TypeScript + Vite + Tailwind CSS v4 + React Router（Hash 路由）
- 数据：内容以静态数据文件维护在 `src/data`，无后端、无数据库，可直接部署到 GitHub Pages、静态服务器或对象存储。

## 本地开发

```bash
npm install      # 安装依赖
npm run dev      # 启动开发服务器（热更新）
npm run build    # 类型检查 + 生产构建，产物在 dist/
npm run preview  # 本地预览构建产物
```

## 目录结构

```
src/
├─ components/   # 导航、页脚、Logo、图标、区块标题、布局等
├─ pages/        # 首页、产品、方案、关于、新闻、联系等页面
├─ data/         # 公司信息、产品分类、解决方案、新闻、界面文案（中英文）
├─ i18n/         # 语言类型与工具
├─ App.tsx       # 路由配置
└─ index.css     # Tailwind 与主题（科技蓝）
```

## 内容维护

- 所有文案集中在 `src/data`，按 `zh / en` 双份维护；修改后重新 `npm run build` 即可。
- 更换图片：将图片放入 `src/assets` 并在对应组件/数据中引用相对路径。

## 部署到 GitHub Pages

1. 推送代码到 GitHub 仓库。
2. 在仓库 Settings → Pages 选择部署分支与目录（或使用 CI 构建 `dist/`）。
3. 在 Custom domain 填入 `www.szhalice.com`，并在域名服务商处添加 CNAME 指向 GitHub Pages。
4. 勾选 Enforce HTTPS。
