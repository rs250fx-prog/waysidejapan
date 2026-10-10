import { getCollection, type CollectionEntry } from 'astro:content';
import { parseId } from '../content.config.ts';
import { NAV, type Category, type Locale } from '../config.ts';

export type Article = CollectionEntry<'articles'>;

/** ビルド時点の日本の日付（YYYY-MM-DD）。pubDate は UTC 0時で入るので日付文字列で比べる */
const todayJst = () => new Date(Date.now() + 9 * 3600 * 1000).toISOString().slice(0, 10);

/**
 * 公開してよい記事か。draft でなく、pubDate が日本の今日以前であること。
 * pubDate が未来の記事は、その日のビルドまで出ない（予約公開。毎日0時JSTにビルドする）
 */
export const isPublished = (a: Article) => !a.data.draft && a.data.pubDate.toISOString().slice(0, 10) <= todayJst();

const isBuildVisible = isPublished;

/** 一覧・サイトマップに出すもの。unlisted は URL では見られるが一覧には出さない */
export async function listArticles(locale: Locale, category?: Category): Promise<Article[]> {
  const all = await getCollection('articles', isBuildVisible);
  return all
    .filter((a) => {
      const p = parseId(a.id);
      if (p.locale !== locale) return false;
      if (a.data.unlisted) return false;
      if (category && a.data.category !== category) return false;
      return true;
    })
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** URL で見られるもの（unlisted を含む）。ルート生成に使う */
export async function allRoutable(): Promise<Article[]> {
  return (await getCollection('articles', isBuildVisible)).filter((a) => parseId(a.id).locale !== null);
}

export async function byArea(locale: Locale, area: string): Promise<Article[]> {
  return (await listArticles(locale)).filter((a) => a.data.areas.includes(area));
}

/** 他言語版の実在するものだけ返す。hreflang はこれを使う */
export async function translationsOf(entry: Article): Promise<Article[]> {
  const all = await getCollection('articles', isBuildVisible);
  return all.filter((a) => a.data.translationKey === entry.data.translationKey && a.id !== entry.id);
}

export function hrefOf(entry: Article): string {
  const { locale, category, slug } = parseId(entry.id);
  return `/${locale}/${category}/${slug}/`;
}

/**
 * 記事末尾の関連記事。近い順に詰めて limit 本まで。
 *   1. 同じ品目の記事（系譜ページなら品目ハブと兄弟の系譜、ハブならその系譜）
 *   2. 同じ地域を扱う記事
 *   3. 同じカテゴリの新しい記事
 * 一覧に出ない記事（unlisted・下書き・予約中）は listArticles の時点で落ちる
 */
export async function relatedOf(entry: Article, limit = 3): Promise<Article[]> {
  const locale = parseId(entry.id).locale as Locale;
  const all = (await listArticles(locale)).filter((a) => a.id !== entry.id);
  const d = entry.data;
  const picked: Article[] = [];
  const add = (list: Article[]) => {
    for (const a of list) {
      if (picked.length >= limit) return;
      if (!picked.includes(a)) picked.push(a);
    }
  };
  if (d.dish) {
    const sameDish = all.filter((a) => a.data.dish === d.dish);
    // 系譜ページからはまずハブへ戻す
    add(sameDish.filter((a) => a.data.kind === 'dish'));
    add(sameDish);
  }
  add(all.filter((a) => a.data.category === d.category && a.data.areas.some((x) => d.areas.includes(x))));
  add(all.filter((a) => a.data.category === d.category));
  return picked;
}

/** 記事が出たカテゴリだけ。config の enabled と連動させる */
export function enabledCategories(): Category[] {
  return NAV.filter((n) => n.enabled).map((n) => n.key);
}

/** machine 翻訳・unlisted・非公開は noindex */
export function shouldNoindex(entry: Article, isPublic: boolean): boolean {
  return !isPublic || entry.data.unlisted || entry.data.translationStatus === 'machine';
}

export function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[\/\\\s]+/g, '-')
    .replace(/[?#%&]/g, '');
}
