/**
 * About（src/pages/[lang]/about.astro）の文言。
 * 実績の数値（走行距離・ローカルガイドのレベル）は主張なので、事実でなくなったら直す。
 * <strong> を含む文は HTML の断片（使えるタグは a strong em code br のみ）。
 */
import type { Locale } from '../../config.ts';
import { pickLocale } from '../index.ts';

const en = {
  title: 'Who writes this',
  description: 'Ichiro Murase lives in Japan and rides about 30,000 km a year. How this site is researched, photographed and paid for, and what it will never do.',
  portrait: 'PORTRAIT',
  kicker: 'About',
  h1: 'I live here, and I stop wherever there is a bath',
  /** nameJa は config の AUTHOR.nameJa */
  lead1: (nameJa: string) =>
    `My name is Ichiro Murase (${nameJa}). I am Japanese, I live in Japan, and I have been travelling this country since my twenties — by motorcycle, by car and by train. In a normal year I cover more than 30,000 kilometres, in every season, mostly on roads that do not appear in guidebooks.`,
  lead2:
    'What I write about here is what I found by going there: the places even Japanese travellers do not know about, and the food that never leaves the town it comes from. Alongside that there is a second kind of article — researched rather than visited, and labelled as such — because a visitor planning next month cannot wait for me to ride every line first.',

  credentials: [
    { value: '30,000 km+', label: 'covered in a typical year' },
    { value: 'Level 8', label: 'Google Local Guide' },
    { value: 'Since my twenties', label: 'travelling Japan' },
    { value: '40+', label: 'prefectures visited' },
  ],

  why: {
    title: 'Why a Japanese person writing in English',
    p1: 'Most English-language writing about Japan is by people passing through. That is not a criticism — a visitor notices things a resident stops seeing. But a visitor cannot go back next weekend to check whether the fare changed, and cannot read the notice taped to the door of a bathhouse.',
    p2: 'I can. That is the entire premise of this site. When a price here has a date on it, the date is real. When a guide says the transfer is eight minutes and tight with luggage, it is because I made it with luggage.',
  },
  travel: {
    title: 'How I travel',
    p1: 'By motorcycle and by car for the distance, by train for everything else. Thirty thousand kilometres a year adds up to a lot of small roads, and the reason I take them is what sits along them: hot springs, the inn with six rooms, the counter with no English menu and one dish worth crossing a prefecture for.',
    p2: 'I have slept in campsites and in ryokan that cost more than a flight home, and eaten at both roadside stands and Michelin-starred kitchens. I am a Level 8 Google Local Guide, which mostly means I have been writing down what I find for a long time.',
    p3: 'On this site the travel is by train, because that is what visitors to Japan can actually use. The driving still shows up in the writing — I know which valley the road follows, and which bath is worth the detour, because I got there on my own wheels first.',
  },
  work: {
    title: 'How I work',
    kinds: {
      title: 'Two kinds of article, and each one says which',
      body: 'Some guides here are places I went to, photographed and paid for myself; those carry the month I was there. Others are researched from published sources, because useful information should not wait for me to get on a train. <strong>Every article states which kind it is, at the top.</strong> The sourced ones list what they were built from.',
    },
    dates: {
      title: 'Every price carries a date, or is marked as a guide',
      body: 'Prices change and guides rot. Each figure here either states the month it was checked, or is labelled as an indicative price. I cannot revisit every place often enough to promise more than that, and I would rather tell you which kind of number you are looking at.',
    },
    yen: {
      title: 'Yen first, conversions second',
      body: 'You will pay in yen, so yen is what I show — with an approximate euro and dollar figure beside it, updated daily from European Central Bank rates.',
    },
    photos: {
      title: 'Mostly my own photographs',
      body: 'Most of what you see here I photographed myself, and I avoid stock imagery. Where a photograph is not mine, it is used with permission or proper credit, and said to be so.',
    },
  },
  money: {
    title: 'How this site makes money',
    p1: 'Some links are affiliate links. If you book through one, the company pays me a commission and you pay the same price you would have paid anyway. That is the whole arrangement.',
    p2: 'What it does not buy is a recommendation. Nothing appears here because a company asked, and I have not accepted a sponsored trip — accepting one would make the next review worthless. Where a booking link exists for something I did not use myself, the article says so in the same sentence as the link.',
    disclosure: 'Read the full disclosure →',
  },
  regions: {
    title: 'Where I know Japan',
    intro: 'Two decades of driving leaves an uneven map. These are the regions I can write about from memory rather than research, strongest first. Everywhere on this list I have been more than once.',
    note: 'The site does not follow that order, and that is deliberate. Kanto is where I am strongest and where I live, but it is also the part of Japan that is already written about in every language. What is missing in English is the rest — the regions where a week still fits together on one pass and nobody has written the guide. So the site leads with those, and draws on Kanto where it helps rather than making it the subject.',
  },
  corrections: {
    title: 'Corrections welcome',
    body: 'If a fare has changed, a bath has closed or a rule has moved, tell me and I will fix it and credit you. That is the fastest way this site stays worth reading.',
    link: 'Send a correction →',
  },
  publisher: {
    title: 'Publisher',
    site: 'Site',
    publishedBy: 'Published by',
    representative: 'Representative',
    address: 'Address',
    /** address は config の OPERATOR.address */
    addressLine: (address: string) => `${address}, Japan`,
    contact: 'Contact',
    contactForm: 'Contact form',
    /** operator は config の OPERATOR.name */
    note: (operator: string) =>
      `${operator} is a web marketing studio with a background in finance. This site is a personal publication run under it, not a corporate product.`,
  },

  side: {
    label: 'About this site',
    numbers: 'In numbers',
    onThisPage: 'On this page',
    contactTitle: 'Seen something wrong?',
    contactDek: 'A fare, a closed bath, a moved rule — tell me and I will fix it and credit you.',
    contactGo: 'Send a correction →',
  },
};

export type Strings = typeof en;

const ko: Strings = {
  title: '이 글을 쓰는 사람',
  description: '일본에 사는 무라세 이치로(Ichiro Murase)는 1년에 약 30,000 km를 달립니다. 이 사이트를 어떻게 조사하고, 촬영하고, 운영비를 충당하는지, 그리고 절대 하지 않을 일.',
  portrait: 'PORTRAIT',
  kicker: '소개',
  h1: '저는 이곳에 살고, 온천이 있으면 어디든 멈춰 섭니다',
  lead1: (nameJa: string) =>
    `제 이름은 무라세 이치로(Ichiro Murase, ${nameJa})입니다. 일본인이고 일본에 살며, 20대부터 오토바이와 자동차, 기차로 이 나라를 다녔습니다. 보통 한 해에 30,000킬로미터 넘게, 계절을 가리지 않고, 대부분 가이드북에 나오지 않는 길을 달립니다.`,
  lead2:
    '여기에 쓰는 것은 직접 가서 알게 된 것들입니다. 일본인 여행자도 모르는 곳, 그리고 태어난 동네를 떠나지 않는 음식입니다. 이와 함께 직접 가 보지 않고 조사해서 쓴 글이 또 한 종류 있고, 글마다 그렇게 표시합니다. 다음 달에 여행을 계획하는 방문객이 제가 모든 노선을 먼저 달릴 때까지 기다릴 수는 없기 때문입니다.',

  credentials: [
    { value: '30,000 km+', label: '평소 1년 주행 거리' },
    { value: 'Level 8', label: 'Google Local Guide' },
    { value: '20대부터', label: '일본 여행' },
    { value: '40+', label: '방문한 도도부현' },
  ],

  why: {
    title: '왜 일본인이 영어로 쓰는가',
    p1: '일본에 관한 영어 글은 대부분 스쳐 지나가는 사람이 쓴 것입니다. 비판이 아닙니다. 방문객은 현지 주민이 더 이상 눈여겨보지 않는 것을 알아챕니다. 하지만 방문객은 요금이 바뀌었는지 확인하러 다음 주말에 다시 갈 수 없고, 대중목욕탕 문에 붙은 안내문을 읽을 수도 없습니다.',
    p2: '저는 할 수 있습니다. 이것이 이 사이트의 전제 전부입니다. 여기 적힌 가격에 날짜가 있다면 그 날짜는 실제입니다. 가이드에 환승이 8분이고 짐이 있으면 빠듯하다고 적혀 있다면, 제가 짐을 들고 직접 환승해 봤기 때문입니다.',
  },
  travel: {
    title: '여행하는 방식',
    p1: '먼 거리는 오토바이와 자동차로, 나머지는 기차로 다닙니다. 1년에 30,000킬로미터면 작은 길을 아주 많이 지나게 되는데, 그 길을 택하는 이유는 길가에 있는 것들 때문입니다. 온천, 객실이 여섯 개뿐인 여관, 영어 메뉴 없이 현을 건너서라도 먹을 가치가 있는 요리 하나를 내는 카운터 같은 곳입니다.',
    p2: '캠핑장에서도 자 봤고, 돌아가는 비행기 값보다 비싼 료칸에서도 묵어 봤습니다. 길가 가판대에서도, 미쉐린 스타 주방에서도 먹었습니다. 저는 Google Local Guide 레벨 8인데, 대체로 발견한 것을 오랫동안 적어 왔다는 뜻입니다.',
    p3: '이 사이트에서는 이동 수단을 기차로 합니다. 일본을 찾는 방문객이 실제로 이용할 수 있는 것이 기차이기 때문입니다. 그래도 운전의 경험은 글에 배어 있습니다. 길이 어느 계곡을 따라가는지, 어느 목욕탕이 돌아가 볼 만한지 아는 것은 제 바퀴로 먼저 가 봤기 때문입니다.',
  },
  work: {
    title: '일하는 방식',
    kinds: {
      title: '글은 두 종류이며, 글마다 어느 쪽인지 밝힙니다',
      body: '이곳의 가이드 중 일부는 제가 직접 가서 사진을 찍고 비용을 낸 곳이며, 방문한 달이 표시됩니다. 나머지는 공개된 자료를 바탕으로 조사한 글입니다. 유용한 정보가 제가 기차에 오를 때까지 기다릴 필요는 없으니까요. <strong>모든 글은 맨 위에 어느 종류인지 밝힙니다.</strong> 자료를 바탕으로 한 글에는 근거로 삼은 자료를 적습니다.',
    },
    dates: {
      title: '모든 가격에는 날짜가 있거나, 참고 가격으로 표시됩니다',
      body: '가격은 바뀌고 가이드는 낡습니다. 여기 나오는 금액은 확인한 달을 밝히거나, 대략적인 참고 가격이라고 표시합니다. 모든 곳을 충분히 자주 다시 찾을 수는 없어서 그 이상은 약속할 수 없고, 어느 종류의 숫자를 보고 계신지 말씀드리는 편이 낫다고 생각합니다.',
    },
    yen: {
      title: '엔이 먼저, 환산은 그다음',
      body: '지불은 엔으로 하게 되므로 엔으로 보여 드리고, 옆에 대략적인 유로와 달러 금액을 함께 적습니다. 환산은 유럽중앙은행 환율로 매일 갱신합니다.',
    },
    photos: {
      title: '대부분 제가 찍은 사진',
      body: '여기 보이는 사진은 대부분 제가 직접 찍었고, 스톡 이미지는 쓰지 않으려 합니다. 제 사진이 아닌 경우에는 허락을 받았거나 출처를 제대로 밝혔고, 그렇다고 표시합니다.',
    },
  },
  money: {
    title: '이 사이트의 수익 구조',
    p1: '일부 링크는 제휴 링크입니다. 그 링크로 예약하시면 해당 회사가 저에게 수수료를 지급하고, 이용자께서 내시는 금액은 어차피 내셨을 금액과 같습니다. 구조는 이것이 전부입니다.',
    p2: '수수료로 살 수 없는 것은 추천입니다. 회사가 부탁했다고 해서 여기에 실리는 것은 없고, 협찬 여행도 받은 적이 없습니다. 받는 순간 다음 후기가 가치를 잃기 때문입니다. 제가 직접 이용하지 않은 곳에 예약 링크가 있을 때는, 글에서 링크와 같은 문장 안에 그 사실을 밝힙니다.',
    disclosure: '전체 공개 내용 보기 →',
  },
  regions: {
    title: '제가 아는 일본',
    intro: '20년 동안 운전하다 보니 지도가 고르지 않습니다. 다음은 조사하지 않고 기억만으로 쓸 수 있는 지역이며, 자신 있는 곳부터 나열했습니다. 이 목록의 모든 곳에 두 번 이상 가 보았습니다.',
    note: '사이트는 이 순서를 따르지 않으며, 의도한 것입니다. 간토(Kantō)는 제가 가장 잘 알고 사는 곳이지만, 이미 모든 언어로 쓰여 있는 일본이기도 합니다. 영어에서 비어 있는 곳은 그 나머지, 즉 일주일이 한 번에 이어지는데도 아무도 가이드를 쓰지 않은 지역입니다. 그래서 사이트는 그런 지역을 앞세우고, 간토는 도움이 될 때 곁들일 뿐 주제로 삼지 않습니다.',
  },
  corrections: {
    title: '정정을 환영합니다',
    body: '요금이 바뀌었거나, 목욕탕이 문을 닫았거나, 규칙이 달라졌다면 알려 주세요. 고치고 알려 주신 분의 이름을 밝히겠습니다. 이 사이트가 계속 읽을 만하게 유지되는 가장 빠른 방법입니다.',
    link: '정정 보내기 →',
  },
  publisher: {
    title: '발행처',
    site: '사이트',
    publishedBy: '발행',
    representative: '대표자',
    address: '주소',
    addressLine: (address: string) => `${address}, 일본`,
    contact: '연락처',
    contactForm: '문의 양식',
    note: (operator: string) =>
      `${operator}는 금융 분야 경력을 바탕으로 한 웹 마케팅 스튜디오입니다. 이 사이트는 그 아래에서 운영하는 개인 매체이며, 기업 상품이 아닙니다.`,
  },

  side: {
    label: '이 사이트에 대하여',
    numbers: '숫자로 보기',
    onThisPage: '이 페이지의 내용',
    contactTitle: '잘못된 곳을 발견하셨나요?',
    contactDek: '요금, 문을 닫은 목욕탕, 달라진 규칙 등을 알려 주시면 고치고 알려 주신 분의 이름을 밝히겠습니다.',
    contactGo: '정정 보내기 →',
  },
};

const fr: Strings = {
  title: 'Qui écrit ici',
  description: 'Ichiro Murase vit au Japon et parcourt environ 30,000 km par an. Comment ce site est documenté, photographié et financé, et ce qu’il ne fera jamais.',
  portrait: 'PORTRAIT',
  kicker: 'À propos',
  h1: 'Je vis ici, et je m’arrête partout où il y a un bain',
  lead1: (nameJa: string) =>
    `Je m’appelle Ichiro Murase (${nameJa}). Je suis japonais, je vis au Japon, et je parcours ce pays depuis mes vingt ans, à moto, en voiture et en train. Une année normale, je fais plus de 30,000 kilomètres, en toute saison, le plus souvent sur des routes qui ne figurent pas dans les guides.`,
  lead2:
    'Ce que j’écris ici, c’est ce que j’ai trouvé en y allant : des lieux que même les voyageurs japonais ne connaissent pas, et une cuisine qui ne quitte jamais la ville dont elle vient. À côté, il existe un second type d’article, documenté plutôt que visité, et signalé comme tel, car un visiteur qui prépare son voyage du mois prochain ne peut pas attendre que j’aie parcouru chaque ligne.',

  credentials: [
    { value: '30,000 km+', label: 'parcourus une année ordinaire' },
    { value: 'Level 8', label: 'Google Local Guide' },
    { value: 'Depuis mes vingt ans', label: 'je voyage au Japon' },
    { value: '40+', label: 'préfectures visitées' },
  ],

  why: {
    title: 'Pourquoi un Japonais écrit en anglais',
    p1: 'La plupart de ce qui s’écrit en anglais sur le Japon vient de gens de passage. Ce n’est pas un reproche : un visiteur remarque ce qu’un résident ne voit plus. Mais un visiteur ne peut pas revenir le week-end suivant vérifier si le tarif a changé, ni lire l’avis collé sur la porte d’un bain public.',
    p2: 'Moi, je le peux. C’est toute la raison d’être de ce site. Quand un prix porte une date, cette date est réelle. Quand un guide dit que la correspondance prend huit minutes et qu’elle est juste avec des bagages, c’est parce que je l’ai faite avec des bagages.',
  },
  travel: {
    title: 'Ma façon de voyager',
    p1: 'À moto et en voiture pour la distance, en train pour tout le reste. Trente mille kilomètres par an, cela fait beaucoup de petites routes, et si je les prends, c’est pour ce qu’il y a le long : des sources chaudes, l’auberge de six chambres, le comptoir sans menu en anglais et le plat unique qui vaut de traverser une préfecture.',
    p2: 'J’ai dormi dans des campings et dans des ryokan plus chers qu’un billet d’avion pour rentrer, et j’ai mangé aussi bien dans des échoppes au bord de la route que dans des cuisines étoilées au Michelin. Je suis Google Local Guide de niveau 8, ce qui veut surtout dire que je note depuis longtemps ce que je trouve.',
    p3: 'Sur ce site, le trajet se fait en train, parce que c’est ce que les visiteurs du Japon peuvent réellement utiliser. La route reste présente dans l’écriture : je sais quelle vallée longe la route et quel bain mérite le détour, parce que j’y suis d’abord allé sur mes propres roues.',
  },
  work: {
    title: 'Ma façon de travailler',
    kinds: {
      title: 'Deux types d’article, et chacun dit lequel il est',
      body: 'Certains guides parlent de lieux où je suis allé, que j’ai photographiés et payés moi-même ; ils portent le mois de ma visite. D’autres sont documentés à partir de sources publiées, parce qu’une information utile ne doit pas attendre que je monte dans un train. <strong>Chaque article indique de quel type il est, en haut de page.</strong> Ceux qui s’appuient sur des sources énumèrent ce qui a servi à les établir.',
    },
    dates: {
      title: 'Chaque prix porte une date, ou est signalé comme indicatif',
      body: 'Les prix changent et les guides vieillissent. Chaque chiffre indique ici le mois où il a été vérifié, ou est présenté comme un prix indicatif. Je ne peux pas revenir assez souvent partout pour promettre davantage, et je préfère vous dire de quel type de chiffre il s’agit.',
    },
    yen: {
      title: 'D’abord le yen, ensuite les conversions',
      body: 'Vous paierez en yens, c’est donc le yen que j’affiche, avec à côté un montant approximatif en euros et en dollars, mis à jour chaque jour d’après les taux de la Banque centrale européenne.',
    },
    photos: {
      title: 'Surtout mes propres photos',
      body: 'La plupart de ce que vous voyez ici, je l’ai photographié moi-même, et j’évite les banques d’images. Quand une photo n’est pas de moi, elle est utilisée avec autorisation ou avec la mention qui convient, et c’est indiqué.',
    },
  },
  money: {
    title: 'Comment ce site gagne de l’argent',
    p1: 'Certains liens sont des liens d’affiliation. Si vous réservez par l’un d’eux, l’entreprise me verse une commission et vous payez le même prix que vous auriez payé de toute façon. L’arrangement tient en cela.',
    p2: 'Ce que cela n’achète pas, c’est une recommandation. Rien n’apparaît ici parce qu’une entreprise l’a demandé, et je n’ai accepté aucun voyage sponsorisé : en accepter un rendrait le prochain avis sans valeur. Quand il existe un lien de réservation pour quelque chose que je n’ai pas utilisé moi-même, l’article le dit dans la même phrase que le lien.',
    disclosure: 'Lire la déclaration complète →',
  },
  regions: {
    title: 'Les régions que je connais',
    intro: 'Deux décennies au volant laissent une carte inégale. Voici les régions dont je peux parler de mémoire plutôt qu’après recherche, de la plus solide à la moins solide. Partout où figure un nom dans cette liste, je suis allé plus d’une fois.',
    note: 'Le site ne suit pas cet ordre, et c’est voulu. Le Kantō est la région que je connais le mieux et où j’habite, mais c’est aussi la partie du Japon dont on parle déjà dans toutes les langues. Ce qui manque en anglais, c’est le reste : les régions où une semaine tient encore en un seul trajet et où personne n’a écrit le guide. Le site commence donc par celles-là, et fait appel au Kantō quand cela aide, sans en faire le sujet.',
  },
  corrections: {
    title: 'Les corrections sont les bienvenues',
    body: 'Si un tarif a changé, si un bain a fermé ou si une règle a bougé, dites-le-moi : je corrigerai et je vous citerai. C’est le moyen le plus rapide pour que ce site reste digne d’être lu.',
    link: 'Envoyer une correction →',
  },
  publisher: {
    title: 'Éditeur',
    site: 'Site',
    publishedBy: 'Publié par',
    representative: 'Représentant',
    address: 'Adresse',
    addressLine: (address: string) => `${address}, Japon`,
    contact: 'Contact',
    contactForm: 'Formulaire de contact',
    note: (operator: string) =>
      `${operator} est un studio de marketing web issu du monde de la finance. Ce site est une publication personnelle gérée sous son égide, et non un produit d’entreprise.`,
  },

  side: {
    label: 'À propos de ce site',
    numbers: 'En chiffres',
    onThisPage: 'Sur cette page',
    contactTitle: 'Vous avez vu une erreur ?',
    contactDek: 'Un tarif, un bain fermé, une règle modifiée : dites-le-moi, je corrigerai et je vous citerai.',
    contactGo: 'Envoyer une correction →',
  },
};

const es: Strings = {
  title: 'Quién escribe esto',
  description: 'Ichiro Murase vive en Japón y recorre unos 30,000 km al año. Cómo se investiga, se fotografía y se financia este sitio, y lo que nunca hará.',
  portrait: 'PORTRAIT',
  kicker: 'Acerca de',
  h1: 'Vivo aquí, y me detengo dondequiera que haya un baño',
  lead1: (nameJa: string) =>
    `Me llamo Ichiro Murase (${nameJa}). Soy japonés, vivo en Japón y recorro este país desde mis veinte años: en moto, en coche y en tren. En un año normal hago más de 30,000 kilómetros, en todas las estaciones, casi siempre por carreteras que no salen en las guías.`,
  lead2:
    'Lo que escribo aquí es lo que encontré yendo: lugares que ni los viajeros japoneses conocen y comida que nunca sale del pueblo de donde procede. Junto a eso hay un segundo tipo de artículo, investigado en lugar de visitado y señalado como tal, porque quien planea su viaje para el mes que viene no puede esperar a que yo recorra primero cada línea.',

  credentials: [
    { value: '30,000 km+', label: 'recorridos en un año típico' },
    { value: 'Level 8', label: 'Google Local Guide' },
    { value: 'Desde mis veinte años', label: 'viajando por Japón' },
    { value: '40+', label: 'prefecturas visitadas' },
  ],

  why: {
    title: 'Por qué un japonés escribe en inglés',
    p1: 'Casi todo lo que se escribe en inglés sobre Japón lo escriben personas de paso. No es una crítica: quien visita nota cosas que un residente ya no ve. Pero un visitante no puede volver el fin de semana siguiente para comprobar si cambió la tarifa, ni puede leer el aviso pegado en la puerta de un baño público.',
    p2: 'Yo sí puedo. Esa es toda la premisa de este sitio. Cuando un precio lleva fecha, la fecha es real. Cuando una guía dice que el transbordo dura ocho minutos y que con equipaje va justo, es porque lo hice con equipaje.',
  },
  travel: {
    title: 'Cómo viajo',
    p1: 'En moto y en coche para las distancias, en tren para todo lo demás. Treinta mil kilómetros al año son muchas carreteras pequeñas, y las tomo por lo que hay a su lado: aguas termales, la posada de seis habitaciones, la barra sin menú en inglés y con un único plato por el que vale la pena cruzar una prefectura.',
    p2: 'He dormido en campings y en ryokan que cuestan más que un vuelo de regreso, y he comido tanto en puestos de carretera como en cocinas con estrella Michelin. Soy Google Local Guide de nivel 8, lo que sobre todo significa que llevo mucho tiempo apuntando lo que encuentro.',
    p3: 'En este sitio el viaje es en tren, porque es lo que los visitantes de Japón pueden usar de verdad. Aun así, la conducción se nota en lo escrito: sé qué valle sigue la carretera y qué baño merece el desvío, porque llegué primero con mis propias ruedas.',
  },
  work: {
    title: 'Cómo trabajo',
    kinds: {
      title: 'Dos tipos de artículo, y cada uno dice cuál es',
      body: 'Algunas guías de aquí son de lugares a los que fui, que fotografié y que pagué yo mismo; llevan el mes en que estuve. Otras están investigadas a partir de fuentes publicadas, porque la información útil no debería esperar a que yo suba a un tren. <strong>Cada artículo indica arriba de qué tipo es.</strong> Los que se basan en fuentes enumeran con qué se elaboraron.',
    },
    dates: {
      title: 'Cada precio lleva una fecha o está marcado como orientativo',
      body: 'Los precios cambian y las guías envejecen. Cada cifra de aquí indica el mes en que se comprobó o está señalada como precio orientativo. No puedo volver a todos los sitios con la frecuencia necesaria para prometer más que eso, y prefiero decirte qué tipo de número estás viendo.',
    },
    yen: {
      title: 'Primero el yen, después las conversiones',
      body: 'Pagarás en yenes, así que muestro yenes, con una cifra aproximada en euros y en dólares al lado, actualizada a diario con los tipos del Banco Central Europeo.',
    },
    photos: {
      title: 'Sobre todo, fotografías propias',
      body: 'La mayor parte de lo que ves aquí lo fotografié yo, y evito las imágenes de archivo. Cuando una fotografía no es mía, se usa con permiso o con el crédito debido, y se indica.',
    },
  },
  money: {
    title: 'Cómo gana dinero este sitio',
    p1: 'Algunos enlaces son de afiliación. Si reservas a través de uno, la empresa me paga una comisión y tú pagas el mismo precio que habrías pagado de todos modos. Ese es todo el acuerdo.',
    p2: 'Lo que no compra es una recomendación. Nada aparece aquí porque una empresa lo pidiera, y no he aceptado ningún viaje patrocinado: aceptar uno dejaría sin valor la siguiente reseña. Cuando hay un enlace de reserva de algo que no usé yo mismo, el artículo lo dice en la misma frase que el enlace.',
    disclosure: 'Leer la divulgación completa →',
  },
  regions: {
    title: 'Dónde conozco Japón',
    intro: 'Dos décadas al volante dejan un mapa desigual. Estas son las regiones sobre las que puedo escribir de memoria y no a partir de investigación, de la más sólida a la menos. En todos los lugares de esta lista he estado más de una vez.',
    note: 'El sitio no sigue ese orden, y es a propósito. Kantō es donde soy más fuerte y donde vivo, pero también es la parte de Japón sobre la que ya se escribe en todos los idiomas. Lo que falta en inglés es el resto: las regiones donde una semana todavía cabe en un solo recorrido y nadie ha escrito la guía. Por eso el sitio empieza por ellas, y recurre a Kantō cuando ayuda, sin convertirlo en el tema.',
  },
  corrections: {
    title: 'Las correcciones son bienvenidas',
    body: 'Si ha cambiado una tarifa, ha cerrado un baño o se ha movido una norma, avísame: lo corregiré y mencionaré tu aportación. Es la forma más rápida de que este sitio siga mereciendo la pena.',
    link: 'Enviar una corrección →',
  },
  publisher: {
    title: 'Editor',
    site: 'Sitio',
    publishedBy: 'Publicado por',
    representative: 'Representante',
    address: 'Dirección',
    addressLine: (address: string) => `${address}, Japón`,
    contact: 'Contacto',
    contactForm: 'Formulario de contacto',
    note: (operator: string) =>
      `${operator} es un estudio de marketing web con experiencia en finanzas. Este sitio es una publicación personal gestionada bajo su paraguas, no un producto corporativo.`,
  },

  side: {
    label: 'Acerca de este sitio',
    numbers: 'En cifras',
    onThisPage: 'En esta página',
    contactTitle: '¿Has visto algún error?',
    contactDek: 'Una tarifa, un baño cerrado, una norma que cambió: avísame, lo corregiré y mencionaré tu aportación.',
    contactGo: 'Enviar una corrección →',
  },
};

export const table: { en: Strings } & Partial<Record<Exclude<Locale, 'en'>, Strings>> = { en, ko, fr, es };
export const strings = (locale: string): Strings => pickLocale(table, locale);
