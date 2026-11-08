/**
 * lineages.ts の table.fr の後半（キー出現順 21〜40 番目：sake 〜 yatai）。あとで lineages.ts の table に取り込む。
 */
export const part = {
  sake: {
    name: "Saké",
    axes: {
      water: "Eau",
      conditions: "Climat et gens",
      style: "Dans la description officielle",
      gi: "Nom protégé",
    },
    lineages: {
      "nada-fushimi": {
        name: "Nada et Fushimi",
        place: "Kobe–Nishinomiya / Kyoto",
        era: "Fushimi depuis la période Momoyama ; Miyamizu découverte à la fin de l’époque d’Edo",
        cells: {
          water: "Nada : Miyamizu, dure, presque sans fer. Fushimi : eau de source moyennement dure",
          conditions: "Nada : vent froid du Rokkō pour le brassage d’hiver, brasseurs de Tanba. Fushimi : port fluvial entre Kyoto et Osaka",
          style: "Nada : équilibré, finale nette, plus rond après l’été. Kyoto : doux et rond, fait pour accompagner un repas",
          gi: "Nada Gogō (2018) ; Fushimi relève de l’IG Kyoto (2025)",
        },
      },
      niigata: {
        name: "Niigata",
        place: "Préfecture de Niigata",
        era: "Brasseurs d’Echigo depuis le milieu de l’époque d’Edo",
        cells: {
          water: "Abondante, en général douce",
          conditions: "Neige abondante et froid constant ; brasseurs tōji d’Echigo ; un institut de brasserie préfectoral depuis 1930",
          style: "Tanrei — net, avec peu de défauts d’arôme. Le texte officiel ne dit pas « sec »",
          gi: "Niigata (2022)",
        },
      },
      hiroshima: {
        name: "Hiroshima (Saijō, Akitsu)",
        place: "Higashihiroshima",
        era: "Brassage côtier depuis la fin de l’époque d’Edo ; méthode à l’eau douce de Miura, 1898",
        cells: {
          water: "Côte (Mitsu) : douce. Saijō : eaux souterraines du mont Ryūō, moyennement dures, environ 80 mg/L",
          conditions: "Des brasseurs qui ont vaincu l’altération par la mesure ; la première décortiqueuse de riz motorisée du Japon ; recherche publique sur le brassage depuis 1922",
          style: "Pas de description d’IG. La préfecture relie la méthode à l’eau douce à la naissance du ginjō",
          gi: "Aucune",
        },
      },
      akita: {
        name: "Akita",
        place: "Préfecture d’Akita",
        era: "—",
        cells: {
          water: "En général douce, selon les termes de la coopérative des brasseurs (aucune mesure fournie)",
          conditions: "Hivers froids et neigeux et fermentation lente à basse température ; tōji de Sannai ; riz à saké propre depuis 1988 ; levure Kyōkai n° 6 (1930)",
          style: "Pas de description d’IG. Le centre de recherche dit que l’Akita Sake Komachi donne peu de défauts d’arôme et une finale légère",
          gi: "Aucune",
        },
      },
    },
  },
  sashimi: {
    name: "Sashimi",
    axes: {
      what: "De quoi il s’agit",
      why: "Pourquoi on le fait",
      regional: "Différence régionale",
      safety: "Note de sécurité",
    },
    lineages: {
      "shusse-uo": {
        name: "Poissons « à promotion » (buri, suzuki)",
        place: "Dans tout le pays, noms selon la région",
        era: "—",
        cells: {
          what: "Poissons rebaptisés en grandissant : inada, warasa, buri ; seigo, fukko, suzuki",
          why: "La taille et l’âge changent le poisson, et les noms du marché suivent",
          regional: "Le Kantō dit inada, le Kansai hamachi ; Toyama compte jusqu’à cinq stades",
          safety: "—",
        },
      },
      shime: {
        name: "Poisson mariné (kobujime, shimesaba)",
        place: "Toyama (kobujime)",
        era: "kobujime depuis l’époque d’Edo",
        cells: {
          what: "Poisson cru pressé entre des feuilles de kombu, ou mariné au vinaigre",
          why: "Le kombu absorbe l’eau et ajoute de l’umami ; le poisson se raffermit",
          regional: "Toyama est la préfecture du kobujime ; l’espadon en est la référence",
          safety: "Le vinaigre ne tue pas l’anisakis ; le shimesaba demande une congélation",
        },
      },
      tataki: {
        name: "Katsuo no tataki",
        place: "Kōchi",
        era: "—",
        cells: {
          what: "Bonite avec une sauce au vinaigre d’agrumes et à la sauce soja",
          why: "—",
          regional: "À Kōchi, toujours avec de l’ail en lamelles",
          safety: "—",
        },
      },
    },
  },
  seafood: {
    name: "Les produits de la mer au-delà des sushis et sashimi",
    axes: {
      what: "De quoi il s’agit",
      method: "Comment on le prépare",
      season: "Saison",
      know: "À savoir",
    },
    lineages: {
      salmon: {
        name: "Saumon, ikura et sujiko",
        place: "Hokkaido, Iwate, Miyagi, Niigata",
        era: "Saumon salé versé comme impôt dès la fin du VIIe siècle (ministère de l’Agriculture)",
        cells: {
          what: "Saumon salé, œufs dans leur poche (sujiko) ou détachés (ikura), et plats qui utilisent tout le poisson",
          method: "Salaison à sec pour les gros poissons, saumure pour les œufs ; l’ikura mariné à la sauce soja est courant à la maison",
          season: "Remontées d’automne ; harako-meshi vers septembre–novembre",
          know: "Le mot ikura viendrait du russe ; la façon dont il est arrivé a plus d’une version",
        },
      },
      fugu: {
        name: "Fugu (poisson-globe)",
        place: "Shimonoseki, Yamaguchi",
        era: "Légalisé à Yamaguchi en 1888",
        cells: {
          what: "Poisson-globe, surtout connu en sashimi finement tranché avec du ponzu",
          method: "Seuls les cuisiniers titulaires d’une licence peuvent le préparer ; le foie ne peut être ni vendu ni servi",
          season: "Saison de pêche de septembre à mars",
          know: "La toxine n’est pas détruite par la cuisson ; les licences diffèrent selon la préfecture",
        },
      },
      "anago-hamo": {
        name: "Anago et hamo",
        place: "Baie de Tokyo ; Miyajima ; Kyoto",
        era: "Anago-meshi vendu comme repas de gare dès 1901",
        cells: {
          what: "Deux poissons au corps long : le congre (anago) et le congre-brochet (hamo)",
          method: "L’anago d’Edomae est mijoté et badigeonné de tsume ; l’anago de Miyajima est grillé sur du riz ; le hamo demande le honekiri, qui consiste à couper les petites arêtes",
          season: "Anago : traditionnellement de la fin du printemps à l’été ; hamo : du début de l’été à l’automne",
          know: "Le hamo de Kyoto vient surtout de la mer intérieure de Seto et de la mer de Genkai",
        },
      },
      himono: {
        name: "Himono (poisson séché)",
        place: "Côtes de tout le Japon",
        era: "—",
        cells: {
          what: "Poisson séché entier, ou après avoir retiré viscères et branchies, pour le conserver",
          method: "Séché au soleil, salé puis séché, bouilli puis séché, ou grillé puis séché",
          season: "Toute l’année ; le saumon toba se fait quand la température est inférieure à 10 °C",
          know: "La plupart sont ouverts par le ventre ; l’Odawara-biraki garde la tête et s’ouvre par le dos",
        },
      },
      nerimono: {
        name: "Nerimono (pâte de poisson)",
        place: "Nombreuses régions",
        era: "Plus ancienne mention conservée du kamaboko : 1115 (ministère de l’Agriculture)",
        cells: {
          what: "Poisson broyé avec du sel et pris à la chaleur : kamaboko, chikuwa, hanpen et d’autres",
          method: "Grillé, bouilli, cuit à la vapeur ou frit",
          season: "—",
          know: "Chaque région a le sien : sasa-kamaboko à Miyagi, kamaboko à la vapeur sur planchette à Odawara, jakoten à Ehime",
        },
      },
      kombu: {
        name: "Kombu",
        place: "Hokkaido",
        era: "Dans le Shoku Nihongi (797), selon le ministère de l’Agriculture ; la route du kombu de l’époque d’Edo",
        cells: {
          what: "Algue kelp, surtout de Hokkaido, utilisée pour les bouillons et les plats mijotés",
          method: "Séchée ; essuyée plutôt que lavée avant de préparer le bouillon",
          season: "—",
          know: "Récoltée dans le nord, mais mangée de la façon la plus caractéristique à Osaka et à Okinawa",
        },
      },
      seaweed: {
        name: "Nori, wakame et mozuku",
        place: "Mer d’Ariake ; Sanriku ; Okinawa",
        era: "La culture du nori a commencé à l’époque d’Edo (ministère de l’Agriculture) ; culture du wakame à Miyagi depuis 1960 environ",
        cells: {
          what: "Algues cultivées : nori en feuilles, wakame salé, mozuku",
          method: "Le nori est cultivé sur des filets ; le wakame est blanchi et salé",
          season: "Nouveau nori dès début novembre ; wakame de mars à avril ; récolte du mozuku vers avril",
          know: "Plus de 95 % du mozuku provenait d’Okinawa dans un rapport préfectoral de 2007",
        },
      },
      "oyster-crab": {
        name: "Huîtres et crabe des neiges",
        place: "Baie de Hiroshima ; Miyagi ; Tottori ; Fukui",
        era: "L’ostréiculture de Hiroshima aurait commencé entre les années 1500 et 1600 (ministère de l’Agriculture)",
        cells: {
          what: "Huîtres d’élevage, vendues pour être mangées crues ou cuites ; crabe des neiges mâle et femelle sous des noms régionaux",
          method: "Huîtres élevées sur des cordes suspendues ; à Miyagi, les huîtres en coquille à manger crues sont purifiées 22 heures ou plus",
          season: "Huîtres de Hiroshima d’octobre à mai, meilleures de décembre à février ; crabe de Fukui : mâles du 6 nov. au 20 mars, femelles jusqu’au 31 déc.",
          know: "Cru ou cuit se décide selon les eaux de récolte, non selon la fraîcheur ; le crabe de Fukui porte une étiquette de port avec le sigle IG",
        },
      },
      "saba-katsuo-maguro": {
        name: "Maquereau, bonite et thon",
        place: "Saganoseki, Ōita ; Wakasa ; Kōchi ; Yaizu ; Misaki ; Ōma",
        era: "Le heshiko serait fabriqué dès le milieu de l’époque d’Edo (ministère de l’Agriculture)",
        cells: {
          what: "Seki saba et heshiko ; tataki de bonite saisie ; morceaux de thon, de l’akami au toro",
          method: "Seki saba : pêche à la ligne simple, vivier, ikejime. Tataki : saisi sur de la paille ; les sources divergent sur l’eau froide",
          season: "Les bateaux de Kōchi suivent la bonite de mars à novembre ; la graisse du thon tend à être plus élevée en hiver (organisme professionnel)",
          know: "Le toro était un aliment de basse qualité à l’époque d’Edo ; le Japon a réduit de moitié ses prises de petits thons rouges à partir de 2015",
        },
      },
    },
  },
  seasonal: {
    name: "Plats des fêtes de l’année",
    axes: {
      when: "Quand",
      food: "Ce que l’on mange",
      meaning: "La raison avancée",
      varies: "Variantes",
    },
    lineages: {
      "new-year": {
        name: "Nouvel An",
        place: "Dans tout le pays",
        era: "Forme de base de l’osechi à la fin de l’époque d’Edo ; bouillie aux sept herbes de Muromachi à Edo",
        cells: {
          when: "Les jours du Nouvel An ; bouillie aux sept herbes le 7 janvier",
          food: "Osechi avec trois iwai-zakana (haricots noirs, tazukuri, œufs de hareng) ; bouillie de riz aux sept herbes du printemps",
          meaning: "Un vœu pour chaque plat (santé, récolte, enfants, chance) ; la vigueur des herbes pour une longue vie",
          varies: "—",
        },
      },
      setsubun: {
        name: "Setsubun",
        place: "Dans tout le pays ; l’ehōmaki est présenté comme une coutume d’Osaka",
        era: "Le lancer de haricots aurait commencé à l’époque de Muromachi ; ehōmaki répandu dans tout le pays depuis les années 1990",
        cells: {
          when: "Vers le 3 février, la veille du début du printemps",
          food: "Soja grillé, sardines grillées, le rouleau de sushi appelé ehōmaki",
          meaning: "Chasser le mal et souhaiter une bonne santé ; l’ehōmaki se mange face à la direction faste de l’année",
          varies: "Sardines surtout dans l’ouest du Japon ; cacahuètes dans certaines parties de Hokkaido ; konnyaku ou oden à Sorachi",
        },
      },
      hinamatsuri: {
        name: "Hinamatsuri",
        place: "Dans tout le pays",
        era: "Exposition de poupées pour les filles depuis l’époque d’Edo",
        cells: {
          when: "3 mars",
          food: "Chirashi-zushi, soupe de palourdes, mochi en losange tricolore, saké blanc ou amazake, hina-arare",
          meaning: "La croissance d’une fille ; les palourdes pour un mariage bien assorti ; les couleurs du mochi pour le printemps",
          varies: "Hina-arare ronds et salés au Kansai, en forme de grains de riz et sucrés au Kantō",
        },
      },
      tango: {
        name: "Tango (fête des enfants)",
        place: "—",
        era: "—",
        cells: {
          when: "5 mai ; 5 juin selon l’ancien calendrier dans l’est de Shimane",
          food: "Kashiwa-mochi, chimaki",
          meaning: "Le kashiwa-mochi pour la vie transmise du parent à l’enfant ; le chimaki pour éloigner le mal",
          varies: "L’est de Shimane enveloppe des boulettes de farine de riz dans des feuilles de bambou ; appelé maki ou kayamaki à Oki",
        },
      },
      "tanabata-obon": {
        name: "Tanabata et Obon",
        place: "—",
        era: "—",
        cells: {
          when: "7 juillet ; du 13 au 16 août environ",
          food: "Sōmen aux deux fêtes ; repas bouddhiques shōjin et boulettes à l’Obon",
          meaning: "Des histoires différentes pour les mêmes nouilles ; à l’Obon, les rênes du cheval des ancêtres",
          varies: "Les plats de l’Obon diffèrent selon la région (zunda mochi à Miyagi, bon-jiru à Matsusaka, kainoko-jiru à Kagoshima)",
        },
      },
      tsukimi: {
        name: "Contemplation de la lune",
        place: "—",
        era: "—",
        cells: {
          when: "Pleine lune du huitième mois de l’ancien calendrier (mi-septembre à début octobre)",
          food: "Boulettes de la contemplation de la lune, taro",
          meaning: "Remerciement pour la récolte et vœu pour la suivante",
          varies: "Légèrement aplaties dans certaines parties du Kantō ; tricolores à Nagoya ; creusées à Shizuoka ; fuchagi à Okinawa",
        },
      },
      toji: {
        name: "Solstice d’hiver",
        place: "—",
        era: "—",
        cells: {
          when: "Vers le 22 décembre",
          food: "Citrouille ; citrouille mijotée aux azuki (itoko-ni)",
          meaning: "Plusieurs raisons données ensemble : le son n porte chance ; elle se conserve et nourrit en hiver",
          varies: "—",
        },
      },
      omisoka: {
        name: "Réveillon du Nouvel An",
        place: "—",
        era: "—",
        cells: {
          when: "31 décembre",
          food: "Toshikoshi soba",
          meaning: "Trois raisons données ensemble : une longue vie, couper les ennuis de l’année, une bonne santé",
          varies: "Les noms, le jour où on les mange, le type de soba et le bouillon diffèrent selon la région",
        },
      },
      christmas: {
        name: "Noël",
        place: "—",
        era: "—",
        cells: {
          when: "25 décembre",
          food: "Poulet frit, gâteau de Noël",
          meaning: "—",
          varies: "—",
        },
      },
    },
  },
  seasoning: {
    name: "Assaisonnements",
    axes: {
      made: "Comment il est fabriqué",
      types: "Principaux types",
      use: "Comment on l’utilise",
      marker: "À savoir",
    },
    lineages: {
      shoyu: {
        name: "Sauce soja",
        place: "Du chinois jiang ; Yuasa (Wakayama) selon la tradition, Noda et Choshi (Chiba) pour la sauce soja foncée",
        era: "Mot attesté en 1568 ou 1597, selon la source",
        cells: {
          made: "Soja, blé et sel ; moût de koji mûri environ 6 à 8 mois en cuves, un an ou plus en fûts",
          types: "Koikuchi foncée (84.9 % des expéditions de 2024), usukuchi claire, tamari, saishikomi, shiro blanche",
          use: "En cuisine et à table ; sauce soja claire quand la couleur du plat doit rester visible",
          marker: "Chiba expédie 37.6 % ; de nombreuses usines accueillent des visiteurs, le plus souvent sur réservation",
        },
      },
      egg: {
        name: "Œufs",
        place: "Dans tout le pays",
        era: "Consommés depuis le début de l’époque d’Edo ; règles sur l’œuf cru depuis 1999",
        cells: {
          made: "Lavés, désinfectés, contrôlés et emballés dans des centres de calibrage ; 96 % d’origine nationale",
          types: "Cru sur du riz, onsen tamago, omelette roulée (atsuyaki sucré au Kantō, dashimaki au Kansai)",
          use: "La date de consommation recommandée vaut pour une consommation crue, 21 jours au maximum ; bien cuire après cette date",
          marker: "320 œufs par personne en 2023, quatrième rang dans un classement international",
        },
      },
      vinegar: {
        name: "Vinaigre",
        place: "—",
        era: "—",
        cells: {
          made: "Vinaigre de fermentation (céréales, noir, fruits) ou vinaigre synthétique",
          types: "Vinaigre de riz ; vinaigre de lie de saké (kasuzu) depuis la fin de l’époque d’Edo",
          use: "Le vinaigre de lie de saké s’est répandu avec les sushis de style Edo",
          marker: "—",
        },
      },
      mirin: {
        name: "Mirin",
        place: "—",
        era: "—",
        cells: {
          made: "Riz gluant cuit à la vapeur et koji de riz dans du shōchū, 40 à 60 jours à 20–30 °C, puis pressé",
          types: "—",
          use: "Douceur, brillance, saveur qui pénètre, évite que les aliments se défassent, masque les odeurs",
          marker: "Deux versions de l’origine ; ce site ne tranche pas",
        },
      },
    },
  },
  shun: {
    name: "Shun (produits de saison)",
    axes: {
      land: "De la terre (listes du ministère de l’Agriculture)",
      sea: "De la mer et des rivières",
      marker: "Ce que les sources soulignent",
      shops: "Dans les chaînes",
    },
    lineages: {
      "spring-summer": {
        name: "Printemps et été",
        place: "Dans tout le pays ; les pousses de bambou commencent à Kyushu",
        era: "—",
        cells: {
          land: "Printemps : pousses de bambou, fleurs de colza, bourgeons de pétasite, légumes amers de montagne, fraises. Été : concombres et autres cucurbitacées, tomates, pastèque, edamame",
          sea: "Printemps : palourdes asari, dorade. Été : chinchard, anguille, ayu, congre-brochet",
          marker: "Les pousses de bambou remontent vers le nord depuis Kyushu, de mars à mai ; un avertissement du ministère sur les sosies toxiques des légumes sauvages",
          shops: "Boissons sakura de Starbucks Japan depuis le 18 février 2026, à partir de ¥579 taxe incluse",
        },
      },
      "autumn-winter": {
        name: "Automne et hiver",
        place: "Dans tout le pays",
        era: "—",
        cells: {
          land: "Automne : patates douces, châtaignes, kakis, raisin, matsutake et autres champignons, riz nouveau, soba nouveau. Hiver : daikon, chou chinois, poireaux, mikan",
          sea: "Automne : balaou, saumon. Hiver : sériole, baudroie, crabe, huîtres, fugu",
          marker: "Matsutake tombé à 15 tonnes dans l’ensemble du pays en 2025 ; balaou à des niveaux record de faiblesse ; shinmai seulement s’il est emballé dans l’année de la récolte",
          shops: "Tsukimi Burger de McDonald’s à partir de ¥460 et boissons à la patate douce de Starbucks Japan, tous deux dès le 2 septembre 2026",
        },
      },
    },
  },
  soba: {
    name: "Soba",
    axes: {
      flour: "Farine et coupe",
      serving: "Service",
      sauce: "Sauce",
      howToEat: "Comment on le mange",
    },
    lineages: {
      edo: {
        name: "Edo / Tokyo",
        place: "Edo (Tokyo)",
        era: "Années 1700 ; boutiques dès 1789",
        cells: {
          flour: "Trois maisons : Sarashina (première mouture blanche), Yabu, Sunaba ; « ni-hachi » 8:2 avec du blé",
          serving: "Froid sur un plateau de bambou (mori / zaru), ou chaud dans le bouillon (kake)",
          sauce: "Forte sauce soja foncée « kaeshi » avec de la bonite ; ne tremper qu’à moitié",
          howToEat: "On les aspire ; on termine avec le soba-yu, l’eau de cuisson, versé dans la sauce restante",
        },
      },
      tachigui: {
        name: "Soba debout",
        place: "Gares ; chaînes de Tokyo",
        era: "soba de gare connu vers 1897 (une théorie) ; chaînes depuis 1966",
        cells: {
          flour: "—",
          serving: "Au comptoir, debout : kake chaud ou mori froid, soba au tempura au même menu",
          sauce: "Le bouillon du Kantō est surtout à base de bonite ; deux comptoirs d’un même traiteur de Shinagawa le préparent à des intensités différentes",
          howToEat: "Souvent entre deux trains ; kake de Fuji Soba ¥450 taxe incluse (oct. 2026)",
        },
      },
      izumo: {
        name: "Izumo (Shimane)",
        place: "Matsue / Izumo",
        era: "1638 ou 1666, avec le seigneur Matsudaira",
        cells: {
          flour: "Hikigurumi — grain entier moulu avec l’enveloppe : sombre, parfumé ; environ 20 % de blé",
          serving: "Wariko : trois bols ronds en laque rouge empilés ; ou kama-age dans son eau de cuisson",
          sauce: "Versée sur les nouilles, sans tremper ; transmise d’un bol à l’autre",
          howToEat: "Daikon râpé au piment ; l’eau de cuisson fait partie du plat",
        },
      },
      togakushi: {
        name: "Togakushi (Nagano)",
        place: "Togakushi, Nagano",
        era: "Ascètes de montagne de l’époque de Heian ; soba-kiri à l’époque d’Edo",
        cells: {
          flour: "Vert pâle, fin",
          serving: "« Botchi-mori » : cinq ou six écheveaux en fer à cheval sur un plateau de bambou rond, à peine égouttés",
          sauce: "Sauce pour tremper avec du daikon piquant",
          howToEat: "Une offrande de sanctuaire devenue plat d’hospitalité",
        },
      },
      wanko: {
        name: "Wanko (Iwate)",
        place: "Hanamaki / Morioka",
        era: "légende du seigneur de Nambu, années 1600",
        cells: {
          flour: "Soba ordinaire en portions d’une bouchée",
          serving: "Un serveur remplit sans cesse un petit bol laqué jusqu’à ce que vous refermiez le couvercle",
          sauce: "Déjà assaisonné ; les condiments changent le bol au fil du repas",
          howToEat: "15 bols ≈ une portion normale ; le record est de 632",
        },
      },
      jindaiji: {
        name: "Jindaiji (Tokyo)",
        place: "Chōfu, Tokyo",
        era: "Époque d’Edo",
        cells: {
          flour: "Historiquement, farine versée au temple par les paysans à la place du riz ; moulue à la meule de pierre",
          serving: "Mori (seiro dans certaines boutiques, zaru avec du nori) et bols chauds ; soba au tempura généralement avec une crevette",
          sauce: "Sauce pour tremper, allongée de soba-yu après le repas",
          howToEat: "Oignon nouveau et wasabi, shichimi selon le goût ; de nombreuses boutiques ferment avec la porte du temple vers 17 h",
        },
      },
      hegi: {
        name: "Hegi (Niigata)",
        place: "Région d’Uonuma, Niigata (dit-on)",
        era: "—",
        cells: {
          flour: "Lié avec de l’algue funori, autrefois utilisée pour raidir les fils de métier à tisser",
          serving: "Sur un hegi, plateau carré en bois fendu",
          sauce: "—",
          howToEat: "Oignon nouveau et moutarde, pas de wasabi ; surtout dans les boutiques de soba",
        },
      },
      "echizen-oroshi": {
        name: "Echizen oroshi (Fukui)",
        place: "Fukui",
        era: "Époque Asakura dès 1473 (tenu pour tel) ; Honda Tomimasa dès 1601",
        cells: {
          flour: "Soba fin, selon le compte rendu du ministère",
          serving: "Froid, avec du daikon râpé ; lors des mariages, des cérémonies commémoratives, du réveillon du Nouvel An et du hōonkō",
          sauce: "De trois façons : bouillon et daikon séparés, daikon dans le bouillon, ou jus de daikon dans le bouillon",
          howToEat: "Associé au sauce katsudon quand on mange dehors ; atelier de fabrication de soba ¥2,200 taxe incluse (oct. 2026)",
        },
      },
      toshikoshi: {
        name: "Soba du réveillon du Nouvel An",
        place: "Dans tout le pays",
        era: "Coutume de l’époque d’Edo",
        cells: {
          flour: "N’importe laquelle",
          serving: "À la maison ou en livraison, le 31 décembre",
          sauce: "—",
          howToEat: "Mangé par plus de 60 % des foyers ; long pour une longue vie, facile à couper pour couper les ennuis de l’année",
        },
      },
    },
  },
  somen: {
    name: "Sōmen",
    axes: {
      noodle: "Nouille",
      made: "Comment elle est fabriquée",
      story: "Plus ancienne revendication",
      know: "À savoir",
    },
    lineages: {
      miwa: {
        name: "Miwa (Nara)",
        place: "Sakurai, Nara",
        era: "légende d’environ 1,300 (ou plus de 1,200) ans",
        cells: {
          noodle: "Étirée à la main ; classée par nombre de brins pour 10 g, jusqu’à plus de 120 pour la plus fine",
          made: "De décembre à mars, sur deux jours, avec des repos répétés",
          story: "Le fils d’un prêtre de sanctuaire aurait semé du blé pour soulager une famine, selon la légende",
          know: "Une indication géographique ; les nouilles vieillies « hine » sont très appréciées",
        },
      },
      banshu: {
        name: "Banshū (Ibo no Ito, Hyōgo)",
        place: "Région de Tatsuno, Hyōgo",
        era: "mention écrite en 1418 ; industrie vers 1804–18",
        cells: {
          noodle: "Étirée à la main, tordue comme une corde et étirée à plusieurs reprises",
          made: "D’octobre à avril",
          story: "Le journal d’un temple de 1418 mentionne le sōmen",
          know: "« Yaku » : les nouilles vieillies s’améliorent au fil de la saison des pluies",
        },
      },
      shodoshima: {
        name: "Shōdoshima",
        place: "Kagawa",
        era: "—",
        cells: {
          noodle: "—",
          made: "—",
          story: "—",
          know: "—",
        },
      },
    },
  },
  sushi: {
    name: "Sushi",
    axes: {
      form: "Forme",
      rice: "Riz et poisson",
      where: "Où on le mange",
      howToEat: "Comment on le mange",
    },
    lineages: {
      edomae: {
        name: "Edomae (nigiri de Tokyo)",
        place: "Edo (Tokyo)",
        era: "début des années 1800",
        cells: {
          form: "Nigiri pressé à la main, préparé devant vous",
          rice: "Riz au vinaigre rouge ; poisson « travaillé » — mariné, mijoté, assaisonné — et non simplement cru",
          where: "Un comptoir ; à l’origine un stand de rue",
          howToEat: "Un peu de sauce soja du côté du poisson, en une bouchée ; menu du déjeuner à moitié prix du soir",
        },
      },
      kaiten: {
        name: "Kaiten (tapis roulant)",
        place: "Higashi-Ōsaka",
        era: "1958",
        cells: {
          form: "Nigiri sur des assiettes, sur un tapis ou commandé à votre place par écran",
          rice: "Pressé à la machine ; le saumon est la garniture la plus commandée, depuis 15 ans",
          where: "Bords de route en banlieue et centres commerciaux ; plus de 4,000 adresses",
          howToEat: "On prend ou on commande, on paie à l’assiette",
        },
      },
      "osaka-hako": {
        name: "Sushi en boîte d’Osaka",
        place: "Osaka (Senba)",
        era: "époque Meiji ; battera 1891",
        cells: {
          form: "Riz et poisson pressés dans une boîte en bois puis découpés ; battera (maquereau)",
          rice: "Riz cuit avec un bouillon de kelp et sucré ; poisson mariné, donc sans sauce soja",
          where: "Une boutique ou une boîte à emporter ; le repas de l’entracte au théâtre",
          howToEat: "Sans sauce soja ; se conserve plusieurs heures",
        },
      },
      masu: {
        name: "Masu-zushi de Toyama",
        place: "Toyama",
        era: "époque Kyōhō ; bento de gare dès 1912",
        cells: {
          form: "Un gâteau rond pressé de truite et de riz dans des feuilles de bambou",
          rice: "Légèrement vinaigré ; saumon cerise",
          where: "Kiosques de gare et plus de 20 maisons spécialisées dans la ville de Toyama",
          howToEat: "Coupé comme un gâteau ; mangé froid, plusieurs heures plus tard",
        },
      },
      funa: {
        name: "Funa-zushi de Shiga",
        place: "Lac Biwa",
        era: "l’ancêtre de tous les sushis",
        cells: {
          form: "Carassin entier fermenté dans le riz pendant des mois, voire des années",
          rice: "Le riz sert de milieu de fermentation et était autrefois jeté",
          where: "Fêtes et foyers autour du lac ; ¥5,400 le poisson",
          howToEat: "Tranché finement ; fort en goût ; les arêtes sont assez tendres pour être mangées",
        },
      },
      kakinoha: {
        name: "Kakinoha-zushi de Nara",
        place: "Yoshino, Nara",
        era: "milieu de l’époque d’Edo",
        cells: {
          form: "Maquereau salé sur du riz, enveloppé dans une feuille de kaki",
          rice: "—",
          where: "Fêtes d’été ; bento de gare ; plus de 30 fabricants",
          howToEat: "Meilleur le lendemain",
        },
      },
      saba: {
        name: "Saba-zushi de Kyoto",
        place: "Kyoto",
        era: "époque d’Edo ; Izuu 1781",
        cells: {
          form: "Un filet entier de maquereau mariné pressé sur du riz, dans du kelp",
          rice: "—",
          where: "Les trois grandes fêtes ; à emporter",
          howToEat: "Pas besoin de sauce soja",
        },
      },
      kanazawa: {
        name: "Kanazawa et Hokuriku",
        place: "Kanazawa",
        era: "—",
        cells: {
          form: "Nigiri ; établissements « à tapis » qui prennent les commandes à la place",
          rice: "Crevette gas, crevette douce, nodoguro, crevette blanche",
          where: "La ville qui dépense le plus pour les sushis au Japon",
          howToEat: "On commande au comptoir, pas sur le tapis",
        },
      },
    },
  },
  sweets: {
    name: "Douceurs au-delà des wagashi",
    axes: {
      base: "Sur quoi elle repose",
      sold: "Où elle est vendue",
      story: "À qui appartient l’histoire",
      changes: "Ce qui change selon la saison ou le lieu",
    },
    lineages: {
      amamidokoro: {
        name: "Salons de douceurs",
        place: "Ginza, Tokyo (anmitsu) ; Nara et Yoshino (warabi, kuzu)",
        era: "1930 pour l’anmitsu (association touristique et journal)",
        cells: {
          base: "Haricots azuki ; fécule de racine de kuzu et de racine de fougère ; sucre",
          sold: "Salons de douceurs et maisons de thé avec places assises ; à Nara, le warabi-mochi surtout chez les confiseurs",
          story: "Ginza Wakamatsu est crédité de l’anmitsu ; fermé fin 2023",
          changes: "Le zenzai désigne une soupe de haricots à Kyoto–Osaka, une pâte sur du mochi à Tokyo ; les menus suivent les saisons",
        },
      },
      yogashi: {
        name: "Gâteaux de style occidental faits au Japon",
        place: "Yokohama et Tokyo",
        era: "1922 pour le shortcake ; pudding à la mode de l’ère de l’Occupation (récits des entreprises)",
        cells: {
          base: "Génoise, crème et fraises ; pudding avec fruits et glace",
          sold: "Pâtisseries, un hôtel de Yokohama, salons de fruits",
          story: "Fujiya, Hotel New Grand et Sembikiya, chacun selon son propre récit",
          changes: "Les fraises arrivent au marché de Tokyo dès novembre et culminent en mars ; jusqu’aux années 1960, c’était un fruit de mai–juin",
        },
      },
      crepe: {
        name: "Crêpes de Harajuku",
        place: "Shibuya, puis Harajuku, Tokyo",
        era: "1976 (récit de l’entreprise)",
        cells: {
          base: "Une crêpe roulée dans du papier ; crème fouettée ou glace",
          sold: "Stands de rue, mangée en marchant",
          story: "Marion Crepes, selon son propre récit",
          changes: "D’abord vendue avec des alcools occidentaux pour adultes ; crème et glace plus tard",
        },
      },
      yakiimo: {
        name: "Patate douce rôtie",
        place: "Edo, avec des patates des environs de Kawagoe",
        era: "fin de l’époque d’Edo",
        cells: {
          base: "Patate douce entière, par ex. beni haruka",
          sold: "Vendeurs de l’époque d’Edo appelés « treize ri » ; la façon dont elle est vendue aujourd’hui n’est pas traitée",
          story: "Ministère de l’Agriculture et ville de Kawagoe",
          changes: "La beni haruka devient plus sucrée après deux à trois mois de stockage",
        },
      },
      conbini: {
        name: "Douceurs de konbini",
        place: "Dans tout le pays",
        era: "—",
        cells: {
          base: "Gâteaux roulés, choux à la crème, puddings",
          sold: "Lawson, FamilyMart, Seven-Eleven",
          story: "—",
          changes: "Nouveautés chaque semaine ou par étapes ; certaines ne sont vendues que dans certaines préfectures, les prix d’Okinawa diffèrent",
        },
      },
    },
  },
  tea: {
    name: "Thé japonais",
    axes: {
      what: "Ce que l’on obtient",
      made: "Comment il est fabriqué",
      place: "Où",
      know: "À savoir",
    },
    lineages: {
      regions: {
        name: "Les régions du thé",
        place: "Uji, Nishio, Yame, Shizuoka",
        era: "récits locaux dès 1191 (Uji), 1271 (Nishio), 1423 (Yame)",
        cells: {
          what: "Matcha (Uji, Nishio), gyokuro (Yame), sencha et sencha à la vapeur profonde (Shizuoka)",
          made: "Culture à l’ombre pour le matcha et le gyokuro ; cuisson vapeur profonde à Shizuoka, issue de recherches commencées vers 1952",
          place: "Le thé d’Uji se définit par une finition à Kyoto, à partir de feuilles de quatre préfectures",
          know: "Kagoshima produit désormais le plus de thé brut et le plus de tencha",
        },
      },
      "kakigori-kissaten": {
        name: "Le kakigori et le kissaten",
        place: "Nagatoro, Saitama ; Ueno, Tokyo",
        era: "premier café 1888 ; Asami Reizo donne 1890",
        cells: {
          what: "Glace pilée ; café, thé et repas simples dans un café",
          made: "Glace naturelle découpée en hiver, remplacée par de la glace pure quand le stock s’épuise",
          place: "Cafés les plus nombreux par habitant à Kochi, Gifu et Wakayama",
          know: "Les cafés ont atteint un pic de 154,630 en 1981 ; 58,669 en 2021",
        },
      },
    },
  },
  teishoku: {
    name: "Menus teishoku et petit-déjeuner",
    axes: {
      plate: "Ce qui est servi",
      where: "Où",
      money: "Comment c’est tarifé",
      know: "À savoir",
    },
    lineages: {
      "washoku-breakfast": {
        name: "Petit-déjeuner japonais",
        place: "Dans tout le pays",
        era: "—",
        cells: {
          plate: "Riz et soupe miso avec poisson, pickles, tofu, légumes, nori, œuf",
          where: "Ryokan, buffets d’hôtel et restaurants de petit-déjeuner à menu",
          money: "Dans un ryokan, compris avec la chambre ; au buffet d’un hôtel de Tokyo, environ ¥6,400",
          know: "Beaucoup de petits plats, pas une seule assiette ; au buffet, prenez ce que vous finirez",
        },
      },
      morning: {
        name: "« Morning » de café et menus de petit-déjeuner des chaînes",
        place: "Ichinomiya, Aichi (selon ce que l’on y raconte)",
        era: "années 30 de l’ère Shōwa (à partir de 1955)",
        cells: {
          plate: "Café : toast et œuf dur avec votre café. Chaîne : riz, soupe, et œuf, poisson, nattō ou bœuf",
          where: "Cafés de Nagoya et d’Ichinomiya ; chaînes de gyūdon et de teishoku partout",
          money: "Café : le prix de la boisson. Chaîne : environ ¥430–640",
          know: "Ichinomiya compte environ 500 cafés qui le servent, et une marque déposée",
        },
      },
    },
  },
  tonkatsu: {
    name: "Tonkatsu",
    axes: {
      what: "De quoi il s’agit",
      sauce: "Sauce",
      served: "Comment il est servi",
      rule: "Ce qu’il faut savoir",
    },
    lineages: {
      "miso-katsu": {
        name: "Miso-katsu de Nagoya",
        place: "Nagoya",
        era: "tout début de l’après-guerre (récit d’un stand) ; Yabaton 1947",
        cells: {
          what: "Escalope de porc panée ou kushikatsu avec une sauce à base de miso de soja",
          sauce: "Base de miso de soja assemblée différemment par chaque maison ; épaisse ou fluide et sucrée",
          served: "Versée dessus, en trempette dans un pot de sauce, ou à côté",
          rule: "Absent de la liste des plats locaux d’Aichi du ministère de l’Agriculture ; le miso qui la sous-tend y figure",
        },
      },
      kushikatsu: {
        name: "Kushikatsu d’Osaka",
        place: "Shinsekai, Osaka",
        era: "une maison se date de 1929",
        cells: {
          what: "Viande, produits de la mer et légumes en brochettes, enrobés de pâte, panés et frits",
          sauce: "Un bac de sauce fluide commun sur le comptoir",
          served: "À la brochette, avec du chou cru à volonté",
          rule: "Ne trempez pas deux fois dans la sauce commune ; servez-vous plutôt avec le chou",
        },
      },
    },
  },
  udon: {
    name: "Udon",
    axes: {
      noodle: "Nouille",
      broth: "Bouillon",
      topping: "Garniture",
      howToEat: "Comment on le mange",
    },
    lineages: {
      sanuki: {
        name: "Sanuki (Kagawa)",
        place: "Kagawa",
        era: "Époque d’Edo ; légende dès le IXe s.",
        cells: {
          noodle: "Épaisse, coupée carrée, pétrie aux pieds, ferme et élastique ; 40 %+ d’eau, 3 %+ de sel, repos de 2 heures (norme « Honba Sanuki »)",
          broth: "Iriko (anchois séchés) de la mer intérieure, sauce soja claire de Shōdoshima",
          topping: "Oignon nouveau, gingembre, tempura que l’on choisit soi-même",
          howToEat: "Libre-service : réchauffer soi-même ses nouilles, choisir nouilles et bouillon chauds/froids (atsu-atsu, hiya-atsu…), kake, bukkake, kama-age, kama-tama",
        },
      },
      hakata: {
        name: "Hakata (Fukuoka)",
        place: "Fukuoka",
        era: "1241 (légende du temple Jōtenji)",
        cells: {
          noodle: "Molle, précuite, peu de mordant",
          broth: "« Sume » : kelp et bonite avec du poisson volant ou de l’anchois, sauce soja claire, légèrement sucré",
          topping: "Gobō-ten (tempura de bardane), maru-ten (disque de pâte de poisson)",
          howToEat: "Rapide ; le déjeuner d’un marchand. Certaines chaînes permettent de choisir la mollesse",
        },
      },
      osaka: {
        name: "Osaka",
        place: "Osaka (Senba)",
        era: "kitsune udon 1893",
        cells: {
          noodle: "Molle, élastique, pas trop épaisse — faite pour porter le bouillon",
          broth: "Kelp ma-kombu et poisson séché, sauce soja claire ; pâle et clair",
          topping: "Tofu frit mijoté sucré (kitsune) ; ici, « tanuki » désigne ce tofu sur du soba",
          howToEat: "On boit le bouillon ; udon-suki en marmite en hiver",
        },
      },
      ise: {
        name: "Ise (Mie)",
        place: "Ise",
        era: "Époque d’Edo ; nommé en 1972",
        cells: {
          noodle: "Épaisse et molle, bouillie longtemps",
          broth: "Pas de bouillon : une petite flaque de sauce tamari foncée avec de la bonite",
          topping: "Seulement de l’oignon nouveau haché",
          howToEat: "On mélange et on mange ; le repas rapide du pèlerin au sanctuaire",
        },
      },
      inaniwa: {
        name: "Inaniwa (Akita)",
        place: "Inaniwa, Yuzawa, Akita",
        era: "Début de l’époque d’Edo (le fondateur et les dates diffèrent selon la source)",
        cells: {
          noodle: "Séchée, fine et plate ; tordue à la main sur deux baguettes, aplatie et étirée à la main pendant 3 à 4 jours ; sans huile. Méthode rendue publique en 1972",
          broth: "Trempette forte à la sauce soja avec bouillon de bonite, ou sésame-miso ; aussi en bouillon chaud",
          topping: "—",
          howToEat: "Rincée à l’eau froide, puis froide avec une trempette ou chaude ; sur place, « mago-udon » courtes pour les bébés et les personnes âgées",
        },
      },
      mizusawa: {
        name: "Mizusawa (Gunma)",
        place: "Ikaho, Gunma",
        era: "—",
        cells: {
          noodle: "—",
          broth: "—",
          topping: "—",
          howToEat: "—",
        },
      },
      goto: {
        name: "Gotō (Nagasaki)",
        place: "Îles Kami-Gotō, Nagasaki",
        era: "Elle serait arrivée avec les navires d’ambassade envoyés en Chine des Tang (non prouvé)",
        cells: {
          noodle: "Séchée, étirée à la main, ronde, environ 1.7 mm ; huile de camélia passée au pinceau pendant l’étirage",
          broth: "Trempette au bouillon d’ago (poisson volant), souvent avec œuf et sauce soja",
          topping: "Oignon nouveau, copeaux de bonite, œuf cru ; yuzu-koshō, gingembre",
          howToEat: "Jigoku-daki : sortie directement d’une marmite de fonte bouillonnante pour être plongée dans la trempette ; zaru frais en été",
        },
      },
      "miso-nikomi": {
        name: "Miso-nikomi (Nagoya)",
        place: "Aichi (Ichinomiya, puis Nagoya)",
        era: "Époque Meiji (ministère de l’Agriculture) ; issu du hōtō (Agence des affaires culturelles)",
        cells: {
          noodle: "Farine et eau seulement, sans sel ; reste ferme à la cuisson mijotée",
          broth: "Miso Hatchō (de soja)",
          topping: "—",
          howToEat: "Mijoté et servi dans un pot en terre cuite",
        },
      },
      yoshida: {
        name: "Yoshida (Yamanashi)",
        place: "Fujiyoshida",
        era: "—",
        cells: {
          noodle: "—",
          broth: "—",
          topping: "—",
          howToEat: "—",
        },
      },
      kishimen: {
        name: "Kishimen (Aichi)",
        place: "Aichi",
        era: "—",
        cells: {
          noodle: "Plate, environ 1 mm d’épaisseur et 7–8 mm de large",
          broth: "Traditionnellement bouillon de poisson muroaji et tamari ; aujourd’hui dashi et sauce soja",
          topping: "Pâte de poisson rouge de Nagoya ; versions au curry ou au mochi",
          howToEat: "Toute l’année ; « koro » froid en été",
        },
      },
      hoto: {
        name: "Hōtō (Yamanashi)",
        place: "Yamanashi",
        era: "populaire depuis l’époque d’Edo",
        cells: {
          noodle: "Large, plate, sans repos, mijotée crue",
          broth: "Miso avec bouillon de niboshi ; la farine l’épaissit",
          topping: "Citrouille et légumes de saison, viande",
          howToEat: "Grande marmite à la maison, une marmite de fonte par personne au restaurant",
        },
      },
      dagojiru: {
        name: "Dagojiru (Kumamoto) et dangojiru (Ōita)",
        place: "Kumamoto / Ōita",
        era: "—",
        cells: {
          noodle: "Boulettes de farine déchirées ou étirées ; « nobe-dago » en forme de nouilles à Aso",
          broth: "Miso ou sauce soja (Kumamoto) ; miso d’orge (Ōita)",
          topping: "Bardane, radis, carotte ; souvent de la patate douce à Kumamoto",
          howToEat: "Cuisine familiale de tous les jours ; surtout en automne et en hiver",
        },
      },
    },
  },
  unagi: {
    name: "Unagi (anguille)",
    axes: {
      cut: "Comment elle est ouverte",
      cooked: "Comment elle est cuite",
      result: "Ce que l’on remarque",
      howToEat: "Comment on la mange",
    },
    lineages: {
      kanto: {
        name: "Style du Kantō",
        place: "Edo (Tokyo)",
        era: "la cuisson vapeur remonterait à l’ère Bunsei (1818–30)",
        cells: {
          cut: "Par le dos",
          cooked: "Grillée nature, cuite à la vapeur, puis regrillée avec du tare sur du charbon de bois",
          result: "Tendre ; la vapeur élimine l’excès de graisse",
          howToEat: "Unajū dans une boîte laquée, avec une soupe de foie ; poivre sanshō après la première bouchée",
        },
      },
      kansai: {
        name: "Style du Kansai (jiyaki)",
        place: "Kyoto / Osaka",
        era: "kabayaki depuis l’ère Genroku à Kyoto",
        cells: {
          cut: "Par le ventre",
          cooked: "Grillée sur du charbon de bois avec du tare, sans cuisson vapeur",
          result: "Peau croustillante et parfumée",
          howToEat: "Appelée mamushi au Kansai ; à Nagoya, le hitsumabushi se mange de trois façons",
        },
      },
      yanagawa: {
        name: "Seiro-mushi de Yanagawa",
        place: "Yanagawa, Fukuoka",
        era: "—",
        cells: {
          cut: "—",
          cooked: "Cuite à la vapeur dans un panier sur du riz",
          result: "—",
          howToEat: "—",
        },
      },
    },
  },
  wagashi: {
    name: "Wagashi (douceurs japonaises)",
    axes: {
      what: "De quoi il s’agit",
      keeps: "Combien de temps il se conserve",
      where: "Où l’acheter",
      know: "À savoir",
    },
    lineages: {
      yokan: {
        name: "Yōkan",
        place: "De Chine par les moines zen ; Ogi, Saga comme centre plus tardif",
        era: "neri-yōkan daté diversement du début de l’époque d’Edo à 1800 environ",
        cells: {
          what: "Une barre de pâte de haricots sucrée prise à l’agar (neri) ou cuite à la vapeur avec de la farine (mushi)",
          keeps: "Toraya : un an à compter de la fabrication, non ouvert, à température ambiante",
          where: "Confiseurs, aéroports, grands magasins",
          know: "Le nom signifie « soupe de mouton » ; c’était à l’origine une soupe sans viande",
        },
      },
      imagawayaki: {
        name: "Imagawayaki / ōbanyaki / kaitenyaki",
        place: "Dans tout le pays",
        era: "—",
        cells: {
          what: "Un gâteau épais, rond et cuit, fourré",
          keeps: "—",
          where: "Boutiques spécialisées comme Gozasōrō à Himeji",
          know: "Son nom change selon la région : imagawayaki au Kantō, ōbanyaki à Chūgoku–Shikoku, kaitenyaki à Kyushu",
        },
      },
    },
  },
  wagyu: {
    name: "Wagyū et bœuf",
    axes: {
      what: "De quoi il s’agit",
      rule: "La règle",
      price: "Repère de prix",
      howToEat: "Comment on le mange",
    },
    lineages: {
      kobe: {
        name: "Bœuf de Kobe",
        place: "Hyōgo",
        era: "nom issu du port de 1868 ; défini en 1983",
        cells: {
          what: "Bovins Tajima, nés et élevés à Hyōgo, qui passent un grade",
          rule: "A/B 4+ avec persillage BMS 6+, 28–60 mois ; environ 7,000 têtes par an ; vendu uniquement par des établissements enregistrés portant une statue de bronze",
          price: "Steak du déjeuner de ¥8,020 (tende de tranche) à ¥21,780 (faux-filet A5) dans une maison de Kobe (taxe incl., 2026-10-10)",
          howToEat: "Steak sur teppan, ou sukiyaki",
        },
      },
      matsusaka: {
        name: "Bœuf de Matsusaka",
        place: "Matsusaka, Mie",
        era: "conseil 2004",
        cells: {
          what: "Génisses vierges de race Kuroge engraissées le plus longtemps dans la région de Matsusaka",
          rule: "Introduites avant 12 mois, suivies par numéro d’identification ; « Tokusan » = veaux de Hyōgo nourris plus de 900 jours (IG 2017)",
          price: "Coupe à sukiyaki de 300 g à ¥7,050 dans la boutique de la plus ancienne maison (taxe incl., 2026-10-10)",
          howToEat: "Sukiyaki chez Wadakin, la maison qui a fait le nom",
        },
      },
      omi: {
        name: "Bœuf d’Ōmi",
        place: "Shiga",
        era: "bœuf mariné au miso offert au shogun, 1687–1771",
        cells: {
          what: "Bovins Kuroge élevés le plus longtemps à Shiga ; la plus ancienne tradition de consommation de bœuf du Japon",
          rule: "Ōmi certifié = A4/B4 et plus (IG 2017) ; expédié comme « bœuf de Kobe » par le port en 1879",
          price: "Coupe à sukiyaki de 500 g à ¥4,320–10,800 dans une boutique certifiée (taxe incl., 2026-10-10)",
          howToEat: "Sukiyaki, shabu-shabu, et la marinade au miso de Hikone",
        },
      },
      tajima: {
        name: "Bovins Tajima",
        place: "Nord de Hyōgo",
        era: "IG 2015",
        cells: {
          what: "La lignée fermée derrière le bœuf de Kobe, et le cheptel reproducteur de la plupart des Kuroge japonais",
          rule: "Seulement des taureaux de Hyōgo, élevés à Hyōgo, A/B 2+",
          price: "—",
          howToEat: "—",
        },
      },
      yonezawa: {
        name: "Bœuf de Yonezawa",
        place: "Yamagata",
        era: "un professeur d’anglais en a emmené un à Yokohama, 1875",
        cells: {
          what: "Génisses Kuroge du district d’Okitama, 33 mois et plus",
          rule: "Grade 3+ (IG 2017) ; environ 20 % au-dessus de la moyenne du marché de Tokyo",
          price: "—",
          howToEat: "Sukiyaki",
        },
      },
      sukiyaki: {
        name: "Sukiyaki",
        place: "Yokohama et Tokyo",
        era: "marmite de bœuf 1867–68",
        cells: {
          what: "Bœuf en fines tranches cuit à table avec du sucre et de la sauce soja, trempé dans de l’œuf cru",
          rule: "Le Kantō fait mijoter dans un bouillon warishita ; le Kansai saisit d’abord la viande, puis assaisonne — mais la plus ancienne maison de Kyoto utilise un bouillon",
          price: "—",
          howToEat: "Au Nouvel An, avant tout",
        },
      },
      yakiniku: {
        name: "Yakiniku",
        place: "Osaka et Tokyo d’après-guerre",
        era: "marchés noirs, années 1940",
        cells: {
          what: "Bœuf à griller soi-même, une création coréano-japonaise ; langue au citron depuis les années 1970",
          rule: "« Rōsu » et « karubi » sont des noms de menu, non des morceaux, de l’aveu même de la profession ; numéros d’identification affichés par la loi",
          price: "—",
          howToEat: "Gril sans fumée depuis 1980 ; comptoirs pour une personne depuis 2018",
        },
      },
      shabu: {
        name: "Shabu-shabu",
        place: "Osaka",
        era: "—",
        cells: {
          what: "—",
          rule: "—",
          price: "—",
          howToEat: "—",
        },
      },
      steak: {
        name: "Steak et teppanyaki",
        place: "Kobe (teppanyaki, selon le récit du restaurant lui-même) ; chaînes de Maebashi, Nagoya, Ginza",
        era: "teppanyaki revendiqué dès 1945 ; chaînes 1976, 1978, 2013",
        cells: {
          what: "Teppanyaki : un cuisinier grille le steak sur une plaque de fer devant le client ; un steakhouse est un type de restaurant",
          rule: "Les chaînes fixent le prix au poids ; les noms de morceaux diffèrent entre 11 morceaux de détail et 13 noms de gros",
          price: "Ikinari Wild Steak 150 g ¥1,710 ; Steak no Don 130 g ¥1,738 ; Bronco Billy faux-filet 150 g ¥2,893 (taxe incl., 2026-10-11)",
          howToEat: "Dans une chaîne, on choisit le poids",
        },
      },
    },
  },
  western: {
    name: "Cuisines occidentales devenues japonaises",
    axes: {
      arrived: "Comment elle est arrivée",
      changed: "Ce que le Japon a changé",
      where: "Où elle est préparée ou servie",
      marker: "Ce que montrent les archives",
    },
    lineages: {
      italian: {
        name: "Napolitan, pâtes et pizza",
        place: "Nagasaki (pâtes) ; Yokohama (Napolitan, selon le récit d’un hôtel) ; Ebisu, Tokyo (pizza livrée)",
        era: "pâtes dès 1883 environ ; Napolitan après 1952 ; pizza livrée 1985 (revendication d’une entreprise)",
        cells: {
          arrived: "La fabrique de macaronis d’un missionnaire ; les spaghettis au ketchup des soldats américains pendant l’Occupation ; une chaîne américaine de livraison",
          changed: "Les premières pâtes nationales mélangeaient plusieurs farines pour le goût japonais ; la pizza livrée a ajouté thon, poulet teriyaki et garnitures mayonnaise-pomme de terre",
          where: "Le café de l’Hotel New Grand à Yokohama pour le Napolitan de l’hôtel ; chaînes de livraison pour la pizza",
          marker: "1955 est appelée la première année des pâtes ; pâtes nationales 100 % blé dur dans les foyers à partir de 1986 environ",
        },
      },
      burger: {
        name: "Hamburgers",
        place: "Sasebo, Nagasaki (récit du tourisme de la ville) ; Ginza, Tokyo (McDonald’s Japan)",
        era: "vers 1950 (récit de Sasebo) ; 1971 (McDonald’s Japan) ; 1972 (MOS Burger)",
        cells: {
          arrived: "Recettes de la base navale américaine de Sasebo ; la société japonaise d’une chaîne américaine",
          changed: "Burgers teriyaki (MOS 1973, McDonald’s Japan 1989), burgers au riz, burgers katsu, un burger à l’œuf de la contemplation de la lune",
          where: "Boutiques de Sasebo ; chaînes nationales partout",
          marker: "Le site touristique de Sasebo fixe des conditions pour le nom, dont un siège social à Sasebo",
        },
      },
      dairy: {
        name: "Lait et produits laitiers",
        place: "Akasaka, Tokyo (première laiterie de la ville) ; Hokkaido (la plupart du lait cru aujourd’hui)",
        era: "1870 (première laiterie de Tokyo)",
        cells: {
          arrived: "Une campagne du gouvernement de Meiji en faveur de la viande et du lait",
          changed: "Le lait dans les repas scolaires ; des règles de dénomination strictes pour ce qui peut s’appeler lait ; un carton d’un litre construit sur une base américaine",
          where: "Hokkaido produit la plupart du lait cru, surtout pour le beurre, le fromage et d’autres produits ; les autres régions surtout pour la boisson",
          marker: "Hokkaido 58 % du lait cru national ; part nationale du fromage consommé 15.5 % (exercice 2025)",
        },
      },
      yoshoku: {
        name: "Yōshoku (cuisine de style occidental)",
        place: "Ginza, Tokyo ; Osaka ; cuisines de la marine",
        era: "les sources divergent : levée de l’interdit de la viande 1872 ; livre de cuisine de la marine 1908",
        cells: {
          arrived: "Restaurants occidentaux des ports ouverts après la levée de l’interdit de la viande ; les repas de style occidental de la marine",
          changed: "Plats intégrés un à un à une alimentation centrée sur le riz : côtelette de porc, croquette, omurice, hayashi rice",
          where: "Restaurants de Ginza (Rengatei, Shiseido Parlour) ; Hokkyokusei à Osaka ; ragoût de style marine dans les villes portuaires",
          marker: "Aucune définition officielle trouvée ; deux boutiques citées comme origine de l’omurice",
        },
      },
      machichuka: {
        name: "Machi-chūka (chinois de quartier)",
        place: "Petits restaurants chinois tenus par leur propriétaire",
        era: "Cuisine chinoise populaire après le séisme de 1923 ; le nom s’est répandu dans les années 2010",
        cells: {
          arrived: "Plat par plat, choisis comme accompagnements du riz ; populaire après le séisme de 1923",
          changed: "Des plats introuvables en Chine : tenshinhan, chūkadon ; gyoza poêlés plutôt que bouillis",
          where: "Petites boutiques où le propriétaire cuisine ; des chaînes comme Hidakaya et Gyoza no Ohsho vendent les mêmes plats",
          marker: "L’origine du tenshinhan n’est pas établie : versions de Tokyo et d’Osaka",
        },
      },
      pan: {
        name: "Pain japonais",
        place: "Ginza, Tokyo (l’anpan de Kimuraya)",
        era: "1874 (anpan) ; 1927 (pain au curry, selon l’opinion admise)",
        cells: {
          arrived: "—",
          changed: "Pâte de haricots dans un pain à la levure de saké (1874), pain à la confiture, pain au curry, pain au yakisoba",
          where: "Fabricants en gros, konbini, boulangeries",
          marker: "Les dépenses des ménages en pain ont dépassé celles en riz en 2011 (ménages de deux personnes ou plus)",
        },
      },
    },
  },
  yakisoba: {
    name: "Yakisoba",
    axes: {
      noodle: "Nouille",
      topping: "Ce qui la garnit",
      sauce: "Sauce",
      marker: "Ce pour quoi la ville est connue",
    },
    lineages: {
      fujinomiya: {
        name: "Fujinomiya",
        place: "Fujinomiya, Shizuoka",
        era: "aucune année donnée ; association depuis 2000",
        cells: {
          noodle: "Cuite à la vapeur, refroidie vite et enrobée d’huile ; peu d’eau, ferme ; de quatre fabricants de la ville",
          topping: "Nikukasu (résidus de gras de dos de porc après le pressage du saindoux) et poudre de sardine",
          sauce: "—",
          marker: "Or au B-1 Grand Prix en 2006 et 2007 ; un plat « centenaire » (exercice 2021)",
        },
      },
      yokote: {
        name: "Yokote",
        place: "Yokote, Akita",
        era: "juste après la Seconde Guerre mondiale (dit-on)",
        cells: {
          noodle: "Épaisse, droite, bouillie",
          topping: "Chou et porc haché ; un œuf au plat mi-cuit dessus, fukujinzuke à côté",
          sauce: "Base Worcestershire avec les ajouts de chaque maison ; douce, pas piquante",
          marker: "Une marque collective régionale ; or au B-1 Grand Prix en 2009",
        },
      },
      ota: {
        name: "Ota",
        place: "Ota, Gunma",
        era: "après la Seconde Guerre mondiale (dit-on) ; association depuis 2002",
        cells: {
          noodle: "—",
          topping: "—",
          sauce: "Propre à chaque maison ; aucune recette commune décrite",
          marker: "Aurait été apporté par des travailleurs saisonniers du Tōhoku après la guerre ; 44 maisons membres de l’association",
        },
      },
      "tokyo-sauce": {
        name: "Yakisoba à la sauce de Tokyo",
        place: "Tokyo (fabricants de nouilles d’Asakusa)",
        era: "—",
        cells: {
          noodle: "Nouilles de blé de style chinois",
          topping: "—",
          sauce: "Worcestershire",
          marker: "Pour un fabricant de sauce, imiterait les nouilles chinoises sautées ; un classique des stands de fête",
        },
      },
      pan: {
        name: "Pain au yakisoba",
        place: "Minami-Senju, Tokyo (une théorie)",
        era: "—",
        cells: {
          noodle: "—",
          topping: "Yakisoba dans un petit pain (koppe-pan)",
          sauce: "—",
          marker: "La théorie principale nomme une boutique, Nozawaya, fermée en 2010",
        },
      },
    },
  },
  yatai: {
    name: "Yatai (stands de rue)",
    axes: {
      what: "De quoi il s’agit",
      rules: "Les règles",
      food: "Ce qu’il vend",
      know: "À savoir",
    },
    lineages: {
      hakata: {
        name: "Yatai de Fukuoka",
        place: "Ville de Fukuoka",
        era: "vers 1946 ; ordonnance 2013",
        cells: {
          what: "Un chariot installé chaque soir au même endroit, dans la rue ou dans un parc",
          rules: "Autorisations d’usage de la voie publique, d’occupation de la voie et de restauration ; une ordonnance municipale depuis 2013 ; nouveaux emplacements par appel public à la concurrence depuis 2016",
          food: "Ramen à l’os de porc, yakitori, oden ; pas d’aliments crus",
          know: "Une centaine de stands ; peu de places ; surtout en espèces ; au moins une boisson et un plat chacun",
        },
      },
      matsuri: {
        name: "Stands de fête (roten)",
        place: "Dans tout le pays",
        era: "stands à Edo dès les années 1770",
        cells: {
          what: "Stands montés pour chaque fête ou foire",
          rules: "Autorisation de restauration, ou déclaration temporaire par un organisateur local ; autorisation d’usage de la voie publique dans les rues",
          food: "Aliments simples chauffés juste avant le service, comme takoyaki, karaage, oden (règles d’Osaka)",
          know: "Tenus par des marchands itinérants appelés tekiya ou yashi",
        },
      },
      "kitchen-car": {
        name: "Camions-cuisines",
        place: "Dans tout le pays",
        era: "—",
        cells: {
          what: "Véhicules où l’on cuisine à bord",
          rules: "Autorisation de restauration (véhicule) ; à Fukuoka, valable six ans, dans toute la ville",
          food: "—",
          know: "—",
        },
      },
    },
  },
};
