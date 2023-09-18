// ----- Eurohoff On/Off (EV) -----

const functions_Eurohoff_EV = ["Завод-изготовитель Haier", "Бесшумная работа", "Режим 'Комфортный сон'", "Самодиагностика"];

const images_Eurohoff_EV =
  ["./assets/img/catalog/eurohoff/ev/01.jpg",
    "./assets/img/catalog/eurohoff/ev/02.jpg",
    "./assets/img/catalog/eurohoff/ev/03.jpg",
    "./assets/img/catalog/eurohoff/ev/04.jpg"
  ];

const description_Eurohoff_EV = "Настенные сплит-системы Eurohoff серии EV - это компактные модели для бытового использования, которые обладают привлекательным дизайном и оснащены эргономичным пультом управления. Устройства отличаются высоким уровнем надежности и безопасности, контроль за которыми осуществляет система самодиагностики. \n Eurohoff серии EV - это качественная климатическая техника, оснащенная современными комплектующими. В линейку входит 5 моделей с производительностью охлаждения от 2 до 6,8 кВт. Приборы оборудованы компрессором типа ON/OFF и наделены необходимым количеством функций для стабильной работы."

const prices_Eurohoff_EV = {
  "eurohoff_ev_07": 23000,
  "eurohoff_ev_09": 26400,
  "eurohoff_ev_12": 37400,
  "eurohoff_ev_18": 58900,
  "eurohoff_ev_24": 73000,
}

const EUROHOFF_EV = [

  // ------ Eurohoff EV-07 ------
  {
    article: "eurohoff-ev-07",
    title: "Eurohoff EV-07",
    type: "split-system",
    company: "Eurohoff",
    series: "ON/OFF",
    link: "eurohoff-ev-07.html",
    imgSrc: images_Eurohoff_EV,
    price: prices_Eurohoff_EV.eurohoff_ev_07, // Цена
    area: 22 , // На площадь, м²
    coolingCapacity: 2, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EV,
    description: description_Eurohoff_EV, // Описание

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
    maxTrackLength: 7, // Макс. длина трассы, м
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
      compressorModel: "RECHI",
    }
  },

  // ------ Eurohoff EV-09 ------
  {
    article: "eurohoff-ev-09",
    title: "Eurohoff EV-09",
    type: "split-system",
    company: "Eurohoff",
    series: "ON/OFF",
    link: "eurohoff-ev-09.html",
    imgSrc: images_Eurohoff_EV,
    price: prices_Eurohoff_EV.eurohoff_ev_09, // Цена
    area: 28 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EV,
    description: description_Eurohoff_EV, // Описание

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
    maxTrackLength: 7, // Макс. длина трассы, м
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
      compressorModel: "RECHI",
    }
  },

  // ------ Eurohoff EV-12 ------
  {
    article: "eurohoff-ev-12",
    title: "Eurohoff EV-12",
    type: "split-system",
    company: "Eurohoff",
    series: "ON/OFF",
    link: "eurohoff-ev-12.html",
    imgSrc: images_Eurohoff_EV,
    price: prices_Eurohoff_EV.eurohoff_ev_12, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.4, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EV,
    description: description_Eurohoff_EV, // Описание

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
    maxTrackLength: 7, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8.7, // Вес, кг
      size: "865x200x290", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 23.9, // Вес, кг
      size: "700x245x544", // Размеры
      freon: "R32", // Фреон
      compressorModel: "RECHI",
    }
  },

  // ------ Eurohoff EV-18 ------
  {
    article: "eurohoff-ev-18",
    title: "Eurohoff EV-18",
    type: "split-system",
    company: "Eurohoff",
    series: "ON/OFF",
    link: "eurohoff-ev-18.html",
    imgSrc: images_Eurohoff_EV,
    price: prices_Eurohoff_EV.eurohoff_ev_18, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 4.8, // Мощность охлаждения, кВт
    noise: 28, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EV,
    description: description_Eurohoff_EV, // Описание

    // Охлаждение
    cooling: {
      performance: 4800, // Производительность, Вт
      powerConsumption: 1460, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 4800, // Производительность, Вт
      powerConsumption: 1400, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 7, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
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
      noise: 53, // Уровень шума, дБ (A)
      weight: 32.7, // Вес, кг
      size: "800x275x533", // Размеры
      freon: "R32", // Фреон
      compressorModel: "RECHI",
    }
  },

  // ------ Eurohoff EV-18 ------
  {
    article: "eurohoff-ev-24",
    title: "Eurohoff EV-24",
    type: "split-system",
    company: "Eurohoff",
    series: "ON/OFF",
    link: "eurohoff-ev-24.html",
    imgSrc: images_Eurohoff_EV,
    price: prices_Eurohoff_EV.eurohoff_ev_24, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 6.5, // Мощность охлаждения, кВт
    noise: 30, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EV,
    description: description_Eurohoff_EV, // Описание

    // Охлаждение
    cooling: {
      performance: 6500, // Производительность, Вт
      powerConsumption: 2160, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 6800, // Производительность, Вт
      powerConsumption: 2180, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 7, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 30, // Уровень шума, дБ (A)
      weight: 11.6, // Вес, кг
      size: "1008x225x318", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 47.3, // Вес, кг
      size: "890x353x697", // Размеры
      freon: "R32", // Фреон
      compressorModel: "RECHI",
    }
  },

];
