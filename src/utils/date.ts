/**
 * Astro/YAML 将无时区的日期按 UTC 解析。
 * 用 UTC 分量格式化，还原 frontmatter 里写的字面时间。
 */
export function formatMessageTime(date: Date): string {
  const h = String(date.getUTCHours()).padStart(2, '0');
  const m = String(date.getUTCMinutes()).padStart(2, '0');
  return `${h}:${m}`;
}

export function getDateKey(date: Date): string {
  const y = date.getUTCFullYear();
  const m = String(date.getUTCMonth() + 1).padStart(2, '0');
  const d = String(date.getUTCDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function formatDateLabel(dateKey: string): string {
  const [y, mo, d] = dateKey.split('-').map(Number);
  const postDate = new Date(y, mo - 1, d);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  if (postDate.getTime() === today.getTime()) return '今天';
  if (postDate.getTime() === yesterday.getTime()) return '昨天';

  return postDate.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
