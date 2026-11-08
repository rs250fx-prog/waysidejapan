/** トップページ（src/pages/[lang]/index.astro）の文言。翻訳者は ko / fr / es / zh-tw のキーを足す */
import type { Locale } from '../../config.ts';
import { pickLocale } from '../index.ts';

const en = {
  /** <title> と og:title。サイト名は config の SITE_NAME */
  title: (site: string) => `${site} — what Japan eats, and why`,
  description:
    'A Japanese local explaining what Japan eats and why: the price locals pay, the lineages behind each dish, and the trains and baths on the way.',
  rodeRoute: (on: string) => `Rode this route ${on}`,
  readGuide: 'Read the guide',
  /** 記事が1本も無いときの導入。tagline は config の TAGLINE */
  emptyDek: (tagline: string) => `${tagline} — what Japan eats, and why. The first guides are being written.`,

  strip: {
    photo: { title: 'Photographed myself', body: 'No stock images. Every photo is one I took, on the day stated.' },
    fares: { title: 'Fares with a date', body: 'Every price says when it was last checked, and gets rechecked.' },
    /** {{price}} の所に換算つきの価格（<Price>）が入る */
    yen: { title: 'Yen, converted', body: 'Shown as {{price}}, updated daily.' },
  },

  column: {
    kicker: 'Column',
    title: 'What a guidebook will not tell you',
    dek: 'The places locals quietly avoid, the everyday knowledge most Japanese people never had to learn, and the reasons behind both. Researched and sourced rather than photographed.',
    all: 'All columns',
    latest: 'Latest column',
    read: 'Read the column',
    sources: (n: number) => `${n} sources`,
    researched: 'Researched',
    more: 'More columns are being written. They take longer than the guides — every figure in one has to come from a source I can name.',
  },

  waysTitle: 'Three ways in',
  browse: 'Browse',
  /** カードの1行説明と絵の alt。キーはカテゴリ */
  ways: {
    eat: {
      dek: 'What each dish is, why it is the way it is, what locals pay for it, and where its lineages come from.',
      alt: 'Illustration of a bowl of soba with tempura and green onion, beside a plate of yakitori skewers',
    },
    soak: {
      dek: 'Onsen you can walk to from a platform, with the rules stated up front.',
      alt: 'Illustration of a small stone outdoor onsen with a wooden bucket, a local train waiting at the platform behind',
    },
    rail: {
      dek: 'Getting there: regional passes, model routes, and the transfers that catch people out.',
      alt: 'Illustration of a two-car local train crossing a bridge over rice paddies, with a rail pass in the corner',
    },
  } as Record<string, { dek: string; alt: string }>,
};

export type Strings = typeof en;
const ko: Strings = {
  title: (site: string) => `${site} — 일본인은 무엇을 먹고, 왜 그럴까`,
  description:
    '현지 일본인이 일본의 먹거리와 그 이유를 설명합니다. 현지인이 실제로 내는 가격, 각 요리의 계보, 가는 길의 기차와 온천까지.',
  rodeRoute: (on: string) => `${on}에 이 노선을 탔습니다`,
  readGuide: '가이드 읽기',
  emptyDek: (tagline: string) => `${tagline} — 일본인은 무엇을 먹고, 왜 그럴까. 첫 가이드를 쓰고 있습니다.`,

  strip: {
    photo: { title: '직접 찍은 사진', body: '스톡 이미지는 없습니다. 모든 사진은 제가 표시된 날짜에 직접 찍은 것입니다.' },
    fares: { title: '날짜가 붙은 요금', body: '모든 가격에 마지막으로 확인한 시점을 적고, 다시 확인합니다.' },
    yen: { title: '엔화, 환산', body: '{{price}}로 표시하며 매일 갱신합니다.' },
  },

  column: {
    kicker: '칼럼',
    title: '가이드북이 알려주지 않는 것',
    dek: '현지인이 조용히 피하는 곳, 대부분의 일본인이 따로 배울 필요가 없었던 일상 상식, 그리고 그 둘의 이유. 사진이 아니라 조사와 출처에 바탕을 둡니다.',
    all: '모든 칼럼',
    latest: '최신 칼럼',
    read: '칼럼 읽기',
    sources: (n: number) => `출처 ${n}건`,
    researched: '조사',
    more: '칼럼을 계속 쓰고 있습니다. 가이드보다 시간이 더 걸립니다. 칼럼의 모든 수치는 제가 이름을 댈 수 있는 출처에서 나와야 하기 때문입니다.',
  },

  waysTitle: '세 가지 입구',
  browse: '둘러보기',
  ways: {
    eat: {
      dek: '각 요리가 무엇인지, 왜 그런 모습인지, 현지인이 얼마를 내는지, 그 계보가 어디서 왔는지.',
      alt: '튀김과 파를 올린 소바 한 그릇과 야키토리 꼬치 접시를 그린 일러스트',
    },
    soak: {
      dek: '승강장에서 걸어갈 수 있는 온천, 규칙은 맨 앞에 밝혀 둡니다.',
      alt: '작은 돌 노천탕과 나무 양동이, 뒤쪽 승강장에 선 로컬 열차를 그린 일러스트',
    },
    rail: {
      dek: '가는 방법: 지역 패스, 모델 코스, 사람들이 자주 헤매는 환승.',
      alt: '논 위의 다리를 건너는 2량 로컬 열차와 구석의 레일 패스를 그린 일러스트',
    },
  },
};

const fr: Strings = {
  title: (site: string) => `${site} — ce que le Japon mange, et pourquoi`,
  description:
    'Un Japonais du cru explique ce que le Japon mange et pourquoi\u00a0: le prix que paient les habitants, les lignées derrière chaque plat, et les trains et les bains sur le chemin.',
  rodeRoute: (on: string) => `Trajet parcouru le ${on}`,
  readGuide: 'Lire le guide',
  emptyDek: (tagline: string) => `${tagline} — ce que le Japon mange, et pourquoi. Les premiers guides sont en cours d’écriture.`,

  strip: {
    photo: { title: 'Photos de ma main', body: 'Aucune image d’illustration. Chaque photo est de moi, prise le jour indiqué.' },
    fares: { title: 'Tarifs datés', body: 'Chaque prix indique quand il a été vérifié pour la dernière fois, et il est revérifié.' },
    yen: { title: 'Yens, convertis', body: 'Affiché sous la forme {{price}}, mis à jour chaque jour.' },
  },

  column: {
    kicker: 'Chronique',
    title: 'Ce qu’un guide ne vous dira pas',
    dek: 'Les endroits que les habitants évitent discrètement, les connaissances du quotidien que la plupart des Japonais n’ont jamais eu à apprendre, et les raisons des uns comme des autres. Des textes documentés et sourcés, plutôt que photographiés.',
    all: 'Toutes les chroniques',
    latest: 'Dernière chronique',
    read: 'Lire la chronique',
    sources: (n: number) => `${n} ${n === 1 ? 'source' : 'sources'}`,
    researched: 'Documenté',
    more: 'D’autres chroniques sont en cours d’écriture. Elles demandent plus de temps que les guides\u00a0: chaque chiffre doit venir d’une source que je peux nommer.',
  },

  waysTitle: 'Trois façons d’entrer',
  browse: 'Parcourir',
  ways: {
    eat: {
      dek: 'Ce qu’est chaque plat, pourquoi il est ainsi, ce que les habitants le paient et d’où viennent ses lignées.',
      alt: 'Illustration d’un bol de soba avec tempura et ciboule, à côté d’une assiette de brochettes de yakitori',
    },
    soak: {
      dek: 'Des onsen accessibles à pied depuis un quai, avec les règles annoncées d’emblée.',
      alt: 'Illustration d’un petit onsen en plein air en pierre avec un seau en bois, un train local attendant sur le quai derrière',
    },
    rail: {
      dek: 'Pour s’y rendre\u00a0: pass régionaux, itinéraires types et correspondances qui piègent.',
      alt: 'Illustration d’un train local de deux voitures traversant un pont au-dessus de rizières, avec un rail pass dans le coin',
    },
  },
};

const es: Strings = {
  title: (site: string) => `${site} — qué come Japón, y por qué`,
  description:
    'Un japonés de la zona explica qué come Japón y por qué: el precio que pagan los locales, los linajes detrás de cada plato, y los trenes y los baños en el camino.',
  rodeRoute: (on: string) => `Hice esta ruta el ${on}`,
  readGuide: 'Leer la guía',
  emptyDek: (tagline: string) => `${tagline} — qué come Japón, y por qué. Las primeras guías se están escribiendo.`,

  strip: {
    photo: { title: 'Fotos hechas por mí', body: 'Sin imágenes de archivo. Cada foto la tomé yo, el día indicado.' },
    fares: { title: 'Tarifas con fecha', body: 'Cada precio indica cuándo se comprobó por última vez, y se vuelve a comprobar.' },
    yen: { title: 'Yenes, convertidos', body: 'Se muestra como {{price}}, actualizado a diario.' },
  },

  column: {
    kicker: 'Columna',
    title: 'Lo que una guía de viaje no te cuenta',
    dek: 'Los lugares que los locales evitan en silencio, el conocimiento cotidiano que la mayoría de los japoneses nunca tuvo que aprender, y las razones de ambas cosas. Investigado y con fuentes, más que fotografiado.',
    all: 'Todas las columnas',
    latest: 'Última columna',
    read: 'Leer la columna',
    sources: (n: number) => `${n} ${n === 1 ? 'fuente' : 'fuentes'}`,
    researched: 'Investigado',
    more: 'Se están escribiendo más columnas. Llevan más tiempo que las guías: cada cifra tiene que venir de una fuente que pueda nombrar.',
  },

  waysTitle: 'Tres formas de entrar',
  browse: 'Explorar',
  ways: {
    eat: {
      dek: 'Qué es cada plato, por qué es como es, cuánto pagan por él los locales y de dónde vienen sus linajes.',
      alt: 'Ilustración de un cuenco de soba con tempura y cebollino, junto a un plato de brochetas de yakitori',
    },
    soak: {
      dek: 'Onsen a los que se llega a pie desde un andén, con las normas indicadas desde el principio.',
      alt: 'Ilustración de un pequeño onsen de piedra al aire libre con un cubo de madera, y un tren local esperando en el andén al fondo',
    },
    rail: {
      dek: 'Cómo llegar: pases regionales, rutas modelo y los transbordos que desorientan.',
      alt: 'Ilustración de un tren local de dos vagones cruzando un puente sobre arrozales, con un pase de tren en la esquina',
    },
  },
};

export const table: { en: Strings } & Partial<Record<Exclude<Locale, 'en'>, Strings>> = { en, ko, fr, es };
export const strings = (locale: string): Strings => pickLocale(table, locale);
