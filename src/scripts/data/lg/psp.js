// ----- LG Mega DUAL Inverter (PSP) -----

const functionsLGDual = ["Мониторинг энергопотребления", "Двойной инверторный компрессор", "Умная диагностика", "Низкий уровень шума",
  "Технология Dual Inverter", "Тихий режим", "Автоочистка", "Фреон R410A", "Покрытие Gold Fin", "Быстрый нагрев",
"Простой и быстрый монтаж", "Быстрое охлаждение Jet Cool", "Энергосбережение до 70%"];

const imagesLGDual =
  ["./assets/img/catalog/lg/psp/01.jpg",
    "./assets/img/catalog/lg/psp/02.webp",
    "./assets/img/catalog/lg/psp/03.webp",
    "./assets/img/catalog/lg/psp/04.webp"
  ];

const descriptionLGDual = "Серия кондиционеров LG Mega Dual Inverter с двойным инвертором. Кондиционер оснащен последними новейшими технологиями прогрессивной работы в плане использования двойного инвертора еще больше снижающего затраты на электроэнергию, а так же функционирование в большем интервале температур охлаждения и обогрева. Применение технологии Jet Cool для максимально быстрого охлаждения помещения. Мощная и эффективная подача подготовленного воздуха в помещение."


const LG_Dual = [

  // ------ LG P07SP2 ------
  {
    article: "lg-p07sp2",
    title: "LG P07SP2",
    type: "split-system",
    company: "LG",
    series: "Mega Dual Inverter",
    link: "lg-p07sp2.html",
    imgSrc: imagesLGDual,
    price: 62700, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.1, // Мощность охлаждения, кВт
    noise: 21, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsLGDual,
    description: descriptionLGDual, // Описание

    // Охлаждение
    cooling: {
      performance: 2140, // Производительность, Вт
      powerConsumption: 600, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2500, // Производительность, Вт
      powerConsumption: 670, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "15м", // Макс. длина трассы, м
    maxHeightDifference: "7м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 21, // Уровень шума, дБ (A)
      weight: 7.8, // Вес, кг
      size: "756x184x265", // Размеры д*ш*в
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 25.7, // Вес, кг
      size: "717x230x495", // Размеры д*ш*в
      freon: "R410A", // Фреон
    }
  },

  // ------ LG P09SP2 ------
  {
    article: "lg-p09sp2",
    title: "LG P09SP2",
    type: "split-system",
    company: "LG",
    series: "Mega Dual Inverter",
    link: "lg-p09sp2.html",
    imgSrc: imagesLGDual,
    price: 69500, // Цена
    area: 28, // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 21, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsLGDual,
    description: descriptionLGDual, // Описание

    // Охлаждение
    cooling: {
      performance: 2640, // Производительность, Вт
      powerConsumption: 765, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 730, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "15м", // Макс. длина трассы, м
    maxHeightDifference: "7м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 21, // Уровень шума, дБ (A)
      weight: 7.8, // Вес, кг
      size: "754x189x308", // Размеры д*ш*в
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 25.7, // Вес, кг
      size: "717x230x495", // Размеры д*ш*в
      freon: "R410A", // Фреон
    }
  },

  // ------ LG P12SP ------
  {
    article: "lg-p12sp",
    title: "LG P12SP",
    type: "split-system",
    company: "LG",
    series: "Mega Dual Inverter",
    link: "lg-p12sp",
    imgSrc: imagesLGDual,
    price: 78400, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 21, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsLGDual,
    description: descriptionLGDual, // Описание

    // Охлаждение
    cooling: {
      performance: 3520, // Производительность, Вт
      powerConsumption: 1085, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3520, // Производительность, Вт
      powerConsumption: 975, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "15м", // Макс. длина трассы, м
    maxHeightDifference: "7м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 21, // Уровень шума, дБ (A)
      weight: 8.5, // Вес, кг
      size: "837x189x308", // Размеры д*ш*в
    },
    // Внешний блок
    outdoorUnit: {
      noise: 51, // Уровень шума, дБ (A)
      weight: 26.4, // Вес, кг
      size: "717x230x495", // Размеры д*ш*в
      freon: "R410A", // Фреон
    }
  },

  // ------ LG P18SP ------
  {
    article: "lg-p18sp",
    title: "LG P18SP",
    type: "split-system",
    company: "LG",
    series: "Mega Dual Inverter",
    link: "lg-p18sp.html",
    imgSrc: imagesLGDual,
    price: 110000, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.2, // Мощность охлаждения, кВт
    noise: 32, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsLGDual,
    description: descriptionLGDual, // Описание

    // Охлаждение
    cooling: {
      performance: 5280, // Производительность, Вт
      powerConsumption: 1640, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5420, // Производительность, Вт
      powerConsumption: 1500, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 32, // Уровень шума, дБ (A)
      weight: 11.4, // Вес, кг
      size: "998x210x345", // Размеры д*ш*в
    },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 34, // Вес, кг
      size: "770x288x545", // Размеры д*ш*в
      freon: "R410A", // Фреон
    }
  },

]
