/**
 * 食の物価データ（src/data/food-prices.ts と food-prices.chain.json）の表示文言の上書き表。
 * 原本は英語で、元のファイルに残す。`en` は元のファイルから作る（二重に持たない）。
 *
 *   groups … 分類。キーは group.key。name / intro
 *   items  … 品目。キーは英語名から作った id（idOf(name)）。name と、あれば referenceNote / touristNote / context / why / whatToDo
 *   chains … チェーン価格の注記。キーは chainKey。what と、あれば note、チェーン名ごとの注記 chainNotes
 *
 * 翻訳しないもの：日本語名（nameJa）、統計の品目定義（official.definition）と地域、チェーン名、商品名、URL、数値、日付。
 * 無い言語・項目は英語に落ちる。
 */
import type { Locale } from '../../config.ts';
import { FOOD_PRICES, type ChainItem, type PriceEntry, type PriceGroup } from '../../data/food-prices.ts';
import chainData from '../../data/food-prices.chain.json' with { type: 'json' };
import { idOf } from '../index.ts';

export interface GroupText {
  name: string;
  intro: string;
}
export interface ItemText {
  name: string;
  referenceNote?: string;
  touristNote?: string;
  context?: string;
  why?: string;
  whatToDo?: string;
}
export interface ChainText {
  what: string;
  note?: string;
  chainNotes?: Record<string, string>;
}
export interface FoodPricesText {
  groups: Record<string, GroupText>;
  items: Record<string, ItemText>;
  chains: Record<string, ChainText>;
}

const defined = <T extends object>(o: T): T => Object.fromEntries(Object.entries(o).filter(([, v]) => v !== undefined)) as T;

const en: FoodPricesText = {
  groups: Object.fromEntries(FOOD_PRICES.map((g) => [g.key, { name: g.name, intro: g.intro }])),
  items: Object.fromEntries(
    FOOD_PRICES.flatMap((g) =>
      g.items.map((i) => [
        idOf(i.name),
        defined({
          name: i.name,
          referenceNote: i.reference?.note,
          touristNote: i.tourist?.note,
          context: i.context,
          why: i.noFixedPrice?.why,
          whatToDo: i.noFixedPrice?.whatToDo,
        }),
      ]),
    ),
  ),
  chains: Object.fromEntries(
    Object.entries(chainData.items as Record<string, ChainItem>).map(([key, c]) => {
      const chainNotes = Object.fromEntries(c.chains.filter((p) => p.note).map((p) => [p.chain, p.note as string]));
      return [key, defined({ what: c.what, note: c.note, chainNotes: Object.keys(chainNotes).length ? chainNotes : undefined })];
    }),
  ),
};
const ko: FoodPricesText = {
  groups: {
    noodles: {
      name: '면 요리',
      intro:
        '일본 외식에서 가장 믿을 만한 기준점입니다. 일상의 음식이고, 최근까지 10년 가까이 가격이 거의 움직이지 않았습니다. 소면은 뺐습니다. 집에서 먹는 여름 음식이지 식당의 분류가 아니기 때문입니다.',
    },
    sushi: {
      name: '초밥',
      intro:
        '방문객 누구나 의견은 있지만 기준 가격은 모르는 음식입니다. 통계는 회전초밥만 다루는데, 그것이 오히려 쓸모 있는 기준점입니다.',
    },
    'rice-bowls': {
      name: '덮밥',
      intro:
        '일상의 일본과 관광지의 일본이 가장 크게 벌어지는 곳입니다. 해산물 덮밥에는 공식 수치가 없고, 그래서 가격이 얼마든 될 수 있습니다.',
    },
    teishoku: {
      name: '정식·일식',
      intro: '일하는 일본의 기본 점심이며, 가격이 그 가게에 대해 가장 많은 것을 알려 주는 형식입니다.',
    },
    meat: {
      name: '고기',
      intro:
        '방문객이 일본에서 먹은 것 중 가장 만족스러웠다고 꼽는 음식으로, 초밥보다 두 배 많습니다. 간판의 “와규”가 아무 구체적인 뜻도 갖지 않게 되는 곳이기도 합니다. 철판구이는 뺐습니다. 실제로는 와규 스테이크와 같은 소비이기 때문입니다.',
    },
    konamono: {
      name: '철판 밀가루 요리·길거리 음식',
      intro: '오사카와 히로시마의 음식이며, 관광지 버전이 맛은 더 낫지 않은데 세 배를 받는 분류입니다.',
    },
    nabe: {
      name: '전골·국물 요리',
      intro: '대부분 둘 이상이 함께하는 저녁 형식이어서, 중요한 것은 1인당 금액입니다.',
    },
    izakaya: {
      name: '이자카야·술',
      intro: '방문객이 예상하지 못한 계산서를 가장 자주 받는 곳입니다. 대개 음식 때문이 아니라 거기에 더해진 것 때문입니다.',
    },
    cafe: {
      name: '카페·디저트',
      intro: '다른 모든 것의 눈높이를 맞추는 데 쓸모가 있습니다. 커피 한 잔은 그 가게가 스스로를 어떻게 생각하는지 가장 싸게 알아보는 방법입니다.',
    },
    takeaway: {
      name: '포장·조리식품',
      intro: '일본이 정말로 저렴한 곳이며, 긴 여행에서 실제로 돈을 아낄 수 있는 곳입니다. 관광지 노점과 비교하기에도 가장 공정합니다.',
    },
    fastfood: {
      name: '패스트푸드·체인',
      intro: '일본 외식의 바닥이며, 한 끼가 얼마나 적게 들 수 있는지 일깨워 줍니다.',
    },
    breakfast: {
      name: '아침 식사',
      intro:
        '장기 체류 방문객이 열한 번 내리는 결정입니다. 호텔 뷔페냐 밖에서 먹는 정식이냐는 2주 여행에서 되풀이되는 가장 큰 선택입니다.',
    },
    market: {
      name: '시장·길거리 먹거리',
      intro: '위와 같은 음식을, 방문객이 손님인 곳에서 파는 경우입니다. 차이는 웃돈이 아닙니다. 다른 종류의 소비입니다.',
    },
    'no-price': {
      name: '숫자가 없을 때',
      intro:
        '이 페이지의 한계입니다. 메뉴가 아니라 계산대에서 나타나는 비용이며, 기준 가격이 가장 중요한 곳이 바로 기준 가격이 없는 곳이라는 이유이기도 합니다.',
    },
  },
  items: {
    ramen: { name: '라멘', referenceNote: '도쿄에서 기본 한 그릇은 ¥800부터, 토핑을 더하면 약 ¥1,000' },
    'tsukemen-dipping-noodles': { name: '쓰케멘(찍어 먹는 면)', referenceNote: '도쿄, 표준 한 그릇' },
    soba: { name: '소바' },
    udon: { name: '우동' },
    yakisoba: { name: '야키소바', referenceNote: '도쿄, 식당의 요리로서' },
    'standing-soba-at-a-station': {
      name: '역 서서 먹는 소바',
      referenceNote: '일본 승강장에서 가장 싼 따뜻한 식사이며, 가성비가 가장 좋은 것 중 하나입니다',
    },
    'conveyor-belt-sushi': {
      name: '회전초밥',
      referenceNote: '한 사람의 한 끼 전체. 옆의 통계 수치는 참치 두 점 값이지 계산서가 아닙니다',
    },
    'sushi-restaurant-lunch-set': { name: '초밥집 점심 세트', referenceNote: '같은 카운터가 저녁에 받는 금액의 절반도 안 됩니다' },
    'sushi-restaurant-dinner': { name: '초밥집 저녁', referenceNote: '위로는 끝이 없습니다' },
    'standing-sushi-bar': { name: '서서 먹는 초밥집', referenceNote: '서서 먹는다고 싼 것은 아닙니다. 빠르다는 뜻이고, 맛은 대개 아주 좋습니다' },
    'supermarket-sushi-pack': { name: '슈퍼 초밥 팩', referenceNote: '대부분의 슈퍼에서 저녁에는 반값이 됩니다' },
    'gyudon-beef-bowl': { name: '규동(소고기덮밥)' },
    'oyakodon-chicken-and-egg': { name: '오야코동(닭고기와 달걀)', referenceNote: '도쿄, 표준적인 가게' },
    'katsudon-pork-cutlet': { name: '가쓰동(돈가스)', referenceNote: '도쿄, 표준적인 가게' },
    'tendon-tempura': { name: '텐동(튀김)', referenceNote: '도쿄, 표준적인 가게' },
    'unaju-eel': { name: '우나주(장어)', referenceNote: '장어는 일본에서 일상 음식 중 유일하게 정말 비싼 음식입니다' },
    'kaisendon-seafood-bowl': {
      name: '가이센동(해산물 덮밥)',
      referenceNote: '공식 수치는 없습니다. 이 금액 아래라면 일본 손님은 생각 없이 주문합니다',
      touristNote: '구로몬(오사카)과 니시키(교토), ¥4,000–5,000',
    },
    'grilled-fish-set': { name: '생선구이 정식', referenceNote: '밥, 국, 절임이 포함됩니다. 이것이 일본의 표준 점심입니다' },
    'tonkatsu-set': { name: '돈가스 정식', referenceNote: '더 좋은 부위를 시키면 ¥2,000 선을 넘습니다' },
    'tempura-counter-lunch': { name: '튀김, 카운터, 점심', referenceNote: '같은 카운터의 저녁은 이 금액의 몇 배입니다' },
    'sukiyaki-per-person': { name: '스키야키, 1인분', referenceNote: '냄비를 함께 쓰므로 금액은 1인당입니다' },
    'shabu-shabu-per-person': { name: '샤브샤브, 1인분', referenceNote: '스키야키와 같은 수준이며, 대개 같은 종류의 식당입니다' },
    'kaiseki-course-per-person': {
      name: '가이세키 코스, 1인분',
      referenceNote: '일반적인 값이 아니라 바닥입니다. 상한도 기준 가격도 없는 유일한 분류입니다',
    },
    'yakiniku-per-person': { name: '야키니쿠, 1인당', referenceNote: '직접 구워 먹는 경우, 한 사람, 음료 포함' },
    'wagyu-steak-lunch': { name: '와규 스테이크, 점심', referenceNote: '아사쿠사 마쓰나미의 점심. 같은 카운터의 저녁은 대략 두 배입니다' },
    'wagyu-steak-dinner': { name: '와규 스테이크, 저녁', referenceNote: '아사쿠사의 같은 카운터의 저녁' },
    'yakitori-per-skewer': { name: '야키토리, 꼬치 1개', referenceNote: '꼬치 하나 단위로 값이 붙지만 하나만 시키는 사람은 없습니다. 한 끼는 여러 개에 음료가 더해집니다' },
    'jingisukan-lamb': { name: '징기스칸(양고기)', referenceNote: '홋카이도의 음식이며, 도쿄보다 그곳이 더 쌉니다' },
    okonomiyaki: { name: '오코노미야키', referenceNote: '오사카식과 히로시마식은 비슷한 가격의 서로 다른 음식입니다' },
    'takoyaki-6-8-pieces': { name: '다코야키 6~8개', referenceNote: '식사라기보다 간식이며, 걸으면서 먹는 대표적인 음식입니다' },
    monjayaki: { name: '몬자야키', referenceNote: '도쿄의 음식이며, 도쿄 밖에서는 거의 알려져 있지 않습니다' },
    'kushikatsu-per-skewer': { name: '구시카쓰, 꼬치 1개', referenceNote: '꼬치 하나 단위로 값이 붙습니다. 한 끼는 여러 개이며, 소스에 두 번 찍어서는 안 됩니다' },
    'gyoza-one-plate': { name: '교자, 한 접시', referenceNote: '일본에서는 곁들임 요리이지 메인이 아닙니다' },
    'motsunabe-per-person': { name: '모쓰나베, 1인분', referenceNote: '후쿠오카의 음식이며, 보통 둘 이상이 함께 주문합니다' },
    'mizutaki-per-person': { name: '미즈타키, 1인분', referenceNote: '역시 후쿠오카의 음식이며, 둘 중 더 순한 쪽입니다' },
    'oden-per-piece': { name: '오뎅, 1개', referenceNote: '겨울의 편의점을 포함해 하나 단위로 값이 붙습니다' },
    'miso-soup-as-a-side': { name: '된장국, 단품', referenceNote: '보통 정식에 포함됩니다. 포함되지 않을 때의 가격입니다' },
    'izakaya-per-person-with-drinks': { name: '이자카야, 1인당 음료 포함', referenceNote: '평범한 저녁 술자리가 1인당 얼마가 되는지입니다. 바닥이 아니라 일반적인 계산서입니다' },
    'otoshi-compulsory-small-dish': {
      name: '오토시(강제로 나오는 작은 안주)',
      why: '주문하지 않은 작은 안주가 나오고 자릿값이 더해집니다. 바가지가 아니라 표준 관행이며, 영어로 적혀 있는 경우는 드뭅니다.',
      whatToDo:
        '기준이 있습니다. ¥300이면 후한 편, ¥500이면 보통, ¥1,000이면 바가지를 쓰고 있다는 뜻입니다. 보통은 거절할 수 없으므로 자릿값으로 보고, 그 금액으로 가게를 판단하십시오.',
    },
    'draft-beer': { name: '생맥주', referenceNote: '한 잔, 독립 이자카야 기준' },
    'sake-one-go-180ml': { name: '사케, 1홉(180ml)', referenceNote: '1홉은 180ml로, 잔으로 한 잔 반쯤입니다' },
    highball: { name: '하이볼', referenceNote: '위스키 소다. 기본적인 저렴한 술입니다' },
    shochu: { name: '소주(쇼추)', referenceNote: '대개 술 메뉴에서 가장 싼 것입니다' },
    'coffee-cafe': { name: '커피, 카페' },
    'matcha-with-a-sweet': { name: '말차와 화과자', referenceNote: '참고용일 뿐입니다. 전문 찻집은 이제 드물어서 가격 차이가 큽니다' },
    'kakigori-shaved-ice': {
      name: '가키고리(빙수)',
      referenceNote: '옛 방식의 전문점 기준입니다. 그런 가게는 줄었고, 그 자리를 대신한 사진 잘 나오는 카페는 같은 얼음 한 그릇에 2,000에서 3,000을 받습니다. 빠듯한 예산이라면 그럴 만한 가치가 없습니다',
    },
    parfait: { name: '파르페', referenceNote: '카페에서' },
    crepe: { name: '크레이프', referenceNote: '길거리 가판대, 걸으면서 먹습니다' },
    'convenience-store-onigiri': { name: '편의점 오니기리', referenceNote: '폭이 넓습니다. 기본은 150, 연어알이나 참치 뱃살은 350까지' },
    'convenience-store-bento': { name: '편의점 도시락', referenceNote: '따뜻한 한 끼 식사를 언제든' },
    'ekiben-station-bento': { name: '에키벤(역 도시락)', referenceNote: '지역 특색 있는 것은 2,000까지. 편의점 도시락의 약 두 배입니다' },
    'department-store-deli-one-item': {
      name: '백화점 지하 반찬, 1품목',
      referenceNote: '무게나 브랜드로 팔기 때문에 상한이 없습니다. 마지막 두세 시간에 값을 내리는 매장도 있지만 항상 그런 것은 아닙니다(JNTO)',
    },
    'bakery-one-item': { name: '빵집, 1개', referenceNote: '제대로 된 빵집 기준입니다. 슈퍼의 식빵은 다른 소비입니다' },
    hamburger: { name: '햄버거' },
    'curry-rice': { name: '카레라이스' },
    'gyudon-chain-regular': { name: '규동 체인, 보통', referenceNote: '이 페이지에서 통계 수치와 거리의 가격이 거의 정확히 일치하는 유일한 경우입니다' },
    'family-restaurant-lunch': { name: '패밀리 레스토랑, 점심', referenceNote: '드링크 바는 보통 별도입니다' },
    'hotel-breakfast-buffet': {
      name: '호텔 조식 뷔페',
      referenceNote: '호텔 등급에 따라 다르며, 도쿄는 높은 편입니다. 열한 번의 아침에 걸쳐, 2주 여행에서 되풀이되는 가장 큰 결정입니다',
    },
    'japanese-set-breakfast': { name: '일식 아침 정식', referenceNote: '제대로 된 아침 정식을 내는 곳은 드뭅니다. 규동 체인이 아침 세트로 그 틈을 메웁니다' },
    'cafe-morning-set': {
      name: '카페 모닝 세트',
      referenceNote: '도쿄의 금액입니다. 간사이, 특히 아이치 일대에서는 약 500이며 커피에 공짜로 딸려 나오는 경우도 많습니다. 모닝 서비스는 서일본의 제도이고 도쿄에는 거의 없습니다',
    },
    'seafood-bowl-at-a-market': {
      name: '시장의 해산물 덮밥',
      touristNote: '구로몬, 니시키, ¥4,000–5,000',
      referenceNote: '한 골목 뒤의 같은 덮밥',
    },
    'grilled-skewer-at-a-stall': {
      name: '노점의 꼬치구이',
      referenceNote: '축제 노점에서 꼬치 하나가 얼마인지',
      touristNote: '관광객 아케이드의 와규 꼬치',
      context:
        '길거리에서 꼬치를 먹는 것은 일본인의 일상 습관이 아닙니다. 축제에 속하는 것입니다. 야키토리, 초콜릿을 입힌 바나나, 사과 사탕 같은 것이며, ¥500이라는 금액은 그 세계의 값입니다. ¥2,000짜리 와규 꼬치는 전혀 다른 물건입니다. 2000년대에 방문객을 겨냥해 만들어진 형식입니다. 일본 사람은 사실상 사 먹지 않습니다.',
    },
    'one-item-while-walking': {
      name: '걸으며 먹는 한 품목',
      referenceNote: '동전 하나. 길거리 음식의 통념상 상한입니다',
      touristNote: '관광지의 상단',
      context:
        '동전 하나, 즉 ¥500이 일본 사람들이 길거리 음식의 값이라고 알고 있는 금액입니다. 걸으면서 먹는 것에 ¥1,000을 쓰면 현지 기준으로는 소득이 넉넉한 사람의 영역에 들어갑니다. 관광지에서 ¥1,000을 넘으면, 그 가격은 방문객을 위해서만 정해진 것이며 다른 누구를 위한 것도 아닙니다.',
    },
    'crab-leg-grilled': {
      name: '게 다리 구이',
      touristNote: '니가타 같은 게 산지, 노점에서',
      context:
        '게가 지역 특산인 곳에서의 실제 판매 가격입니다. 여기서 두 가지를 알 수 있습니다. 도쿄에서는 게를 거의 먹지 않으므로, 도쿄의 게 노점은 이미 어울리지 않습니다. 그리고 게 산지에서도 사람들은 노점이 아니라 집에서 먹으므로, 현지 사람조차 노점 가격을 내지 않습니다.',
    },
    'jika-market-price': {
      name: '지카(시가)',
      why: '도매 가격이 매일 움직이기 때문에 메뉴에 금액이 적혀 있지 않습니다. 초밥 재료, 게, 복어, 바닷가재, 자연산 생선, 송이버섯에 흔합니다. 정당한 관행이고 속임수가 아니지만, 기준점이 완전히 사라집니다.',
      whatToDo:
        '주문하기 전에 가격을 물어보십시오. 실례가 아니며, 일본 손님도 그렇게 합니다. “Kore wa jika desu ka? O-ikura desu ka?” — 이건 시가입니까? 얼마입니까?',
    },
    'service-charge': {
      name: '서비스료',
      why: '호텔과 고급 식당에서 보통 10–15%가 붙으며, 요리 가격이 아니라 작은 글씨로 적혀 있습니다.',
      whatToDo: '호텔 레스토랑이나 료테이에서는 붙는다고 생각하십시오. 소비세와는 별개입니다.',
    },
    'seat-charge-and-late-night-surcharge': {
      name: '자릿값·심야 할증',
      why: '바에 따라 자릿값이 붙거나, 22:00 또는 자정 이후에 일정 비율이 더해지기도 합니다.',
      whatToDo: '앉기 전에 입구나 메뉴 표지에 작은 안내문이 있는지 확인하십시오.',
    },
    'all-you-can-eat-time-limit': {
      name: '무한리필 시간 제한',
      why: '내세우는 가격은 정해진 시간, 보통 90분이나 120분에 해당하며, 연장은 별도로 청구됩니다.',
      whatToDo: '즐기고 있을 때가 아니라 주문할 때 시간을 확인하십시오.',
    },
  },
  chains: {
    ramen: { what: '기본 간장 라멘, 한 그릇' },
    tsukemen: { what: '표준 쓰케멘', chainNotes: { 'Tsukemen TETSU': '도쿄 지점 기준이며, 지점에 따라 다릅니다' } },
    udon: {
      what: '기본 가케우동, 보통',
      chainNotes: { 'Hanamaru Udon': '소(小)가 1인분 크기이며, 중(中)은 ¥550입니다', 'Marugame Seimen': '가마아게 우동은 ¥390입니다' },
    },
    'tachigui-soba': {
      what: '기본 가케소바',
      note: '가키아게나 튀김 토핑을 올리면 ¥550에서 ¥620',
      chainNotes: { 'Komoro Soba': '메뉴에 세금 표시 없음' },
    },
    'sushi-kaiten': {
      what: '가장 싼 접시',
      note: '붉은 살 참치 한 접시는 ¥120에서 ¥150입니다. 도쿄 도심 지점은 접시당 더 받습니다',
      chainNotes: { Sushiro: '도쿄 도심 지점에서는 ¥150' },
    },
    gyudon: { what: '소고기덮밥, 보통 크기', chainNotes: { Matsuya: '된장국 포함' } },
    oyakodon: { what: '오야코동, 보통 크기' },
    katsudon: { what: '가쓰동, 보통 크기' },
    tendon: { what: '표준 튀김덮밥', chainNotes: { Tenya: '가장 싼 덮밥인 닭고기와 마이타케는 ¥630입니다' } },
    unaju: { what: '우나주, 기본 등급', chainNotes: { 'Unagi no Naruse': '메뉴에 세금 표시 없음' } },
    yakizakana: { what: '고등어구이 정식' },
    tonkatsu: { what: '등심 돈가스 정식' },
    sukiyaki: {
      what: '1인용 소고기 스키야키, 무한리필 아님',
      chainNotes: {
        Kisoji: '¥1,430은 미국산 소고기를 쓰는 점심 세트이고, ¥3,190은 국산 소고기의 표준 세트입니다. 도심 지점은 더 받습니다',
        'Washoku Sato': '우동이 딸린 1인용 스키야키 냄비',
      },
    },
    shabu: {
      what: '1인용 샤브샤브',
      chainNotes: {
        Shabuyo: '돼지고기 무한리필. 평일 점심부터 평일 저녁까지',
        Kisoji: '세트이며 무한리필이 아닙니다. 도심 지점은 더 받습니다',
        Onyasai: '소고기 무한리필, 가장 싼 코스',
      },
    },
    yakiniku: {
      what: '무한리필 코스, 가장 싼 것부터 표준까지, 음료 별도',
      chainNotes: {
        'Yakiniku King': '지점에 따라 다릅니다',
        Jojoen: '신주쿠 주오히가시구치 지점의 점심 세트. 평일 표준 코스는 서비스료 포함 ¥8,000이며 두 명 이상부터입니다',
      },
    },
    yakitori: {
      what: '꼬치 1개',
      chainNotes: {
        'Yakitori no Ogiya': '넓적다리는 ¥154, 다른 꼬치 대부분은 ¥209',
        Torikizoku: '메뉴의 모든 것이 ¥410이며, 야키토리는 한 접시에 두 꼬치가 나옵니다',
      },
    },
    okonomiyaki: { what: '돼지고기 오코노미야키(부타타마)', chainNotes: { Chibo: '유라쿠초 지점' } },
    takoyaki: { what: '다코야키, 8개', chainNotes: { Gindaco: '매장 식사 기준이며, 포장은 ¥702' } },
    kushikatsu: {
      what: '소고기 꼬치 1개',
      chainNotes: { 'Kushikatsu Dengana': '가장 싼 꼬치는 ¥110', 'Kushikatsu Tanaka': '돼지고기는 ¥198이며, 가장 싼 일반 꼬치는 ¥88' },
    },
    gyoza: { what: '군만두, 6개' },
    motsunabe: {
      what: '모쓰나베, 1인분',
      chainNotes: { Arizuki: '시부야 지점. 된장 맛은 ¥2,178이며, 최소 2인분', Ooyama: '긴자 지점. 밤에는 ¥550의 자릿값이 붙습니다' },
    },
    oden: { what: '무 한 조각', note: '추운 계절에 카운터에서 팔며, 모든 지점에 있는 것은 아닙니다' },
    'miso-soup': { what: '단품으로 주문한 된장국', note: '마쓰야는 매장에서 먹는 모든 식사에 무료로 포함합니다' },
    beer: { what: '생맥주, 한 잔', chainNotes: { 'Isomaru Suisan': '2025년 8월 메뉴 기준이며, 이 체인이 공개한 가장 최신 것입니다' } },
    sake: {
      what: '메뉴의 기본 사케',
      chainNotes: {
        Torikizoku: '컵 사케, 용량 표시 없음',
        Uotami: '1홉(180ml), 메뉴에 표시된 대로',
        'Isomaru Suisan': '용량 표시 없음. 2025년 8월 메뉴 기준',
      },
    },
    highball: { what: '기본 하이볼', chainNotes: { 'Isomaru Suisan': '2025년 8월 메뉴 기준' } },
    shochu: { what: '가장 싼 소주 한 잔', chainNotes: { 'Isomaru Suisan': '2025년 8월 메뉴 기준' } },
    coffee: {
      what: '드립 커피, 가장 작은 크기',
      chainNotes: { Starbucks: '톨은 ¥455', "Komeda's Coffee": '도쿄에서 가장 흔한 가격이며, 지점에 따라 ¥540에서 ¥700' },
    },
    parfait: { what: '패밀리 레스토랑의 표준 초콜릿 선디나 파르페' },
    crepe: { what: '표준 크레이프, 가장 싼 것부터 가장 비싼 것까지', chainNotes: { 'Dipper Dan': '메뉴에 세금 표시 없음' } },
    onigiri: { what: '기본 소금 오니기리부터 가장 비싼 일반 오니기리까지', note: '연어 오니기리는 ¥181에서 ¥235입니다' },
    bento: { what: '간토 지방에서 팔리는 도시락의 범위' },
    hamburger: {
      what: '기본 햄버거',
      note: '대표 버거인 빅맥과 모스버거는 각각 ¥500입니다',
      chainNotes: { "McDonald's": '도심 지점에서는 더 비쌉니다' },
    },
    curry: { what: '기본 카레라이스, 보통 크기' },
    'famires-lunch': {
      what: '평일 점심 세트, 드링크 바 별도',
      note: '드링크 바는 ¥200에서 ¥330이 더해집니다',
      chainNotes: { Gusto: '지점에 따라 다릅니다' },
    },
    'wa-breakfast': {
      what: '가장 싼 일식 아침 세트. 밥, 된장국, 달걀 또는 낫토',
      note: '생선구이를 더하면 ¥530에서 ¥700. 11:00까지 제공됩니다',
    },
    morning: {
      what: '커피를 포함한 모닝 세트',
      chainNotes: {
        Doutor: '샌드위치와 작은 커피, 10:30까지',
        "Komeda's Coffee": '11:00까지는 음료를 시키면 토스트와 달걀이 공짜로 나오므로, 이것은 커피 값일 뿐입니다',
      },
    },
    'sushi-lunch': {
      what: '평일 점심 니기리 세트, 국과 차완무시 포함',
      chainNotes: { Sushizanmai: '평일 15:00까지, 도쿄 대부분의 지점. 점심 메뉴에는 세금 표시가 없습니다' },
    },
    'sushi-dinner': {
      what: '정규 메뉴의 니기리 세트',
      chainNotes: { Sushizanmai: '하루 종일 같은 메뉴와 가격입니다. 저녁 전용 가격은 따로 없습니다' },
    },
    'wagyu-lunch': {
      what: '와규 등심 스테이크 점심',
      chainNotes: { Matsunami: '10%의 서비스료가 붙습니다. 이 식당이 공개한 가장 최신인 2025년 7월 메뉴 기준' },
    },
    'wagyu-dinner': {
      what: '가장 싼 와규 스테이크 코스',
      chainNotes: { Matsunami: 'A5 코스는 ¥12,100부터입니다. 10%의 서비스료가 붙습니다. 2025년 7월 메뉴 기준' },
    },
    ekiben: {
      what: '도쿄역에서 파는 에키벤',
      chainNotes: {
        'JR Central (Tokaido Shinkansen)': '표준 마쿠노우치 도시락은 ¥1,600',
        'Ekibenya Matsuri': '표준 마쿠노우치 도시락은 ¥1,300. 이 가게가 파는 약 150종 중 30종 정도만 목록에 있습니다',
      },
    },
    depachika: {
      what: '무게로 파는 샐러드, 100g당',
      chainNotes: { RF1: '감자 크로켓은 ¥195. 도쿄 일대 일부 지점은 특정 샐러드를 더 비싸게 받습니다' },
    },
    'hotel-breakfast': {
      what: '조식 뷔페, 성인 1명, 사전 예약',
      chainNotes: { 'APA Hotel': '신주쿠, 아사쿠사, 롯폰기의 도쿄 호텔 네 곳. 당일 지불이면 ¥1,800에서 ¥2,500' },
    },
    'tachigui-sushi': { what: '서서 먹는 초밥집의 니기리 한 점' },
    monja: { what: '기본 몬자야키' },
    bakery: { what: '크루아상 하나' },
  },
};

const fr: FoodPricesText = {
  groups: {
    noodles: {
      name: 'Nouilles',
      intro:
        'Le repère le plus fiable de la restauration japonaise. Une cuisine de tous les jours, à des prix qui ont à peine bougé pendant dix ans, jusqu’à récemment. Les somen sont écartés : c’est un plat d’été que l’on mange chez soi, pas une catégorie de restaurant.',
    },
    sushi: {
      name: 'Sushis',
      intro:
        'Le plat sur lequel tous les visiteurs ont un avis et aucun prix de référence. L’enquête ne couvre que les sushis sur tapis roulant, ce qui est en soi le repère utile.',
    },
    'rice-bowls': {
      name: 'Bols de riz',
      intro:
        'C’est là que l’écart entre le Japon du quotidien et le Japon touristique est le plus grand. Un bol de fruits de mer n’a aucun chiffre officiel, et c’est précisément pour cela que son prix peut être n’importe quoi.',
    },
    teishoku: {
      name: 'Menus complets et washoku',
      intro: 'Le déjeuner par défaut du Japon qui travaille, et le format où le prix en dit le plus sur l’endroit.',
    },
    meat: {
      name: 'Viande',
      intro:
        'La chose que les visiteurs disent avoir mangée avec le plus de satisfaction au Japon, deux fois plus que les sushis. C’est aussi là que « wagyu » sur une enseigne ne veut plus rien dire de précis. Le teppanyaki est écarté : en pratique, c’est le même achat qu’un steak de wagyu.',
    },
    konamono: {
      name: 'Plaque chauffante et street food',
      intro: 'La cuisine d’Osaka et d’Hiroshima, et la catégorie où la version des zones touristiques coûte le triple sans être meilleure.',
    },
    nabe: {
      name: 'Fondues japonaises et soupes',
      intro: 'Surtout un format de dîner à deux ou plus, ce qui fait du prix par personne le chiffre qui compte.',
    },
    izakaya: {
      name: 'Izakaya et boissons',
      intro:
        'L’endroit où les visiteurs reçoivent le plus souvent une addition inattendue — généralement pas à cause des plats, mais à cause de ce qui s’y est ajouté.',
    },
    cafe: {
      name: 'Cafés et douceurs',
      intro: 'Utile pour calibrer tout le reste. Un café est le moyen le moins cher de savoir ce qu’un endroit pense de lui-même.',
    },
    takeaway: {
      name: 'Plats à emporter et préparés',
      intro:
        'Là où le Japon est vraiment bon marché, et où un long séjour fait économiser de l’argent. Aussi la comparaison la plus juste avec un stand de zone touristique.',
    },
    fastfood: {
      name: 'Fast-food et chaînes',
      intro: 'Le plancher de la restauration au Japon, et un rappel utile du peu qu’un repas peut coûter.',
    },
    breakfast: {
      name: 'Petit-déjeuner',
      intro:
        'La décision que les visiteurs en séjour long prennent onze fois. Un buffet d’hôtel face à un petit-déjeuner complet dehors est le plus gros choix répété d’un voyage de deux semaines.',
    },
    market: {
      name: 'Marchés et stands de rue',
      intro: 'Les mêmes plats que ci-dessus, vendus là où les visiteurs sont la clientèle. La différence n’est pas une majoration — c’est une autre catégorie d’achat.',
    },
    'no-price': {
      name: 'Quand il n’y a pas de chiffre',
      intro:
        'La limite de cette page. Ce sont les frais qui apparaissent à la caisse plutôt que sur le menu — et la raison pour laquelle un prix de référence compte le plus justement là où il n’existe pas.',
    },
  },
  items: {
    ramen: { name: 'Ramen', referenceNote: 'À partir de ¥800 pour un bol simple à Tokyo, environ ¥1,000 avec des garnitures' },
    'tsukemen-dipping-noodles': { name: 'Tsukemen (nouilles à tremper)', referenceNote: 'Tokyo, un bol standard' },
    soba: { name: 'Soba' },
    udon: { name: 'Udon' },
    yakisoba: { name: 'Yakisoba', referenceNote: 'Tokyo, en plat dans un restaurant' },
    'standing-soba-at-a-station': {
      name: 'Soba debout en gare',
      referenceNote: 'Le repas chaud le moins cher d’un quai de gare japonais, et l’un des meilleurs rapports qualité-prix',
    },
    'conveyor-belt-sushi': {
      name: 'Sushis sur tapis roulant',
      referenceNote: 'Un repas complet pour une personne. Le chiffre de l’enquête à côté correspond à deux pièces de thon, pas à une addition',
    },
    'sushi-restaurant-lunch-set': { name: 'Restaurant de sushis, menu du midi', referenceNote: 'Moins de la moitié de ce que le même comptoir demande le soir' },
    'sushi-restaurant-dinner': { name: 'Restaurant de sushis, dîner', referenceNote: 'Et au-dessus, sans plafond' },
    'standing-sushi-bar': {
      name: 'Bar à sushis debout',
      referenceNote: 'Debout ne veut pas dire bon marché ici — cela veut dire rapide, et souvent très bon',
    },
    'supermarket-sushi-pack': { name: 'Plateau de sushis de supermarché', referenceNote: 'Moitié prix le soir dans la plupart des supermarchés' },
    'gyudon-beef-bowl': { name: 'Gyudon (bol de bœuf)' },
    'oyakodon-chicken-and-egg': { name: 'Oyakodon (poulet et œuf)', referenceNote: 'Tokyo, une adresse standard' },
    'katsudon-pork-cutlet': { name: 'Katsudon (escalope de porc)', referenceNote: 'Tokyo, une adresse standard' },
    'tendon-tempura': { name: 'Tendon (tempura)', referenceNote: 'Tokyo, une adresse standard' },
    'unaju-eel': { name: 'Unaju (anguille)', referenceNote: 'L’anguille est le seul plat courant qui soit vraiment cher au Japon' },
    'kaisendon-seafood-bowl': {
      name: 'Kaisendon (bol de fruits de mer)',
      referenceNote: 'Il n’existe aucun chiffre officiel. En dessous, un client japonais commande sans réfléchir',
      touristNote: 'Kuromon (Osaka) et Nishiki (Kyoto), ¥4,000–5,000',
    },
    'grilled-fish-set': { name: 'Menu poisson grillé', referenceNote: 'Riz, soupe et légumes au vinaigre compris — c’est le déjeuner japonais standard' },
    'tonkatsu-set': { name: 'Menu tonkatsu', referenceNote: 'Au-dessus du seuil de ¥2,000 dès que vous prenez la meilleure coupe' },
    'tempura-counter-lunch': { name: 'Tempura, comptoir, déjeuner', referenceNote: 'Le même comptoir le soir coûte plusieurs fois ce montant' },
    'sukiyaki-per-person': { name: 'Sukiyaki, par personne', referenceNote: 'Une marmite partagée, donc le chiffre est par tête' },
    'shabu-shabu-per-person': { name: 'Shabu-shabu, par personne', referenceNote: 'Le même niveau que le sukiyaki, et en général le même genre de restaurant' },
    'kaiseki-course-per-person': {
      name: 'Menu kaiseki, par personne',
      referenceNote: 'Le plancher, pas le prix typique. C’est la seule catégorie sans plafond ni prix de référence',
    },
    'yakiniku-per-person': { name: 'Yakiniku, par personne', referenceNote: 'Vous le grillez vous-même, une personne, boissons comprises' },
    'wagyu-steak-lunch': { name: 'Steak de wagyu, déjeuner', referenceNote: 'Déjeuner chez Matsunami à Asakusa. Le même comptoir le soir coûte à peu près le double' },
    'wagyu-steak-dinner': { name: 'Steak de wagyu, dîner', referenceNote: 'Dîner au même comptoir à Asakusa' },
    'yakitori-per-skewer': {
      name: 'Yakitori, par brochette',
      referenceNote: 'Le prix est par brochette, et personne n’en commande une seule. Un repas en compte plusieurs, plus les boissons',
    },
    'jingisukan-lamb': { name: 'Jingisukan (agneau)', referenceNote: 'Un plat d’Hokkaido, et moins cher là-bas qu’à Tokyo' },
    okonomiyaki: { name: 'Okonomiyaki', referenceNote: 'Les versions d’Osaka et d’Hiroshima sont des plats différents à un prix similaire' },
    'takoyaki-6-8-pieces': { name: 'Takoyaki, 6 à 8 pièces', referenceNote: 'Un en-cas plutôt qu’un repas, et le classique à manger en marchant' },
    monjayaki: { name: 'Monjayaki', referenceNote: 'Tokyo, et presque inconnu en dehors' },
    'kushikatsu-per-skewer': {
      name: 'Kushikatsu, par brochette',
      referenceNote: 'Le prix est par brochette. Un repas en compte plusieurs, et la sauce n’est pas faite pour y tremper deux fois',
    },
    'gyoza-one-plate': { name: 'Gyoza, une assiette', referenceNote: 'Un accompagnement au Japon, pas un plat principal' },
    'motsunabe-per-person': { name: 'Motsunabe, par personne', referenceNote: 'Un plat de Fukuoka, en général commandé pour deux personnes ou plus' },
    'mizutaki-per-person': { name: 'Mizutaki, par personne', referenceNote: 'Également de Fukuoka, et le plus doux des deux' },
    'oden-per-piece': { name: 'Oden, à la pièce', referenceNote: 'Le prix est à la pièce, y compris dans les konbini en hiver' },
    'miso-soup-as-a-side': { name: 'Soupe miso, en accompagnement', referenceNote: 'En général comprise dans un menu — c’est le prix quand elle ne l’est pas' },
    'izakaya-per-person-with-drinks': {
      name: 'Izakaya, par personne avec boissons',
      referenceNote: 'Ce que coûte une soirée normale par tête. Pas un plancher — c’est l’addition typique',
    },
    'otoshi-compulsory-small-dish': {
      name: 'Otoshi (petit plat obligatoire)',
      why: 'Un petit plat arrive sans avoir été commandé et un droit de table est ajouté. C’est une pratique courante, pas une arnaque, et c’est rarement écrit en anglais.',
      whatToDo:
        'Il y a une échelle : ¥300, c’est généreux ; ¥500, c’est normal ; ¥1,000, c’est qu’on vous prend pour un pigeon. En général, on ne peut pas le refuser : considérez-le comme un droit de couvert et jugez l’endroit d’après lui.',
    },
    'draft-beer': { name: 'Bière pression', referenceNote: 'Par verre, dans un izakaya indépendant' },
    'sake-one-go-180ml': { name: 'Saké, un go (180 ml)', referenceNote: 'Un go fait 180 ml, soit un verre et demi environ' },
    highball: { name: 'Highball', referenceNote: 'Whisky et soda, la boisson bon marché par défaut' },
    shochu: { name: 'Shochu', referenceNote: 'En général la chose la moins chère de la carte des boissons' },
    'coffee-cafe': { name: 'Café, salon de café' },
    'matcha-with-a-sweet': { name: 'Matcha avec une pâtisserie', referenceNote: 'À titre indicatif seulement. Les salons de thé spécialisés sont rares aujourd’hui, donc le prix varie beaucoup' },
    'kakigori-shaved-ice': {
      name: 'Kakigori (glace pilée)',
      referenceNote:
        'Chez un spécialiste à l’ancienne. Ils se sont raréfiés, et les cafés photogéniques qui les ont remplacés demandent 2,000 à 3,000 pour le même bol de glace. Ça ne vaut pas le coup avec un petit budget',
    },
    parfait: { name: 'Parfait', referenceNote: 'Dans un café' },
    crepe: { name: 'Crêpe', referenceNote: 'Un stand de rue, mangée en marchant' },
    'convenience-store-onigiri': {
      name: 'Onigiri de konbini',
      referenceNote: 'Une large fourchette — 150 pour un nature, jusqu’à 350 pour des œufs de saumon ou du ventre de thon',
    },
    'convenience-store-bento': { name: 'Bento de konbini', referenceNote: 'Un vrai repas, chaud, à toute heure' },
    'ekiben-station-bento': { name: 'Ekiben (bento de gare)', referenceNote: 'Jusqu’à 2,000 pour les régionaux. Environ le double d’un bento de konbini' },
    'department-store-deli-one-item': {
      name: 'Traiteur de grand magasin, un article',
      referenceNote:
        'Vendu au poids ou à la marque, donc sans plafond. Certains comptoirs baissent les prix dans les deux ou trois dernières heures, pas toujours (JNTO)',
    },
    'bakery-one-item': { name: 'Boulangerie, un article', referenceNote: 'Dans une vraie boulangerie. Un pain de supermarché est un autre achat' },
    hamburger: { name: 'Hamburger' },
    'curry-rice': { name: 'Riz au curry' },
    'gyudon-chain-regular': {
      name: 'Chaîne de gyudon, portion normale',
      referenceNote: 'Le seul cas de cette page où le chiffre de l’enquête et la rue concordent presque exactement',
    },
    'family-restaurant-lunch': { name: 'Restaurant familial, déjeuner', referenceNote: 'Bar à boissons généralement en supplément' },
    'hotel-breakfast-buffet': {
      name: 'Buffet de petit-déjeuner d’hôtel',
      referenceNote:
        'Dépend de la catégorie de l’hôtel, et Tokyo est élevé. Sur onze matins, c’est la plus grosse décision répétée d’un voyage de deux semaines',
    },
    'japanese-set-breakfast': {
      name: 'Petit-déjeuner japonais complet',
      referenceNote: 'Les endroits qui servent un vrai teishoku du matin sont rares. Les chaînes de gyudon comblent le manque avec un menu petit-déjeuner',
    },
    'cafe-morning-set': {
      name: 'Formule matin au café',
      referenceNote:
        'Un chiffre de Tokyo. Dans le Kansai et surtout autour d’Aichi, c’est environ 500, et souvent offert avec un café — le service du matin est une institution de l’ouest du Japon qui n’existe presque pas à Tokyo',
    },
    'seafood-bowl-at-a-market': {
      name: 'Bol de fruits de mer au marché',
      touristNote: 'Kuromon, Nishiki, ¥4,000–5,000',
      referenceNote: 'Le même bol une rue plus loin',
    },
    'grilled-skewer-at-a-stall': {
      name: 'Brochette grillée à un stand',
      referenceNote: 'Ce que coûte une brochette à un stand de fête',
      touristNote: 'Brochettes de wagyu dans une galerie touristique',
      context:
        'Manger des brochettes dans la rue n’est pas une habitude japonaise de tous les jours. Cela appartient aux fêtes — yakitori, bananes enrobées de chocolat, pommes d’amour — et le chiffre de ¥500 relève de ce monde. La brochette de wagyu à ¥2,000 est tout autre chose : un format inventé dans les années 2000 à l’intention des visiteurs. Les Japonais n’en achètent pratiquement pas.',
    },
    'one-item-while-walking': {
      name: 'Un article en marchant',
      referenceNote: 'Une pièce. Le plafond reconnu de la street food',
      touristNote: 'Le haut de la fourchette dans une zone touristique',
      context:
        'Une pièce — ¥500 — c’est ce que les Japonais comprennent par le prix de la street food. Dépenser ¥1,000 pour quelque chose que l’on mange en marchant, c’est se situer, selon les critères locaux, dans les revenus confortables. Au-dessus de ¥1,000 dans une zone touristique, le prix est fixé pour les visiteurs venus de l’étranger et pour personne d’autre.',
    },
    'crab-leg-grilled': {
      name: 'Pince de crabe grillée',
      touristNote: 'Régions du crabe comme Niigata, à un stand',
      context:
        'C’est le vrai prix de vente là où le crabe est un produit local. Deux choses en découlent. Tokyo ne mange presque pas de crabe, donc un stand de crabe à Tokyo est déjà déplacé. Et dans les régions du crabe elles-mêmes, on le mange à la maison plutôt qu’à un stand — même les habitants ne paient donc pas le prix du stand.',
    },
    'jika-market-price': {
      name: 'Jika (prix du marché)',
      why: 'Le menu n’affiche aucun chiffre parce que le prix de gros change chaque jour. Courant pour les garnitures de sushis, le crabe, le fugu, le homard, le poisson sauvage et le matsutake. C’est une pratique légitime, pas un piège — mais elle supprime complètement votre point de repère.',
      whatToDo:
        'Demandez le prix avant de commander. Ce n’est pas impoli, et les clients japonais le font. « Kore wa jika desu ka ? O-ikura desu ka ? » — C’est au prix du marché ? Combien ça coûte ?',
    },
    'service-charge': {
      name: 'Service',
      why: 'En général 10–15 % ajoutés dans les hôtels et les restaurants haut de gamme, indiqués en petits caractères plutôt que dans le prix du plat.',
      whatToDo: 'Comptez-le dans tout restaurant d’hôtel ou ryotei. Il est distinct de la taxe à la consommation.',
    },
    'seat-charge-and-late-night-surcharge': {
      name: 'Droit de table et supplément de nuit',
      why: 'Certains bars ajoutent un droit de couvert, et certains un pourcentage après 22:00 ou minuit.',
      whatToDo: 'Cherchez un petit avis à l’entrée ou sur la couverture du menu avant de vous asseoir.',
    },
    'all-you-can-eat-time-limit': {
      name: 'Limite de temps du « à volonté »',
      why: 'Le prix affiché couvre une durée fixe, en général 90 ou 120 minutes, avec une prolongation facturée à part.',
      whatToDo: 'Vérifiez la durée au moment de commander, pas quand vous êtes en train de vous régaler.',
    },
  },
  chains: {
    ramen: { what: 'Ramen nature à la sauce soja, un bol' },
    tsukemen: { what: 'Tsukemen standard', chainNotes: { 'Tsukemen TETSU': 'Succursales de Tokyo ; certaines succursales diffèrent' } },
    udon: {
      what: 'Kake udon nature, portion normale',
      chainNotes: {
        'Hanamaru Udon': 'La petite est la portion pour une personne ; la moyenne coûte ¥550',
        'Marugame Seimen': 'Le kamaage udon coûte ¥390',
      },
    },
    'tachigui-soba': {
      what: 'Kake soba nature',
      note: 'Avec un kakiage ou une garniture de tempura : ¥550 à ¥620',
      chainNotes: { 'Komoro Soba': 'taxes non précisées sur le menu' },
    },
    'sushi-kaiten': {
      what: 'L’assiette la moins chère',
      note: 'Une assiette de thon maigre coûte ¥120 à ¥150. Les succursales du centre de Tokyo demandent plus par assiette',
      chainNotes: { Sushiro: '¥150 dans les succursales du centre de Tokyo' },
    },
    gyudon: { what: 'Bol de bœuf, portion normale', chainNotes: { Matsuya: 'soupe miso comprise' } },
    oyakodon: { what: 'Oyakodon, portion normale' },
    katsudon: { what: 'Katsudon, portion normale' },
    tendon: { what: 'Le bol de tempura standard', chainNotes: { Tenya: 'Le bol le moins cher, poulet et maitake, coûte ¥630' } },
    unaju: { what: 'Unaju, qualité de base', chainNotes: { 'Unagi no Naruse': 'taxes non précisées sur le menu' } },
    yakizakana: { what: 'Menu de maquereau grillé' },
    tonkatsu: { what: 'Menu d’escalope de filet de porc' },
    sukiyaki: {
      what: 'Sukiyaki de bœuf pour une personne, pas à volonté',
      chainNotes: {
        Kisoji:
          '¥1,430 est le menu du midi avec du bœuf américain ; ¥3,190 est le menu standard avec du bœuf japonais. Les succursales du centre demandent plus',
        'Washoku Sato': 'Une marmite de sukiyaki pour une personne, avec des udon',
      },
    },
    shabu: {
      what: 'Shabu-shabu pour une personne',
      chainNotes: {
        Shabuyo: 'Porc à volonté ; du déjeuner en semaine au dîner en semaine',
        Kisoji: 'Un menu, pas à volonté. Les succursales du centre demandent plus',
        Onyasai: 'Bœuf à volonté, la formule la moins chère',
      },
    },
    yakiniku: {
      what: 'Formule à volonté, de la moins chère à la standard, boissons en supplément',
      chainNotes: {
        'Yakiniku King': 'varie selon la succursale',
        Jojoen:
          'Menu du midi à la succursale de Shinjuku Chuo-Higashiguchi. La formule standard en semaine coûte ¥8,000 service compris, pour deux personnes ou plus',
      },
    },
    yakitori: {
      what: 'Une brochette',
      chainNotes: {
        'Yakitori no Ogiya': 'La cuisse coûte ¥154, la plupart des autres brochettes ¥209',
        Torikizoku: 'Tout le menu est à ¥410, et les yakitori viennent par deux brochettes par assiette',
      },
    },
    okonomiyaki: { what: 'Okonomiyaki au porc (butatama)', chainNotes: { Chibo: 'Succursale de Yurakucho' } },
    takoyaki: { what: 'Takoyaki, huit pièces', chainNotes: { Gindaco: 'Sur place ; ¥702 à emporter' } },
    kushikatsu: {
      what: 'Une brochette de bœuf',
      chainNotes: {
        'Kushikatsu Dengana': 'Les brochettes les moins chères coûtent ¥110',
        'Kushikatsu Tanaka': 'Le porc coûte ¥198 ; la brochette ordinaire la moins chère, ¥88',
      },
    },
    gyoza: { what: 'Gyoza poêlés, six pièces' },
    motsunabe: {
      what: 'Motsunabe, une portion',
      chainNotes: {
        Arizuki: 'Succursale de Shibuya ; le miso coûte ¥2,178 ; minimum deux portions',
        Ooyama: 'Succursale de Ginza ; un droit de table de ¥550 est ajouté le soir',
      },
    },
    oden: { what: 'Un morceau de daikon', note: 'Vendu au comptoir pendant les mois froids, et pas dans toutes les succursales' },
    'miso-soup': { what: 'Soupe miso commandée seule', note: 'Matsuya l’offre avec tout repas pris sur place' },
    beer: { what: 'Bière pression, un verre', chainNotes: { 'Isomaru Suisan': 'd’après son menu d’août 2025, le dernier que la chaîne publie' } },
    sake: {
      what: 'Le saké de base du menu',
      chainNotes: {
        Torikizoku: 'saké en verre, volume non précisé',
        Uotami: 'un go (180 ml), comme indiqué sur le menu',
        'Isomaru Suisan': 'volume non précisé ; d’après son menu d’août 2025',
      },
    },
    highball: { what: 'Le highball de base', chainNotes: { 'Isomaru Suisan': 'd’après son menu d’août 2025' } },
    shochu: { what: 'Le verre de shochu le moins cher', chainNotes: { 'Isomaru Suisan': 'd’après son menu d’août 2025' } },
    coffee: {
      what: 'Café filtre, plus petite taille',
      chainNotes: {
        Starbucks: 'Le Tall coûte ¥455',
        "Komeda's Coffee": 'Le prix le plus courant à Tokyo ; ¥540 à ¥700 selon la succursale',
      },
    },
    parfait: { what: 'Une coupe glacée au chocolat ou un parfait standard dans un restaurant familial' },
    crepe: { what: 'Crêpes standard, de la moins chère à la plus chère', chainNotes: { 'Dipper Dan': 'taxes non précisées sur le menu' } },
    onigiri: { what: 'De l’onigiri nature salé jusqu’au plus cher des onigiri ordinaires', note: 'Un onigiri au saumon coûte ¥181 à ¥235' },
    bento: { what: 'La gamme de repas en boîte en vente dans la région du Kantō' },
    hamburger: {
      what: 'Le hamburger nature',
      note: 'Les burgers phares, un Big Mac et un Mos Burger, coûtent ¥500 chacun',
      chainNotes: { "McDonald's": 'plus cher dans les succursales du centre-ville' },
    },
    curry: { what: 'Riz au curry nature, portion normale' },
    'famires-lunch': {
      what: 'Menu du midi en semaine, bar à boissons en supplément',
      note: 'Le bar à boissons ajoute ¥200 à ¥330',
      chainNotes: { Gusto: 'varie selon la succursale' },
    },
    'wa-breakfast': {
      what: 'Le petit-déjeuner japonais le moins cher : riz, soupe miso, œuf ou natto',
      note: 'Avec du poisson grillé : ¥530 à ¥700. Servi jusqu’à 11:00',
    },
    morning: {
      what: 'Formule du matin avec un café',
      chainNotes: {
        Doutor: 'Un sandwich avec un petit café, jusqu’à 10:30',
        "Komeda's Coffee": 'Le toast et un œuf sont offerts avec toute boisson jusqu’à 11:00, donc c’est simplement le prix du café',
      },
    },
    'sushi-lunch': {
      what: 'Menu de nigiri du midi en semaine, avec soupe et chawanmushi',
      chainNotes: {
        Sushizanmai: 'En semaine jusqu’à 15:00, dans la plupart des succursales de Tokyo. Les taxes ne sont pas précisées sur le menu du midi',
      },
    },
    'sushi-dinner': {
      what: 'Menu de nigiri de la carte habituelle',
      chainNotes: { Sushizanmai: 'Le même menu et les mêmes prix toute la journée. Il n’y a pas de prix du soir distinct' },
    },
    'wagyu-lunch': {
      what: 'Déjeuner steak de faux-filet de wagyu',
      chainNotes: { Matsunami: 'Un service de 10 % est ajouté. D’après le menu de juillet 2025 du restaurant, le dernier qu’il publie' },
    },
    'wagyu-dinner': {
      what: 'Le menu de steak de wagyu le moins cher',
      chainNotes: { Matsunami: 'Le menu A5 commence à ¥12,100. Un service de 10 % est ajouté. D’après le menu de juillet 2025 du restaurant' },
    },
    ekiben: {
      what: 'Bento de gare en vente à la gare de Tokyo',
      chainNotes: {
        'JR Central (Tokaido Shinkansen)': 'La boîte makunouchi standard coûte ¥1,600',
        'Ekibenya Matsuri': 'La boîte makunouchi standard coûte ¥1,300. La boutique ne liste qu’une trentaine des quelque 150 boîtes qu’elle vend',
      },
    },
    depachika: {
      what: 'Salade vendue au poids, pour 100 g',
      chainNotes: { RF1: 'Une croquette de pomme de terre coûte ¥195. Certaines succursales de la région de Tokyo demandent plus pour certaines salades' },
    },
    'hotel-breakfast': {
      what: 'Buffet de petit-déjeuner, un adulte, réservé à l’avance',
      chainNotes: {
        'APA Hotel': 'Quatre hôtels de Tokyo à Shinjuku, Asakusa et Roppongi. ¥1,800 à ¥2,500 si l’on paie sur place le jour même',
      },
    },
    'tachigui-sushi': { what: 'Une pièce de nigiri dans un bar à sushis debout' },
    monja: { what: 'Le monjayaki de base' },
    bakery: { what: 'Un croissant' },
  },
};

const es: FoodPricesText = {
  groups: {
    noodles: {
      name: 'Fideos',
      intro:
        'La referencia más fiable de comer fuera en Japón. Comida de todos los días, a precios que apenas se movieron durante una década hasta hace poco. El somen se deja fuera: es un plato de verano que se come en casa, no una categoría de restaurante.',
    },
    sushi: {
      name: 'Sushi',
      intro:
        'El plato sobre el que todo visitante tiene una opinión y ningún precio de referencia. La encuesta cubre solo el sushi sobre cinta transportadora, que ya es en sí la referencia útil.',
    },
    'rice-bowls': {
      name: 'Cuencos de arroz',
      intro:
        'Donde más se abre la brecha entre el Japón cotidiano y el Japón turístico. Un cuenco de marisco no tiene cifra oficial, y por eso mismo su precio puede ser cualquiera.',
    },
    teishoku: {
      name: 'Menús completos y washoku',
      intro: 'El almuerzo habitual del Japón que trabaja, y el formato en el que el precio más dice sobre el lugar.',
    },
    meat: {
      name: 'Carne',
      intro:
        'Lo que los visitantes cuentan que comieron con más gusto en Japón, el doble que el sushi. También donde «wagyu» en un cartel deja de significar algo concreto. El teppanyaki se deja fuera: en la práctica es la misma compra que un solomillo de wagyu.',
    },
    konamono: {
      name: 'Plancha y comida callejera',
      intro: 'Comida de Osaka y de Hiroshima, y la categoría en la que la versión de una zona turística cuesta el triple sin saber mejor.',
    },
    nabe: {
      name: 'Ollas y sopas',
      intro: 'Sobre todo un formato de cena para dos o más, así que la cifra que importa es la de por persona.',
    },
    izakaya: {
      name: 'Izakaya y bebidas',
      intro:
        'El lugar donde los visitantes reciben con más frecuencia una cuenta que no esperaban — por lo general no por la comida, sino por lo que se le añadió.',
    },
    cafe: {
      name: 'Cafés y dulces',
      intro: 'Útil para calibrar todo lo demás. Un café es la forma más barata de saber qué cree ser un lugar.',
    },
    takeaway: {
      name: 'Para llevar y comida preparada',
      intro:
        'Donde Japón es de verdad barato, y donde un viaje largo ahorra dinero real. También la comparación más justa frente a un puesto de zona turística.',
    },
    fastfood: {
      name: 'Comida rápida y cadenas',
      intro: 'El suelo de comer fuera en Japón, y un recordatorio útil de lo poco que puede costar una comida.',
    },
    breakfast: {
      name: 'Desayuno',
      intro:
        'La decisión que los visitantes de estancia larga toman once veces. Un bufet de hotel frente a un desayuno completo fuera es la mayor elección repetida de un viaje de dos semanas.',
    },
    market: {
      name: 'Mercados y puestos callejeros',
      intro: 'Los mismos platos de arriba, vendidos donde los clientes son los visitantes. La diferencia no es un recargo — es otra categoría de compra.',
    },
    'no-price': {
      name: 'Cuando no hay cifra',
      intro:
        'El límite de esta página. Son los cargos que aparecen en la caja y no en la carta — y la razón por la que un precio de referencia importa más justo donde no existe.',
    },
  },
  items: {
    ramen: { name: 'Ramen', referenceNote: 'Desde ¥800 por un cuenco sencillo en Tokio, unos ¥1,000 si le añades ingredientes' },
    'tsukemen-dipping-noodles': { name: 'Tsukemen (fideos para mojar)', referenceNote: 'Tokio, un cuenco estándar' },
    soba: { name: 'Soba' },
    udon: { name: 'Udon' },
    yakisoba: { name: 'Yakisoba', referenceNote: 'Tokio, como plato en un restaurante' },
    'standing-soba-at-a-station': {
      name: 'Soba de pie en una estación',
      referenceNote: 'La comida caliente más barata de un andén japonés, y una de las de mejor relación calidad-precio',
    },
    'conveyor-belt-sushi': {
      name: 'Sushi sobre cinta transportadora',
      referenceNote: 'Una comida completa para una persona. La cifra de la encuesta que aparece al lado es de dos piezas de atún, no de una cuenta',
    },
    'sushi-restaurant-lunch-set': { name: 'Restaurante de sushi, menú del almuerzo', referenceNote: 'Menos de la mitad de lo que cobra la misma barra por la noche' },
    'sushi-restaurant-dinner': { name: 'Restaurante de sushi, cena', referenceNote: 'Y hacia arriba sin techo' },
    'standing-sushi-bar': {
      name: 'Barra de sushi de pie',
      referenceNote: 'De pie no significa barato aquí — significa rápido, y a menudo muy bueno',
    },
    'supermarket-sushi-pack': { name: 'Bandeja de sushi de supermercado', referenceNote: 'A mitad de precio por la noche en la mayoría de los supermercados' },
    'gyudon-beef-bowl': { name: 'Gyudon (cuenco de ternera)' },
    'oyakodon-chicken-and-egg': { name: 'Oyakodon (pollo y huevo)', referenceNote: 'Tokio, un local estándar' },
    'katsudon-pork-cutlet': { name: 'Katsudon (chuleta de cerdo)', referenceNote: 'Tokio, un local estándar' },
    'tendon-tempura': { name: 'Tendon (tempura)', referenceNote: 'Tokio, un local estándar' },
    'unaju-eel': { name: 'Unaju (anguila)', referenceNote: 'La anguila es el único plato cotidiano que en Japón es de verdad caro' },
    'kaisendon-seafood-bowl': {
      name: 'Kaisendon (cuenco de marisco)',
      referenceNote: 'No existe cifra oficial. Por debajo de esta, un cliente japonés pide sin pensarlo',
      touristNote: 'Kuromon (Osaka) y Nishiki (Kioto), ¥4,000–5,000',
    },
    'grilled-fish-set': { name: 'Menú de pescado a la plancha', referenceNote: 'Arroz, sopa y encurtidos incluidos — este es el almuerzo japonés estándar' },
    'tonkatsu-set': { name: 'Menú de tonkatsu', referenceNote: 'Por encima del límite de ¥2,000 en cuanto pides el mejor corte' },
    'tempura-counter-lunch': { name: 'Tempura, barra, almuerzo', referenceNote: 'La misma barra por la noche cuesta varias veces esta cifra' },
    'sukiyaki-per-person': { name: 'Sukiyaki, por persona', referenceNote: 'Una olla compartida, así que la cifra es por cabeza' },
    'shabu-shabu-per-person': { name: 'Shabu-shabu, por persona', referenceNote: 'El mismo nivel que el sukiyaki, y por lo general el mismo tipo de restaurante' },
    'kaiseki-course-per-person': {
      name: 'Menú kaiseki, por persona',
      referenceNote: 'El suelo, no lo típico. Es la única categoría sin techo y sin precio de referencia',
    },
    'yakiniku-per-person': { name: 'Yakiniku, por persona', referenceNote: 'Asándolo tú mismo, una persona, con bebidas' },
    'wagyu-steak-lunch': { name: 'Filete de wagyu, almuerzo', referenceNote: 'Almuerzo en Matsunami, en Asakusa. La misma barra por la noche cuesta más o menos el doble' },
    'wagyu-steak-dinner': { name: 'Filete de wagyu, cena', referenceNote: 'Cena en la misma barra de Asakusa' },
    'yakitori-per-skewer': {
      name: 'Yakitori, por brocheta',
      referenceNote: 'Se cobra por brocheta, y nadie pide una sola. Una comida son varias, más las bebidas',
    },
    'jingisukan-lamb': { name: 'Jingisukan (cordero)', referenceNote: 'Un plato de Hokkaido, y allí es más barato que en Tokio' },
    okonomiyaki: { name: 'Okonomiyaki', referenceNote: 'Las versiones de Osaka y de Hiroshima son platos distintos a un precio parecido' },
    'takoyaki-6-8-pieces': { name: 'Takoyaki, 6-8 piezas', referenceNote: 'Un tentempié más que una comida, y lo clásico para comer caminando' },
    monjayaki: { name: 'Monjayaki', referenceNote: 'Tokio, y casi desconocido fuera de ella' },
    'kushikatsu-per-skewer': {
      name: 'Kushikatsu, por brocheta',
      referenceNote: 'Se cobra por brocheta. Una comida son varias, y la salsa no es para mojar dos veces',
    },
    'gyoza-one-plate': { name: 'Gyoza, un plato', referenceNote: 'Un acompañamiento en Japón, no un plato principal' },
    'motsunabe-per-person': { name: 'Motsunabe, por persona', referenceNote: 'Un plato de Fukuoka, que normalmente se pide para dos o más' },
    'mizutaki-per-person': { name: 'Mizutaki, por persona', referenceNote: 'También de Fukuoka, y el más suave de los dos' },
    'oden-per-piece': { name: 'Oden, por pieza', referenceNote: 'Se cobra por pieza, también en los konbini en invierno' },
    'miso-soup-as-a-side': { name: 'Sopa de miso, como acompañamiento', referenceNote: 'Suele ir incluida con un menú — este es el precio cuando no lo está' },
    'izakaya-per-person-with-drinks': {
      name: 'Izakaya, por persona con bebidas',
      referenceNote: 'Lo que cuesta por cabeza una noche normal. No es un suelo — es la cuenta típica',
    },
    'otoshi-compulsory-small-dish': {
      name: 'Otoshi (platito obligatorio)',
      why: 'Llega un platito sin que lo pidas y se añade un cargo por el asiento. Es una práctica habitual, no una estafa, y rara vez está escrita en inglés.',
      whatToDo:
        'Hay una escala: ¥300 es generoso, ¥500 es normal, ¥1,000 significa que te están timando. Por lo general no se puede rechazar, así que léelo como un cubierto y juzga el sitio por él.',
    },
    'draft-beer': { name: 'Cerveza de barril', referenceNote: 'Por vaso, en un izakaya independiente' },
    'sake-one-go-180ml': { name: 'Sake, un go (180 ml)', referenceNote: 'Un go son 180 ml, algo así como vaso y medio' },
    highball: { name: 'Highball', referenceNote: 'Whisky con soda, la bebida barata de siempre' },
    shochu: { name: 'Shochu', referenceNote: 'Por lo general lo más barato de la carta de bebidas' },
    'coffee-cafe': { name: 'Café, cafetería' },
    'matcha-with-a-sweet': { name: 'Matcha con un dulce', referenceNote: 'Solo como guía. Las casas de té especializadas son raras hoy, así que el precio varía mucho' },
    'kakigori-shaved-ice': {
      name: 'Kakigori (hielo raspado)',
      referenceNote:
        'En un local especializado a la antigua. Esos han ido quedando pocos, y las cafeterías fotogénicas que los sustituyeron cobran entre 2,000 y 3,000 por el mismo cuenco de hielo. No merece la pena con un presupuesto ajustado',
    },
    parfait: { name: 'Parfait', referenceNote: 'En una cafetería' },
    crepe: { name: 'Crepe', referenceNote: 'Un puesto callejero, para comer caminando' },
    'convenience-store-onigiri': {
      name: 'Onigiri de konbini',
      referenceNote: 'Una franja amplia — 150 por uno sencillo, hasta 350 por uno de huevas de salmón o de panza de atún',
    },
    'convenience-store-bento': { name: 'Bento de konbini', referenceNote: 'Una comida completa, caliente, a cualquier hora' },
    'ekiben-station-bento': { name: 'Ekiben (bento de estación)', referenceNote: 'Hasta 2,000 los regionales. Más o menos el doble que un bento de konbini' },
    'department-store-deli-one-item': {
      name: 'Charcutería de grandes almacenes, un artículo',
      referenceNote:
        'Se vende por peso o por marca, así que no hay techo. Algunos mostradores rebajan los precios en las dos o tres últimas horas, aunque no siempre (JNTO)',
    },
    'bakery-one-item': { name: 'Panadería, un artículo', referenceNote: 'En una panadería de verdad. Un pan de molde de supermercado es otra compra' },
    hamburger: { name: 'Hamburguesa' },
    'curry-rice': { name: 'Arroz con curry' },
    'gyudon-chain-regular': {
      name: 'Cadena de gyudon, ración normal',
      referenceNote: 'El único caso de esta página en el que la cifra de la encuesta y la calle coinciden casi exactamente',
    },
    'family-restaurant-lunch': { name: 'Restaurante familiar, almuerzo', referenceNote: 'La barra de bebidas suele ser aparte' },
    'hotel-breakfast-buffet': {
      name: 'Desayuno bufet de hotel',
      referenceNote:
        'Depende de la categoría del hotel, y Tokio sale caro. En once mañanas, es la mayor decisión repetida de un viaje de dos semanas',
    },
    'japanese-set-breakfast': {
      name: 'Desayuno japonés completo',
      referenceNote: 'Escasean los sitios que sirven un teishoku de mañana como es debido. Las cadenas de gyudon cubren el hueco con un menú de desayuno',
    },
    'cafe-morning-set': {
      name: 'Menú de mañana en una cafetería',
      referenceNote:
        'Una cifra de Tokio. En Kansai y sobre todo en los alrededores de Aichi ronda los 500, y a menudo viene gratis con un café — el servicio de mañana es una institución del oeste de Japón que casi no existe en Tokio',
    },
    'seafood-bowl-at-a-market': {
      name: 'Cuenco de marisco en un mercado',
      touristNote: 'Kuromon, Nishiki, ¥4,000–5,000',
      referenceNote: 'El mismo cuenco una calle más atrás',
    },
    'grilled-skewer-at-a-stall': {
      name: 'Brocheta a la parrilla en un puesto',
      referenceNote: 'Lo que cuesta una brocheta en un puesto de festival',
      touristNote: 'Brochetas de wagyu en una galería turística',
      context:
        'Comer brochetas en la calle no es un hábito japonés de todos los días. Pertenece a los festivales — yakitori, plátanos bañados en chocolate, manzanas de caramelo — y la cifra de ¥500 es la de ese mundo. La brocheta de wagyu de ¥2,000 es algo totalmente distinto: un formato inventado en la década de 2000 y dirigido a los visitantes. Los japoneses prácticamente no las compran.',
    },
    'one-item-while-walking': {
      name: 'Un artículo para comer caminando',
      referenceNote: 'Una moneda. El techo reconocido de la comida callejera',
      touristNote: 'El extremo alto en una zona turística',
      context:
        'Una moneda — ¥500 — es lo que los japoneses entienden que cuesta la comida callejera. Gastar ¥1,000 en algo que se come caminando te sitúa, según los criterios locales, en un territorio de ingresos holgados. Por encima de ¥1,000 en una zona turística, el precio está fijado para los visitantes del extranjero y para nadie más.',
    },
    'crab-leg-grilled': {
      name: 'Pata de cangrejo a la parrilla',
      touristNote: 'Regiones cangrejeras como Niigata, en un puesto',
      context:
        'Este es el precio de venta real donde el cangrejo es un producto local. De ahí se desprenden dos cosas. Tokio casi no come cangrejo, así que un puesto de cangrejo en Tokio ya está fuera de lugar. Y en las propias regiones cangrejeras la gente lo come en casa y no en un puesto, de modo que ni siquiera los locales pagan el precio del puesto.',
    },
    'jika-market-price': {
      name: 'Jika (precio de mercado)',
      why: 'La carta no da ninguna cifra porque el precio mayorista cambia a diario. Es habitual en los ingredientes del sushi, el cangrejo, el fugu, la langosta, el pescado salvaje y el matsutake. Es una práctica legítima, no un truco — pero te quita por completo el punto de referencia.',
      whatToDo:
        'Pregunta el precio antes de pedir. No es de mala educación, y los clientes japoneses lo hacen. «Kore wa jika desu ka? O-ikura desu ka?» — ¿Esto es precio de mercado? ¿Cuánto cuesta?',
    },
    'service-charge': {
      name: 'Cargo por servicio',
      why: 'Por lo general entre un 10 y un 15 % añadido en hoteles y restaurantes de gama alta, indicado en letra pequeña y no en el precio del plato.',
      whatToDo: 'Cuéntalo en cualquier restaurante de hotel o ryotei. Es aparte del impuesto sobre el consumo.',
    },
    'seat-charge-and-late-night-surcharge': {
      name: 'Cargo por asiento y recargo nocturno',
      why: 'Algunos bares añaden un cubierto, y algunos un porcentaje pasadas las 22:00 o la medianoche.',
      whatToDo: 'Busca un pequeño aviso en la entrada o en la cubierta de la carta antes de sentarte.',
    },
    'all-you-can-eat-time-limit': {
      name: 'Límite de tiempo del «todo lo que puedas comer»',
      why: 'El precio anunciado cubre un tiempo fijo, normalmente 90 o 120 minutos, y la prórroga se cobra aparte.',
      whatToDo: 'Comprueba el tiempo al pedir, no cuando ya estás disfrutando.',
    },
  },
  chains: {
    ramen: { what: 'Ramen sencillo de salsa de soja, un cuenco' },
    tsukemen: { what: 'Tsukemen estándar', chainNotes: { 'Tsukemen TETSU': 'Locales de Tokio; algunos locales difieren' } },
    udon: {
      what: 'Kake udon sencillo, ración normal',
      chainNotes: {
        'Hanamaru Udon': 'La pequeña es la ración para una persona; la mediana cuesta ¥550',
        'Marugame Seimen': 'El kamaage udon cuesta ¥390',
      },
    },
    'tachigui-soba': {
      what: 'Kake soba sencillo',
      note: 'Con kakiage o un acompañamiento de tempura: de ¥550 a ¥620',
      chainNotes: { 'Komoro Soba': 'el menú no indica los impuestos' },
    },
    'sushi-kaiten': {
      what: 'El plato más barato',
      note: 'Un plato de atún magro cuesta de ¥120 a ¥150. Los locales del centro de Tokio cobran más por plato',
      chainNotes: { Sushiro: '¥150 en los locales del centro de Tokio' },
    },
    gyudon: { what: 'Cuenco de ternera, ración normal', chainNotes: { Matsuya: 'sopa de miso incluida' } },
    oyakodon: { what: 'Oyakodon, ración normal' },
    katsudon: { what: 'Katsudon, ración normal' },
    tendon: { what: 'El cuenco de tempura estándar', chainNotes: { Tenya: 'El cuenco más barato, de pollo y maitake, cuesta ¥630' } },
    unaju: { what: 'Unaju, categoría básica', chainNotes: { 'Unagi no Naruse': 'el menú no indica los impuestos' } },
    yakizakana: { what: 'Menú de caballa a la parrilla' },
    tonkatsu: { what: 'Menú de chuleta de lomo de cerdo' },
    sukiyaki: {
      what: 'Sukiyaki de ternera para una persona, no de buffet libre',
      chainNotes: {
        Kisoji:
          '¥1,430 es el menú del almuerzo con ternera estadounidense; ¥3,190 es el menú estándar con ternera nacional. Los locales del centro cobran más',
        'Washoku Sato': 'Una olla de sukiyaki para una persona, con udon',
      },
    },
    shabu: {
      what: 'Shabu-shabu para una persona',
      chainNotes: {
        Shabuyo: 'Cerdo de buffet libre; desde el almuerzo hasta la cena entre semana',
        Kisoji: 'Un menú, no de buffet libre. Los locales del centro cobran más',
        Onyasai: 'Ternera de buffet libre, el curso más barato',
      },
    },
    yakiniku: {
      what: 'Menú de buffet libre, del más barato al estándar, bebidas aparte',
      chainNotes: {
        'Yakiniku King': 'varía según el local',
        Jojoen:
          'Menú del almuerzo en el local de Shinjuku Chuo-Higashiguchi. El menú estándar entre semana cuesta ¥8,000 con servicio incluido, para dos o más personas',
      },
    },
    yakitori: {
      what: 'Una brocheta',
      chainNotes: {
        'Yakitori no Ogiya': 'El muslo cuesta ¥154, la mayoría de las demás brochetas ¥209',
        Torikizoku: 'Todo el menú cuesta ¥410, y el yakitori viene en platos de dos brochetas',
      },
    },
    okonomiyaki: { what: 'Okonomiyaki de cerdo (butatama)', chainNotes: { Chibo: 'Local de Yurakucho' } },
    takoyaki: { what: 'Takoyaki, ocho piezas', chainNotes: { Gindaco: 'Para comer en el local; ¥702 para llevar' } },
    kushikatsu: {
      what: 'Una brocheta de ternera',
      chainNotes: {
        'Kushikatsu Dengana': 'Las brochetas más baratas cuestan ¥110',
        'Kushikatsu Tanaka': 'El cerdo cuesta ¥198; la brocheta normal más barata, ¥88',
      },
    },
    gyoza: { what: 'Gyoza a la plancha, seis piezas' },
    motsunabe: {
      what: 'Motsunabe, una ración',
      chainNotes: {
        Arizuki: 'Local de Shibuya; el de miso cuesta ¥2,178; mínimo dos raciones',
        Ooyama: 'Local de Ginza; por la noche se añade un cargo por asiento de ¥550',
      },
    },
    oden: { what: 'Un trozo de daikon', note: 'Se vende en la barra en los meses fríos, y no en todos los locales' },
    'miso-soup': { what: 'Sopa de miso pedida sola', note: 'Matsuya la incluye gratis con cualquier comida en el local' },
    beer: { what: 'Cerveza de barril, un vaso', chainNotes: { 'Isomaru Suisan': 'de su carta de agosto de 2025, la última que publica la cadena' } },
    sake: {
      what: 'El sake básico de la carta',
      chainNotes: {
        Torikizoku: 'sake en vaso, volumen no indicado',
        Uotami: 'un go (180 ml), según indica la carta',
        'Isomaru Suisan': 'volumen no indicado; de su carta de agosto de 2025',
      },
    },
    highball: { what: 'El highball básico', chainNotes: { 'Isomaru Suisan': 'de su carta de agosto de 2025' } },
    shochu: { what: 'El vaso de shochu más barato', chainNotes: { 'Isomaru Suisan': 'de su carta de agosto de 2025' } },
    coffee: {
      what: 'Café de filtro, el tamaño más pequeño',
      chainNotes: {
        Starbucks: 'El Tall cuesta ¥455',
        "Komeda's Coffee": 'El precio más habitual en Tokio; de ¥540 a ¥700 según el local',
      },
    },
    parfait: { what: 'Un sundae de chocolate o un parfait estándar en un restaurante familiar' },
    crepe: { what: 'Crepes estándar, del más barato al más caro', chainNotes: { 'Dipper Dan': 'el menú no indica los impuestos' } },
    onigiri: { what: 'Desde el onigiri sencillo con sal hasta el más caro de los normales', note: 'Un onigiri de salmón cuesta de ¥181 a ¥235' },
    bento: { what: 'La gama de comidas en caja a la venta en la región de Kanto' },
    hamburger: {
      what: 'La hamburguesa sencilla',
      note: 'Las hamburguesas insignia, una Big Mac y una Mos Burger, cuestan ¥500 cada una',
      chainNotes: { "McDonald's": 'más en los locales del centro de la ciudad' },
    },
    curry: { what: 'Arroz con curry sencillo, ración normal' },
    'famires-lunch': {
      what: 'Menú del almuerzo entre semana, barra de bebidas aparte',
      note: 'La barra de bebidas suma de ¥200 a ¥330',
      chainNotes: { Gusto: 'varía según el local' },
    },
    'wa-breakfast': {
      what: 'El desayuno japonés más barato: arroz, sopa de miso, huevo o natto',
      note: 'Con pescado a la parrilla: de ¥530 a ¥700. Se sirve hasta las 11:00',
    },
    morning: {
      what: 'Menú de mañana con café',
      chainNotes: {
        Doutor: 'Un sándwich con un café pequeño, hasta las 10:30',
        "Komeda's Coffee": 'La tostada y el huevo vienen gratis con cualquier bebida hasta las 11:00, así que esto es solo el precio del café',
      },
    },
    'sushi-lunch': {
      what: 'Menú de nigiri del almuerzo entre semana, con sopa y chawanmushi',
      chainNotes: {
        Sushizanmai: 'Entre semana hasta las 15:00, en la mayoría de los locales de Tokio. El menú del almuerzo no indica los impuestos',
      },
    },
    'sushi-dinner': {
      what: 'Menú de nigiri de la carta habitual',
      chainNotes: { Sushizanmai: 'La misma carta y los mismos precios todo el día. No hay un precio aparte para la noche' },
    },
    'wagyu-lunch': {
      what: 'Almuerzo de filete de lomo de wagyu',
      chainNotes: { Matsunami: 'Se añade un 10 % de cargo por servicio. De la carta de julio de 2025 del restaurante, la última que publica' },
    },
    'wagyu-dinner': {
      what: 'El menú de filete de wagyu más barato',
      chainNotes: { Matsunami: 'El menú A5 empieza en ¥12,100. Se añade un 10 % de cargo por servicio. De la carta de julio de 2025 del restaurante' },
    },
    ekiben: {
      what: 'Bento de estación a la venta en la estación de Tokio',
      chainNotes: {
        'JR Central (Tokaido Shinkansen)': 'La caja makunouchi estándar cuesta ¥1,600',
        'Ekibenya Matsuri': 'La caja makunouchi estándar cuesta ¥1,300. La tienda lista solo unas 30 de las aproximadamente 150 cajas que vende',
      },
    },
    depachika: {
      what: 'Ensalada vendida por peso, por 100 g',
      chainNotes: { RF1: 'Una croqueta de patata cuesta ¥195. Algunos locales de la zona de Tokio cobran más por ciertas ensaladas' },
    },
    'hotel-breakfast': {
      what: 'Desayuno bufet, un adulto, reservado con antelación',
      chainNotes: {
        'APA Hotel': 'Cuatro hoteles de Tokio en Shinjuku, Asakusa y Roppongi. De ¥1,800 a ¥2,500 si se paga el mismo día',
      },
    },
    'tachigui-sushi': { what: 'Una pieza de nigiri en una barra de sushi de pie' },
    monja: { what: 'El monjayaki básico' },
    bakery: { what: 'Un croissant' },
  },
};

export const table: { en: FoodPricesText } & Partial<Record<Exclude<Locale, 'en'>, FoodPricesText>> = { en, ko, fr, es };

const of = (locale: string): FoodPricesText | undefined => (table as Record<string, FoodPricesText | undefined>)[locale];

function localizeChain(chain: ChainItem, key: string | undefined, t: FoodPricesText): ChainItem {
  const c = key ? t.chains[key] : undefined;
  if (!c) return chain;
  return {
    ...chain,
    what: c.what ?? chain.what,
    note: c.note ?? chain.note,
    chains: chain.chains.map((p) => ({ ...p, note: c.chainNotes?.[p.chain] ?? p.note })),
  };
}

function localizeItem(item: PriceEntry, t: FoodPricesText): PriceEntry {
  const x = t.items[idOf(item.name)];
  return {
    ...item,
    name: x?.name ?? item.name,
    reference: item.reference && { ...item.reference, note: x?.referenceNote ?? item.reference.note },
    tourist: item.tourist && { ...item.tourist, note: x?.touristNote ?? item.tourist.note },
    context: x?.context ?? item.context,
    noFixedPrice: item.noFixedPrice && { why: x?.why ?? item.noFixedPrice.why, whatToDo: x?.whatToDo ?? item.noFixedPrice.whatToDo },
    chain: item.chain && localizeChain(item.chain, item.chainKey, t),
  };
}

/** 分類を指定の言語にする。英語（と表の無い言語）は原本をそのまま返す */
export function localizeGroup(group: PriceGroup, locale: string): PriceGroup {
  const t = of(locale);
  if (!t) return group;
  const g = t.groups[group.key];
  return { ...group, name: g?.name ?? group.name, intro: g?.intro ?? group.intro, items: group.items.map((i) => localizeItem(i, t)) };
}
