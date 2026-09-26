/**
 * 全体設定の集約先。ページ側に直書きしない。
 *
 * ここのフラグを落としたら、機能だけでなく「それに言及する表示」も消えること。
 * 実態と記述の食い違いを構造で防ぐための仕組みなので、条件分岐を外さないこと。
 */

export const SITE_NAME = 'Wayside Japan';
export const TAGLINE = 'Ride, Eat, Soak.';

/**
 * 実際に配信されているホストを curl で確認してから設定する。
 * pages.dev のサブドメインは全アカウント共通の名前空間で、
 * プロジェクト名が通っても同じホスト名が取れるとは限らない。
 * 独自ドメイン（waysidejapan.com）は取得後に差し替える。
 */
export const SITE_URL = 'https://waysidejapan.pages.dev';

/**
 * false のあいだ：全ページ noindex、サイトマップと RSS を出力しない。
 * public/_headers の X-Robots-Tag と必ずセットで切り替える。
 * apex が 200 を返すことを実測するまで true にしない。
 */
export const IS_PUBLIC = false;

/**
 * デモ内容（モックから流し込んだ仮の料金・時刻・写真）がサイトに載っている状態。
 * true のあいだは全ページ上部に帯が出る。実記事に差し替えたら false にする。
 * 帯を消すだけで中身が残る、という事故を防ぐために設定値と連動させている。
 */
export const IS_DEMO = true;

export const LOCALES = ['en'] as const;
export const DEFAULT_LOCALE = 'en';
export type Locale = (typeof LOCALES)[number];

/** 空なら計測タグもプライバシーポリシーの該当節も出ない */
export const GA4_MEASUREMENT_ID = '';

/** カテゴリ。URL に入るので後から変えられない */
export const CATEGORIES = ['rail', 'eat', 'soak', 'konbini', 'column', 'ride'] as const;
export type Category = (typeof CATEGORIES)[number];

/** 記事が出たカテゴリだけ true にする。false のものはナビにも一覧にも出ない */
export const NAV: { key: Category; enabled: boolean }[] = [
  { key: 'rail', enabled: true },
  { key: 'eat', enabled: true },
  { key: 'soak', enabled: true },
  { key: 'konbini', enabled: false },
  { key: 'column', enabled: false },
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

/** 換算して表示する通貨。多言語化に合わせて増やす */
export const DISPLAY_CURRENCIES = ['USD', 'EUR'] as const;

/** 料金の確認から何か月で検査を落とすか */
export const PRICE_STALE_MONTHS = 6;

export const AUTHOR = {
  name: 'Gal',
  /** バイラインに出す肩書き。実績の主張なので、事実でなくなったら直す */
  credential: 'Living in Japan',
  url: '/en/about/',
} as const;

/** 事業者情報。プライバシーポリシーの法定事項に使う。未記入のあいだは公開しない */
export const OPERATOR = {
  name: '',
  representative: '',
  contactPath: '/en/contact/',
} as const;
