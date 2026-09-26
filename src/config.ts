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
 * 換算して表示する通貨。**並び順が表示順**。
 * 欧州圏を主要層に置くのでユーロを先に出す（2026-09-26 の決定）。
 * 中国語圏は扱わないので TWD は持たない。韓国語に着手する段で KRW を足す。
 */
export const DISPLAY_CURRENCIES = ['EUR', 'USD'] as const;

/** 料金の確認から何か月で検査を落とすか */
export const PRICE_STALE_MONTHS = 6;

/**
 * 実装済みのページ。false のものはフッタで「近日」の非リンク表示になる。
 * 404 へのリンクを構造で防ぐための表なので、ページを作ったらここも true にする。
 */
export const ROUTES = {
  areaHub: false,
  passes: false,
  itineraries: false,
  about: true,
  privacy: false,
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
  url: '/en/about/',
  /** 構造化データの sameAs に入れる外部プロフィール。増えるほど本人性が強まる */
  sameAs: [] as string[],
} as const;

/** 事業者情報。プライバシーポリシーの法定事項に使う。未記入のあいだは公開しない */
export const OPERATOR = {
  name: 'Financial and Marketing M16',
  representative: 'Ichiro Murase',
  postalCode: '107-0062',
  address: 'Aoyama Marutake Building, 3-1-36 Minami-Aoyama, Minato-ku, Tokyo',
  addressJa: '〒107-0062 東京都港区南青山3丁目1-36 青山丸竹ビル',
  /** 問い合わせは既存サイトのフォームに寄せる。専用フォームを作ったら差し替える */
  contactUrl: 'https://fam16.com/contact/',
} as const;
