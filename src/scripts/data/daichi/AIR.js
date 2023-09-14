// ----- DAICHI AIR (AIR-AVQ1/AIR-FV1) -----

const functionsDaichiAir = ["Автоматический режим", "Функция «Комфортный сон»", "Многоступенчатое регулирование скорости вентилятора", "Угольный фильтр CARBON",
                          "Противоплесневая обработка", "Самодиагностика", "Бесшумный режим работы", "Коррозионная стойкость", "Фильтр с ионами серебра",
                            "Wi-Fi, онлайн управление (опция)", "Информационный LED дисплей"];

const imagesDaichiAir =
  ["./assets/img/catalog/daichi/air/01.jpg",
    "./assets/img/catalog/daichi/air/02.jpg",
    "./assets/img/catalog/daichi/air/03.jpg",
    "./assets/img/catalog/daichi/air/04.jpg"
  ];

const descriptionDaichiAir = "Ультрафиолетовая лампа. Встроенная УФ-лампа предотвращает развитие бактерий на узлах внутреннего блока и обеззараживает воздух. Биполярный ионизатор. Циклически генерирует ионы, создавая ионизированную среду в помещении, благотворно влияющую на самочувствие. Эффект бриза - запатентованная технология для достижения эффекта бриза благодаря оригинальной перфорированной форме вертикальных жалюзи. Протяженный воздушный поток по принципу эффекта Коанда. Широкие горизонтальные жалюзи создают воздушный поток, направленный вдоль потолка в режиме охлаждения или вдоль пола в режиме нагрева. Wi-Fi, удаленное онлайн-управление через «облако Даичи» (опция)."

const pricesDaichiAir = {
  "daichi_AIR20AVQ1": 22500,
  "daichi_AIR25AVQ1": 23900,
}

const DAICHI_AIR = [

  // ------ Daichi AIR20AVQ1/AIR20FV1 ------
  {
    article: "daichi_air20avq1",
    title: "Daichi AIR AIR20AVQ1/AIR20FV1",
    type: "split-system",
    company: "Daichi",
    series: "Air",
    link: "daichi-air20avq1.html",
    imgSrc: imagesDaichiAir,
    price: pricesDaichiAir.daichi_AIR20AVQ1, // Цена
    area: 20 , // На площадь, м²
    coolingCapacity: 2.2, // Мощность охлаждения, кВт
    noise: 25, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDaichiAir,
    description: descriptionDaichiAir, // Описание

    // Охлаждение
    cooling: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 690, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 610, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 5, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 25, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "790x192x275", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 48, // Уровень шума, дБ (A)
      weight: 20, // Вес, кг
      size: "712x276x459", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Daichi AIR20AVQ1/AIR20FV1 ------
  {
    article: "daichi_air25avq1",
    title: "Daichi AIR AIR25AVQ1/AIR25FV1",
    type: "split-system",
    company: "Daichi",
    series: "Air",
    link: "daichi-air25avq1.html",
    imgSrc: imagesDaichiAir,
    price: pricesDaichiAir.daichi_AIR25AVQ1, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 25, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDaichiAir,
    description: descriptionDaichiAir, // Описание

    // Охлаждение
    cooling: {
      performance: 2640, // Производительность, Вт
      powerConsumption: 820, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2780, // Производительность, Вт
      powerConsumption: 770, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 5, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 25, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "790x192x275", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 22, // Вес, кг
      size: "712x276x459", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },


];
