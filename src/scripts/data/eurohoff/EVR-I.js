// ----- Eurohoff DC INVERTER (EVR-I) -----

const functions_Eurohoff_EVR_I = ["Завод-изготовитель Haier", "Бесшумная работа", "Режим Turbo производительности", "Легко моющаяся панель",
                              "HEALTH - режим здоровье", "Антибактериальный фильтр", "Режим 'Комфортный сон'", "Самодиагностика"];

const images_Eurohoff_EVR_I =
  ["./assets/img/catalog/eurohoff/evr-i/01.jpg",
    "./assets/img/catalog/eurohoff/evr-i/02.jpg",
    "./assets/img/catalog/eurohoff/evr-i/03.jpg",
    "./assets/img/catalog/eurohoff/evr-i/04.jpg"
  ];

const description_Eurohoff_EVR_I = "Сплит-системы EUROHOFF DC INVERTER- сочетающие в себе современные технологии: инвертор, высочайший класс энергоэффективности, озонобезопасный хладагент R32. Система управления изменяет производительность кондиционера, отслеживая даже самые незначительные изменения температуры воздуха в помещении. На основании данных температурных датчиков вычисляется оптимальная производительность для комфортного поддержания температуры воздуха. Отсутствие температурных колебаний создает благоприятные условия в помещении, а работа компрессора с частичной нагрузкой позволяет значительно экономить потребление электроэнергии."

const prices_Eurohoff_EVR_I = {
  "eurohoff_evr_07i": 35600,
  "eurohoff_evr_09i": 38000,
  "eurohoff_evr_12i": 44300,
  "eurohoff_evr_18i": 70400,
  "eurohoff_evr_24i": 84200,
}

const EUROHOFF_EVR_I= [

  // ------ Eurohoff EVR-07i ------
  {
    article: "eurohoff-evr-07i",
    title: "Eurohoff EVR-07i",
    type: "split-system",
    company: "Eurohoff",
    series: "DC INVERTER",
    link: "eurohoff-evr-07i.html",
    imgSrc: images_Eurohoff_EVR_I,
    price: prices_Eurohoff_EVR_I.eurohoff_evr_07i, // Цена
    area: 22 , // На площадь, м²
    coolingCapacity: 2.05, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EVR_I,
    description: description_Eurohoff_EVR_I, // Описание

    // Охлаждение
    cooling: {
      performance: 2050, // Производительность, Вт
      powerConsumption: 639, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2100, // Производительность, Вт
      powerConsumption: 582, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7.3, // Вес, кг
      size: "708x190x263", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 20, // Вес, кг
      size: "696x256x432", // Размеры
      freon: "R32", // Фреон
      compressorModel: "Qingan",
    }
  },

  // ------ Eurohoff EVR-09i ------
  {
    article: "eurohoff-evr-09i",
    title: "Eurohoff EVR-09i",
    type: "split-system",
    company: "Eurohoff",
    series: "DC INVERTER",
    link: "eurohoff-evr-09i.html",
    imgSrc: images_Eurohoff_EVR_I,
    price: prices_Eurohoff_EVR_I.eurohoff_evr_09i, // Цена
    area: 28 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EVR_I,
    description: description_Eurohoff_EVR_I, // Описание

    // Охлаждение
    cooling: {
      performance: 2600, // Производительность, Вт
      powerConsumption: 810, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 750, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7.3, // Вес, кг
      size: "708x190x263", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 20.8, // Вес, кг
      size: "696x256x432", // Размеры
      freon: "R32", // Фреон
      compressorModel: "Qingan",
    }
  },

  // ------ Eurohoff EVR-12i ------
  {
    article: "eurohoff-evr-12i",
    title: "Eurohoff EVR-12i",
    type: "split-system",
    company: "Eurohoff",
    series: "DC INVERTER",
    link: "eurohoff-evr-12i.html",
    imgSrc: images_Eurohoff_EVR_I,
    price: prices_Eurohoff_EVR_I.eurohoff_evr_12i, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.4, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EVR_I,
    description: description_Eurohoff_EVR_I, // Описание

    // Охлаждение
    cooling: {
      performance: 3400, // Производительность, Вт
      powerConsumption: 1060, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3900, // Производительность, Вт
      powerConsumption: 1055, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 9.1, // Вес, кг
      size: "865x200x290", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 23.9, // Вес, кг
      size: "700x245x544", // Размеры
      freon: "R32", // Фреон
      compressorModel: "Qingan",
    }
  },

  // ------ Eurohoff EVR-18i ------
  {
    article: "eurohoff-evr-18i",
    title: "Eurohoff EVR-18i",
    type: "split-system",
    company: "Eurohoff",
    series: "DC INVERTER",
    link: "eurohoff-evr-18i.html",
    imgSrc: images_Eurohoff_EVR_I,
    price: prices_Eurohoff_EVR_I.eurohoff_evr_18i, // Цена
    area: 50 , // На площадь, м²
    coolingCapacity: 4.8, // Мощность охлаждения, кВт
    noise: 28, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EVR_I,
    description: description_Eurohoff_EVR_I, // Описание

    // Охлаждение
    cooling: {
      performance: 4800, // Производительность, Вт
      powerConsumption: 1495, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 4800, // Производительность, Вт
      powerConsumption: 1330, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 28, // Уровень шума, дБ (A)
      weight: 8.7, // Вес, кг
      size: "865x200x290", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 29.2, // Вес, кг
      size: "800x275x553", // Размеры
      freon: "R32", // Фреон
      compressorModel: "Qingan",
    }
  },

  // ------ Eurohoff EVR-24i ------
  {
    article: "eurohoff-evr-24i",
    title: "Eurohoff EVR-24i",
    type: "split-system",
    company: "Eurohoff",
    series: "DC INVERTER",
    link: "eurohoff-evr-24i.html",
    imgSrc: images_Eurohoff_EVR_I,
    price: prices_Eurohoff_EVR_I.eurohoff_evr_24i, // Цена
    area: 70 , // На площадь, м²
    coolingCapacity: 6.5, // Мощность охлаждения, кВт
    noise: 33, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EVR_I,
    description: description_Eurohoff_EVR_I, // Описание

    // Охлаждение
    cooling: {
      performance: 6500, // Производительность, Вт
      powerConsumption: 2025, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 6800, // Производительность, Вт
      powerConsumption: 1880, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 33, // Уровень шума, дБ (A)
      weight: 11.6, // Вес, кг
      size: "1008x225x318", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 32.7, // Вес, кг
      size: "800x275x553", // Размеры
      freon: "R32", // Фреон
      compressorModel: "Qingan",
    }
  },


];
