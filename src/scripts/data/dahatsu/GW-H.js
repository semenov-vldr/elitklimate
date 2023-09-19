// ----- Dahatsu CLASSIC DC INVERTER (GW-H) -----

const functionsDahatsuClassicInverter = ["Компрессор GMCC Toshiba", "Класс энергоэффективности A",
  "Автоматическое качание заслонок", "Режим комфортного сна", "Зеленый фильтр высокой плотности",
  "Компактный дизайн", "Режим Turbo производительности", "Самоочистка внутреннего блока",
  "Golden fin", "Автоматический перезапуск", "Запоминание положения жалюзи", "Защитная крышка патрубов"];

const imagesDahatsuClassicInverter =
  ["./assets/img/catalog/dahatsu/GW-H/01.png",
    "./assets/img/catalog/dahatsu/GW-H/02.png",
    "./assets/img/catalog/dahatsu/GW-H/03.png",
    "./assets/img/catalog/dahatsu/GW-H/04.png"
  ];

const pricesDahatsuClassicInverter = {
  "dahatsu_gw_07h": 34600,
  "dahatsu_gw_09h": 37300,
  "dahatsu_gw_12h": 43900,
  "dahatsu_gw_18h": 69800,
  "dahatsu_gw_24h": 83600,

}

const descriptionDahatsuClassicInverter = "Сплит-системы Dahatsu серии Classic DC Inverter - надежная классическая инверторная модель, выполненная из высококачественных материалов. Благодаря компактному дизайну, режиму комфортного сна и низкому уровню шума данную модель можно установить в любом помещении, даже в детской комнате. Модель снабжена всеми стандартными функциями сплит-системы: теплообменник Golden fin, скрытый дисплей, два направления воздушного потока, режим ECO. Дизайн в классическом стиле станет украшением любого интерьера, а новейшие технологии позволят наслаждаться идеальным микроклиматом в любое время года."

const DAHATSU_GW_H = [

  // ------ Dahatsu GW-07H ------
  {
    article: "dahatsu-gw-07h",
    title: "Dahatsu GW-07H",
    type: "split-system",
    company: "Dahatsu",
    series: "Classic DC Inverter",
    link: "dahatsu-gw-07h.html",
    imgSrc: imagesDahatsuClassicInverter,
    price: pricesDahatsuClassicInverter.dahatsu_gw_07h, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.1, // Мощность охлаждения, кВт
    noise: 20, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuClassicInverter,
    description: descriptionDahatsuClassicInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2100, // Производительность, Вт
      powerConsumption: 655, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 610, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 9, // Макс. длина трассы, м
    maxHeightDifference: 5, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 20, // Уровень шума, дБ (A)
      weight: 6.5, // Вес, кг
      size: "700x198x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 21.5, // Вес, кг
      size: "660x240x530", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu GW-09H ------
  {
    article: "dahatsu-gw-09h",
    title: "Dahatsu GW-09H",
    type: "split-system",
    company: "Dahatsu",
    series: "Classic DC Inverter",
    link: "dahatsu-gw-09h.html",
    imgSrc: imagesDahatsuClassicInverter,
    price: pricesDahatsuClassicInverter.dahatsu_gw_09h, // Цена
    area: 28, // На площадь, м²
    coolingCapacity: 2.5, // Мощность охлаждения, кВт
    noise: 20, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuClassicInverter,
    description: descriptionDahatsuClassicInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2550, // Производительность, Вт
      powerConsumption: 795, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2650, // Производительность, Вт
      powerConsumption: 730, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 10, // Макс. длина трассы, м
    maxHeightDifference: 5, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 20, // Уровень шума, дБ (A)
      weight: 6.7, // Вес, кг
      size: "700x198x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 21.5, // Вес, кг
      size: "630x240x530", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu GW-12H ------
  {
    article: "dahatsu-gw-12h",
    title: "Dahatsu GW-12H",
    type: "split-system",
    company: "Dahatsu",
    series: "Classic DC Inverter",
    link: "dahatsu-gw-12h.html",
    imgSrc: imagesDahatsuClassicInverter,
    price: pricesDahatsuClassicInverter.dahatsu_gw_12h, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.4, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuClassicInverter,
    description: descriptionDahatsuClassicInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 3450, // Производительность, Вт
      powerConsumption: 1075, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3600, // Производительность, Вт
      powerConsumption: 1000, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 10, // Макс. длина трассы, м
    maxHeightDifference: 5, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7, // Вес, кг
      size: "805x199x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 23, // Вес, кг
      size: "660x240x530", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu GW-18H ------
  {
    article: "dahatsu-gw-18h",
    title: "Dahatsu GW-18H",
    type: "split-system",
    company: "Dahatsu",
    series: "Classic DC Inverter",
    link: "dahatsu-gw-18h.html",
    imgSrc: imagesDahatsuClassicInverter,
    price: pricesDahatsuClassicInverter.dahatsu_gw_18h, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 4.9, // Мощность охлаждения, кВт
    noise: 28, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuClassicInverter,
    description: descriptionDahatsuClassicInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 4950, // Производительность, Вт
      powerConsumption: 1545, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5000, // Производительность, Вт
      powerConsumption: 1390, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 5, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 28, // Уровень шума, дБ (A)
      weight: 10.5, // Вес, кг
      size: "900x199x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "780x270x560", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu GW-24H ------
  {
    article: "dahatsu-gw-24h",
    title: "Dahatsu GW-24H",
    type: "split-system",
    company: "Dahatsu",
    series: "Classic DC Inverter",
    link: "dahatsu-gw-24h.html",
    imgSrc: imagesDahatsuClassicInverter,
    price: pricesDahatsuClassicInverter.dahatsu_gw_24h, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 6.8, // Мощность охлаждения, кВт
    noise: 30, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuClassicInverter,
    description: descriptionDahatsuClassicInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 6850, // Производительность, Вт
      powerConsumption: 2125, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7000, // Производительность, Вт
      powerConsumption: 1940, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 8, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 30, // Уровень шума, дБ (A)
      weight: 13, // Вес, кг
      size: "1025x238x320", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "860x320x720", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

]
