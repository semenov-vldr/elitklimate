// ----- Мульти-сплит-система (внутрненние блоки) Dahatsu  (DHMULT) -----

const functionsDahatsuDHMULT_In = ["Компрессор GMCC Toshiba", "Golden fin", "Класс энергоэффективности A", "Уровень шума от 22dB", "Фреон R410A"];

const imagesDahatsuDHMULT_In =
  ["./assets/img/catalog/dahatsu/DHMULT/indoor/01.jpg",
  ];

const pricesDahatsuDHMULT_In = {
  "dahatsu_dhmult_07": 16700,
  "dahatsu_dhmult_09": 17400,
  "dahatsu_dhmult_12": 18900,
  "dahatsu_dhmult_18": 26700,

}

const descriptionDahatsuDHMULT_In = "Серия DHMULT DC INVERTER бренда DAHATSU 2023 года - это комплекс современных высокотехнологичных мульти-сплит систем, оснащенных наилучшими комплектующими и представленных в современных высококачественных корпусах.\n" +
  "Возможность одновременного подключения к одному внешнему блоку сразу нескольких внутренних блоков позволяет с минимальными затратами и нарушением внешнего вида зданий задать комфортный климат сразу в нескольких помещениях. Данная серия является одной из лучших вариантов обладающих высокой энергоэффективностью, низким уровнем шума, компактными размерами. Серия DHMULT может стать идеальным вариантом для установки, например, в загородном доме или многокомнатной квартире."

const DAHATSU_DHMULT_IN = [

  // ------ Dahatsu DHMULT-07 ------
  {
    article: "dahatsu-dhmult-07",
    title: "Внутренний блок Dahatsu DHMULT-07",
    type: "multi-split-systems",
    company: "Dahatsu",
    series: "DHMULT DC INVERTER (Indoor)",
    link: "dahatsu-dhmult-07.html",
    imgSrc: imagesDahatsuDHMULT_In,
    price: pricesDahatsuDHMULT_In.dahatsu_dhmult_07, // Цена
    area: 30, // На площадь, м²
    coolingCapacity: 2.05, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDHMULT_In,
    description: descriptionDahatsuDHMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 2050, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2150, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "750x285x200", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },

  // ------ Dahatsu DHMULT-09 ------
  {
    article: "dahatsu-dhmult-09",
    title: "Внутренний блок Dahatsu DHMULT-09",
    type: "multi-split-systems",
    company: "Dahatsu",
    series: "DHMULT DC INVERTER (Indoor)",
    link: "dahatsu-dhmult-09.html",
    imgSrc: imagesDahatsuDHMULT_In,
    price: pricesDahatsuDHMULT_In.dahatsu_dhmult_09, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 2.58, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDHMULT_In,
    description: descriptionDahatsuDHMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 2580, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "750x285x200", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },

  // ------ Dahatsu DHMULT-12 ------
  {
    article: "dahatsu-dhmult-12",
    title: "Внутренний блок Dahatsu DHMULT-12",
    type: "multi-split-systems",
    company: "Dahatsu",
    series: "DHMULT DC INVERTER (Indoor)",
    link: "dahatsu-dhmult-12.html",
    imgSrc: imagesDahatsuDHMULT_In,
    price: pricesDahatsuDHMULT_In.dahatsu_dhmult_12, // Цена
    area: 40, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 33, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDHMULT_In,
    description: descriptionDahatsuDHMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 3500, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3500, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 33, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "750x285x200", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },

  // ------ Dahatsu DHMULT-18 ------
  {
    article: "dahatsu-dhmult-18",
    title: "Внутренний блок Dahatsu DHMULT-18",
    type: "multi-split-systems",
    company: "Dahatsu",
    series: "DHMULT DC INVERTER (Indoor)",
    link: "dahatsu-dhmult-18.html",
    imgSrc: imagesDahatsuDHMULT_In,
    price: pricesDahatsuDHMULT_In.dahatsu_dhmult_18, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.27, // Мощность охлаждения, кВт
    noise: 35, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDHMULT_In,
    description: descriptionDahatsuDHMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 5270, // Производительность, Вт
      powerConsumption: 63, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5370, // Производительность, Вт
      powerConsumption: 63, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 35, // Уровень шума, дБ (A)
      weight: 11, // Вес, кг
      size: "900x310x225", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },


];
