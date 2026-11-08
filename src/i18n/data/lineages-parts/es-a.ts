/** lineages.ts の es（前半：キー出現順 1〜20）。bkyu … rice */
export const part = {
  bkyu: {
    name: "Cocina local B-kyū y fritos de barrio",
    axes: {
      what: "Qué es",
      roots: "De dónde viene",
      fame: "Cómo se hizo conocido",
      know: "Conviene saber",
    },
    lineages: {
      korokke: {
        name: "Korokke y fritos de barrio",
        place: "Del croquette francés, a través de revistas de la era Meiji",
        era: "Una receta impresa en 1895; korokke de patata después de h. 1907; un éxito musical h. 1918",
        cells: {
          what: "Una croqueta empanada y frita; las primeras recetas usaban gambas o carne, y la versión barata, patata",
          roots: "Los carniceros hacían un korokke a base de patata con restos y grasa; la patata danshaku se extendió hacia 1907",
          fame: "La Canción del Korokke, de hacia 1918, difundió el nombre; tercer plato favorito en una encuesta del ejército de 1922",
          know: "El korokke de Mishima (2008) se define solo por usar patatas de Mishima; el relleno y la forma los elige cada local",
        },
      },
      "senbei-jiru": {
        name: "Senbei-jiru de Hachinohe",
        place: "Hachinohe, Aomori",
        era: "Más de 200 años en la zona (Agencia de Asuntos Culturales); el nombre, de la era Heisei",
        cells: {
          what: "Una olla de soja con caldo de pollo, verduras y fideos de konjac, con senbei Nanbu desmenuzado dentro",
          roots: "El senbei Nanbu, una galleta de harina, sal y agua, se guardaba como alimento donde los veranos fríos dañaban la cosecha de arroz; tras la guerra se hizo una galleta para sopa",
          fame: "El nombre se asentó en la era Heisei, cuando los grupos de turismo de Hachinohe lo promovieron; oro en el B-1 en 2012",
          know: "Unos 200 restaurantes de Hachinohe lo sirven, según el recuento del ministerio de Agricultura",
        },
      },
      torimotsu: {
        name: "Torimotsu-ni de Kofu",
        place: "Kofu, Yamanashi",
        era: "h. 1950 (según se dice)",
        cells: {
          what: "Hígado, molleja, corazón, kinkan y himo de pollo, glaseados rápidamente a fuego fuerte con salsa de soja y azúcar",
          roots: "Se dice que se creó hacia 1950 en Okuto, un local de soba fundado en 1913",
          fame: "Oro en el B-1 en 2010",
          know: "Promovido por el personal del ayuntamiento de Kofu desde 2008; una «Comida de 100 años» (año fiscal 2024)",
        },
      },
      "toruko-rice": {
        name: "Toruko rice de Nagasaki",
        place: "Nagasaki",
        era: "—",
        cells: {
          what: "Pilaf (o curry seco), una chuleta empanada y espagueti Napolitan en un mismo plato",
          roots: "Se dice que un restaurante ideó el original",
          fame: "Lo llaman el menú infantil de los adultos; la ciudad de Nagasaki lo presenta como especialidad local",
          know: "Los locales lo varían con korokke, carbonara y más; el origen del nombre no está confirmado",
        },
      },
    },
  },
  champon: {
    name: "Champon",
    axes: {
      cooked: "Cómo se cocinan los fideos",
      base: "Sopa o salsa",
      topping: "Qué lleva",
      atTable: "En la mesa",
    },
    lineages: {
      nagasaki: {
        name: "Champon de Nagasaki",
        place: "Nagasaki (Shikairou)",
        era: "—",
        cells: {
          cooked: "Los ingredientes se saltean y luego los fideos se cuecen en la sopa, todo en un mismo wok",
          base: "Intensa, sobre todo de hueso de cerdo",
          topping: "Cerdo, hanpen, col, cebolleta, brotes de soja, calamar, gambas; almejas en verano, ostras en invierno",
          atTable: "En Kyushu, a veces se vierte salsa por encima",
        },
      },
      obama: {
        name: "Champon de Obama",
        place: "Obama, prefectura de Nagasaki",
        era: "—",
        cells: {
          cooked: "—",
          base: "Ligera, sobre todo de hueso de pollo",
          topping: "—",
          atTable: "—",
        },
      },
      "sara-udon": {
        name: "Sara udon",
        place: "Nagasaki (Shikairou)",
        era: "1899 (según se dice)",
        cells: {
          cooked: "Gruesos: fritos hasta que no queda sopa. Finos: fritos en abundante aceite",
          base: "Gruesos: absorben un poco de sopa. Finos: se vierte por encima una salsa espesada",
          topping: "Verduras, cerdo y mariscos",
          atTable: "Salsa Worcestershire de Nagasaki o vinagre",
        },
      },
    },
  },
  chicken: {
    name: "Platos de pollo",
    axes: {
      cooked: "Cómo se cocina",
      chicken: "El pollo",
      eaten: "Cómo se come",
      marker: "Por qué es conocido el lugar",
    },
    lineages: {
      karaage: {
        name: "Karaage (Nakatsu y Usa)",
        place: "Usa y Nakatsu, Oita",
        era: "locales especializados desde los años 30 de la era Shōwa (1955–64)",
        cells: {
          cooked: "Marinado (base de soja o de sal, ajo, jengibre), pasado por harina o fécula y frito al momento",
          chicken: "Muslo, pechuga o una mezcla; también cuello, molleja, cartílago, alas, piel",
          eaten: "Tal cual, caliente o frío; la marinada es distinta en cada local",
          marker: "La Asociación Japonesa del Karaage nombra a Usa cuna del local especializado; Nakatsu tiene 60 o más locales",
        },
      },
      mizutaki: {
        name: "Mizutaki de Hakata",
        place: "Ciudad de Fukuoka",
        era: "1905 (Hayashida Heizaburō, Suigetsu)",
        cells: {
          cooked: "Pollo joven con hueso cocido a fuego lento en un caldo de cabeza y huesos, en una olla de barro",
          chicken: "Piezas con hueso, hígado, corazón, molleja; la carcasa para el caldo",
          eaten: "Primero la sopa, luego el pollo, luego las verduras; zōsui o fideos para terminar",
          marker: "Sopa turbia o clara según el local; se come todo el año; se sirve en el Hakata Gion Yamakasa",
        },
      },
      toriten: {
        name: "Toriten",
        place: "Beppu, Oita",
        era: "principios de la era Shōwa (ministerio de Agricultura) o era Taishō (asociación de turismo)",
        cells: {
          cooked: "Frito en masa de tempura",
          chicken: "Muslo deshuesado, en trozos de un bocado",
          eaten: "Salsa de soja con vinagre y mostaza, o ponzu o kabosu",
          marker: "El ministerio de Agricultura lo remonta a Tōyōken, en Beppu; se come en toda Oita",
        },
      },
      senzanki: {
        name: "Senzanki",
        place: "Imabari",
        era: "—",
        cells: {
          cooked: "Frito; la Asociación Japonesa del Karaage lo cuenta como un tipo de karaage",
          chicken: "—",
          eaten: "—",
          marker: "Dos relatos de origen, ninguno por escrito",
        },
      },
    },
  },
  conbini: {
    name: "Comida de konbini",
    axes: {
      what: "Qué es",
      engineering: "La ingeniería",
      price: "Referencia de precio",
      regional: "Diferencias regionales",
    },
    lineages: {
      onigiri: {
        name: "Onigiri (bolas de arroz)",
        place: "Todo el país",
        era: "Seven-Eleven desde 1978",
        cells: {
          what: "Arroz con un relleno, envuelto en nori que se mantiene crujiente hasta que lo abres",
          engineering: "Película sellada, a prueba de humedad; el arroz se mantiene a unos 20°C, nunca refrigerado",
          price: "Unos ¥146–378 con 8% de impuestos incluidos en Seven-Eleven",
          regional: "Algunas líneas se venden solo en ciertas regiones, como la de cerdo y huevo en Okinawa",
        },
      },
      oden: {
        name: "Oden",
        place: "Todo el país",
        era: "—",
        cells: {
          what: "Pasteles de pescado, daikon, huevo y más, cocidos a fuego lento en caldo junto a la caja, sobre todo en los meses fríos",
          engineering: "FamilyMart mezcla su caldo de cuatro maneras según la región",
          price: "Unos ¥130–200 la pieza con impuestos incluidos",
          regional: "Hanpen en el este, gobō-maki en el oeste, chikuwabu en Kantō",
        },
      },
    },
  },
  dashi: {
    name: "Dashi (caldo base)",
    axes: {
      base: "Ingrediente principal",
      with: "Se combina a menudo con",
      soy: "Salsa de soja en el caldo",
      found: "Dónde probarlo",
    },
    lineages: {
      "east-west": {
        name: "Kombu (Kansai) y katsuobushi (Kantō)",
        place: "Osaka–Kioto / Edo",
        era: "se cree que los gustos regionales quedaron fijados en el periodo Edo",
        cells: {
          base: "Kansai: kombu de Hokkaido. Kantō: bonito seco (katsuobushi)",
          with: "Kansai: escamas de caballa y otros pescados, sardinas secas; bonito para el aroma",
          soy: "Kansai: clara (usukuchi). Kantō: oscura (koikuchi)",
          found: "Kitsune udon en Osaka; la cocina de Kioto; el caldo del soba y el udon de Tokio",
        },
      },
      "iriko-ago": {
        name: "Iriko (Sanuki) y ago (Kyushu)",
        place: "Kagawa / Nagasaki, Fukuoka",
        era: "las sardinas secas eran comunes en el oeste de Japón desde la era Kyōhō (1716–36), más o menos",
        cells: {
          base: "Iriko: anchoa hervida y seca. Ago: pez volador, a menudo asado",
          with: "Escamas de bonito; kombu",
          soy: "Sanuki: soja clara (una mezcla)",
          found: "Udon de Sanuki; jigoku-daki del udon de Gotō; zōni de Hakata",
        },
      },
    },
  },
  donburi: {
    name: "Donburi (cuencos de arroz)",
    axes: {
      topping: "Sobre el arroz",
      seasoning: "Cómo se sazona",
      where: "Lugar típico",
      order: "Cómo se pide",
    },
    lineages: {
      gyudon: {
        name: "Gyūdon (cuenco de ternera)",
        place: "Mercado de pescado de Nihonbashi, Tokio",
        era: "Yoshinoya 1899",
        cells: {
          topping: "Ternera y cebolla",
          seasoning: "La salsa de cocción del local (tsuyu)",
          where: "Cadenas: Yoshinoya, Sukiya, Matsuya (que lo llama gyūmeshi)",
          order: "Por tamaño, de mini a mega; más salsa, cebolla o carne como opciones con nombre",
        },
      },
      katsudon: {
        name: "Katsudon (cuenco de chuleta)",
        place: "Waseda, Tokio (según se afirma); Fukui, Komagane",
        era: "1913 / 1918 / 1921 (tres versiones)",
        cells: {
          topping: "Chuleta de cerdo frita",
          seasoning: "Casi siempre cocida en caldo y cuajada con huevo; en Fukui y Komagane, mojada en salsa",
          where: "Locales de soba, bares de comida casera, cadenas de chuletas; especialistas en katsudon con salsa en Fukui y Komagane",
          order: "En Fukui o Komagane, pide la versión con huevo por su nombre",
        },
      },
      butadon: {
        name: "Butadon de Obihiro (cuenco de cerdo)",
        place: "Obihiro, Hokkaido",
        era: "principios de la era Shōwa",
        cells: {
          topping: "Lomo o panceta de cerdo a la parrilla, puerro cortado en tiras",
          seasoning: "Tare de soja dulce, al estilo del kabayaki de anguila",
          where: "Locales especializados en Obihiro (la ciudad publica un mapa del butadon); restaurantes de toda Tokachi",
          order: "—",
        },
      },
      "niigata-tare-katsu": {
        name: "Tare-katsudon de Niigata",
        place: "Niigata",
        era: "—",
        cells: {
          topping: "Dos o más chuletas",
          seasoning: "Mojadas en tare de soja dulce, sin huevo",
          where: "—",
          order: "—",
        },
      },
    },
  },
  drinks: {
    name: "Bebidas",
    axes: {
      made: "Cómo se elabora",
      law: "Qué dicen la ley o la etiqueta",
      served: "Cómo se bebe",
      marker: "Por qué es conocida",
    },
    lineages: {
      shochu: {
        name: "Shōchū y awamori",
        place: "Okinawa, sur de Kyushu, Iki, Kuma, Amami, islas Izu",
        era: "destilación en Okinawa desde el siglo XV (dos relatos)",
        cells: {
          made: "Kōji y levadura en un mismo recipiente; destilación continua, o en alambique simple, a menudo una sola vez",
          law: "Destilación continua por debajo del 36%, destilación simple del 45% o menos; solo parte de la destilación simple puede decir honkaku",
          served: "Con agua, con agua caliente (se sugiere 6:4), con hielo, con soda; maewari, dejado reposar de antemano",
          marker: "IG para Iki, Kuma, Ryūkyū, Satsuma y Tokyo Shimazake; el shōchū de azúcar moreno, solo en Amami",
        },
      },
      "beer-highball": {
        name: "La cerveza y el highball",
        place: "Yokohama, Sapporo, Osaka; el renacer del highball, por Suntory",
        era: "desde 1870 (según el relato de cada cervecera); renacer del highball en 2008",
        cells: {
          made: "Cerveza de malta, lúpulo y agua; el happoshu lleva malta o cebada como parte; el highball es whisky con soda",
          law: "Cerveza, happoshu y «nuevo género» tributan a un mismo tipo desde octubre de 2026; la cerveza artesanal no tiene definición legal",
          served: "La regla de Suntory para el highball: jarra llena de hielo, soda fría vertida con suavidad, whisky 1 por soda 4",
          marker: "430 sitios de cerveza local en marzo de 2025 tras el cambio de licencias de 1994; el highball se extendió por los izakaya",
        },
      },
      whisky: {
        name: "Whisky japonés",
        place: "—",
        era: "—",
        cells: {
          made: "Malta, cereales y agua japonesa; destilado en Japón; tres años o más en madera en Japón",
          law: "Un estándar de la asociación de fabricantes desde 2021, no una ley; sin IG en la lista de la agencia tributaria",
          served: "—",
          marker: "Un logotipo para el estándar desde marzo de 2025",
        },
      },
    },
  },
  "food-shopping": {
    name: "Comprar comida para comer",
    axes: {
      what: "Qué es",
      buy: "Qué se compra",
      numbers: "En cifras",
      know: "Conviene saber",
    },
    lineages: {
      depachika: {
        name: "Plantas de alimentación de los grandes almacenes",
        place: "Grandes almacenes, a menudo unidos a estaciones",
        era: "mercado de estación de Hankyu en 1925; fecha de los sótanos sin confirmar",
        cells: {
          what: "La planta de alimentación de un gran almacén, normalmente en el sótano",
          buy: "Platos preparados, dulces para regalar, productos frescos, sake; parte de la charcutería se vende al peso",
          numbers: "La alimentación fue el 25.2% de las ventas de los grandes almacenes en agosto de 2026; los dulces, el 8.7%, y la charcutería, el 6.2% (sin impuestos)",
          know: "Muestras gratis en algunos mostradores; JNTO sugiere ir cerca de la hora de cierre",
        },
      },
      ekiben: {
        name: "Ekiben (bento de estación)",
        place: "Varias estaciones lo reclaman; la primera no está resuelta",
        era: "1877–1885, según relatos que compiten",
        cells: {
          what: "Una comida en caja que se vende en las estaciones, hecha para comerse fría",
          buy: "Cajas regionales en estaciones y en ferias de los grandes almacenes",
          numbers: "83 fabricantes asociados en la asociación del sector (julio de 2023); más de 400 en su apogeo, según el informe de JR West",
          know: "Hoy la mayoría de los compradores lo come en casa; ferias de ekiben en grandes almacenes desde 1953",
        },
      },
      supermarket: {
        name: "Supermercados",
        place: "Todo el país",
        era: "—",
        cells: {
          what: "Tiendas de alimentación de uso diario con una sección de comida preparada",
          buy: "Charcutería, bento, onigiri, sushi y panadería propia, contados en conjunto como sōzai",
          numbers: "El sōzai fue el 11.3% de las ventas en 2025 (panel de 270 empresas, sin impuestos)",
          know: "Las tiendas rebajan la comida para venderla antes del cierre; cómo y cuándo varía según la tienda",
        },
      },
    },
  },
  gyoza: {
    name: "Gyoza",
    axes: {
      cooked: "Cómo se cocina",
      plate: "En el plato",
      sauce: "Salsa",
      marker: "Por qué es conocida la ciudad",
    },
    lineages: {
      utsunomiya: {
        name: "Utsunomiya",
        place: "Utsunomiya, Tochigi",
        era: "posguerra; marca desde 1993",
        cells: {
          cooked: "A la plancha, fritos en abundante aceite y hervidos, a menudo al mismo precio",
          plate: "Sin un estilo fijo; un local destacado sirve seis piezas de 20 g, sobre todo de verdura",
          sauce: "Soja, vinagre y aceite de chile, mezclados al gusto",
          marker: "Primera en gasto de los hogares en gyoza durante 15 años hasta 2010; una marca de ciudad registrada y un festival en noviembre",
        },
      },
      hamamatsu: {
        name: "Hamamatsu",
        place: "Hamamatsu, Shizuoka",
        era: "1953 (la historia de un local)",
        cells: {
          cooked: "A la plancha, dispuestos en círculo alrededor de la sartén",
          plate: "Una «rueda» redonda de 20 o 25, con brotes de soja hervidos en el centro",
          sauce: "Un vinagre con soja algo dulce; aceite de chile al gusto",
          marker: "Primera en gasto de los hogares en gyoza desde 2011 en la mayoría de los años, y en el promedio de 2023–25",
        },
      },
      "kobe-miso": {
        name: "Gyoza con salsa de miso de Kobe",
        place: "Shinkaichi, Kobe",
        era: "—",
        cells: {
          cooked: "A la plancha",
          plate: "—",
          sauce: "Miso mezclado con soja, vinagre, azúcar y aceite de chile; varía según la casa",
          marker: "Incluido por el ministerio de Agricultura entre los platos locales de Hyōgo",
        },
      },
      "hakata-hitokuchi": {
        name: "Gyoza de un bocado de Hakata",
        place: "Ciudad de Fukuoka",
        era: "—",
        cells: {
          cooked: "A la plancha",
          plate: "De un bocado",
          sauce: "—",
          marker: "Pequeños dumplings para acompañar la bebida; un local de Nakasu data su origen en 1949",
        },
      },
    },
  },
  "instant-noodles": {
    name: "Fideos instantáneos",
    axes: {
      format: "El envase",
      noodle: "Los fideos",
      prep: "Cómo se preparan",
      regional: "Versiones regionales",
    },
    lineages: {
      bag: {
        name: "Fideos en bolsa (Chicken Ramen)",
        place: "Ikeda, Osaka (según Nissin)",
        era: "25 de agosto de 1958",
        cells: {
          format: "Un bloque de fideos secos en una bolsa; el primero venía ya sazonado, y un sobre de sopa aparte se hizo habitual desde 1962",
          noodle: "Fritos, o sin freír (secados con aire caliente) desde 1968; una bolsa trae unas 80 hebras de unos 65 cm de media",
          prep: "El Chicken Ramen de hoy: 400 ml de agua caliente vertida durante 3 minutos, o cocido a fuego lento durante 1 minuto",
          regional: "Bolsas regionales desde 1979 (Umakacchan para Kyushu); una serie de cuatro ciudades en 1983",
        },
      },
      cup: {
        name: "Fideos en vaso (Cup Noodle)",
        place: "Nissin, Japón",
        era: "18 de septiembre de 1971",
        cells: {
          format: "Un vaso que es envase, olla y cuenco a la vez; de poliestireno expandido o de base de papel; se vendió por primera vez con un tenedor",
          noodle: "En el Cup Noodle el bloque queda sujeto en medio del vaso para que el agua caliente circule por debajo",
          prep: "Tapa medio abierta, agua hirviendo hasta la línea interior, unos 3 minutos (Cup Noodle 280 ml); algunos vasos usan agua fría",
          regional: "Donbei se vende por separado en el este y el oeste de Japón; cuatro caldos regionales de Akai Kitsune; el soba de Okinawa en vaso se vende solo en Okinawa",
        },
      },
    },
  },
  izakaya: {
    name: "Izakaya",
    axes: {
      what: "Qué es",
      seats: "Asientos",
      money: "Cómo se paga",
      found: "Dónde se encuentra",
    },
    lineages: {
      yakitori: {
        name: "Local de yakitori",
        place: "Todo el país; «yakitori» regional en Higashimatsuyama, Muroran, Imabari",
        era: "primer local de Muroran en 1937",
        cells: {
          what: "Brochetas a la brasa, con sal o tare de soja dulce; en algunas ciudades «yakitori» es de cerdo",
          seats: "Barra, mesas o de pie, al estilo «bar de cerveza»",
          money: "Por brocheta",
          found: "En todas partes, desde bares de pie hasta barras refinadas, puestos de festivales y konbini",
        },
      },
      yokocho: {
        name: "Bar de callejón yokochō",
        place: "Tokio y otras ciudades",
        era: "—",
        cells: {
          what: "Bares diminutos en callejones estrechos, marcados con farolillos rojos o blancos y una cortina noren",
          seats: "A menudo unos diez; algunos admiten cuatro o cinco",
          money: "A menudo solo en japonés, con cartas escritas a mano",
          found: "Callejones cerca de las grandes estaciones",
        },
      },
      kakuuchi: {
        name: "Kaku-uchi (bar de pie de licorería)",
        place: "Kitakyushu (se dice que nació allí); también licorerías de Tokio",
        era: "vinculado por un grupo de Kitakyushu a la siderúrgica de Yawata de 1901",
        cells: {
          what: "Beber en una licorería; distinto de los bares de pie que funcionan como restaurantes",
          seats: "De pie, dentro de la licorería o en su entrada",
          money: "Sin precios confirmados; los vasos y el agua son cortesías, no están garantizados",
          found: "Licorerías; 94 en Kitakyushu en una encuesta de 2018",
        },
      },
      yatai: {
        name: "Yatai de Fukuoka",
        place: "Ciudad de Fukuoka",
        era: "—",
        cells: {
          what: "Puestos callejeros con licencia que sirven comida y bebida de noche",
          seats: "Unos pocos; mejor para dos o tres personas",
          money: "Sobre todo en efectivo; la mayoría no cobra cubierto, los puestos de estilo bar quizá sí",
          found: "Nakasu, Tenjin, Nagahama",
        },
      },
      snack: {
        name: "Snack bar",
        place: "Todo el país",
        era: "—",
        cells: {
          what: "Bar pequeño, a menudo llevado por una «mama», con conversación y karaoke",
          seats: "—",
          money: "Sin datos oficiales de precios; consulta antes los cargos y los límites de tiempo",
          found: "Barrios de ocio nocturno",
        },
      },
    },
  },
  kaiseki: {
    name: "Kaiseki y la comida formal",
    axes: {
      occasion: "La ocasión de la que surgió",
      structure: "Cómo se construye la comida",
      rice: "Cuándo llega el arroz",
      marker: "Qué lo distingue",
    },
    lineages: {
      tea: {
        name: "Kaiseki del té y kaiseki de banquete",
        place: "La reunión de té; el kaiseki de banquete, en restaurantes",
        era: "El kaiseki del té se completó en el periodo Momoyama (ministerio de Agricultura)",
        cells: {
          occasion: "Té: una comida ligera antes del té. Banquete: una comida para beber sake",
          structure: "Té: una bandeja, una sopa y tres platos, y luego platos para el sake. Banquete: muchos platos, con el orden que decide el cocinero",
          rice: "Té: primero, con la sopa. Banquete: hacia el final",
          marker: "El kaiseki del té termina con matcha; el de banquete es lo que los restaurantes suelen llamar hoy kaiseki",
        },
      },
      shojin: {
        name: "Shōjin ryōri",
        place: "Templos zen",
        era: "Hace unos 700 años, o en el periodo Kamakura (las fuentes difieren)",
        cells: {
          occasion: "Comida de los monjes como parte del entrenamiento; por separado, hospitalidad para los visitantes del templo",
          structure: "Monjes: una sopa, un plato. Hospitalidad: bandejas al estilo honzen (comidas de Kōya de dos o tres bandejas)",
          rice: "—",
          marker: "Sin carne ni pescado; tofu, yuba y fu; kombu y shiitake seco para el caldo",
        },
      },
      honzen: {
        name: "Honzen ryōri",
        place: "Casas de guerreros",
        era: "periodo Muromachi (ciudad de Kioto); medieval (ministerio de Agricultura)",
        cells: {
          occasion: "Comida ceremonial",
          structure: "Desde una primera bandeja (la honzen) hasta una quinta",
          rice: "—",
          marker: "El consejo de educación de la ciudad de Kioto dice que es la base de la cocina japonesa formal",
        },
      },
      bento: {
        name: "Bento",
        place: "Comida que se lleva fuera: teatro, viajes, reuniones de té",
        era: "Llegó a Kioto desde China a finales del siglo XIV (ministerio de Agricultura)",
        cells: {
          occasion: "Los intermedios del teatro, los viajes en tren, la comida simplificada de una reunión de té",
          structure: "Arroz y varios acompañamientos en una sola caja; la caja Shōkadō tiene cuatro compartimentos",
          rice: "En la caja",
          marker: "Makunouchi, del teatro; Shōkadō, de un ryōtei en 1937",
        },
      },
    },
  },
  konamono: {
    name: "Konamono (platos de masa)",
    axes: {
      batter: "Masa",
      cooked: "Cómo se cocina",
      finish: "Se termina con",
      howToEat: "Cómo se come",
    },
    lineages: {
      okonomiyaki: {
        name: "Okonomiyaki (Osaka y Hiroshima)",
        place: "Osaka / Hiroshima",
        era: "tentempiés de antes de la guerra; las formas actuales, de posguerra; el nombre en Hiroshima, h. 1950",
        cells: {
          batter: "Osaka: harina y dashi, a menudo con ñame rallado, con la col mezclada. Hiroshima: una crêpe fina de masa",
          cooked: "Osaka: mezclado y hecho a la plancha. Hiroshima: en capas; col, cerdo, fideos y huevo apilados y cocidos al vapor",
          finish: "Una salsa espesa y dulce",
          howToEat: "Osaka: a veces como acompañamiento del arroz. Hiroshima: con fideos, no con arroz, y se come con espátula o con palillos",
        },
      },
      takoyaki: {
        name: "Takoyaki y Akashi-yaki",
        place: "Osaka / Akashi",
        era: "Osaka: puestos de principios de la era Shōwa. Akashi: se dice que el comercio en locales data de 1919",
        cells: {
          batter: "Takoyaki: harina, dashi, huevo. Akashi: más huevo, además de fécula de trigo (jinko), para que quede blando",
          cooked: "Takoyaki: en una plancha de takoyaki a unos 220°C, girado de 90° en 90° hasta formar bolas. Akashi: plancha de cobre",
          finish: "Takoyaki: salsa espesa, alga verde, escamas de bonito. Akashi: nada; se moja en dashi",
          howToEat: "Takoyaki: en una bandeja con forma de barca, con un palillo. Akashi: en una tabla de madera (age-ita), 20 por ración en un local antiguo",
        },
      },
      monja: {
        name: "Monjayaki",
        place: "Tsukishima, Tokio (shitamachi)",
        era: "ministerio de Agricultura: justo después de la guerra; gremio de locales: desde mediados de la era Meiji",
        cells: {
          batter: "Harina, salsa y dashi mezclados en una masa fina; col, calamar seco, restos de tempura, camarón sakura",
          cooked: "Los ingredientes se fríen y se pican en la plancha, se empujan formando un anillo y se vierte la masa en el centro",
          finish: "Alga verde cuando se forman las burbujas; sabores de salsa, queso o curry",
          howToEat: "Se presiona sobre la plancha poco a poco con una espátula pequeña; normalmente lo cocina el comensal",
        },
      },
    },
  },
  "kyodo-ryori": {
    name: "Platos locales por región",
    axes: {
      signature: "Platos emblemáticos",
      why: "Qué lo moldeó",
      when: "Cuándo se come",
      listed: "Listas oficiales",
    },
    lineages: {
      akita: {
        name: "Akita",
        place: "Prefectura de Akita",
        era: "—",
        cells: {
          signature: "Olla de kiritanpo, olla de shottsuru, iburi-gakko",
          why: "Arroz en brochetas de los trabajadores de montaña; hatahata, un pescado que llega con los truenos del invierno",
          when: "Kiritanpo con el arroz nuevo; shottsuru en noviembre–diciembre",
          listed: "29 platos en la base de datos del ministerio de Agricultura; 10 «comidas de 100 años»",
        },
      },
      okinawa: {
        name: "Okinawa",
        place: "Prefectura de Okinawa",
        era: "—",
        cells: {
          signature: "Rafute, Okinawa soba, tibichi (manitas de cerdo)",
          why: "Una cocina del cerdo moldeada por el contacto del reino de Ryūkyū con China",
          when: "Rafute en celebraciones y ritos en memoria de los difuntos; soba todos los días",
          listed: "30 platos en la base de datos del ministerio de Agricultura; 5 «comidas de 100 años»",
        },
      },
      setouchi: {
        name: "Setouchi",
        place: "Okayama, Hiroshima, Yamaguchi, Kagawa, Ehime",
        era: "—",
        cells: {
          signature: "Bara-zushi de fiesta, dote-nabe de ostras, sashimi de fugu, kawara soba, tai-meshi",
          why: "Las rápidas mareas del Mar Interior, citadas por la calidad del pescado; la austeridad de la era Edo y el azúcar de Sanuki",
          when: "Bara-zushi en las fiestas; ostras en enero–febrero; fugu salvaje de septiembre a marzo",
          listed: "143 platos en la base de datos del ministerio de Agricultura (Okayama 28, Hiroshima 30, Yamaguchi 30, Kagawa 30, Ehime 25)",
        },
      },
      kyushu: {
        name: "Kyushu",
        place: "Fukuoka, Saga, Nagasaki, Kumamoto, Ōita, Miyazaki, Kagoshima",
        era: "—",
        cells: {
          signature: "Mizutaki, karashi renkon, toriten, hiyajiru, keihan",
          why: "Batata en suelo volcánico; pollos criados en casa; el contacto de Nagasaki con el extranjero",
          when: "Pez saltarín del fango de mayo a agosto; gu-zōni en Año Nuevo; hiyajiru en verano",
          listed: "204 platos en la base de datos del ministerio de Agricultura (Fukuoka 30, Saga 25, Nagasaki 30, Kumamoto 29, Ōita 30, Miyazaki 30, Kagoshima 30)",
        },
      },
      tohoku: {
        name: "Tohoku",
        place: "Aomori, Iwate, Miyagi, Yamagata, Fukushima",
        era: "—",
        cells: {
          signature: "Senbei-jiru, hittsumi, harako-meshi, imoni, kozuyu",
          why: "Veranos fríos que malograban el arroz, de ahí una cocina de harinas; conservar los alimentos para inviernos largos",
          when: "Harako-meshi de septiembre a noviembre; erizo de mar ichigo-ni hacia julio; imoni en otoño",
          listed: "147 platos en la base de datos del ministerio de Agricultura (Aomori 29, Iwate 30, Miyagi 29, Yamagata 29, Fukushima 30)",
        },
      },
      hokuriku: {
        name: "Hokuriku",
        place: "Niigata, Toyama, Ishikawa, Fukui",
        era: "—",
        cells: {
          signature: "Hegi soba, noppe, masu-zushi, jibu-ni, kabura-zushi, oroshi soba",
          why: "Kelp y arenque de los barcos Kitamae; la nieve y la conservación de los alimentos; la comida conmemorativa hōonkō",
          when: "Buri daikon de finales de otoño a invierno; hōonkō hacia el 28 de noviembre; cangrejo seiko hembra hasta el 31 de diciembre",
          listed: "119 platos en la base de datos del ministerio de Agricultura (Niigata 30, Toyama 30, Ishikawa 30, Fukui 29)",
        },
      },
      kinki: {
        name: "Kinki",
        place: "Kioto, Osaka, Hyogo, Nara, Wakayama, Shiga, Mie",
        era: "—",
        cells: {
          signature: "Encurtidos de Kioto, Senba-jiru, botan-nabe, chagayu, mehari-zushi, funa-zushi, Ise udon",
          why: "Una capital lejos del mar, y por eso el pescado curado; el comercio de Osaka y el kelp; caballa salada llevada tierra adentro",
          when: "Suguki de mediados de noviembre a enero; ikanago desde finales de febrero; matsuba-gani de noviembre a marzo",
          listed: "207 platos en la base de datos del ministerio de Agricultura (Kioto 30, Osaka 30, Hyogo 30, Nara 30, Wakayama 27, Shiga 30, Mie 30)",
        },
      },
      kanto: {
        name: "Kantō",
        place: "Ibaraki, Tochigi, Gunma, Saitama, Chiba, Tokio, Kanagawa",
        era: "—",
        cells: {
          signature: "Ankō no tomozu, shimotsukare, okirikomi, futomaki-zushi, Fukagawa-meshi, sanmāmen",
          why: "Trigo en tierras altas de ceniza volcánica; soja de Noda y Chōshi; dar de comer a Edo",
          when: "Rape de noviembre a marzo; shimotsukare en el primer Día del Caballo del segundo mes lunar; pescaditos blancos crudos desde el 11 de marzo",
          listed: "197 platos en la base de datos del ministerio de Agricultura (Ibaraki 30, Tochigi 30, Gunma 27, Saitama 29, Chiba 28, Tokio 30, Kanagawa 23)",
        },
      },
      chubu: {
        name: "Chūbu",
        place: "Yamanashi, Nagano, Gifu, Shizuoka, Aichi",
        era: "—",
        cells: {
          signature: "Hōtō, oyaki, gohei-mochi, miso en hoja de hoba, oden de Shizuoka, miso-nikomi udon",
          why: "Tierra de montaña poco apta para el arroz, de ahí una cocina de harinas; miso de soja; comida de mar llevada tierra adentro",
          when: "Soba nuevo de mediados de octubre a principios de noviembre; camarón sakura en primavera y otoño; hoba-zushi de mayo a agosto",
          listed: "147 platos en la base de datos del ministerio de Agricultura (Yamanashi 30, Nagano 29, Gifu 30, Shizuoka 28, Aichi 30)",
        },
      },
      hokkaido: {
        name: "Hokkaido",
        place: "Hokkaido",
        era: "—",
        cells: {
          signature: "Ishikari-nabe, sanpei-jiru, chanchan-yaki de salmón, ruibe, butadon, zangi",
          why: "Salmón y arenque; la comida ainu y los colonos de Honshu, tal como lo plantea el ministerio de Agricultura",
          when: "Ishikari-nabe y chanchan-yaki con el salmón; izushi en conserva a finales de otoño para Año Nuevo",
          listed: "27 platos en la base de datos del ministerio de Agricultura; 15 «comidas de 100 años»",
        },
      },
      sanin: {
        name: "San'in",
        place: "Tottori, Shimane",
        era: "—",
        cells: {
          signature: "Tōfu chikuwa, sopa de miso con oyagani, Izumo soba, shijimi-jiru, uzume-meshi",
          why: "Tofu donde el pescado escaseaba; cangrejo y caballa del Mar de Japón; el agua salobre del lago Shinji",
          when: "Oyagani de noviembre a diciembre; matsuba-gani de noviembre a marzo; rakkyō cosechado de finales de mayo a mediados de junio",
          listed: "55 platos en la base de datos del ministerio de Agricultura (Tottori 27, Shimane 28)",
        },
      },
      shikoku: {
        name: "Shikoku (Tokushima y Kochi)",
        place: "Tokushima, Kochi",
        era: "—",
        cells: {
          signature: "Iya soba, Handa sōmen, dekomawashi, katsuo tataki, sawachi, inaka-zushi",
          why: "Montañas donde el arroz crecía mal, de ahí el alforfón; el bonito de la corriente Kuroshio; los banquetes okyaku de Kochi",
          when: "Handa sōmen elaborado de noviembre a marzo; el bonito, mejor en otoño; sawachi para el okyaku",
          listed: "60 platos en la base de datos del ministerio de Agricultura (Tokushima 30, Kochi 30)",
        },
      },
    },
  },
  market: {
    name: "Mercados y cuencos de marisco",
    axes: {
      what: "Qué tipo de mercado",
      who: "Quién puede comprar",
      hours: "Cuándo",
      bowl: "El cuenco de marisco",
    },
    lineages: {
      toyosu: {
        name: "Toyosu (Tokio)",
        place: "Kōtō, Tokio",
        era: "Tsukiji 1935; Toyosu desde el 11 de octubre de 2018",
        cells: {
          what: "El mercado mayorista central de Tokio; el pescado se subasta y se vende a mayoristas intermediarios",
          who: "Dentro: solo compradores del sector; los visitantes, en la galería y en la zona de restaurantes. Al lado: Senkyaku Banrai, abierto a todos",
          hours: "Recorrido de visitantes de 05:00 a 17:00; cerrado domingos, festivos y días de cierre del mercado. Senkyaku Banrai abre en los días de cierre del mercado",
          bowl: "Se sirve dentro y al lado; Tokio indica que el complejo exterior cocina con pescado elegido por los mayoristas",
        },
      },
      "omicho-hakodate": {
        name: "Ōmichō (Kanazawa) y el mercado matinal de Hakodate",
        place: "Kanazawa / Hakodate",
        era: "Ōmichō, unos 300 años; Hakodate, desde 1945",
        cells: {
          what: "Ōmichō: la cocina de una ciudad, con unos 170 locales. Hakodate: unos 250 locales, nacido de agricultores que vendían junto a la estación",
          who: "Cualquiera; ambos se describen como mercados donde compran los vecinos",
          hours: "Hakodate abre a las 05:00 (mayo–dic) o a las 06:00 (ene–abr) hasta pasadas las 14:00; Ōmichō, local por local",
          bowl: "Se nombran por número y elección (tres ingredientes a tu elección, diez variedades, la selección del chef), y algunos cuencos a precio de mercado (jika)",
        },
      },
    },
  },
  meat: {
    name: "Carnes más allá del wagyu",
    axes: {
      meat: "La carne",
      eaten: "Cómo se come",
      rules: "Normas y estándares",
      marker: "Conviene saber",
    },
    lineages: {
      pork: {
        name: "Cerdo: kurobuta, butadon, kakuni",
        place: "Kagoshima, Obihiro, Nagasaki",
        era: "marca kurobuta desde 1955–64; butadon, a principios de la era Shōwa",
        cells: {
          meat: "Cerdo negro Berkshire; se dice que existen más de 400 marcas de cerdo, sin un estándar común",
          eaten: "Obihiro: cerdo a la parrilla con un tare al estilo de la anguila sobre arroz. Nagasaki: panceta con piel cocida a fuego lento en dulce",
          rules: "Kurobuta de Kagoshima: solo Berkshire, criado aparte, alimentado con un 10–20% de batata durante 60 días o más antes del envío",
          marker: "El cerdo negro de Kagoshima se enviaba vivo a Tokio en 1955–64 y se convirtió en la primera marca de cerdo de Japón",
        },
      },
      jingisukan: {
        name: "Jingisukan (cordero y carnero a la parrilla)",
        place: "Hokkaido",
        era: "ideado a principios de la era Shōwa; se extendió tras la guerra (los relatos difieren)",
        cells: {
          meat: "Cordero (de menos de un año) o carnero (de dos años o más); la carne nacional fue el 0.5% del suministro en el año fiscal 2022",
          eaten: "A la parrilla en una plancha abombada, con las verduras alrededor del borde recogiendo los jugos",
          rules: "Dos estilos: marinado antes de asar (Takikawa) o mojado después (Sapporo)",
          marker: "Nació en Hokkaido, no en Mongolia, dice el ministerio de Agricultura; el 58% de las ovejas de Japón está en Hokkaido",
        },
      },
      basashi: {
        name: "Basashi (caballo crudo)",
        place: "Kumamoto, Yamanashi, Aizu (Fukushima)",
        era: "restaurantes de Kumamoto desde 1955–64",
        cells: {
          meat: "Caballo crudo, llamado sakura-niku; se discute el motivo del nombre",
          eaten: "Kumamoto: soja dulce con cebolla, jengibre y ajo. Aizu: soja con karashi-miso",
          rules: "La carne de caballo de Kumamoto se congela siempre antes de su distribución; las etiquetas distinguen a los nacidos en Kumamoto de los potros importados criados allí",
          marker: "En Aizu, «sashimi» puede significar caballo; se come sobre todo en casa",
        },
      },
      gibier: {
        name: "Ciervo y jabalí (gibier)",
        place: "Todo el país",
        era: "—",
        cells: {
          meat: "Ciervo y jabalí salvajes, cazados en parte por los daños a los cultivos",
          eaten: "Bien cocinada; nunca cruda ni poco hecha",
          rules: "75°C en el centro durante al menos un minuto; los locales deben comprar a instalaciones de procesamiento de carne con licencia",
          marker: "Un sistema nacional de certificación para las instalaciones de procesamiento",
        },
      },
      horumon: {
        name: "Horumon y motsu (menudencias)",
        place: "Hakata, Osaka, Kokura, Sayo (Hyōgo)",
        era: "posguerra (motsunabe de Hakata; horumon yaki-udon de Sayo)",
        cells: {
          meat: "Menudencias de vacuno y de cerdo, oficialmente «subproductos ganaderos»; horumon y motsu son términos del oficio",
          eaten: "Yakiniku, estofado de motsu, motsunabe de Hakata (soja, miso o sal), brochetas de cerdo en Kantō, chiritori-nabe en Osaka",
          rules: "Hígado de vacuno crudo prohibido desde julio de 2012; carne y menudencias de cerdo crudas, desde el 12 de junio de 2015",
          marker: "Kansai llama al intestino delgado maruchō (entero) o kotecchan (abierto); dos relatos sobre el nombre",
        },
      },
    },
  },
  nabe: {
    name: "Sopas y ollas calientes",
    axes: {
      stock: "Caldo",
      seasoning: "Sazonado con",
      contents: "En la olla",
      marker: "Por qué es conocido el lugar",
    },
    lineages: {
      miso: {
        name: "Sopa de miso y misos regionales",
        place: "Todo el país; miso de soja en Aichi, Gifu y Mie",
        era: "IG del miso Hatcho, 2017",
        cells: {
          stock: "Dashi de kombu, sardinas secas y similares",
          seasoning: "Miso de arroz, de cebada o de soja, según la región",
          contents: "Varía según la casa y la región; en Nagano, un cuenco lleno de ingredientes",
          marker: "Miso de soja de Aichi, miso blanco de Kioto para Año Nuevo, miso de arroz de Shinshu, miso de cebada en Ehime y Kagoshima",
        },
      },
      oden: {
        name: "Oden",
        place: "Del tofu dengaku; oden cocido a fuego lento en Edo (Tokio)",
        era: "Dengaku a la parrilla en Edo; oden cocido a fuego lento desde la época moderna",
        cells: {
          stock: "Katsuobushi y kombu en Tokio; caldo ligero en Osaka; caldo de tendón de ternera en Shizuoka",
          seasoning: "Soja oscura en Tokio, soja clara o dashi blanco en Kioto, salsa de miso en Aichi",
          contents: "Chikuwabu en Tokio; hanpen negro en Shizuoka; kurumafu y cangrejo de temporada en Kanazawa",
          marker: "Mostaza en Tokio, miso en Aichi, alga verde y polvo de pescado en Shizuoka, jengibre con soja en Himeji",
        },
      },
      chanko: {
        name: "Chanko nabe",
        place: "Sumida, Tokio",
        era: "—",
        cells: {
          stock: "Pollo",
          seasoning: "Salsa de soja o miso",
          contents: "Tradicionalmente sin carne de cuatro patas, como la de vacuno o la de cerdo",
          marker: "En el sumo, chanko es todo lo que cocina un luchador; hay locales llevados por antiguos luchadores por todo Tokio",
        },
      },
      ishikari: {
        name: "Ishikari nabe",
        place: "Ishikari, Hokkaido",
        era: "—",
        cells: {
          stock: "Kombu",
          seasoning: "Miso, terminado con sansho",
          contents: "Trozos y recortes de salmón; algunas casas añaden huevas de salmón o mantequilla",
          marker: "Un plato de pescadores que se difundió cuando llegaron visitantes a ver la pesca con red de arrastre de playa",
        },
      },
      botan: {
        name: "Botan nabe",
        place: "Tamba-Sasayama",
        era: "—",
        cells: {
          stock: "—",
          seasoning: "Sobre todo una mezcla de miso rojo y blanco, distinta en cada local",
          contents: "Jabalí; sansho; udon o gachas de arroz para terminar",
          marker: "La ciudad dice que el nombre es anterior al emplatado en forma de peonía",
        },
      },
    },
  },
  ramen: {
    name: "Ramen",
    axes: {
      soup: "Sopa",
      noodle: "Fideos",
      topping: "Por encima",
      howToEat: "Cómo se come",
    },
    lineages: {
      hakata: {
        name: "Hakata (Fukuoka)",
        place: "Ciudad de Fukuoka",
        era: "años 1940–50",
        cells: {
          soup: "Huesos de cerdo hervidos a fuego fuerte hasta ponerse blancos; sazonado con sal o soja clara",
          noodle: "Extrafinos, rectos, con poca agua (24–28%)",
          topping: "Cebolleta, cerdo, hongo oreja de madera; jengibre, sésamo y ajo en la barra",
          howToEat: "Se elige la dureza de los fideos; se pide kaedama (fideos extra, de pago) para echarlos en la sopa que queda",
        },
      },
      kurume: {
        name: "Kurume",
        place: "Kurume, Fukuoka",
        era: "1937 / 1947",
        cells: {
          soup: "Hueso de cerdo más fuerte y espeso, cocido en un caldero; yobimodoshi (la olla que nunca se vacía)",
          noodle: "Rectos, firmes, algo más gruesos que los de Hakata",
          topping: "Cerdo, cebolleta, a menudo verduras encurtidas",
          howToEat: "Casi nunca hay kaedama",
        },
      },
      kumamoto: {
        name: "Kumamoto",
        place: "Tamana / Kumamoto",
        era: "años 1950",
        cells: {
          soup: "Hueso de cerdo con pollo; terminado con aceite de ajo negro (mā-yu)",
          noodle: "Medianos, más firmes y gruesos que los de Hakata",
          topping: "Láminas de ajo frito, cerdo, hongo oreja de madera, huevo",
          howToEat: "El ajo va cocinado, no crudo",
        },
      },
      kagoshima: {
        name: "Kagoshima",
        place: "Ciudad de Kagoshima",
        era: "1947",
        cells: {
          soup: "Cerdo con pollo y verduras; más suave",
          noodle: "Blandos, pálidos, hechos sin agua alcalina",
          topping: "Cebolleta chamuscada, cerdo",
          howToEat: "En la mayoría de los locales, rábano encurtido gratis y una tetera",
        },
      },
      kitakata: {
        name: "Kitakata",
        place: "Kitakata, Fukushima",
        era: "mediados de los años 1920",
        cells: {
          soup: "Soja clara sobre caldo de cerdo; también versiones con sal y con grasa de lomo",
          noodle: "Planos, gruesos, ondulados, con mucha agua (jukusei takasui)",
          topping: "Panceta cocida a fuego lento, a veces cubriendo el cuenco (niku soba)",
          howToEat: "Desde las 7 de la mañana: asa-rā, ramen matinal",
        },
      },
      shirakawa: {
        name: "Shirakawa",
        place: "Shirakawa, Fukushima",
        era: "1921",
        cells: {
          soup: "Soja clara sobre pollo y cerdo",
          noodle: "Ondulados, cortados a mano con la técnica de hacer soba",
          topping: "Cerdo, brotes de bambú, naruto",
          howToEat: "—",
        },
      },
      yonezawa: {
        name: "Yonezawa",
        place: "Yonezawa, Yamagata",
        era: "principios del siglo XX",
        cells: {
          soup: "Soja clara sobre pollo y sardina seca",
          noodle: "Finos, ondulados, con mucha agua, amasados a mano tras reposar",
          topping: "Cerdo, brotes de bambú, cebolleta",
          howToEat: "—",
        },
      },
      sapporo: {
        name: "Sapporo",
        place: "Sapporo",
        era: "1954 / 1958",
        cells: {
          soup: "Miso; las verduras y la carne picada se fríen en manteca antes de añadir el caldo",
          noodle: "Medio gruesos, muy ondulados, con huevo, madurados (tipo Nishiyama, 1955)",
          topping: "Brotes de soja, cebolla, cerdo; mantequilla y maíz opcionales, no estándar",
          howToEat: "—",
        },
      },
      hakodate: {
        name: "Hakodate",
        place: "Hakodate",
        era: "anuncio de 1884",
        cells: {
          soup: "Sal clara sobre cerdo, pollo, kelp y vieira",
          noodle: "Finos, rectos",
          topping: "Cerdo, brotes de bambú, una rodaja de gluten de trigo (fu)",
          howToEat: "—",
        },
      },
      asahikawa: {
        name: "Asahikawa",
        place: "Asahikawa",
        era: "—",
        cells: {
          soup: "Soja sobre caldo de cerdo y mariscos",
          noodle: "Medio finos, ondulados",
          topping: "Cerdo, brotes de bambú, cebolleta",
          howToEat: "—",
        },
      },
      iekei: {
        name: "Iekei de Yokohama",
        place: "Yokohama",
        era: "1974",
        cells: {
          soup: "Hueso de cerdo y soja, con aceite de pollo",
          noodle: "Gruesos, cortos, rectos",
          topping: "Espinacas, tres hojas de nori, cerdo",
          howToEat: "Se elige la intensidad, el aceite y la dureza; se envuelve el arroz en el nori empapado de sopa",
        },
      },
      "tokyo-shoyu": {
        name: "Soja de Tokio (chūka soba)",
        place: "Tokio",
        era: "1910 / Ogikubo, posguerra",
        cells: {
          soup: "Soja sobre pollo, cerdo y sardina seca",
          noodle: "Medianos, ondulados",
          topping: "Cerdo, brotes de bambú, naruto, espinacas, nori",
          howToEat: "—",
        },
      },
      onomichi: {
        name: "Onomichi",
        place: "Onomichi, Hiroshima",
        era: "1928 / principios de la era Shōwa / h. 1947 (los relatos difieren)",
        cells: {
          soup: "Soja sobre caldo de pollo con pescado pequeño, cubierto con grasa de lomo de cerdo picada; varía según el local",
          noodle: "Planos, medio finos, rectos",
          topping: "Cerdo, brotes de bambú, cebolleta",
          howToEat: "Cuencos pequeños, así que los vecinos sugieren probar varios locales; a menudo se vende como chūka soba",
        },
      },
      tokushima: {
        name: "Tokushima",
        place: "Tokushima (Komatsushima, según un relato)",
        era: "h. 1949 (puestos de posguerra)",
        cells: {
          soup: "Tres tipos de sopa de hueso de cerdo; la marrón (soja oscura) es la más común, junto a la blanca y la amarilla",
          noodle: "Medio finos, rectos, algo blandos",
          topping: "Panceta cocida en dulce; un huevo crudo en muchos locales",
          howToEat: "Se come con un cuenco de arroz",
        },
      },
      wakayama: {
        name: "Wakayama",
        place: "Wakayama",
        era: "—",
        cells: {
          soup: "Hueso de cerdo y soja",
          noodle: "Finos, rectos",
          topping: "Cerdo, kamaboko, cebolleta",
          howToEat: "Sushi prensado de caballa y huevos duros en la mesa, que se cuentan al final",
        },
      },
      "toyama-black": {
        name: "Toyama negro",
        place: "Toyama",
        era: "—",
        cells: {
          soup: "Soja muy oscura y salada, con pimienta negra gruesa",
          noodle: "Gruesos, firmes",
          topping: "Cerdo, brotes de bambú, mucha cebolleta",
          howToEat: "Pensado para acompañar el arroz",
        },
      },
      jiro: {
        name: "Estilo Jirō",
        place: "Tokio (Mita)",
        era: "—",
        cells: {
          soup: "Hueso de cerdo y soja, cargado de grasa de lomo",
          noodle: "Muy gruesos, masticables, ración grande",
          topping: "Una montaña de brotes de soja y col; ajo si lo pides",
          howToEat: "Pide los extras cuando te pregunten; una cultura con sus propias reglas",
        },
      },
      tsukemen: {
        name: "Tsukemen (para mojar)",
        place: "Nakano, Tokio (un relato); Higashi-Ikebukuro desde 1961",
        era: "1955 (un relato)",
        cells: {
          soup: "Se sirve aparte para mojar; el primero fue sopa de ramen con más soja en una taza de té",
          noodle: "Los fideos chūka soba se sirven aparte; algunos locales venden varias cantidades al mismo precio",
          topping: "—",
          howToEat: "Se mojan los fideos en la sopa, como un zaru soba de estilo chino",
        },
      },
      "hiyashi-chuka": {
        name: "Hiyashi chūka (frío)",
        place: "Sendai / Tokio (dos versiones)",
        era: "años 1930",
        cells: {
          soup: "Se sirve frío; el local de Sendai lo llama «ryanbanmen»",
          noodle: "Enfriados bajo el agua corriente",
          topping: "Yōsukō Saikan, en Tokio, sirve una versión de cinco colores",
          howToEat: "Un plato de verano",
        },
      },
    },
  },
  "rice-sides": {
    name: "El arroz y lo que lo acompaña",
    axes: {
      what: "Qué es",
      rice: "Cómo se combina con el arroz",
      regional: "Dónde cambia",
      know: "Conviene saber",
    },
    lineages: {
      takikomi: {
        name: "Arroz cocido con ingredientes",
        place: "Todo el país",
        era: "se dice que empezó como una forma de hacer rendir el arroz (relato de Nara)",
        cells: {
          what: "Arroz cocido junto con verduras, pescado o castañas, o arroz con un topping vertido por encima",
          rice: "Dentro; el arroz es el plato",
          regional: "El tai-meshi de Ehime se cuece junto con el arroz en Tōyo y se vierte en crudo por encima en Nanyo; Nara llama iro-gohan a las versiones sazonadas con soja",
          know: "El origen del kamameshi como plato no está resuelto en ninguna fuente que he podido usar",
        },
      },
      mochi: {
        name: "Mochi, zōni y sekihan",
        place: "Todo el país",
        era: "zōni con mochi en Año Nuevo desde el periodo Heian (relato del ministerio)",
        cells: {
          what: "Arroz glutinoso machacado, la sopa de Año Nuevo en la que se echa, y arroz glutinoso coloreado con judías",
          rice: "Hecho de arroz; se come en festivales y celebraciones",
          regional: "Mochi cuadrado en el este, mochi redondo en el oeste, más o menos a la altura de Sekigahara, con excepciones; el sekihan de Hokkaido es dulce",
          know: "La Agencia de Asuntos del Consumidor ha emitido un aviso de Año Nuevo sobre el riesgo de atragantarse con mochi",
        },
      },
      "tofu-natto": {
        name: "Tofu y nattō",
        place: "Todo el país; Mito, por el nattō de judías pequeñas",
        era: "dos historias tradicionales sobre el nattō, sin resolver",
        cells: {
          what: "Leche de soja cuajada con un coagulante; soja hervida fermentada con bacterias del nattō",
          rice: "El nattō se come con salsa de soja o en sopa; se dice que las judías pequeñas de Mito se pegan al arroz",
          regional: "Mito vende nattō de judías pequeñas y nattō envuelto en paja; Yamagata prepara sopa de nattō; el tera-nattō de Kioto es una variedad salada y seca",
          know: "El tofu momen se desmenuza y se prensa; el kinugoshi cuaja tal cual",
        },
      },
      tsukemono: {
        name: "Encurtidos, tsukudani y furikake",
        place: "Todo el país; encurtidos de Kioto; Tsukudajima y la aldea de Tsukuda en Osaka, para el tsukudani",
        era: "tsukudani vinculado a pescadores de la aldea de Tsukuda en el periodo Edo (se cuenta de varias maneras)",
        cells: {
          what: "Verduras en salazón, fermentadas o sazonadas; pescado pequeño y algas cocidos a fuego lento en soja; condimentos secos para espolvorear",
          rice: "Los encurtidos forman parte de la comida básica de una sopa y tres platos; el tsukudani va en el ochazuke y en el onigiri",
          regional: "Iburi-gakko ahumado en Akita, sunki sin sal en Kiso, y senmaizuke, suguki y shibazuke de Kioto",
          know: "No se pudo confirmar el origen del furikake en ninguna fuente del sector ni de empresas",
        },
      },
      shiru: {
        name: "Sopas locales",
        place: "Todo el país",
        era: "el nombre del kenchin-jiru se cuenta de dos maneras (Kenchōji o fucha ryōri)",
        cells: {
          what: "Sopa de miso con cerdo, kenchin-jiru, noppe, sopa de almejas, dango-jiru",
          rice: "La «una sopa» de la comida de una sopa y tres platos",
          regional: "El kenchin-jiru difiere entre Kanagawa e Iwate; Shimane y Shiga usan almejas distintas",
          know: "El noppe de Niigata se parece más a un guiso que a una sopa, según el ministerio de Agricultura",
        },
      },
    },
  },
  rice: {
    name: "Arroz",
    axes: {
      what: "Qué es",
      origin: "Origen, según lo cuentan las fuentes",
      regional: "Versiones regionales",
      know: "Conviene saber",
    },
    lineages: {
      onigiri: {
        name: "Onigiri (bolas de arroz)",
        place: "Varios relatos; este sitio no elige uno",
        era: "hallazgo del periodo Yayoi, tonjiki del periodo Heian o venta en estaciones en 1885",
        cells: {
          what: "Arroz cocido prensado a mano en una forma que se pueda sostener; se llama onigiri u omusubi",
          origin: "Un bulto de arroz carbonizado, considerado el más antiguo (Ishikawa, hace unos 2,000 años); el tonjiki del periodo Heian; se vendió por primera vez como bento de estación en 1885",
          regional: "Onigiri de cadenas locales (carne de oso en Toyama, luncheon meat en Okinawa, miso de vieira en Aomori); mehari-zushi en Wakayama",
          know: "Dos días del onigiri fijados por la ciudad de Nakanoto, el 18 de junio y el 18 de noviembre; no hay norma oficial sobre la forma ni el envoltorio",
        },
      },
      curry: {
        name: "Arroz con curry",
        place: "De la India vía Gran Bretaña; se difundió a través de la marina",
        era: "era Meiji (primeras recetas en 1872)",
        cells: {
          what: "Una salsa de curry espesada con harina, con carne, patata, zanahoria y cebolla, servida con arroz",
          origin: "El curry en polvo británico llegó con sus recetas a principios de la era Meiji; la marina adoptó el curry contra el beriberi",
          regional: "Curry de la marina de Yokosuka (ensalada y leche, servido en la ciudad); curry de Kanazawa (salsa espesa, col, plato de acero); curry udon en los locales de soba",
          know: "Roux sólido desde 1950; en CoCo Ichibanya eliges el arroz por peso, con 300 g como estándar",
        },
      },
      mehari: {
        name: "Mehari-zushi",
        place: "Wakayama",
        era: "—",
        cells: {
          what: "Una bola de arroz grande envuelta en hojas de takana en salazón",
          origin: "Comida para llevar en el trabajo de montaña y entre salidas de pesca",
          regional: "—",
          know: "Dos explicaciones del nombre; antes era del tamaño de una pelota de softbol",
        },
      },
    },
  },
};
