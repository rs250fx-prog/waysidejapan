/**
 * 多言語の共通ヘルパー（docs/SPEC.md 第6節「固定ページ・部品・データの文言」）。
 *
 * 固定ページ・部品・レイアウトの文言は src/i18n/pages/<name>.ts、
 * データ（areas・genres・guides・soak・food-prices・lineages）の表示文言の上書きは src/i18n/data/<name>.ts に置く。
 * どちらも `table = { en: {...}, ko: {...}, ... }` の形で、ページ側は pickLocale(table, locale) で取る。
 */
import { DEFAULT_LOCALE, LOCALES, hreflangOf } from '../config.ts';

/** 言語ごとの表から、その言語の表を返す。無ければ英語（公開言語の表の揃いは tools/check-i18n.mjs が見る） */
export function pickLocale<T>(table: { en: T } & Record<string, T | undefined>, locale: string): T {
  return table[locale] ?? table.en;
}

/** 内部リンクを言語つきにする。localePath('ko', '/eat/ramen/') → '/ko/eat/ramen/' */
export function localePath(locale: string, path: string = '/'): string {
  return `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
}

/** 文中の {{name}} を値で置き換える（リンクの href など、言語で変わる部分に使う）。HTML の断片には使わず、値はそのまま入る */
export function fill(text: string, vars: Record<string, string | number>): string {
  return text.replace(/\{\{(\w+)\}\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}

/** HTML の属性・本文に値を入れるときのエスケープ（fill で URL を入れる前に使う） */
export function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/**
 * 固定ページ（トップ・カテゴリ一覧・About・プライバシー・食の物価）の hreflang。
 * これらは公開言語（LOCALES）のすべてに同じページがあるので、自分自身を含めて全言語を返す。
 * 公開言語が1つのあいだは相互参照が成り立たないので空（hreflang を出さない）。
 * path は言語を除いたパス（'/' '/about/' '/eat/' など）。
 */
export function fixedAlternates(path: string = '/'): { locale: string; path: string }[] {
  if (LOCALES.length < 2) return [];
  return LOCALES.map((l) => ({ locale: l, path: localePath(l, path) }));
}

/** Astro のページ・部品の中で現在の言語を得る（Astro.currentLocale が無ければ既定言語） */
export function currentLocaleOf(astro: { currentLocale?: string }): string {
  return astro.currentLocale ?? DEFAULT_LOCALE;
}

/** 日付の書式（Intl）に渡す言語タグ。英語は en-GB（"Sep 2026"）、他は hreflang と同じ（zh-tw → zh-TW） */
export function dateTagOf(locale: string): string {
  return locale === DEFAULT_LOCALE ? 'en-GB' : hreflangOf(locale);
}

/** 英語の名前から、データの上書き表のキーを作る（"Tokai, Chubu and Hokuriku" → "tokai-chubu-and-hokuriku"）。id を持たないデータ用 */
export function idOf(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

/** 上書き表から、その言語・その id の項目を引く。無ければ undefined（呼び出し側が原本の英語に落とす） */
export function overrideOf<T>(table: Record<string, Record<string, T> | undefined>, locale: string, id: string): T | undefined {
  return table[locale]?.[id];
}
