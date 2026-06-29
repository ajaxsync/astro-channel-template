import { getCollection, render } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';
import { getDateKey } from './date';

export type PostWithContent = {
  post: CollectionEntry<'posts'>;
  Content: AstroComponentFactory;
};

export async function getPublishedPosts() {
  return getCollection('posts', ({ data }) => !data.draft && !data.archived);
}

export async function getArchivedPosts() {
  return getCollection('posts', ({ data }) => data.archived === true && !data.draft);
}

export async function getDraftPosts() {
  return getCollection('posts', ({ data }) => data.draft === true);
}

export function sortPostsByDate(posts: CollectionEntry<'posts'>[]) {
  return [...posts].sort(
    (a, b) =>
      new Date(a.data.publishedAt).getTime() - new Date(b.data.publishedAt).getTime(),
  );
}

export async function prepareGroupedPosts(
  posts: CollectionEntry<'posts'>[],
): Promise<Record<string, PostWithContent[]>> {
  const sorted = sortPostsByDate(posts);
  const postsWithContent = await Promise.all(
    sorted.map(async (post) => {
      const { Content } = await render(post);
      return { post, Content };
    }),
  );

  return postsWithContent.reduce<Record<string, PostWithContent[]>>((groups, item) => {
    const dateKey = getDateKey(item.post.data.publishedAt);
    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(item);
    return groups;
  }, {});
}
