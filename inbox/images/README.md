# 記事画像の受け取り口

ChatGPT で作った画像を、ここに保存する。

- 名前は `docs/IMAGE-PROMPTS.md` の「保存名」どおり：`<slug>-hero.png`、`<slug>-body.png`（拡張子は何でもよい）
- 保存したら Claude に「inbox 入れた」と伝える
- `node tools/ingest-images.mjs` が webp に変換して `src/assets/<category>/` へ移し、ここからは消える

画像そのものはリポジトリに入れない（.gitignore 済み）。このファイルだけ残す。
