# 記事画像のプロンプト（URL ごと・貼るだけ）

2026-10-10 作成、2026-10-15 更新（作り直し）。対象は src/content/en の公開記事のうち、**ヒーロー（`heroImage`）も本文の画像も未設定のもの 126 本**（eat 50・column 7・soak 69。下書きは除く）。各記事にヒーロー1つ＋本文1つ、計 252 プロンプト。

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

## Eat — Local dishes by region

### /en/eat/kyodo-ryori-kinki/ 本文は「What the seven share」の節（海から遠い都）に置く
**ヒーロー** → 保存名 `kyodo-ryori-kinki-hero`

```
Create one image. A low table in an old townhouse, set with a clay pot of boar hotpot (thin slices of boar meat fanned out like peony petals in miso broth), a small plate of Kyoto pickles (white sliced turnip, purple aubergine and cucumber) and a few mackerel sushi wrapped in persimmon leaves, while through the open sliding door a tiled-roof old town and low hills are seen in soft light. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-kinki-body`

```
Create one image. Porters seen from behind walk in single file along a mountain track through tall cedar forest, each carrying a straw-wrapped bundle of salted mackerel on his back, while far below a basin town of tiled roofs spreads out in the haze. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Shikoku

### /en/soak/onsen-shikoku/ 本文は「The towns」の節（香川の冷たい鉱泉。25℃未満でも温泉）に置く
**本文** → 保存名 `onsen-shikoku-body`

```
Create one image. Two stone basins side by side in a quiet wooded hollow, the left one holding clear hot water and giving off steam, the right one filled with clear cold spring water pouring from a bamboo spout with no steam at all, the same mossy stone rim on both, and a wooden ladle resting on each. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Kyushu and Okinawa

## Soak — Other

### /en/soak/yuda/ 本文は「The white fox」の節（傷ついた白狐が池で足を癒した話）に置く
**ヒーロー** → 保存名 `yuda-hero`

```
Create one image. A small station square in a city spa district with a giant white fox statue on a plinth as tall as a house, beside it a row of free footbaths under a small roof with two pairs of feet in them, a small steam locomotive pulling old carriages along the railway line behind, low business hotels with a plume of steam rising from a spring pumping building, and low hills on the horizon. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yuda-body`

```
Create one image. At night in a temple garden under the moon, a white fox with a limp sits at the edge of a small pond, dipping one front paw in faintly steaming water, while a priest in plain robes watches quietly from the temple veranda and a small golden statue gleams in the water at the bottom of the pond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yudanaka-shibu/ 本文は「The monkey park」の節（雪の谷の露天風呂にいるニホンザル）に置く
**ヒーロー** → 保存名 `yudanaka-shibu-hero`

```
Create one image. A narrow stone-paved lane in an old hot spring town lined with wooden inns of two and three storeys, a small wooden public bathhouse with a closed latticed door and a plain cotton hand towel hanging on a hook by its entrance, hot-water pipes running along the walls with steam rising from them, a couple of guests in cotton robes seen from behind carrying small towels, and wooded mountains behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yudanaka-shibu-body`

```
Create one image. A snowy mountain valley beside a small river, where a stone-edged outdoor pool of steaming water holds a few Japanese macaques with snow on their fur, more monkeys sitting on the snowy rocks around the pool, steaming vents in the snow, and bare winter trees, with no people anywhere. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/zao/ 本文は「Skiing and the snow monsters」の節（樹氷）に置く
**ヒーロー** → 保存名 `zao-hero`

```
Create one image. A mountain hot spring town on a steep street of old wooden inns half buried in snow, steam rising from the street gutters and the rooftops, a ropeway line climbing from the top of the street over the forest towards a ridge, and high on the ridge rows of huge white frozen trees like snow-covered giants under a pale winter sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `zao-body`

```
Create one image. A winter mountain slope covered with fir trees thickly coated in rime ice and snow so that each tree has become a huge rounded white shape, a ropeway gondola with a warmly lit window gliding on its cable among them, and one tiny skier far in the distance on the open snow. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Body image still needed (hero already set)

