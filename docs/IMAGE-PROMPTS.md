# 記事画像のプロンプト（URL ごと・貼るだけ）

2026-10-10 作成、2026-10-11 更新。対象は origin/main に push 済みで公開中の記事のうち、**まだ画像が入っていないもの**（下書きの `/en/column/how-japanese-rice-is-actually-cooked/` は除外）。

**画像を入れてコミットした記事は、このファイルから消す。** 残っている見出しが、そのまま未着手の一覧になる。

## 手順

1. **コードブロックを1つコピーして、ChatGPT にそのまま貼る。** ブラウザで開くとボタンでコピーできる：`node tools/prompts-page.mjs` で `inbox/prompts-view/index.html` を作り、Claude のブラウザで開く（launch 設定 `wayside-prompts`、http://localhost:4325）。 共通スタイル（色・紙・3:2・文字なし）は各ブロックに入っている。1回に1枚。
2. **できた画像を `inbox/images/` に保存する。** 名前はブロックの上の「保存名」どおり（例：`gyoza-hero.png`、`gyoza-body.png`）。拡張子は ChatGPT から保存したままでよい。
3. **Claude に「inbox 入れた」と伝える。** Claude が `node tools/ingest-images.mjs` で画像を記事ごとの置き場へ移し、ヒーローの設定と本文への配置、alt・キャプションを書いてコミットする。
4. 絵に事実とずれるもの（その土地に無い山、違う料理など）があれば、その1枚だけ描き直す。

### 決まりごと

- サイズは **3:2**。ChatGPT の横長（1536×1024）で足りる。根拠は `src/lib/images.ts` の `articleHero`。
- 絵の中に文字を入れない。図解で文字が要るときは、`<Figure transcript>` に同じ文言を持たせる。
- これらは **イラスト**。「Photographed myself」の約束は写真に対するものなので、写真風（photorealistic）には寄せない。
- ヒーローは見出しの下に横いっぱいで出る。本文の絵は、Claude が内容に合う節に置く。

### 共通スタイル（各ブロックに入っているもの・参照用）

```
Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

---

## Eat — Wagashi

### /en/eat/wagashi-yokan/
**ヒーロー** → 保存名 `wagashi-yokan-hero`

```
Create one image. A bar of dark red bean yokan sliced on a small plate, a cup of green tea, the wrapped bar beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `wagashi-yokan-body`

```
Create one image. A historical scene of a soldier's ration pack including bars of yokan, drawn next to a modern wrapped bar of yokan; no words. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Wagyu

### /en/eat/wagyu-tajima/
**ヒーロー** → 保存名 `wagyu-tajima-hero`

```
Create one image. A black Tajima cow standing in a mountain pasture in northern Hyogo, terraced hills and a farmhouse behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `wagyu-tajima-body`

```
Create one image. A family tree of cattle drawn as branching lines from one Tajima cow at the root, leading to many calves; no names. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Seafood

## Eat — Meat

## Eat — Chicken

## Eat — Soups and hotpots

## Eat — Rice and what goes with it

## Eat — Sōmen and more noodles

### /en/eat/udon-hoto/
**ヒーロー** → 保存名 `udon-hoto-hero`

```
Create one image. An iron pot of hoto simmering, wide flat noodles with pumpkin, mushrooms and vegetables in miso broth, Mount Fuji visible through the window. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `udon-hoto-body`

```
Create one image. A cook dropping freshly cut flat noodles straight into a pot of simmering miso soup without boiling them first. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Rail

> **メモ**：`setouchi-area-pass` は `basis: visited` の記事。ヒーローは、ご自身が撮った写真のほうが記事の根拠と合う。写真が用意できるまで、下のイラストで仮置きする。

## Soak

> 入浴者は描かない（湯船は無人、人は浴衣・上着姿か足湯の足だけ）。記事に無い名所（特に富士山）は足さない。どちらも各プロンプトに入っている。

