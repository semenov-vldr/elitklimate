// -----Denko Legend DC INVERTER (DU-I) -----

const functionsDenkoLegendDCInverter = ["Компрессор GMCC Toshiba", "Режим Turbo производительности", "Автоматическое качание заслонок", "Режим комфортного сна", "Режим 'Антиплесень'",
  "HEALTH - режим здоровье", "Компактный дизайн", "Самоочистка внутреннего блока", "Режим I Feel",
  "Golden fin", "Автоматический перезапуск", "Запоминание положения жалюзи", "Таймер"];

const imagesDenkoLegendDCInverter =
  ["./assets/img/catalog/Denko/du-i/01.jpg",
    "./assets/img/catalog/Denko/du-i/02.jpg",
    "./assets/img/catalog/Denko/du-i/03.jpg",
    "./assets/img/catalog/Denko/du-i/04.jpg"
  ];

const pricesDenkoLegendDCInverter = {
  "denko_du_07i": 30900,
  "denko_du_09i": 33700,
  "denko_du_12i": 36900,
  "denko_du_18i": 61600,
  "denko_du_24i": 75600,
}

const descriptionDenkoLegendDCInverter = "Сплит-системы Denko серии Legend DC INVERTER - лаконичная модель с дизайном в классическом стиле. Данная модель станет дополнением любого интерьера, а новейшие технологии и инверторные технологии позволят наслаждаться идеальным микроклиматом в любое время года. Легендарная модель, соответствующая всем стандартам современного качества, включает в себя такие функции как: тихий и турбо режим, авторестарт, самоочистка, режим i feel, режим здоровья, защищающий от вредных бактерий и вирусов, антиплесень, горизонтальный автоповорот жалюзи, удобный 24-часовой таймер, самодиагностика при включении и работе, независимое осушение, саморазморозка и прочие функции."


const DENKO_DU_I = [

  // ------ Denko DU-07i ------
  {
    article: "denko-du-07i",
    title: "Denko DU-07i",
    type: "split-system",
    company: "Denko",
    series: "Legend DC Inverter",
    factory: "AUX",
    link: "denko-du-07i.html",
    imgSrc: imagesDenkoLegendDCInverter,
    price: pricesDenkoLegendDCInverter.denko_du_07i, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.2, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegendDCInverter,
    description: descriptionDenkoLegendDCInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 685, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2350, // Производительность, Вт
      powerConsumption: 650, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7.5, // Вес, кг
      size: "690x199x283", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 21, // Вес, кг
      size: "727x278x455", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DU-09i ------
  {
    article: "denko-du-09i",
    title: "Denko DU-09i",
    type: "split-system",
    company: "Denko",
    series: "Legend DC Inverter",
    factory: "AUX",
    link: "denko-du-09i.html",
    imgSrc: imagesDenkoLegendDCInverter,
    price: pricesDenkoLegendDCInverter.denko_du_09i, // Цена
    area: 28, // На площадь, м²
    coolingCapacity: 2.65, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegendDCInverter,
    description: descriptionDenkoLegendDCInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2650, // Производительность, Вт
      powerConsumption: 825, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 747, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7.7, // Вес, кг
      size: "690x199x283", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 22, // Вес, кг
      size: "727x278x455", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DU-12i ------
  {
    article: "denko-du-12i",
    title: "Denko DU-12i",
    type: "split-system",
    company: "Denko",
    series: "Legend DC Inverter",
    factory: "AUX",
    link: "denko-du-12i.html",
    imgSrc: imagesDenkoLegendDCInverter,
    price: pricesDenkoLegendDCInverter.denko_du_12i, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegendDCInverter,
    description: descriptionDenkoLegendDCInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 3500, // Производительность, Вт
      powerConsumption: 1090, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3650, // Производительность, Вт
      powerConsumption: 1010, // Потребл. мощность, Вт
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
      size: "750x200x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 22.5, // Вес, кг
      size: "727x278x455", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DU-18i ------
  {
    article: "denko-du-18i",
    title: "Denko DU-18i",
    type: "split-system",
    company: "Denko",
    series: "Legend DC Inverter",
    factory: "AUX",
    link: "denko-du-18i.html",
    imgSrc: imagesDenkoLegendDCInverter,
    price: pricesDenkoLegendDCInverter.denko_du_18i, // Цена
    area: 50, // На площадь, м²
    coolingCapacity: 5.1, // Мощность охлаждения, кВт
    noise: 29, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegendDCInverter,
    description: descriptionDenkoLegendDCInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 5100, // Производительность, Вт
      powerConsumption: 1590, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5300, // Производительность, Вт
      powerConsumption: 1470, // Потребл. мощность, Вт
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
      noise: 53, // Уровень шума, дБ (A)
      weight: 25, // Вес, кг
      size: "709x281x537", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DU-24i ------
  {
    article: "denko-du-24i",
    title: "Denko DU-24i",
    type: "split-system",
    company: "Denko",
    series: "Legend DC Inverter",
    factory: "AUX",
    link: "denko-du-24i.html",
    imgSrc: imagesDenkoLegendDCInverter,
    price: pricesDenkoLegendDCInverter.denko_du_24i, // Цена
    area: 70, // На площадь, м²
    coolingCapacity: 6.7, // Мощность охлаждения, кВт
    noise: 31, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegendDCInverter,
    description: descriptionDenkoLegendDCInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 6700, // Производительность, Вт
      powerConsumption: 2090, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 6800, // Производительность, Вт
      powerConsumption: 1880, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 31, // Уровень шума, дБ (A)
      weight: 11, // Вес, кг
      size: "900x225x310", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 38.5, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

]
