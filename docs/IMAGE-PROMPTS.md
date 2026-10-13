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

## Eat — Teishoku

## Eat — Udon

### /en/eat/udon-osaka/
**ヒーロー** → 保存名 `udon-osaka-hero`

```
Create one image. Osaka kitsune udon: a sheet of sweet simmered fried tofu floating on pale kelp broth over soft noodles. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `udon-osaka-body`

```
Create one image. Two bowls compared: a Kansai "tanuki" with fried tofu over soba, and a Kanto "tanuki" with tempura bits over udon; placed side by side. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/udon-sanuki/
**ヒーロー** → 保存名 `udon-sanuki-hero`

```
Create one image. A self-service Sanuki udon shop: a customer dipping noodles in a strainer into hot water, trays and tempura on a counter, rice fields of Kagawa outside. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `udon-sanuki-body`

```
Create one image. A pair of hands kneading udon dough by stepping on it wrapped in cloth, and then rolling and cutting it into thick noodles. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Wagashi

### /en/eat/wagashi-imagawayaki/
**ヒーロー** → 保存名 `wagashi-imagawayaki-hero`

```
Create one image. A street stall griddle with rows of round imagawayaki cakes being filled with sweet red bean paste, a paper bag of finished cakes. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `wagashi-imagawayaki-body`

```
Create one image. A cut imagawayaki showing the red bean filling, with a simple outline map of Japan behind showing different regions in different colors. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

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

### /en/eat/wagyu-matsusaka/
**ヒーロー** → 保存名 `wagyu-matsusaka-hero`

```
Create one image. A pot of Matsusaka beef sukiyaki on a table in a traditional room, thin marbled slices of beef laid in the pot, raw egg in a small bowl. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `wagyu-matsusaka-body`

```
Create one image. Black cattle grazing in a quiet valley surrounded by hills, a farmer brushing one of them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/wagyu-omi/
**ヒーロー** → 保存名 `wagyu-omi-hero`

```
Create one image. Ōmi beef steak on a plate, Lake Biwa and a castle town faintly behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `wagyu-omi-body`

```
Create one image. A historical scene: a lacquer box of preserved beef being presented at the shogun's court as medicine; drawn in a classical style. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/wagyu-shabu/
**ヒーロー** → 保存名 `wagyu-shabu-hero`

```
Create one image. Shabu-shabu: a pair of chopsticks swishing a thin slice of wagyu in a pot of boiling kombu broth, a plate of vegetables and tofu beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `wagyu-shabu-body`

```
Create one image. A shabu-shabu table with two small dipping bowls of sesame sauce and ponzu, plates of thin beef being brought in as refills. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/wagyu-sukiyaki/
**ヒーロー** → 保存名 `wagyu-sukiyaki-hero`

```
Create one image. A cast-iron sukiyaki pan with marbled beef, tofu, leek, mushrooms and shirataki simmering in sweet soy broth, a raw egg for dipping. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `wagyu-sukiyaki-body`

```
Create one image. Two sukiyaki pans side by side: Kanto style with a pre-mixed broth poured in, Kansai style with beef seared first, then sugar and soy added directly. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/wagyu-tajima/
**ヒーロー** → 保存名 `wagyu-tajima-hero`

```
Create one image. A black Tajima cow standing in a mountain pasture in northern Hyogo, terraced hills and a farmhouse behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `wagyu-tajima-body`

```
Create one image. A family tree of cattle drawn as branching lines from one Tajima cow at the root, leading to many calves; no names. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/wagyu-yakiniku/
**ヒーロー** → 保存名 `wagyu-yakiniku-hero`

```
Create one image. A yakiniku table with a smokeless grill in the center, slices of beef cooking, small dishes of sauce, an extraction hood above. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `wagyu-yakiniku-body`

```
Create one image. A grill at a postwar black market stall with offal cooking on it, people standing around; and beside it a modern smokeless table grill; no words. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/wagyu-yonezawa/
**ヒーロー** → 保存名 `wagyu-yonezawa-hero`

```
Create one image. Yonezawa beef steak on a plate, snowy mountains of Yamagata outside a window. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `wagyu-yonezawa-body`

```
Create one image. A Meiji-era scene: an English teacher leading a black cow down a road toward a port, wooden houses around them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Seafood

### /en/eat/seafood/
**ヒーロー** → 保存名 `seafood-hero`

```
Create one image. A Japanese harbor fish market table with salted salmon, a puffer fish, dried horse mackerel on a rack, a bundle of kombu and a tray of fish cakes, fishing boats behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seafood-body`

```
Create one image. A row of preserved seafood laid out like a specimen chart: a salted salmon fillet, a split dried fish, a fish-paste log, a sheet of nori and a strip of kombu; no labels. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/seafood-salmon/
**ヒーロー** → 保存名 `seafood-salmon-hero`

```
Create one image. Whole salmon hanging to cure under the eaves of a northern fishing house, snow on the ground, a cold grey sea behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seafood-salmon-body`

```
Create one image. Two small bowls side by side: loose, glistening orange salmon roe on the left, and roe still held together in its membrane on the right; a salmon fillet on the board behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/seafood-fugu/
**ヒーロー** → 保存名 `seafood-fugu-hero`

```
Create one image. A large round platter of fugu sashimi sliced so thin the blue pattern of the plate shows through, arranged like a chrysanthemum, a small dish of ponzu beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seafood-fugu-body`

```
Create one image. A licensed chef in white working carefully at a clean board, separating a puffer fish into parts, a covered container set apart at the side for the parts that must be discarded. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/seafood-anago-hamo/
**ヒーロー** → 保存名 `seafood-anago-hamo-hero`

```
Create one image. A box of grilled conger eel sliced over rice, the island shrine gate of Miyajima standing in the sea behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seafood-anago-hamo-body`

```
Create one image. A Kyoto chef making many fine cuts across a pike conger fillet with a heavy knife, without cutting through the skin; next to it, the cut fish blooming open like a white flower in clear soup. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/seafood-himono/
**ヒーロー** → 保存名 `seafood-himono-hero`

```
Create one image. Split horse mackerel drying on bamboo racks in the sun by the sea, a fishing village roof and nets behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seafood-himono-body`

```
Create one image. Four small scenes in a row showing ways to preserve fish: drying in the sun, salting in a tub, boiling in a large pot, and grilling over charcoal; drawn without words. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Meat

### /en/eat/meat/
**ヒーロー** → 保存名 `meat-hero`

```
Create one image. A table spread with Japanese meats beyond beef: grilled black pork, a domed lamb grill with vegetables, a plate of raw horse sashimi, and a pot of venison stew. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `meat-body`

```
Create one image. A simple outline map of Japan with four small food icons placed far apart: lamb in the north, horse sashimi in the south-west, black pork at the southern tip, a deer in the mountains; no names. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/meat-pork/
**ヒーロー** → 保存名 `meat-pork-hero`

```
Create one image. A black pig grazing in a field of sweet potato plants in southern Kyushu, a volcano gently smoking in the distance. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `meat-pork-body`

```
Create one image. Two dishes side by side: an Obihiro pork bowl with grilled pork slices glazed in sweet sauce over rice, and a square of braised pork belly kakuni in a small bowl. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/meat-jingisukan/
**ヒーロー** → 保存名 `meat-jingisukan-hero`

```
Create one image. A domed iron grill on a table with lamb slices on the crown and bean sprouts and onions around the rim, smoke rising, a Hokkaido field behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `meat-jingisukan-body`

```
Create one image. Cross-section of a domed lamb grill showing the fat and juices running down the ridges from the meat onto the vegetables at the edge. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/meat-basashi/
**ヒーロー** → 保存名 `meat-basashi-hero`

```
Create one image. A plate of horse sashimi with marbled pink slices, grated ginger and garlic, and a small dish of sweet soy sauce, Mount Aso faintly behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `meat-basashi-body`

```
Create one image. Two scenes side by side: on the left a deer and a wild boar in a forest, on the right a pot of deer stew bubbling on a stove with a thermometer standing in it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Chicken

### /en/eat/chicken-karaage/
**ヒーロー** → 保存名 `chicken-karaage-hero`

```
Create one image. A paper boat of freshly fried karaage chicken pieces with a wedge of lemon, steam rising, a small takeaway shop counter in Oita behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `chicken-karaage-body`

```
Create one image. A cook dropping marinated pieces of chicken coated in starch into a deep pot of oil, a tray of finished golden pieces draining beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/chicken-mizutaki/
**ヒーロー** → 保存名 `chicken-mizutaki-hero`

```
Create one image. A clay hotpot of Hakata mizutaki with chicken on the bone in a cloudy white broth, cabbage and leeks around it, a dish of ponzu beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `chicken-mizutaki-body`

```
Create one image. The order of a mizutaki meal in three panels: drinking a cup of the broth first, then eating the chicken, then rice cooked into the leftover broth as porridge. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Soups and hotpots

### /en/eat/nabe-miso/
**ヒーロー** → 保存名 `nabe-miso-hero`

```
Create one image. A row of large cedar barrels of miso in an old brewery, stacked river stones weighing the lids, light through high windows. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `nabe-miso-body`

```
Create one image. Four small dishes of miso in a row showing different colors from very dark red to cream white, with a small heap of soybeans, rice and barley in front of them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/nabe-oden/
**ヒーロー** → 保存名 `nabe-oden-hero`

```
Create one image. A large square oden pot at an old oden shop counter with daikon, eggs, tofu and fish cakes in clear brown broth, a cook ladling a portion. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `nabe-oden-body`

```
Create one image. Three oden plates side by side: blocks of tofu grilled with sweet miso on skewers, Tokyo-style oden in soy broth, and Shizuoka-style oden in a very dark broth topped with fish powder. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Rice and what goes with it

### /en/eat/rice-sides/
**ヒーロー** → 保存名 `rice-sides-hero`

```
Create one image. A bowl of white rice in the center surrounded by small dishes: pickles, natto, a sprinkle of furikake, simmered seaweed and a piece of grilled mochi. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `rice-sides-body`

```
Create one image. A pantry shelf with jars of pickles, a tub of natto, a box of furikake and a pot of tsukudani, arranged neatly with no labels. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/rice-sides-tsukemono/
**ヒーロー** → 保存名 `rice-sides-tsukemono-hero`

```
Create one image. A Kyoto pickle shop with wooden barrels of pickled vegetables at the front, a shopkeeper lifting a large pickled turnip with tongs. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `rice-sides-tsukemono-body`

```
Create one image. Three small dishes in a row: colorful pickles, a dark simmered tsukudani of small fish, and a little pile of furikake over rice. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/rice-sides-mochi/
**ヒーロー** → 保存名 `rice-sides-mochi-hero`

```
Create one image. Two people pounding mochi with a wooden mallet in a stone mortar on New Year's morning, steam rising from the rice. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `rice-sides-mochi-body`

```
Create one image. Two bowls of New Year zōni side by side: square grilled mochi in clear broth on the left, round mochi in white miso soup on the right. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/rice-sides-takikomi/
**ヒーロー** → 保存名 `rice-sides-takikomi-hero`

```
Create one image. A clay rice pot with the lid lifted, rice cooked with a whole sea bream on top, steam rising. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `rice-sides-takikomi-body`

```
Create one image. Three bowls of mixed rice in a row: rice cooked with chestnuts, rice cooked with vegetables and mushrooms, and a small individual kamameshi pot with a wooden lid. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Sōmen and more noodles

### /en/eat/somen/
**ヒーロー** → 保存名 `somen-hero`

```
Create one image. A glass bowl of chilled thin white somen noodles in iced water, a small cup of dipping sauce and grated ginger, a summer porch with a wind chime behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `somen-body`

```
Create one image. Thin noodles hanging in long white curtains from wooden poles to dry in a winter workshop, a worker stretching them by hand. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/somen-miwa/
**ヒーロー** → 保存名 `somen-miwa-hero`

```
Create one image. Long strands of somen drying on wooden racks in front of a mountain shrine gate in Nara, winter light. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `somen-miwa-body`

```
Create one image. Hands kneading dough, rolling it into a rope, twisting and stretching it between two poles, shown as four small steps. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/somen-banshu/
**ヒーロー** → 保存名 `somen-banshu-hero`

```
Create one image. Bundles of somen tied with paper bands stacked in wooden boxes in a warehouse, a quiet country town in Hyogo behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `somen-banshu-body`

```
Create one image. A large pot of boiling water with somen being stirred, then the noodles rinsed in cold water in a strainer. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/udon-kishimen/
**ヒーロー** → 保存名 `udon-kishimen-hero`

```
Create one image. A bowl of kishimen, flat wide udon noodles in dark broth topped with bonito flakes and spinach, at a station noodle counter. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `udon-kishimen-body`

```
Create one image. A plate of cold flat kishimen noodles in summer with a small amount of sauce poured over and grated daikon on top. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/udon-hoto/
**ヒーロー** → 保存名 `udon-hoto-hero`

```
Create one image. An iron pot of hoto simmering, wide flat noodles with pumpkin, mushrooms and vegetables in miso broth, Mount Fuji visible through the window. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `udon-hoto-body`

```
Create one image. A cook dropping freshly cut flat noodles straight into a pot of simmering miso soup without boiling them first. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/udon-dagojiru/
**ヒーロー** → 保存名 `udon-dagojiru-hero`

```
Create one image. A bowl of Kyushu dumpling soup with torn flat flour dumplings, root vegetables and pork in miso broth. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `udon-dagojiru-body`

```
Create one image. Hands tearing pieces of dough into a pot on the left; on the right, hands stretching dough into long thin strips over another pot. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/ramen-hiyashi-chuka/
**ヒーロー** → 保存名 `ramen-hiyashi-chuka-hero`

```
Create one image. A plate of chilled ramen noodles topped with strips of ham, cucumber, egg and tomato arranged in a fan, a summer window behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `ramen-hiyashi-chuka-body`

```
Create one image. Two small restaurant storefronts in the 1930s style side by side, one in a northern city and one in Tokyo, each with a plate of chilled noodles in the window. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/champon/
**ヒーロー** → 保存名 `champon-hero`

```
Create one image. A large bowl of Nagasaki champon with thick noodles, cabbage, seafood and pork in milky white soup, a harbor with ships behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `champon-body`

```
Create one image. A cook stir-frying vegetables and seafood in a wok, then pouring soup and noodles into the same wok to stew them together. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/champon-sara-udon/
**ヒーロー** → 保存名 `champon-sara-udon-hero`

```
Create one image. A plate of crisp thin fried noodles topped with a thick glossy sauce of seafood and vegetables, a bottle of sauce beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `champon-sara-udon-body`

```
Create one image. Two plates side by side: crisp thin fried noodles on the left, soft thick fried noodles on the right, both under the same vegetable sauce. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Local dishes

### /en/eat/kyodo-ryori/
**ヒーロー** → 保存名 `kyodo-ryori-hero`

```
Create one image. A long table set with regional dishes from across Japan in small bowls and plates, rice paddies and mountains seen through a farmhouse window. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-body`

```
Create one image. An outline of Japan with small dish icons scattered over the regions, like pins on a map; no names. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Food shopping

## Eat — Sweets

### /en/eat/sweets-yogashi/
**ヒーロー** → 保存名 `sweets-yogashi-hero`

```
Create one image. A strawberry shortcake slice with whipped cream on a plate in an old-style cake shop window, a pudding à la mode in a glass dish beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `sweets-yogashi-body`

```
Create one image. A fruit parlour counter with perfectly arranged fruit in a glass case and a parfait being served. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Rail

> **メモ**：`setouchi-area-pass` は `basis: visited` の記事。ヒーローは、ご自身が撮った写真のほうが記事の根拠と合う。写真が用意できるまで、下のイラストで仮置きする。

## Soak

> 入浴者は描かない（湯船は無人、人は浴衣・上着姿か足湯の足だけ）。記事に無い名所（特に富士山）は足さない。どちらも各プロンプトに入っている。

