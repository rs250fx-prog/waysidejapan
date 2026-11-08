# 固定ページ・部品・データの多言語化（基盤づくり）— 作業指示書

対象：`D:\OneDrive\01_仕事・事業\M16BIZ\waysidejapan`（Astro 7 / MDX。仕様書 `docs/SPEC.md`、特に第5・6・8節）。
目的：英語の文章がページ・部品・データに直書きされている状態を、**言語ごとの表から取る形**に直す。翻訳（ko・fr・es）は、この作業のあとで別の人が行う。**この作業では、英語の出力を1文字も変えない。**

## 0. 前提（ユーザー承認済み）と禁止事項
- 範囲は「固定ページを全部、各言語で作れる状態にする」（トップ・カテゴリ一覧・About・プライバシー・食の物価、および部品・レイアウト・データ内の文言）。
- **git commit / push / デプロイは一切しない。** `translations-draft/` は触らない。公開言語（`src/config.ts` の `LOCALES`）は `['en']` のまま最終状態にする（試験ビルドのために一時的に変えたら必ず戻す）。
- 作業中、ほかのエージェントは動いていない。ビルド（`npx astro build`。**`npm run build` は使わない**：公開計画ファイルを書き換える）は自由に実行してよい。

## 1. 最初にやること：英語出力の基準を保存する
1. `npx astro build` を実行し、`dist` 配下の **すべての `*.html` と `sitemap*.xml`** を、スクラッチ用フォルダ `C:\Users\galco\AppData\Local\Temp\wsj-baseline\` に（相対パスを保って）コピーする。
2. 作業後、同じ手順でビルドし、基準と**比較**する。差が出てよいのは `data-astro-cid-<hash>` のハッシュ文字列と `_astro/` 配下のハッシュ付きファイル名だけ（比較前に正規化してよい）。**それ以外の差は不具合**として直す。差が避けられないなら、理由を報告する。

## 2. 設計の約束（この通りに作る）
### 2-1. 共通ヘルパー `src/i18n/index.ts`（新規）
```ts
import { DEFAULT_LOCALE } from '../config.ts';
/** 言語ごとの表から、その言語の表を返す。無ければ英語（公開言語の表の揃いは tools/check-i18n.mjs が見る） */
export function pickLocale<T>(table: { en: T } & Record<string, T | undefined>, locale: string): T;
/** 内部リンクを言語つきにする。localePath('ko', '/eat/ramen/') → '/ko/eat/ramen/' */
export function localePath(locale: string, path?: string): string;
/** 文中の {{name}} を値で置き換える（リンクの href など、言語で変わる部分に使う） */
export function fill(text: string, vars: Record<string, string | number>): string;
```
### 2-2. ページ・部品の文言：`src/i18n/pages/<name>.ts`
- 各モジュールは `export const table = { en: {...} } as const-like` を持つ（`ko` `fr` `es` `zh-tw` は後から翻訳者が足す。いまは `en` だけでよい）。型は `en` から導く（`type Strings = typeof table.en`）。他言語は `Strings` を満たすこと。
- モジュール名の目安：`home` `category` `about` `privacy` `food-prices` `not-found` `footer` `consent` `article`（Article レイアウトの固定文言）、部品は文言が少なければ `components.ts` にまとめてよい。
- **数や語順が言語で変わる文は、関数にする**（例：`count: (n: number) => \`${n} guides\``）。
- 文の途中にリンクや強調が入る場合は、**HTML の断片を含む文字列**にし、`set:html` で出す（リポジトリ内の信頼できる文字列のみ）。リンクの href は `{{eat}}` のような置換記号にして `fill()` で言語つきの URL を渡す。使ってよいタグは `a` `strong` `em` `code` `br` のみ。
- 固有名詞・ブランド名・ロゴ・コード・URL・数値・日付は切り出さない（翻訳対象でない）。サイト名 `SITE_NAME`、`AUTHOR`、`OPERATOR` などの設定値は `config.ts` のまま。
### 2-3. データの文言：`src/i18n/data/<name>.ts`（上書き表）
- `src/data/*.ts`（areas・regions・genres・guides・soak・food-prices）と `src/data/lineages/*.json`、`food-prices.*.json` の**英語の表示文言**は、元のファイルを英語の原本として残し、言語ごとの上書きを `src/i18n/data/<name>.ts` に置く形にする。上書きは **id（slug / key）をキーにした表**で、`name` `note` `label` など表示用の文字列だけを持つ。
- 取り出し用の関数（例：`areaName(area, locale)`）を同じモジュールに用意し、ページ・部品はそれを通す。上書きが無い言語・項目は英語に落ちる。
- 英語のデータそのものは、1文字も変えない（slug・key・並び順・数値を含む）。
### 2-4. 内部リンク
- ページ・部品・レイアウト・フッタ・`config.ts` の `AUTHOR.url` などに直書きされた `/en/...` を、**言語を引数に取る**形（`localePath(locale, ...)`）に直す。英語ページの出力は同じになること。
- `Article.astro` など、すでに `locale` を受け取っている所は、それを使う。受け取っていない部品には、`Astro.currentLocale ?? DEFAULT_LOCALE` を使ってよい（`Price.astro` が先例）。
### 2-5. hreflang（固定ページ）
- トップ・カテゴリ一覧・About・プライバシー・食の物価は、**公開言語（`LOCALES`）のすべてに同じページが存在する**ので、各ページに `alternates`（自分自身を含む、`x-default` は `/en/`）を渡す。`LOCALES` が `['en']` のあいだは、いまの出力と同じ（hreflang なし）になること。

## 3. 進め方
1. 対象ファイルを読んで、英語の文言（本文・属性・コード内の文字列・条件分岐の中の文字列・`aria-label`・`title`・`alt`・`placeholder`・`<title>`/description まで）を**漏れなく**洗い出す。
2. 共通ヘルパーと、文言モジュール（`en` のみ）を作る。
3. ページ・部品・レイアウトを、表から取る形に書き換える。**ページ内の条件分岐（`ROUTES` `AFFILIATE` `GA4_MEASUREMENT_ID` など）は、そのまま保つ**（フラグを落としたら、それに言及する文言も消えること）。
4. 英語出力を基準と比較し、差を直す。
5. **試験ビルド**：`src/config.ts` の `LOCALES` を一時的に `['en','ko','fr','es']` にし（`tools/check-i18n.mjs` は通らなくてよい）、ビルドが通ること、`dist/ko/` `dist/fr/` `dist/es/` に固定ページが出ること、その中の内部リンクが `/ko/...` 等になっていること（意図せず `/en/` に向いていないか `grep` で確認）、記事が0本の言語でもページが落ちないこと、を確認する。確認したら **`LOCALES` を `['en']` に戻す**。
6. `tools/check-i18n.mjs` を拡張する：`src/i18n/pages/*.ts` と `src/i18n/data/*.ts` の各 `table` について、`LOCALES` の各言語に表があり、**キーの形が `en` と一致する**（関数のキーを含む）ことを検査する。計画言語（`PLANNED_LOCALES`）で表が無いものは、落とさず一覧で表示する。
7. `docs/SPEC.md` を更新する（第4節の構成、第6節の i18n の運用、更新履歴）。「固定ページの多言語化」の未決事項は解決済みにして、決めた方式を書く。
8. `npm run check:i18n` と、英語の出力の比較が通る状態で終える。

## 4. 報告（最終返答。日本語・簡潔に。コードは貼らない）
1. 作ったファイル・変更したファイルの一覧（役割を1行ずつ）。
2. **翻訳対象の量**：モジュールごとの英語の語数（概算）と合計。翻訳者に渡す単位の提案。
3. 英語出力の比較の結果（差が無かったか。あった場合は何で、どう扱ったか）。
4. 試験ビルドの結果（ko・fr・es で固定ページが出たか、内部リンクの確認結果）。
5. 意図的に切り出さなかった文言とその理由。
6. 動作を変えてしまった点、懸念、判断に迷った点。
7. プライバシーポリシーなど、法的な内容を含むページで、翻訳時に人の確認が必要な箇所の指摘。
