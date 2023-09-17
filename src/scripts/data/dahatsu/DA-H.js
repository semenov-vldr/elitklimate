// ----- Dahatsu Legend (DA-H) -----

const functionsDahatsuLegend = ["Компрессор GMCC Toshiba", "Режим Turbo производительности", "Автоматическое качание заслонок", "Режим комфортного сна",
  "Режим 'Антиплесень'", "Компактный дизайн", "HEALTH - режим здоровье", "Самоочистка внутреннего блока", "Режим I Feel", "Автоматический перезапуск",
  "Запоминание положения жалюзи", "Таймер"];

const srcToFolderDahatsuLegend = "./assets/img/catalog/dahatsu/DA-H/";

const imagesDahatsuLegend = [
  `${srcToFolderDahatsuLegend}01.png`,
  `${srcToFolderDahatsuLegend}02-2.png`,
  `${srcToFolderDahatsuLegend}03.png`,
  `${srcToFolderDahatsuLegend}04.png`,
]

const descriptionDahatsuLegend = "Сплит-системы Dahatsu серии Legend это легендарное возвращение модели, которая отвечает всем стандартам современного качества. Лаконичный, обтекаемый дизайн впишется в помещение любого типа и интерьера. Новейшие технологии позволят вам комфортно использовать сплит-систему, быстро охлаждать и обогревать помещение, а интеллектуальное управление и энергосбережение создадут идеальную среду жизненного пространства. В кондиционере присутствуют такие функции, как: авто-рестарт, самоочистка, режим i feel, тихий и турбо режим, антиплесень, горизонтальный автоповорот жалюзи, программируемый таймер, самодиагностика при включении и работе, независимое осушение, саморазморозка и другие функции."

const pricesDahatsuLegend = {
  "dahatsu_da_07h": 22500,
  "dahatsu_da_09h": 24500,
  "dahatsu_da_12h": 32300,
  "dahatsu_da_18h": 52700,
  "dahatsu_da_24h": 68000,
  "dahatsu_da_36h": 109000,
}

const DAHATSU_DA_H = [

  // ------ Dahatsu DA-07H ------
  {
    article: "dahatsu-da-07h",
    title: "Dahatsu DA-07H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "dahatsu-da-07h.html",
    imgSrc: imagesDahatsuLegend,
    price: pricesDahatsuLegend.dahatsu_da_07h, // Цена
    area: 22 , // На площадь, м²
    coolingCapacity: 2.1, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 2100, // Производительность, Вт
      powerConsumption: 650, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 610, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "690x199x283", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 48, // Уровень шума, дБ (A)
      weight: 20, // Вес, кг
      size: "665x280x420", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DA-09H ------

  {
    article: "dahatsu-da-09h",
    title: "Dahatsu DA-09H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "dahatsu-da-09h.html",
    imgSrc: imagesDahatsuLegend,
    price: pricesDahatsuLegend.dahatsu_da_09h, // Цена
    area: 28 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 2650, // Производительность, Вт
      powerConsumption: 825, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 748, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8.5, // Вес, кг
      size: "690x199x283", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 21, // Вес, кг
      size: "665x280x420", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DA-12H ------

  {
    article: "dahatsu-da-12h",
    title: "Dahatsu DA-12H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "dahatsu-da-12h.html",
    imgSrc: imagesDahatsuLegend,
    price: pricesDahatsuLegend.dahatsu_da_12h, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 27, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 3550, // Производительность, Вт
      powerConsumption: 1106, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3650, // Производительность, Вт
      powerConsumption: 1011, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 27, // Уровень шума, дБ (A)
      weight: 9, // Вес, кг
      size: "750x200x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 25, // Вес, кг
      size: "710x240x500", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DA-18H ------

  {
    article: "dahatsu-da-18h",
    title: "Dahatsu DA-18H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "dahatsu-da-18h.html",
    imgSrc: imagesDahatsuLegend,
    price: pricesDahatsuLegend.dahatsu_da_18h, // Цена
    area: 55 , // На площадь, м²
    coolingCapacity: 5.3, // Мощность охлаждения, кВт
    noise: 29, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 5300, // Производительность, Вт
      powerConsumption: 1656, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5450, // Производительность, Вт
      powerConsumption: 1509, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 29, // Уровень шума, дБ (A)
      weight: 11, // Вес, кг
      size: "900x225x310", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 37, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DA-24H ------

  {
    article: "dahatsu-da-24h",
    title: "Dahatsu DA-24H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "dahatsu-da-24h.html",
    imgSrc: imagesDahatsuLegend,
    price: pricesDahatsuLegend.dahatsu_da_24h, // Цена
    area: 75 , // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 31, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 7000, // Производительность, Вт
      powerConsumption: 2325, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7100, // Производительность, Вт
      powerConsumption: 2211, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 31, // Уровень шума, дБ (A)
      weight: 12, // Вес, кг
      size: "900x225x310", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 46, // Вес, кг
      size: "825x310x655", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DA-36H ------

  {
    article: "dahatsu-da-36h",
    title: "Dahatsu DA-36H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "dahatsu-da-36h.html",
    imgSrc: imagesDahatsuLegend,
    price: pricesDahatsuLegend.dahatsu_da_36h, // Цена
    area: 100 , // На площадь, м²
    coolingCapacity: 9.7, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 9700, // Производительность, Вт
      powerConsumption: 3222, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 99000, // Производительность, Вт
      powerConsumption: 3084, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 22, // Вес, кг
      size: "1082x233x330", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 62, // Уровень шума, дБ (A)
      weight: 70, // Вес, кг
      size: "900x350x700", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },
];
