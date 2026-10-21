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

## Soak — Kinki

### /en/soak/ogoto/ 本文は「How the city supplies it」の節（市の番号つきの井戸から旅館の内風呂へ配湯）に置く
**ヒーロー** → 保存名 `ogoto-hero`

```
Create one image. A calm large lake at sunrise with the low sun just above the water, a small harbour with a few moored boats, a handful of inns along the western shore each with an empty open-air bath terrace facing the lake and thin steam rising, and a broad forested mountain ridge rising behind the town. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `ogoto-body`

```
Create one image. A cutaway view of a lakeside town: three small well houses beside a road with slender pipes dropping deep into the ground, underground pipes running from them beneath the street to a row of inns, and inside each inn an empty in-house bath receiving the water, with a little steam rising from the baths and the lake beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/shirahama/ 本文は「Saki no Yu」の節（海に面した岩の露天風呂、無人）に置く
**ヒーロー** → 保存名 `shirahama-hero`

```
Create one image. A wide crescent of pale quartz-white sand beach beside a calm bay on the Pacific coast, a small rocky island offshore with a natural sea-cave tunnel through its middle, a line of resort hotels behind the beach with thin steam rising from a few rooftops, and a rocky headland at one end of the bay. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `shirahama-body`

```
Create one image. An open-air rock-pool hot spring on a shoreline facing the open ocean: a few empty pools edged with natural stones and filled with steaming water, waves breaking against the rocks just beyond the lowest pool and throwing spray, a low plain fence along the back, and a small channel where the overflow runs straight into the sea. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/totsukawa/ 本文は「The 2004 free-flowing pledge」の節（かけ流しの仕組み）に置く
**ヒーロー** → 保存名 `totsukawa-hero`

```
Create one image. A remote mountain valley covered almost entirely in forest, with layered green ridges, a deep river gorge and a long dam lake, a few inns clustered beside the lake with soft steam, one lone inn on the river bank further up, and a single route bus on a winding road along the valley. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `totsukawa-body`

```
Create one image. The side of a simple riverside bathhouse with its wall open to the valley: a wooden spout pours fresh hot water straight into a stone tub, the tub is empty of people and brimming, the water spills over the far rim into a channel that runs out to the river, with no pumps, filters, boilers or tanks anywhere in sight, steam rising, and forested mountains beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Chugoku

### /en/soak/kaike/ 本文は「1900, told three ways」の節（浅瀬で泡立つ湯の発見）に置く
**ヒーロー** → 保存名 `kaike-hero`

```
Create one image. A gently curving sandy beach on a calm bay, with low breakwaters standing offshore and sand built up behind them, a row of tall inns and hotels behind the beach with thin steam rising from their roofs, a small seaside park with a few trees, and a broad mountain rising in the distance inland. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kaike-body`

```
Create one image. About the year 1900, a fisherman in old-style work clothes, seen from behind, stands knee-deep in the shallows near the shore looking at a patch of bubbles and faint steam rising from the sea surface a few steps away, with wooden fishing boats pulled up on the sand and a few thatched huts behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/misasa/ 本文は「The white wolf」の節（白い狼の伝説）に置く
**ヒーロー** → 保存名 `misasa-hero`

```
Create one image. A small hot spring town on a clear mountain river, with a road bridge crossing the water and, on the gravel bank below it, a large open-air pool built of big stones, empty and steaming, beside a simple changing screen, with old inns climbing the bank and wooded hills behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `misasa-body`

```
Create one image. A legend from long ago: a warrior in plain old court dress lowers his bow before a gentle old white wolf sitting at the foot of a huge old camphor tree, while warm water steams up from the ground among the roots and runs in a thin stream towards a river, with soft mist among the trees. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/nagato-yumoto/ 本文は「A bath over its source」の節（源泉の真上に建つ共同浴場）に置く
**ヒーロー** → 保存名 `nagato-yumoto-hero`

```
Create one image. A small hot spring town along a shallow river, with a stone-paved path beside the water, stepping stones across the stream, four wooden terraces built out over the river with benches and soft lamps, old inns and small shops along the banks, and soft steam rising from the roofs. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `nagato-yumoto-body`

```
Create one image. A cutaway of a public bathhouse built directly over its spring: an empty deep stone-lined tub, hot water welling up through cracks in the bedrock at the bottom and bubbling gently to the surface, a thin sheet of water overflowing the rim, the wooden walls cut away to show the rock below, and steam rising. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/tamatsukuri/ 本文は「The fudoki」の節（733年の風土記の記述）に置く
**ヒーロー** → 保存名 `tamatsukuri-hero`

```
Create one image. A small spa town on both banks of a narrow clear river, with inns lined along the banks, small footbridges, a roofed free footbath beside the river with two pairs of feet in it, a small comma-shaped island in the river holding a rough blue stone, soft steam rising from a few roofs, and low hills behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `tamatsukuri-body`

```
Create one image. Long ago, villagers in plain old-style clothes, men and women, young and old, all fully clothed, crowd along a river bank where warm water wells up in a cloud of steam, kneeling to touch the water with their hands, while an official in old court dress sits on a mat to one side writing on a scroll of blank bamboo slips. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yubara/ 本文は「The dam and the salamander」の節（オオサンショウウオ）に置く
**ヒーロー** → 保存名 `yubara-hero`

```
Create one image. A wide river running out from below a concrete dam wall, with three large natural open-air pools of different tones side by side on the gravel bank beneath the dam, all empty and steaming, a simple wooden changing screen beside them, and a forested valley with a few inn roofs on the bank above. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yubara-body`

```
Create one image. A giant salamander with a broad flat head and mottled brown skin rests on the stony bed of a clear shallow river, seen from above, with a small stone shrine and a plain gate on the bank beside it and the dam wall far away in the background. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Shikoku

### /en/soak/onsen-shikoku/ 本文は「The towns」の節（香川の冷たい鉱泉。25℃未満でも温泉）に置く
**ヒーロー** → 保存名 `onsen-shikoku-hero`

```
Create one image. A hot spring town built around a large old wooden bathhouse of several storeys with a tiled roof and steam rising from it, a small old tram running past on a street beside a covered shopping arcade, a white heron standing on a stone near the bathhouse, and gentle rounded forested mountains behind with no volcano among them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `onsen-shikoku-body`

```
Create one image. Two stone basins side by side in a quiet wooded hollow, the left one holding clear hot water and giving off steam, the right one filled with clear cold spring water pouring from a bamboo spout with no steam at all, the same mossy stone rim on both, and a wooden ladle resting on each. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Kyushu and Okinawa

### /en/soak/aso-uchinomaki/ 本文は「An irrigation well, 1897」の節（灌漑用の井戸を掘って湯が出た）に置く
**ヒーロー** → 保存名 `aso-uchinomaki-hero`

```
Create one image. A broad caldera floor of green grassland and rice fields, with a few red-brown cattle grazing, a small spa town of low inn roofs and thin steam along a gentle river with a riverside path, the gently steaming cone of a volcano rising calmly in the middle distance, and the long straight rim of the caldera wall on the horizon under a wide sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `aso-uchinomaki-body`

```
Create one image. A few farmers in plain Meiji-era work clothes, seen from behind, stand around a freshly dug irrigation well in a rice field where hot water has suddenly welled up, steam billowing from the hole and spilling into the field channel, with digging tools lying on the ground and the caldera wall rising behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/hinagu/ 本文は「Banpeiyu baths in winter」の節（大きな柑橘を浮かべた冬の風呂）に置く
**ヒーロー** → 保存名 `hinagu-hero`

```
Create one image. A seaside hot spring town with a main street of old wooden shops and small workshops, bamboo baskets and bamboo crafts hanging in the shop fronts, one shop front grilling rows of chikuwa, tubes of fish paste on skewers, over charcoal with a plume of smoke, plain blank curtains over the doors, steam rising from a bathhouse roof, and the calm sea of a gulf at the end of the street with low hills beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `hinagu-body`

```
Create one image. A wooden bathing tub, empty of people and brimming with steaming water, on whose surface several very large pale-yellow citrus fruits, each as big as a small melon, float together, with a stone washing area beside it and a window onto a winter garden with bare branches. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/ibusuki/ 本文は「The sand bath」の「How it works」の節（砂浜に湯が上がる仕組み）に置く
**ヒーロー** → 保存名 `ibusuki-hero`

```
Create one image. A volcanic shore at low tide with a wide sandy beach where rows of shallow rectangular hollows have been dug in the sand, all empty, thin steam rising from the sand, long-handled shovels stuck upright beside them, folded cotton robes stacked on a low bench, a calm sea, and the neat conical shape of a volcano rising across the bay in the distance. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `ibusuki-body`

```
Create one image. A cutaway of a beach: below the surface, hot water rises from deep underground as thin wavy lines, meets the heavier cold seawater at the water's edge, floats over it and seeps upward through the sand, where thin steam rises from the surface, with small waves on the sea side and a long-handled shovel leaning in the sand. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/kirishima/ 本文は「Ryōma’s honeymoon」の節（幕末の新婚旅行の道）に置く
**ヒーロー** → 保存名 `kirishima-hero`

```
Create one image. A cool highland on the south-eastern slopes of a group of volcanoes, with scattered small inns among forest and meadow each giving off a thin plume of steam, a roadside footbath with one pair of feet in it, a round green crater lake in a hollow, and several rounded volcanic peaks with faint steam rising from one summit under a high clear sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kirishima-body`

```
Create one image. A young couple in 1860s travelling clothes and straw hats, seen from behind, walk side by side along a dirt path through highland grass towards a volcano, with plain blank wooden signposts at intervals along the path and a thin plume of steam rising from a roadside hot spring in the distance. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/nagayu/ 本文は「Outside baths and drinking」の節（炭酸の湯を飲む文化と外湯）に置く
**ヒーロー** → 保存名 `nagayu-hero`

```
Create one image. A small hot spring town in a green valley among rounded hills, with public bathhouses and old inns along a narrow street, a stone drinking fountain at a street corner with two cups hung beside it and one person in a cotton robe, seen from behind, sipping from a cup, and a line of high flat-topped volcanic mountains on the horizon. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `nagayu-body`

```
Create one image. A small outdoor stone pool, empty of people, filled with pale water covered in fine bubbles that cling to the stone rim and rise in tiny beads, with almost no steam above it because the water is cool, a drinking spout with a wooden ladle nearby, and through a wooden doorway a hotter indoor bath giving off thick steam. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/onsen-okinawa/ 本文は「Why here」の節（1,000m以上掘り下げた井戸と、地層に閉じ込められた古い海水）に置く
**ヒーロー** → 保存名 `onsen-okinawa-hero`

```
Create one image. A low resort hotel on a coast of calm shallow turquoise sea, with an empty open-air bath terrace at the edge of the water giving off thin steam, a small green island on the horizon, and a few low clouds in a wide sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `onsen-okinawa-body`

```
Create one image. A cutaway of the ground: a small pump house on the surface with a very long, thin borehole dropping straight down through many bands of rock in different tones to a deep layer holding pockets of ancient seawater, and a pipe running from the pump house to a hotel bath at the surface, with the length of the borehole making the depth clear. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/takeo/ 本文は「Details of the gate」の節（楼門の天井四隅の干支の彫刻）に置く
**ヒーロー** → 保存名 `takeo-hero`

```
Create one image. A two-storey vermilion wooden gate in the style of a dragon-palace gate, with a tiled hip-and-gable roof and upswept eaves, standing at the front of an old bathhouse hall with a tiled roof and thin steam rising behind it, a stone-paved forecourt, and low wooded hills beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `takeo-body`

```
Create one image. Looking up at the underside of the upper eaves of a vermilion wooden gate, with exposed beams and brackets, the four corners of the ceiling each carved with a different zodiac animal: a rat, a rabbit, a horse and a rooster, and a patch of sky at the edge of the frame. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/tsuetate/ 本文は「Steam rooms」の節（蒸し湯の入口、無人）に置く
**ヒーロー** → 保存名 `tsuetate-hero`

```
Create one image. A narrow gorge town on both banks of a small river, with old multi-storey wooden inns stacked up the slopes, a small bridge across the river, many carp streamers strung on ropes high across the river, small steaming boxes along the edge of a lane, and thin steam rising from many rooftops. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `tsuetate-body`

```
Create one image. The entrance of a traditional steam room in an old inn: a small low wooden door ajar in a stone wall, steam pouring out of the dark cave-like room beyond, a bamboo bench, a wooden bucket and ladle, a few folded cotton towels, and a glass of water on a small stool beside the door, with no one present. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/unzen/ 本文は「A summer resort for foreigners」の節（明治の避暑地）に置く
**ヒーロー** → 保存名 `unzen-hero`

```
Create one image. A steaming volcanic hot spring area known as the hells, with bare white ground of altered clay, many small vents sending up plumes of white steam, a long wooden walkway crossing the white ground with a few visitors seen from behind, and a forested volcanic mountain with a rounded lava dome rising calmly behind under a clear sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `unzen-body`

```
Create one image. On the veranda of a Meiji-era wooden highland inn, two Western traders in light summer suits and straw hats, seen from behind, sit in cane chairs looking out over a cool mountain plateau where steam rises from a distant white valley, with a tray of tea on a small table between them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/ureshino/ 本文は「Hot-spring tofu」の節（温泉で煮る湯豆腐）に置く
**ヒーロー** → 保存名 `ureshino-hero`

```
Create one image. A small hot spring town in a river valley, surrounded by rolling hills covered in neat rounded rows of green tea bushes, a small early-twentieth-century bathhouse with pointed gables and tall arched windows beside the river with steam rising from its roof, and a free roofed footbath with two pairs of feet in it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `ureshino-body`

```
Create one image. A shallow earthenware pot on a small tabletop burner, soft white cubes of tofu simmering and melting in cloudy hot-spring broth with steam rising, a small dish of condiments, a cup of green tea and wooden chopsticks on the table, and a window looking out over rows of tea bushes. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

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

