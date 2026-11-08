/** lineages.ts の fr 前半（キー出現順 1〜20：bkyu … rice）。統合は別便。 */
export const part = {
  bkyu: {
    name: 'Cuisine locale « B-kyū » et fritures de quartier',
    axes: {
      what: 'De quoi s’agit-il',
      roots: 'D’où ça vient',
      fame: 'Comment c’est devenu célèbre',
      know: 'À savoir',
    },
    lineages: {
      korokke: {
        name: 'Korokke et fritures de quartier',
        place: 'De la croquette française, via les magazines de l’ère Meiji',
        era: 'Recette imprimée en 1895 ; korokke de pommes de terre après 1907 environ ; chanson à succès vers 1918',
        cells: {
          what: 'Une croquette panée et frite ; les premières recettes utilisaient des crevettes ou de la viande, la version bon marché des pommes de terre',
          roots: 'Les bouchers faisaient un korokke à base de pommes de terre avec des chutes et de la graisse ; la pomme de terre danshaku s’est répandue vers 1907',
          fame: 'La Chanson du korokke, vers 1918, a fait connaître le nom ; troisième plat préféré dans une enquête de l’armée en 1922',
          know: 'Le korokke de Mishima (2008) n’est défini que par l’emploi de pommes de terre de Mishima ; la garniture et la forme sont au choix de chaque boutique',
        },
      },
      'senbei-jiru': {
        name: 'Senbei-jiru de Hachinohe',
        place: 'Hachinohe, Aomori',
        era: 'Plus de 200 ans dans la région (Agence des affaires culturelles) ; le nom date de l’ère Heisei',
        cells: {
          what: 'Un hotpot de bouillon de poulet à la sauce soja, avec des légumes et des nouilles de konjac, dans lequel on casse des senbei de Nanbu',
          roots: 'Le senbei de Nanbu, une galette de farine, de sel et d’eau, conservée comme aliment là où les étés froids abîmaient la récolte de riz ; un senbei pour soupe mis au point après la guerre',
          fame: 'Le nom s’est imposé sous Heisei, quand les associations touristiques de Hachinohe l’ont promu ; or au B-1 en 2012',
          know: 'Environ 200 restaurants de Hachinohe le servent, selon le décompte du ministère de l’Agriculture',
        },
      },
      torimotsu: {
        name: 'Torimotsu-ni de Kofu',
        place: 'Kofu, Yamanashi',
        era: 'Vers 1950 (dit-on)',
        cells: {
          what: 'Foie, gésier, cœur, kinkan et himo de poulet, glacés rapidement à feu vif dans de la sauce soja et du sucre',
          roots: 'Aurait été créé vers 1950 chez Okuto, un restaurant de soba fondé en 1913',
          fame: 'Or au B-1 en 2010',
          know: 'Promu par les agents de la ville de Kofu à partir de 2008 ; plat centenaire (exercice 2024)',
        },
      },
      'toruko-rice': {
        name: 'Toruko rice de Nagasaki',
        place: 'Nagasaki',
        era: '—',
        cells: {
          what: 'Un pilaf (ou curry sec), une escalope panée et des spaghettis napolitan dans la même assiette',
          roots: 'Un restaurant aurait imaginé l’original',
          fame: 'Décrit comme le plat pour enfants des adultes ; la ville de Nagasaki le présente comme une spécialité locale',
          know: 'Les boutiques le déclinent avec du korokke, de la carbonara et plus encore ; l’origine du nom n’est pas confirmée',
        },
      },
    },
  },
  champon: {
    name: 'Champon',
    axes: {
      cooked: 'Cuisson des nouilles',
      base: 'Soupe ou sauce',
      topping: 'Ce qu’il y a dedans',
      atTable: 'À table',
    },
    lineages: {
      nagasaki: {
        name: 'Champon de Nagasaki',
        place: 'Nagasaki (Shikairou)',
        era: '—',
        cells: {
          cooked: 'Les garnitures sont sautées, puis les nouilles mijotées dans le bouillon, dans un seul wok',
          base: 'Riche, surtout à base d’os de porc',
          topping: 'Porc, hanpen, chou, oignon nouveau, germes de soja, calmar, crevettes ; palourdes l’été, huîtres l’hiver',
          atTable: 'Au Kyushu, on verse parfois de la sauce par-dessus',
        },
      },
      obama: {
        name: 'Champon d’Obama',
        place: 'Obama, préfecture de Nagasaki',
        era: '—',
        cells: {
          cooked: '—',
          base: 'Léger, surtout à base d’os de poulet',
          topping: '—',
          atTable: '—',
        },
      },
      'sara-udon': {
        name: 'Sara udon',
        place: 'Nagasaki (Shikairou)',
        era: '1899 (dit-on)',
        cells: {
          cooked: 'Épaisses : sautées jusqu’à ce qu’il ne reste plus de bouillon. Fines : frites',
          base: 'Épaisses : un peu de bouillon absorbé. Fines : une sauce liée versée par-dessus',
          topping: 'Légumes, porc et fruits de mer',
          atTable: 'Sauce Worcestershire de Nagasaki ou vinaigre',
        },
      },
    },
  },
  chicken: {
    name: 'Plats de poulet',
    axes: {
      cooked: 'Cuisson',
      chicken: 'Le poulet',
      eaten: 'Façon de le manger',
      marker: 'Ce qui fait la renommée du lieu',
    },
    lineages: {
      karaage: {
        name: 'Karaage (Nakatsu et Usa)',
        place: 'Usa et Nakatsu, Ōita',
        era: 'boutiques spécialisées à partir des années 30 de Shōwa (1955–64)',
        cells: {
          cooked: 'Mariné (base de soja ou de sel, ail, gingembre), fariné ou passé dans de la fécule, frit à la commande',
          chicken: 'Cuisse, blanc ou un mélange ; aussi cou, gésier, cartilage, ailes, peau',
          eaten: 'Tel quel, chaud ou froid ; la marinade diffère d’une boutique à l’autre',
          marker: 'Usa est désignée par l’Association japonaise du karaage comme berceau de la boutique spécialisée ; Nakatsu compte 60 boutiques ou plus',
        },
      },
      mizutaki: {
        name: 'Mizutaki de Hakata',
        place: 'Ville de Fukuoka',
        era: '1905 (Hayashida Heizaburō, Suigetsu)',
        cells: {
          cooked: 'Jeune poulet avec les os, mijoté dans un bouillon de tête et d’os, dans un pot en terre',
          chicken: 'Morceaux avec os, foie, cœur, gésier ; la carcasse sert au bouillon',
          eaten: 'D’abord le bouillon, puis le poulet, puis les légumes ; zōsui ou nouilles pour finir',
          marker: 'Bouillon trouble ou clair selon la boutique ; mangé toute l’année ; servi au Hakata Gion Yamakasa',
        },
      },
      toriten: {
        name: 'Toriten',
        place: 'Beppu, Ōita',
        era: 'début de Shōwa (ministère de l’Agriculture) ou Taishō (association touristique)',
        cells: {
          cooked: 'Frit dans une pâte à tempura',
          chicken: 'Cuisse désossée, en morceaux d’une bouchée',
          eaten: 'Soja vinaigré avec de la moutarde, ou ponzu ou kabosu',
          marker: 'Rattaché par le ministère de l’Agriculture à Tōyōken, à Beppu ; mangé dans tout Ōita',
        },
      },
      senzanki: {
        name: 'Senzanki',
        place: 'Imabari',
        era: '—',
        cells: {
          cooked: 'Frit ; compté par l’Association japonaise du karaage comme une sorte de karaage',
          chicken: '—',
          eaten: '—',
          marker: 'Deux récits d’origine, aucune trace écrite',
        },
      },
    },
  },
  conbini: {
    name: 'Cuisine des konbini',
    axes: {
      what: 'De quoi s’agit-il',
      engineering: 'La conception',
      price: 'Repère de prix',
      regional: 'Différences régionales',
    },
    lineages: {
      onigiri: {
        name: 'Onigiri (boules de riz)',
        place: 'Dans tout le pays',
        era: 'Seven-Eleven à partir de 1978',
        cells: {
          what: 'Du riz fourré, enveloppé d’une feuille de nori qui reste croustillante jusqu’à l’ouverture',
          engineering: 'Film étanche, protégé de l’humidité ; riz conservé à environ 20°C, jamais réfrigéré',
          price: 'Environ ¥146–378, taxe de 8% comprise, chez Seven-Eleven',
          regional: 'Certaines gammes ne sont vendues que dans certaines régions, comme le porc aux œufs à Okinawa',
        },
      },
      oden: {
        name: 'Oden',
        place: 'Dans tout le pays',
        era: '—',
        cells: {
          what: 'Boulettes de poisson, radis, œuf et autres, mijotés dans un bouillon près de la caisse, surtout pendant les mois froids',
          engineering: 'FamilyMart prépare son bouillon en quatre variantes selon la région',
          price: 'Environ ¥130–200 la pièce, taxe comprise',
          regional: 'Hanpen à l’est, gobō-maki à l’ouest, chikuwabu dans le Kantō',
        },
      },
    },
  },
  dashi: {
    name: 'Dashi (bouillon)',
    axes: {
      base: 'Ingrédient principal',
      with: 'Souvent associé à',
      soy: 'Sauce soja dans le bouillon',
      found: 'Où le goûter',
    },
    lineages: {
      'east-west': {
        name: 'Kombu (Kansai) et katsuobushi (Kantō)',
        place: 'Osaka–Kyoto / Edo',
        era: 'goûts régionaux que l’on pense fixés à l’époque d’Edo',
        cells: {
          base: 'Kansai : kombu de Hokkaido. Kantō : bonite séchée (katsuobushi)',
          with: 'Kansai : copeaux de maquereau et d’autres poissons, sardines séchées ; bonite pour l’arôme',
          soy: 'Kansai : claire (usukuchi). Kantō : foncée (koikuchi)',
          found: 'Kitsune udon à Osaka ; cuisine de Kyoto ; bouillon de soba et d’udon de Tokyo',
        },
      },
      'iriko-ago': {
        name: 'Iriko (Sanuki) et ago (Kyushu)',
        place: 'Kagawa / Nagasaki, Fukuoka',
        era: 'sardines séchées courantes dans l’ouest du Japon depuis l’ère Kyōhō environ (1716–36)',
        cells: {
          base: 'Iriko : anchois bouilli et séché. Ago : poisson volant, souvent grillé',
          with: 'Copeaux de bonite ; kombu',
          soy: 'Sanuki : sauce soja claire (un mélange)',
          found: 'Udon de Sanuki ; udon jigoku-daki de Gotō ; zōni de Hakata',
        },
      },
    },
  },
  donburi: {
    name: 'Donburi (bols de riz)',
    axes: {
      topping: 'Sur le riz',
      seasoning: 'Assaisonnement',
      where: 'Lieu typique',
      order: 'Façon de commander',
    },
    lineages: {
      gyudon: {
        name: 'Gyūdon (bol de bœuf)',
        place: 'Marché aux poissons de Nihonbashi, Tokyo',
        era: 'Yoshinoya 1899',
        cells: {
          topping: 'Bœuf et oignon',
          seasoning: 'La sauce de mijotage de la maison (tsuyu)',
          where: 'Chaînes : Yoshinoya, Sukiya, Matsuya (qui l’appelle gyūmeshi)',
          order: 'Par taille, du mini au méga ; sauce, oignon ou viande en supplément comme options nommées',
        },
      },
      katsudon: {
        name: 'Katsudon (bol d’escalope)',
        place: 'Waseda, Tokyo (revendiqué) ; Fukui, Komagane',
        era: '1913 / 1918 / 1921 (trois revendications)',
        cells: {
          topping: 'Escalope de porc frite',
          seasoning: 'Le plus souvent mijoté et lié à l’œuf ; à Fukui et à Komagane, trempé dans la sauce',
          where: 'Restaurants de soba, gargotes, chaînes d’escalopes ; spécialistes du katsudon à la sauce à Fukui et à Komagane',
          order: 'À Fukui ou à Komagane, demandez la version à l’œuf par son nom',
        },
      },
      butadon: {
        name: 'Butadon d’Obihiro (bol de porc)',
        place: 'Obihiro, Hokkaido',
        era: 'début de Shōwa',
        cells: {
          topping: 'Longe ou poitrine de porc grillée, poireau émincé',
          seasoning: 'Tare de soja sucré, dans le style du kabayaki d’anguille',
          where: 'Boutiques spécialisées à Obihiro (la ville publie une carte du butadon) ; restaurants dans tout le Tokachi',
          order: '—',
        },
      },
      'niigata-tare-katsu': {
        name: 'Tare-katsudon de Niigata',
        place: 'Niigata',
        era: '—',
        cells: {
          topping: 'Deux escalopes ou plus',
          seasoning: 'Trempées dans un tare de soja sucré, sans œuf',
          where: '—',
          order: '—',
        },
      },
    },
  },
  drinks: {
    name: 'Boissons',
    axes: {
      made: 'Fabrication',
      law: 'Ce que disent la loi ou l’étiquette',
      served: 'Façon de les boire',
      marker: 'Ce qui les fait connaître',
    },
    lineages: {
      shochu: {
        name: 'Shōchū et awamori',
        place: 'Okinawa, sud du Kyushu, Iki, Kuma, Amami, îles d’Izu',
        era: 'distillation à Okinawa depuis le XVe siècle (deux récits)',
        cells: {
          made: 'Kōji et levure dans une seule cuve ; alambic continu, ou alambic simple souvent utilisé une seule fois',
          law: 'Alambic continu : moins de 36% ; alambic simple : 45% ou moins ; seuls certains alambics simples peuvent porter la mention honkaku',
          served: 'À l’eau, à l’eau chaude (6:4 conseillé), sur glace, avec de l’eau gazeuse ; maewari laissé reposer à l’avance',
          marker: 'IG pour Iki, Kuma, Ryūkyū, Satsuma et Tokyo Shimazake ; shōchū de sucre brun uniquement à Amami',
        },
      },
      'beer-highball': {
        name: 'La bière et le highball',
        place: 'Yokohama, Sapporo, Osaka ; renouveau du highball par Suntory',
        era: 'à partir de 1870 (selon chaque brasseur) ; renouveau du highball en 2008',
        cells: {
          made: 'Bière de malt, de houblon et d’eau ; happoshu avec du malt ou de l’orge en partie ; le highball est du whisky avec de l’eau gazeuse',
          law: 'Bière, happoshu et « new genre » taxés au même taux à partir d’octobre 2026 ; la bière artisanale n’a pas de définition légale',
          served: 'Règle du highball de Suntory : chope remplie de glace, eau gazeuse bien froide versée doucement, whisky 1 pour 4 d’eau gazeuse',
          marker: '430 sites de bière locale en mars 2025 après le changement de licence de 1994 ; le highball s’est répandu par les izakaya',
        },
      },
      whisky: {
        name: 'Whisky japonais',
        place: '—',
        era: '—',
        cells: {
          made: 'Malt, céréales et eau japonaise ; distillé au Japon ; trois ans ou plus en fût au Japon',
          law: 'Une norme d’association de fabricants depuis 2021, non une loi ; aucune IG sur la liste de l’administration fiscale',
          served: '—',
          marker: 'Un logo pour la norme à partir de mars 2025',
        },
      },
    },
  },
  'food-shopping': {
    name: 'Acheter de quoi manger',
    axes: {
      what: 'De quoi s’agit-il',
      buy: 'Ce qu’on achète',
      numbers: 'En chiffres',
      know: 'À savoir',
    },
    lineages: {
      depachika: {
        name: 'Étages alimentaires des grands magasins',
        place: 'Grands magasins, souvent reliés aux gares',
        era: 'Marché de gare de Hankyu en 1925 ; date du sous-sol non confirmée',
        cells: {
          what: 'L’étage alimentaire d’un grand magasin, en général au sous-sol',
          buy: 'Plats préparés, douceurs à offrir, produits frais, saké ; certains plats de traiteur vendus au poids',
          numbers: 'L’alimentation représentait 25.2% des ventes des grands magasins en août 2026 ; douceurs 8.7%, traiteur 6.2% (hors taxe)',
          know: 'Dégustations gratuites à certains comptoirs ; le JNTO conseille de venir près de l’heure de fermeture',
        },
      },
      ekiben: {
        name: 'Ekiben (bento de gare)',
        place: 'Plusieurs gares le revendiquent ; le premier n’est pas établi',
        era: '1877–1885, selon des récits concurrents',
        cells: {
          what: 'Un repas en boîte vendu dans les gares, conçu pour être mangé froid',
          buy: 'Boîtes régionales dans les gares et lors des foires des grands magasins',
          numbers: '83 fabricants membres de l’association professionnelle (juillet 2023) ; plus de 400 à leur apogée, d’après le rapport de JR West',
          know: 'La plupart des acheteurs le mangent désormais chez eux ; foires d’ekiben dans les grands magasins depuis 1953',
        },
      },
      supermarket: {
        name: 'Supermarchés',
        place: 'Dans tout le pays',
        era: '—',
        cells: {
          what: 'Épiceries du quotidien avec un rayon de plats préparés',
          buy: 'Traiteur, bento, onigiri, sushi et boulangerie en magasin, comptés ensemble sous le nom de sōzai',
          numbers: 'Le sōzai représentait 11.3% des ventes en 2025 (panel de 270 entreprises, hors taxe)',
          know: 'Les magasins baissent les prix des produits pour les écouler avant la fermeture ; comment et quand varie selon le magasin',
        },
      },
    },
  },
  gyoza: {
    name: 'Gyoza',
    axes: {
      cooked: 'Cuisson',
      plate: 'Dans l’assiette',
      sauce: 'Sauce',
      marker: 'Ce qui fait la renommée de la ville',
    },
    lineages: {
      utsunomiya: {
        name: 'Utsunomiya',
        place: 'Utsunomiya, Tochigi',
        era: 'après-guerre ; marque depuis 1993',
        cells: {
          cooked: 'Poêlés, frits et bouillis, souvent au même prix',
          plate: 'Pas de style fixe ; une boutique de référence sert six pièces de 20 g, surtout végétales',
          sauce: 'Soja, vinaigre et huile pimentée, mélangés selon le goût',
          marker: 'Premier poste de dépense des ménages en gyoza pendant 15 ans jusqu’en 2010 ; une marque de ville déposée et une fête en novembre',
        },
      },
      hamamatsu: {
        name: 'Hamamatsu',
        place: 'Hamamatsu, Shizuoka',
        era: '1953 (récit d’une boutique)',
        cells: {
          cooked: 'Poêlés, disposés en cercle dans la poêle',
          plate: 'Une « roue » ronde de 20 ou 25, avec des germes de soja bouillis au milieu',
          sauce: 'Un vinaigre-soja légèrement sucré ; huile pimentée selon le goût',
          marker: 'Premier poste de dépense des ménages en gyoza depuis 2011 la plupart des années, et sur la moyenne 2023–25',
        },
      },
      'kobe-miso': {
        name: 'Gyoza à la sauce miso de Kobe',
        place: 'Shinkaichi, Kobe',
        era: '—',
        cells: {
          cooked: 'Poêlés',
          plate: '—',
          sauce: 'Miso mélangé à du soja, du vinaigre, du sucre et de l’huile pimentée ; varie selon les maisons',
          marker: 'Inscrit par le ministère de l’Agriculture comme plat local de Hyōgo',
        },
      },
      'hakata-hitokuchi': {
        name: 'Gyoza d’une bouchée de Hakata',
        place: 'Ville de Fukuoka',
        era: '—',
        cells: {
          cooked: 'Poêlés',
          plate: 'D’une bouchée',
          sauce: '—',
          marker: 'Petits raviolis pour accompagner l’alcool ; une boutique de Nakasu date sa fondation de 1949',
        },
      },
    },
  },
  'instant-noodles': {
    name: 'Nouilles instantanées',
    axes: {
      format: 'L’emballage',
      noodle: 'Nouille',
      prep: 'Préparation',
      regional: 'Versions régionales',
    },
    lineages: {
      bag: {
        name: 'Nouilles en sachet (Chicken Ramen)',
        place: 'Ikeda, Osaka (selon Nissin)',
        era: '25 août 1958',
        cells: {
          format: 'Un bloc de nouilles séchées en sachet ; le premier était déjà assaisonné, et un sachet de soupe séparé est devenu la norme à partir de 1962',
          noodle: 'Frites, ou non frites (séchées à l’air chaud) à partir de 1968 ; un sachet contient environ 80 brins d’environ 65 cm en moyenne',
          prep: 'Chicken Ramen aujourd’hui : 400 ml d’eau chaude versée pendant 3 minutes, ou mijoté 1 minute',
          regional: 'Sachets régionaux à partir de 1979 (Umakacchan pour le Kyushu) ; une série de quatre villes en 1983',
        },
      },
      cup: {
        name: 'Nouilles en pot (Cup Noodle)',
        place: 'Nissin, Japon',
        era: '18 septembre 1971',
        cells: {
          format: 'Un pot qui fait office d’emballage, de cuiseur et de bol ; en polystyrène expansé ou à base de papier ; vendu au départ avec une fourchette',
          noodle: 'Dans le Cup Noodle, le bloc est maintenu au milieu du pot pour que l’eau chaude circule dessous',
          prep: 'Couvercle à moitié ouvert, eau bouillante jusqu’au trait intérieur, environ 3 minutes (Cup Noodle 280 ml) ; certains pots se préparent à l’eau froide',
          regional: 'Donbei vendu séparément dans l’est et dans l’ouest du Japon ; quatre bouillons régionaux d’Akai Kitsune ; Okinawa soba en pot vendu uniquement à Okinawa',
        },
      },
    },
  },
  izakaya: {
    name: 'Izakaya',
    axes: {
      what: 'De quoi s’agit-il',
      seats: 'Places',
      money: 'Comment on paie',
      found: 'Où en trouver',
    },
    lineages: {
      yakitori: {
        name: 'Yakitori',
        place: 'Dans tout le pays ; « yakitori » régional à Higashimatsuyama, Muroran, Imabari',
        era: 'Première boutique de Muroran en 1937',
        cells: {
          what: 'Brochettes grillées au charbon, au sel ou avec un tare de soja sucré ; dans certaines villes, le « yakitori » est du porc',
          seats: 'Comptoir, tables, ou debout style « beer bar »',
          money: 'À la brochette',
          found: 'Partout, des bars debout aux comptoirs raffinés, aux stands de fête et aux konbini',
        },
      },
      yokocho: {
        name: 'Bar de ruelle yokochō',
        place: 'Tokyo et d’autres villes',
        era: '—',
        cells: {
          what: 'Minuscules bars dans des ruelles étroites, repérables à leurs lanternes rouges ou blanches et à un rideau noren',
          seats: 'Souvent une dizaine ; certains en ont quatre ou cinq',
          money: 'Souvent en japonais seulement, menus manuscrits',
          found: 'Ruelles près des grandes gares',
        },
      },
      kakuuchi: {
        name: 'Kaku-uchi (bar debout d’un magasin d’alcool)',
        place: 'Kitakyushu (on dit qu’il y est né) ; aussi des magasins d’alcool de Tokyo',
        era: 'rattaché par une association de Kitakyushu aux aciéries de Yawata de 1901',
        cells: {
          what: 'Boire dans un magasin d’alcool ; à distinguer des bars debout tenus comme des restaurants',
          seats: 'Debout, dans un magasin d’alcool ou devant',
          money: 'Aucun prix confirmé ; les verres et l’eau sont des faveurs, non garanties',
          found: 'Magasins d’alcool ; 94 à Kitakyushu dans une enquête de 2018',
        },
      },
      yatai: {
        name: 'Yatai de Fukuoka',
        place: 'Ville de Fukuoka',
        era: '—',
        cells: {
          what: 'Stands de rue autorisés servant à manger et à boire la nuit',
          seats: 'Quelques-unes ; idéal pour deux ou trois personnes',
          money: 'Surtout en espèces ; la plupart n’ont pas de droit de couvert, les stands de type bar peuvent en avoir',
          found: 'Nakasu, Tenjin, Nagahama',
        },
      },
      snack: {
        name: 'Snack bar',
        place: 'Dans tout le pays',
        era: '—',
        cells: {
          what: 'Petit bar, souvent tenu par une « mama », avec conversation et karaoké',
          seats: '—',
          money: 'Pas de données officielles sur les prix ; vérifiez d’abord les tarifs et les limites de temps',
          found: 'Quartiers de vie nocturne',
        },
      },
    },
  },
  kaiseki: {
    name: 'Kaiseki et le repas formel',
    axes: {
      occasion: 'L’occasion d’où il vient',
      structure: 'Construction du repas',
      rice: 'Moment du riz',
      marker: 'Ce qui le distingue',
    },
    lineages: {
      tea: {
        name: 'Kaiseki de thé et kaiseki de banquet',
        place: 'La cérémonie du thé ; kaiseki de banquet dans les restaurants',
        era: 'Kaiseki de thé achevé à l’époque Momoyama (ministère de l’Agriculture)',
        cells: {
          occasion: 'Thé : un repas léger avant le thé. Banquet : un repas pour boire du saké',
          structure: 'Thé : un plateau, une soupe et trois plats, puis des plats pour le saké. Banquet : de nombreux plats, dans l’ordre choisi par le cuisinier',
          rice: 'Thé : en premier, avec la soupe. Banquet : vers la fin',
          marker: 'Le kaiseki de thé se termine par du matcha ; le banquet est ce que les restaurants appellent aujourd’hui le plus souvent kaiseki',
        },
      },
      shojin: {
        name: 'Shōjin ryōri',
        place: 'Temples zen',
        era: 'Il y a environ 700 ans, ou à l’époque de Kamakura (les sources divergent)',
        cells: {
          occasion: 'Nourriture des moines dans le cadre de l’entraînement ; séparément, accueil des visiteurs du temple',
          structure: 'Moines : une soupe, un plat. Accueil : plateaux dans le style honzen (repas de Kōya de deux ou trois plateaux)',
          rice: '—',
          marker: 'Ni viande ni poisson ; tofu, yuba et fu ; kombu et shiitake séchés pour le bouillon',
        },
      },
      honzen: {
        name: 'Honzen ryōri',
        place: 'Maisons de guerriers',
        era: 'époque de Muromachi (ville de Kyoto) ; époque médiévale (ministère de l’Agriculture)',
        cells: {
          occasion: 'Repas de cérémonie',
          structure: 'D’un premier plateau (le honzen) jusqu’à un cinquième',
          rice: '—',
          marker: 'Considéré par le conseil d’éducation de la ville de Kyoto comme la base de la cuisine japonaise formelle',
        },
      },
      bento: {
        name: 'Bento',
        place: 'Repas emporté : théâtre, voyage, cérémonies du thé',
        era: 'Arrivé à Kyoto depuis la Chine à la fin des années 1300 (ministère de l’Agriculture)',
        cells: {
          occasion: 'Entractes de théâtre, voyage en train, repas simplifié d’une cérémonie du thé',
          structure: 'Riz et plusieurs accompagnements dans une seule boîte ; la boîte Shōkadō a quatre compartiments',
          rice: 'Dans la boîte',
          marker: 'Makunouchi issu du théâtre ; Shōkadō issu d’un ryōtei en 1937',
        },
      },
    },
  },
  konamono: {
    name: 'Konamono (plats de pâte)',
    axes: {
      batter: 'Pâte',
      cooked: 'Cuisson',
      finish: 'Finition',
      howToEat: 'Façon de le manger',
    },
    lineages: {
      okonomiyaki: {
        name: 'Okonomiyaki (Osaka et Hiroshima)',
        place: 'Osaka / Hiroshima',
        era: 'en-cas d’avant-guerre ; formes actuelles d’après-guerre, nom d’Hiroshima vers 1950',
        cells: {
          batter: 'Osaka : farine et dashi, souvent avec de l’igname râpée, chou mêlé à la pâte. Hiroshima : une fine crêpe de pâte',
          cooked: 'Osaka : mélangé et grillé. Hiroshima : en couches — chou, porc, nouilles et œuf empilés et cuits à la vapeur',
          finish: 'Une sauce épaisse et sucrée',
          howToEat: 'Osaka : parfois en accompagnement du riz. Hiroshima : avec des nouilles, sans riz, mangé à la spatule ou aux baguettes',
        },
      },
      takoyaki: {
        name: 'Takoyaki et Akashi-yaki',
        place: 'Osaka / Akashi',
        era: 'Osaka : stands du début de Shōwa. Akashi : commerce en boutique daté de 1919, dit-on',
        cells: {
          batter: 'Takoyaki : farine, dashi, œuf. Akashi : plus d’œuf, plus de fécule de blé (jinko), donc il reste moelleux',
          cooked: 'Takoyaki : une plaque à takoyaki à environ 220°C, tournés de 90° à chaque fois pour former des boules. Akashi : plaque en cuivre',
          finish: 'Takoyaki : sauce épaisse, algue verte, copeaux de bonite. Akashi : rien — trempé dans du dashi',
          howToEat: 'Takoyaki : dans une barquette avec un cure-dent. Akashi : sur une planche de bois (age-ita), 20 par portion dans une vieille boutique',
        },
      },
      monja: {
        name: 'Monjayaki',
        place: 'Tsukishima, Tokyo (shitamachi)',
        era: 'ministère de l’Agriculture : juste après la guerre ; syndicat des boutiques : depuis le milieu de l’ère Meiji',
        cells: {
          batter: 'Farine, sauce et dashi mélangés en pâte fluide ; chou, calmar séché, éclats de tempura, crevettes sakura',
          cooked: 'Les garnitures sont sautées et hachées sur la plaque, poussées en anneau, la pâte versée au milieu',
          finish: 'Algue verte quand les bulles se forment ; saveurs de sauce, de fromage ou de curry',
          howToEat: 'Pressé sur la plaque petit à petit avec une petite spatule ; généralement cuit par le client',
        },
      },
    },
  },
  'kyodo-ryori': {
    name: 'Plats locaux par région',
    axes: {
      signature: 'Plats emblématiques',
      why: 'Ce qui les a façonnés',
      when: 'Quand on les mange',
      listed: 'Listes officielles',
    },
    lineages: {
      akita: {
        name: 'Akita',
        place: 'Préfecture d’Akita',
        era: '—',
        cells: {
          signature: 'Hotpot de kiritanpo, hotpot de shottsuru, iburi-gakko',
          why: 'Riz des travailleurs de la montagne cuit sur des bâtons ; poissons hatahata qui arrivent avec le tonnerre d’hiver',
          when: 'Kiritanpo avec le riz nouveau ; shottsuru en novembre–décembre',
          listed: '29 plats dans la base de données du ministère de l’Agriculture ; 10 plats centenaires',
        },
      },
      okinawa: {
        name: 'Okinawa',
        place: 'Préfecture d’Okinawa',
        era: '—',
        cells: {
          signature: 'Rafute, Okinawa soba, tibichi (pieds de porc)',
          why: 'Cuisine du porc façonnée par les contacts du royaume des Ryūkyū avec la Chine',
          when: 'Rafute lors des célébrations et des rites commémoratifs ; soba tous les jours',
          listed: '30 plats dans la base de données du ministère de l’Agriculture ; 5 plats centenaires',
        },
      },
      setouchi: {
        name: 'Setouchi',
        place: 'Okayama, Hiroshima, Yamaguchi, Kagawa, Ehime',
        era: '—',
        cells: {
          signature: 'Bara-zushi de fête, dote-nabe d’huîtres, sashimi de fugu, kawara soba, tai-meshi',
          why: 'Les courants rapides de la mer Intérieure cités pour la qualité du poisson ; frugalité de l’époque d’Edo et sucre de Sanuki',
          when: 'Bara-zushi lors des fêtes ; huîtres en janvier–février ; fugu sauvage de septembre à mars',
          listed: '143 plats dans la base de données du ministère de l’Agriculture (Okayama 28, Hiroshima 30, Yamaguchi 30, Kagawa 30, Ehime 25)',
        },
      },
      kyushu: {
        name: 'Kyushu',
        place: 'Fukuoka, Saga, Nagasaki, Kumamoto, Ōita, Miyazaki, Kagoshima',
        era: '—',
        cells: {
          signature: 'Mizutaki, karashi renkon, toriten, hiyajiru, keihan',
          why: 'Patate douce sur sol volcanique ; poules élevées à la maison ; contacts de Nagasaki avec l’étranger',
          when: 'Périophthalme de mai à août ; gu-zōni au Nouvel An ; hiyajiru en été',
          listed: '204 plats dans la base de données du ministère de l’Agriculture (Fukuoka 30, Saga 25, Nagasaki 30, Kumamoto 29, Ōita 30, Miyazaki 30, Kagoshima 30)',
        },
      },
      tohoku: {
        name: 'Tohoku',
        place: 'Aomori, Iwate, Miyagi, Yamagata, Fukushima',
        era: '—',
        cells: {
          signature: 'Senbei-jiru, hittsumi, harako-meshi, imoni, kozuyu',
          why: 'Étés froids qui faisaient échouer le riz, d’où une cuisine de farine ; conservation des aliments pour les longs hivers',
          when: 'Harako-meshi de septembre à novembre ; oursin ichigo-ni vers juillet ; imoni en automne',
          listed: '147 plats dans la base de données du ministère de l’Agriculture (Aomori 29, Iwate 30, Miyagi 29, Yamagata 29, Fukushima 30)',
        },
      },
      hokuriku: {
        name: 'Hokuriku',
        place: 'Niigata, Toyama, Ishikawa, Fukui',
        era: '—',
        cells: {
          signature: 'Hegi soba, noppe, masu-zushi, jibu-ni, kabura-zushi, oroshi soba',
          why: 'Varech et hareng des navires Kitamae ; neige et conservation des aliments ; le repas commémoratif hōonkō',
          when: 'Buri daikon de la fin de l’automne à l’hiver ; hōonkō vers le 28 novembre ; crabe seiko femelle jusqu’au 31 décembre',
          listed: '119 plats dans la base de données du ministère de l’Agriculture (Niigata 30, Toyama 30, Ishikawa 30, Fukui 29)',
        },
      },
      kinki: {
        name: 'Kinki',
        place: 'Kyoto, Osaka, Hyogo, Nara, Wakayama, Shiga, Mie',
        era: '—',
        cells: {
          signature: 'Pickles de Kyoto, Senba-jiru, botan-nabe, chagayu, mehari-zushi, funa-zushi, udon d’Ise',
          why: 'Une capitale loin de la mer, donc du poisson conservé ; commerce d’Osaka et varech ; maquereau salé transporté vers l’intérieur des terres',
          when: 'Suguki de la mi-novembre à janvier ; ikanago à partir de fin février ; matsuba-gani de novembre à mars',
          listed: '207 plats dans la base de données du ministère de l’Agriculture (Kyoto 30, Osaka 30, Hyogo 30, Nara 30, Wakayama 27, Shiga 30, Mie 30)',
        },
      },
      kanto: {
        name: 'Kantō',
        place: 'Ibaraki, Tochigi, Gunma, Saitama, Chiba, Tokyo, Kanagawa',
        era: '—',
        cells: {
          signature: 'Ankō no tomozu, shimotsukare, okirikomi, futomaki-zushi, Fukagawa-meshi, sanmāmen',
          why: 'Blé sur les hauts plateaux de cendres volcaniques ; sauce soja de Noda et de Chōshi ; nourrir Edo',
          when: 'Baudroie de novembre à mars ; shimotsukare pour le premier jour du Cheval du deuxième mois lunaire ; blanchaille crue à partir du 11 mars',
          listed: '197 plats dans la base de données du ministère de l’Agriculture (Ibaraki 30, Tochigi 30, Gunma 27, Saitama 29, Chiba 28, Tokyo 30, Kanagawa 23)',
        },
      },
      chubu: {
        name: 'Chūbu',
        place: 'Yamanashi, Nagano, Gifu, Shizuoka, Aichi',
        era: '—',
        cells: {
          signature: 'Hōtō, oyaki, gohei-mochi, hoba miso, oden de Shizuoka, udon miso-nikomi',
          why: 'Terres de montagne impropres au riz, d’où une cuisine de farine ; miso de soja ; produits de la mer transportés vers l’intérieur des terres',
          when: 'Soba nouveau de la mi-octobre au début de novembre ; crevettes sakura au printemps et en automne ; hoba-zushi de mai à août',
          listed: '147 plats dans la base de données du ministère de l’Agriculture (Yamanashi 30, Nagano 29, Gifu 30, Shizuoka 28, Aichi 30)',
        },
      },
      hokkaido: {
        name: 'Hokkaido',
        place: 'Hokkaido',
        era: '—',
        cells: {
          signature: 'Ishikari-nabe, sanpei-jiru, chanchan-yaki de saumon, ruibe, butadon, zangi',
          why: 'Saumon et hareng ; cuisine aïnoue et colons venus de Honshu, selon la formule du ministère de l’Agriculture',
          when: 'Ishikari-nabe et chanchan-yaki avec le saumon ; izushi mis en saumure à la fin de l’automne pour le Nouvel An',
          listed: '27 plats dans la base de données du ministère de l’Agriculture ; 15 plats centenaires',
        },
      },
      sanin: {
        name: 'San’in',
        place: 'Tottori, Shimane',
        era: '—',
        cells: {
          signature: 'Tōfu chikuwa, soupe miso à l’oyagani, Izumo soba, shijimi-jiru, uzume-meshi',
          why: 'Du tofu là où le poisson manquait ; crabe et maquereau de la mer du Japon ; eau saumâtre du lac Shinji',
          when: 'Oyagani de novembre à décembre ; matsuba-gani de novembre à mars ; rakkyō récolté de fin mai à la mi-juin',
          listed: '55 plats dans la base de données du ministère de l’Agriculture (Tottori 27, Shimane 28)',
        },
      },
      shikoku: {
        name: 'Shikoku (Tokushima et Kochi)',
        place: 'Tokushima, Kochi',
        era: '—',
        cells: {
          signature: 'Iya soba, sōmen de Handa, dekomawashi, katsuo tataki, sawachi, inaka-zushi',
          why: 'Montagnes où le riz poussait mal, d’où le sarrasin ; bonite du Kuroshio ; banquets okyaku de Kochi',
          when: 'Sōmen de Handa fabriqué de novembre à mars ; bonite à son meilleur en automne ; sawachi pour l’okyaku',
          listed: '60 plats dans la base de données du ministère de l’Agriculture (Tokushima 30, Kochi 30)',
        },
      },
    },
  },
  market: {
    name: 'Marchés et bols de fruits de mer',
    axes: {
      what: 'Type de marché',
      who: 'Qui peut acheter',
      hours: 'Quand',
      bowl: 'Le bol de fruits de mer',
    },
    lineages: {
      toyosu: {
        name: 'Toyosu (Tokyo)',
        place: 'Kōtō, Tokyo',
        era: 'Tsukiji 1935 ; Toyosu à partir du 11 octobre 2018',
        cells: {
          what: 'Marché de gros central de Tokyo ; le poisson y est vendu aux enchères puis revendu à des grossistes intermédiaires',
          who: 'À l’intérieur : acheteurs professionnels seulement, les visiteurs sur la galerie et dans la zone des restaurants. À côté : Senkyaku Banrai, ouvert à tous',
          hours: 'Parcours des visiteurs 05:00–17:00 ; fermé les dimanches, jours fériés et jours de fermeture du marché. Senkyaku Banrai ouvre les jours de fermeture du marché',
          bowl: 'Servi à l’intérieur et à côté ; Tokyo indique que le complexe extérieur cuisine avec du poisson choisi par les grossistes',
        },
      },
      'omicho-hakodate': {
        name: 'Ōmichō (Kanazawa) et marché du matin de Hakodate',
        place: 'Kanazawa / Hakodate',
        era: 'Ōmichō environ 300 ans ; Hakodate depuis 1945',
        cells: {
          what: 'Ōmichō : la cuisine d’une ville, avec environ 170 boutiques. Hakodate : environ 250 boutiques, né d’agriculteurs vendant près de la gare',
          who: 'Tout le monde ; les deux se décrivent comme des marchés où les habitants font leurs courses',
          hours: 'Hakodate ouvre à 05:00 (mai–déc.) ou 06:00 (janv.–avr.) jusqu’après 14:00 ; Ōmichō boutique par boutique',
          bowl: 'Nommé selon le nombre et le choix — trois garnitures à choisir, dix sortes, le choix du chef — et certains bols au prix du marché',
        },
      },
    },
  },
  meat: {
    name: 'Viandes autres que le wagyu',
    axes: {
      meat: 'La viande',
      eaten: 'Façon de la manger',
      rules: 'Règles et normes',
      marker: 'À savoir',
    },
    lineages: {
      pork: {
        name: 'Porc : kurobuta, butadon, kakuni',
        place: 'Kagoshima, Obihiro, Nagasaki',
        era: 'marque kurobuta à partir de 1955–64 ; butadon début de Shōwa',
        cells: {
          meat: 'Porc noir Berkshire ; on dit qu’il existe plus de 400 marques de porc, sans norme commune',
          eaten: 'Obihiro : porc grillé avec un tare de style anguille sur du riz. Nagasaki : poitrine avec la couenne, mijotée sucrée',
          rules: 'Kurobuta de Kagoshima : Berkshire uniquement, élevé à part, nourri avec 10–20% de patate douce pendant 60 jours ou plus avant l’expédition',
          marker: 'Le porc noir de Kagoshima était envoyé vivant à Tokyo en 1955–64 et est devenu la première marque de porc du Japon',
        },
      },
      jingisukan: {
        name: 'Jingisukan (agneau et mouton grillés)',
        place: 'Hokkaido',
        era: 'imaginé au début de Shōwa ; répandu après la guerre (les récits divergent)',
        cells: {
          meat: 'Agneau (moins d’un an) ou mouton (deux ans ou plus) ; la viande nationale représentait 0.5% de l’offre en FY2022',
          eaten: 'Grillé sur une plaque bombée, les légumes autour du bord recueillant le jus',
          rules: 'Deux styles : mariné avant la cuisson (Takikawa) ou trempé après (Sapporo)',
          marker: 'Né à Hokkaido, pas en Mongolie, selon le ministère de l’Agriculture ; 58% des moutons du Japon sont à Hokkaido',
        },
      },
      basashi: {
        name: 'Basashi (cheval cru)',
        place: 'Kumamoto, Yamanashi, Aizu (Fukushima)',
        era: 'Restaurants de Kumamoto à partir de 1955–64',
        cells: {
          meat: 'Cheval cru, appelé sakura-niku ; la raison de ce nom est discutée',
          eaten: 'Kumamoto : soja sucré avec oignon, gingembre, ail. Aizu : soja avec du karashi-miso',
          rules: 'La viande de cheval de Kumamoto est toujours congelée avant distribution ; les étiquettes distinguent les poulains nés à Kumamoto des poulains importés élevés sur place',
          marker: 'À Aizu, « sashimi » peut désigner le cheval ; il se mange surtout à la maison',
        },
      },
      gibier: {
        name: 'Cerf et sanglier (gibier)',
        place: 'Dans tout le pays',
        era: '—',
        cells: {
          meat: 'Cerf et sanglier sauvages, chassés en partie à cause des dégâts aux cultures',
          eaten: 'Bien cuit ; jamais cru ni saignant',
          rules: '75°C à cœur pendant au moins une minute ; les boutiques doivent s’approvisionner auprès d’établissements de transformation de la viande agréés',
          marker: 'Un dispositif national de certification des établissements de transformation',
        },
      },
      horumon: {
        name: 'Horumon et motsu (abats)',
        place: 'Hakata, Osaka, Kokura, Sayo (Hyōgo)',
        era: 'après-guerre (motsunabe de Hakata ; horumon yaki-udon de Sayo)',
        cells: {
          meat: 'Abats de bœuf et de porc, officiellement « sous-produits d’abattage » ; horumon et motsu sont des mots du métier',
          eaten: 'Yakiniku, ragoût de motsu, motsunabe de Hakata (soja, miso ou sel), brochettes de porc dans le Kantō, chiritori-nabe à Osaka',
          rules: 'Foie de bœuf cru interdit depuis juillet 2012 ; viande et abats de porc crus depuis le 12 juin 2015',
          marker: 'Le Kansai appelle l’intestin grêle maruchō (entier) ou kotecchan (fendu) ; deux récits sur l’origine du nom',
        },
      },
    },
  },
  nabe: {
    name: 'Soupes et hotpots',
    axes: {
      stock: 'Bouillon',
      seasoning: 'Assaisonné avec',
      contents: 'Dans la marmite',
      marker: 'Ce qui fait la renommée du lieu',
    },
    lineages: {
      miso: {
        name: 'Soupe miso et miso régionaux',
        place: 'Dans tout le pays ; miso de soja à Aichi, Gifu et Mie',
        era: 'IG du miso Hatcho en 2017',
        cells: {
          stock: 'Dashi de kombu, sardines séchées et similaires',
          seasoning: 'Miso de riz, d’orge ou de soja, selon la région',
          contents: 'Varie selon les foyers et les régions ; un bol plein d’ingrédients à Nagano',
          marker: 'Miso de soja d’Aichi, miso blanc de Kyoto pour le Nouvel An, miso de riz de Shinshu, miso d’orge à Ehime et à Kagoshima',
        },
      },
      oden: {
        name: 'Oden',
        place: 'Issu du dengaku de tofu ; oden mijoté à Edo (Tokyo)',
        era: 'Dengaku grillé à Edo ; oden mijoté depuis l’époque moderne',
        cells: {
          stock: 'Katsuobushi et kombu à Tokyo ; bouillon léger à Osaka ; bouillon de tendon de bœuf à Shizuoka',
          seasoning: 'Sauce soja foncée à Tokyo, sauce soja claire ou dashi blanc à Kyoto, sauce miso à Aichi',
          contents: 'Chikuwabu à Tokyo ; hanpen noir à Shizuoka ; kurumafu et crabe de saison à Kanazawa',
          marker: 'Moutarde à Tokyo, miso à Aichi, algue verte et poudre de poisson à Shizuoka, gingembre-soja à Himeji',
        },
      },
      chanko: {
        name: 'Chanko nabe',
        place: 'Sumida, Tokyo',
        era: '—',
        cells: {
          stock: 'Poulet',
          seasoning: 'Sauce soja ou miso',
          contents: 'Traditionnellement sans viande de quadrupède, comme le bœuf ou le porc',
          marker: 'Dans le sumo, chanko désigne tout ce qu’un lutteur cuisine ; boutiques tenues par d’anciens lutteurs dans tout Tokyo',
        },
      },
      ishikari: {
        name: 'Ishikari nabe',
        place: 'Ishikari, Hokkaido',
        era: '—',
        cells: {
          stock: 'Kombu',
          seasoning: 'Miso, finition au sansho',
          contents: 'Morceaux et parures de saumon ; certains foyers ajoutent des œufs de saumon ou du beurre',
          marker: 'Un plat de pêcheurs qui s’est répandu après la venue de visiteurs pour voir la pêche à la senne de plage',
        },
      },
      botan: {
        name: 'Botan nabe',
        place: 'Tamba-Sasayama',
        era: '—',
        cells: {
          stock: '—',
          seasoning: 'Le plus souvent un mélange de miso rouge et blanc, différent dans chaque boutique',
          contents: 'Sanglier ; sansho ; udon ou bouillie de riz pour finir',
          marker: 'La ville affirme que le nom est antérieur au dressage en forme de pivoine',
        },
      },
    },
  },
  ramen: {
    name: 'Ramen',
    axes: {
      soup: 'Soupe',
      noodle: 'Nouille',
      topping: 'Dessus',
      howToEat: 'Façon de le manger',
    },
    lineages: {
      hakata: {
        name: 'Hakata (Fukuoka)',
        place: 'Ville de Fukuoka',
        era: 'années 1940–50',
        cells: {
          soup: 'Os de porc bouillis à gros bouillons jusqu’à ce qu’ils blanchissent ; assaisonnement au sel ou à la sauce soja claire',
          noodle: 'Extra-fines, droites, peu hydratées (24–28%)',
          topping: 'Oignon nouveau, porc, champignon oreille-de-Judas ; gingembre, sésame et ail sur le comptoir',
          howToEat: 'Choisissez la fermeté des nouilles ; commandez un kaedama (une seconde portion payante) dans le bouillon que vous gardez',
        },
      },
      kurume: {
        name: 'Kurume',
        place: 'Kurume, Fukuoka',
        era: '1937 / 1947',
        cells: {
          soup: 'Os de porc plus corsé et plus épais, cuit dans un chaudron ; yobimodoshi (marmite jamais vidée)',
          noodle: 'Droites, fermes, un peu plus épaisses qu’à Hakata',
          topping: 'Porc, oignon nouveau, souvent des légumes-feuilles marinés',
          howToEat: 'Le plus souvent pas de kaedama',
        },
      },
      kumamoto: {
        name: 'Kumamoto',
        place: 'Tamana / Kumamoto',
        era: 'années 1950',
        cells: {
          soup: 'Os de porc avec du poulet ; finition à l’huile d’ail noir (mā-yu)',
          noodle: 'Moyennes, plus fermes et plus épaisses qu’à Hakata',
          topping: 'Chips d’ail frit, porc, champignon oreille-de-Judas, œuf',
          howToEat: 'L’ail est cuit, pas cru',
        },
      },
      kagoshima: {
        name: 'Kagoshima',
        place: 'Ville de Kagoshima',
        era: '1947',
        cells: {
          soup: 'Porc avec du poulet et des légumes ; plus doux',
          noodle: 'Tendres, pâles, faites sans eau alcaline',
          topping: 'Oignon nouveau grillé, porc',
          howToEat: 'Radis mariné offert et une théière dans la plupart des boutiques',
        },
      },
      kitakata: {
        name: 'Kitakata',
        place: 'Kitakata, Fukushima',
        era: 'milieu des années 1920',
        cells: {
          soup: 'Sauce soja claire sur bouillon de porc ; versions au sel et au lard dorsal aussi',
          noodle: 'Plates, épaisses, ondulées, très hydratées (jukusei takasui)',
          topping: 'Poitrine de porc cuite lentement, parfois couvrant le bol (niku soba)',
          howToEat: 'Dès 7 h — asa-rā, ramen du matin',
        },
      },
      shirakawa: {
        name: 'Shirakawa',
        place: 'Shirakawa, Fukushima',
        era: '1921',
        cells: {
          soup: 'Sauce soja claire sur poulet et porc',
          noodle: 'Ondulées, coupées à la main, selon la technique du soba',
          topping: 'Porc, pousse de bambou, naruto',
          howToEat: '—',
        },
      },
      yonezawa: {
        name: 'Yonezawa',
        place: 'Yonezawa, Yamagata',
        era: 'début du XXe siècle',
        cells: {
          soup: 'Sauce soja claire sur poulet et sardine séchée',
          noodle: 'Fines, ondulées, très hydratées, pétries à la main après repos',
          topping: 'Porc, pousse de bambou, oignon nouveau',
          howToEat: '—',
        },
      },
      sapporo: {
        name: 'Sapporo',
        place: 'Sapporo',
        era: '1954 / 1958',
        cells: {
          soup: 'Miso ; légumes et viande hachée sautés dans du saindoux avant d’ajouter le bouillon',
          noodle: 'Moyennement épaisses, très ondulées, aux œufs, maturées (type Nishiyama, 1955)',
          topping: 'Germes de soja, oignon, porc ; beurre et maïs en option, non standard',
          howToEat: '—',
        },
      },
      hakodate: {
        name: 'Hakodate',
        place: 'Hakodate',
        era: 'annonce de 1884',
        cells: {
          soup: 'Sel clair sur porc, poulet, varech et pétoncle',
          noodle: 'Fines, droites',
          topping: 'Porc, pousse de bambou, une tranche de gluten de blé (fu)',
          howToEat: '—',
        },
      },
      asahikawa: {
        name: 'Asahikawa',
        place: 'Asahikawa',
        era: '—',
        cells: {
          soup: 'Sauce soja sur bouillon de porc et de fruits de mer',
          noodle: 'Moyennement fines, ondulées',
          topping: 'Porc, pousse de bambou, oignon nouveau',
          howToEat: '—',
        },
      },
      iekei: {
        name: 'Iekei de Yokohama',
        place: 'Yokohama',
        era: '1974',
        cells: {
          soup: 'Os de porc et sauce soja, avec de l’huile de poulet',
          noodle: 'Épaisses, courtes, droites',
          topping: 'Épinards, trois feuilles de nori, porc',
          howToEat: 'Réglez la richesse, l’huile et la fermeté ; enroulez du riz dans le nori imbibé de soupe',
        },
      },
      'tokyo-shoyu': {
        name: 'Soja de Tokyo (chūka soba)',
        place: 'Tokyo',
        era: '1910 / après-guerre à Ogikubo',
        cells: {
          soup: 'Sauce soja sur poulet, porc et sardine séchée',
          noodle: 'Moyennes, ondulées',
          topping: 'Porc, pousse de bambou, naruto, épinards, nori',
          howToEat: '—',
        },
      },
      onomichi: {
        name: 'Onomichi',
        place: 'Onomichi, Hiroshima',
        era: '1928 / début de Shōwa / vers 1947 (les récits divergent)',
        cells: {
          soup: 'Sauce soja sur bouillon de poulet avec de petits poissons, surmontée de lard dorsal de porc haché ; varie selon la boutique',
          noodle: 'Plates, moyennement fines, droites',
          topping: 'Porc, pousse de bambou, oignon nouveau',
          howToEat: 'Petits bols, donc les habitants conseillent d’essayer plusieurs boutiques ; souvent vendu sous le nom de chūka soba',
        },
      },
      tokushima: {
        name: 'Tokushima',
        place: 'Tokushima (Komatsushima, selon un récit)',
        era: 'vers 1949 (stands d’après-guerre)',
        cells: {
          soup: 'Trois types de soupe d’os de porc ; la brune (sauce soja foncée) est la plus courante, avec la blanche et la jaune',
          noodle: 'Moyennement fines, droites, plutôt tendres',
          topping: 'Poitrine de porc mijotée sucrée ; un œuf cru dans beaucoup de boutiques',
          howToEat: 'Se mange avec un bol de riz',
        },
      },
      wakayama: {
        name: 'Wakayama',
        place: 'Wakayama',
        era: '—',
        cells: {
          soup: 'Os de porc et sauce soja',
          noodle: 'Fines, droites',
          topping: 'Porc, kamaboko, oignon nouveau',
          howToEat: 'Sushi de maquereau pressé et œufs durs sur la table, comptés à la fin',
        },
      },
      'toyama-black': {
        name: 'Toyama black',
        place: 'Toyama',
        era: '—',
        cells: {
          soup: 'Sauce soja très foncée et salée, avec du poivre noir concassé',
          noodle: 'Épaisses, fermes',
          topping: 'Porc, pousse de bambou, beaucoup d’oignon nouveau',
          howToEat: 'Conçu pour accompagner du riz',
        },
      },
      jiro: {
        name: 'Style Jirō',
        place: 'Tokyo (Mita)',
        era: '—',
        cells: {
          soup: 'Os de porc et sauce soja, chargé en lard dorsal',
          noodle: 'Très épaisses, élastiques, grosse portion',
          topping: 'Une montagne de germes de soja et de chou ; ail sur demande',
          howToEat: 'Annoncez vos suppléments quand on vous le demande ; une culture avec ses propres règles',
        },
      },
      tsukemen: {
        name: 'Tsukemen (à tremper)',
        place: 'Nakano, Tokyo (selon un récit) ; Higashi-Ikebukuro à partir de 1961',
        era: '1955 (selon un récit)',
        cells: {
          soup: 'Servie à part pour tremper ; la première était de la soupe de ramen avec un surplus de sauce soja dans une tasse à thé',
          noodle: 'Nouilles chūka soba servies à part ; certaines boutiques vendent plusieurs poids au même prix',
          topping: '—',
          howToEat: 'Trempez les nouilles dans la soupe, comme un zaru soba à la chinoise',
        },
      },
      'hiyashi-chuka': {
        name: 'Hiyashi chūka (froid)',
        place: 'Sendai / Tokyo (deux revendications)',
        era: 'années 1930',
        cells: {
          soup: 'Servi froid ; la boutique de Sendai l’appelle « ryanbanmen »',
          noodle: 'Rafraîchies sous l’eau courante',
          topping: 'Le Yōsukō Saikan de Tokyo en sert une version cinq couleurs',
          howToEat: 'Un plat d’été',
        },
      },
    },
  },
  'rice-sides': {
    name: 'Le riz et ce qui l’accompagne',
    axes: {
      what: 'De quoi s’agit-il',
      rice: 'Rapport au riz',
      regional: 'Où ça change',
      know: 'À savoir',
    },
    lineages: {
      takikomi: {
        name: 'Riz cuit avec des ingrédients',
        place: 'Dans tout le pays',
        era: 'serait né comme moyen d’étirer le riz (récit de Nara)',
        cells: {
          what: 'Riz cuit avec des légumes, du poisson ou des châtaignes, ou riz garni d’un topping versé dessus',
          rice: 'À l’intérieur ; le riz est le plat',
          regional: 'Le tai-meshi d’Ehime est cuit avec les ingrédients à Tōyo et versé cru dessus à Nanyo ; Nara appelle iro-gohan les versions assaisonnées à la sauce soja',
          know: 'L’origine du kamameshi comme plat n’est établie dans aucune source que j’ai pu utiliser',
        },
      },
      mochi: {
        name: 'Mochi, zōni et sekihan',
        place: 'Dans tout le pays',
        era: 'zōni au mochi au Nouvel An depuis l’époque de Heian (récit du ministère)',
        cells: {
          what: 'Riz gluant pilé, la soupe du Nouvel An où on le met, et riz gluant coloré avec des haricots',
          rice: 'Fait de riz ; mangé lors des fêtes et des célébrations',
          regional: 'Mochi carré à l’est, mochi rond à l’ouest, à peu près à Sekigahara, avec des exceptions ; le sekihan de Hokkaido est sucré',
          know: 'L’Agence des affaires de consommation a publié une mise en garde du Nouvel An sur les risques d’étouffement avec le mochi',
        },
      },
      'tofu-natto': {
        name: 'Tofu et nattō',
        place: 'Dans tout le pays ; Mito pour le nattō de petits haricots',
        era: 'deux récits traditionnels pour le nattō, non tranchés',
        cells: {
          what: 'Lait de soja pris avec un coagulant ; haricots de soja bouillis fermentés par la bactérie du nattō',
          rice: 'Le nattō se mange avec de la sauce soja ou dans une soupe ; les petits haricots de Mito, dit-on, collent au riz',
          regional: 'Mito vend des petits haricots et du nattō emballé dans la paille ; Yamagata fait une soupe de nattō ; le tera-nattō de Kyoto est une sorte salée et séchée',
          know: 'Le tofu momen est émietté et pressé ; le kinugoshi prend tel quel',
        },
      },
      tsukemono: {
        name: 'Pickles, tsukudani et furikake',
        place: 'Dans tout le pays ; pickles de Kyoto ; Tsukudajima et le village de Tsukuda à Osaka pour le tsukudani',
        era: 'tsukudani rattaché aux pêcheurs du village de Tsukuda à l’époque d’Edo (raconté de plusieurs façons)',
        cells: {
          what: 'Légumes salés, fermentés ou assaisonnés ; petits poissons et algues mijotés dans la sauce soja ; assaisonnements secs à saupoudrer',
          rice: 'Les pickles font partie du repas de base une soupe, trois plats ; le tsukudani va dans l’ochazuke et les onigiri',
          regional: 'Iburi-gakko fumé à Akita, sunki sans sel à Kiso, senmaizuke, suguki et shibazuke de Kyoto',
          know: 'L’origine du furikake n’a pu être confirmée par une source de l’industrie ou d’une entreprise',
        },
      },
      shiru: {
        name: 'Soupes locales',
        place: 'Dans tout le pays',
        era: 'le nom du kenchin-jiru raconté de deux façons (Kenchōji ou fucha ryōri)',
        cells: {
          what: 'Soupe miso au porc, kenchin-jiru, noppe, soupe de palourdes, dango-jiru',
          rice: 'La « soupe » du repas une soupe, trois plats',
          regional: 'Le kenchin-jiru diffère entre Kanagawa et Iwate ; Shimane et Shiga utilisent des palourdes différentes',
          know: 'Le noppe de Niigata est plus proche d’un plat mijoté que d’une soupe, selon le ministère de l’Agriculture',
        },
      },
    },
  },
  rice: {
    name: 'Le riz',
    axes: {
      what: 'De quoi s’agit-il',
      origin: 'Origine, selon les sources',
      regional: 'Versions régionales',
      know: 'À savoir',
    },
    lineages: {
      onigiri: {
        name: 'Onigiri (boules de riz)',
        place: 'Plusieurs récits ; ce site ne tranche pas',
        era: 'Découverte de l’époque Yayoi, tonjiki de Heian, ou vente en gare en 1885',
        cells: {
          what: 'Riz cuit pressé à la main en une forme que l’on peut tenir ; appelé onigiri ou omusubi',
          origin: 'Une boule de riz carbonisée, dite la plus ancienne (Ishikawa, il y a environ 2,000 ans) ; tonjiki de Heian ; vendu pour la première fois comme bento de gare en 1885',
          regional: 'Boules de riz de chaînes locales (viande d’ours à Toyama, viande en conserve à Okinawa, miso de pétoncle à Aomori) ; mehari-zushi à Wakayama',
          know: 'Deux jours de l’onigiri fixés par la ville de Nakanoto, le 18 juin et le 18 novembre ; aucune règle officielle sur le façonnage ou l’emballage',
        },
      },
      curry: {
        name: 'Riz au curry',
        place: 'De l’Inde via la Grande-Bretagne ; diffusé par la marine',
        era: 'Meiji (premières recettes en 1872)',
        cells: {
          what: 'Une sauce curry liée à la farine avec de la viande, des pommes de terre, des carottes et des oignons, servie avec du riz',
          origin: 'La poudre de curry britannique est arrivée avec des recettes au début de Meiji ; la marine a adopté le curry contre le béribéri',
          regional: 'Curry de la marine de Yokosuka (salade et lait, servi en ville) ; curry de Kanazawa (sauce épaisse, chou, assiette en acier) ; curry udon dans les restaurants de soba',
          know: 'Roux solide depuis 1950 ; chez CoCo Ichibanya, on choisit le riz au poids, 300 g étant la norme',
        },
      },
      mehari: {
        name: 'Mehari-zushi',
        place: 'Wakayama',
        era: '—',
        cells: {
          what: 'Une grosse boule de riz enveloppée de feuilles de takana salées',
          origin: 'Un repas emporté pour le travail en montagne et entre deux sorties de pêche',
          regional: '—',
          know: 'Deux explications du nom ; autrefois de la taille d’une balle de softball',
        },
      },
    },
  },
};
