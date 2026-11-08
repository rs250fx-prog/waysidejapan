/**
 * プライバシーポリシー（src/pages/[lang]/privacy.astro）の文言。
 *
 * ⚠ 法的な内容を含む。翻訳したら、母語話者に加えて法務の確認を通すこと（GDPR 上の法的根拠・域外移転・権利の記述）。
 * 記述は「現時点の実態」に合わせる。GA4 の記述は GA4_MEASUREMENT_ID の有無、アフィリエイトの記述は hasAnyAffiliate に連動し、
 * ページ側が条件分岐で出し分ける（キーを足すときも、条件に紐づく文は分けたまま持つ）。
 * HTML の断片を含む文は set:html で出す（使えるタグは a strong em code br のみ）。
 * s3.change の「Google’s <a」「services: <a」は、英語原文の空白欠落を直したもの（2026-11-08）。
 * 置換記号：{{contact}} 問い合わせフォームの URL、{{cookieId}} 計測 Cookie の名前の後半、{{optout}} {{partnerSites}} Google の URL。
 */
import type { Locale } from '../../config.ts';
import { pickLocale } from '../index.ts';

const en = {
  title: 'Privacy policy',
  description:
    'What this site collects, why, which cookies it uses and only with your consent, who processes the data abroad, and how to exercise your rights.',
  kicker: 'Legal',
  h1: 'Privacy policy',
  updated: 'Last updated:',
  /** operator は config の OPERATOR.name。サイト名とドメインは固有名詞 */
  intro: (operator: string) =>
    `This policy explains what ${operator} (“I”, “me”) collects when you read Wayside Japan (waysidejapan.com), and what happens to it. It describes what the site actually does today, and it is updated whenever that changes.`,

  s1: {
    title: '1. Who is responsible',
    operator: 'Operator',
    representative: 'Representative',
    address: 'Address',
    /** address は config の OPERATOR.address */
    addressLine: (address: string) => `${address}, Japan`,
    contact: 'Contact',
    contactLink: 'Contact form on fam16.com',
  },
  s2: {
    title: '2. What is collected',
    none: 'This site has no accounts, no comments, no forms and no newsletter sign-up. I do not ask you for personal data here.',
    analytics:
      '<strong>Analytics, only if you accept.</strong> Google Analytics 4, provided by Google (Google Ireland Limited for visitors in the EEA and the UK; Google LLC in the United States), records which pages are viewed, how long they are open, which page or site referred you, your device and browser type, and your approximate location (city or region level, derived from your IP address). It uses cookies to tell one browser from another. I use this to see which guides are read and which need work. I do not use it to identify you, and I do not use it for advertising.',
    hosting:
      '<strong>Hosting records.</strong> The site is delivered by Cloudflare, Inc. (United States). Like any web host, it processes your IP address, browser type and the page you requested to deliver the page and to block abuse.',
    messages:
      '<strong>Messages you send me.</strong> To send a correction or question, you use the contact form on my company site, fam16.com. What you type there is handled under the privacy policy of that site, which names the form service it uses.',
    choice:
      '<strong>Your cookie choice.</strong> If you pick Accept or Reject in the cookie banner, your choice is kept in your own browser (local storage, key <code>wsj-consent</code>). It is not sent to me.',
    affiliate:
      'Some links on this site are affiliate links. If you follow one and buy, the partner tells me about the sale through its own tracking, which may set its own cookies once you are on the partner’s site. The partner’s privacy policy applies from there.',
    embeds: 'There are no embedded maps, videos or social media widgets on this site.',
  },
  s3: {
    title: '3. Cookies',
    consent:
      'Nothing is stored in your browser and nothing is sent to Google Analytics until you choose <strong>Accept</strong> in the cookie banner. If you choose <strong>Reject</strong>, or ignore the banner, the site works the same and no analytics cookies are set.',
    names:
      'If you accept, Google Analytics sets the cookies <code>_ga</code> and <code>_ga_{{cookieId}}</code>. They hold a random identifier and stay on your device for up to two years unless you delete them sooner.',
    change:
      'You can change your mind at any time with <strong>Cookie settings</strong> in the footer. You can also delete cookies in your browser, or install Google’s <a href="{{optout}}" target="_blank" rel="noopener noreferrer">Analytics opt-out add-on</a>. More on how Google uses data from sites that use its services: <a href="{{partnerSites}}" target="_blank" rel="noopener noreferrer">policies.google.com/technologies/partner-sites</a>.',
    none: 'This site does not set cookies.',
  },
  s4: {
    title: '4. Why, and on what legal basis',
    analytics: 'Analytics: your consent (Article 6(1)(a) GDPR; the equivalent under UK law). You can withdraw it at any time.',
    hosting: 'Delivering the site securely: my legitimate interest in running a safe, working website (Article 6(1)(f) GDPR).',
    messages: 'Answering your messages: my legitimate interest in replying to you, or steps you asked for.',
    closing: 'I do not sell personal data, and I do not use it for automated decisions or profiling.',
  },
  s5: {
    title: '5. Who else processes it, and where',
    /** providers は「Google and Cloudflare」または「Cloudflare」 */
    body: (providers: string) =>
      `I am based in Japan. ${providers} process the data above on infrastructure that may be outside your country, including in the United States. Where the law requires a safeguard for such a transfer, I rely on the provider’s own commitments, such as the EU–US Data Privacy Framework or standard contractual clauses, which you can find in their privacy documentation. The European Commission has recognised Japan as providing an adequate level of data protection for commercial operators.`,
    providersGa4: 'Google and Cloudflare',
    providersNoGa4: 'Cloudflare',
    noShare: 'I do not share personal data with anyone else, except where the law requires it.',
  },
  s6: {
    title: '6. How long it is kept',
    analytics: 'Analytics data is kept by Google for a limited period that I set in the analytics account; reports I keep are aggregated. ',
    rest: 'Hosting records are kept by Cloudflare for as long as its own policy says. Messages sent through fam16.com are kept as long as needed to answer them, then deleted.',
  },
  s7: {
    title: '7. Your rights',
    p1: 'Depending on where you live, you may ask me to tell you what I hold about you, to correct or delete it, to restrict or stop using it, and to give you a copy. You can withdraw consent at any time, and you can complain to your local data protection authority. In Japan, the equivalent rights are set out in the Act on the Protection of Personal Information.',
    p2: 'To use any of them, write through the <a href="{{contact}}">contact form</a>. I will confirm it is you and reply without undue delay. There is no charge. Because the analytics identifier is random and I cannot link it to a name, I can only act on it if you tell me the identifier stored in your own cookie.',
  },
  s8: {
    title: '8. Other sites',
    body: 'Links to other sites are outside this policy. Check each site’s own policy.',
  },
  s9: {
    title: '9. Changes',
    body: 'I will update this page when the site’s data handling changes, and change the date at the top. If a change would affect you materially, I will say so on the site before it takes effect.',
  },
  history: {
    title: 'Revision history',
    /** date は config の PRIVACY_UPDATED */
    first: (date: string) => `${date}: first published, with Google Analytics 4 behind a cookie consent banner.`,
  },
};

export type Strings = typeof en;

const ko: Strings = {
  title: '개인정보 처리방침',
  description:
    '이 사이트가 수집하는 정보와 그 이유, 동의한 경우에만 사용하는 쿠키, 해외에서 데이터를 처리하는 업체, 그리고 권리를 행사하는 방법을 안내합니다.',
  kicker: '법적 고지',
  h1: '개인정보 처리방침',
  updated: '최종 개정일:',
  intro: (operator: string) =>
    `이 방침은 ${operator}(이하 “저”)가 Wayside Japan(waysidejapan.com)을 읽으시는 동안 어떤 정보를 수집하는지, 그리고 그 정보가 어떻게 처리되는지를 설명합니다. 현재 이 사이트가 실제로 하고 있는 일을 기준으로 쓰였으며, 내용이 바뀔 때마다 갱신합니다.`,

  s1: {
    title: '1. 책임자',
    operator: '운영자',
    representative: '대표자',
    address: '주소',
    addressLine: (address: string) => `${address}, 일본`,
    contact: '연락처',
    contactLink: 'fam16.com의 문의 양식',
  },
  s2: {
    title: '2. 수집하는 정보',
    none: '이 사이트에는 계정, 댓글, 입력 양식, 뉴스레터 구독 기능이 없습니다. 이곳에서 개인정보를 요청하지 않습니다.',
    analytics:
      '<strong>분석 정보(동의하신 경우에만).</strong> Google이 제공하는 Google Analytics 4(EEA와 영국 방문자에게는 Google Ireland Limited, 미국에서는 Google LLC)는 어떤 페이지가 조회되는지, 얼마나 오래 열려 있는지, 어느 페이지나 사이트에서 유입되었는지, 기기와 브라우저의 종류, 대략적인 위치(IP 주소에서 추정한 도시 또는 지역 수준)를 기록합니다. 브라우저를 구별하기 위해 쿠키를 사용합니다. 저는 이를 어떤 가이드가 읽히고 어떤 가이드를 손봐야 하는지 파악하는 데 씁니다. 방문자를 식별하는 데도, 광고에도 사용하지 않습니다.',
    hosting:
      '<strong>호스팅 기록.</strong> 이 사이트는 Cloudflare, Inc.(미국)를 통해 제공됩니다. 다른 웹 호스트와 마찬가지로, 페이지를 전달하고 악용을 막기 위해 IP 주소, 브라우저 종류, 요청하신 페이지를 처리합니다.',
    messages:
      '<strong>저에게 보내시는 메시지.</strong> 정정 요청이나 질문을 보내시려면 제 회사 사이트 fam16.com의 문의 양식을 이용하시게 됩니다. 그곳에 입력하신 내용은 해당 사이트의 개인정보 처리방침에 따라 처리되며, 방침에는 사용하는 양식 서비스가 명시되어 있습니다.',
    choice:
      '<strong>쿠키 선택.</strong> 쿠키 배너에서 동의 또는 거부를 선택하시면, 그 선택은 사용하시는 브라우저 안(로컬 스토리지, 키 <code>wsj-consent</code>)에만 저장됩니다. 저에게 전송되지 않습니다.',
    affiliate:
      '이 사이트의 일부 링크는 제휴 링크입니다. 링크를 따라가 구매하시면, 제휴사가 자체 추적을 통해 판매 사실을 저에게 알려 주며, 제휴사 사이트에서는 제휴사 자체 쿠키가 설정될 수 있습니다. 그 이후에는 제휴사의 개인정보 처리방침이 적용됩니다.',
    embeds: '이 사이트에는 지도, 동영상, 소셜 미디어 위젯이 삽입되어 있지 않습니다.',
  },
  s3: {
    title: '3. 쿠키',
    consent:
      '쿠키 배너에서 <strong>동의</strong>를 선택하시기 전까지는 브라우저에 아무것도 저장되지 않으며 Google Analytics로도 아무것도 전송되지 않습니다. <strong>거부</strong>를 선택하시거나 배너를 무시하셔도 사이트는 똑같이 작동하며, 분석용 쿠키는 설정되지 않습니다.',
    names:
      '동의하시면 Google Analytics가 쿠키 <code>_ga</code>와 <code>_ga_{{cookieId}}</code>를 설정합니다. 이 쿠키에는 무작위 식별자가 담기며, 먼저 삭제하지 않으면 최대 2년 동안 기기에 남습니다.',
    change:
      '언제든 푸터의 <strong>쿠키 설정</strong>에서 선택을 바꾸실 수 있습니다. 브라우저에서 쿠키를 삭제하시거나, Google의 <a href="{{optout}}" target="_blank" rel="noopener noreferrer">Analytics 선택 해제 부가기능</a>을 설치하셔도 됩니다. Google 서비스를 사용하는 사이트의 데이터를 Google이 어떻게 사용하는지는 다음에서 확인하실 수 있습니다. <a href="{{partnerSites}}" target="_blank" rel="noopener noreferrer">policies.google.com/technologies/partner-sites</a>.',
    none: '이 사이트는 쿠키를 설정하지 않습니다.',
  },
  s4: {
    title: '4. 처리 목적과 법적 근거',
    analytics: '분석: 이용자의 동의(GDPR 제6조 제1항 (a)호, 영국법상 이에 상응하는 규정). 동의는 언제든 철회하실 수 있습니다.',
    hosting: '사이트의 안전한 제공: 안전하게 작동하는 웹사이트를 운영하려는 저의 정당한 이익(GDPR 제6조 제1항 (f)호).',
    messages: '메시지에 대한 답변: 이용자에게 답하려는 저의 정당한 이익, 또는 이용자가 요청하신 조치.',
    closing: '저는 개인정보를 판매하지 않으며, 자동화된 결정이나 프로파일링에 사용하지 않습니다.',
  },
  s5: {
    title: '5. 그 밖의 처리자와 처리 장소',
    body: (providers: string) =>
      `저는 일본에 있습니다. ${providers}는 위의 데이터를 이용자의 국가 밖, 미국을 포함한 곳에 있을 수 있는 인프라에서 처리합니다. 이러한 이전에 법률상 보호조치가 필요한 경우에는, 각 업체의 개인정보 문서에서 확인하실 수 있는 업체 자체의 약속(EU–미국 데이터 프라이버시 프레임워크 또는 표준계약조항 등)에 의존합니다. 유럽연합 집행위원회는 일본이 상업 사업자에 대해 적정한 수준의 개인정보 보호를 제공한다고 인정한 바 있습니다.`,
    providersGa4: 'Google과 Cloudflare',
    providersNoGa4: 'Cloudflare',
    noShare: '법률상 요구되는 경우를 제외하고, 저는 개인정보를 다른 누구와도 공유하지 않습니다.',
  },
  s6: {
    title: '6. 보관 기간',
    analytics: '분석 데이터는 제가 분석 계정에서 설정한 한정된 기간 동안 Google이 보관하며, 제가 보관하는 보고서는 집계된 것입니다. ',
    rest: '호스팅 기록은 Cloudflare가 자체 방침에 정한 기간 동안 보관합니다. fam16.com을 통해 보내신 메시지는 답변에 필요한 기간 동안 보관한 뒤 삭제합니다.',
  },
  s7: {
    title: '7. 이용자의 권리',
    p1: '거주 지역에 따라, 이용자는 제가 보유한 본인 정보를 알려 달라고, 정정 또는 삭제해 달라고, 처리를 제한하거나 중단해 달라고, 사본을 제공해 달라고 요청하실 수 있습니다. 동의는 언제든 철회하실 수 있고, 거주 지역의 개인정보 보호 당국에 민원을 제기하실 수도 있습니다. 일본에서는 이에 상응하는 권리가 「개인정보의 보호에 관한 법률」에 규정되어 있습니다.',
    p2: '권리를 행사하시려면 <a href="{{contact}}">문의 양식</a>으로 연락해 주십시오. 본인 여부를 확인한 뒤 지체 없이 답변드립니다. 비용은 없습니다. 분석용 식별자는 무작위 값이어서 제가 이름과 연결할 수 없으므로, 이용자의 쿠키에 저장된 식별자를 알려 주셔야만 처리할 수 있습니다.',
  },
  s8: {
    title: '8. 다른 사이트',
    body: '다른 사이트로 연결되는 링크는 이 방침의 적용 범위 밖입니다. 각 사이트의 방침을 확인해 주십시오.',
  },
  s9: {
    title: '9. 변경',
    body: '사이트의 데이터 취급이 바뀌면 이 페이지를 갱신하고 상단의 날짜를 바꿉니다. 변경이 이용자에게 중대한 영향을 미칠 경우에는, 시행 전에 사이트에서 알리겠습니다.',
  },
  history: {
    title: '개정 이력',
    first: (date: string) => `${date}: 최초 공개. 쿠키 동의 배너 뒤에서 Google Analytics 4를 사용.`,
  },
};

const fr: Strings = {
  title: 'Politique de confidentialité',
  description:
    'Ce que ce site collecte et pourquoi, les cookies utilisés uniquement avec votre consentement, qui traite les données à l’étranger, et comment exercer vos droits.',
  kicker: 'Mentions légales',
  h1: 'Politique de confidentialité',
  updated: 'Dernière mise à jour :',
  intro: (operator: string) =>
    `Cette politique explique ce que ${operator} (« je », « moi ») collecte lorsque vous lisez Wayside Japan (waysidejapan.com), et ce qu’il en advient. Elle décrit ce que le site fait réellement aujourd’hui, et elle est mise à jour chaque fois que cela change.`,

  s1: {
    title: '1. Responsable',
    operator: 'Exploitant',
    representative: 'Représentant',
    address: 'Adresse',
    addressLine: (address: string) => `${address}, Japon`,
    contact: 'Contact',
    contactLink: 'Formulaire de contact sur fam16.com',
  },
  s2: {
    title: '2. Ce qui est collecté',
    none: 'Ce site n’a ni comptes, ni commentaires, ni formulaires, ni inscription à une newsletter. Je ne vous demande pas de données personnelles ici.',
    analytics:
      '<strong>Mesure d’audience, uniquement si vous acceptez.</strong> Google Analytics 4, fourni par Google (Google Ireland Limited pour les visiteurs de l’EEE et du Royaume-Uni ; Google LLC aux États-Unis), enregistre les pages consultées, la durée pendant laquelle elles restent ouvertes, la page ou le site qui vous a orienté(e) vers celui-ci, le type de votre appareil et de votre navigateur, ainsi que votre localisation approximative (au niveau de la ville ou de la région, déduite de votre adresse IP). Il utilise des cookies pour distinguer un navigateur d’un autre. Je m’en sers pour voir quels guides sont lus et lesquels doivent être retravaillés. Je ne m’en sers pas pour vous identifier, ni pour de la publicité.',
    hosting:
      '<strong>Journaux d’hébergement.</strong> Le site est diffusé par Cloudflare, Inc. (États-Unis). Comme tout hébergeur web, il traite votre adresse IP, le type de votre navigateur et la page demandée afin de la livrer et de bloquer les abus.',
    messages:
      '<strong>Messages que vous m’envoyez.</strong> Pour envoyer une correction ou une question, vous utilisez le formulaire de contact du site de mon entreprise, fam16.com. Ce que vous y saisissez est traité selon la politique de confidentialité de ce site, qui indique le service de formulaire utilisé.',
    choice:
      '<strong>Votre choix en matière de cookies.</strong> Si vous cliquez sur Accepter ou Refuser dans le bandeau des cookies, votre choix est conservé dans votre propre navigateur (stockage local, clé <code>wsj-consent</code>). Il ne m’est pas transmis.',
    affiliate:
      'Certains liens de ce site sont des liens d’affiliation. Si vous en suivez un et achetez, le partenaire m’informe de la vente grâce à son propre suivi, qui peut déposer ses propres cookies une fois que vous êtes sur le site du partenaire. La politique de confidentialité du partenaire s’applique à partir de là.',
    embeds: 'Ce site ne comporte ni cartes, ni vidéos, ni widgets de réseaux sociaux intégrés.',
  },
  s3: {
    title: '3. Cookies',
    consent:
      'Rien n’est stocké dans votre navigateur et rien n’est envoyé à Google Analytics tant que vous n’avez pas choisi <strong>Accepter</strong> dans le bandeau des cookies. Si vous choisissez <strong>Refuser</strong>, ou si vous ignorez le bandeau, le site fonctionne de la même façon et aucun cookie de mesure d’audience n’est déposé.',
    names:
      'Si vous acceptez, Google Analytics dépose les cookies <code>_ga</code> et <code>_ga_{{cookieId}}</code>. Ils contiennent un identifiant aléatoire et restent sur votre appareil jusqu’à deux ans, sauf si vous les supprimez plus tôt.',
    change:
      'Vous pouvez changer d’avis à tout moment avec <strong>Paramètres des cookies</strong> dans le pied de page. Vous pouvez aussi supprimer les cookies dans votre navigateur, ou installer le <a href="{{optout}}" target="_blank" rel="noopener noreferrer">module complémentaire de désactivation de Google Analytics</a>. Pour en savoir plus sur la manière dont Google utilise les données des sites qui utilisent ses services : <a href="{{partnerSites}}" target="_blank" rel="noopener noreferrer">policies.google.com/technologies/partner-sites</a>.',
    none: 'Ce site ne dépose pas de cookies.',
  },
  s4: {
    title: '4. Pourquoi, et sur quelle base juridique',
    analytics: 'Mesure d’audience : votre consentement (article 6, paragraphe 1, point a) du RGPD ; l’équivalent en droit britannique). Vous pouvez le retirer à tout moment.',
    hosting: 'Diffusion sécurisée du site : mon intérêt légitime à exploiter un site web sûr et fonctionnel (article 6, paragraphe 1, point f) du RGPD).',
    messages: 'Réponse à vos messages : mon intérêt légitime à vous répondre, ou les démarches que vous avez demandées.',
    closing: 'Je ne vends pas de données personnelles, et je ne les utilise ni pour des décisions automatisées ni pour du profilage.',
  },
  s5: {
    title: '5. Qui d’autre les traite, et où',
    body: (providers: string) =>
      `Je suis établi au Japon. ${providers} traitent les données ci-dessus sur des infrastructures qui peuvent se trouver hors de votre pays, y compris aux États-Unis. Lorsque la loi exige une garantie pour un tel transfert, je m’appuie sur les engagements propres du prestataire, tels que le cadre de protection des données UE–États-Unis ou les clauses contractuelles types, que vous trouverez dans sa documentation sur la confidentialité. La Commission européenne a reconnu que le Japon assure un niveau de protection des données adéquat pour les opérateurs commerciaux.`,
    providersGa4: 'Google et Cloudflare',
    providersNoGa4: 'Cloudflare',
    noShare: 'Je ne partage pas de données personnelles avec qui que ce soit d’autre, sauf si la loi l’exige.',
  },
  s6: {
    title: '6. Durée de conservation',
    analytics: 'Les données de mesure d’audience sont conservées par Google pendant une durée limitée que je définis dans le compte d’analyse ; les rapports que je conserve sont agrégés. ',
    rest: 'Les journaux d’hébergement sont conservés par Cloudflare aussi longtemps que sa propre politique le prévoit. Les messages envoyés via fam16.com sont conservés le temps nécessaire pour y répondre, puis supprimés.',
  },
  s7: {
    title: '7. Vos droits',
    p1: 'Selon l’endroit où vous vivez, vous pouvez me demander de vous indiquer ce que je détiens sur vous, de le corriger ou de le supprimer, d’en restreindre ou d’en cesser l’utilisation, et de vous en remettre une copie. Vous pouvez retirer votre consentement à tout moment, et vous pouvez déposer une plainte auprès de l’autorité de protection des données de votre pays. Au Japon, les droits équivalents sont définis par la loi sur la protection des informations personnelles.',
    p2: 'Pour exercer l’un d’eux, écrivez-moi via le <a href="{{contact}}">formulaire de contact</a>. Je vérifierai qu’il s’agit bien de vous et je répondrai sans retard injustifié. C’est gratuit. Comme l’identifiant de mesure d’audience est aléatoire et que je ne peux pas le relier à un nom, je ne peux y donner suite que si vous m’indiquez l’identifiant stocké dans votre propre cookie.',
  },
  s8: {
    title: '8. Autres sites',
    body: 'Les liens vers d’autres sites ne relèvent pas de cette politique. Consultez la politique propre à chaque site.',
  },
  s9: {
    title: '9. Modifications',
    body: 'Je mettrai cette page à jour lorsque le traitement des données par le site changera, et je modifierai la date en haut de page. Si un changement devait vous affecter de manière significative, je l’indiquerai sur le site avant qu’il ne prenne effet.',
  },
  history: {
    title: 'Historique des révisions',
    first: (date: string) => `${date} : première publication, avec Google Analytics 4 derrière un bandeau de consentement aux cookies.`,
  },
};

const es: Strings = {
  title: 'Política de privacidad',
  description:
    'Qué datos recoge este sitio y por qué, qué cookies usa y solo con tu consentimiento, quién trata los datos en el extranjero y cómo ejercer tus derechos.',
  kicker: 'Aviso legal',
  h1: 'Política de privacidad',
  updated: 'Última actualización:',
  intro: (operator: string) =>
    `Esta política explica qué recoge ${operator} (“yo”, “me”) cuando lees Wayside Japan (waysidejapan.com) y qué ocurre con esos datos. Describe lo que el sitio hace realmente hoy y se actualiza cada vez que eso cambia.`,

  s1: {
    title: '1. Quién es el responsable',
    operator: 'Responsable',
    representative: 'Representante',
    address: 'Dirección',
    addressLine: (address: string) => `${address}, Japón`,
    contact: 'Contacto',
    contactLink: 'Formulario de contacto en fam16.com',
  },
  s2: {
    title: '2. Qué se recoge',
    none: 'Este sitio no tiene cuentas, comentarios, formularios ni suscripción a un boletín. Aquí no te pido datos personales.',
    analytics:
      '<strong>Analítica, solo si aceptas.</strong> Google Analytics 4, proporcionado por Google (Google Ireland Limited para los visitantes del EEE y del Reino Unido; Google LLC en Estados Unidos), registra qué páginas se ven, cuánto tiempo permanecen abiertas, qué página o sitio te remitió, el tipo de dispositivo y de navegador, y tu ubicación aproximada (a nivel de ciudad o región, deducida de tu dirección IP). Usa cookies para distinguir un navegador de otro. Lo uso para ver qué guías se leen y cuáles necesitan mejoras. No lo uso para identificarte ni para publicidad.',
    hosting:
      '<strong>Registros de alojamiento.</strong> El sitio se entrega a través de Cloudflare, Inc. (Estados Unidos). Como cualquier proveedor de alojamiento web, trata tu dirección IP, el tipo de navegador y la página que solicitaste para entregarla y bloquear abusos.',
    messages:
      '<strong>Mensajes que me envías.</strong> Para enviar una corrección o una pregunta, usas el formulario de contacto del sitio de mi empresa, fam16.com. Lo que escribes allí se trata según la política de privacidad de ese sitio, que indica el servicio de formularios que utiliza.',
    choice:
      '<strong>Tu elección sobre las cookies.</strong> Si eliges Aceptar o Rechazar en el banner de cookies, tu elección se guarda en tu propio navegador (almacenamiento local, clave <code>wsj-consent</code>). No se me envía.',
    affiliate:
      'Algunos enlaces de este sitio son enlaces de afiliado. Si sigues uno y compras, el socio me informa de la venta mediante su propio seguimiento, que puede instalar sus propias cookies una vez que estás en el sitio del socio. A partir de ahí se aplica la política de privacidad del socio.',
    embeds: 'Este sitio no incluye mapas, vídeos ni widgets de redes sociales incrustados.',
  },
  s3: {
    title: '3. Cookies',
    consent:
      'No se guarda nada en tu navegador ni se envía nada a Google Analytics hasta que eliges <strong>Aceptar</strong> en el banner de cookies. Si eliges <strong>Rechazar</strong>, o ignoras el banner, el sitio funciona igual y no se instala ninguna cookie de analítica.',
    names:
      'Si aceptas, Google Analytics instala las cookies <code>_ga</code> y <code>_ga_{{cookieId}}</code>. Contienen un identificador aleatorio y permanecen en tu dispositivo hasta dos años, salvo que las elimines antes.',
    change:
      'Puedes cambiar de opinión en cualquier momento desde <strong>Ajustes de cookies</strong>, en el pie de página. También puedes eliminar las cookies en tu navegador o instalar el <a href="{{optout}}" target="_blank" rel="noopener noreferrer">complemento de inhabilitación de Google Analytics</a>. Más información sobre cómo usa Google los datos de los sitios que utilizan sus servicios: <a href="{{partnerSites}}" target="_blank" rel="noopener noreferrer">policies.google.com/technologies/partner-sites</a>.',
    none: 'Este sitio no instala cookies.',
  },
  s4: {
    title: '4. Por qué, y con qué base jurídica',
    analytics: 'Analítica: tu consentimiento (artículo 6, apartado 1, letra a) del RGPD; el equivalente en la legislación del Reino Unido). Puedes retirarlo en cualquier momento.',
    hosting: 'Entrega segura del sitio: mi interés legítimo en mantener un sitio web seguro y que funcione (artículo 6, apartado 1, letra f) del RGPD).',
    messages: 'Responder a tus mensajes: mi interés legítimo en contestarte, o las gestiones que hayas solicitado.',
    closing: 'No vendo datos personales ni los uso para decisiones automatizadas ni para elaborar perfiles.',
  },
  s5: {
    title: '5. Quién más los trata, y dónde',
    body: (providers: string) =>
      `Resido en Japón. ${providers} tratan los datos anteriores en infraestructuras que pueden estar fuera de tu país, incluso en Estados Unidos. Cuando la ley exige una garantía para esa transferencia, me apoyo en los compromisos del propio proveedor, como el Marco de Privacidad de Datos UE-EE. UU. o las cláusulas contractuales tipo, que puedes consultar en su documentación de privacidad. La Comisión Europea ha reconocido que Japón ofrece un nivel adecuado de protección de datos para los operadores comerciales.`,
    providersGa4: 'Google y Cloudflare',
    providersNoGa4: 'Cloudflare',
    noShare: 'No comparto datos personales con nadie más, salvo cuando la ley lo exige.',
  },
  s6: {
    title: '6. Cuánto tiempo se conservan',
    analytics: 'Google conserva los datos de analítica durante un período limitado que establezco en la cuenta de analítica; los informes que conservo son agregados. ',
    rest: 'Cloudflare conserva los registros de alojamiento durante el tiempo que indique su propia política. Los mensajes enviados a través de fam16.com se conservan el tiempo necesario para responderlos y después se eliminan.',
  },
  s7: {
    title: '7. Tus derechos',
    p1: 'Según el lugar donde vivas, puedes pedirme que te informe de qué datos tengo sobre ti, que los corrija o los elimine, que restrinja o deje de usarlos y que te entregue una copia. Puedes retirar tu consentimiento en cualquier momento y presentar una reclamación ante la autoridad de protección de datos de tu país. En Japón, los derechos equivalentes están recogidos en la Ley de Protección de la Información Personal.',
    p2: 'Para ejercer cualquiera de ellos, escríbeme a través del <a href="{{contact}}">formulario de contacto</a>. Confirmaré que eres tú y responderé sin demora indebida. No tiene ningún coste. Como el identificador de analítica es aleatorio y no puedo vincularlo a un nombre, solo puedo atender la solicitud si me indicas el identificador guardado en tu propia cookie.',
  },
  s8: {
    title: '8. Otros sitios',
    body: 'Los enlaces a otros sitios quedan fuera de esta política. Consulta la política de cada sitio.',
  },
  s9: {
    title: '9. Cambios',
    body: 'Actualizaré esta página cuando cambie el tratamiento de datos del sitio y modificaré la fecha de la parte superior. Si un cambio te afectara de forma significativa, lo indicaré en el sitio antes de que entre en vigor.',
  },
  history: {
    title: 'Historial de revisiones',
    first: (date: string) => `${date}: primera publicación, con Google Analytics 4 detrás de un banner de consentimiento de cookies.`,
  },
};

export const table: { en: Strings } & Partial<Record<Exclude<Locale, 'en'>, Strings>> = { en, ko, fr, es };
export const strings = (locale: string): Strings => pickLocale(table, locale);
