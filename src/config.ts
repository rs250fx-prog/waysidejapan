/**
 * 全体設定の集約先。ページ側に直書きしない。
 *
 * ここのフラグを落としたら、機能だけでなく「それに言及する表示」も消えること。
 * 実態と記述の食い違いを構造で防ぐための仕組みなので、条件分岐を外さないこと。
 */

export const SITE_NAME = 'Wayside Japan';
/** 2026-10-09 に Ride を外した。主軸は食、温泉は食と組む地方旅（docs/CONTENT-PLAN-EAT.md） */
export const TAGLINE = 'Eat, Soak.';

/**
 * 実際に配信されているホストを curl で確認してから設定する。
 * pages.dev のサブドメインは全アカウント共通の名前空間で、
 * プロジェクト名が通っても同じホスト名が取れるとは限らない。
 * 2026-10-21 に独自ドメインへ切り替えた（apex が正。www は Cloudflare のルールで apex へ 301）。
 */
export const SITE_URL = 'https://waysidejapan.com';

/**
 * false のあいだ：全ページ noindex、サイトマップと RSS を出力しない。
 * public/_headers の X-Robots-Tag と必ずセットで切り替える。
 * 2026-10-21 に true にした（apex が 200 を返すことは実測済み）。
 */
export const IS_PUBLIC = true;

/**
 * デモ内容（モックから流し込んだ仮の料金・時刻・写真）がサイトに載っている状態。
 * true のあいだは全ページ上部に帯が出る。実記事に差し替えたら false にする。
 * 帯を消すだけで中身が残る、という事故を防ぐために設定値と連動させている。
 */
export const IS_DEMO = false;

/**
 * 言語の定義（2026-11-08 決定：英語・韓国語・繁体字中国語（台湾のみ）・フランス語・スペイン語）。
 * 中国本土向けの簡体字（zh-CN）は作らない。繁体字は台湾向けと明示する（hreflang は zh-TW）。
 *
 * キーは URL に入るパス（小文字）。hreflang・html lang・og:locale・表示通貨は、パスと形が違う言語があるので
 * ここで対応づける。ページ側で言語コードを組み立てない。
 */
export const LOCALE_META = {
  en: { hreflang: 'en', og: 'en_US', label: 'English', currencies: ['EUR', 'USD'] },
  ko: { hreflang: 'ko', og: 'ko_KR', label: '한국어', currencies: ['KRW', 'USD'] },
  'zh-tw': { hreflang: 'zh-TW', og: 'zh_TW', label: '繁體中文（台灣）', currencies: ['TWD', 'USD'] },
  fr: { hreflang: 'fr', og: 'fr_FR', label: 'Français', currencies: ['EUR', 'USD'] },
  es: { hreflang: 'es', og: 'es_ES', label: 'Español', currencies: ['EUR', 'USD'] },
} as const;

export type Locale = keyof typeof LOCALE_META;
/** 計画している言語（表示順）。ここに載せただけでは公開されない */
export const PLANNED_LOCALES = Object.keys(LOCALE_META) as Locale[];

/**
 * 実際に URL を持つ言語（ルーティング・サイトマップ・hreflang の対象）。
 * 翻訳が「確認済み（reviewed）」でそろった言語から足す。足す前に必ず次を済ませること：
 *   1. トップ・カテゴリ一覧・About・プライバシーなどの固定ページを、その言語で用意する
 *      （英語の文章のまま /<lang>/ ページを作らない。重複ページになる）
 *   2. UI 辞書（src/i18n/ui.ts）の該当言語を人が確認する
 * 翻訳記事のファイルが src/content/<lang>/ にあっても、ここに無い言語は公開されない（parseId が弾く）。
 */
export const LOCALES: readonly Locale[] = ['en', 'ko', 'fr', 'es'];
export const DEFAULT_LOCALE: Locale = 'en';

export const hreflangOf = (locale: string): string => LOCALE_META[locale as Locale]?.hreflang ?? locale;
export const ogLocaleOf = (locale: string): string => LOCALE_META[locale as Locale]?.og ?? locale;
export const currenciesOf = (locale: string): readonly string[] =>
  LOCALE_META[locale as Locale]?.currencies ?? LOCALE_META[DEFAULT_LOCALE].currencies;

/**
 * 空なら計測タグも同意バナーもプライバシーポリシーの該当節も出ない。
 * GA4 は同意（Consent Mode v2）が出るまで保存も送信もしない。
 */
export const GA4_MEASUREMENT_ID = 'G-1QCYBRDSCE';

/** プライバシーポリシーの最終改定日。内容を変えたら必ず更新する */
export const PRIVACY_UPDATED = '29 October 2026';

/** カテゴリ。URL に入るので後から変えられない */
export const CATEGORIES = ['rail', 'eat', 'soak', 'konbini', 'column', 'ride'] as const;
export type Category = (typeof CATEGORIES)[number];

/** 記事が出たカテゴリだけ true にする。false のものはナビにも一覧にも出ない */
export const NAV: { key: Category; enabled: boolean }[] = [
  // 並び順がナビの順。食が主軸、鉄道は「食べに行くための移動」
  { key: 'eat', enabled: true },
  { key: 'soak', enabled: true },
  // 2026-10-21 初回公開では Rail を出さない（記事ごと非表示）。記事を出す段で true に戻す
  { key: 'rail', enabled: false },
  { key: 'konbini', enabled: false },
  { key: 'column', enabled: true },
  { key: 'ride', enabled: false },
];

/**
 * 提携が通ったプログラムだけ true。
 * false のあいだは CTA 部品も、開示ページのその行も出ない。
 * 全て false でも記事は書ける（CTA が何も出さないだけ）。
 */
export const AFFILIATE = {
  tours: { getyourguide: false, viator: false },
  esim: { airalo: false },
  hotels: { agoda: false },
} as const;

export const hasAnyAffiliate = Object.values(AFFILIATE).some((group) =>
  Object.values(group).some(Boolean),
);

/**
 * 換算して表示する通貨の既定（英語版）。**並び順が表示順**。
 * 欧州圏を主要層に置くのでユーロを先に出す（2026-09-26 の決定）。
 * 言語ごとの通貨は LOCALE_META.currencies（2026-11-08：韓国語は KRW、繁体字は TWD を先頭に）。
 */
export const DISPLAY_CURRENCIES = ['EUR', 'USD'] as const;

/** 料金の確認から何か月で検査を落とすか */
export const PRICE_STALE_MONTHS = 6;

/**
 * 実装済みのページ。false のものはフッタで「近日」の非リンク表示になる。
 * 404 へのリンクを構造で防ぐための表なので、ページを作ったらここも true にする。
 */
export const ROUTES = {
  foodPrices: true,
  areaHub: false,
  passes: false,
  itineraries: false,
  about: true,
  privacy: true,
  disclosure: false,
  contact: false,
  search: false,
  newsletter: false,
  budget: false,
} as const;

export const AUTHOR = {
  name: 'Ichiro Murase',
  nameJa: '村瀬 一郎',
  /** バイラインに出す肩書き。実績の主張なので、事実でなくなったら直す */
  credential: 'Living in Japan · 30,000 km a year',
  /** 言語を除いたパス。言語つきの URL は localePath(locale, AUTHOR.path) で作る */
  path: '/about/',
  /** 構造化データの sameAs に入れる外部プロフィール。増えるほど本人性が強まる */
  sameAs: ['https://fam16.com/about/'] as string[],
} as const;

/** 事業者情報。プライバシーポリシーの法定事項に使う。未記入のあいだは公開しない */
export const OPERATOR = {
  name: 'Financial and Marketing M16',
  representative: 'Ichiro Murase',
  postalCode: '107-0062',
  address: 'Aoyama Marutake Building, 3-1-36 Minami-Aoyama, Minato-ku, Tokyo',
  addressJa: '〒107-0062 東京都港区南青山3丁目1-36 青山丸竹ビル',
  /** 問い合わせは既存サイトのフォームに寄せる。専用フォームを作ったら差し替える */
  /** 発行元のサイト。構造化データの Organization に入る */
  url: 'https://fam16.com/',
  contactUrl: 'https://fam16.com/contact/',
} as const;
