/**
 * 食の物価（src/pages/[lang]/food-prices.astro）の文言。
 * 品目・分類・観光地価格・チェーンの注記は src/i18n/data/food-prices.ts（データ側の上書き表）にある。
 * HTML の断片を含む文は set:html で出す（使えるタグは a strong em code br のみ）。
 * 置換記号：{{source}} 統計の URL、{{updated}} 統計の最終確認日、{{checked}} チェーン価格の最終確認日。
 */
import type { Locale } from '../../config.ts';
import { pickLocale } from '../index.ts';

const en = {
  title: 'What food costs in Japan',
  description:
    'Reference prices for Japanese food in one page: government survey averages for ramen, soba, udon, gyudon and more, the line above which locals hesitate, and what the same dishes cost in tourist areas.',
  /** 構造化データ（WebPage）の説明 */
  graphDescription: 'Reference prices for Japanese food, from the government retail price survey and from a resident.',
  kicker: 'Reference',
  dek: 'Every guide tells you a place is cheap or expensive. Almost none tell you what the normal price is. This page is the answer in one table: what the government price survey says, what a resident expects to pay, and where tourist areas sit against both.',

  line: {
    label: 'The line',
    note: 'Above this for a lunch, a Japanese customer stops and decides rather than simply ordering. It holds even somewhere good, even somewhere famous.',
    scale: 'Everyday prices, to scale — Tokyo ward area',
  },

  legend: {
    title: 'The kinds of number on this page',
    survey: 'Survey',
    surveyBody:
      'Published figures from the <a href="{{source}}" rel="noopener">Retail Price Survey</a> run by the Statistics Bureau of Japan, for the <strong>Tokyo ward area</strong>. The survey does not publish a national average for eating out, so this page does not claim one. The item definition and the month surveyed are given as published, not rounded or reworded. <strong>Refreshed monthly</strong> — last checked {{updated}}.',
    local: 'Local',
    localBody:
      'My own reference price, for dishes the survey does not cover. It is the level at which a Japanese customer orders without thinking about it, with the month I last checked.',
    chain: 'Chain',
    chainBody:
      'Menu prices from the big everyday chains, read from each chain\'s own website: tax included, eating in, regular size, an ordinary Tokyo branch. Shown as a range with the chains named, never as an average. A chain that does not publish its prices is left out rather than guessed. <strong>Checked monthly</strong> — last checked {{checked}}.',
    both: 'Both',
    bothBody:
      'Where the survey and the street disagree, this page shows both. Ramen is the clearest case: the surveyed figure is well under what a bowl actually costs in Tokyo once you order it the way people order it.',
    tourist: 'Tourist area',
    touristBody: 'What the same dish costs where visitors are the customers. Sourced or seen, with the date either way.',
  },

  jumpLabel: 'Jump to',
  jumpAria: 'Categories on this page',

  table: {
    dish: 'Dish',
    everyday: 'Everyday price',
    tourist: 'Tourist area',
    basis: 'Basis',
  },
  /** 価格の前に付ける語（末尾の空白も含む） */
  from: 'from ',
  surveySays: 'Survey says',
  noFixedPrice: 'No fixed price',
  notSet: 'not set yet',
  noNumber: 'No number',
  chips: { survey: 'Survey', local: 'Local', premium: 'Premium chain' },
  /** 品目のチェーン欄のラベル。tier は chain / budget / shop、many は比較対象が複数あるか、shop は名指しの店名 */
  chainLine: (tier: string, many: boolean, shop: string) =>
    tier === 'shop' ? shop : `${tier === 'budget' ? 'Budget chain' : 'Chain'}${many ? 's' : ''}`,
  chainChip: (tier: string) => (tier === 'budget' ? 'Budget chain' : tier === 'shop' ? 'Named restaurant' : 'Chain'),
  /** 折りたたみの見出し。開く前に何社ぶんあるかが分かるようにする */
  chainShop: 'Menu price and source',
  chainOne: (chain: string) => `${chain}: price and source`,
  chainMany: (n: number) => `${n} chains: prices and sources`,

  fillTitle: 'How complete this is',
  /** 固定の「Eight」（統計に基づく品目数）は本文の語。統計の品目数が変わったら直す */
  fillBody: (filled: number, total: number, chains: number, checked: string) =>
    `${filled} of ${total} dishes have a figure. Eight come from the government price survey; the rest come from someone who eats them, with the month each was checked. ${chains} also carry menu prices from the everyday chains, last checked against the chains' own websites on ${checked}. Where the survey and the street disagree, both are shown rather than one being quietly dropped.`,

};

export type Strings = typeof en;

const ko: Strings = {
  title: '일본의 음식 물가',
  description:
    '일본 음식의 기준 가격을 한 페이지에 모았습니다. 라멘, 소바, 우동, 규동 등의 정부 통계 평균, 현지인이 망설이기 시작하는 선, 관광지에서 같은 음식이 얼마인지 보여 줍니다.',
  graphDescription: '정부의 소매물가통계조사와 현지 거주자가 정리한 일본 음식의 기준 가격입니다.',
  kicker: '기준',
  dek: '어느 가이드나 그곳이 싸다, 비싸다고 말합니다. 정상 가격이 얼마인지 알려 주는 곳은 거의 없습니다. 이 페이지는 그 답을 표 하나에 담았습니다. 정부 물가 통계의 수치, 현지 주민이 낼 거라고 기대하는 금액, 그리고 관광지가 그 둘과 비교해 어디에 있는지입니다.',

  line: {
    label: '그 선',
    note: '점심 한 끼가 이 금액을 넘으면 일본 손님은 그냥 주문하지 않고 멈춰서 따져 봅니다. 맛있는 곳이든 유명한 곳이든 마찬가지입니다.',
    scale: '일상 가격의 비교 — 도쿄 구부 지역',
  },

  legend: {
    title: '이 페이지에 나오는 숫자의 종류',
    survey: '통계',
    surveyBody:
      '총무성 통계국이 실시하는 <a href="{{source}}" rel="noopener">소매물가통계조사</a>가 공표한 수치로, <strong>도쿄 구부 지역</strong>의 값입니다. 이 조사는 외식의 전국 평균을 공표하지 않으므로 이 페이지도 전국 평균이라고 하지 않습니다. 품목 정의와 조사 월은 공표된 그대로이며, 반올림하거나 바꿔 쓰지 않았습니다. <strong>매월 갱신</strong> — 마지막 확인 {{updated}}.',
    local: '현지',
    localBody:
      '통계가 다루지 않는 음식에 대한 제 기준 가격입니다. 일본 손님이 생각 없이 주문하는 수준이며, 마지막으로 확인한 달을 적었습니다.',
    chain: '체인',
    chainBody:
      '일상적으로 이용하는 대형 체인의 메뉴 가격으로, 각 체인의 공식 웹사이트에서 읽은 값입니다. 세금 포함, 매장 식사, 보통 크기, 도쿄의 평범한 지점 기준입니다. 평균이 아니라 체인 이름을 붙인 범위로 보여 줍니다. 가격을 공개하지 않는 체인은 짐작해서 넣지 않고 뺐습니다. <strong>매월 확인</strong> — 마지막 확인 {{checked}}.',
    both: '둘 다',
    bothBody:
      '통계와 거리의 가격이 어긋나는 곳에서는 이 페이지가 둘 다 보여 줍니다. 라멘이 가장 분명한 예입니다. 조사된 수치는 사람들이 실제로 주문하는 방식으로 먹었을 때 도쿄의 한 그릇 값보다 훨씬 낮습니다.',
    tourist: '관광지',
    touristBody: '방문객이 손님인 곳에서 같은 음식이 얼마인지입니다. 출처가 있거나 직접 본 값이며, 어느 쪽이든 날짜를 적었습니다.',
  },

  jumpLabel: '바로가기',
  jumpAria: '이 페이지의 분류',

  table: {
    dish: '음식',
    everyday: '일상 가격',
    tourist: '관광지',
    basis: '근거',
  },
  from: '최저 ',
  surveySays: '통계 수치',
  noFixedPrice: '정해진 가격 없음',
  notSet: '아직 미정',
  noNumber: '숫자 없음',
  chips: { survey: '통계', local: '현지', premium: '고급 체인' },
  chainLine: (tier: string, _many: boolean, shop: string) => (tier === 'shop' ? shop : tier === 'budget' ? '저가 체인' : '체인'),
  chainChip: (tier: string) => (tier === 'budget' ? '저가 체인' : tier === 'shop' ? '지정 식당' : '체인'),
  chainShop: '메뉴 가격과 출처',
  chainOne: (chain: string) => `${chain}: 가격과 출처`,
  chainMany: (n: number) => `체인 ${n}곳: 가격과 출처`,

  fillTitle: '얼마나 채워져 있는가',
  fillBody: (filled: number, total: number, chains: number, checked: string) =>
    `음식 ${total}개 중 ${filled}개에 금액이 있습니다. 8개는 정부 물가 통계에서, 나머지는 실제로 먹는 사람이 확인한 값이며 확인한 달을 함께 적었습니다. ${chains}개 품목에는 일상 체인의 메뉴 가격도 실었고, 각 체인의 공식 웹사이트로 ${checked}에 마지막으로 확인했습니다. 통계와 거리의 가격이 어긋나는 곳에서는 한쪽을 슬며시 지우지 않고 둘 다 보여 줍니다.`,
};

const fr: Strings = {
  title: 'Ce que coûte la nourriture au Japon',
  description:
    'Les prix de référence de la cuisine japonaise sur une seule page : moyennes de l’enquête officielle pour les ramen, soba, udon, gyudon et plus, le seuil au-delà duquel les habitants hésitent, et le prix des mêmes plats dans les zones touristiques.',
  graphDescription: 'Prix de référence de la cuisine japonaise, d’après l’enquête officielle sur les prix de détail et d’après un résident.',
  kicker: 'Référence',
  dek: 'Chaque guide vous dit qu’un endroit est bon marché ou cher. Presque aucun ne vous dit quel est le prix normal. Cette page y répond dans un seul tableau : ce que dit l’enquête officielle sur les prix, ce qu’un résident s’attend à payer, et où se situent les zones touristiques par rapport aux deux.',

  line: {
    label: 'Le seuil',
    note: 'Au-delà de ce montant pour un déjeuner, un client japonais s’arrête et réfléchit au lieu de simplement commander. C’est vrai même dans une bonne adresse, même dans une adresse célèbre.',
    scale: 'Prix du quotidien, à l’échelle — zone des arrondissements de Tokyo',
  },

  legend: {
    title: 'Les types de chiffres sur cette page',
    survey: 'Enquête',
    surveyBody:
      'Chiffres publiés par l’<a href="{{source}}" rel="noopener">enquête sur les prix de détail</a> du Bureau des statistiques du Japon, pour la <strong>zone des arrondissements de Tokyo</strong>. L’enquête ne publie pas de moyenne nationale pour les repas au restaurant, donc cette page n’en annonce pas. La définition de l’article et le mois de relevé sont donnés tels que publiés, sans arrondi ni reformulation. <strong>Actualisé chaque mois</strong> — dernière vérification le {{updated}}.',
    local: 'Local',
    localBody:
      'Mon propre prix de référence, pour les plats que l’enquête ne couvre pas. C’est le niveau auquel un client japonais commande sans y réfléchir, avec le mois de ma dernière vérification.',
    chain: 'Chaîne',
    chainBody:
      'Prix de menu des grandes chaînes du quotidien, relevés sur le site de chaque chaîne : taxes comprises, sur place, taille normale, une succursale ordinaire de Tokyo. Présentés sous forme de fourchette avec le nom des chaînes, jamais comme une moyenne. Une chaîne qui ne publie pas ses prix est écartée plutôt que devinée. <strong>Vérifié chaque mois</strong> — dernière vérification le {{checked}}.',
    both: 'Les deux',
    bothBody:
      'Quand l’enquête et la rue ne s’accordent pas, cette page montre les deux. Le ramen en est le cas le plus net : le chiffre de l’enquête est bien inférieur à ce que coûte réellement un bol à Tokyo quand on le commande comme tout le monde.',
    tourist: 'Zone touristique',
    touristBody: 'Ce que coûte le même plat là où les visiteurs sont la clientèle. Source ou observation directe, avec la date dans les deux cas.',
  },

  jumpLabel: 'Aller à',
  jumpAria: 'Catégories de cette page',

  table: {
    dish: 'Plat',
    everyday: 'Prix du quotidien',
    tourist: 'Zone touristique',
    basis: 'Base',
  },
  from: 'à partir de ',
  surveySays: 'Selon l’enquête',
  noFixedPrice: 'Pas de prix fixe',
  notSet: 'pas encore défini',
  noNumber: 'Aucun chiffre',
  chips: { survey: 'Enquête', local: 'Local', premium: 'Chaîne haut de gamme' },
  chainLine: (tier: string, many: boolean, shop: string) =>
    tier === 'shop' ? shop : tier === 'budget' ? (many ? 'Chaînes économiques' : 'Chaîne économique') : many ? 'Chaînes' : 'Chaîne',
  chainChip: (tier: string) => (tier === 'budget' ? 'Chaîne économique' : tier === 'shop' ? 'Restaurant précis' : 'Chaîne'),
  chainShop: 'Prix du menu et source',
  chainOne: (chain: string) => `${chain} : prix et source`,
  chainMany: (n: number) => `${n} chaînes : prix et sources`,

  fillTitle: 'Niveau de complétude',
  fillBody: (filled: number, total: number, chains: number, checked: string) =>
    `${filled} plats sur ${total} ont un chiffre. Huit viennent de l’enquête officielle sur les prix ; les autres viennent de quelqu’un qui les mange, avec le mois de chaque vérification. ${chains} comportent aussi des prix de menu des chaînes du quotidien, vérifiés pour la dernière fois sur les sites des chaînes le ${checked}. Quand l’enquête et la rue ne s’accordent pas, les deux sont montrés plutôt que d’en écarter un discrètement.`,
};

const es: Strings = {
  title: 'Cuánto cuesta la comida en Japón',
  description:
    'Los precios de referencia de la comida japonesa en una sola página: promedios de la encuesta oficial para ramen, soba, udon, gyudon y más, el límite a partir del cual los locales dudan y lo que cuestan los mismos platos en zonas turísticas.',
  graphDescription: 'Precios de referencia de la comida japonesa, según la encuesta oficial de precios al por menor y según un residente.',
  kicker: 'Referencia',
  dek: 'Todas las guías te dicen que un lugar es barato o caro. Casi ninguna te dice cuál es el precio normal. Esta página lo responde en una sola tabla: qué dice la encuesta oficial de precios, cuánto espera pagar un residente y dónde se sitúan las zonas turísticas respecto a ambos.',

  line: {
    label: 'El límite',
    note: 'Por encima de esta cifra para un almuerzo, un cliente japonés se detiene y decide en lugar de pedir sin más. Pasa incluso en un buen sitio, incluso en uno famoso.',
    scale: 'Precios cotidianos, a escala — zona de los distritos de Tokio',
  },

  legend: {
    title: 'Los tipos de cifra de esta página',
    survey: 'Encuesta',
    surveyBody:
      'Cifras publicadas por la <a href="{{source}}" rel="noopener">Encuesta de Precios al Por Menor</a> de la oficina de estadística de Japón, para la <strong>zona de los distritos de Tokio</strong>. La encuesta no publica un promedio nacional de comer fuera, así que esta página tampoco lo afirma. La definición del producto y el mes de la encuesta se dan tal como se publican, sin redondear ni reformular. <strong>Se actualiza cada mes</strong> — última comprobación: {{updated}}.',
    local: 'Local',
    localBody:
      'Mi propio precio de referencia, para los platos que la encuesta no cubre. Es el nivel al que un cliente japonés pide sin pensarlo, con el mes de mi última comprobación.',
    chain: 'Cadena',
    chainBody:
      'Precios de carta de las grandes cadenas de uso diario, leídos en la web de cada cadena: con impuestos incluidos, para comer en el local, tamaño normal, un local corriente de Tokio. Se muestran como un rango con el nombre de las cadenas, nunca como un promedio. Una cadena que no publica sus precios se deja fuera en lugar de adivinarlos. <strong>Se comprueba cada mes</strong> — última comprobación: {{checked}}.',
    both: 'Ambos',
    bothBody:
      'Cuando la encuesta y la calle no coinciden, esta página muestra ambos. El ramen es el caso más claro: la cifra de la encuesta queda muy por debajo de lo que cuesta de verdad un cuenco en Tokio si lo pides como lo pide la gente.',
    tourist: 'Zona turística',
    touristBody: 'Lo que cuesta el mismo plato donde los clientes son los visitantes. Con fuente o visto en persona, y en ambos casos con la fecha.',
  },

  jumpLabel: 'Ir a',
  jumpAria: 'Categorías de esta página',

  table: {
    dish: 'Plato',
    everyday: 'Precio cotidiano',
    tourist: 'Zona turística',
    basis: 'Base',
  },
  from: 'desde ',
  surveySays: 'Según la encuesta',
  noFixedPrice: 'Sin precio fijo',
  notSet: 'aún sin fijar',
  noNumber: 'Sin cifra',
  chips: { survey: 'Encuesta', local: 'Local', premium: 'Cadena de gama alta' },
  chainLine: (tier: string, many: boolean, shop: string) =>
    tier === 'shop' ? shop : tier === 'budget' ? (many ? 'Cadenas económicas' : 'Cadena económica') : many ? 'Cadenas' : 'Cadena',
  chainChip: (tier: string) => (tier === 'budget' ? 'Cadena económica' : tier === 'shop' ? 'Restaurante concreto' : 'Cadena'),
  chainShop: 'Precio de carta y fuente',
  chainOne: (chain: string) => `${chain}: precio y fuente`,
  chainMany: (n: number) => `${n} cadenas: precios y fuentes`,

  fillTitle: 'Qué tan completa está',
  fillBody: (filled: number, total: number, chains: number, checked: string) =>
    `${filled} de ${total} platos tienen una cifra. Ocho proceden de la encuesta oficial de precios; el resto, de alguien que los come, con el mes en que se comprobó cada uno. ${chains} incluyen además precios de carta de las cadenas de uso diario, comprobados por última vez en las webs de las propias cadenas el ${checked}. Cuando la encuesta y la calle no coinciden, se muestran ambas en lugar de descartar una en silencio.`,
};

export const table: { en: Strings } & Partial<Record<Exclude<Locale, 'en'>, Strings>> = { en, ko, fr, es };
export const strings = (locale: string): Strings => pickLocale(table, locale);
