# 翻訳バッチ共通の指示（翻訳者は、依頼文で言語と記事リストを受け取り、これに従う）

あなたは旅行メディア（waysidejapan.com）の翻訳者。英語の記事を指定された言語に翻訳して、ファイルに書き出す。

## 1. 最初に読むもの（必須）
- 言語ごとのスタイルガイド・用語集（文体・構造の規則・用語集・§6 追加用語・報告の形式。**すべて従う**）
  - ko → `D:\OneDrive\01_仕事・事業\M16BIZ\waysidejapan\docs\TRANSLATION-KO.md`
  - fr → `...\docs\TRANSLATION-FR.md`
  - es → `...\docs\TRANSLATION-ES.md`
- 出来の見本：`D:\OneDrive\01_仕事・事業\M16BIZ\waysidejapan\translations-draft\<lang>\eat\ramen-kurume.mdx`

## 2. 訳す記事
- 依頼文のリスト（`<cat>/<slug>`）。拡張子は .mdx か .md。
- 原文：`D:\OneDrive\01_仕事・事業\M16BIZ\waysidejapan\src\content\en\<cat>\<slug>.(mdx|md)`

## 3. 出力
- `D:\OneDrive\01_仕事・事業\M16BIZ\waysidejapan\translations-draft\<lang>\<cat>\<slug>.<原文と同じ拡張子>`（ディレクトリは自分で作る）
- **ほかのファイルは一切変更しない**（用語集・見本・ほかの人の記事を含む）。git・ビルド・Web検索はしない。

## 4. 自己点検（各ファイル、必ず）
```
node D:\OneDrive\01_仕事・事業\M16BIZ\waysidejapan\tools\check-translation.mjs D:\OneDrive\01_仕事・事業\M16BIZ\waysidejapan\translations-draft\<lang>
```
- 自分の記事の `error` が 0 になるまで直す（他の人の記事のエラー・警告は無視）。warning は内容を見て判断する。
- 英語の訳し残しを目視で確認する（固有名詞・sources の label を除く）。

## 5. 報告（重要：ファイルに書く）
- 言語ごとのガイド第5節の形式（書いたファイルと文字数・語数／新規用語／要確認／原文の問題）で、日本語・簡潔に、依頼文が指定したパスに書く（`translations-draft\<lang>\_reports\waveN-k.md`）。
- **あなたの最終返答は1行だけ**：`完了 N本 / error 0 / 要確認 M件 / 原文の問題 K件`。報告の中身を返答に貼らない。
