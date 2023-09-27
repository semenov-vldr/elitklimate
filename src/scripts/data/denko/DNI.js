// -----Denko Gold DC INVERTER (DNI) -----

const functionsDenkoGoldDCInverter = [
  // "Компрессор GMCC Toshiba", "Режим Turbo производительности", "Автоматическое качание заслонок", "Режим комфортного сна", "Режим 'Антиплесень'",
  // "HEALTH - режим здоровье", "Компактный дизайн", "Самоочистка внутреннего блока", "Режим I Feel",
  // "Golden fin", "Автоматический перезапуск", "Запоминание положения жалюзи", "Таймер"
];



const imagesDenkoDenkoGoldDCInverter =
  ["./assets/img/catalog/Denko/dni/01.jpg",
    "./assets/img/catalog/Denko/dni/02.jpg",
    "./assets/img/catalog/Denko/dni/03.jpg",
    "./assets/img/catalog/Denko/dni/04.jpg"
  ];

const pricesDenkoDenkoGoldDCInverter = {
  "denko_dni_07": 29100,
  "denko_dni_09": 30800,
  "denko_dni_12": 35500,
  "denko_dni_18": 50500,
  "denko_dni_24": 59500,
}

const descriptionDenkoGoldDCInverter = "Инверторная сплит-система Denko из серии Gold DC Inverter (DNI) будет поддерживать комнатную температуру с высокой точностью благодаря продвинутым технологиям и мощному компрессору от Gree. В отличие от традиционных кондиционеров инвертор работает постоянно, плавно регулируя свою мощность в зависимости от изменения температуры вокруг. Сниженный уровень шума от 22 дБа позволит в полной мере насладиться прохладным воздухом летом и теплом – зимой. Сдержанный дизайн и цифровой дисплей на лицевой панели – станут настоящим украшением любого современного интерьера. Регулировать скорость воздушного потока, задавать необходимую температуру, а так же выбирать удобное время для включения по таймеру производиться с помощью беспроводного ИК пульта. В комплектацию внутреннего блока так же входят дополнительные антибактериальный и антиоксидантный фильтр. Эти фильтры позволят сохранить чистоту в вашей комнате, не давая мелкой бытовой пыли и различным аллергенам загрязнять воздух."


const DENKO_DNI = [

  // ------ Denko DNI-07/DNHI-07 ------
  {
    article: "denko-dni-07",
    title: "Denko DNI-07/DNHI-07",
    type: "split-system",
    company: "Denko",
    series: "Gold DC Inverter",
    factory: "MBO",
    link: "denko-dni-07.html",
    imgSrc: imagesDenkoDenkoGoldDCInverter,
    price: pricesDenkoDenkoGoldDCInverter.denko_dni_07, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.2, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoGoldDCInverter,
    description: descriptionDenkoGoldDCInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 680, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2300, // Производительность, Вт
      powerConsumption: 780, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 7, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "700x290x190", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 48, // Уровень шума, дБ (A)
      weight: 27, // Вес, кг
      size: "730x520x255", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GREE",
    }
  },

  // ------ Denko DNI-09/DNHI-09 ------
  {
    article: "denko-dni-09",
    title: "Denko DNI-09/DNHI-09",
    type: "split-system",
    company: "Denko",
    series: "Gold DC Inverter",
    factory: "MBO",
    link: "denko-dni-09.html",
    imgSrc: imagesDenkoDenkoGoldDCInverter,
    price: pricesDenkoDenkoGoldDCInverter.denko_dni_09, // Цена
    area: 28, // На площадь, м²
    coolingCapacity: 2.65, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoGoldDCInverter,
    description: descriptionDenkoGoldDCInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2650, // Производительность, Вт
      powerConsumption: 820, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2800, // Производительность, Вт
      powerConsumption: 750, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 7, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "700x290x190", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 48, // Уровень шума, дБ (A)
      weight: 27, // Вес, кг
      size: "730x520x255", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GREE",
    }
  },

  // ------ Denko DNI-12/DNHI-12 ------
  {
    article: "denko-dni-12",
    title: "Denko DNI-12/DNHI-12",
    type: "split-system",
    company: "Denko",
    series: "Gold DC Inverter",
    factory: "MBO",
    link: "denko-dni-12.html",
    imgSrc: imagesDenkoDenkoGoldDCInverter,
    price: pricesDenkoDenkoGoldDCInverter.denko_dni_12, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.52, // Мощность охлаждения, кВт
    noise: 23, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoGoldDCInverter,
    description: descriptionDenkoGoldDCInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 3520, // Производительность, Вт
      powerConsumption: 980, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3550, // Производительность, Вт
      powerConsumption: 1020, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 7, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 23, // Уровень шума, дБ (A)
      weight: 9, // Вес, кг
      size: "800x290x190", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "730x520x255", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GREE",
    }
  },

  // ------ Denko DNI-18/DNHI-18 ------
  {
    article: "denko-dni-18",
    title: "Denko DNI-18/DNHI-18",
    type: "split-system",
    company: "Denko",
    series: "Gold DC Inverter",
    factory: "MBO",
    link: "denko-dni-18.html",
    imgSrc: imagesDenkoDenkoGoldDCInverter,
    price: pricesDenkoDenkoGoldDCInverter.denko_dni_18, // Цена
    area: 53, // На площадь, м²
    coolingCapacity: 5.32, // Мощность охлаждения, кВт
    noise: 27, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoGoldDCInverter,
    description: descriptionDenkoGoldDCInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 5320, // Производительность, Вт
      powerConsumption: 1480, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5350, // Производительность, Вт
      powerConsumption: 1610, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 7, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 27, // Уровень шума, дБ (A)
      weight: 12, // Вес, кг
      size: "950x320x230", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 38, // Вес, кг
      size: "790x555x290", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GREE",
    }
  },

  // ------ Denko DNI-24/DNHI-24 ------
  {
    article: "denko-dni-24",
    title: "Denko DNI-24/DNHI-24",
    type: "split-system",
    company: "Denko",
    series: "Gold DC Inverter",
    factory: "MBO",
    link: "denko-dni-24.html",
    imgSrc: imagesDenkoDenkoGoldDCInverter,
    price: pricesDenkoDenkoGoldDCInverter.denko_dni_24, // Цена
    area: 70, // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 29, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoGoldDCInverter,
    description: descriptionDenkoGoldDCInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 7000, // Производительность, Вт
      powerConsumption: 2121, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7044, // Производительность, Вт
      powerConsumption: 1951, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 12, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 29, // Уровень шума, дБ (A)
      weight: 13, // Вес, кг
      size: "910x320x230", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 56, // Уровень шума, дБ (A)
      weight: 42, // Вес, кг
      size: "790x530x290", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GREE",
    }
  },


]
