// -----Dahatsu Напольно-потолочный тип (DH-NP-A) -----

const functionsDahatsu_DH_NP_A = ["ON/OFF", "Инфракрасный пульт (в комплекте)", "Режим энергосбережения",
  "Самоочистка ICLEAN", "Объемное воздухо-распределение", "Турборежим", "Спящий режим", "Движение жалюзи по горизонтали и вертикали",
  "24-часовой таймер", "Режим I FEEL", "Автоматический режим выбора", "Автоматическая разморозка", "Работа в режиме охлаждения до -15°C",
  "Работа в режиме обогрева до -15°C", "Самодиагностика", "Низкотемпературный комплект",
  "HEALTH", "Анти-F. Предотвращение образования неприятного запаха"];


const imagesDahatsu_DH_NP_A =
  ["./assets/img/catalog/dahatsu/DH-NP-A/01.png",
    "./assets/img/catalog/dahatsu/DH-NP-A/02.png",
    "./assets/img/catalog/dahatsu/DH-NP-A/03.png",
    "./assets/img/catalog/dahatsu/DH-NP-A/04.png"
  ];

const descriptionDahatsu_DH_NP_A = "Напольно-потолочная сплит-система DH-NP-A идеально подходит для \n создания комфортного микроклимата в ресторанах, гостиницах, офисных помещениях. Прибор имеет элегантный дизайн, на передней панели расположены индикаторы режимов работы и цифровой дисплей с указанием температуры. Управление производится с помощью беспроводного пульта. \n Универсальный монтаж.Внутренний блок может быть установлен горизонтально у потолка или вертикально на стене. \n Функция iClean благодаря которой устройство автоматически сушится и очищается от пыли, что повышает эффективность охлаждения и нагрева."


const DAHATSU_DH_NP_A = [

  // Dahatsu DH-NP-18A
  {
    article: "dahatsu-dh-np-18a",
    title: "Dahatsu DH-NP-18A",
    type: "floor-ceiling",
    company: "Dahatsu",
    series: "DH-NP-A",
    factory: "AUX",
    link: "##",
    imgSrc: imagesDahatsu_DH_NP_A,
    price: 72000, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.2, // Мощность охлаждения, кВт
    noise: 43, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_NP_A,
    description: descriptionDahatsu_DH_NP_A, // Описание

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

  // Dahatsu DH-NP-24A
  {
    article: "dahatsu-dh-np-24a",
    title: "Dahatsu DH-NP-24A",
    type: "floor-ceiling",
    company: "Dahatsu",
    series: "DH-NP-A",
    factory: "AUX",
    link: "##",
    imgSrc: imagesDahatsu_DH_NP_A,
    price: 90900, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 49, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_NP_A,
    description: descriptionDahatsu_DH_NP_A, // Описание

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

  // Dahatsu DH-NP-36A
  {
    article: "dahatsu-dh-np-36a",
    title: "Dahatsu DH-NP-36A",
    type: "floor-ceiling",
    company: "Dahatsu",
    series: "DH-NP-A",
    factory: "AUX",
    link: "##",
    imgSrc: imagesDahatsu_DH_NP_A,
    price: 123000, // Цена
    area: 110, // На площадь, м²
    coolingCapacity: 10.5, // Мощность охлаждения, кВт
    noise: 50, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_NP_A,
    description: descriptionDahatsu_DH_NP_A, // Описание

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

  // Dahatsu DH-NP-48A
  {
    article: "dahatsu-dh-np-48a",
    title: "Dahatsu DH-NP-48A",
    type: "floor-ceiling",
    company: "Dahatsu",
    series: "DH-NP-A",
    factory: "AUX",
    link: "##",
    imgSrc: imagesDahatsu_DH_NP_A,
    price: 148900, // Цена
    area: 150, // На площадь, м²
    coolingCapacity: 14, // Мощность охлаждения, кВт
    noise: 51, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_NP_A,
    description: descriptionDahatsu_DH_NP_A, // Описание

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

  // Dahatsu DH-NP-60A
  {
    article: "dahatsu-dh-np-60a",
    title: "Dahatsu DH-NP-60A",
    type: "floor-ceiling",
    company: "Dahatsu",
    series: "DH-NP-A",
    factory: "AUX",
    link: "##",
    imgSrc: imagesDahatsu_DH_NP_A,
    price: 157000, // Цена
    area: 180, // На площадь, м²
    coolingCapacity: 16.1, // Мощность охлаждения, кВт
    noise: 51, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_NP_A,
    description: descriptionDahatsu_DH_NP_A, // Описание

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
