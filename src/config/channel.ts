export const channelConfig = {
  name: 'My Channel',
  username: 'my_channel',
  avatarUrl: '/favicon.jpg',
  tagline: '分享技术与生活',
  description: '一个 Telegram 风格的静态频道模板',
  subscribers: 0,
  telegramUrl: 'https://t.me/my_channel',
  githubUrl: 'https://github.com/ajaxsync/astro-channel-template',
  faviconUrl: '/favicon.png',
} as const;

export function formatCount(count: number): string {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}K`;
  return count.toString();
}
