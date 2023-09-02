// -----Dahatsu Кассетный (DH-KN-CH) -----


const functionsDahatsu_DH_KN_CH = ["ON/OFF", "Проводной пульт (в комплекте)", "Инфракрасный пульт (опция)", "Режим энергосбережения",
  "Самоочистка внутреннего блока", "Объемное воздухо-распределение", "Турборежим", "Тихий режим", "Горячий запуск",
  "24-часовой таймер", "Режим I FEEL", "Автоматический режим выбора", "Автоматическая разморозка", "Работа в режиме охлаждения до -20°C (опция)",
  "Работа в режиме обогрева до -15°C (опция)", "Дренажный насос (опция)", "Самодиагностика", "Низкотемпературный комплект",
  "Моющийся фильтр", "Индикатор загрязнения фильтра", "Режим комфортного сна", "Блокировка кнопок пульта"];

const imagesDahatsu_DH_KN_CH =
  ["./assets/img/catalog/dahatsu/DH-KN-A/01.png",
    "./assets/img/catalog/dahatsu/DH-KN-A/02.png",
    //"./assets/img/catalog/dahatsu/DH-KN-A/03.png",
    //"./assets/img/catalog/dahatsu/DH-KN-A/04.png"
  ];

const imagesDahatsu_DH_KN_CH_2 =
  ["./assets/img/catalog/dahatsu/DH-KN-A/01-1.png",
    "./assets/img/catalog/dahatsu/DH-KN-A/02-2.jpg",
    //"./assets/img/catalog/dahatsu/DH-KN-A/03-3.JPG",
    //"./assets/img/catalog/dahatsu/DH-KN-A/04.png"
  ];

const descriptionDahatsu_DH_KN_CH = "Не всегда в дизайн интерьера хорошо вписывается внутренний блок классической сплит-системы. Идеальным решением в таких ситуациях станут канальные кондиционеры DH-KN-CH. \n Кондиционер самостоятельно выполняет диагностику неполадок. Сигналы о возникших неисправностях отображаются на световых индикаторах внутреннего блока сплит-системы. \n От состояния фильтра зависит бесперебойность и качество функционирования кондиционера. Но, как и в любом другом механизме, фильтры со временем загрязняются, поэтому нужно внимательно следить за их чистотой. Индикатор загрязнения фильтра своевременно оповестит Вас о необходимости проведения технического обслуживания."


const DAHATSU_DH_KN_CH = [

  // Dahatsu DH-KN-18CH
  {
    article: "dahatsu-dh-kn-18ch",
    title: "Dahatsu DH-KN-18CH",
    type: "ducted",
    company: "Dahatsu",
    series: "DH-KN-CH",
    factory: "AUX",
    link: "dahatsu-dh-kn-18ch.html",
    imgSrc: imagesDahatsu_DH_KN_CH,
    price: 72900, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.3, // Мощность охлаждения, кВт
    noise: 35, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_KN_CH,
    description: descriptionDahatsu_DH_KN_CH, // Описание

    // Охлаждение
    cooling: {
      performance: 5300, // Производительность, Вт
      powerConsumption: 1760, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5800, // Производительность, Вт
      powerConsumption: 1800, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 35, // Уровень шума, дБ (A)
      weight: 32, // Вес, кг
      size: "1189x260x643", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 36, // Вес, кг
      size: "850x555x345", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-KN-24CH
  {
    article: "dahatsu-dh-kn-24ch",
    title: "Dahatsu DH-KN-24CH",
    type: "ducted",
    company: "Dahatsu",
    series: "DH-KN-CH",
    factory: "AUX",
    link: "dahatsu-dh-kn-24ch.html",
    imgSrc: imagesDahatsu_DH_KN_CH,
    price: 84600, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 7.2, // Мощность охлаждения, кВт
    noise: 38, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_KN_CH,
    description: descriptionDahatsu_DH_KN_CH, // Описание

    // Охлаждение
    cooling: {
      performance: 7200, // Производительность, Вт
      powerConsumption: 2390, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 8080, // Производительность, Вт
      powerConsumption: 2500, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,88мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 38, // Уровень шума, дБ (A)
      weight: 33, // Вес, кг
      size: "1189x260x643", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 56, // Уровень шума, дБ (A)
      weight: 52, // Вес, кг
      size: "914x702x382", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-KN-36CH
  {
    article: "dahatsu-dh-kn-36ch",
    title: "Dahatsu DH-KN-36CH",
    type: "ducted",
    company: "Dahatsu",
    series: "DH-KN-CH",
    factory: "AUX",
    link: "dahatsu-dh-kn-36ch.html",
    imgSrc: imagesDahatsu_DH_KN_CH_2,
    price: 113000, // Цена
    area: 110, // На площадь, м²
    coolingCapacity: 10.6, // Мощность охлаждения, кВт
    noise: 41, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_KN_CH,
    description: descriptionDahatsu_DH_KN_CH, // Описание

    // Охлаждение
    cooling: {
      performance: 10600, // Производительность, Вт
      powerConsumption: 3500, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 11700, // Производительность, Вт
      powerConsumption: 3500, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: 50, // Макс. длина трассы, м
    maxHeightDifference: 25, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 41, // Уровень шума, дБ (A)
      weight: 33, // Вес, кг
      size: "1189x260x643", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 56, // Уровень шума, дБ (A)
      weight: 67, // Вес, кг
      size: "1015x810x445", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-KN-48CH
  {
    article: "dahatsu-dh-kn-48ch",
    title: "Dahatsu DH-KN-48CH",
    type: "ducted",
    company: "Dahatsu",
    series: "DH-KN-CH",
    factory: "AUX",
    link: "dahatsu-dh-kn-48ch.html",
    imgSrc: imagesDahatsu_DH_KN_CH_2,
    price: 159900, // Цена
    area: 150, // На площадь, м²
    coolingCapacity: 14.2, // Мощность охлаждения, кВт
    noise: 44, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_KN_CH,
    description: descriptionDahatsu_DH_KN_CH, // Описание

    // Охлаждение
    cooling: {
      performance: 14200, // Производительность, Вт
      powerConsumption: 4710, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 15700, // Производительность, Вт
      powerConsumption: 4890, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: 50, // Макс. длина трассы, м
    maxHeightDifference: 25, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 44, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "1425x260x643", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 56, // Уровень шума, дБ (A)
      weight: 83, // Вес, кг
      size: "1015x810x445", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-KN-60CH
  {
    article: "dahatsu-dh-kn-60ch",
    title: "Dahatsu DH-KN-60CH",
    type: "ducted",
    company: "Dahatsu",
    series: "DH-KN-CH",
    factory: "AUX",
    link: "dahatsu-dh-kn-60ch.html",
    imgSrc: imagesDahatsu_DH_KN_CH_2,
    price: 164700, // Цена
    area: 190, // На площадь, м²
    coolingCapacity: 17.6, // Мощность охлаждения, кВт
    noise: 44, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_KN_CH,
    description: descriptionDahatsu_DH_KN_CH, // Описание

    // Охлаждение
    cooling: {
      performance: 17600, // Производительность, Вт
      powerConsumption: 5710, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 18700, // Производительность, Вт
      powerConsumption: 5820, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: 50, // Макс. длина трассы, м
    maxHeightDifference: 25, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 44, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "1425x260x643", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 60, // Уровень шума, дБ (A)
      weight: 91, // Вес, кг
      size: "911x1330x400", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },


]
