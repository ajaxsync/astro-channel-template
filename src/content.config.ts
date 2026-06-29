import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    publishedAt: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().optional(),
    archived: z.boolean().optional(),
    image: z.string().optional(),
  }),
});

export const collections = {
  posts,
};
