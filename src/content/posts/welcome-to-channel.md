---
title: "🎉 欢迎使用 Astro Channel Template"
publishedAt: 2026-01-01T10:00:00
tags: ["指南", "欢迎"]
---

欢迎使用 **Astro Channel Template**！

## 这是什么

一个 Telegram 风格的静态频道/博客模板，基于 Astro 6 + Tailwind CSS 构建。

## 快速自定义

| 改什么 | 文件 |
|--------|------|
| 频道名称、头像、链接 | `src/config/channel.ts` |
| 草稿/归档访问密码 | `src/config/access.ts` |
| 头像卡片随机语录 | `src/config/lulu-quotes.ts` |
| 文章 | `src/content/posts/*.md` |
| 图标与背景图 | `public/` |

## 文章 Frontmatter

```yaml
title: "文章标题"
publishedAt: 2026-01-01T10:00:00
tags: ["标签"]
draft: false    # true → 仅草稿页可见（需密码）
archived: false # true → 仅归档页可见（需密码）
```

## 下一步

1. 修改 `src/config/channel.ts` 中的频道信息
2. 修改默认访问密码（见 README）
3. 删除或改写本示例文章
4. 运行 `pnpm build` 并部署

更多说明请查看项目根目录的 [README.md](https://github.com/ajaxsync/astro-channel-template#readme)。
