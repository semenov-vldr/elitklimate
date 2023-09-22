// -----Denko Напольно-потолочный тип (DNP-A) -----

const functionsDenko_DNP_A = ["ON/OFF", "Инфракрасный пульт (в комплекте)", "Режим энергосбережения",
  "Самоочистка ICLEAN", "Объемное воздухо-распределение", "Турборежим", "Спящий режим", "Движение жалюзи по горизонтали и вертикали",
  "24-часовой таймер", "Режим I FEEL", "Автоматический режим выбора", "Автоматическая разморозка", "Работа в режиме охлаждения до -15°C",
  "Работа в режиме обогрева до -15°C", "Самодиагностика", "Низкотемпературный комплект",
  "HEALTH", "Анти-F. Предотвращение образования неприятного запаха"];


const imagesDenko_DNP_A =
  ["./assets/img/catalog/Denko/DNP-A/01.jpg",
    "./assets/img/catalog/Denko/DNP-A/02.jpg",
    "./assets/img/catalog/Denko/DNP-A/03.jpg",
    "./assets/img/catalog/Denko/DNP-A/04.jpg"
  ];


const pricesDenko_DNP_A = {
  "denko_dnp_18a": 70000,
  "denko_dnp_24a": 89200,
  "denko_dnp_36a": 120800,
  "denko_dnp_48a": 146800,
  "denko_dnp_60a": 156500,
}

const descriptionDenko_DNP_A = "Напольно-потолочная сплит-система Denko DNP-A идеально подходит для создания комфортного микроклимата в ресторанах, гостиницах, офисных помещениях. Прибор имеет элегантный дизайн, на передней панели расположены индикаторы режимов работы и цифровой дисплей с указанием температуры. Управление производится с помощью беспроводного пульта."


const DENKO_DNP_A = [

  // Denko DNP-18A
  {
    article: "denko-dnp-18a",
    title: "Denko DNP-18A",
    type: "floor-ceiling",
    company: "Denko",
    series: "DNP-A",
    factory: "AUX",
    link: "denko-dnp-18a.html",
    imgSrc: imagesDenko_DNP_A,
    price: pricesDenko_DNP_A.denko_dnp_18a, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.2, // Мощность охлаждения, кВт
    noise: 43, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenko_DNP_A,
    description: descriptionDenko_DNP_A, // Описание

    // Охлаждение
    cooling: {
      performance: 5280, // Производительность, Вт
      powerConsumption: 1700, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5600, // Производительность, Вт
      powerConsumption: 1550, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 43, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "1000x690x235", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 36, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Denko DH-NP-24A
  {
    article: "denko-dnp-24a",
    title: "Denko DNP-24A",
    type: "floor-ceiling",
    company: "Denko",
    series: "DNP-A",
    factory: "AUX",
    link: "denko-dnp-24a.html",
    imgSrc: imagesDenko_DNP_A,
    price: pricesDenko_DNP_A.denko_dnp_24a, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 49, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenko_DNP_A,
    description: descriptionDenko_DNP_A, // Описание

    // Охлаждение
    cooling: {
      performance: 7030, // Производительность, Вт
      powerConsumption: 2150, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7600, // Производительность, Вт
      powerConsumption: 1920, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,88мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 49, // Уровень шума, дБ (A)
      weight: 36, // Вес, кг
      size: "1280x690x235", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 48, // Вес, кг
      size: "825x310x655", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Denko DNP-36A
  {
    article: "denko-dnp-36a",
    title: "Denko DNP-36A",
    type: "floor-ceiling",
    company: "Denko",
    series: "DNP-A",
    factory: "AUX",
    link: "denko-dnp-36a.html",
    imgSrc: imagesDenko_DNP_A,
    price: pricesDenko_DNP_A.denko_dnp_36a, // Цена
    area: 110, // На площадь, м²
    coolingCapacity: 10.5, // Мощность охлаждения, кВт
    noise: 50, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenko_DNP_A,
    description: descriptionDenko_DNP_A, // Описание

    // Охлаждение
    cooling: {
      performance: 10550, // Производительность, Вт
      powerConsumption: 3500, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 11700, // Производительность, Вт
      powerConsumption: 3240, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: "30м", // Макс. длина трассы, м
    maxHeightDifference: "20м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,88мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 36, // Вес, кг
      size: "1280x690x235", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 58, // Уровень шума, дБ (A)
      weight: 64, // Вес, кг
      size: "970x395x805", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Denko DNP-48A
  {
    article: "denko-dnp-48a",
    title: "Denko DNP-48A",
    type: "floor-ceiling",
    company: "Denko",
    series: "DNP-A",
    factory: "AUX",
    link: "denko-dnp-48a.html",
    imgSrc: imagesDenko_DNP_A,
    price: pricesDenko_DNP_A.denko_dnp_48a, // Цена
    area: 150, // На площадь, м²
    coolingCapacity: 14, // Мощность охлаждения, кВт
    noise: 51, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenko_DNP_A,
    description: descriptionDenko_DNP_A, // Описание

    // Охлаждение
    cooling: {
      performance: 14070, // Производительность, Вт
      powerConsumption: 4680, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 15240, // Производительность, Вт
      powerConsumption: 4420, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: "50м", // Макс. длина трассы, м
    maxHeightDifference: "30м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 51, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "1600x690x235", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 58, // Уровень шума, дБ (A)
      weight: 95, // Вес, кг
      size: "940x370x1325", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Denko DNP-60A
  {
    article: "denko-dnp-60a",
    title: "Denko DNP-60A",
    type: "floor-ceiling",
    company: "Denko",
    series: "DNP-A",
    factory: "AUX",
    link: "denko-dnp-60a.html",
    imgSrc: imagesDenko_DNP_A,
    price: pricesDenko_DNP_A.denko_dnp_60a, // Цена
    area: 180, // На площадь, м²
    coolingCapacity: 16.1, // Мощность охлаждения, кВт
    noise: 51, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_NP_A,
    description: descriptionDenko_DNP_A, // Описание

    // Охлаждение
    cooling: {
      performance: 16120, // Производительность, Вт
      powerConsumption: 5550, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 17600, // Производительность, Вт
      powerConsumption: 5010, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: "50м", // Макс. длина трассы, м
    maxHeightDifference: "30м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 51, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "1600x690x235", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 60, // Уровень шума, дБ (A)
      weight: 99, // Вес, кг
      size: "940x370x1325", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

]
