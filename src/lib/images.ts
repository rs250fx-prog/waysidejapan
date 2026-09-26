/**
 * 画像の比率と配信サイズの一元管理。
 *
 * 方針（SP を基準に決めて PC に広げる）
 *
 * 1. **比率は 3:2 を基本にする。** 写真がカメラから 3:2 で出てくるので、
 *    トリミングの判断が要らない。判断が要る運用は量産で必ず崩れる。
 *    一覧の小さいサムネだけ 4:3（同じ面積で被写体が大きく見える）。
 *
 * 2. **高さを px で固定しない。** `aspect-ratio` で持つ。SP で幅いっぱいに
 *    なったとき、固定高さだと被写体が潰れる。
 *
 * 3. **SP の実寸から逆算する。** 幅 390px・DPR 3 なら実質 1170px 必要。
 *    PC のカード（3列・最大 400px 程度）より SP のほうが要求が大きい。
 *    だから「SP > PC」で用意する。
 *
 * 4. CLS を出さないよう width/height を必ず出力し、hero 以外は lazy。
 */

export type ImageKind = 'hero' | 'band' | 'card' | 'thumb' | 'portrait' | 'inline';

export interface ImageSpec {
  /** CSS の aspect-ratio に入れる値 */
  ratio: string;
  /** SP で縦を詰めたいときの比率。指定が無ければ ratio のまま */
  ratioMobile?: string;
  /** 生成する幅の候補（Astro の <Image widths> に渡す） */
  widths: number[];
  /** sizes 属性。ブラウザにどの幅で使うかを教える */
  sizes: string;
  loading: 'eager' | 'lazy';
  note: string;
}

export const IMAGE_SPEC: Record<ImageKind, ImageSpec> = {
  /** 記事・トップの主役写真。PC は横に大きく、SP は全幅 */
  hero: {
    ratio: '3 / 2',
    widths: [640, 960, 1280, 1600],
    sizes: '(max-width: 900px) 100vw, 640px',
    loading: 'eager',
    note: 'ファーストビュー。lazy にしない',
  },

  /** 記事の中ほどに入れる全幅の帯。PC だけ横長に切る */
  band: {
    ratio: '21 / 9',
    ratioMobile: '3 / 2',
    widths: [768, 1280, 1920, 2560],
    sizes: '100vw',
    loading: 'lazy',
    note: 'PC は帯、SP は普通の写真に戻す。同じ比率だと SP で細すぎる',
  },

  /** カテゴリ入口・関連記事などのカード */
  card: {
    ratio: '3 / 2',
    widths: [400, 640, 900, 1200],
    sizes: '(max-width: 560px) calc(100vw - 32px), (max-width: 1000px) 45vw, 400px',
    loading: 'lazy',
    note: 'SP は 1 列で全幅、タブレットで 2 列、PC で 3 列',
  },

  /** 一覧の小さいサムネイル */
  thumb: {
    ratio: '4 / 3',
    widths: [200, 320, 480],
    sizes: '(max-width: 767px) 120px, 200px',
    loading: 'lazy',
    note: '小さいので 4:3。3:2 だと被写体が判別できない',
  },

  /** 著者の顔写真 */
  portrait: {
    ratio: '4 / 5',
    widths: [400, 600, 900],
    sizes: '(max-width: 900px) 100vw, 460px',
    loading: 'lazy',
    note: '人物は縦。正方形だと窮屈に見える',
  },

  /** 本文中に置く写真 */
  inline: {
    ratio: '3 / 2',
    widths: [640, 880, 1280],
    sizes: '(max-width: 900px) calc(100vw - 32px), 880px',
    loading: 'lazy',
    note: '本文幅（880px）に合わせる',
  },
};

/** 撮影・入稿時の目安。これ未満はアップロードしない */
export const MIN_UPLOAD_WIDTH = 2000;
