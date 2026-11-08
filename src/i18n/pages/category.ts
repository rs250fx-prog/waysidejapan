/** カテゴリ一覧（src/pages/[lang]/[category]/index.astro）の文言。キーが category のものは rail / eat / soak / konbini / column / ride */
import type { Locale } from '../../config.ts';
import { pickLocale } from '../index.ts';

const en = {
  home: 'Home',
  breadcrumbLabel: 'Breadcrumb',
  sectionsLabel: 'Sections',
  /** 説明が無いカテゴリ用。site は config の SITE_NAME */
  fallbackDescription: (label: string, site: string) => `${label} guides from ${site}, written in Japan and checked in person.`,
  intro: {
    rail: 'Regional passes, model routes and the transfers that catch people out. Every fare says when it was last checked, and I rode the route before writing about it.',
    eat: 'Station bento, regional dishes and which counters have an English menu. Prices and opening hours checked in person.',
    soak: 'Onsen within walking distance of a station, with the tattoo policy, towel rules and English signage stated up front.',
    konbini: 'What is worth buying at a convenience store, including the things sold only in one region.',
    column: 'The regions on this site are industries before they are scenery. Sourced, and written from the train window.',
    ride: 'Touring routes in western Japan, with road surface, fuel stops and parking.',
  } as Record<string, string>,
  /** 一覧の札（記事の型） */
  kind: { dish: 'Dish', lineage: 'Lineage', region: 'Region', explainer: 'How it works', town: 'Town' } as Record<string, string>,
  empty: 'Nothing published here yet. The first guides are being written — I would rather post none than post a thin one.',

  /** 冒頭の件数。eat はジャンル見出しの右、ジャンプ行の要約で使い分ける */
  guideCount: (n: number) => `${n} ${n === 1 ? 'guide' : 'guides'}`,
  genreCount: (dishes: number, lineages: number) =>
    `${dishes} ${dishes === 1 ? 'dish' : 'dishes'}${lineages ? ` · ${lineages} ${lineages === 1 ? 'lineage' : 'lineages'}` : ''}`,
  eatSummary: (dishes: number, lineages: number) => `${dishes} ${dishes === 1 ? 'dish' : 'dishes'} · ${lineages} ${lineages === 1 ? 'lineage' : 'lineages'}`,
  soakSummary: (towns: number, regions: number) => `${towns} onsen ${towns === 1 ? 'town' : 'towns'} · ${regions} ${regions === 1 ? 'region' : 'regions'}`,
  guidesSummary: (guides: number, sections: number) =>
    `${guides} ${guides === 1 ? 'guide' : 'guides'} · ${sections} ${sections === 1 ? 'section' : 'sections'}`,

  startHere: 'Start here',
  startHereNote: 'The three most-asked-about dishes',
  /** <strong> の中の見出し文 */
  priceBandLead: 'What Japanese people actually pay.',
  priceBandBody: (dishes: number) => `${dishes} dishes, three price sources side by side: the government survey, the big chains and what a resident sees.`,
  priceBandCta: 'Food prices',
  moreFromEat: 'More from Eat',

  beforeYouGo: 'Before you go',
  beforeYouGoNote: 'What the water is, and what the words mean',
  overviewOnly: 'Overview only, for now',
  townCount: (n: number) => `${n} ${n === 1 ? 'onsen town' : 'onsen towns'}`,
  overview: 'Overview',
  read: 'Read',
  moreFromSoak: 'More from Soak',
};

export type Strings = typeof en;
const ko: Strings = {
  home: '홈',
  breadcrumbLabel: '탐색 경로',
  sectionsLabel: '섹션',
  fallbackDescription: (label: string, site: string) => `${site}의 ${label} 가이드. 일본에서 쓰고 직접 확인했습니다.`,
  intro: {
    rail: '지역 패스, 모델 코스, 사람들이 자주 헤매는 환승. 모든 요금에 마지막으로 확인한 시점을 적었고, 글을 쓰기 전에 그 노선을 직접 탔습니다.',
    eat: '역 도시락, 지역 요리, 영어 메뉴가 있는 가게. 가격과 영업시간은 직접 확인했습니다.',
    soak: '역에서 걸어갈 수 있는 온천. 문신 규정, 수건 규칙, 영어 표지판 여부를 맨 앞에 밝혀 둡니다.',
    konbini: '편의점에서 살 만한 것, 한 지역에서만 파는 것도 포함합니다.',
    column: '이 사이트의 지역은 풍경이기 전에 산업입니다. 출처를 밝히고, 열차 창가에서 썼습니다.',
    ride: '서일본의 투어링 코스. 노면, 주유소, 주차 정보를 담았습니다.',
  } as Record<string, string>,
  kind: { dish: '요리', lineage: '계보', region: '지역', explainer: '구조 해설', town: '마을' } as Record<string, string>,
  empty: '아직 이곳에 게재된 글이 없습니다. 첫 가이드를 쓰고 있습니다. 얄팍한 글을 올리느니 아무것도 올리지 않겠습니다.',

  guideCount: (n: number) => `가이드 ${n}편`,
  genreCount: (dishes: number, lineages: number) => `요리 ${dishes}개${lineages ? ` · 계보 ${lineages}개` : ''}`,
  eatSummary: (dishes: number, lineages: number) => `요리 ${dishes}개 · 계보 ${lineages}개`,
  soakSummary: (towns: number, regions: number) => `온천 마을 ${towns}곳 · ${regions}개 지역`,
  guidesSummary: (guides: number, sections: number) => `가이드 ${guides}편 · 섹션 ${sections}개`,

  startHere: '여기서 시작',
  startHereNote: '가장 많이 묻는 요리 세 가지',
  priceBandLead: '일본인이 실제로 내는 가격.',
  priceBandBody: (dishes: number) => `요리 ${dishes}개, 세 가지 가격 출처를 나란히: 정부 조사, 대형 체인, 그리고 거주자가 보는 가격.`,
  priceBandCta: '음식 가격',
  moreFromEat: '먹기의 다른 글',

  beforeYouGo: '가기 전에',
  beforeYouGoNote: '물의 종류와 용어의 뜻',
  overviewOnly: '지금은 개요만',
  townCount: (n: number) => `온천 마을 ${n}곳`,
  overview: '개요',
  read: '읽기',
  moreFromSoak: '온천의 다른 글',
};

const fr: Strings = {
  home: 'Accueil',
  breadcrumbLabel: 'Fil d’Ariane',
  sectionsLabel: 'Rubriques',
  fallbackDescription: (label: string, site: string) => `Guides ${label} de ${site}, écrits au Japon et vérifiés sur place.`,
  intro: {
    rail: 'Pass régionaux, itinéraires types et correspondances qui piègent. Chaque tarif indique quand il a été vérifié pour la dernière fois, et j’ai parcouru l’itinéraire avant d’en parler.',
    eat: 'Bento de gare, plats régionaux et comptoirs qui proposent un menu en anglais. Prix et horaires vérifiés sur place.',
    soak: 'Des onsen à distance de marche d’une gare, avec la politique sur les tatouages, les règles sur les serviettes et la signalétique en anglais annoncées d’emblée.',
    konbini: 'Ce qui vaut la peine d’être acheté dans un konbini, y compris les produits vendus dans une seule région.',
    column: 'Les régions de ce site sont des industries avant d’être des paysages. Sourcé, et écrit depuis la fenêtre du train.',
    ride: 'Itinéraires de balade à moto dans l’ouest du Japon, avec l’état de la chaussée, les stations-service et les parkings.',
  } as Record<string, string>,
  kind: { dish: 'Plat', lineage: 'Lignée', region: 'Région', explainer: 'Comment ça marche', town: 'Ville' } as Record<string, string>,
  empty: 'Rien n’est encore publié ici. Les premiers guides sont en cours d’écriture\u00a0: je préfère n’en publier aucun plutôt qu’un guide trop mince.',

  guideCount: (n: number) => `${n} ${n === 1 ? 'guide' : 'guides'}`,
  genreCount: (dishes: number, lineages: number) =>
    `${dishes} ${dishes === 1 ? 'plat' : 'plats'}${lineages ? ` · ${lineages} ${lineages === 1 ? 'lignée' : 'lignées'}` : ''}`,
  eatSummary: (dishes: number, lineages: number) => `${dishes} ${dishes > 1 ? 'plats' : 'plat'} · ${lineages} ${lineages > 1 ? 'lignées' : 'lignée'}`,
  soakSummary: (towns: number, regions: number) => `${towns} ${towns > 1 ? 'villes' : 'ville'} d’onsen · ${regions} ${regions > 1 ? 'régions' : 'région'}`,
  guidesSummary: (guides: number, sections: number) =>
    `${guides} ${guides === 1 ? 'guide' : 'guides'} · ${sections} ${sections === 1 ? 'rubrique' : 'rubriques'}`,

  startHere: 'Commencer ici',
  startHereNote: 'Les trois plats sur lesquels on pose le plus de questions',
  priceBandLead: 'Ce que les Japonais paient réellement.',
  priceBandBody: (dishes: number) => `${dishes} plats, trois sources de prix côte à côte\u00a0: l’enquête du gouvernement, les grandes chaînes et ce que voit un résident.`,
  priceBandCta: 'Prix de la nourriture',
  moreFromEat: 'Plus dans Manger',

  beforeYouGo: 'Avant de partir',
  beforeYouGoNote: 'Ce qu’est l’eau, et ce que veulent dire les mots',
  overviewOnly: 'Aperçu seulement, pour l’instant',
  townCount: (n: number) => `${n} ${n === 1 ? 'ville d’onsen' : 'villes d’onsen'}`,
  overview: 'Aperçu',
  read: 'Lire',
  moreFromSoak: 'Plus dans Onsen',
};

const es: Strings = {
  home: 'Inicio',
  breadcrumbLabel: 'Ruta de navegación',
  sectionsLabel: 'Secciones',
  fallbackDescription: (label: string, site: string) => `Guías de ${label} de ${site}, escritas en Japón y comprobadas en persona.`,
  intro: {
    rail: 'Pases regionales, rutas modelo y los transbordos que desorientan. Cada tarifa indica cuándo se comprobó por última vez, y recorrí la ruta antes de escribir sobre ella.',
    eat: 'Bento de estación, platos regionales y qué mostradores tienen menú en inglés. Precios y horarios comprobados en persona.',
    soak: 'Onsen a poca distancia a pie de una estación, con la política sobre tatuajes, las normas sobre toallas y la señalización en inglés indicadas desde el principio.',
    konbini: 'Qué merece la pena comprar en una tienda de conveniencia, incluidas las cosas que se venden solo en una región.',
    column: 'Las regiones de este sitio son industrias antes que paisaje. Con fuentes, y escrito desde la ventanilla del tren.',
    ride: 'Rutas de turismo en moto por el oeste de Japón, con el estado del asfalto, las gasolineras y los aparcamientos.',
  } as Record<string, string>,
  kind: { dish: 'Plato', lineage: 'Linaje', region: 'Región', explainer: 'Cómo funciona', town: 'Localidad' } as Record<string, string>,
  empty: 'Todavía no hay nada publicado aquí. Las primeras guías se están escribiendo: prefiero no publicar ninguna a publicar una guía endeble.',

  guideCount: (n: number) => `${n} ${n === 1 ? 'guía' : 'guías'}`,
  genreCount: (dishes: number, lineages: number) =>
    `${dishes} ${dishes === 1 ? 'plato' : 'platos'}${lineages ? ` · ${lineages} ${lineages === 1 ? 'linaje' : 'linajes'}` : ''}`,
  eatSummary: (dishes: number, lineages: number) => `${dishes} ${dishes === 1 ? 'plato' : 'platos'} · ${lineages} ${lineages === 1 ? 'linaje' : 'linajes'}`,
  soakSummary: (towns: number, regions: number) => `${towns} ${towns === 1 ? 'localidad' : 'localidades'} de onsen · ${regions} ${regions === 1 ? 'región' : 'regiones'}`,
  guidesSummary: (guides: number, sections: number) =>
    `${guides} ${guides === 1 ? 'guía' : 'guías'} · ${sections} ${sections === 1 ? 'sección' : 'secciones'}`,

  startHere: 'Empieza aquí',
  startHereNote: 'Los tres platos por los que más preguntan',
  priceBandLead: 'Lo que los japoneses pagan de verdad.',
  priceBandBody: (dishes: number) => `${dishes} platos, tres fuentes de precios lado a lado: la encuesta del gobierno, las grandes cadenas y lo que ve un residente.`,
  priceBandCta: 
'Precios de la comida',
  moreFromEat: 'Más de Comer',

  beforeYouGo: 'Antes de ir',
  beforeYouGoNote: 'Qué es el agua y qué significan las palabras',
  overviewOnly: 'Solo un resumen, por ahora',
  townCount: (n: number) => `${n} ${n === 1 ? 'localidad de onsen' : 'localidades de onsen'}`,
  overview: 'Resumen',
  read: 'Leer',
  moreFromSoak: 'Más de Onsen',
};

export const table: { en: Strings } & Partial<Record<Exclude<Locale, 'en'>, Strings>> = { en, ko, fr, es };
export const strings = (locale: string): Strings => pickLocale(table, locale);
