export const ACCESS_STORAGE_KEYS = {
  archive: 'archive-access',
  drafts: 'drafts-access',
} as const;

/** SHA-256 of default password "changeme" — change before deploying */
export const DRAFT_PASSWORD_HASH =
  '057ba03d6c44104863dc7361fe4578965d1887360f90a0895882e58a6248fc86';

/** 访问会话有效期（毫秒） */
export const ACCESS_SESSION_TTL_MS = 2 * 60 * 60 * 1000;

/** 密码错误不计时次数 */
export const PASSWORD_FREE_ATTEMPTS = 3;

/**
 * 第 4 次起每次错误对应的锁定时长（毫秒）。
 * 第 9 次及之后统一使用最后一档（10 分钟）。
 */
export const PASSWORD_LOCK_SCHEDULE_MS = [
  30 * 1000,
  60 * 1000,
  2 * 60 * 1000,
  3 * 60 * 1000,
  5 * 60 * 1000,
  10 * 60 * 1000,
] as const;

export function getPasswordLockDurationMs(failCount: number): number | null {
  if (failCount <= PASSWORD_FREE_ATTEMPTS) {
    return null;
  }

  const scheduleIndex = failCount - PASSWORD_FREE_ATTEMPTS - 1;
  const maxIndex = PASSWORD_LOCK_SCHEDULE_MS.length - 1;

  if (scheduleIndex >= maxIndex) {
    return PASSWORD_LOCK_SCHEDULE_MS[maxIndex];
  }

  return PASSWORD_LOCK_SCHEDULE_MS[scheduleIndex];
}

/** 密码错误时的提示语（共 20 条，可在模板中自定义） */
export const PASSWORD_QUOTES = [
  { text: '密码不对哦，再试一次吧～', retrySafe: true },
  { text: '唔好急，慢慢输入，键盘不会跑掉的。', retrySafe: true },
  { text: '是不是多按了一个键？再仔细瞧瞧。', retrySafe: true },
  { text: '草稿箱有门禁，密钥得配对才行。', retrySafe: true },
  { text: '密码不对，但不影响你继续思考人生。', retrySafe: true },
  { text: '再试一次，这次说不定就对了。', retrySafe: true },
  { text: '深呼吸，想想那个小写密码？', retrySafe: true },
  { text: '门还没开，但你的毅力值得点赞。', retrySafe: true },
  { text: '密钥好像不太对，换种思路试试？', retrySafe: true },
  { text: '归档和草稿都需要钥匙，你离成功只差一位。', retrySafe: true },
  { text: '提示：默认密码写在 README 里（上线前记得改）。', retrySafe: true },
  { text: '错归错，态度还是可以的分。', retrySafe: true },
  { text: '密钥不对喔，倒计时结束前慢慢想～', retrySafe: false },
  { text: '试错次数有点多了，先歇一歇，等倒计时结束。', retrySafe: false },
  { text: '唔好急，错五次啦。倒计时帮你想办法冷静。', retrySafe: false },
  { text: '密码错第五次咯……倒计时结束再来。', retrySafe: false },
  { text: '正常正常，连我都经常记不清密码。倒计时结束再战！', retrySafe: false },
  { text: '耐心值正在充值中……倒计时归零前请先放空一下。', retrySafe: false },
  { text: '冷却程序已启动，请等倒计时走完再添新密码～', retrySafe: false },
  { text: '安全报告：请等倒计时结束后再试。', retrySafe: false },
] as const;

/** 锁定时随机展示（全部 20 条） */
export const PASSWORD_LOCK_QUOTES = PASSWORD_QUOTES.map((quote) => quote.text);

/** 前 3 次错误随机展示（不含倒计时相关表述） */
export const PASSWORD_RETRY_QUOTES = PASSWORD_QUOTES.filter((quote) => quote.retrySafe).map(
  (quote) => quote.text,
);
