/**
 * 日本食の価格基準。サイトの看板になる参照データ。
 *
 * 数値は3種類あり、混ぜない。
 *
 *   official  … 公的統計（総務省統計局 小売物価統計調査）の全国平均。
 *               品目の定義と調査月をそのまま持つ。勝手に丸めない。
 *               **月次で自動更新する**（tools/fetch-food-prices.mjs）
 *   reference … 運営者の基準価格。「日本人の客がその額までなら払う」水準で、
 *               統計に無い品目を埋める。実見なので seenOn が要る。手で更新する
 *   tourist   … 観光地の対面売りで見かける額。出典か実見のどちらかを必ず持つ
 *
 * noFixedPrice は「値段が書かれていない」もの（時価・お通し等）。
 * 空欄ではなく、基準価格が存在しないという情報そのもの。
 *
 * 分類（14大項目・72中項目）は編集上の判断なので手で持つ。
 * 数値のうち official だけが自動で入れ替わる。
 */

import officialData from './food-prices.official.json';

export interface Official {
  jpy: number;
  /** 統計上の品目定義。言い換えない */
  definition: string;
  /** 調査月 YYYY-MM */
  month: string;
  /**
   * どの地域の値か。この調査の API には外食品目の全国平均が無いので、
   * 東京都区部を基準に使う。「全国平均」と名乗らないための記録
   */
  area?: string;
}

export interface PriceEntry {
  name: string;
  nameJa: string;
  /**
   * 公的統計の品目キー。数値そのものは food-prices.official.json にあり、
   * tools/fetch-food-prices.mjs が月次で書き換える。
   * 分類（手書き）と数値（自動）を分けておかないと、更新のたびに
   * 編集上の判断を機械が踏む
   */
  officialKey?: keyof typeof officialData.items;
  official?: Official;
  reference?: {
    jpy: number;
    /** true なら「この額から」。4,000円〜 のような下限を、代表値と混同させない */
    from?: boolean;
    note?: string;
    /** 実見の時点 YYYY-MM */
    seenOn: string;
  };
  tourist?: {
    jpy: number;
    note: string;
    seenOn?: string;
  };
  /** 定価が存在しない種類のもの。数字ではなく仕組みを説明する */
  noFixedPrice?: {
    why: string;
    whatToDo: string;
  };
}

export interface PriceGroup {
  key: string;
  name: string;
  nameJa: string;
  intro: string;
  items: PriceEntry[];
}

export const OFFICIAL_SOURCE = {
  label: 'Retail Price Survey, Statistics Bureau of Japan',
  labelJa: '総務省統計局 小売物価統計調査',
  url: 'https://www.e-stat.go.jp/stat-search/database?layout=dataset&toukei=00200571&statdisp_id=0003421913',
} as const;

/** この額を超えると、日本人の客は「決める」側に回る */
export const HESITATION_LINE = 2000;

export const FOOD_PRICES: PriceGroup[] = [
  {
    key: 'noodles',
    name: 'Noodles',
    nameJa: '麺類',
    intro:
      'The most reliable anchor in Japanese eating out. Everyday food, sold at prices that barely moved for a decade until recently. Somen is left out: it is a summer dish eaten at home, not a restaurant category.',
    items: [
      {
        name: 'Ramen',
        nameJa: 'ラーメン',
        officialKey: 'ramen',
        reference: {
          jpy: 1000,
          note: 'From ¥800 for a plain bowl in Tokyo, about ¥1,000 once you add toppings',
          seenOn: '2026-10',
        },
      },
      {
        name: 'Tsukemen (dipping noodles)',
        nameJa: 'つけ麺',
        reference: { jpy: 900, note: 'Tokyo, a standard bowl', seenOn: '2026-10' },
      },
      { name: 'Soba', nameJa: '日本そば', officialKey: 'soba' },
      { name: 'Udon', nameJa: 'うどん', officialKey: 'udon' },
      {
        name: 'Yakisoba',
        nameJa: '焼きそば',
        reference: { jpy: 600, note: 'Tokyo, as a dish at a restaurant', seenOn: '2026-10' },
      },
      {
        name: 'Standing soba at a station',
        nameJa: '立ち食いそば',
        reference: {
          jpy: 500,
          note: 'The cheapest hot meal on a Japanese platform, and one of the best-value',
          seenOn: '2026-10',
        },
      },
    ],
  },
  {
    key: 'sushi',
    name: 'Sushi',
    nameJa: '寿司',
    intro:
      'The dish every visitor has an opinion about and no reference price for. The survey covers conveyor-belt sushi only, which is itself the useful anchor.',
    items: [
      {
        name: 'Conveyor-belt sushi',
        nameJa: '回転ずし',
        officialKey: 'sushi-kaiten',
        reference: {
          jpy: 2000,
          from: true,
          note: 'A whole meal for one person. The survey figure beside it is for two pieces of tuna, not a bill',
          seenOn: '2026-10',
        },
      },
      {
        name: 'Sushi restaurant, lunch set',
        nameJa: '寿司店のランチ',
        reference: { jpy: 1500, note: 'Less than half what the same counter charges in the evening', seenOn: '2026-10' },
      },
      {
        name: 'Sushi restaurant, dinner',
        nameJa: '寿司店の夜',
        reference: { jpy: 4000, from: true, note: 'And upwards with no ceiling', seenOn: '2026-10' },
      },
      {
        name: 'Standing sushi bar',
        nameJa: '立ち食い寿司',
        reference: { jpy: 2000, from: true, note: 'Standing does not mean cheap here — it means fast, and often very good', seenOn: '2026-10' },
      },
      {
        name: 'Supermarket sushi pack',
        nameJa: '持ち帰りパック寿司',
        reference: { jpy: 1000, from: true, note: 'Half price in the evening at most supermarkets', seenOn: '2026-10' },
      },
    ],
  },
  {
    key: 'rice-bowls',
    name: 'Rice bowls',
    nameJa: '丼もの',
    intro:
      'Where the gap between everyday Japan and tourist Japan opens widest. A seafood bowl has no official figure, which is exactly why its price can be anything.',
    items: [
      { name: 'Gyudon (beef bowl)', nameJa: '牛丼', officialKey: 'gyudon' },
      {
        name: 'Oyakodon (chicken and egg)',
        nameJa: '親子丼',
        reference: { jpy: 780, note: 'Tokyo, a standard shop', seenOn: '2026-10' },
      },
      {
        name: 'Katsudon (pork cutlet)',
        nameJa: 'カツ丼',
        reference: { jpy: 980, note: 'Tokyo, a standard shop', seenOn: '2026-10' },
      },
      {
        name: 'Tendon (tempura)',
        nameJa: '天丼',
        reference: { jpy: 980, note: 'Tokyo, a standard shop', seenOn: '2026-10' },
      },
      {
        name: 'Unaju (eel)',
        nameJa: 'うな重',
        reference: { jpy: 2500, from: true, note: 'Eel is the one everyday dish that is genuinely expensive in Japan', seenOn: '2026-10' },
      },
      {
        name: 'Kaisendon (seafood bowl)',
        nameJa: '海鮮丼',
        reference: {
          jpy: 2000,
          note: 'No official figure exists. Below this, a Japanese customer orders without thinking',
          seenOn: '2026-10',
        },
        tourist: { jpy: 4500, note: 'Kuromon (Osaka) and Nishiki (Kyoto), ¥4,000–5,000', seenOn: '2026-10' },
      },
    ],
  },
  {
    key: 'teishoku',
    name: 'Set meals and washoku',
    nameJa: '定食・和食',
    intro: 'The default lunch for working Japan, and the format where the price tells you most about the place.',
    items: [
      {
        name: 'Grilled fish set',
        nameJa: '焼魚定食',
        reference: { jpy: 1200, from: true, note: 'Rice, soup and pickles included — this is the standard Japanese lunch', seenOn: '2026-10' },
      },
      {
        name: 'Tonkatsu set',
        nameJa: 'とんかつ定食',
        reference: { jpy: 1700, from: true, note: 'Above the ¥2,000 line once you order the better cut', seenOn: '2026-10' },
      },
      {
        name: 'Tempura, counter, lunch',
        nameJa: '天ぷら（カウンターの昼）',
        reference: { jpy: 2000, from: true, note: 'The same counter in the evening is several times this', seenOn: '2026-10' },
      },
      {
        name: 'Sukiyaki, per person',
        nameJa: 'すき焼き（1人前）',
        reference: { jpy: 3500, from: true, note: 'A shared pot, so the figure is per head', seenOn: '2026-10' },
      },
      {
        name: 'Shabu-shabu, per person',
        nameJa: 'しゃぶしゃぶ（1人前）',
        reference: { jpy: 3500, from: true, note: 'Same level as sukiyaki, and usually the same kind of restaurant', seenOn: '2026-10' },
      },
      {
        name: 'Kaiseki course, per person',
        nameJa: '会席・懐石（1人前）',
        reference: {
          jpy: 7000,
          from: true,
          note: 'The floor, not the typical. This is the one category where there is no ceiling and no reference price',
          seenOn: '2026-10',
        },
      },
    ],
  },
  {
    key: 'meat',
    name: 'Meat',
    nameJa: '肉',
    intro:
      'The single most satisfying thing visitors report eating in Japan — ahead of sushi by a factor of two. Also where "wagyu" on a sign stops meaning anything specific.',
    items: [
      { name: 'Yakiniku, per person', nameJa: '焼肉' },
      { name: 'Wagyu steak, lunch', nameJa: '和牛ステーキ（昼）' },
      { name: 'Wagyu steak, dinner', nameJa: '和牛ステーキ（夜）' },
      { name: 'Yakitori, per skewer', nameJa: '焼鳥（1本）' },
      { name: 'Teppanyaki', nameJa: '鉄板焼き' },
      { name: 'Jingisukan (lamb)', nameJa: 'ジンギスカン' },
    ],
  },
  {
    key: 'konamono',
    name: 'Griddle and street food',
    nameJa: '粉もの・B級',
    intro: 'Osaka and Hiroshima food, and the category where a tourist-area version costs triple without tasting better.',
    items: [
      { name: 'Okonomiyaki', nameJa: 'お好み焼き' },
      { name: 'Takoyaki, 6–8 pieces', nameJa: 'たこ焼き' },
      { name: 'Monjayaki', nameJa: 'もんじゃ' },
      { name: 'Kushikatsu, per skewer', nameJa: '串カツ（1本）' },
      { name: 'Gyoza, one plate', nameJa: '餃子' },
    ],
  },
  {
    key: 'nabe',
    name: 'Hotpot and soup',
    nameJa: '鍋・汁物',
    intro: 'Mostly a dinner-for-two-or-more format, which makes the per-person figure the one that matters.',
    items: [
      { name: 'Motsunabe', nameJa: 'もつ鍋' },
      { name: 'Mizutaki', nameJa: '水炊き' },
      { name: 'Oden, per piece', nameJa: 'おでん（1個）' },
      { name: 'Miso soup, as a side', nameJa: '味噌汁' },
    ],
  },
  {
    key: 'izakaya',
    name: 'Izakaya and drinks',
    nameJa: '居酒屋・酒',
    intro:
      'The place visitors most often get a bill they did not expect — usually not because of the food, but because of what was added to it.',
    items: [
      { name: 'Izakaya, per person with drinks', nameJa: '居酒屋1人あたり' },
      {
        name: 'Otoshi (compulsory small dish)',
        nameJa: 'お通し',
        noFixedPrice: {
          why: 'A small dish arrives unordered and a seat charge is added. It is standard practice, not a scam, and it is rarely written in English.',
          whatToDo: 'Expect ¥300–500 per person at most izakaya. You cannot usually decline it.',
        },
      },
      { name: 'Draft beer', nameJa: '生ビール' },
      { name: 'Sake, one go (180ml)', nameJa: '日本酒1合' },
      { name: 'Highball', nameJa: 'ハイボール' },
      { name: 'Shochu', nameJa: '焼酎' },
    ],
  },
  {
    key: 'cafe',
    name: 'Cafes and sweets',
    nameJa: '喫茶・甘味',
    intro: 'Useful for calibrating everything else. A coffee is the cheapest way to learn what a place thinks it is.',
    items: [
      { name: 'Coffee, cafe', nameJa: 'コーヒー（喫茶店）', officialKey: 'coffee' },
      { name: 'Matcha with a sweet', nameJa: '抹茶と和菓子' },
      { name: 'Kakigori (shaved ice)', nameJa: 'かき氷' },
      { name: 'Parfait', nameJa: 'パフェ' },
      { name: 'Crepe', nameJa: 'クレープ' },
    ],
  },
  {
    key: 'takeaway',
    name: 'Takeaway and prepared food',
    nameJa: 'テイクアウト・中食',
    intro:
      'Where Japan is genuinely cheap, and where a long trip saves real money. Also the fairest comparison against a tourist-area stall.',
    items: [
      { name: 'Convenience store onigiri', nameJa: 'コンビニおにぎり' },
      { name: 'Convenience store bento', nameJa: 'コンビニ弁当' },
      { name: 'Ekiben (station bento)', nameJa: '駅弁' },
      { name: 'Department store deli', nameJa: 'デパ地下惣菜' },
      { name: 'Bakery, one item', nameJa: 'パン' },
    ],
  },
  {
    key: 'fastfood',
    name: 'Fast food and chains',
    nameJa: 'ファストフード',
    intro: 'The floor of eating out in Japan, and a useful reminder of how little a meal can cost.',
    items: [
      { name: 'Hamburger', nameJa: 'ハンバーガー', officialKey: 'hamburger' },
      { name: 'Curry rice', nameJa: 'カレーライス', officialKey: 'curry' },
      { name: 'Gyudon chain, regular', nameJa: '牛丼チェーン' },
      { name: 'Family restaurant, lunch', nameJa: 'ファミレスのランチ' },
    ],
  },
  {
    key: 'breakfast',
    name: 'Breakfast',
    nameJa: '朝食',
    intro:
      'The decision long-stay visitors make eleven times. A hotel buffet against a set breakfast outside is the single biggest repeating choice in a two-week trip.',
    items: [
      { name: 'Hotel breakfast buffet', nameJa: 'ホテルの朝食ビュッフェ' },
      { name: 'Japanese set breakfast', nameJa: '和朝食' },
      { name: 'Cafe morning set', nameJa: '喫茶店のモーニング' },
    ],
  },
  {
    key: 'market',
    name: 'Markets and street stalls',
    nameJa: '市場・食べ歩き',
    intro:
      'The same dishes as above, sold where visitors are the customers. The difference is not a premium — it is a different category of purchase.',
    items: [
      {
        name: 'Seafood bowl at a market',
        nameJa: '市場の海鮮丼',
        tourist: { jpy: 4500, note: 'Kuromon, Nishiki, ¥4,000–5,000', seenOn: '2026-10' },
        reference: { jpy: 2000, note: 'The same bowl one street back', seenOn: '2026-10' },
      },
      { name: 'Grilled skewer at a stall', nameJa: '串もの（1本）' },
      { name: 'One item while walking', nameJa: '食べ歩き1品' },
      { name: 'Crab leg, grilled', nameJa: '焼きガニ（1本）' },
    ],
  },
  {
    key: 'no-price',
    name: 'When there is no number',
    nameJa: '値段が書いていないもの',
    intro:
      'The limit of this page. These are the charges that appear at the till rather than on the menu — and the reason a reference price matters most exactly where it does not exist.',
    items: [
      {
        name: 'Jika (market price)',
        nameJa: '時価',
        noFixedPrice: {
          why: 'The menu gives no figure because the wholesale price moves daily. Common for sushi toppings, crab, fugu, lobster, wild-caught fish and matsutake. It is a legitimate practice, not a trick — but it removes your reference point entirely.',
          whatToDo:
            'Ask the price before you order. This is not rude, and Japanese customers do it. "Kore wa jika desu ka? O-ikura desu ka?" — Is this market price? How much is it?',
        },
      },
      {
        name: 'Service charge',
        nameJa: 'サービス料',
        noFixedPrice: {
          why: 'Typically 10–15% added at hotels and higher-end restaurants, stated in small print rather than on the dish price.',
          whatToDo: 'Assume it at any hotel restaurant or ryotei. It is separate from consumption tax.',
        },
      },
      {
        name: 'Seat charge and late-night surcharge',
        nameJa: '席料・深夜割増',
        noFixedPrice: {
          why: 'Some bars add a cover charge, and some add a percentage after 22:00 or midnight.',
          whatToDo: 'Look for a small notice at the entrance or on the menu cover before sitting down.',
        },
      },
      {
        name: 'All-you-can-eat time limit',
        nameJa: '食べ放題の時間制限',
        noFixedPrice: {
          why: 'The headline price covers a fixed window, usually 90 or 120 minutes, with an extension charged separately.',
          whatToDo: 'Check the window when you order, not when you are enjoying yourself.',
        },
      },
    ],
  },
];

/** 分類（手書き）と数値（自動）を合成する。ページはこれだけを見る */
for (const group of FOOD_PRICES) {
  for (const item of group.items) {
    if (item.officialKey) {
      const row = (officialData.items as Record<string, Official>)[item.officialKey];
      if (row) item.official = row;
    }
  }
}

/** 統計の最終更新日。ページに出す */
export const officialUpdatedAt = officialData._updatedAt;

export const totalItems = FOOD_PRICES.reduce((n, g) => n + g.items.length, 0);
export const filledItems = FOOD_PRICES.reduce(
  (n, g) => n + g.items.filter((i) => i.official || i.reference || i.noFixedPrice).length,
  0,
);
/** official を持つ品目の数。自動更新の対象 */
export const officialItems = FOOD_PRICES.reduce((n, g) => n + g.items.filter((i) => i.official).length, 0);
