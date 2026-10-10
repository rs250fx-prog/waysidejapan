# 記事画像のプロンプト（URL ごと）

2026-10-10 作成。対象は origin/main に push 済みの記事のうち公開中の 79 本（下書きの `/en/column/how-japanese-rice-is-actually-cooked/` は除外）。

各記事には **ヒーロー1枚** と **本文1枚以上** が要る（`src/layouts/Article.astro`）。どちらも無いあいだは noimage の仮枠が出る。

## 使い方

1. 下の **共通スタイル** を、各プロンプトの末尾に必ず付ける。
2. サイズはヒーロー・本文とも **3:2、2400×1600px**（最低 2000×1333px）。根拠は `src/lib/images.ts` の `articleHero`。
3. 絵の中に文字を入れない。図解で文字が要るときは、`<Figure transcript>` に同じ文言を持たせる。
4. これらは **イラスト**。「Photographed myself」の約束は写真に対するものなので、写真風（photorealistic）には寄せない。
5. 入れ方
   - **ヒーロー**：画像を `src/assets/<category>/` に置き、frontmatter に `heroImage` と `heroAlt` を書く。
   - **本文**：`<Figure src alt caption>` を、2つ目の見出しの直前あたりに置く。本文に1枚入ると仮枠は自動で消える。

### 共通スタイル（毎回末尾に付ける）

```
Style: editorial ink-line illustration with flat muted watercolor washes, warm cream paper background (#F7F1E8), accent terracotta (#B8502E), deep brown linework, limited palette, subtle paper grain, calm and observational like a field notebook. 3:2 landscape, 2400x1600. No text, no letters, no numbers, no logos, no signage lettering, not photorealistic.
```

ヒーローは、見出しの下に横いっぱいで出る。主題を中央からやや右に置き、周りに余白を残すと収まりがいい。

---

## Column

### /en/column/eating-while-walking-in-japan/
- **ヒーロー**：`A quiet old shopping street in Kamakura with a small food stall; a visitor stands just beside the stall eating a skewer, other people walk past without eating; a single public bin is notably absent, wooden storefronts and a temple roof in the distance.`
- **本文**：`Side-by-side comparison scene: on the left a person eating a snack while walking through a crowd, on the right the same person standing still next to the shop where they bought it, holding the wrapper; small icons of a bin and a pocket bag between them.`

### /en/column/how-meal-ticket-machines-work/
- **ヒーロー**：`A meal ticket vending machine at the entrance of a small Japanese noodle shop, rows of blank buttons with small food pictures, a customer feeding a banknote in, the counter and steam visible behind.`
- **本文**：`Three-step sequence in one picture: choosing a button on a ticket machine, handing the paper ticket to the cook over the counter, a bowl of noodles arriving; arrows between the steps drawn as simple lines.`

### /en/column/reading-menu-prices-in-japan/
- **ヒーロー**：`A wooden restaurant table with a printed menu, a small bill tray with a folded receipt, a glass of water and a cash tray; no tip jar anywhere; warm restaurant interior softly behind.`
- **本文**：`Close view of a restaurant bill on a tray broken into stacked blank lines, with small symbolic icons beside each line: a coin for the price, a small percent sign shape for tax, a chair for a seating charge, a fish for market price; no readable text.`

### /en/column/tourist-prices-at-famous-markets/
- **ヒーロー**：`A crowded covered food market street with seafood bowls displayed in front of stalls, tourists queueing; in the foreground, a local quietly turning into a side street toward a plain small diner.`
- **本文**：`Two seafood rice bowls side by side on a counter: one large, decorated and heaped with crab and sea urchin as sold at a famous market, the other a simple everyday bowl from a neighborhood restaurant; a small scale balance drawn between them.`

## Eat — Konbini

### /en/eat/conbini/
- **ヒーロー**：`The interior of a Japanese convenience store at night: a wall of rice balls and sandwiches in a chilled shelf, a hot-food case by the counter, a microwave, a clerk at the register, bright but calm.`
- **本文**：`A shopper at a convenience store register paying by tapping a card, a basket with a rice ball, a bottle of tea and a bento on the counter, the clerk offering to heat the bento; view from the side.`

### /en/eat/conbini-oden/
- **ヒーロー**：`A steaming oden pot beside a convenience store counter, divided compartments holding daikon, eggs, fish cakes and konjac in clear broth, a ladle and a stack of paper cups next to it, winter coats in the background.`
- **本文**：`A paper cup of oden seen from above with daikon, a boiled egg and fish cake, a small packet of mustard and wooden chopsticks beside it; three small regional variations drawn around it: one with miso sauce, one with dark broth, one with ginger.`

### /en/eat/conbini-onigiri/
- **ヒーロー**：`Several triangular rice balls in plastic wrap on a convenience store shelf, nori sealed separately inside the wrapper, a hand reaching to pick one.`
- **本文**：`Three-step diagram of opening a convenience store onigiri: pulling the center tab down, pulling the left side, pulling the right side, the nori wrapping crisp around the rice at the end; drawn as three hands in sequence.`

## Eat — Dashi

### /en/eat/dashi/
- **ヒーロー**：`A pot of clear golden dashi on a stove, a sheet of dried kombu and a pile of shaved bonito flakes beside it on a wooden board, a ladle lifting the broth.`
- **本文**：`An arrangement of dashi ingredients laid out like a specimen chart: kombu, bonito flakes, dried shiitake, dried sardines, dried flying fish; each separated with space, no labels.`

### /en/eat/dashi-east-west/
- **ヒーロー**：`Two bowls of udon side by side: the left with a pale, clear kombu broth (Kansai), the right with a darker soy and bonito broth (Kanto); a simple outline of Japan's main island behind them, split in the middle.`
- **本文**：`Two tidy piles side by side on a wooden counter: kombu sheets on the left, bonito flakes and a dried katsuobushi block with a shaving box on the right; a gentle arrow between them suggesting east and west.`

### /en/eat/dashi-iriko-ago/
- **ヒーロー**：`A small heap of dried sardines (iriko) and a few dried flying fish (ago) on a bamboo tray, a bowl of Sanuki udon in pale broth beside them, sea and islands of the Inland Sea faintly behind.`
- **本文**：`A flying fish in flight over the sea, and below it the same fish grilled and dried on a rack; a bowl of Kyushu-style clear soup at the bottom corner.`

## Eat — Donburi

### /en/eat/donburi/
- **ヒーロー**：`Four Japanese rice bowl dishes on a wooden counter: gyudon, katsudon, oyakodon and tendon, each in a lidded donburi bowl with the lid set beside it.`
- **本文**：`A cross-section of a donburi bowl showing layers: rice at the bottom, sauce soaking in, toppings on top, the lid above; drawn as a clean cutaway.`

### /en/eat/donburi-gyudon/
- **ヒーロー**：`A bowl of gyudon at a counter chain shop: thin simmered beef and onion over rice, a small bowl of miso soup and a raw egg beside it, a counter seat and a pot of pickled ginger.`
- **本文**：`An early-morning fish market scene with workers in boots eating beef bowls quickly at a tiny standing counter, crates of fish around them.`

### /en/eat/donburi-katsudon/
- **ヒーロー**：`A bowl of katsudon: a sliced pork cutlet simmered with egg and onion over rice, steam rising, chopsticks resting on the bowl.`
- **本文**：`Two katsudon bowls side by side: on the left the egg-simmered version, on the right a sauce katsudon with the cutlet dipped in dark Worcestershire-style sauce over shredded cabbage.`

## Eat — Gyoza

### /en/eat/gyoza/
- **ヒーロー**：`A plate of pan-fried gyoza fanned out with crisp golden bottoms facing up, a small dish of soy-vinegar dipping sauce with chili oil, a bowl of white rice beside it, chopsticks on a ceramic rest.`
- **本文**：`Two plates side by side: Chinese boiled dumplings served in a bowl as a meal on the left, Japanese pan-fried gyoza next to a bowl of rice on the right.`

### /en/eat/gyoza-hamamatsu/
- **ヒーロー**：`Hamamatsu-style gyoza: dumplings arranged in a circle in a frying pan like a wheel, a mound of boiled bean sprouts in the center, viewed from above.`
- **本文**：`A cook flipping a round pan of gyoza onto a plate in one motion, the circular arrangement intact, bean sprouts being added to the middle.`

### /en/eat/gyoza-utsunomiya/
- **ヒーロー**：`A small gyoza shop counter in Utsunomiya with plates of fried and boiled gyoza, a gyoza-shaped stone statue faintly visible outside the window.`
- **本文**：`Three plates of gyoza in a row: pan-fried, boiled in water, and deep-fried; each with its own dipping sauce dish.`

## Eat — Izakaya

### /en/eat/izakaya/
- **ヒーロー**：`The entrance of a small Japanese izakaya at evening: a red paper lantern, a short split curtain at the door, warm light inside and a counter with a few customers.`
- **本文**：`Inside an izakaya from the counter: a cook grilling, small plates arriving, glasses of beer being raised, a menu board shown as blank wooden tags on the wall.`

### /en/eat/izakaya-otoshi/
- **ヒーロー**：`A small dish of otoshi (a seasonal appetizer) placed on a wooden izakaya counter beside a freshly poured glass of beer and a folded hot towel, before anything has been ordered.`
- **本文**：`Five different otoshi dishes in small bowls arranged in a row: simmered vegetables, edamame, a tiny salad, pickles and a small piece of fish.`

### /en/eat/izakaya-yakitori/
- **ヒーロー**：`Yakitori skewers on a charcoal grill, smoke rising, a cook's hand brushing tare sauce; some skewers salted, some glazed.`
- **本文**：`A tray of yakitori skewers laid out in a row showing different cuts: thigh with leek, skin, liver, heart, meatball and wings; two small dishes for salt and tare beside them.`

## Eat — Konamono

### /en/eat/konamono/
- **ヒーロー**：`A hot iron griddle with an okonomiyaki, a pan of takoyaki balls, and a wooden board of soft Akashi-yaki with a small bowl of dashi, all seen from above.`
- **本文**：`A bag of wheat flour in the center with three lines leading out to an okonomiyaki, takoyaki and Akashi-yaki; a simple family-tree layout without words.`

### /en/eat/konamono-okonomiyaki/
- **ヒーロー**：`Okonomiyaki on a teppan griddle, brown sauce and mayonnaise drizzled in a lattice, bonito flakes dancing, two small metal spatulas.`
- **本文**：`Cross-sections of two okonomiyaki side by side: Osaka style with batter and cabbage mixed together, Hiroshima style built in stacked layers with noodles in the middle.`

### /en/eat/konamono-takoyaki/
- **ヒーロー**：`A street stall cook turning takoyaki in a cast-iron pan with picks, steam rising, a boat-shaped paper tray of finished takoyaki with sauce and bonito flakes.`
- **本文**：`A wooden board of soft, egg-rich Akashi-yaki dumplings next to a small bowl of dashi for dipping, with one dumpling being dipped by chopsticks; the Akashi Strait bridge faintly in the background.`

## Eat — Market

### /en/eat/market/
- **ヒーロー**：`A Japanese fish market at early morning: styrofoam crates of fish on ice, rubber-booted workers, a forklift cart, and a small queue outside a seafood bowl shop.`
- **本文**：`A seafood rice bowl seen from above: salmon roe, tuna, sea urchin, crab and egg on rice, a small dish of soy sauce and wasabi.`

### /en/eat/market-omicho-hakodate/
- **ヒーロー**：`A town market arcade with crab and squid displays on ice, a stall owner handing over a bowl; snow on the roof edges outside the entrance.`
- **本文**：`At a Hakodate morning market, a visitor fishing a live squid from a tank with a short rod, the squid then served as translucent sashimi on a plate.`

### /en/eat/market-toyosu/
- **ヒーロー**：`A modern, clean wholesale fish market hall with rows of whole tuna on the floor, buyers inspecting them; seen from a visitor gallery behind glass.`
- **本文**：`Split view: on one side the closed wholesale floor seen through an observation window, on the other side an open food court next door where visitors eat sushi at a counter.`

## Eat — Ramen

### /en/eat/ramen/
- **ヒーロー**：`A bowl of ramen at a counter: noodles in soup with chashu, a soft egg, nori and green onion, steam rising, a ticket machine faintly behind.`
- **本文**：`Four ramen bowls in a row showing the main soup types: clear soy, miso with corn and butter, milky white tonkotsu, and pale salt; viewed from slightly above.`

### /en/eat/ramen-hakata/
- **ヒーロー**：`A bowl of Hakata ramen with very thin straight noodles in milky white pork broth, pickled red ginger and sesame on the counter, a yatai stall roof faintly behind.`
- **本文**：`A server pouring a fresh portion of thin noodles (kaedama) into a customer's remaining soup at a ramen counter.`

### /en/eat/ramen-iekei/
- **ヒーロー**：`A bowl of Yokohama iekei ramen: thick noodles in a brown pork-and-soy broth, spinach, three large sheets of nori standing at the edge, a slice of chashu.`
- **本文**：`A small blank order slip with three rows of circles to tick (noodle firmness, richness, oil), a pencil beside it, and a bowl of iekei ramen behind; no readable text.`

### /en/eat/ramen-kagoshima/
- **ヒーロー**：`A bowl of Kagoshima ramen with a cloudy pork broth, thin noodles, bean sprouts and fried onion; a small plate of pickled daikon and a cup of tea served beside it.`
- **本文**：`A ramen shop table where pickles and green tea are already set out before the bowl arrives, a customer picking up a piece of pickle while waiting; Sakurajima volcano through the window.`

### /en/eat/ramen-kitakata/
- **ヒーロー**：`A bowl of Kitakata ramen with wide wavy noodles in clear soy broth, layers of chashu covering the surface; a morning street of old storehouses with white walls outside the window.`
- **本文**：`An early-morning ramen shop with a few customers eating bowls at 7 in the morning, sunlight low through the door, a clock with its hands pointing to seven.`

### /en/eat/ramen-kumamoto/
- **ヒーロー**：`A bowl of Kumamoto ramen: milky tonkotsu broth with dark black garlic oil swirled on top, medium noodles, chashu and wood ear mushroom.`
- **本文**：`A small pan of garlic being slowly fried until black in oil, and the oil being drizzled over a white ramen broth.`

### /en/eat/ramen-kurume/
- **ヒーロー**：`A large cauldron of pork bone broth simmering in a Kurume ramen shop kitchen, a cook stirring with a long paddle, steam filling the room.`
- **本文**：`A cook topping up an old cauldron of broth with fresh bones and water, the level kept full instead of emptied; a ladle filling a bowl beside it.`

### /en/eat/ramen-sapporo/
- **ヒーロー**：`A bowl of Sapporo miso ramen topped with stir-fried bean sprouts, corn, a pat of butter and ground pork, snow falling outside a steamy window.`
- **本文**：`A cook tossing bean sprouts and ground pork in a wok, then adding miso and broth to the same wok before pouring it over noodles.`

### /en/eat/ramen-tokyo-shoyu/
- **ヒーロー**：`A classic Tokyo shoyu ramen: clear brown soy broth, curly thin noodles, a slice of chashu, menma, a naruto fish cake slice and spinach.`
- **本文**：`A family tree drawn as branching noodles: one clear soy ramen bowl at the root, with branches leading to miso, tonkotsu and other bowls; no words.`

## Eat — Sake

### /en/eat/sake/
- **ヒーロー**：`A sake bottle and a small ceramic tokkuri with two cups on a wooden counter, one cup warm with faint steam, one cold with condensation.`
- **本文**：`A row of sake vessels showing serving temperatures: a cold glass in an ice bucket, a room-temperature cup, a warm tokkuri in a small pot of hot water.`

### /en/eat/sake-nada-fushimi/
- **ヒーロー**：`A row of old sake breweries with dark wooden walls and white plaster in Fushimi, a canal with a small wooden boat, a ball of cedar leaves hanging at the brewery door.`
- **本文**：`A spring of clear water flowing from a stone spout outside a brewery, a person filling a bottle, brewery buildings behind.`

### /en/eat/sake-niigata/
- **ヒーロー**：`A sake brewery in deep snow in Niigata, steam rising from the roof, rice fields buried white around it, mountains behind.`
- **本文**：`A tasting corner with a long row of small sake vending dispensers, a visitor holding a tiny tasting cup; drawn without readable labels.`

## Eat — Soba

### /en/eat/soba/（本文の2枚はそのまま。ヒーローのみ）
- **ヒーロー**：`A quiet soba shop counter: a bamboo tray of cold soba noodles, a cup of dipping sauce, a small plate of green onion and wasabi, and a red lacquer pot of soba-yu; a buckwheat field in white flower seen through the window.`

### /en/eat/soba-edo/
- **ヒーロー**：`A traditional Tokyo soba house interior with tatami seating and a wooden lattice, a lacquered tray of cold soba, a cup of dark dipping sauce.`
- **本文**：`A pair of chopsticks lifting soba noodles and dipping only the lower half into dark sauce; beside it, a small standing soba counter at a station with a customer eating quickly.`

### /en/eat/soba-izumo/
- **ヒーロー**：`Izumo warigo soba: three round red lacquer dishes stacked with dark whole-grain soba, toppings of grated daikon, seaweed and green onion.`
- **本文**：`A hand pouring dipping sauce directly onto the top dish of stacked red lacquer soba dishes, then pouring the leftover sauce into the next dish down.`

### /en/eat/soba-togakushi/
- **ヒーロー**：`Five small bundles of soba arranged on a round bamboo tray, a cedar forest and a mountain shrine gate in mist behind.`
- **本文**：`A cook arranging soba into small horseshoe-shaped bundles on a bamboo tray one by one.`

### /en/eat/soba-wanko/
- **ヒーロー**：`Wanko soba: a server standing beside a diner, tossing a small mouthful of soba into the diner's bowl, a stack of empty little bowls growing on the table.`
- **本文**：`A diner closing the lid on a small bowl to signal they are finished, the server pausing with the next serving in hand.`

## Eat — Sushi

### /en/eat/sushi/
- **ヒーロー**：`A sushi counter with a chef pressing nigiri, pieces of tuna, sea bream and shrimp on a wooden geta board, a cup of green tea.`
- **本文**：`A timeline drawn as a row of objects: a fermented fish in a jar, a pressed sushi box, a street stall with nigiri, a conveyor belt, an upscale counter; no words.`

### /en/eat/sushi-edomae/
- **ヒーロー**：`An Edomae sushi counter seen from the guest seat: the chef's hands, a cypress counter, nigiri of cured gizzard shad and marinated tuna.`
- **本文**：`The preparation behind "raw" fish: a fish fillet being salted, rinsed in vinegar, marinated in soy, and lightly simmered; four small trays side by side.`

### /en/eat/sushi-funa/
- **ヒーロー**：`Slices of funa-zushi with orange roe showing on a small plate, a wooden fermentation barrel and Lake Biwa with reeds behind.`
- **本文**：`Cutaway of a wooden barrel with layers of crucian carp packed in rice under a heavy stone weight, fermenting.`

### /en/eat/sushi-kaiten/
- **ヒーロー**：`A conveyor belt sushi restaurant with colorful plates circling past a row of seated customers, a touch-screen order panel at the table, a tea tap.`
- **本文**：`A beer bottling line conveyor in an old Osaka brewery, its motion echoed by a sushi conveyor belt drawn beside it.`

### /en/eat/sushi-kakinoha/
- **ヒーロー**：`Kakinoha-zushi: small rectangles of salted mackerel on rice, each wrapped in a green persimmon leaf, packed neatly in a wooden box; mountain village houses behind.`
- **本文**：`Hands wrapping a piece of mackerel sushi in a persimmon leaf, a pile of fresh leaves and pressed rice beside them.`

### /en/eat/sushi-kanazawa/
- **ヒーロー**：`A sushi counter in Kanazawa with nigiri of local fish like blackthroat seaperch and sweet shrimp, the Sea of Japan seen through the window.`
- **本文**：`A conveyor sushi shop where the belt is stopped and a chef takes orders directly, handing plates across the counter.`

### /en/eat/sushi-masu/
- **ヒーロー**：`Masu-zushi: a round wooden container lined with bamboo leaves, a cake of pink trout over rice, a slice cut out; a railway platform faintly behind.`
- **本文**：`A train station kiosk with round wooden masu-zushi containers stacked on the counter, a traveler buying one before boarding.`

### /en/eat/sushi-osaka-hako/
- **ヒーロー**：`Osaka box sushi: a neat rectangular block of pressed rice topped with shrimp, sea bream and egg, cut into squares on a wooden board.`
- **本文**：`A wooden press box being filled with rice and toppings, the lid being pressed down, and the block coming out cleanly.`

### /en/eat/sushi-saba/
- **ヒーロー**：`Kyoto saba-zushi: a whole cured mackerel laid over a log of rice wrapped in kombu, sliced, on a lacquer plate; a Kyoto townhouse lattice behind.`
- **本文**：`A traveler on an old mountain road carrying salted mackerel on a frame on their back toward Kyoto, wooded hills around them.`

## Eat — Teishoku

### /en/eat/teishoku/
- **ヒーロー**：`A teishoku set meal on a tray: rice, miso soup, grilled fish, pickles and a small side dish, viewed from above.`
- **本文**：`A server refilling a customer's rice bowl from a wooden rice tub at a set-meal restaurant.`

### /en/eat/teishoku-morning/
- **ヒーロー**：`A Nagoya coffee shop table with a cup of coffee, a thick slice of toast with sweet red bean paste, a boiled egg, served together in the morning light.`
- **本文**：`A chain beef-bowl restaurant breakfast set on a tray: rice, miso soup, grilled salmon, a raw egg and nori.`

### /en/eat/teishoku-washoku-breakfast/
- **ヒーロー**：`A traditional Japanese breakfast at an inn: rice, miso soup, grilled fish, rolled omelet, natto, pickles and small dishes on a lacquer tray, morning light from a paper window.`
- **本文**：`A guest at a ryokan seated on a cushion, lifting the lid of a miso soup bowl, many small breakfast dishes arranged in front of them.`

## Eat — Tonkatsu

### /en/eat/tonkatsu/
- **ヒーロー**：`A tonkatsu set: a sliced golden pork cutlet, a mound of shredded cabbage, rice, miso soup and a pot of thick sauce.`
- **本文**：`A pork loin cutlet and a fillet cutlet sliced side by side, showing the difference in fat; a bowl of sesame seeds being ground in a mortar beside them.`

### /en/eat/tonkatsu-kushikatsu/
- **ヒーロー**：`A plate of kushikatsu skewers at an Osaka counter, a shared stainless steel pot of thin sauce in front, raw cabbage leaves on the side, Tsutenkaku tower faintly through the window.`
- **本文**：`A customer dipping a skewer into a shared sauce pot once, then using a cabbage leaf to scoop more sauce onto the skewer instead of dipping again.`

### /en/eat/tonkatsu-miso-katsu/
- **ヒーロー**：`Miso-katsu: a pork cutlet covered in thick dark red bean-miso sauce on a sizzling iron plate, with cabbage.`
- **本文**：`Three ways miso-katsu is served side by side: sauce poured over a plate of cutlet, a cutlet dipped into a pot of miso sauce, and miso-katsu on rice as a bowl.`

## Eat — Udon

### /en/eat/udon/
- **ヒーロー**：`A bowl of hot udon with thick white noodles in clear broth, green onion, a slice of fish cake and tempura bits.`
- **本文**：`Three udon bowls from different regions in a row: thick firm Sanuki udon, soft Hakata udon with burdock tempura, and Osaka kitsune udon with fried tofu.`

### /en/eat/udon-hakata/
- **ヒーロー**：`A bowl of soft Hakata udon with a large burdock tempura stick on top, clear broth, a small udon shop counter.`
- **本文**：`A cook cutting burdock into thin sticks and frying them into a crisp tempura fan.`

### /en/eat/udon-osaka/
- **ヒーロー**：`Osaka kitsune udon: a sheet of sweet simmered fried tofu floating on pale kelp broth over soft noodles.`
- **本文**：`Two bowls compared: a Kansai "tanuki" with fried tofu over soba, and a Kanto "tanuki" with tempura bits over udon; placed side by side.`

### /en/eat/udon-sanuki/
- **ヒーロー**：`A self-service Sanuki udon shop: a customer dipping noodles in a strainer into hot water, trays and tempura on a counter, rice fields of Kagawa outside.`
- **本文**：`A pair of hands kneading udon dough by stepping on it wrapped in cloth, and then rolling and cutting it into thick noodles.`

## Eat — Unagi

### /en/eat/unagi/
- **ヒーロー**：`An unadon in a lacquered box: grilled eel glazed in sweet sauce over rice, a small dish of sansho pepper and a bowl of clear eel liver soup.`
- **本文**：`Three lacquer eel boxes of increasing size in a row, showing the grades by how much eel covers the rice.`

### /en/eat/unagi-kansai/
- **ヒーロー**：`Hitsumabushi: grilled eel chopped over rice in a round wooden tub, with condiments and a small pot of dashi beside it.`
- **本文**：`An eel being opened along the belly and grilled directly over charcoal without steaming, crisp on the outside.`

### /en/eat/unagi-kanto/
- **ヒーロー**：`A Tokyo eel restaurant with a cook fanning skewered eel over charcoal, smoke rising, a lacquer box of soft glazed eel ready on the counter.`
- **本文**：`Three steps of Kanto-style eel: opening it along the back, steaming the fillets in a bamboo basket, then glazing and grilling them over charcoal.`

## Eat — Wagashi

### /en/eat/wagashi/
- **ヒーロー**：`An assortment of seasonal wagashi on a lacquer tray: a cherry blossom nerikiri, a chestnut sweet, a translucent summer jelly, beside a bowl of matcha.`
- **本文**：`Four wagashi representing the four seasons in a row: a pink spring blossom, a blue summer water jelly, an orange autumn leaf, a white winter snow sweet.`

### /en/eat/wagashi-imagawayaki/
- **ヒーロー**：`A street stall griddle with rows of round imagawayaki cakes being filled with sweet red bean paste, a paper bag of finished cakes.`
- **本文**：`A cut imagawayaki showing the red bean filling, with a simple outline map of Japan behind showing different regions in different colors.`

### /en/eat/wagashi-yokan/
- **ヒーロー**：`A bar of dark red bean yokan sliced on a small plate, a cup of green tea, the wrapped bar beside it.`
- **本文**：`A historical scene of a soldier's ration pack including bars of yokan, drawn next to a modern wrapped bar of yokan; no words.`

## Eat — Wagyu

### /en/eat/wagyu/
- **ヒーロー**：`A raw marbled wagyu steak on a wooden board, a black Japanese cow grazing in a green valley behind.`
- **本文**：`Three slices of beef side by side showing increasing marbling, from lightly marbled to very heavily marbled, drawn like a specimen chart.`

### /en/eat/wagyu-kobe/
- **ヒーロー**：`A teppanyaki chef searing a thick Kobe beef steak on a hot iron plate, garlic chips crisping, the Kobe harbor at dusk through the window.`
- **本文**：`A small bronze cow statue in a restaurant window, with a certificate frame shown as a blank decorated document beside it.`

### /en/eat/wagyu-matsusaka/
- **ヒーロー**：`A pot of Matsusaka beef sukiyaki on a table in a traditional room, thin marbled slices of beef laid in the pot, raw egg in a small bowl.`
- **本文**：`Black cattle grazing in a quiet valley surrounded by hills, a farmer brushing one of them.`

### /en/eat/wagyu-omi/
- **ヒーロー**：`Ōmi beef steak on a plate, Lake Biwa and a castle town faintly behind.`
- **本文**：`A historical scene: a lacquer box of preserved beef being presented at the shogun's court as medicine; drawn in a classical style.`

### /en/eat/wagyu-shabu/
- **ヒーロー**：`Shabu-shabu: a pair of chopsticks swishing a thin slice of wagyu in a pot of boiling kombu broth, a plate of vegetables and tofu beside it.`
- **本文**：`A shabu-shabu table with two small dipping bowls of sesame sauce and ponzu, plates of thin beef being brought in as refills.`

### /en/eat/wagyu-sukiyaki/
- **ヒーロー**：`A cast-iron sukiyaki pan with marbled beef, tofu, leek, mushrooms and shirataki simmering in sweet soy broth, a raw egg for dipping.`
- **本文**：`Two sukiyaki pans side by side: Kanto style with a pre-mixed broth poured in, Kansai style with beef seared first, then sugar and soy added directly.`

### /en/eat/wagyu-tajima/
- **ヒーロー**：`A black Tajima cow standing in a mountain pasture in northern Hyogo, terraced hills and a farmhouse behind.`
- **本文**：`A family tree of cattle drawn as branching lines from one Tajima cow at the root, leading to many calves; no names.`

### /en/eat/wagyu-yakiniku/
- **ヒーロー**：`A yakiniku table with a smokeless grill in the center, slices of beef cooking, small dishes of sauce, an extraction hood above.`
- **本文**：`A grill at a postwar black market stall with offal cooking on it, people standing around; and beside it a modern smokeless table grill; no words.`

### /en/eat/wagyu-yonezawa/
- **ヒーロー**：`Yonezawa beef steak on a plate, snowy mountains of Yamagata outside a window.`
- **本文**：`A Meiji-era scene: an English teacher leading a black cow down a road toward a port, wooden houses around them.`

## Eat — Yatai

> **メモ**：この3本は作成時点で未 push（手元にのみある記事）。先回りで用意した。

### /en/eat/yatai/
- **ヒーロー**：`A row of yatai food stalls along a river at night with lanterns glowing, customers seated at small counters, steam rising.`
- **本文**：`Inside a yatai stall: a narrow counter with six stools, a cook serving ramen and grilled skewers, customers shoulder to shoulder.`

### /en/eat/yatai-hakata/
- **ヒーロー**：`Hakata yatai stalls along the Naka River at night, reflections of lights on the water, a stall with a bowl of ramen being served.`
- **本文**：`A yatai stall being set up in the early evening: a cart being wheeled in, an awning unfolded, stools placed around the counter.`

### /en/eat/yatai-matsuri/
- **ヒーロー**：`A Japanese summer festival with a lane of food stalls under strings of lanterns: yakisoba, candied apples, shaved ice, people in yukata.`
- **本文**：`A child in a yukata holding a candied apple and a cup of shaved ice, stall awnings and lanterns above.`

## Rail

> **メモ**：`setouchi-area-pass` は `basis: visited` の記事。ヒーローは、ご自身が撮った写真のほうが記事の根拠と合う。写真が用意できるまで、下のイラストで仮置きする。

### /en/rail/kansai-12-days-setouchi/
- **ヒーロー**：`A train running along the coast of the Seto Inland Sea, small islands and bridges in the background, a calm sea under a soft sky.`
- **本文**：`A simple illustrated route along the Inland Sea drawn as a line connecting small station dots, with tiny icons of a castle, a torii gate and a bridge along the way; no names.`

### /en/rail/kix-to-hiroshima/
- **ヒーロー**：`Kansai Airport with an airport express train in the foreground and a plane taking off behind, a long bridge across the sea.`
- **本文**：`Three options for travelling drawn side by side: a bullet train, a highway bus and a regional train, each with a small clock beside it.`

### /en/rail/setouchi-area-pass/
- **ヒーロー**：`A regional train crossing a bridge with the Seto Inland Sea and islands behind it, a paper rail pass shown as a blank card in the foreground corner.`
- **本文**：`A traveller at a station ticket gate showing a rail pass to a staff member, a train waiting at the platform beyond.`
