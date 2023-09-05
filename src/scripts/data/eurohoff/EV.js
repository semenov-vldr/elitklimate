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

];
