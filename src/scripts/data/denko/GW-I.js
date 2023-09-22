// ----- Denko Sakura DC INVERTER (GW-I) -----

const functionsDenkoSakuraInverter = ["Компрессор GMCC Toshiba", "Класс энергоэффективности A",
  "Автоматическое качание заслонок", "Режим комфортного сна", "Зеленый фильтр высокой плотности",
  "Компактный дизайн", "Режим Turbo производительности", "Самоочистка внутреннего блока",
  "Golden fin", "Автоматический перезапуск", "Запоминание положения жалюзи", "Защитная крышка патрубов"];

const imagesDenkoSakuraInverter =
  ["./assets/img/catalog/Denko/gw-i/01.jpg",
    "./assets/img/catalog/Denko/gw-i/02.jpg",
    "./assets/img/catalog/Denko/gw-i/03.jpg",
    "./assets/img/catalog/Denko/gw-i/04.jpg"
  ];

const pricesDenkoSakuraInverter = {
  "denko_gw_07i": 39200,
  "denko_gw_09i": 41500,
  "denko_gw_12i": 44700,
}

const descriptionDenkoSakuraInverter = "Сплит-системы Denko серии Sakura DC Inverter - инверторный кондиционер сочетающий в себе не только стандартные функции современных инверторов, но и такие сверхтехнологичные технологии как: антиковидная ультрафиолетовая лампа UVC + 58 С, 2 анитвирусных фильтра, самоочистка и защита от плесени, а также встроенная WI-FI функция ( WI-FI комплект + USB). Ультрафиолетовая лампа размещается непосредственно за декоративной панелью во внутреннем блоке кондиционера. Такое обеззараживание ультрафиолетом особенно эффективно защитит ваш дом от всего спектра вредоносных бактерий и различных типов коронавирусов, в то числе и COVID 19."

const DENKO_GW_I = [

  // ------ Denko GW-07i ------
  {
    article: "denko-gw-07h",
    title: "Denko GW-07i",
    type: "split-system",
    company: "Denko",
    series: "Sakura DC Inverter",
    link: "denko-gw-07i.html",
    imgSrc: imagesDenkoSakuraInverter,
    price: pricesDenkoSakuraInverter.denko_gw_07i, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.1, // Мощность охлаждения, кВт
    noise: 20, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoSakuraInverter,
    description: descriptionDenkoSakuraInverter, // Описание

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
      size: "720x201x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 21.5, // Вес, кг
      size: "660x530x240", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko GW-09i ------
  {
    article: "denko-gw-09i",
    title: "Denko GW-09i",
    type: "split-system",
    company: "Denko",
    series: "Sakura DC Inverter",
    link: "denko-gw-09i.html",
    imgSrc: imagesDenkoSakuraInverter,
    price: pricesDenkoSakuraInverter.denko_gw_09i, // Цена
    area: 28, // На площадь, м²
    coolingCapacity: 2.5, // Мощность охлаждения, кВт
    noise: 20, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoSakuraInverter,
    description: descriptionDenkoSakuraInverter, // Описание

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
      size: "720x201x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 21.5, // Вес, кг
      size: "630x530x240", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko GW-12i ------
  {
    article: "denko-gw-12i",
    title: "Denko GW-12i",
    type: "split-system",
    company: "Denko",
    series: "Sakura DC Inverter",
    link: "denko-gw-12i.html",
    imgSrc: imagesDenkoSakuraInverter,
    price: pricesDenkoSakuraInverter.denko_gw_12i, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.4, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoSakuraInverter,
    description: descriptionDenkoSakuraInverter, // Описание

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
      size: "790x199x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 23, // Вес, кг
      size: "660x530x240", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

]
