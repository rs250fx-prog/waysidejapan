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

## Eat — B-grade food

### /en/eat/bkyu/ 本文は「Why it is the way it is: the B-1 Grand Prix」の節に置く
**ヒーロー** → 保存名 `bkyu-hero`

```
Create one image. A daytime town food festival with a long row of small plain-canvas tents, cooks seen from a distance working at griddles and steam rising from paper trays, and a few visitors seen only from behind queuing with wooden chopsticks in hand; plain-coloured bunting hangs overhead and low hills rise beyond the tents. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `bkyu-body`

```
Create one image. A visitor's hand placing a pair of wooden chopsticks into one of three clear collection boxes lined up on a table, each box standing in front of a different paper tray of local food (fried noodles, a bowl of cracker soup, skewered chicken giblets), the boxes already part full of chopsticks. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/bkyu-korokke/ 本文は「What made it cheap」の節に置く
**ヒーロー** → 保存名 `bkyu-korokke-hero`

```
Create one image. A neighbourhood butcher's shop counter with a glass display case, a wooden tray of golden-brown korokke (potato croquettes) on the counter and a hand passing one wrapped in paper across it, an unlabelled bottle of dark sauce beside the tray, and a plain cloth curtain hanging in the shop doorway. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `bkyu-korokke-body`

```
Create one image. A butcher's back-room worktable with a bowl of mashed boiled potato, a small heap of minced meat trimmings and a tray of fine breadcrumbs, while a pair of hands shapes oval korokke patties on a wooden board; a deep iron pan of oil waits at the edge of the table. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Drinks

### /en/eat/drinks/ 本文は「What it is」の節に置く
**ヒーロー** → 保存名 `drinks-hero`

```
Create one image. A low view along a wooden izakaya counter at evening where a beer mug, a tall mug of highball full of ice, a ceramic tokkuri flask of sake with two small cups and a glass of shochu with water stand in a row, small side dishes behind them, plain blank paper lanterns glowing in the background and no people. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `drinks-body`

```
Create one image. Four shallow wooden trays set side by side on a table, each holding one kind of drink as if sorted into groups: a foamy beer glass, a sake flask with a small cup, a shochu bottle with an ice-filled glass, and a bottle of mirin beside a small sweet liqueur bottle, with no labels on any bottle. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/drinks-beer-highball/ 本文は「What makes it beer」の節に置く
**ヒーロー** → 保存名 `drinks-beer-highball-hero`

```
Create one image. A bartender's hands, with no face shown, gently pouring chilled soda from a small bottle down the side of a tall straight-sided mug packed to the brim with ice, while a second mug of beer and an unlabelled whisky bottle wait on the wooden counter behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `drinks-beer-highball-body`

```
Create one image. A convenience-store chilled shelf seen head-on with three tiers of plain unmarked cans, the top tier cream-coloured, the middle tier terracotta and the bottom tier brown, each tier set off by a different coloured shelf strip, with no printing on any can. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/drinks-shochu/ 本文は「What makes it shōchū」の節に置く
**ヒーロー** → 保存名 `drinks-shochu-hero`

```
Create one image. A still life on a plain wooden table beside a paper window: a glass of shochu cut with water and ice, a small clay kettle steaming with hot water, a ceramic jug for mixing, and around them sweet potatoes, ears of barley, a bowl of rice and a bundle of buckwheat. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `drinks-shochu-body`

```
Create one image. A gentle diagram-like drawing of two stills side by side: on the left a squat single pot still with a curved neck and a coiled condenser, on the right a tall slim column still made of stacked sections, thin dotted lines of vapour rising in both and drops of spirit falling into small jars below, with no labels. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Instant noodles

### /en/eat/instant-noodles/ 本文は「After you eat」の節に置く
**ヒーロー** → 保存名 `instant-noodles-hero`

```
Create one image. A convenience-store aisle with a shelf of plain unbranded paper cups and cellophane packets of instant noodles, and at the end of the shelf a metal hot-water dispenser with a single cup waiting under its spout, a narrow window counter with two stools beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `instant-noodles-body`

```
Create one image. A finished cup of instant noodles taken apart on a wooden table: the paper lid, the thin outer film, a small sachet and the empty cup each laid in front of its own plain bin, three bins in cream, terracotta and brown. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/instant-noodles-bag/ 本文は「Where it came from」の節に置く
**ヒーロー** → 保存名 `instant-noodles-bag-hero`

```
Create one image. A small saucepan on a gas ring with a wavy block of instant noodles simmering in water, a plain unmarked cellophane packet and a torn soup sachet lying beside it, a raw egg and chopped spring onion in a small dish, steam rising in a simple home kitchen. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `instant-noodles-bag-body`

```
Create one image. Inside a small wooden backyard workshop lit by a single lamp, a round block of noodles held in a metal frame is lowered by a pair of hands on a long handle into a deep iron pan of hot oil, bubbles rising and steam curling up toward the rafters. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/instant-noodles-cup/ 本文は「What makes it a cup noodle」の節に置く
**ヒーロー** → 保存名 `instant-noodles-cup-hero`

```
Create one image. A wooden table by a window where a steel kettle pours boiling water into a plain white foam cup of instant noodles with its lid peeled back halfway and a small wooden fork resting on the rim, steam rising, with no printing on the cup. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `instant-noodles-cup-body`

```
Create one image. A cutaway side view of a tall plain cup showing the block of noodles wedged halfway up with an empty gap beneath it, hot water poured in to a line near the rim, and thin arrows showing the water flowing around and under the block. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Kaiseki

### /en/eat/kaiseki/ 本文は「Bento, briefly」の節に置く
**ヒーロー** → 保存名 `kaiseki-hero`

```
Create one image. A tatami room in a Kyoto restaurant with a low lacquer table set for a banquet kaiseki meal: a lidded simmering bowl, a cedar hassun tray of small mountain and sea items, a sake kettle and two small cups, with sliding paper doors open to a small moss garden and a stone lantern, and no people. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kaiseki-body`

```
Create one image. An open makunouchi bento box on a wooden board with its lid set beside it, packed with small sesame rice balls, simmered vegetables, grilled tofu, konnyaku, pink-and-white fish-cake slices and rolled omelette, a pair of chopsticks laid alongside. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kaiseki-shojin/ 本文は「Two meals: the monks’ and the guests’」の節に置く
**ヒーロー** → 保存名 `kaiseki-shojin-hero`

```
Create one image. A temple guest hall with a tatami floor where a single low lacquer tray holds small bowls of rice, miso soup, sesame tofu, simmered vegetables, yuba and pickles, with a sliding screen open to a raked gravel garden and a wooden temple hall in soft morning light, and no people. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kaiseki-shojin-body`

```
Create one image. Two lacquer trays side by side on tatami: the left tray austere, with only a bowl of barley rice, one soup bowl and one dish of simmered vegetables, and the right tray fuller, with many small dishes of tofu, yuba, wheat gluten and sesame tofu. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kaiseki-tea/ 本文は「The order, course by course」の節に置く
**ヒーロー** → 保存名 `kaiseki-tea-hero`

```
Create one image. Inside a small rustic tea room, an iron kettle steams over a sunken hearth with a few glowing charcoal pieces, an alcove holds a blank hanging scroll and a single flower in a bamboo vase, and two guests kneel seen from behind, each with a lacquer tray set before them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kaiseki-tea-body`

```
Create one image. An overhead view of a single lacquer tray set for tea kaiseki, a rice bowl on the left, a miso soup bowl on the right and a small dish of sliced fish at the back, with a little sake kettle and two tiny cups on a wooden tray beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Konamono

### /en/eat/konamono-monja/ 本文は「What makes it monjayaki」の節に置く
**ヒーロー** → 保存名 `konamono-monja-hero`

```
Create one image. A table in a small Tsukishima monjayaki shop with a hot iron plate set into it, a ring of chopped cabbage holding runny batter at its centre, two small metal spatulas and bowls of toppings, two pairs of hands pressing bites onto the plate, and an old downtown alley of low shops seen through the window. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `konamono-monja-body`

```
Create one image. An overhead view of the iron plate mid-cooking: coarse-cut cabbage, shredded dried squid, tempura crumbs and tiny pink sakura shrimp pushed into a doughnut-shaped ring with thin batter poured into the middle, green laver scattered on one side and two small spatulas resting on the plate's edge. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Meat

### /en/eat/meat-horumon/ 本文は「What makes it horumon」の節（部位の一覧）に置く
**ヒーロー** → 保存名 `meat-horumon-hero`

```
Create one image. A tabletop with a small charcoal grill where sliced honeycomb tripe, small intestine and tongue sizzle, next to a pot of motsunabe (offal hotpot) simmering with cabbage and garlic chives in soy broth, a dish of dipping sauce and a pair of tongs, and no people. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `meat-horumon-body`

```
Create one image. A wooden board laid out like a gentle catalogue of beef offal, each cut in its own shallow bowl: honeycomb-patterned tripe, a curl of small intestine, folded leaf-like tripe, a heart, a kidney and slices of tongue, with no labels. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Ramen

### /en/eat/ramen-onomichi/ 本文は「What makes it Onomichi ramen」の節に置く
**ヒーロー** → 保存名 `ramen-onomichi-hero`

```
Create one image. A small yatai noodle cart on a quay at dusk in an Inland Sea port, steam rising from its pot and a blank paper lantern glowing, a bowl of dark-soy ramen on its counter, with calm water, fishing boats and the silhouettes of shipyard cranes beyond, and no people. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `ramen-onomichi-body`

```
Create one image. A top-down view of a bowl of Onomichi-style ramen: dark soy broth with tiny pale flecks of pork back-fat floating on it, flat noodles, slices of chashu pork, bamboo shoots and spring onion, with a small dish of dried small sardines (iriko) and a pair of chopsticks beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/ramen-tokushima/ 本文は「What makes it Tokushima ramen」の節に置く
**ヒーロー** → 保存名 `ramen-tokushima-hero`

```
Create one image. A bowl of brown pork-bone ramen on a shop counter, topped with slices of sweet-simmered pork belly, a raw egg yolk, bamboo shoots, bean sprouts and spring onion, with a small bowl of plain white rice and a pair of chopsticks placed beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `ramen-tokushima-body`

```
Create one image. Three bowls of ramen seen from above, side by side, holding soup in three colours - dark brown, pale cloudy white and golden yellow - each with simple toppings, and chopsticks resting across the rims. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Rice

### /en/eat/rice/ 本文は「Why it is the way it is」の節（等級）に置く
**ヒーロー** → 保存名 `rice-hero`

```
Create one image. A wooden table beside an open farmhouse window, a ceramic bowl of steaming white rice and a pair of chopsticks in the foreground, and outside golden rice paddies at harvest with bundles of stalks drying on wooden racks and low hills beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `rice-body`

```
Create one image. A shallow wooden tray of brown rice grains in raking light, a hand with tweezers lifting a few cracked and discoloured grains into a small dish, the plump whole grains left in the tray and a wooden scoop beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/rice-curry/ 本文は「What makes it Japanese curry」の節（ルウ）に置く
**ヒーロー** → 保存名 `rice-curry-hero`

```
Create one image. A table by a window in a harbour-side diner, a plate of Japanese curry rice with chunks of potato and carrot in brown roux, a spoon and a glass of water, and a grey ship at anchor in the harbour outside. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `rice-curry-body`

```
Create one image. A hand breaking a block of curry roux into a large pot of simmering carrot, potato, onion and pieces of meat, steam rising, with a plain unmarked box of roux blocks on the counter beside the stove. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/rice-onigiri/ 本文は「Not all onigiri is this」の節（めはり寿司）に置く
**ヒーロー** → 保存名 `rice-onigiri-hero`

```
Create one image. A pair of hands pressing warm rice into a triangle above a bowl of rice, on a wooden board with strips of nori, a small dish of salt and a pickled plum, and a bamboo tray of finished onigiri rice balls beside them, steam rising. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `rice-onigiri-body`

```
Create one image. A large round mehari-zushi rice ball wrapped in dark green pickled takana mustard leaves, another cut in half to show the rice inside, on a wooden board with a bamboo basket, a forested hillside behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Sake

### /en/eat/sake-akita/ 本文は「The rice」の節に置く
**ヒーロー** → 保存名 `sake-akita-hero`

```
Create one image. A snow-covered rice-country village in northern Japan, a sake brewery with white plastered walls, a tiled roof heavy with snow and a tall chimney standing beside frozen paddies under snow, bare trees and a quiet lane, and no people. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `sake-akita-body`

```
Create one image. Two shallow wooden dishes of rice side by side: on the left small plump table rice, on the right larger sake rice with several grains cut open to show a white starchy core at the centre, a wooden scoop between the dishes. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/sake-hiroshima/ 本文は「Bishu-nabe, the brewers’ hotpot」の節に置く
**ヒーロー** → 保存名 `sake-hiroshima-hero`

```
Create one image. A quiet old sake brewery street in Saijo, red-brick chimneys rising above long brewery buildings with black-and-white lattice-patterned walls, round cedar balls hanging under the eaves, a stone-paved lane, and no people. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `sake-hiroshima-body`

```
Create one image. In a brewery's wooden staff room, an iron pot of bishu-nabe simmers over a charcoal brazier with chicken, gizzard, pork, cabbage and leeks, a bottle of sake and small cups beside it and a wooden brewing vat in the background, with no people. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Seafood

### /en/eat/seafood-oyster-crab/ 本文は「What makes oysters different」の節に置く
**ヒーロー** → 保存名 `seafood-oyster-crab-hero`

```
Create one image. A winter still life on a wooden table: oysters in their shells on a small charcoal grill, a whole boiled red snow crab with long thin legs on a platter, a steaming earthenware pot beside them, and a window showing a calm grey bay. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seafood-oyster-crab-body`

```
Create one image. Oyster rafts in a calm sheltered bay, rows of wooden rafts with long ropes hung with oyster shells reaching down into the water, a small boat with a worker far off hauling a line, forested islands and hills beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/seafood-saba-katsuo-maguro/ 本文は「Bonito」の節（たたき）に置く
**ヒーロー** → 保存名 `seafood-saba-katsuo-maguro-hero`

```
Create one image. A pole-and-line bonito fishing boat at sea, a row of fishermen seen from behind on the stern with bamboo poles bent, silver-blue bonito flying over the rail on their lines, spray and gulls above the waves. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seafood-saba-katsuo-maguro-body`

```
Create one image. A thick block of bonito held on a long skewer over a roaring straw fire with flames licking its surface, beside a wooden board of sliced seared bonito showing a cooked edge and raw red centre, with sliced garlic, ginger and spring onion in a small dish. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Soba and udon

### /en/eat/soba-jindaiji/ 本文は「Where it came from」の節に置く
**ヒーロー** → 保存名 `soba-jindaiji-hero`

```
Create one image. A tree-shaded stone-paved approach to a temple in the Musashino woodland, small wooden soba shops on both sides with plain unmarked cloth curtains, a wooden temple gate at the far end, dappled late-afternoon light, and no people. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `soba-jindaiji-body`

```
Create one image. Two farmers seen from behind carrying cloth sacks of buckwheat flour on their shoulders along a path between dark-soil fields of buckwheat in white bloom, toward a tiled temple roof among distant trees. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/soba-tachigui/ 本文は「What makes it standing soba」の節に置く
**ヒーロー** → 保存名 `soba-tachigui-hero`

```
Create one image. A long narrow wooden standing-soba counter on a station platform, steaming bowls of soba on the counter, a few commuters seen from behind eating on their feet, and a train drawing in beyond the open side of the stall. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `soba-tachigui-body`

```
Create one image. On a narrow counter, a bowl of hot kake soba with spring onion and tempura beside a bamboo tray of cold mori soba with a small dipping cup, chopsticks, and a small plain meal-ticket slip in front. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/udon-goto/ 本文は「What makes it Gotō udon」の節（製法）に置く
**ヒーロー** → 保存名 `udon-goto-hero`

```
Create one image. An iron pot of boiling water on a low table beside a bundle of thin dried round noodles and a scoop stick, a dipping bowl of flying-fish broth with beaten egg and spring onion, and a window onto a calm sea with small green islands. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `udon-goto-body`

```
Create one image. Thin noodles stretched on pairs of bamboo rods hanging on a wooden drying frame outdoors in the sea wind beside a small fishing village, a camellia tree in red bloom in the foreground, with no people. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/udon-inaniwa/ 本文は「What makes it Inaniwa udon」の節（製法）に置く
**ヒーロー** → 保存名 `udon-inaniwa-hero`

```
Create one image. A bamboo seiro tray of thin flat pale udon noodles on a wooden table by a window, with two small dipping cups, one of dark soy broth and one of sesame-miso, and chopsticks, and snow-covered farmhouse roofs and cedar trees outside. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `udon-inaniwa-body`

```
Create one image. A craftsman's hands, with no face shown, pressing a bundle of thin noodle strands flat on a wooden board in a workshop, long strands hanging down from two wooden rods overhead, a light dusting of white starch on the board. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Local dishes by region

### /en/eat/kyodo-ryori-chubu/ 本文は「Not all of Chūbu is this」の節（五平餅の二つの形）に置く
**ヒーロー** → 保存名 `kyodo-ryori-chubu-hero`

```
Create one image. A low wooden table beside a window in a mountain valley, set with an iron pot of hoto (wide flat noodles simmered in miso with plenty of vegetables), a small earthenware pot of miso-nikomi udon, a bamboo tray of oyaki (grilled wheat-dough dumplings wrapped round vegetables) and a magnolia leaf of miso grilling over a tiny charcoal brazier, with terraced fields and steep wooded ridges seen through the window. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-chubu-body`

```
Create one image. On a small charcoal grill on a farmhouse porch, two kinds of gohei-mochi are brushed with dark walnut miso: on the left three round balls of half-pounded rice on each skewer, on the right a flat sandal-shaped patty on a single skewer, with a small dish of the miso and a brush beside the grill. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kyodo-ryori-hokkaido/ 本文は「Where it came from」の節（ルイベ）に置く
**ヒーロー** → 保存名 `kyodo-ryori-hokkaido-hero`

```
Create one image. A wooden table beside a frosted window in a northern fishing town, set with an iron pot of Ishikari-nabe simmering (chunks of salmon, cabbage, daikon and carrot in miso broth), a bowl of rice topped with grilled pork under a sweet soy sauce (butadon) and a plate of thinly sliced frozen salmon (ruibe), while outside snow-covered fields run down to a wide river mouth where a small fishing boat is pulled up on the bank. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-hokkaido-body`

```
Create one image. A whole salmon lies half buried in a snowbank on a river bank with frost on its scales, and beside it on a wooden board a pair of hands, with no face shown, slices a frozen fillet into thin translucent pieces with a long knife, a small dish of soy sauce at the edge of the board. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kyodo-ryori-hokuriku/ 本文は「What the four share」の節（北前船）に置く
**ヒーロー** → 保存名 `kyodo-ryori-hokuriku-hero`

```
Create one image. A wooden table beside a snowy window in a Japan Sea harbour town, set with a round bamboo-leaf-lined box of pink pressed trout sushi cut into wedges, a square split-wood tray of buckwheat noodles in neat bundles (hegi soba) with a small dish of spring onion and mustard, and a bowl of simmered yellowtail with daikon, while snow lies on the tiled roofs and fishing boats rest in the bay beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-hokuriku-body`

```
Create one image. On a worktable beside a harbour window, a hand lays pale white-fish fillets between broad sheets of dark dried kelp in a shallow wooden box, with bundles of kelp stacked nearby, while an old wooden cargo ship with a single square sail rides at anchor in the harbour outside. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kyodo-ryori-kanto/ 本文は「What the seven share」の節（醤油と利根川）に置く
**ヒーロー** → 保存名 `kyodo-ryori-kanto-hero`

```
Create one image. A table in a plain farmhouse room, set with a bowl of Fukagawa-meshi (clams and spring onion in miso poured over rice), a plate of festival futomaki sushi sliced to show a simple flower picture in each cut face, and a steaming bowl of okirikomi (wide flat noodles with vegetables), while through the window a flat plain of wheat fields stretches to a low horizon under a wide sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-kanto-body`

```
Create one image. On the bank of a wide, slow river, wooden barrels of soy sauce are rolled out of a long brewery building with a tall chimney onto a flat-bottomed cargo boat, a boatman seen from behind stands at the stern with a long pole, and a low city skyline lies hazy in the far distance downstream. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kyodo-ryori-kinki/ 本文は「What the seven share」の節（海から遠い都）に置く
**ヒーロー** → 保存名 `kyodo-ryori-kinki-hero`

```
Create one image. A low table in an old townhouse, set with a clay pot of boar hotpot (thin slices of boar meat fanned out like peony petals in miso broth), a small plate of Kyoto pickles (white sliced turnip, purple aubergine and cucumber) and a few mackerel sushi wrapped in persimmon leaves, while through the open sliding door a tiled-roof old town and low hills are seen in soft light. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-kinki-body`

```
Create one image. Porters seen from behind walk in single file along a mountain track through tall cedar forest, each carrying a straw-wrapped bundle of salted mackerel on his back, while far below a basin town of tiled roofs spreads out in the haze. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kyodo-ryori-kyushu/ 本文は「Where it came from」の節（熊本のからし蓮根）に置く
**ヒーロー** → 保存名 `kyodo-ryori-kyushu-hero`

```
Create one image. A table beside a window, set with an earthenware pot of mizutaki (chicken on the bone simmered in a clear broth with cabbage and leeks), a plate of toriten (golden fried chicken pieces) with a dish of mustard and vinegared soy sauce, and a bowl of cold hiyajiru poured over hot barley rice with sliced cucumber, while a smoking volcano rises beyond green plateau fields. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-kyushu-body`

```
Create one image. On a wooden board a cook's hands, with no face shown, press yellow mustard-miso paste into the holes of a peeled lotus root, a bowl of batter and a deep pan of hot oil wait nearby, and one finished fried slice lies cut open to show its round holes filled. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kyodo-ryori-sanin/ 本文は「Where it came from」の節（島根のしじみ汁）に置く
**ヒーロー** → 保存名 `kyodo-ryori-sanin-hero`

```
Create one image. A wooden table beside a window above a calm brackish lake at dusk, set with a bowl of miso soup holding a small red female snow crab with daikon, a bowl of clam miso soup with tiny dark shells, and a plate of tofu chikuwa sliced into rounds to show their hollow centres, while a single small boat floats on the still lake below low hills. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-sanin-body`

```
Create one image. Three stages in a row on a wooden kitchen counter: a shallow basin of small dark clams soaking in lightly salted water under a cloth, a small pot with the clam shells just opening in simmering water, and a finished bowl of miso soup full of open shells with a ladle beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kyodo-ryori-setouchi/ 本文は「Where it came from」の節（広島の牡蠣の土手鍋）に置く
**ヒーロー** → 保存名 `kyodo-ryori-setouchi-hero`

```
Create one image. A wooden table in a seaside room, set with a wide shallow tub of scattered sushi packed with many toppings, an earthenware pot holding a whole sea bream cooked on a bed of rice, and a hot roof tile holding green tea soba, strips of beef and shredded omelette, while the window opens onto the Inland Sea with small green islands, swirling tide lines and fishing boats. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-setouchi-body`

```
Create one image. An overhead view of an iron pot of oyster dote-nabe, with miso spread in a thick ring around the inside rim like a riverbank, plump oysters, tofu, leeks and cabbage simmering in the broth at the centre, and a pair of chopsticks loosening a little miso into the soup. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kyodo-ryori-shikoku/ 本文は「Where it came from」の節（徳島のいやのでこまわし）に置く
**ヒーロー** → 保存名 `kyodo-ryori-shikoku-hero`

```
Create one image. A tatami banquet room with two large round sawachi platters on a long low table, one heaped with seared bonito slices fanned out with sliced garlic and onion, the other with sashimi, sushi and simmered and fried dishes, and no people, while sliding doors stand open to forested mountains with a glimpse of the Pacific beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-shikoku-body`

```
Create one image. Around a sunken hearth in a mountain farmhouse, skewers of potato, buckwheat dumpling, firm tofu and konnyaku stand slanted in the ash, each brushed with miso and turned toward the glowing embers, an iron kettle hangs above, and steep forested mountains show through the open door. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/kyodo-ryori-tohoku/ 本文は「Where it came from」の節（山形の芋煮）に置く
**ヒーロー** → 保存名 `kyodo-ryori-tohoku-hero`

```
Create one image. A wooden table beside a window onto cold highland fields and a river, set with a bowl of clear soup with a round wheat cracker in it (senbei-jiru), a bowl of soup with hand-torn pieces of dough and vegetables (hittsumi), and a bowl of rice topped with grilled salmon and glossy salmon roe (harako-meshi). Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kyodo-ryori-tohoku-body`

```
Create one image. On a gravel riverbank in autumn, two boatmen seen from behind squat around an iron pot of simmering taro stew, a bundle of dried cod and a heap of taro lie on a straw mat beside them, flat-bottomed wooden river boats are moored behind, and hills in autumn colour rise beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Seasonal and festival food

### /en/eat/seasonal/ 本文は「The year, season by season」の節（秋の月見）に置く
**ヒーロー** → 保存名 `seasonal-hero`

```
Create one image. An overhead view of a round wooden table with eight small dishes arranged in a ring like a calendar of the year, each holding one festival food: a lacquer stacked box of osechi, a wooden box of roasted soybeans, three-coloured diamond-shaped mochi, a kashiwa-mochi wrapped in an oak leaf, a glass bowl of somen noodles in ice water, a stand of round moon-viewing dumplings, a bowl of simmered pumpkin with azuki beans, and a bowl of soba noodles. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seasonal-body`

```
Create one image. A wooden veranda at dusk with a tiered stand of round white dumplings, a vase of pampas grass and a cup of tea, and a large full moon rising over harvested rice fields and low hills. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/seasonal-hinamatsuri/ 本文は「Not all of Hinamatsuri is this」の節（ひなあられ）に置く
**ヒーロー** → 保存名 `seasonal-hinamatsuri-hero`

```
Create one image. A tiered red-draped doll stand with a few small dolls drawn as simple figures with blank faces and a vase of peach blossom branches, and in front of it on a low table a lacquer box of scattered sushi with prawns, a lidded bowl of clear clam soup beside an open clam shell, and a small tray of three-coloured diamond-shaped mochi in green, white and pink. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seasonal-hinamatsuri-body`

```
Create one image. Two small ceramic dishes side by side on a wooden tray: the left holds round puffed rice-cake balls in soft cream and pale brown, the right holds tiny rice-grain-shaped sweets in pink, green and white, with a few pieces scattered between the dishes. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/seasonal-new-year/ 本文は「What makes it New Year food」の節（七草粥）に置く
**ヒーロー** → 保存名 `seasonal-new-year-hero`

```
Create one image. A three-tier lacquer stacked box (jubako) opened with its tiers set side by side on a low table, holding black beans, spiral-patterned rolled omelette slices (datemaki), golden chestnut paste, lotus root slices, red prawns and rolled kelp, with a stand of two round rice cakes (kagami-mochi) on a shelf behind it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seasonal-new-year-body`

```
Create one image. On a wooden board a bundle of seven different young spring greens lies with a small white turnip and a daikon radish beside a chopping knife, next to an earthenware pot and a bowl of pale rice porridge flecked with fresh green herbs, steam rising. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/seasonal-setsubun/ 本文は「What makes it Setsubun」の節（恵方巻）に置く
**ヒーロー** → 保存名 `seasonal-setsubun-hero`

```
Create one image. The entrance of a house in the evening with a holly branch bearing a sardine head hung by the door, and on a small table just inside a wooden box of roasted soybeans, a plate of grilled sardines and a whole uncut thick sushi roll on a board. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seasonal-setsubun-body`

```
Create one image. A seated person seen from behind on a tatami floor, facing an open window, holds a whole uncut thick sushi roll in both hands, with a cup of tea and a wooden box of roasted beans on the floor beside them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Seasoning

### /en/eat/seasoning/ 本文は「How soy sauce works」の節に置く
**ヒーロー** → 保存名 `seasoning-hero`

```
Create one image. A wooden kitchen shelf above a stove holding a short row of unlabelled containers: a dark glass bottle of soy sauce, a small crock of miso, a bottle of vinegar, a flask of mirin and small bowls of sugar and coarse salt, with a bundle of spring onion, a knob of ginger and a dish of green wasabi paste on the shelf below. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seasoning-body`

```
Create one image. On a wooden table from left to right: a bowl of steamed soybeans, a bowl of roasted wheat, a small mound of coarse salt, a shallow wooden tray of grain covered in pale green-white koji mould, and a lidded cedar barrel with a little dark mash showing at its open top. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/seasoning-egg/ 本文は「What makes Japanese eggs edible raw」の節に置く
**ヒーロー** → 保存名 `seasoning-egg-hero`

```
Create one image. A wooden table in a bright kitchen with a bowl of steaming white rice holding a whole raw yolk in a small hollow at the centre while a thread of dark soy sauce is poured from a small pitcher, a wire basket of brown and white eggs beside it, chopsticks laid across a rest, and morning light from a window. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seasoning-egg-body`

```
Create one image. A bright, clean egg grading room drawn in side view, with a long conveyor on which brown and white eggs roll in single file past a rotating soft brush under a stream of warm water, then under a row of small lamps, and into plain cardboard trays at the end, with no people in the room. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/seasoning-shoyu/ 本文は「What makes each region’s soy sauce」の節に置く
**ヒーロー** → 保存名 `seasoning-shoyu-hero`

```
Create one image. Inside an old wooden soy sauce brewery, a row of huge cedar barrels bound with bamboo hoops stands in dim light, a wooden ladder leans against one and a long wooden paddle against another, shafts of light fall through high lattice windows, and a few unlabelled glass bottles of dark soy sauce stand on the floor in the foreground, with no people. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `seasoning-shoyu-body`

```
Create one image. Five small clear glasses in a row on a wooden board, each filled with soy sauce of a different shade, from thick near-black brown through dark reddish brown and amber to pale gold, with a small spoon beside them and no labels. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Shun, the seasonal peak

### /en/eat/shun/ 本文は「What it is」の節（はしり・旬・名残）に置く
**ヒーロー** → 保存名 `shun-hero`

```
Create one image. A long wooden table with four small trays in a row, each holding the produce of one season: bamboo shoots and rape blossoms with a sprig of cherry blossom; a cucumber, a tomato and a slice of watermelon; chestnuts, a persimmon and a sweet potato; and a mikan, a daikon radish and a leaf of Chinese cabbage. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `shun-body`

```
Create one image. Three small plates in a row, each with an aubergine at a different stage of the season: on the left a slender young aubergine sliced thin, in the middle a plump glossy one, on the right a heavy deep-purple one cut open to show dense flesh, with a single leaf on a twig behind each plate going from fresh green to deep green to orange-brown. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/shun-autumn-winter/ 本文は「What makes it autumn」の節（松茸）に置く
**ヒーロー** → 保存名 `shun-autumn-winter-hero`

```
Create one image. A wooden table on a veranda set with a long plate holding a whole grilled saury with grated daikon, a bowl of steaming new rice, and a woven basket of chestnuts in their burrs beside two matsutake mushrooms, while beyond the railing a persimmon tree hangs heavy with orange fruit. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `shun-autumn-winter-body`

```
Create one image. On the floor of a tended pine wood, a few matsutake mushrooms push up through fallen pine needles, a bamboo basket stands on the ground, and a pair of hands, with no face shown, gently wipes one mushroom with a soft cloth rather than washing it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/shun-spring-summer/ 本文は「What makes it spring: bamboo shoots」の節に置く
**ヒーロー** → 保存名 `shun-spring-summer-hero`

```
Create one image. A wooden veranda looking onto a bamboo grove, with a basket of freshly dug bamboo shoots, butterbur buds and rape blossoms on the left and, on the right, a glass bowl of ice with sliced cucumber and tomato wedges beside a slice of watermelon. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `shun-spring-summer-body`

```
Create one image. On a kitchen stove a large pot of cloudy rice-bran water holds whole unpeeled bamboo shoots, an unmarked sack of rice bran stands beside it, and on a board one peeled shoot has been cut in half to show its pale tender inside. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Wagyu

### /en/eat/wagyu-steak/ 本文は「How to order it」の節に置く
**ヒーロー** → 保存名 `wagyu-steak-hero`

```
Create one image. A teppanyaki counter in a restaurant, a chef seen from behind in a white uniform and tall white hat searing thick slices of marbled beef on a large flat iron griddle with steam rising, the backs of two diners seated at the counter and a small plate of vegetables waiting at the edge of the griddle. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `wagyu-steak-body`

```
Create one image. On a standing-height counter, four plates in a row hold thick-cut steaks of increasing size from palm-sized to large, with a traditional two-pan balance scale at the end of the row holding a steak on one pan and plain metal weights on the other. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Eat — Western-style foods

### /en/eat/western-machichuka/ 本文は「Tenshinhan: the stories, and why none wins」の節に置く
**ヒーロー** → 保存名 `western-machichuka-hero`

```
Create one image. Inside a small neighbourhood Chinese restaurant at lunchtime, a worn wooden counter with red-topped stools and square four-seat tables, a cook seen from behind working a wok over a roaring flame, plates of fried rice and pan-fried gyoza and a bowl of ramen on the counter, and a plain cloth curtain hanging in the doorway. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `western-machichuka-body`

```
Create one image. Behind a restaurant counter, a pair of hands, with no face shown, slides a fluffy round crab omelette from a wok onto a mound of steaming rice in a deep plate, a ladle of glossy thick amber sauce poised above it and a small bowl of green peas beside the plate. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/western-pan/ 本文は「What makes it Japanese」の節に置く
**ヒーロー** → 保存名 `western-pan-hero`

```
Create one image. A neighbourhood bakery counter with wooden trays of round anpan buns, each with a small pink salted cherry blossom pressed into its centre dimple, golden curry bread, crosshatched melon bread and a tin-baked loaf of shokupan, with a shop window onto the street and plain paper bags stacked at the end of the counter. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `western-pan-body`

```
Create one image. Three wooden trays side by side: on the left a loaf baked in a tin cut into thick slices, in the middle a round bun cut open to show sweet bean paste inside, and on the right a fried curry bread cut open to show the curry filling inside its crumb coating. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/eat/western-yoshoku/ 本文は「What makes it yōshoku」の節（コロッケ）に置く
**ヒーロー** → 保存名 `western-yoshoku-hero`

```
Create one image. A white-clothed table by a window in an early Ginza Western-style restaurant, set with a plate of omurice (an omelette over chicken rice with tomato sauce), two small bale-shaped croquettes and a beef stew in a lidded enamel pot, with a knife and fork laid ready and a city street at dusk beyond the glass. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `western-yoshoku-body`

```
Create one image. A small bale-shaped golden croquette cut in half on a plate to show a creamy white bechamel filling with no potato, a whole croquette beside it, a fork and knife laid ready, and a small pan of white sauce with a whisk on the table behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Column

### /en/column/eating-in-japan-allergies/ 本文は「Tools for telling a restaurant」の節（東京の食品ピクトグラム）に置く。絵は一般的な描写で、実在のシートの複製ではない
**ヒーロー** → 保存名 `eating-in-japan-allergies-hero`

```
Create one image. At a small restaurant table beside a window, a server in an apron leans in next to a guest, both drawn from behind or in profile with no facial detail, and gently points at one picture on a large folded sheet laid open on the table; the sheet is a neat grid of plain little drawings of foods (an egg, an ear of wheat, a prawn, a crab, a walnut, a glass of milk) with no captions and no warning marks, and a cup of tea waits at the edge of the table. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `eating-in-japan-allergies-body`

```
Create one image. A paper menu card lies open on a wooden table, each dish shown as a short wavy line with no letters, and beside each line a row of two or three tiny plain pictures of the ingredients used (a fish, a chicken, a carrot, a nut, a bottle of milk), while a hand holding a pencil rests beside it and a teapot sits at the corner of the table. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/column/eating-in-japan-vegetarian/ 本文は「Same word, different kitchens」の節に置く
**ヒーロー** → 保存名 `eating-in-japan-vegetarian-hero`

```
Create one image. Across the wooden counter of a small tempura restaurant, a cook's hands lift golden tempura of lotus root, sweet potato, a shiso leaf and a mushroom out of a pan of oil onto absorbent paper, while a guest seen from behind sits at the counter with a small bowl of rice and a cup of tea, and a small pot of clear stock simmers on the stove at the back of the counter. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `eating-in-japan-vegetarian-body`

```
Create one image. Seen across the pass into one small open kitchen: on the left a cook's hands arrange simmered vegetables and tofu on a plate, in the middle a single shared rack above one stove holds ladles, tongs and pans, on the right a second cook's hands turn small fish on skewers over a grill, and a pot of stock steams at the back; faces are not shown, and the mood is plain and observational. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/column/eating-out-with-children-in-japan/ 本文は「School lunch」の節に置く
**ヒーロー** → 保存名 `eating-out-with-children-in-japan-hero`

```
Create one image. A booth table in a family restaurant beside a bright window, with a children's plate in the foreground (a mound of ketchup rice topped with a small paper flag, a croquette, a slice of ham, a little spaghetti and a small sandwich) and a cup of juice with a straw, while two adults and one small child sit in the booth seen only from behind, the child's small hands holding a spoon over the plate, and a high chair stands at the end of the table. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `eating-out-with-children-in-japan-body`

```
Create one image. A primary-school classroom at lunchtime with desks pushed together in small groups, each desk holding a tray with a bowl of rice, a bowl of soup, a small dish of fish with vegetables and a carton of milk, while the children in plain clothes are seen only from behind and at a distance with no facial detail, and a teacher stands by a tall window beside a blank blackboard in soft daylight. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/column/paying-at-restaurants-in-japan/ 本文は「When and where you pay」の節に置く
**ヒーロー** → 保存名 `paying-at-restaurants-in-japan-hero`

```
Create one image. At the register counter just inside the door of a small restaurant, a customer seen from behind holds a plain blank card toward a small card reader with one hand and a folded bill slip with the other, a small round tray with a few coins sits beside the reader, and a plain noren curtain hangs at the open door with the bright street beyond, the cashier only partly visible behind the counter. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `paying-at-restaurants-in-japan-body`

```
Create one image. In a lively small izakaya, a diner seen from behind raises one hand and crosses the two index fingers clearly in an X to ask for the bill, while across the room a server in an apron turns to notice; the low table in front holds small shared plates and empty glasses, and plain paper lanterns hang overhead. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/column/queues-and-shared-tables/ 本文は「Being seated」の節に置く。相席は本文に無いので描かない（一般的な描写）
**ヒーロー** → 保存名 `queues-and-shared-tables-hero`

```
Create one image. A short, orderly line of people seen from behind waits along the pavement outside a small restaurant on a quiet city street, with painted floor markers in the shape of paired footprints on the ground, a plain noren curtain at the door, and a small stand by the entrance holding a clipboard with a blank sheet and a pen on a string, in soft morning light. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `queues-and-shared-tables-body`

```
Create one image. Just inside the door of a small counter restaurant, two customers stand side by side seen from behind, waiting, while several stools along the counter are plainly empty and a staff member in an apron walks over from the kitchen to show them to their seats, with the cook working at the stove behind the counter and a little steam rising. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/column/restaurant-reservations-in-japan/ 本文は「How to book」の節（ホテルのコンシェルジュ）に置く
**ヒーロー** → 保存名 `restaurant-reservations-in-japan-hero`

```
Create one image. A small restaurant before opening in the morning light, with one table beside the window laid for two (chopsticks on rests, small cups, a tiny vase with a single flower) while through the pass window behind it a cook's hands arrange two matching small trays of prepared set-meal dishes (little bowls, a grilled fish, pickles); the rest of the room is quiet and empty. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `restaurant-reservations-in-japan-body`

```
Create one image. At a hotel lobby concierge desk, a concierge in a neat uniform holds a telephone receiver to one ear and writes on a notepad with lines only and no legible writing, while a guest seen from behind stands at the desk holding a small guidebook, a desk bell and a potted plant beside them and a luggage cart in the soft background; faces are drawn without detail. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/column/slurping-noodles/ 本文は「Why: the explanations given」の節（江戸の屋台説）に置く。筆者の推測として紹介されている説なので、キャプションでは断定しない
**ヒーロー** → 保存名 `slurping-noodles-hero`

```
Create one image. A close view across a wooden noodle-shop counter, where a pair of chopsticks lifts a swirl of noodles out of a steaming ramen bowl with the steam curling upward, and at the edge of the frame another diner's hand rests beside a bowl of cold soba on a bamboo tray with a small dipping cup; the diners' faces are not shown. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `slurping-noodles-body`

```
Create one image. A night soba stall from the Edo period at dusk in a narrow lane, a wooden cart with a steaming pot and a plain blank paper lantern, the vendor's hands lowering a bowl across the cart, and two customers in old-fashioned dress standing and eating quickly, seen from behind with chopsticks raised, steam rising into the cool air. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

> 入浴者は描かない（湯船は無人、人は浴衣・上着姿か足湯の足だけ）。記事に無い名所（特に富士山）は足さない。どちらも各プロンプトに入っている。放射能・ラジウムの記事は、放射線を連想させる絵にしない。

> **記事の事実が曖昧なものは一般的な描写にしてある**。各 `###` の行の日本語メモは「本文の絵を置く節」。

## Soak — Hokkaido

### /en/soak/onsen-hokkaido/ 本文は「How people use them」の節（冬の氷上の風呂と足湯）に置く
**ヒーロー** → 保存名 `onsen-hokkaido-hero`

```
Create one image. A small hot spring town of low inn roofs and bathhouse chimneys, with steam drifting up between the buildings, stands at the foot of a steaming grey lava dome, while beyond it a bare valley of crater hollows vents thin white plumes of steam and a round caldera rim lies on the far horizon under a wide northern sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `onsen-hokkaido-body`

```
Create one image. On a frozen lake in winter, a small seasonal village of a few snow-covered huts stands at the lakeshore with an open-air bath and a footbath built out on the ice, both steaming and the bath left empty, while one visitor in a thick coat and boots, seen from behind, sits with only their feet in the footbath, and snowy hills rise under a pale sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/akanko/ 本文は「The marimo」の節に置く
**ヒーロー** → 保存名 `akanko-hero`

```
Create one image. A calm caldera lake at the edge of a hot spring town, with two cone-shaped volcanoes rising behind the far shore, a sightseeing boat crossing the water, small inn roofs along the near shore with thin steam rising, and on the shore a short wooden footbath where only two pairs of feet rest in the water. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `akanko-body`

```
Create one image. A cutaway view of a lake: below the surface, large round green balls of marimo algae lie in a soft colony on the sandy lake bed, while above the surface a sightseeing boat crosses the water towards a small wooded island with a low exhibition building at its shore. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/jozankei/ 本文は「How the town works」の節（無料の足湯と手湯）に置く
**ヒーロー** → 保存名 `jozankei-hero`

```
Create one image. A river gorge with wooded slopes in autumn colours, a row of small inn roofs on the bank of the river with soft steam rising between them, and on the riverside path a small stone kappa statue with a dish on its head. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `jozankei-body`

```
Create one image. A free semi-outdoor footbath under a simple wooden roof overlooks a gorge river, with a long trough of clear steaming water along a bench where only two pairs of bare feet rest, and beside it a small stone kappa figure pours water into a hand-bath basin. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/kawayu/ 本文は「Sunayu, the beach on Lake Kussharo」の節に置く
**ヒーロー** → 保存名 `kawayu-hero`

```
Create one image. A bare lava dome with yellow-stained slopes and thin plumes of steam rising from its vents towers over a quiet river valley, where a small hot spring town sits among trees with steam drifting off the river and a walking trail through low marsh shrubs leads from the town towards the mountain. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kawayu-body`

```
Create one image. On the sandy shore of a large caldera lake in cold weather, a hole dug in the sand has filled with steaming warm water and stands empty with a shovel stuck in the sand beside it, while a patch of open water just offshore stays unfrozen and whooper swans rest on it, with light snow on the far hills. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/sounkyo/ 本文は「The Ice Fall Festival」の節に置く
**ヒーロー** → 保存名 `sounkyo-hero`

```
Create one image. A narrow river gorge walled by tall vertical cliffs split into regular columns of grey rock, with a small hot spring town of inn roofs at its foot and the snow-dusted peaks of a high mountain range showing above the rim. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `sounkyo-body`

```
Create one image. A winter night festival site in a snowy gorge, with a tall glowing ice sculpture, a long ice slide, a wall of ice set up for climbing, a small ice bar in warm lantern light and taiko drums on a stage at one side, and a few visitors in thick coats seen from behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/toyako/ 本文は「The water」の節（井戸の断面）に置く
**ヒーロー** → 保存名 `toyako-hero`

```
Create one image. Dusk over a large round caldera lake with fireworks blooming over the water from the lakeshore, an island in the middle of the lake, a row of hot spring hotels and a promenade along the shore where a few visitors are seen from behind, and the rounded lava domes of a volcano rising behind the town. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `toyako-body`

```
Create one image. A cutaway view of the ground beneath a lakeside hot spring town: many slim well pipes run down through layers of rock to warm water far below, and pipes at the surface carry the steaming water up to the hotel roofs and a small stone footbath, with the lake at the edge of the picture. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Tohoku

### /en/soak/akiu/ 本文は「Akiu Ōtaki falls」の節に置く
**ヒーロー** → 保存名 `akiu-hero`

```
Create one image. A river valley town in autumn on a wide stony river, with low inn roofs and soft steam beside the water, a short footbridge over a narrow gorge with steep rock walls just upstream, and wooded mountains in red and gold leaves behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `akiu-body`

```
Create one image. A tall, narrow waterfall, a whole river falling over a steep rock cliff into a deep green pool in a wooded valley, with a small temple hall standing at the rim of the cliff above the falls. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/asamushi/ 本文は「Hemp, a monk and a deer」の節に置く
**ヒーロー** → 保存名 `asamushi-hero`

```
Create one image. A seaside hot spring town on a calm bay, with a small cone-shaped island just offshore, wooded on top, with a long flight of stone steps and a red torii gate halfway up its slope, fishing boats at rest on the water, and inn roofs along the shore with soft steam rising between them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `asamushi-body`

```
Create one image. In an old seaside village, bundles of hemp stalks are being steamed over a hot spring pool inside a simple wooden shed open to the air, a villager in old-style work clothes tending them, while a deer stands in the shallow edge of the pool and the sea shows between the huts. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/hanamaki/ 本文は「Dai Onsen’s two stories」の節（キジの湯の言い伝え）に置く
**ヒーロー** → 保存名 `hanamaki-hero`

```
Create one image. A resort rose garden in full bloom, with beds of many kinds of roses around a round flower bed laid out like a sundial with a slim pointer casting a shadow, low hotel buildings behind with a thin plume of steam rising, and gentle hills under a wide sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `hanamaki-body`

```
Create one image. In a mountain forest long ago, a hunter in old hunting clothes, seen from behind, stands on a slope looking at a thin plume of steam rising from a hollow ahead, while a pheasant runs away through the undergrowth. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/higashiyama/ 本文は「Gyōki and the three-legged crow」の節に置く
**ヒーロー** → 保存名 `higashiyama-hero`

```
Create one image. A quiet river town with inns standing close together on both banks of a narrow river, steam rising from the buildings, and a wooded hill rising behind the town in autumn colours. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `higashiyama-body`

```
Create one image. A monk in plain travelling robes with a staff and a wide hat, seen from behind, follows a black crow with three legs along a forest path down to a hollow where a spring steams quietly among the rocks. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/iizaka/ 本文は「Food」の節（ラジウム玉子）に置く
**ヒーロー** → 保存名 `iizaka-hero`

```
Create one image. A narrow lane in an old hot spring town, with a small old wooden public bathhouse whose roof vent gives off steam and whose doorway hangs a plain indigo curtain with no markings, a river crossing the town below, and a wide basin of fields and hills beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `iizaka-body`

```
Create one image. At the front of a small shop beside a bathhouse, a wire basket of eggs is lowered into a stone trough of steaming spring water, with a wooden tray of finished eggs resting on the ledge beside it and steam curling up under the eaves. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/naruko/ 本文は「Kokeshi」の節に置く
**ヒーロー** → 保存名 `naruko-hero`

```
Create one image. A hot spring street in a basin ringed by autumn hills, with steam rising from vents beside the road, a shop window lined with rows of wooden kokeshi dolls, and a small crater lake with steam around its shore visible on a rise beyond the town. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `naruko-body`

```
Create one image. A woodturner's workbench with a lathe, pale wood shavings on the floor, a half-shaped doll on the lathe, rows of finished kokeshi dolls with rounded heads and layered chrysanthemum petals painted in terracotta and dark ink on their bodies, and a small brush and ink pot, with only the craftsman's hands visible. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/sukayu/ 本文は「The Sennin-buro」の節に置く
**ヒーロー** → 保存名 `sukayu-hero`

```
Create one image. A large old wooden inn on a high mountain slope buried in deep snow, with steam rising from its roof vents, a cleared road running between towering walls of snow, and snow-laden evergreen trees and a rounded mountain peak behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `sukayu-body`

```
Create one image. The inside of an enormous empty bath hall built entirely of pale hiba wood, with a high wooden ceiling and not a single pillar, four separate wooden tubs set side by side in one vast space, a stream of hot water falling from a wooden spout, and soft light from small windows through the steam. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Water types and how to read the bath

### /en/soak/acidic-sulphur-radioactive-springs/ 本文は「Where the water comes from」の節に置く
**ヒーロー** → 保存名 `acidic-sulphur-radioactive-springs-hero`

```
Create one image. A mountain valley with one small wooden bath hut at its centre and two different hillsides on either side: on the left a volcanic slope with thin steam vents ringed with yellow sulphur crust behind a low wooden fence and a pale cloudy stream running down, and on the right pale speckled granite boulders around a calm, still pool in soft mist. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `acidic-sulphur-radioactive-springs-body`

```
Create one image. A cutaway view of the ground drawn without arrows or labels: on the left a volcanic cone with a steaming vent, rainwater soaking down through the rock layers and meeting rising gas bubbles before surfacing as a pale spring at the foot of the slope, and on the right a mass of pale speckled granite deep below with a thin line of tiny bubbles rising through the rock to a quiet stone-edged pool at the surface. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/carbon-dioxide-chloride-iron-springs/ 本文は「Iron springs and colour」の節に置く
**ヒーロー** → 保存名 `carbon-dioxide-chloride-iron-springs-hero`

```
Create one image. Three empty stone basins in a row on a rocky terrace above a misty mountain valley, each fed by its own wooden spout: the first holds clear lukewarm water with fine bubbles clinging along its walls, the second has a white crust of salt around its rim and spout, and the third holds rust-brown water that has stained the stones around it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `carbon-dioxide-chloride-iron-springs-body`

```
Create one image. A single stone spout pours clear water into a long shallow stone channel, and as the water runs along the channel it turns amber and then deep rust-brown, staining the stones and moss along its length, with steam rising from the first pool. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/hydrogen-carbonate-sulphate-iodine-simple-springs/ 本文は「Moor: Tokachigawa and Obihiro」の節に置く
**ヒーロー** → 保存名 `hydrogen-carbonate-sulphate-iodine-simple-springs-hero`

```
Create one image. Four shallow ceramic bowls in a row on a low wooden table beside an open window that looks out on a steaming outdoor bath, each bowl holding a different hot spring water: one perfectly clear and glossy, one faintly milky with a thin white limy rim, one pale yellow, and one dark tea-brown with a thin sheen of oil on top. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `hydrogen-carbonate-sulphate-iodine-simple-springs-body`

```
Create one image. A cutaway of flat northern marshy ground: a thick layer of dark peat lies below the surface, tea-brown water seeps up through it into a stone-edged pool at the top, and a low bathhouse with a thin plume of steam stands beside the pool among reeds. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/onsen-water-types/ 本文は「An onsen is defined by law, and it need not be hot」の節に置く
**ヒーロー** → 保存名 `onsen-water-types-hero`

```
Create one image. The changing room of a mountain bathhouse with woven baskets on a wooden shelf, a folded cotton yukata, and on the wall an empty framed notice board divided into blank ruled boxes with no writing, while a sliding door stands open onto a steaming outdoor bath beyond. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `onsen-water-types-body`

```
Create one image. Two small baths side by side on a hillside, both empty: on the left in cool shade a mossy stone basin of clear spring water with no steam and a wooden ladle resting on its edge, and on the right in sunlight a steaming stone tub of hot water, with a thin wooden fence between them and a low bathhouse roof behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/kakenagashi-explained/ 本文は「The idea」の節（掛け流しと循環の違い）に置く
**ヒーロー** → 保存名 `kakenagashi-explained-hero`

```
Create one image. A wooden bathtub in an empty bathhouse with a carved stone spout pouring steaming water into it, the water brimming over the rim in a smooth sheet across the stone floor and into a channel, and on the wall nearby an empty notice board with blank ruled boxes and no writing. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kakenagashi-explained-body`

```
Create one image. Two empty baths in cutaway side by side, drawn without arrows: on the left a tub filled by a spout with water spilling over its rim into a drain and never returning, and on the right a tub with an intake grate on its wall, a pipe leading to a round filter tank and a second pipe returning the water to the tub. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Regional overviews

### /en/soak/onsen-honshu/ 本文は「Why here」の節（Under Tokyo の段落）に置く
**ヒーロー** → 保存名 `onsen-honshu-hero`

```
Create one image. A wide landscape in three parts: on the left a steaming volcanic cone above a mountain spa town of wooden inns, in the middle a low gentle valley of tiled roofs with a single thread of steam rising from a bathhouse and no volcano on the horizon, and on the right the edge of a city of low buildings with a public bathhouse chimney giving off steam. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `onsen-honshu-body`

```
Create one image. A cutaway of the ground under a city: low buildings on the surface, a narrow well pipe drilled hundreds of metres down through layers of rock to a pocket of warm water from old trapped seawater, and at the top a public bathhouse with a tall chimney and an empty tub filled with tea-brown water from a spout. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/onsen-kyushu/ 本文は「How people use them」の節（地獄蒸し）に置く
**ヒーロー** → 保存名 `onsen-kyushu-hero`

```
Create one image. A hillside town above a wide bay with plumes of white steam rising from many roofs and vents and from one bubbling pool in the foreground, rows of small inn roofs stepping down to the water, and a line of volcanic peaks along the horizon behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `onsen-kyushu-body`

```
Create one image. A row of stone steam ovens set over natural vents in a hot spring lane, one iron lid lifted to show vegetables and steamed buns in a bamboo basket inside, with more baskets of raw food waiting on a wooden bench and clouds of steam drifting between low old buildings. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Kanto

### /en/soak/ikaho/ 本文は「Golden and silver」の節（金の湯と銀の湯の色の違い）に置く
**ヒーロー** → 保存名 `ikaho-hero`

```
Create one image. A hillside hot spring town built on a long, straight flight of broad stone steps climbing the slope between rows of wooden inns and small shops with plain blank curtains, a narrow channel of steaming water running down the middle of the steps, a footbath at the side of the steps with only one pair of feet in it, a small shrine gate at the top, and the forested rounded dome of a volcano rising behind the town. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `ikaho-body`

```
Create one image. Two stone troughs stand side by side on a stone-paved step, both fed by wooden spouts and left empty of people: the water in the left trough is clear at the spout and turns golden brown as it runs along, staining the stone it passes over, while the water in the right trough stays perfectly clear and colourless all the way down, with thin steam rising from both and a few stone steps behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/kinugawa/ 本文は「The station footbath」の節に置く
**ヒーロー** → 保存名 `kinugawa-hero`

```
Create one image. A river gorge with wooded cliffs, where a row of large multi-storey inns and hotels stands along the rim above the water, a small flat-bottomed river boat drifts on the green river among boulders, and a train crosses a bridge at the edge of the town with soft steam rising from a few rooftops. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `kinugawa-body`

```
Create one image. A small square in front of a modest railway station, with a long roofed wooden footbath along a bench where only two pairs of bare feet rest in the steaming water, a stone hand-bath basin with a bamboo spout beside it, a limited-express train waiting at the platform behind, and wooded gorge hills rising beyond the station roof. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/minakami/ 本文は「Takaragawa’s open-air baths」の節に置く
**ヒーロー** → 保存名 `minakami-hero`

```
Create one image. A broad mountain river valley at the foot of a rugged rocky ridge with patches of snow, with hotels and inns strung along the river bank, a railway line crossing the river on a bridge, a ropeway cable climbing from the valley towards the ridge with one small gondola, and thin steam rising from a few roofs. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `minakami-body`

```
Create one image. Beside a rushing mountain river in light snow, a cluster of large open-air stone pools laid out in steps, all empty and steaming, with flat stone rims and hot water flowing in from stone spouts, a small wooden changing hut with folded cotton bathing wraps stacked on a bench, and snow-laden trees overhanging the pools. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/nasu/ 本文は「Bathing by the clock」の節（鹿の湯の入浴の決まり）に置く
**ヒーロー** → 保存名 `nasu-hero`

```
Create one image. A rugged volcano with a steaming summit crater and thin white fumaroles on its slopes, a small hot spring village at its southern foot with a single-storey wooden bathhouse and a few old inns, and in the foreground a stretch of yellow-stained stony ground with thin steam vents and a large boulder split cleanly into three pieces. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `nasu-body`

```
Create one image. The inside of a plain single-storey wooden bathhouse with a high wooden ceiling and a row of deep wooden tubs along the wall, all empty, each giving off a different amount of steam from thick clouds to a faint wisp, long flat wooden boards for stirring the water leaning against the tub rims, a wooden ladle and a sand hourglass resting on a ledge, and a shelf of wooden buckets. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/shima/ 本文は「Lake Okushima and Shima blue」の節に置く
**ヒーロー** → 保存名 `shima-hero`

```
Create one image. A long narrow valley town strung along a clear river, with old wooden inns and modern hotels standing side by side on both banks, a small thatched hall with a hipped roof beside the road, steam rising from a few roofs, a single arched footbridge over the river, and forested mountains closing in on both sides. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `shima-body`

```
Create one image. A broad reservoir of vivid, perfectly clear blue-green water between steep wooded mountains in spring, with streaks of melting snow on the slopes and thin silver streams running into the lake, a concrete dam wall at one end, a single canoe on the water with one paddler seen from behind, and a short footpath along the shore. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Tokai

### /en/soak/atami/ 本文は「The Seven Springs walk」の節（入れない史跡の湧出口）に置く
**ヒーロー** → 保存名 `atami-hero`

```
Create one image. A steep hillside resort city stepping down to a curved bay, with tall hotel buildings and old inn roofs on the slopes, a narrow street where a small stone-walled spring monument sends up a jet of steam and hot water, and fishing boats at rest in the bay below. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `atami-body`

```
Create one image. A walking route along a narrow old seaside shopping street past small stone-walled spring monuments, each fenced with a low wooden rail and giving off steam, one with a jet of hot water bursting up inside its stone enclosure, another with a wire basket of eggs hanging over a steaming vent, and a few strollers seen from behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/ito/ 本文は「William Adams and the ships」の節に置く
**ヒーロー** → 保存名 `ito-hero`

```
Create one image. A calm river running through the middle of a seaside town, with a walking path along its bank under cherry trees and a row of tall glowing bamboo lanterns, an old three-storey wooden inn with an ornate roof on the far bank, a small stone statue of a smiling god in front of a modest bathhouse, and steam rising from a few roofs. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `ito-body`

```
Create one image. At the mouth of a river long ago, a pit dug in a sandbar and lined with logs holds a nearly finished Western-style wooden sailing ship with tall bare masts, shipwrights in old Japanese work clothes stand on scaffolds around its hull, stacked timber logs lie on the bank, and an earth dam across the river waits to be opened to float the ship, with forested hills behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/shuzenji/ 本文は「Kūkai and the Tokko no Yu」の節に置く
**ヒーロー** → 保存名 `shuzenji-hero`

```
Create one image. A small spa town in a wooded valley along a clear river, with a path through a bamboo grove following the bank and round bamboo benches along it, a stone-set spring steaming beside the water behind a low rail, a temple roof with a tiled gable rising among the trees, and a slim lookout tower above the town roofs. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `shuzenji-body`

```
Create one image. A travelling monk in plain robes, seen from behind, raises a small bronze ritual implement towards a boulder on the bank of a river in a wooded valley, while hot water and steam well up from a crack in the rock and run into the river, and a young boy in plain old clothes holding a small wooden bucket watches from a few steps away. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Chubu

### /en/soak/gero/ 本文は「Twelve sources and seven tanks」の節（源泉からタンク、旅館への配湯）に置く
**ヒーロー** → 保存名 `gero-hero`

```
Create one image. A hot spring town on a wide clear river, with a bridge crossing the water, rows of inn buildings along the bank, a small plaza where a roofed wooden footbath of pale cypress seats several people side by side with only a few pairs of feet in the water, a white heron standing on the gravel bank, and wooded mountains behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `gero-body`

```
Create one image. A cutaway-style view of a hillside above a river town: a few small pump houses near the top draw hot water from wells, pipes run from them to a row of large round storage tanks on the slope, and from the tanks many pipes run down to the roofs of inns, a hospital and houses in the town below, while at a roadside tap stand one resident, seen from behind, fills a container from a spout. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/isawa/ 本文は「Three accounts of 1961」の節に置く
**ヒーロー** → 保存名 `isawa-hero`

```
Create one image. A wide basin of vineyards and orchards in spring, with rows of grapevines on trellises and blossoming peach trees surrounding a hot spring town of mid-rise hotels along a narrow waterway lined with cherry trees in bloom, thin steam rising from the roofs, and a ring of low mountains on the horizon. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `isawa-body`

```
Create one image. A vineyard at the moment a hot spring was struck: hot water bursts from a drilled pipe beside a small wooden derrick and runs as a steaming stream between the rows of vines towards a river, while at the edge of the field a few makeshift bath pits lined with boards and screened with reed mats stand empty and steaming. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/masutomi/ 本文は「Food」の節（山里の暮らしと食べもの）に置く
**ヒーロー** → 保存名 `masutomi-hero`

```
Create one image. A tiny hot spring hamlet high in the mountains, with a handful of old wooden inns on a forested slope above a stone-lined stream, one bathhouse with a thin plume of steam, a vegetable plot with bean poles beside a path, and rugged granite peaks rising behind under a clear sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `masutomi-body`

```
Create one image. The veranda of a mountain farmhouse on a cold clear day, with long strips of white radish hung in rows on a wooden frame to freeze-dry in the cold air, baskets of runner beans, cucumbers and sesame stacked on the boards, a pot of miso and a block of tofu on a low table, and forested peaks behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/nozawa/ 本文は「The Ogama」の節に置く
**ヒーロー** → 保存名 `nozawa-hero`

```
Create one image. A snowy mountain village of narrow lanes between old wooden houses and inns with snow heaped on the roofs, small public bathhouses with steam pouring from their roof vents, an open-air spring steaming in a stone-walled corner, a temple roof up the slope, and a broad forested mountain with ski runs rising behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `nozawa-body`

```
Create one image. A boiling open-air spring set in a stone-walled corner of a village, with several pools of steaming water side by side, villagers in aprons and rubber boots, seen from behind, lowering wire baskets of vegetables and eggs into the water on ropes, clouds of steam drifting over the wooden roofs, and a small souvenir shop with stacked crates next to the wall. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/okuhida/ 本文は「Falls and the ropeway」の節に置く
**ヒーロー** → 保存名 `okuhida-hero`

```
Create one image. A high mountain valley with a clear river and a cluster of old wooden inns, a few thin steam plumes and an open-air bath hut by the water, a route bus on the valley road, and behind the valley a steaming rounded volcano beside jagged snow-capped alpine peaks under a wide sky. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `okuhida-body`

```
Create one image. A double-decker ropeway gondola with two cabins stacked one above the other hangs from a cable climbing a steep forested slope towards high rocky alpine ridges, with a snow-fed stream below the cable, a small station building with a car park at the foot of the slope, and a second gondola passing in the other direction. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/shirahone/ 本文は「Why it turns white」の節に置く
**ヒーロー** → 保存名 `shirahone-hero`

```
Create one image. A small hollow valley high on the flank of a broad volcano, with a handful of old wooden inns, a pale milky white stream running through the hollow, low white-crusted mounds of stone covering the ground, and the broad rounded summit of a mountain rising behind in clear light. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `shirahone-body`

```
Create one image. A bamboo spout pours perfectly clear water into a small wooden trough at the top of a slope, and the water then flows down through a series of stone and wooden troughs and steps, turning cloudy and then milky white, leaving a pale white crust on the rocks and on fallen branches along the way, with thin steam rising from the first trough. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/togura-kamiyamada/ 本文は「The Zenkōji pilgrims' spa」の節に置く
**ヒーロー** → 保存名 `togura-kamiyamada-hero`

```
Create one image. A retro Showa-era spa town lane at dusk, narrow and lined with small wooden-fronted inns, snack bars and an old shooting-gallery stall with shelves of small prizes, plain blank paper lanterns glowing, a woman in a kimono seen from behind walking away, steam rising from a small public bathhouse roof, and a wide river with a low bridge at the end of the street. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `togura-kamiyamada-body`

```
Create one image. At the end of a day of pilgrimage, a small group of travellers in plain old-style travelling clothes with walking staffs and wide hats, seen from behind, walk into a quiet spa town lane at dusk towards the glow of inn windows and a bathhouse roof with steam rising, with a river and a low railway bridge behind them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Hokuriku

### /en/soak/echigo-yuzawa/ 本文は「Snow Country」の節に置く
**ヒーロー** → 保存名 `echigo-yuzawa-hero`

```
Create one image. A snow-buried spa town at the foot of snowy mountains, with inn roofs heaped with snow, steam rising from a small shared bathhouse, a shinkansen train gliding along an elevated line at the edge of the town, and a distant ski slope with a lift line and tiny skiers on the white mountainside. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `echigo-yuzawa-body`

```
Create one image. A quiet tatami room in an old inn, with a low desk by a window, blank sheets of manuscript paper under a small weight, an ink stone and a brush, a lamp and a teapot beside a charcoal heater, while through the window heavy snow falls on rooftops and a steep snowy slope climbs to a small bathhouse with steam rising from its roof. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/tsukioka/ 本文は「The colour」の節に置く
**ヒーロー** → 保存名 `tsukioka-hero`

```
Create one image. A small walkable hot spring street on a flat plain of rice fields, with low inns and shop fronts selling sake and rice crackers behind plain blank curtains, a person grilling rice crackers over a charcoal grill at one shop front, a small roofed footbath in the middle of the street with two pairs of feet in pale emerald-green water, and low hills on the horizon. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `tsukioka-body`

```
Create one image. A small wooded garden at a spring source, with a stone basin of steaming emerald-green water fed by a spout, a hand-bath basin beside it, a small stone statue that visitors pour water over, a drinking fountain on a stone post, and the green water turning milky white where it spills over the basin's edge into a shallow channel. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/unazuki/ 本文は「A plateau of peaches, and water from upstream」の節に置く
**ヒーロー** → 保存名 `unazuki-hero`

```
Create one image. A V-shaped river gorge with steep wooded walls and a green river, a small narrow-gauge open-sided trolley train crossing a bridge deep in the gorge, and at the mouth of the gorge a hot spring town of inns spreading out onto a plain, with soft steam rising from the roofs. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `unazuki-body`

```
Create one image. A long insulated pipe runs along the wall of a river gorge, carrying hot water from steaming source huts far upstream, crossing a small bridge and descending towards a plateau of peach trees in blossom at the gorge mouth, where the first few inn roofs stand among the trees with steam rising. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/wakura/ 本文は「The white heron」の節に置く
**ヒーロー** → 保存名 `wakura-hero`

```
Create one image. A calm bay at the edge of a hot spring town, with inns lined along the shore and soft steam rising from their roofs, a promenade with a small roofed footbath and a drinking fountain beside a modest public bathhouse, fishing boats at rest on the still water, and low hills along the far side of the bay. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `wakura-body`

```
Create one image. At dawn on a misty bay, a small wooden fishing boat holds an elderly couple in plain old clothes, seen from behind, watching a white heron standing on one leg in a patch of bubbling, steaming water in the shallows near the shore, with a few thatched roofs and pine trees along the beach. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yamanaka/ 本文は「The Kiku-no-yu」の節（男湯と女湯が別棟）に置く
**ヒーロー** → 保存名 `yamanaka-hero`

```
Create one image. A gorge of a clear river with maple-clad slopes, a graceful all-wood arched bridge spanning the gorge, a long slender footbridge crossing the river lower down, a wooden seating platform at the water's edge, and a few inn roofs with soft steam on the bank above. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yamanaka-body`

```
Create one image. A small square in a hot spring town with two separate tile-roofed bathhouse buildings in an old temple-like style standing side by side with a gap between them, each with steam rising from its roof and a plain curtain at the door, a small theatre building beside one of them, a footbath by its entrance with one pair of feet, and a shallow pond in the square with a basket of eggs hanging in the warm water. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yamashiro/ 本文は「The Kosōyu」の節に置く
**ヒーロー** → 保存名 `yamashiro-hero`

```
Create one image. A small hot spring town laid out around a Meiji-style wooden public bathhouse with latticed windows and an upstairs rest room with sliding screens under a tiled roof, a black crow perched on the roof ridge, steam rising from the roof vent, narrow lanes of old inns climbing the hillside behind, and an old wooden gate at the street. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yamashiro-body`

```
Create one image. The inside of an old public bathhouse hall, empty, with walls decorated in coloured ceramic tiles of flowing floral patterns in muted green, ochre and terracotta, one wide shallow tub filled to the rim with steaming water, wooden buckets and a ladle stacked beside it, bare walls with no taps or showers, and a wooden stair rising to an upstairs rest room. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

## Soak — Kinki

### /en/soak/nanki-katsuura/ 本文は「Bōkidō, the cave bath」の節（波が削った海食洞の湯）に置く
**ヒーロー** → 保存名 `nanki-katsuura-hero`

```
Create one image. A fishing port town on a bay dotted with small rocky islets topped with a few trees, tuna fishing boats moored along a quay beside a low market hall, a row of mid-rise hotels along the shore with soft steam rising from a few rooftops, and wooded hills rising behind the town. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `nanki-katsuura-body`

```
Create one image. A wide sea cave carved by waves into a mudstone cliff at the water's edge, its mouth open to the ocean, hot water welling up into a few stone-edged pools on the cave floor, all empty, with thin steam drifting out of the mouth and surf rolling in beneath the opening. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

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

### /en/soak/yufuin/ 本文は「Yunohira’s shared bath」の節（石畳の坂と川沿いの共同浴場）に置く
**ヒーロー** → 保存名 `yufuin-hero`

```
Create one image. A broad basin of farmland and farmhouses at the foot of a large rounded mountain, a small lake in the foreground with mist and steam rising from its surface in the cold morning air, a horse-drawn carriage on a country road lined with small shops, and a small railway station. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yufuin-body`

```
Create one image. A narrow stone-paved slope running beside a small river through a quiet hot spring district, with old wooden inns on both sides behind plain blank curtains, a small communal bathhouse at the bottom of the slope with a curl of steam rising from its roof, and green hills above. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yugawara/ 本文は「The town buys the water」の節（所有者から買って町が配る仕組み）に置く
**ヒーロー** → 保存名 `yugawara-hero`

```
Create one image. A spa town in a green valley along a small river, with a park beside the water where a thatched teahouse stands among trees and a stone monument carved with a poem sits on the grass, a footbath on a terrace beside a small cafe with one pair of feet in it, mandarin orange trees heavy with fruit on the sunny slopes above the town, and a hint of sea at the mouth of the valley. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yugawara-body`

```
Create one image. A schematic bird's-eye view of a small town in a valley: several privately owned spring huts at different spots each send a pipe into one thick main pipe running through the middle of the town, a small junction house where the main pipe is checked by the town's staff, and branch pipes running from there to inn roofs and houses with thin steam rising from them. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yunomine/ 本文は「The yuzutsu」の節（湯筒で卵や野菜をゆでる）に置く
**ヒーロー** → 保存名 `yunomine-hero`

```
Create one image. A tiny hot spring village in a narrow mountain valley, with forested mountains rising steeply on all sides, a small clear river running through, beside it a stone-edged spring well steaming strongly where a wire basket of eggs hangs in the water, a few old wooden inns and a plain public bathhouse with steam rising from its roof, and a stone-paved path where a lone pilgrim in white with a straw hat and a staff, seen from behind, walks away. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yunomine-body`

```
Create one image. A close view of a steaming stone-edged spring well beside a river, where a person in an apron, seen from behind, lowers a wire basket holding eggs and sweet potatoes into the hot water on a rope, with a second basket resting on the stone edge and a wooden bucket beside it. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yunotsu/ 本文は「The tanuki」の節（傷ついたタヌキが湯で癒した話）に置く
**ヒーロー** → 保存名 `yunotsu-hero`

```
Create one image. A small silver-port town in a narrow valley opening onto the sea, with one long street of old wooden houses and inns with tiled roofs running down to a small harbour with a few fishing boats, two bathhouse roofs each with a plume of steam, temple and shrine roofs among the trees on the hillside, and low green headlands closing the bay. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yunotsu-body`

```
Create one image. A travelling monk in plain robes with a staff and a wide straw hat, seen from the side, stops on a forest path to watch an old tanuki, a Japanese raccoon dog, with a limp, soaking one hind leg in a small steaming pond among rocks, with soft mist and gentle light. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

### /en/soak/yunoyama/ 本文は「Food」の節（僧兵鍋）に置く
**ヒーロー** → 保存名 `yunoyama-hero`

```
Create one image. A small hot spring town at the foot of a high forested mountain, with a ropeway cable rising from the town up the mountain with two small gondolas, inns climbing the lower slope with thin steam, a small waterfall and a temple roof among the trees at the edge of town, and rounded ridges of a mountain range behind. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

**本文** → 保存名 `yunoyama-body`

```
Create one image. A big iron pot of hotpot simmering on a charcoal brazier in the middle of a low table, with thick miso broth, slices of boar meat, mushrooms and root vegetables, steam rising, wooden bowls and chopsticks around it, a folded white head cloth of the kind warrior monks wore lying beside the pot, and a window looking out to mountain slopes. Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
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
