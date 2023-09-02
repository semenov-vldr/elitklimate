// ----- Dahatsu Legend DC Inverter (DA-I) -----

const functionsDahatsuLegendInverter = ["Компрессор GMCC Toshiba", "Режим Turbo производительности", "Автоматическое качание заслонок", "Режим комфортного сна",
  "Режим 'Антиплесень'", "Компактный дизайн", "HEALTH - режим здоровье", "Самоочистка внутреннего блока", "Режим I Feel", "Автоматический перезапуск",
  "Запоминание положения жалюзи", "Таймер"];

const imagesDahatsuLegendInverter =
  ["./assets/img/catalog/dahatsu/DA-I/01.jpg",
    "./assets/img/catalog/dahatsu/DA-I/02.jpg",
    "./assets/img/catalog/dahatsu/DA-I/03.jpg",
    "./assets/img/catalog/dahatsu/DA-I/04.jpg"
  ];

const descriptionDahatsuLegendInverter = "Сплит-системы Dahatsu серии Legend DC INVERTER - лаконичная модель с дизайном в классическом стиле. Данная модель станет дополнением любого интерьера, а новейшие технологии и инверторные технологии позволят наслаждаться идеальным микроклиматом в любое время года. Легендарная модель, соответствующая всем стандартам современного качества, включает в себя такие функции как: тихий и турбо режим, авторестарт, самоочистка, режим i feel, режим здоровья, защищающий от вредных бактерий и вирусов, антиплесень, горизонтальный автоповорот жалюзи, удобный 24-часовой таймер, самодиагностика при включении и работе, независимое осушение, саморазморозка и прочие функции."


const DAHATSU_DA_I = [

  // ------ Dahatsu DA-07i ------
  {
    article: "dahatsu-da-07i",
    title: "Dahatsu DA-07i",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend DC Inverter",
    link: "dahatsu-da-07i.html",
    imgSrc: imagesDahatsuLegendInverter,
    price: 31800, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.2, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegendInverter,
    description: descriptionDahatsuLegendInverter, // Описание

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
      compressorModel: "HIGHLY",
    }
  },

  // ------ Dahatsu DA-09i ------
  {
    article: "dahatsu-da-09i",
    title: "Dahatsu DA-09i",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend DC Inverter",
    link: "dahatsu-da-09i.html",
    imgSrc: imagesDahatsuLegendInverter,
    price: 34400, // Цена
    area: 30 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegendInverter,
    description: descriptionDahatsuLegendInverter, // Описание

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
      compressorModel: "HIGHLY",
    }
  },

  // ------ Dahatsu DA-12i ------
  {
    article: "dahatsu-da-12i",
    title: "Dahatsu DA-12i",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend DC Inverter",
    link: "dahatsu-da-12i.html",
    imgSrc: imagesDahatsuLegendInverter,
    price: 37300, // Цена
    area: 40 , // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegendInverter,
    description: descriptionDahatsuLegendInverter, // Описание

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
      compressorModel: "HIGHLY",
    }
  },

  // ------ Dahatsu DA-18i ------
  {
    article: "dahatsu-da-18i",
    title: "Dahatsu DA-18i",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend DC Inverter",
    link: "dahatsu-da-18i.html",
    imgSrc: imagesDahatsuLegendInverter,
    price: 63500, // Цена
    area: 55 , // На площадь, м²
    coolingCapacity: 5.1, // Мощность охлаждения, кВт
    noise: 29, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegendInverter,
    description: descriptionDahatsuLegendInverter, // Описание

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

  // ------ Dahatsu DA-24i ------
  {
    article: "dahatsu-da-24i",
    title: "Dahatsu DA-24i",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend DC Inverter",
    link: "dahatsu-da-24i.html",
    imgSrc: imagesDahatsuLegendInverter,
    price: 78300, // Цена
    area: 75 , // На площадь, м²
    coolingCapacity: 6.7, // Мощность охлаждения, кВт
    noise: 31, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegendInverter,
    description: descriptionDahatsuLegendInverter, // Описание

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
      compressorModel: "HIGHLY",
    }
  },


];
