/**
 * 公開計画（docs/publish-plan.json）から、記事ごとの公開日を計算する。
 * 純粋な関数だけ。tools/schedule-publish.mjs（Node）、functions/api/publish（Pages Functions）、
 * 公開管理画面（ブラウザ）が同じ計算を使う。Astro や Node の API は import しないこと。
 *
 * 計画の形：
 *   start     初回公開日
 *   perDay    { eat, soak } 毎日の本数
 *   initial   { eat: [slug], soak: [slug], column: 'all' } 初回に出す記事
 *   daily     { eat: [slug], soak: [slug] } 初回の翌日から順に出す記事（並びが公開順）
 *   overrides { slug: 'YYYY-MM-DD' } 手動で決めた公開日（公開管理画面）
 *   held      [slug] 保留。計画に載っていても出さない（公開管理画面）
 *
 * 保留・手動指定の記事も、列の中の枠は動かさない。枠を詰めると、予約済みの記事が
 * 前の日へ繰り上がり、意図せず今日公開されてしまうため。空いた枠は、その日の本数が減るだけ。
 */

const DAY = 86400000;
const ISO = /^\d{4}-\d{2}-\d{2}$/;

export const addDays = (iso, n) => new Date(Date.parse(iso + 'T00:00:00Z') + n * DAY).toISOString().slice(0, 10);

/** 日本の今日（YYYY-MM-DD） */
export const todayJst = (now = Date.now()) => new Date(now + 9 * 3600 * 1000).toISOString().slice(0, 10);

export const isIsoDate = (s) => typeof s === 'string' && ISO.test(s) && !Number.isNaN(Date.parse(s + 'T00:00:00Z'));

export function normalizePlan(plan) {
  return {
    ...plan,
    overrides: plan.overrides ?? {},
    held: plan.held ?? [],
  };
}

/** 計画に載っている Eat / Soak の slug（初回・毎日の列・手動指定） */
export function plannedSlugs(plan) {
  const p = normalizePlan(plan);
  return new Set([
    ...p.initial.eat,
    ...p.initial.soak,
    ...p.daily.eat,
    ...p.daily.soak,
    ...Object.keys(p.overrides),
  ]);
}

/**
 * 公開管理画面の操作を計画に反映する。計画は破壊せず、新しいオブジェクトを返す。
 *   publish   今日公開（日付の手動指定を今日にする。保留は解く）
 *   schedule  date に公開（明日以降）。保留は解く
 *   hold      保留（公開中なら取り下げ）。手動の日付は消す。列の枠はそのまま
 *   release   保留と手動の日付を解き、列に戻す。列に無い記事は毎日の列の末尾へ
 * @returns {{ plan: object, changed: boolean } | { error: string }}
 */
export function applyAction(plan, { slug, cat, action, date }, today) {
  if (!/^[a-z0-9][a-z0-9-]*$/.test(slug ?? '')) return { error: 'bad_slug' };
  const p = structuredClone(normalizePlan(plan));
  const before = JSON.stringify(p);
  const unhold = () => (p.held = p.held.filter((s) => s !== slug));
  const canPlan = cat === 'eat' || cat === 'soak';

  if (action === 'publish' || action === 'schedule') {
    if (!canPlan) return { error: 'column_cannot_schedule' };
    if (action === 'schedule') {
      if (!isIsoDate(date)) return { error: 'bad_date' };
      if (date <= today) return { error: 'date_not_future' };
    }
    p.overrides[slug] = action === 'publish' ? today : date;
    unhold();
  } else if (action === 'hold') {
    if (!p.held.includes(slug)) p.held.push(slug);
    delete p.overrides[slug];
  } else if (action === 'release') {
    unhold();
    delete p.overrides[slug];
    // 手動の日付だけで載っていた記事・計画に無い記事は、毎日の列の末尾へ
    if (canPlan && !plannedSlugs(p).has(slug)) p.daily[cat].push(slug);
  } else {
    return { error: 'bad_action' };
  }
  return { plan: p, changed: JSON.stringify(p) !== before };
}

/**
 * 計画に載っている Eat / Soak 全記事の公開日。
 * @returns {Map<string, { cat: 'eat'|'soak', date: string, source: 'initial'|'queue'|'override', held: boolean }>}
 */
export function buildSchedule(plan) {
  const p = normalizePlan(plan);
  const held = new Set(p.held);
  /** @type {Map<string, any>} */
  const out = new Map();
  const put = (slug, cat, date, source) => {
    const date2 = p.overrides[slug] ?? date;
    out.set(slug, { cat, date: date2, source: p.overrides[slug] ? 'override' : source, held: held.has(slug) });
  };
  for (const cat of ['eat', 'soak']) {
    for (const slug of p.initial[cat]) put(slug, cat, p.start, 'initial');
    p.daily[cat].forEach((slug, i) => put(slug, cat, addDays(p.start, 1 + Math.floor(i / p.perDay[cat])), 'queue'));
  }
  // 列に無く、日付だけ決めた記事（未計画から予約したもの）
  for (const [slug, date] of Object.entries(p.overrides)) {
    if (!out.has(slug)) out.set(slug, { cat: null, date, source: 'override', held: held.has(slug) });
  }
  return out;
}
