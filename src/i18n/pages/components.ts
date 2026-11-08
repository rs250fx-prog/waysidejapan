/**
 * 部品（src/components/*.astro）とサイト共通レイアウト（Base.astro）の固定文言。
 * 記事の MDX から呼ばれる部品の既定の文言（Verdict の「Week total」など）もここ。
 * UI 辞書（src/i18n/ui.ts）に既にある語（The short answer / Buy it if / Skip it if など）はそちらを使う。
 */
import type { Locale } from '../../config.ts';
import { pickLocale } from '../index.ts';

const en = {
  /** Base.astro */
  layout: {
    sectionsLabel: 'Sections',
    prices: 'Prices',
  },

  /** Price.astro（金額の前に付ける語。末尾の空白も含む） */
  price: { from: 'from ' },

  /** Cta.astro */
  cta: {
    bookedMyself: 'Sponsored · booked this myself',
    notUsed: 'Sponsored · not used by me',
    label: 'Check dates',
    from: 'from',
  },

  /** Verdict.astro */
  verdict: { totalLabel: 'Week total' },

  /** CompareTable.astro */
  compare: {
    option: 'Option',
    cost: 'Cost',
    covers: 'Covers',
    bestFor: 'Best for',
    /** スマホの積み上げ表示の1文 */
    stacked: (covers: string, bestFor: string) => `${covers}. Best for ${bestFor.toLowerCase()}.`,
  },

  /** FromExperience.astro */
  fromExperience: { seenMyself: 'Seen myself' },

  /** Figure.astro */
  figure: { transcript: 'Text in this illustration' },

  /** PhotoBand.astro（写真が用意できるまでの仮枠） */
  photoBand: { placeholder: 'OWN PHOTO' },

  /** ReferencePrice.astro */
  referencePrice: { tourist: 'Tourist-facing stall', local: 'What a local pays' },

  /** DishPrices.astro（品目ハブの「What it costs」） */
  dishPrices: {
    survey: 'Survey',
    budgetChains: 'Budget chains',
    chains: 'Chains',
    guideFigure: 'Our guide figure',
    from: 'from ',
    /** checked は YYYY-MM-DD */
    taxChecked: (checked: string) => ` · tax incl. · checked ${checked}`,
    all: (group: string) => `All ${group.toLowerCase()} prices, with sources`,
  },

  /** DishTile.astro */
  dishTile: {
    readGuide: 'Read the guide',
    lineageCount: (n: number) => `${n} ${n === 1 ? 'lineage' : 'lineages'}`,
  },

  /** GuideTile.astro */
  guideTile: { read: 'Read' },

  /** SoakTile.astro */
  soakTile: {
    read: 'Read',
    readGuide: 'Read the guide',
    minFromStation: (min: number) => `${min} min from the station`,
    tattooOk: 'Tattoos OK',
    noTattoos: 'No tattoos',
    tattooConditions: 'Tattoos: conditions',
  },

  /** LineageTable.astro */
  lineageTable: {
    lineage: 'Lineage',
    origin: 'Origin',
    note: 'Lineages without a link are on the list but not written yet. The table is kept in one place so every lineage is described on the same terms.',
  },

  /** RateNote.astro。通貨名は LOCALE_META.currencies のコードで引く */
  rateNote: {
    currencyNames: { EUR: 'the euro', USD: 'the US dollar', KRW: 'the Korean won', TWD: 'the Taiwan dollar' } as Record<string, string>,
    /** 「¥150.00 to the euro」 */
    rate: (yen: string, currency: string) => `¥${yen} to ${currency}`,
    /** 複数の通貨をつなぐ */
    join: (parts: string[]) => parts.join(' and '),
    /** 文頭から為替の基準日・出所まで。twd は台湾ドルを含むとき */
    body: (rates: string, asOf: string, twd: boolean) =>
      `Prices are in Japanese yen. Conversions are approximate, at ${rates} as of ${asOf}. Rates come from the European Central Bank, which publishes on working days only${twd ? ', except the Taiwan dollar, which comes from ExchangeRate-API' : ''}.`,
    faresVerified: (month: string) => `Fares verified ${month} — check the operator before you travel.`,
    pricesChecked: (month: string) => `Prices checked ${month}.`,
    foodPrices: 'What food costs in Japan →',
  },
};

export type Strings = typeof en;

const ko: Strings = {
  layout: {
    sectionsLabel: '섹션',
    prices: '가격',
  },

  price: { from: '최소 ' },

  cta: {
    bookedMyself: '제휴 · 직접 예약했습니다',
    notUsed: '제휴 · 직접 이용하지 않았습니다',
    label: '날짜 확인',
    from: '최소',
  },

  verdict: { totalLabel: '일주일 합계' },

  compare: {
    option: '선택지',
    cost: '비용',
    covers: '포함 범위',
    bestFor: '이런 분께',
    stacked: (covers: string, bestFor: string) => `${covers}. 추천 대상: ${bestFor}.`,
  },

  fromExperience: { seenMyself: '직접 본 것' },

  figure: { transcript: '이 그림 속 글자' },

  photoBand: { placeholder: '직접 찍은 사진' },

  referencePrice: { tourist: '관광객 대상 노점', local: '현지인이 내는 가격' },

  dishPrices: {
    survey: '조사',
    budgetChains: '저가 체인',
    chains: '체인',
    guideFigure: '이 가이드의 기준값',
    from: '최소 ',
    taxChecked: (checked: string) => ` · 세금 포함 · 확인일 ${checked}`,
    all: (group: string) => `${group} 전체 가격과 출처`,
  },

  dishTile: {
    readGuide: '가이드 읽기',
    lineageCount: (n: number) => `계보 ${n}개`,
  },

  guideTile: { read: '읽기' },

  soakTile: {
    read: '읽기',
    readGuide: '가이드 읽기',
    minFromStation: (min: number) => `역에서 ${min}분`,
    tattooOk: '문신 가능',
    noTattoos: '문신 불가',
    tattooConditions: '문신: 조건부',
  },

  lineageTable: {
    lineage: '계보',
    origin: '발상지',
    note: '링크가 없는 계보는 목록에는 있지만 아직 쓰지 않았습니다. 모든 계보를 같은 기준으로 설명하기 위해 이 표는 한 곳에서 관리합니다.',
  },

  rateNote: {
    currencyNames: { EUR: '유로', USD: '미국 달러', KRW: '한국 원', TWD: '대만 달러' } as Record<string, string>,
    rate: (yen: string, currency: string) => `${currency} 1 = ¥${yen}`,
    join: (parts: string[]) => parts.join(', '),
    body: (rates: string, asOf: string, twd: boolean) =>
      `가격은 일본 엔 기준입니다. 환산 금액은 대략적인 값이며, 적용 환율(${asOf} 기준)은 ${rates}입니다. 환율은 영업일에만 발표하는 유럽중앙은행 자료를 사용합니다${twd ? '(대만 달러만 ExchangeRate-API 자료)' : ''}.`,
    faresVerified: (month: string) => `요금은 ${month}에 확인했습니다 — 이동 전에 운영사에 확인하시기 바랍니다.`,
    pricesChecked: (month: string) => `가격은 ${month}에 확인했습니다.`,
    foodPrices: '일본 음식 물가 →',
  },
};

const fr: Strings = {
  layout: {
    sectionsLabel: 'Rubriques',
    prices: 'Prix',
  },

  price: { from: 'dès ' },

  cta: {
    bookedMyself: 'Sponsorisé · réservé par moi-même',
    notUsed: 'Sponsorisé · non utilisé par moi',
    label: 'Voir les dates',
    from: 'dès',
  },

  verdict: { totalLabel: 'Total de la semaine' },

  compare: {
    option: 'Option',
    cost: 'Coût',
    covers: 'Couvre',
    bestFor: 'Idéal pour',
    stacked: (covers: string, bestFor: string) => `${covers}. Idéal pour ${bestFor.toLowerCase()}.`,
  },

  fromExperience: { seenMyself: 'Vu par moi-même' },

  figure: { transcript: 'Texte de cette illustration' },

  photoBand: { placeholder: 'PHOTO PERSONNELLE' },

  referencePrice: { tourist: 'Stand pour touristes', local: 'Ce que paie un habitant' },

  dishPrices: {
    survey: 'Enquête',
    budgetChains: 'Chaînes économiques',
    chains: 'Chaînes',
    guideFigure: 'Notre chiffre de référence',
    from: 'dès ',
    taxChecked: (checked: string) => ` · TTC · vérifié le ${checked}`,
    all: (group: string) => `Tous les prix (${group.toLowerCase()}), avec les sources`,
  },

  dishTile: {
    readGuide: 'Lire le guide',
    lineageCount: (n: number) => `${n} ${n === 1 ? 'lignée' : 'lignées'}`,
  },

  guideTile: { read: 'Lire' },

  soakTile: {
    read: 'Lire',
    readGuide: 'Lire le guide',
    minFromStation: (min: number) => `${min} min de la gare`,
    tattooOk: 'Tatouages acceptés',
    noTattoos: 'Tatouages interdits',
    tattooConditions: 'Tatouages : sous conditions',
  },

  lineageTable: {
    lineage: 'Lignée',
    origin: 'Origine',
    note: 'Les lignées sans lien figurent sur la liste mais ne sont pas encore rédigées. Le tableau est tenu en un seul endroit pour que chaque lignée soit décrite dans les mêmes termes.',
  },

  rateNote: {
    currencyNames: { EUR: 'l’euro', USD: 'le dollar américain', KRW: 'le won sud-coréen', TWD: 'le dollar taïwanais' } as Record<string, string>,
    rate: (yen: string, currency: string) => `¥${yen} pour ${currency}`,
    join: (parts: string[]) => parts.join(' et '),
    body: (rates: string, asOf: string, twd: boolean) =>
      `Les prix sont en yens japonais. Les conversions sont approximatives, au taux de ${rates} au ${asOf}. Les taux proviennent de la Banque centrale européenne, qui ne publie que les jours ouvrés${twd ? ', sauf le dollar taïwanais, qui provient d’ExchangeRate-API' : ''}.`,
    faresVerified: (month: string) => `Tarifs vérifiés en ${month} — vérifiez auprès de l’exploitant avant de partir.`,
    pricesChecked: (month: string) => `Prix vérifiés en ${month}.`,
    foodPrices: 'Ce que coûte la nourriture au Japon →',
  },
};

const es: Strings = {
  layout: {
    sectionsLabel: 'Secciones',
    prices: 'Precios',
  },

  price: { from: 'desde ' },

  cta: {
    bookedMyself: 'Patrocinado · reservado por mí',
    notUsed: 'Patrocinado · no lo he usado',
    label: 'Consultar fechas',
    from: 'desde',
  },

  verdict: { totalLabel: 'Total de la semana' },

  compare: {
    option: 'Opción',
    cost: 'Coste',
    covers: 'Cubre',
    bestFor: 'Ideal para',
    stacked: (covers: string, bestFor: string) => `${covers}. Ideal para ${bestFor.toLowerCase()}.`,
  },

  fromExperience: { seenMyself: 'Visto en persona' },

  figure: { transcript: 'Texto de esta ilustración' },

  photoBand: { placeholder: 'FOTO PROPIA' },

  referencePrice: { tourist: 'Puesto para turistas', local: 'Lo que paga un local' },

  dishPrices: {
    survey: 'Encuesta',
    budgetChains: 'Cadenas económicas',
    chains: 'Cadenas',
    guideFigure: 'Nuestra cifra de referencia',
    from: 'desde ',
    taxChecked: (checked: string) => ` · impuestos incluidos · comprobado el ${checked}`,
    all: (group: string) => `Todos los precios (${group.toLowerCase()}), con fuentes`,
  },

  dishTile: {
    readGuide: 'Leer la guía',
    lineageCount: (n: number) => `${n} ${n === 1 ? 'linaje' : 'linajes'}`,
  },

  guideTile: { read: 'Leer' },

  soakTile: {
    read: 'Leer',
    readGuide: 'Leer la guía',
    minFromStation: (min: number) => `${min} min desde la estación`,
    tattooOk: 'Tatuajes permitidos',
    noTattoos: 'Sin tatuajes',
    tattooConditions: 'Tatuajes: con condiciones',
  },

  lineageTable: {
    lineage: 'Linaje',
    origin: 'Origen',
    note: 'Los linajes sin enlace figuran en la lista, pero aún no están escritos. La tabla se mantiene en un solo lugar para que cada linaje se describa en los mismos términos.',
  },

  rateNote: {
    currencyNames: { EUR: 'el euro', USD: 'el dólar estadounidense', KRW: 'el won surcoreano', TWD: 'el dólar taiwanés' } as Record<string, string>,
    rate: (yen: string, currency: string) => `¥${yen} por ${currency}`,
    join: (parts: string[]) => parts.join(' y '),
    body: (rates: string, asOf: string, twd: boolean) =>
      `Los precios están en yenes japoneses. Las conversiones son aproximadas, al tipo de ${rates} a fecha de ${asOf}. Los tipos proceden del Banco Central Europeo, que solo publica en días laborables${twd ? ', salvo el dólar taiwanés, que procede de ExchangeRate-API' : ''}.`,
    faresVerified: (month: string) => `Tarifas verificadas en ${month} — consulta con el operador antes de viajar.`,
    pricesChecked: (month: string) => `Precios comprobados en ${month}.`,
    foodPrices: 'Cuánto cuesta comer en Japón →',
  },
};

export const table: { en: Strings } & Partial<Record<Exclude<Locale, 'en'>, Strings>> = { en, ko, fr, es };
export const strings = (locale: string): Strings => pickLocale(table, locale);
