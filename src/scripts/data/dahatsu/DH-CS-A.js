// -----Dahatsu Кассетный (DH-CS-A) -----


const functionsDahatsuDH_CS_A = ["ON/OFF", "Инфракрасный пульт (в комплекте)", "Режим энергосбережения",
  "Самоочистка внутреннего блока", "Объемное воздухо-распределение", "Турборежим", "Тихий режим", "Горячий запуск",
  "24-часовой таймер", "Режим I FEEL", "Автоматический режим выбора", "Автоматическая разморозка", "Работа в режиме охлаждения до -15°C",
  "Работа в режиме обогрева до -15°C", "Дренажный насос", "Самодиагностика", "Низкотемпературный комплект",
  "Панель с круговым распределением воздушного потока", "HEALTH", "Движение жалюзи по горизонтали и вертикали", "Анти-F. Предотвращение образования неприятного запаха"];

const imagesDahatsuDH_CS_A =
  ["./assets/img/catalog/dahatsu/dh-cs-a/01.jpg",
    "./assets/img/catalog/dahatsu/dh-cs-a/02.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/03.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/04.png"
  ];

const imagesDahatsuDH_CS_A_2 =
  ["./assets/img/catalog/dahatsu/dh-cs-a/01-1.jpg",
    "./assets/img/catalog/dahatsu/dh-cs-a/02.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/03-3.jpg",
    "./assets/img/catalog/dahatsu/dh-cs-a/04.png"
  ];

const descriptionDahatsuDH_CS_A = "Кассетная сплит-система DH-CS-A позволит быстро и равномерно создать и поддерживать комфортную температуру в помещении. Распределение воздуха на 360 градусов. Панель с круговым распределением воздушного потока обеспечивает эффективное охлаждение или нагрев. \n Данный вид кондиционеров интегрируется в подвесные потолки и осуществляет подачу воздуха в 4 потока. Новейшая модель DH-CS-A обладает привлекательным видом, компактными габаритами, множеством настроек и функций. \n Режим TURBO активирует максимальную производительность и позволяет быстрее достичь необходимой температуры."


const DAHATSU_DH_CS_A = [

  // Dahatsu DH-CS-12A
  {
    article: "dahatsu-dh-cs-12a",
    title: "Dahatsu DH-CS-12A",
    type: "cassette",
    company: "Dahatsu",
    series: "DH-CS-A",
    factory: "AUX",
    link: "dahatsu-dh-cs-12a.html",
    imgSrc: imagesDahatsuDH_CS_A,
    price: 57000, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDH_CS_A,
    description: descriptionDahatsuDH_CS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 3520, // Производительность, Вт
      powerConsumption: 1300, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3960, // Производительность, Вт
      powerConsumption: 1280, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 16, // Вес, кг
      size: "570x570x260", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "780x285x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-CS-18A
  {
    article: "dahatsu-dh-cs-18a",
    title: "Dahatsu DH-CS-18A",
    type: "cassette",
    company: "Dahatsu",
    series: "DH-CS-A",
    factory: "AUX",
    link: "dahatsu-dh-cs-18a.html",
    imgSrc: imagesDahatsuDH_CS_A,
    price: 64800, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.2, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDH_CS_A,
    description: descriptionDahatsuDH_CS_A, // Описание

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
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 16, // Вес, кг
      size: "570x570x260", // Размеры
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

  // Dahatsu DH-CS-24A
  {
    article: "dahatsu-dh-cs-24a",
    title: "Dahatsu DH-CS-24A",
    type: "cassette",
    company: "Dahatsu",
    series: "DH-CS-A",
    factory: "AUX",
    link: "dahatsu-dh-cs-24a.html",
    imgSrc: imagesDahatsuDH_CS_A,
    price: 79400, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDH_CS_A,
    description: descriptionDahatsuDH_CS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 7030, // Производительность, Вт
      powerConsumption: 2150, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7200, // Производительность, Вт
      powerConsumption: 1820, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,88мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 27, // Вес, кг
      size: "835x835x250", // Размеры
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


  // Dahatsu DH-CS-36A
  {
    article: "dahatsu-dh-cs-36a",
    title: "Dahatsu DH-CS-36A",
    type: "cassette",
    company: "Dahatsu",
    series: "DH-CS-A",
    factory: "AUX",
    link: "dahatsu-dh-cs-36a.html",
    imgSrc: imagesDahatsuDH_CS_A_2,
    price: 100000, // Цена
    area: 90, // На площадь, м²
    coolingCapacity: 10.5, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDH_CS_A,
    description: descriptionDahatsuDH_CS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 10550, // Производительность, Вт
      powerConsumption: 3500, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 11700, // Производительность, Вт
      powerConsumption: 3340, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: 30, // Макс. длина трассы, м
    maxHeightDifference: 20, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,88мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "835x835x250", // Размеры
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

  // Dahatsu DH-CS-48A
  {
    article: "dahatsu-dh-cs-48a",
    title: "Dahatsu DH-CS-48A",
    type: "cassette",
    company: "Dahatsu",
    series: "DH-CS-A",
    factory: "AUX",
    link: "dahatsu-dh-cs-48a.html",
    imgSrc: imagesDahatsuDH_CS_A_2,
    price: 126800, // Цена
    area: 140, // На площадь, м²
    coolingCapacity: 14, // Мощность охлаждения, кВт
    noise: 41, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDH_CS_A,
    description: descriptionDahatsuDH_CS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 14070, // Производительность, Вт
      powerConsumption: 4680, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 15240, // Производительность, Вт
      powerConsumption: 4600, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: 50, // Макс. длина трассы, м
    maxHeightDifference: 30, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 41, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "835x835x290", // Размеры
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

  // Dahatsu DH-CS-60A
  {
    article: "dahatsu-dh-cs-60a",
    title: "Dahatsu DH-CS-60A",
    type: "cassette",
    company: "Dahatsu",
    series: "DH-CS-A",
    factory: "AUX",
    link: "dahatsu-dh-cs-60a.html",
    imgSrc: imagesDahatsuDH_CS_A_2,
    price: 135000, // Цена
    area: 180, // На площадь, м²
    coolingCapacity: 16, // Мощность охлаждения, кВт
    noise: 41, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDH_CS_A,
    description: descriptionDahatsuDH_CS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 16120, // Производительность, Вт
      powerConsumption: 5550, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 17600, // Производительность, Вт
      powerConsumption: 5570, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: 50, // Макс. длина трассы, м
    maxHeightDifference: 30, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 41, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "835x835x290", // Размеры
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
