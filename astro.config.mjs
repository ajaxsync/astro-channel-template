// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
//
// 默认 base 为 '/'，适合本地开发、Vercel、Netlify、自定义域名。
// 部署到 GitHub Pages 项目站时，由 .github/workflows/static.yml 通过环境变量注入：
//   ASTRO_SITE、ASTRO_BASE
// 也可在构建前手动设置，例如：
//   ASTRO_SITE=https://your-name.github.io ASTRO_BASE=/your-repo/ pnpm build
const site = process.env.ASTRO_SITE;
const base = process.env.ASTRO_BASE ?? '/';

export default defineConfig({
  ...(site ? { site } : {}),
  base,
  integrations: [tailwind()],
});
