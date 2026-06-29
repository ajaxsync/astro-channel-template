# Astro Channel Template

Telegram 风格的静态频道/博客模板，基于 [Astro 6](https://astro.build) + [Tailwind CSS](https://tailwindcss.com) 构建。

## 功能

- 频道式首页（消息流布局、日期分组）
- 草稿箱 / 归档（本地密码门）
- 深色模式
- Markdown 文章 + 代码高亮 + 复制按钮
- 点击头像查看随机语录卡片

## 从模板创建项目

1. 打开本仓库：<https://github.com/ajaxsync/astro-channel-template>
2. 点击 **Use this template** → **Create a new repository**
3. Clone 新仓库并安装依赖：

```bash
git clone https://github.com/your-username/your-new-repo.git
cd your-new-repo
pnpm install
pnpm dev
```

4. 浏览器访问 <http://localhost:4321>

## 自定义配置

创建项目后，通常只需修改以下文件：

| 改什么 | 文件 |
|--------|------|
| 频道名称、副标题、头像、链接 | `src/config/channel.ts` |
| 草稿/归档访问密码 | `src/config/access.ts` |
| 头像卡片随机语录 | `src/config/lulu-quotes.ts` |
| 文章 | `src/content/posts/*.md` |
| 站点图标、头像、聊天背景 | `public/` |

### 频道配置示例

```typescript
// src/config/channel.ts
export const channelConfig = {
  name: 'My Channel',
  username: 'my_channel',
  avatarUrl: '/favicon.jpg',
  tagline: '分享技术与生活',
  description: '一个 Telegram 风格的静态频道模板',
  subscribers: 0,
  telegramUrl: 'https://t.me/my_channel',
  githubUrl: 'https://github.com/your-username/your-repo',
  faviconUrl: '/favicon.png',
} as const;
```

### 修改访问密码

模板默认密码为 **`changeme`**（草稿箱与归档共用）。

生成新密码的 SHA-256 hash：

```bash
node scripts/hash-password.mjs your-new-password
```

将输出写入 `src/config/access.ts` 的 `DRAFT_PASSWORD_HASH`。

> **安全说明**：密码校验在浏览器端进行，仅用于隐藏草稿/归档内容，不能替代服务端鉴权。上线前务必修改默认密码。

## 写文章

在 `src/content/posts/` 新建 `.md` 文件：

```yaml
---
title: "文章标题"
publishedAt: 2026-01-01T10:00:00
tags: ["标签"]
draft: false    # true → 仅 /drafts/ 可见（需密码）
archived: false # true → 仅 /archive/ 可见（需密码）
---
```

| 字段 | 说明 |
|------|------|
| `draft: true` | 草稿，首页不显示，需密码访问 |
| `archived: true` | 归档，首页不显示，需密码访问 |
| 两者都不设或为 `false` | 公开发布，显示在首页 |

模板自带示例文章：

- `welcome-to-channel.md` — 欢迎与配置说明
- `markdown-guide.md` — Markdown 语法演示
- `example-draft.md` — 草稿示例
- `example-archived.md` — 归档示例

## 项目结构

```text
├── public/                 # 静态资源（favicon、背景图等）
├── scripts/
│   └── hash-password.mjs   # 生成访问密码 hash
├── src/
│   ├── config/             # ★ 主要配置（频道、密码、语录）
│   ├── content/posts/      # ★ 文章
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   └── utils/
├── astro.config.mjs
└── package.json
```

## 常用命令

| 命令 | 说明 |
|------|------|
| `pnpm install` | 安装依赖 |
| `pnpm dev` | 本地开发（<http://localhost:4321>） |
| `pnpm build` | 构建生产版本到 `dist/` |
| `pnpm preview` | 预览构建结果 |

**环境要求**：Node.js >= 22.12.0

## 部署

构建输出目录为 `dist/`，可部署到任意静态托管平台：

- [Vercel](https://vercel.com)
- [Netlify](https://netlify.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

以 Vercel 为例：导入 GitHub 仓库，Framework 选 Astro，Build Command 为 `pnpm build`，Output Directory 为 `dist`。

## 从模板同步更新

从模板创建的项目是独立仓库，模板更新**不会**自动同步。如需获取模板新功能，请手动 cherry-pick 或对比 diff。

## License

[MIT](./LICENSE)
