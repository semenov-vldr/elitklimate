
const html = document.querySelector('html');

const classBlockScroll = "js-block-scroll";

function blockScrollBody () {
  if ( !html.classList.contains(classBlockScroll) ) {
    html.classList.add(classBlockScroll);
  }
};

function unblockScrollBody () {
  if ( html.classList.contains(classBlockScroll) ) {
    html.classList.remove(classBlockScroll);
  }
};

const powerSupply = "220-240V,50HZ";
const powerSupplyOnePhase = "1 ФАЗА 220-240V,50HZ";
const powerSupplyThreePhase = "3 ФАЗА 380-415V,50HZ";

// ----- Dahatsu Legend (DA-H) -----

const functionsDahatsuLegend = ["Компрессор GMCC Toshiba", "Режим Turbo производительности", "Автоматическое качание заслонок", "Режим комфортного сна",
  "Режим 'Антиплесень'", "Компактный дизайн", "HEALTH - режим здоровье", "Самоочистка внутреннего блока", "Режим I Feel", "Автоматический перезапуск",
  "Запоминание положения жалюзи", "Таймер"];

const imagesDahatsuLegend =
  ["./assets/img/catalog/dahatsu/DA-H/01.png",
    "./assets/img/catalog/dahatsu/DA-H/02.png",
    "./assets/img/catalog/dahatsu/DA-H/03.png",
    "./assets/img/catalog/dahatsu/DA-H/04.png"
  ];

const descriptionDahatsuLegend = "Сплит-системы Dahatsu серии Legend это легендарное возвращение модели, которая отвечает всем стандартам современного качества. Лаконичный, обтекаемый дизайн впишется в помещение любого типа и интерьера.Новейшие технологии позволят вам комфортно использовать сплит-систему, быстро охлаждать и обогревать помещение, а интеллектуальное управление и энергосбережение создадут идеальную среду жизненного пространства. В кондиционере присутствуют такие функции, как: авто-рестарт, самоочистка, режим i feel, тихий и турбо режим, антиплесень, горизонтальный автоповорот жалюзи, программируемый таймер, самодиагностика при включении и работе, независимое осушение, саморазморозка и другие функции."


const DAHATSU_DA_H = [

  // ------ Dahatsu DA-07H ------
  {
    article: "dahatsu-da-07h",
    title: "Dahatsu DA-07H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "##",
    imgSrc: imagesDahatsuLegend,
    price: 0, // Цена
    area: 22 , // На площадь, м²
    coolingCapacity: 2.1, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 2100, // Производительность, Вт
      powerConsumption: 650, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 610, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "690x199x283", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 48, // Уровень шума, дБ (A)
      weight: 20, // Вес, кг
      size: "665x280x420", // Размеры
      freon: "R410A", // Фреон
    }
  },

  // ------ Dahatsu DA-09H ------

  {
    article: "dahatsu-da-09h",
    title: "Dahatsu DA-09H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "##",
    imgSrc: imagesDahatsuLegend,
    price: 0, // Цена
    area: 28 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 2650, // Производительность, Вт
      powerConsumption: 825, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 748, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8.5, // Вес, кг
      size: "690x199x283", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 21, // Вес, кг
      size: "665x280x420", // Размеры
      freon: "R410A", // Фреон
    }
  },

  // ------ Dahatsu DA-12H ------

  {
    article: "dahatsu-da-12h",
    title: "Dahatsu DA-12H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "##",
    imgSrc: imagesDahatsuLegend,
    price: 0, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 27, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 3550, // Производительность, Вт
      powerConsumption: 1106, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3650, // Производительность, Вт
      powerConsumption: 1011, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 27, // Уровень шума, дБ (A)
      weight: 9, // Вес, кг
      size: "750x200x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 25, // Вес, кг
      size: "710x240x500", // Размеры
      freon: "R410A", // Фреон
    }
  },

  // ------ Dahatsu DA-18H ------

  {
    article: "dahatsu-da-18h",
    title: "Dahatsu DA-18H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "##",
    imgSrc: imagesDahatsuLegend,
    price: 0, // Цена
    area: 55 , // На площадь, м²
    coolingCapacity: 5.3, // Мощность охлаждения, кВт
    noise: 29, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 5300, // Производительность, Вт
      powerConsumption: 1656, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5450, // Производительность, Вт
      powerConsumption: 1509, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
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
      noise: 54, // Уровень шума, дБ (A)
      weight: 37, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
    }
  },

  // ------ Dahatsu DA-24H ------

  {
    article: "dahatsu-da-24h",
    title: "Dahatsu DA-24H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "##",
    imgSrc: imagesDahatsuLegend,
    price: 0, // Цена
    area: 75 , // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 31, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 7000, // Производительность, Вт
      powerConsumption: 2325, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7100, // Производительность, Вт
      powerConsumption: 2211, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "25м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 31, // Уровень шума, дБ (A)
      weight: 12, // Вес, кг
      size: "900x225x310", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 46, // Вес, кг
      size: "825x310x655", // Размеры
      freon: "R410A", // Фреон
    }
  },

  // ------ Dahatsu DA-36H ------

  {
    article: "dahatsu-da-36h",
    title: "Dahatsu DA-36H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "##",
    imgSrc: imagesDahatsuLegend,
    price: 0, // Цена
    area: 100 , // На площадь, м²
    coolingCapacity: 9.7, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 9700, // Производительность, Вт
      powerConsumption: 3222, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 99000, // Производительность, Вт
      powerConsumption: 3084, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "25м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 22, // Вес, кг
      size: "1082x233x330", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 62, // Уровень шума, дБ (A)
      weight: 70, // Вес, кг
      size: "900x350x700", // Размеры
      freon: "R410A", // Фреон
    }
  },
];

// -----Dahatsu Кассетный (DH-CS-A) -----


const functionsDahatsuDH_CS_A = ["ON/OFF", "Инфракрасный пульт (в комплекте)", "Режим энергосбережения",
  "Самоочистка внутреннего блока", "Объемное воздухо-распределение", "Турборежим", "Тихий режим", "Горячий запуск",
  "24-часовой таймер", "Режим I FEEL", "Автоматический режим выбора", "Автоматическая разморозка", "Работа в режиме охлаждения до -15°C",
  "Работа в режиме обогрева до -15°C", "Дренажный насос", "Самодиагностика", "Низкотемпературный комплект",
  "Панель с круговым распределением воздушного потока", "HEALTH", "Движение жалюзи по горизонтали и вертикали", "Анти-F. Предотвращение образования неприятного запаха"];

const imagesDahatsuDH_CS_A =
  ["./assets/img/catalog/dahatsu/dh-cs-a/01.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/02.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/03.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/04.png"
  ];

const imagesDahatsuDH_CS_A_2 =
  ["./assets/img/catalog/dahatsu/dh-cs-a/01-1.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/02.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/03-3.JPG",
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
    link: "##",
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
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
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
    link: "##",
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
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
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
    link: "##",
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
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
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
    link: "##",
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
    maxTrackLength: "30м", // Макс. длина трассы, м
    maxHeightDifference: "20м", // Макс. перепад высот, м
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
    link: "##",
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
    maxTrackLength: "50м", // Макс. длина трассы, м
    maxHeightDifference: "30м", // Макс. перепад высот, м
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
    link: "##",
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
    maxTrackLength: "50м", // Макс. длина трассы, м
    maxHeightDifference: "30м", // Макс. перепад высот, м
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

// -----Dahatsu Колонный (DH-KL-A) -----

const functions_Dahatsu_DH_KL_A = ["ON/OFF", "Инфракрасный пульт (в комплекте)", "Режим энергосбережения",
  "Самоочистка внутреннего блока", "Объемное воздухо-распределение", "Турборежим",  "Анти-F. Предотвращение образования неприятного запаха",
  "Движение жалюзи по горизонтали и вертикали", "Тихий режим",
  "24-часовой таймер", "Режим I FEEL", "Автоматический режим выбора", "Автоматическая разморозка",
  "Самодиагностика", "Мягкое осушение", "Встроенный электрический нагреватель", "HEALTH"];


const images_Dahatsu_DH_KL_A =
  ["./assets/img/catalog/dahatsu/DH-KL-A/01.png",
    "./assets/img/catalog/dahatsu/DH-KL-A/02.png",
    "./assets/img/catalog/dahatsu/DH-KL-A/03.png",
    "./assets/img/catalog/dahatsu/DH-KL-A/04.png"
  ];


const description_Dahatsu_DH_KL_A = "Сплит-система Dahatsu DH-KL-A колонного типа благодаря своей конструкцииь кондиционер обеспечивает оптимальное распространение охлажденных/ нагретых воздушных потоков, а также ликвидацию холодных и теплых зон. \n Колонна - это эффективное и современное приспособление, которое имеет расширенный функционал для обеспечения благоприятный условий. \n С панели управления на внутреннем блоке можно осуществлять следующие действия: включение и выключение кондиционера, блокировка режима, выбор скорости вращения вентилятора, выбор режима работы, установка заданной температуры, установка времени и таймера, включение покачивания заслонками."


const DAHATSU_DH_KL_A = [

  // Dahatsu DH-KL-48CH
  {
    article: "dahatsu-dh-kl-48ch",
    title: "Dahatsu DH-KL-48CH",
    type: "column",
    company: "Dahatsu",
    series: "DH-KL-A",
    factory: "AUX",
    link: "##",
    imgSrc: images_Dahatsu_DH_KL_A,
    price: 145900, // Цена
    area: 150, // На площадь, м²
    coolingCapacity: 14, // Мощность охлаждения, кВт
    noise: 57, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Dahatsu_DH_KL_A,
    description: description_Dahatsu_DH_KL_A, // Описание

    // Охлаждение
    cooling: {
      performance: 14000, // Производительность, Вт
      powerConsumption: 5100, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 14400, // Производительность, Вт
      powerConsumption: 4800, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: "25м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 54, // Вес, кг
      size: "1925x580x400", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 58, // Уровень шума, дБ (A)
      weight: 101, // Вес, кг
      size: "1320x940x340", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DKL-60GR
  {
    article: "dahatsu-dkl-60gr",
    title: "Dahatsu DKL-60GR",
    type: "column",
    company: "Dahatsu",
    series: "DH-KL-A",
    factory: "AUX",
    link: "##",
    imgSrc: images_Dahatsu_DH_KL_A,
    price: 168700, // Цена
    area: 190, // На площадь, м²
    coolingCapacity: 18, // Мощность охлаждения, кВт
    noise: 55, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Dahatsu_DH_KL_A,
    description: description_Dahatsu_DH_KL_A, // Описание

    // Охлаждение
    cooling: {
      performance: 18000, // Производительность, Вт
      powerConsumption: 5578, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 18000, // Производительность, Вт
      powerConsumption: 4986, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: "25м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 51, // Вес, кг
      size: "1906x581x385", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 59, // Уровень шума, дБ (A)
      weight: 97, // Вес, кг
      size: "1030x1331x380", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "Highly",
    }
  },

  // Dahatsu DH-KL-100A
  {
    article: "dahatsu-dh-kl-100a",
    title: "Dahatsu DH-KL-100A",
    type: "column",
    company: "Dahatsu",
    series: "DH-KL-A",
    factory: "AUX",
    link: "##",
    imgSrc: images_Dahatsu_DH_KL_A,
    price: 337900, // Цена
    area: 250, // На площадь, м²
    coolingCapacity: 28, // Мощность охлаждения, кВт
    noise: 56, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Dahatsu_DH_KL_A,
    description: description_Dahatsu_DH_KL_A, // Описание

    // Охлаждение
    cooling: {
      performance: 28000, // Производительность, Вт
      powerConsumption: 10070, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 31000, // Производительность, Вт
      powerConsumption: 10130, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: "50м", // Макс. длина трассы, м
    maxHeightDifference: "20м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8) x 2",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4) x 2", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 56, // Уровень шума, дБ (A)
      weight: 111, // Вес, кг
      size: "1200x360x1850", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 58, // Уровень шума, дБ (A)
      weight: 176, // Вес, кг
      size: "1120x400x1510", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "Gree",
    }
  },


]

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

// ----- Dahatsu Dragon (DHP) -----

const functionsDahatsuDragon = ["Компрессор GMCC Toshiba", "Golden fin", "Класс энергоэффективности A",
  "Уровень шума 22dB", "Фреон R32", "Компактный дизайн", "Антибактериальный фильтр", "Самоочистка внутреннего блока",
  "Режим Turbo производительности", "Таймер", "Запоминание положения жалюзи", "Автоматический перезапуск"];

const imagesDahatsuDragon =
  ["./assets/img/catalog/dahatsu/DHP/01.jpg",
    "./assets/img/catalog/dahatsu/DHP/02.png",
    "./assets/img/catalog/dahatsu/DHP/03.jpg",
    "./assets/img/catalog/dahatsu/DHP/04.jpg"
  ];

const descriptionDahatsuDragon = "Сплит-системы Dahatsu серии Dragon выполнены в современном, лаконичном дизайне и имеют обтекаемые формы, что позволит разместить данные сплит-системы в помещениях с высококлассными требованиями к решением интерьера. Помимо быстрого обогрева и охлаждения, устройство гарантирует тщательную очистку воздуха от загрязнений и аллергенов при помощи моющегося фильтра высокой плотности. В кондиционере предусмотрены такие функции, как: спящий режим, обнаружение утечки хладагента, горизонтальный автоповорот жалюзи, 2 способа подключения трубопровода, Н-образная установочная пластина, функция short cut- устанавливает и активирует ваши предварительные настройки, и прочие сверхтехнологичные функции."

const DAHATSU_DHP = [

  // ------ Dahatsu DHP-07/DHV-07 ------
  {
    article: "dahatsu-dhp-07",
    title: "Dahatsu DHP-07/DHV-07",
    type: "split-system",
    company: "Dahatsu",
    series: "Dragon",
    link: "dahatsu-dhp-07.html",
    imgSrc: imagesDahatsuDragon,
    price: 25500, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.3, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDragon,
    description: descriptionDahatsuDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 2343, // Производительность, Вт
      powerConsumption: 730, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2419, // Производительность, Вт
      powerConsumption: 670, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "8м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 7.47, // Вес, кг
      size: "715x194x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 23.7, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R32", // Фреон
    }
  },

  // ------ Dahatsu DHP-09/DHV-09 ------
  {
    article: "dahatsu-dhp-09",
    title: "Dahatsu DHP-09/DHV-09",
    type: "split-system",
    company: "Dahatsu",
    series: "Dragon",
    link: "##",
    imgSrc: imagesDahatsuDragon,
    price: 27700, // Цена
    area: 28 , // На площадь, м²
    coolingCapacity: 2.5, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDragon,
    description: descriptionDahatsuDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 2491, // Производительность, Вт
      powerConsumption: 776, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2491, // Производительность, Вт
      powerConsumption: 690, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "8м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 7.6, // Вес
      size: "715x194x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 23.7, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R32", // Фреон
    }
  },

  // ------ Dahatsu DHP-12/DHV-12 ------
  {
    article: "dahatsu-dhp-12",
    title: "Dahatsu DHP-12/DHV-12",
    type: "split-system",
    company: "Dahatsu",
    series: "Dragon",
    link: "##",
    imgSrc: imagesDahatsuDragon,
    price: 38500, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDragon,
    description: descriptionDahatsuDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 3517, // Производительность, Вт
      powerConsumption: 1095, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3664, // Производительность, Вт
      powerConsumption: 1015, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "8м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8.1, // Вес, кг
      size: "805x194x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 25.6, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R32", // Фреон
    }
  },

  // ------ Dahatsu DHP-18/DHV-18 ------
  {
    article: "dahatsu-dhp-18",
    title: "Dahatsu DHP-18/DHV-18",
    type: "split-system",
    company: "Dahatsu",
    series: "Dragon",
    link: "##",
    imgSrc: imagesDahatsuDragon,
    price: 59900, // Цена
    area: 55 , // На площадь, м²
    coolingCapacity: 5.2, // Мощность охлаждения, кВт
    noise: 26, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDragon,
    description: descriptionDahatsuDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 5275, // Производительность, Вт
      powerConsumption: 1643, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5569, // Производительность, Вт
      powerConsumption: 1542, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "25м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 26, // Уровень шума, дБ (A)
      weight: 10.9, // Вес, кг
      size: "957x213x302", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 34.5, // Вес, кг
      size: "765x303x555", // Размеры
      freon: "R32", // Фреон
    }
  },

  // ------ Dahatsu DHP-24/DHV-24 ------
  {
    article: "dahatsu-dhp-24",
    title: "Dahatsu DHP-24/DHV-24",
    type: "split-system",
    company: "Dahatsu",
    series: "Dragon",
    link: "##",
    imgSrc: imagesDahatsuDragon,
    price: 77800, // Цена
    area: 75 , // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 28, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDragon,
    description: descriptionDahatsuDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 7034, // Производительность, Вт
      powerConsumption: 2190, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7034, // Производительность, Вт
      powerConsumption: 1948, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "25м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 28, // Уровень шума, дБ (A)
      weight: 13.7, // Вес, кг
      size: "1040x220x327", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 60.5, // Уровень шума, дБ (A)
      weight: 47.9, // Вес, кг
      size: "890x342x673", // Размеры
      freon: "R32", // Фреон
    }
  },
];

// ----- Dahatsu BRILLIANT (DS-I) -----

const functionsDahatsuBrilliant = ["Компрессор GMCC Toshiba", "Golden fin", "Класс энергоэффективности A",
  "Автоматический перезапуск", "Таймер", "Самоочистка внутреннего блока", "Антибактериальный фильтр",
  "Cold-Catalyst Filter 'Холодный катализатор'", "Режим I Feel",
  "Запоминание положения жалюзи", "Уровень шума 21dB", "Компактный дизайн"];

const imagesDahatsuBrilliant =
  ["./assets/img/catalog/dahatsu/DS-I/01.png",
    "./assets/img/catalog/dahatsu/DS-I/02.png",
    "./assets/img/catalog/dahatsu/DS-I/03.png",
    "./assets/img/catalog/dahatsu/DS-I/04.png"
  ];


const descriptionDahatsuBrilliant = "Сплит-системы Dahatsu серии Brilliant сочетающие в себе современные технологии: инвертор, высочайший класс энергоэффективности, озонобезопасный хладагент R410A. Система управления изменяет производительность кондиционера, отслеживая даже самые незначительные изменения температуры воздуха в помещении. На основании данных температурных датчиков вычисляется оптимальная производительность для комфортного поддержания температуры воздуха. Отсутствие температурных колебаний создает благоприятные условия в помещении, а работа компрессора с частичной нагрузкой позволяет значительно экономить потребление электроэнергии."

const DAHATSU_DS_I = [

  // ------ Dahatsu DS-07i/DSN-07i ------
  {
    article: "dahatsu-ds-07i",
    title: "Dahatsu DS-07i/DSN-07i",
    type: "split-system",
    company: "Dahatsu",
    series: "Brilliant",
    link: "##",
    imgSrc: imagesDahatsuBrilliant,
    price: 37200, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.4, // Мощность охлаждения, кВт
    noise: 21, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuBrilliant,
    description: descriptionDahatsuBrilliant, // Описание

    // Охлаждение
    cooling: {
      performance: 2433, // Производительность, Вт
      powerConsumption: 758, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2462, // Производительность, Вт
      powerConsumption: 678, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "25м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 21, // Уровень шума, дБ (A)
      weight: 7.4, // Вес, кг
      size: "715x194x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 20.6, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DS-09i/DSN-09i ------
  {
    article: "dahatsu-ds-09i",
    title: "Dahatsu DS-09i/DSN-09i",
    type: "split-system",
    company: "Dahatsu",
    series: "Brilliant",
    link: "##",
    imgSrc: imagesDahatsuBrilliant,
    price: 39500, // Цена
    area: 28, // На площадь, м²
    coolingCapacity: 2.8, // Мощность охлаждения, кВт
    noise: 21, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuBrilliant,
    description: descriptionDahatsuBrilliant, // Описание

    // Охлаждение
    cooling: {
      performance: 2843, // Производительность, Вт
      powerConsumption: 886, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2930, // Производительность, Вт
      powerConsumption: 820, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "25м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 21, // Уровень шума, дБ (A)
      weight: 7.5, // Вес, кг
      size: "715x194x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 22.8, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DS-12i/DSN-12i ------
  {
    article: "dahatsu-ds-12i",
    title: "Dahatsu DS-12i/DSN-12i",
    type: "split-system",
    company: "Dahatsu",
    series: "Brilliant",
    link: "##",
    imgSrc: imagesDahatsuBrilliant,
    price: 46900, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.4, // Мощность охлаждения, кВт
    noise: 26, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuBrilliant,
    description: descriptionDahatsuBrilliant, // Описание

    // Охлаждение
    cooling: {
      performance: 3429, // Производительность, Вт
      powerConsumption: 1068, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3690, // Производительность, Вт
      powerConsumption: 1039, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "25м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 26, // Уровень шума, дБ (A)
      weight: 7.6, // Вес, кг
      size: "715x194x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 23.5, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DS-18i/DSN-18i ------
  {
    article: "dahatsu-ds-18i",
    title: "Dahatsu DS-18i/DSN-18i",
    type: "split-system",
    company: "Dahatsu",
    series: "Brilliant",
    link: "##",
    imgSrc: imagesDahatsuBrilliant,
    price: 70600, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.2, // Мощность охлаждения, кВт
    noise: 27, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuBrilliant,
    description: descriptionDahatsuBrilliant, // Описание

    // Охлаждение
    cooling: {
      performance: 5270, // Производительность, Вт
      powerConsumption: 1755, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5270, // Производительность, Вт
      powerConsumption: 1505, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "30м", // Макс. длина трассы, м
    maxHeightDifference: "20м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 27, // Уровень шума, дБ (A)
      weight: 10.6, // Вес, кг
      size: "957x213x302", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 56.5, // Уровень шума, дБ (A)
      weight: 32.6, // Вес, кг
      size: "805x330x554", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DS-24i/DSN-24i ------
  {
    article: "dahatsu-ds-24i",
    title: "Dahatsu DS-24i/DSN-24i",
    type: "split-system",
    company: "Dahatsu",
    series: "Brilliant",
    link: "##",
    imgSrc: imagesDahatsuBrilliant,
    price: 83300, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 29, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuBrilliant,
    description: descriptionDahatsuBrilliant, // Описание

    // Охлаждение
    cooling: {
      performance: 7030, // Производительность, Вт
      powerConsumption: 2510, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7330, // Производительность, Вт
      powerConsumption: 2440, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "50м", // Макс. длина трассы, м
    maxHeightDifference: "25м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 29, // Уровень шума, дБ (A)
      weight: 12.3, // Вес, кг
      size: "1040x220x327", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57.5, // Уровень шума, дБ (A)
      weight: 44.4, // Вес, кг
      size: "890x342673", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },
]

// ----- Dahatsu CLASSIC DC INVERTER (GW-H) -----

const functionsDahatsuClassicInverter = ["Компрессор GMCC Toshiba", "Класс энергоэффективности A",
  "Автоматическое качание заслонок", "Режим комфортного сна", "Зеленый фильтр высокой плотности",
  "Компактный дизайн", "Режим Turbo производительности", "Самоочистка внутреннего блока",
  "Golden fin", "Автоматический перезапуск", "Запоминание положения жалюзи", "Защитная крышка патрубов"];

const imagesDahatsuClassicInverter =
  ["./assets/img/catalog/dahatsu/GW-H/01.png",
    "./assets/img/catalog/dahatsu/GW-H/02.png",
    "./assets/img/catalog/dahatsu/GW-H/03.png",
    "./assets/img/catalog/dahatsu/GW-H/04.png"
  ];

const descriptionDahatsuClassicInverter = "Сплит-системы Dahatsu серии Classic DC Inverter - надежная классическая инверторная модель, выполненная из высококачественных материалов. Благодаря компактному дизайну, режиму комфортного сна и низкому уровню шума данную модель можно установить в любом помещении, даже в детской комнате. Модель снабжена всеми стандартными функциями сплит-системы: теплообменник Golden fin, скрытый дисплей, два направления воздушного потока, режим ECO. Дизайн в классическом стиле станет украшением любого интерьера, а новейшие технологии позволят наслаждаться идеальным микроклиматом в любое время года."

const DAHATSU_GW_H = [

  // ------ Dahatsu GW-07H ------
  {
    article: "dahatsu-gw-07h",
    title: "Dahatsu GW-07H",
    type: "split-system",
    company: "Dahatsu",
    series: "Classic DC Inverter",
    link: "##",
    imgSrc: imagesDahatsuClassicInverter,
    price: 34600, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.1, // Мощность охлаждения, кВт
    noise: 20, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuClassicInverter,
    description: descriptionDahatsuClassicInverter, // Описание

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
    maxTrackLength: "9м", // Макс. длина трассы, м
    maxHeightDifference: "5м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 20, // Уровень шума, дБ (A)
      weight: 6.5, // Вес, кг
      size: "700x198x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 21.5, // Вес, кг
      size: "660x240x530", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu GW-09H ------
  {
    article: "dahatsu-gw-09h",
    title: "Dahatsu GW-09H",
    type: "split-system",
    company: "Dahatsu",
    series: "Classic DC Inverter",
    link: "##",
    imgSrc: imagesDahatsuClassicInverter,
    price: 37300, // Цена
    area: 28, // На площадь, м²
    coolingCapacity: 2.5, // Мощность охлаждения, кВт
    noise: 20, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuClassicInverter,
    description: descriptionDahatsuClassicInverter, // Описание

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
    maxTrackLength: "10м", // Макс. длина трассы, м
    maxHeightDifference: "5м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 20, // Уровень шума, дБ (A)
      weight: 6.7, // Вес, кг
      size: "700x198x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 21.5, // Вес, кг
      size: "630x240x530", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu GW-12H ------
  {
    article: "dahatsu-gw-12h",
    title: "Dahatsu GW-12H",
    type: "split-system",
    company: "Dahatsu",
    series: "Classic DC Inverter",
    link: "##",
    imgSrc: imagesDahatsuClassicInverter,
    price: 43900, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.4, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuClassicInverter,
    description: descriptionDahatsuClassicInverter, // Описание

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
    maxTrackLength: "10м", // Макс. длина трассы, м
    maxHeightDifference: "5м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7, // Вес, кг
      size: "805x199x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 23, // Вес, кг
      size: "660x240x530", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu GW-18H ------
  {
    article: "dahatsu-gw-18h",
    title: "Dahatsu GW-18H",
    type: "split-system",
    company: "Dahatsu",
    series: "Classic DC Inverter",
    link: "##",
    imgSrc: imagesDahatsuClassicInverter,
    price: 69800, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 4.9, // Мощность охлаждения, кВт
    noise: 28, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuClassicInverter,
    description: descriptionDahatsuClassicInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 4950, // Производительность, Вт
      powerConsumption: 1545, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5000, // Производительность, Вт
      powerConsumption: 1390, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "5м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 28, // Уровень шума, дБ (A)
      weight: 10.5, // Вес, кг
      size: "900x199x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "780x270x560", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu GW-24H ------
  {
    article: "dahatsu-gw-24h",
    title: "Dahatsu GW-24H",
    type: "split-system",
    company: "Dahatsu",
    series: "Classic DC Inverter",
    link: "##",
    imgSrc: imagesDahatsuClassicInverter,
    price: 83600, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 6.8, // Мощность охлаждения, кВт
    noise: 30, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuClassicInverter,
    description: descriptionDahatsuClassicInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 6850, // Производительность, Вт
      powerConsumption: 2125, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7000, // Производительность, Вт
      powerConsumption: 1940, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "8м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 30, // Уровень шума, дБ (A)
      weight: 13, // Вес, кг
      size: "1025x238x320", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "860x320x720", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

]

// -----Denko Кассетный (DCS-A) -----

const functionsDenkoDCS_A = ["ON/OFF", "Инфракрасный пульт (в комплекте)", "Режим энергосбережения",
  "Самоочистка внутреннего блока", "Объемное воздухо-распределение", "Турборежим", "Тихий режим", "Горячий запуск",
"24-часовой таймер", "Режим I FEEL", "Автоматический режим выбора", "Автоматическая разморозка", "Работа в режиме охлаждения до -15°C",
"Работа в режиме обогрева до -15°C", "Дренажный насос", "Самодиагностика", "Низкотемпературный комплект",
  "Панель с круговым распределением воздушного потока", "HEALTH"];

const imagesDenkoDCS_A =
  ["./assets/img/catalog/Denko/dcs-a/01.png",
    "./assets/img/catalog/Denko/dcs-a/02.png",
    "./assets/img/catalog/Denko/dcs-a/03.png",
    "./assets/img/catalog/Denko/dcs-a/04.png"
  ];

const descriptionDenkoDCS_A = "Кассетная сплит-система DCS-A позволит быстро и равномерно создать и поддерживать комфортную температуру в помещении. Распределение воздуха на 360 градусов. Панель с круговым распределением воздушного потока обеспечивает эффективное охлаждение и обогрев. \n Данный вид кондиционеров интегрируется в подвесные потолки и осуществляет подачу воздуха в 4 потока. Новейшая модель DCS-A обладает привлекательным видом, компактными габаритами, множеством настроек и функций. \n Режим TURBO активирует максимальную производительность и позволяет быстрее достичь необходимой температуры."


const DENKO_DCS_A = [

  // ------ Denko DCS-12A ------
  {
    article: "denko-dcs-12a",
    title: "Denko DCS-12A",
    type: "cassette",
    company: "Denko",
    series: "DCS-A",
    factory: "GREE",
    link: "##",
    imgSrc: imagesDenkoDCS_A,
    price: 56000, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDCS_A,
    description: descriptionDenkoDCS_A, // Описание

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
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
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
      //compressorModel: "GREE",
    }
  },

  // ------ Denko DCS-18A ------
  {
    article: "denko-dcs-18a",
    title: "Denko DCS-18A",
    type: "cassette",
    company: "Denko",
    series: "DCS-A",
    factory: "GREE",
    link: "##",
    imgSrc: imagesDenkoDCS_A,
    price: 63200, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.3, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDCS_A,
    description: descriptionDenkoDCS_A, // Описание

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
      //compressorModel: "GREE",
    }
  },

  // ------ Denko DCS-24A ------
  {
    article: "denko-dcs-24a",
    title: "Denko DCS-24A",
    type: "cassette",
    company: "Denko",
    series: "DCS-A",
    factory: "GREE",
    link: "##",
    imgSrc: imagesDenkoDCS_A,
    price: 78000, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDCS_A,
    description: descriptionDenkoDCS_A, // Описание

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
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
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
      //compressorModel: "GREE",
    }
  },



]

// -----Denko Dragon (KR) -----

const functionsDenkoDragon = ["Компрессор GMCC Toshiba", "Класс энергоэффективности A", "Автоматическое качание заслонок", "Режим комфортного сна", "Зеленый фильтр высокой плотности", "Компактный дизайн",
  "Режим Turbo производительности", "Самоочистка внутреннего блока", "Golden fin", "Автоматический перезапуск",
  "Запоминание положения жалюзи", "Защитная крышка патрубков"];

const imagesDenkoDragon =
  ["./assets/img/catalog/Denko/kr/01.jpg",
    "./assets/img/catalog/Denko/kr/02.png",
    "./assets/img/catalog/Denko/kr/03.jpg",
    "./assets/img/catalog/Denko/kr/04.jpg"
  ];

const descriptionDenkoDragon = "Сплит-системы Denko серии Dragon - минималистичный, но в то же время элегантный дизайн внутреннего блока, эргономичный и удобный пульт ДУ и стильный внешний блок в комплекте создают идеальную, современную сплит-систему. Скрытый дисплей, зеленый фильтр высокой плотности, теплообменник Golden fin, два направления воздушного потока, экономичный режим ECO, самоочистка - все эти функции присутствуют в кондиционерах серии KR. Данная модель соответствует наивысшему классу энергоэффективности по российской классификации - классу A. При разработке были внедрены новейшие технологии, направленные на сокращение потребления электроэнергии. Комплекс классических режимов присутствует в данной серии: обогрев, охлаждение, осушение и вентиляция."


const DENKO_KR = [

  // ------ Denko KR-09 ------
  {
    article: "denko-kr-09",
    title: "Denko KR-09",
    type: "split-system",
    company: "Denko",
    series: "Dragon",
    factory: "Midea",
    link: "##",
    imgSrc: imagesDenkoDragon,
    price: 21000, // Цена
    area: 28, // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 23, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDragon,
    description: descriptionDenkoDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 2630, // Производительность, Вт
      powerConsumption: 817, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2690, // Производительность, Вт
      powerConsumption: 743, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "10м", // Макс. длина трассы, м
    maxHeightDifference: "5м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 23, // Уровень шума, дБ (A)
      weight: 6.5, // Вес, кг
      size: "700x198x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 20, // Вес, кг
      size: "660x250x421", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GREE",
    }
  },

  // ------ Denko KR-12 ------
  {
    article: "denko-kr-12",
    title: "Denko KR-12",
    type: "split-system",
    company: "Denko",
    series: "Dragon",
    factory: "Midea",
    link: "##",
    imgSrc: imagesDenkoDragon,
    price: 28900, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 25, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDragon,
    description: descriptionDenkoDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 3510, // Производительность, Вт
      powerConsumption: 1093, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3570, // Производительность, Вт
      powerConsumption: 986, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "15м", // Макс. длина трассы, м
    maxHeightDifference: "7м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 25, // Уровень шума, дБ (A)
      weight: 7.2, // Вес, кг
      size: "805x197x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 23.5, // Вес, кг
      size: "660x240x530", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GREE",
    }
  },

]

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
    link: "",
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
    link: "",
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
    link: "",
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
    link: "",
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

const dataDahatsu = [
  DAHATSU_DHP,
  DAHATSU_DS_I,
  DAHATSU_DA_H,
  DAHATSU_GW_H,
  DAHATSU_DH_CS_A,
  DAHATSU_DH_NP_A,
  DAHATSU_DH_KL_A,
];

const dataDenko = [
    DENKO_KR,
  DENKO_DCS_A,
];

const dataLG = [
  LG_Dual,
]

// Общий массив всех товаров
const productsArr = [
  dataDahatsu,
  dataDenko,
  dataLG,

].flat().flat();

//productsArr = productsArr.flat()



{

  let mySwiper;

  const swiperAbout = document.querySelector('.about__slider');

      mySwiper = new Swiper(swiperAbout, {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          types: "bullets",
        },

        // Откл функционала, если слайдов меньше, чем нужно
        watchOverflow: true,

        // Брейк поинты (адаптив)
        // Ширина экрана
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1.3,
            spaceBetween: 16,
          },

          640: {
            slidesPerView: 1.5,
            spaceBetween: 32,
          },

          768: {
            slidesPerView: 2.2,
            spaceBetween: 32,
          },

          1100: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }

      });

}

// function runningNumbers (num) {
//   const time = 1000; // ms
//   const step = 1000;
//   let n = 1;
//   let t = Math.round(time / (num / step) );
//   let interval = setInterval(() => {
//     n += step;
//     if (n === num) clearInterval(interval);
//     console.log(n)
//   }, t);
// };


// Всплывающее сообщение о добавлении товара в корзину
function alertSuccessAdd (cardTitle) {
  const div = document.createElement("div");
  div.classList.add("cart__alert");
  div.textContent = `Товар ${cardTitle} добавлен в корзину`;
  header.appendChild(div);
  setTimeout(() => div.remove(), 3000);
};



const cart = document.querySelector(".cart");

// Получение цены из строки в цифровом виде
function getPriceValue (card) {
  return +card.textContent.replace(/\s/g, "").replace(/^\D+/g, '').match(/\d+/);
};


if (cart) {
  const backBtn = cart.querySelector(".cart__back-btn");
  backBtn.addEventListener("click", () => history.back());

  // Рендер добавленных в корзину товаров на страницы Корзины
  addCartItemToPage ( getDataCartFromLocalStorage() );

  const cartItems = cart.querySelectorAll(".cart__item");
  const getCountCartItems = () => cart.querySelectorAll(".cart__item").length;

  // Назначаем количество товаров в корзине на странице корзины
  cart.querySelector(".cart__count").textContent = getCountCartItems();

  cartItems.forEach(cartItem => {
    const cartItemPrice = cartItem.querySelector(".cart-item__price");

    // Delete ------
    const deleteCartItemBtn = cartItem.querySelector(".cart-item__delete");
    deleteCartItemBtn.addEventListener("click", () => {
      cartItem.remove();
      cart.querySelector(".cart__count").textContent = getCountCartItems();
    });
    //--------------

    // Quantity --------
    const quantityItem = cartItem.querySelector(".cart-item__quantity");
    const incrementBtn = quantityItem.querySelector(".cart-item__quantity-increment");
    const decrementBtn = quantityItem.querySelector(".cart-item__quantity-decrement");
    const quantityInput = quantityItem.querySelector(".cart-item__quantity-input");

    // Подсчет суммы товара (зависит от количества)
    function sumCalcItem (priceValue) {
      priceValue = +quantityInput.value * priceForOne;
      return `${priceValue.toLocaleString("ru")} ₽`;
    };

    const disableDecrementBtn = () => decrementBtn.disabled = (quantityInput.value === '1');

    // Отображение суммы товара (зависит от количества)
    function setSumPrice () {
      const priceValue = +quantityInput.value * priceForOne;
      cartItemPrice.textContent = sumCalcItem(priceValue);
      disableDecrementBtn();
    };

    disableDecrementBtn();

    // Цена
    const priceForOne = getPriceValue(cartItemPrice);

    // Plus
    incrementBtn.addEventListener("click", () => {
      quantityInput.value = +quantityInput.value + 1;
      setSumPrice();
    });

    // Minus
    decrementBtn.addEventListener("click", () => {
      quantityInput.value = +quantityInput.value - 1;
      setSumPrice();
    });
    //--------------
  });


} // if (cart)

// Получить данные корзины из LocalStorage
function getDataCartFromLocalStorage () { return JSON.parse( localStorage.getItem("cart") || '[]' ); }

// Сделать активной иконку "Корзины", если в LocalStorage добавлены товары и указать кол-во заказов (даже при обновлении страницы)
function changeCartIcon () {
  const headerCart = document.querySelector(".header__cart");
  if (!headerCart) return;
  const headerCartCount = headerCart.querySelector(".header__cart-count");
  const localStorageLength = getDataCartFromLocalStorage().length;
  headerCart.classList.toggle("js-add-cart", localStorageLength > 0);
  headerCartCount.classList.toggle("js-cart-count-hidden", !localStorageLength);
  headerCartCount.textContent = localStorageLength || "";
};

window.addEventListener("load", changeCartIcon);


function handlerCart () {
  const cards = document.querySelectorAll('.card, .card-popular, .product-profile');

  if (cards) {
    cards.forEach(card => {
      const cartBtn = card.querySelector(".cart-btn");
      cartBtn.title = "Добавить в корзину";

      const cardTitle = card.querySelector(".product-title").textContent;
      const cardPrice = getPriceValue( card.querySelector(".product-price") );
      const cardSrcImg = card.querySelector(".product-img").src;



      // cartBtn.addEventListener("click", () => {
      //   const cartStorage = localStorage.getItem("cart") || "[]";
      //   const cart =  JSON.parse(cartStorage); // Массив товаров в корзине
      //   const card = { cardTitle, cardPrice };
      //   localStorage.setItem("cart", JSON.stringify([...cart, card]));
      // });

      // Добавление товара в корзину
      function addProductToCart () {
        addToCart();
        alertSuccessAdd(cardTitle);
        addCartItemToPage ( getDataCartFromLocalStorage() );
      };


      cartBtn.addEventListener("click", addProductToCart);


      // // Рендер карточки, добавленной в корзину на страницы корзины
      // function addCartItemToPage (addedProducts) {
      //   const cartListBlock = document.querySelector(".cart__list");
      //   const cartTemplate = document.querySelector("#cart-template")?.content.querySelector(".cart__item");
      //
      //   if (cartTemplate) {
      //     cartListBlock.replaceChildren();
      //
      //     addedProducts.forEach(addedProduct => {
      //       const cartItem = cartTemplate.cloneNode(true);
      //
      //       cartItem.querySelector(".cart-item__img").src = addedProduct.cardSrcImg;
      //       cartItem.querySelector(".cart-item__name").textContent = addedProduct.cardTitle;
      //       cartItem.querySelector(".cart-item__price").textContent = addedProduct.cardPrice;
      //       document.querySelector(".product-profile").appendChild(cartItem);
      //     });
      //   }
      // };






      // Добавление товара в LocalStorage (корзину)
      function addToCart () {
        const cartStorage = getDataCartFromLocalStorage(); // Получаем элементы корзины из LocalStorage
        const card = { cardSrcImg, cardTitle, cardPrice }; // Объект для корзины с заголовком и ценой
        localStorage.setItem("cart", JSON.stringify([...cartStorage, card]));
        //headerCart.classList.toggle("js-add-cart", getDataCartFromLocalStorage().length > 0);
        //headerCartCount.textContent = getDataCartFromLocalStorage().length || "";
        changeCartIcon();
      };


    });
  }
};



// Рендер карточки, добавленной в корзину на страницы корзины
function addCartItemToPage (addedProducts) {
  const cartListBlock = document.querySelector(".cart__list");
  const cartTemplate = document.querySelector("#cart-template")?.content.querySelector(".cart__item");

  if (cartTemplate && cartListBlock) {
    cartListBlock.replaceChildren();

    addedProducts.forEach(addedProduct => {
      const cartItem = cartTemplate.cloneNode(true);

      cartItem.querySelector(".cart-item__img").src = addedProduct.cardSrcImg;
      cartItem.querySelector(".cart-item__name").textContent = addedProduct.cardTitle;
      cartItem.querySelector(".cart-item__price").textContent = `${addedProduct.cardPrice.toLocaleString("ru")} ₽`;
      cartListBlock.appendChild(cartItem);
    });
  }
};




window.addEventListener("storage", (evt) => {
  addCartItemToPage ( getDataCartFromLocalStorage() );
  console.log(evt);
})

const filter = document.querySelector('.filter');

if (filter) {

  const filterItems = filter.querySelectorAll('.filter__item-title');

  const filterOpen = (filter) => filter.classList.add('js-filter-open');
  const filterHide = (filter) => filter.classList.remove('js-filter-open');

  // Показ/скрытие элементов фильтра
  filterItems.forEach(filterItem => {
    filterItem.addEventListener('click', () => {
      filterItem.classList.toggle('js-filter-open');

      // Скрыть все, кроме активного
      const inactiveFilters = Array.from(filterItems).filter(el => el !== filterItem);
      inactiveFilters.forEach(filterHide);

      // Скрыть по клику вне блока фильтра
      document.addEventListener('click', function (evt) {
        if (!evt.target.closest('.filter__item')) {
          filterItems.forEach(filterHide);
        }
      });
    });
  });

  const filterBtn = filter.querySelector('.filter__icon');
  const closeFilter = filter.querySelector('.filter__close');

  filterBtn.addEventListener('click', () => {
    filterOpen(filterBtn);
    blockScrollBody();
  });

  closeFilter.addEventListener('click', () => {
    filterHide(filterBtn);
    unblockScrollBody();
  });



  // --------------- Добавление кнопки на моб.версии ---------------

  const form = filter.querySelector('.filter__form');
  const btnForm = form.querySelector('.filter__form-submit');

  const visibleBtn = () => btnForm.classList.add('js-visible');
  const hiddenBtn = () => btnForm.classList.remove('js-visible');

  //checkboxes----------------------------
  const checkboxesForm = form.querySelectorAll('input[type="checkbox"]');

  function isSelectedCheckbox (checkboxes) {
    return Array.from(checkboxes).some(checkbox => checkbox.checked);
  };

  // Selects-----------------
  const selectsForm = form.querySelectorAll('select');

  function isSelectedOption (selects) {
    return Array.from(selects).some(select => select.selectedIndex !== 0);
  };

  // Inputs price-----------------
  const inputsNumberForm = form.querySelectorAll('input[type="number"]');

  function isEnteredPrice (inputsNumber) {
    return Array.from(inputsNumber).some(inputNumber => inputNumber.value !== "");
  };

  // Radio-----------------
  const radiosForm = form.querySelectorAll('input[type="radio"]');

  function isSelectedRadio (radioBtns) {
    return Array.from(radioBtns).some(radioBtn => radioBtn.checked);
  };

  form.addEventListener('change', () => {
    ( isSelectedCheckbox(checkboxesForm)
      || isSelectedOption(selectsForm)
      || isEnteredPrice(inputsNumberForm)
      || isSelectedRadio(radiosForm) ) ? visibleBtn() : hiddenBtn();
  });





  // ------- Фильтрация ---------

  const productsGrid = document.querySelector(".products__grid");

  const filterPrice = form.querySelector(".filter__item--price");
  const filterArea = form.querySelector(".filter__item--area");
  const filterInverter = form.querySelector(".filter__item--inverter");

  // -- filter price --

  // const minPriceInput = filterPrice.querySelector(".filter__price-min");
  // const maxPriceInput = filterPrice.querySelector(".filter__price-max");
  //
  // minPriceInput.addEventListener("input", filterPriceCards);
  // maxPriceInput.addEventListener("input", filterPriceCards);
  //
  // function filterPriceCards () {
  //   const minPriceValue = parseFloat(minPriceInput.value); // Введенное значение
  //   const maxPriceValue = parseFloat(maxPriceInput.value);
  // }


  // -- <filter company> --
    const filterCompany = form.querySelector(".filter__item--company");
    if (filterCompany) {
      const companyCheckboxes = filterCompany.querySelectorAll("input[type='checkbox']");
      let selectedCompanies = [];
      companyCheckboxes.forEach(companyCheckbox => {
        companyCheckbox.addEventListener('change', function () {
          if (this.checked) {
            selectedCompanies.push(this.value);
          } else {
            selectedCompanies = selectedCompanies.filter(el => el !== this.value);
          }
          const filteredCompanyArray = new Set(selectedCompanies); // Массив с выбранными производителями (компаниями)
          console.log(filteredCompanyArray);

          function filterCompany (companyArray) {
            if (companyArray) {
              companyArray.forEach(company => {
                const filteredCardsByCompanies = productsArr.filter(card => card.company === company);
                renderCard(filteredCardsByCompanies);
              })
            }
          };

          filterCompany(filteredCompanyArray)
        });
      });
    };
  // -- </filter company> --



  // -- <sorting cards> --

  const filterSortingSelect = filter.querySelector(".filter__sorting select");

  filterSortingSelect.addEventListener("change", function ()  {
    let sortingProducts = [];

    switch (this.value) {
      case "initial":
        renderCard(productsArr);
        break;
      case "cheaper":
        sortingProducts = [...productsArr].sort((a, b) => a.price - b.price);
        renderCard(sortingProducts);
        break;
      case "expensive":
        sortingProducts = [...productsArr].sort((a, b) => b.price - a.price);
        renderCard(sortingProducts);
        break;
      default:
        renderCard(productsArr);
    }
  });





  // -- </sorting cards> --



  // form.addEventListener("submit", (evt) => {
  //   evt.preventDefault();
  //   productsGrid.replaceChildren();
  //   renderCard(productsArr.slice(0, 3))
  // });




}



const header = document.querySelector('header.header');
const menu = header.querySelector('.header__nav');
const burger = header.querySelector('.header__burger');
const menuClose = header.querySelector('.header__nav-close');

burger.addEventListener('click', () => {
  menu.classList.add('js-menu-open');
  blockScrollBody();
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('js-menu-open');
  unblockScrollBody();
});




const loader = document.querySelector('.loader');

if (loader) {

  function hideLoader () {
    loader.classList.add('hide');
    setTimeout(() => loader.remove(), 300);
  };

  window.addEventListener('load', hideLoader);
}

const swiperPopular = document.querySelector('.popular__slider');

if (swiperPopular) {
setTimeout(createPopularSlider, 0);
}


function createPopularSlider () {
  const mySwiper = new Swiper(swiperPopular, {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,

    // Ширина экрана
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      380: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },
      480: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },

      640: {
        slidesPerView: "auto",
        spaceBetween: 32,
      },

      1100: {
        slidesPerView: "auto",
        spaceBetween: 32,
      },
    }
  });
}


const popular = document.querySelector('.popular');

if (popular) {

  const cardPopularTemplate = document.querySelector('#template-card-popular').content.querySelector('.card-popular.swiper-slide');
  const swiperWrapperPopular = document.querySelector('.popular__slider .swiper-wrapper');

  // Список артикулов товаров, которые выводятся в блоке (слайдере) "Популярное"
  const articlesPopularCards = ["dahatsu-DHP-07", "denko-kr-09", "lg-p07sp2"];

  // Создание карточек товара для блока "Популярное", используется общий массив данных товара.
  // Для выбора карточек в функцию передается массив с артикулами товара
  function createCardPopular (products, articles) {

    products.forEach(product => {

      articles.forEach(article => {
        if (product.article === article) {
          const popularItem = cardPopularTemplate.cloneNode(true);

          popularItem.dataset.article = article;
          popularItem.querySelector('.card-popular__link').href = product.link;
          popularItem.querySelector('.card-popular__img').src = product.imgSrc[0];
          popularItem.querySelector('.card-popular__title').textContent = product.title;
          popularItem.querySelector('.card-popular__price').textContent = `${product.price.toLocaleString("ru")} ₽`;
          popularItem.querySelector('.card-popular__data-item-value--area').textContent = `${product.area} м²`;
          popularItem.querySelector('.card-popular__data-item-value--coolingCapacity').textContent = `${product.coolingCapacity} кВт`;
          popularItem.querySelector('.card-popular__data-item-value--noise').textContent = `${product.noise} дБ`;
          popularItem.querySelector('.card-popular__data-item-value--inverter').textContent = `${product.inverter ? "Есть" : "Нет"}`;
          swiperWrapperPopular.appendChild(popularItem);
          handlerCart();
        }
      })
    });
  };

  createCardPopular(productsArr, articlesPopularCards);

}



const productProfile = document.querySelector('.product-profile');

if (productProfile) {
  setTimeout(createProductProfileSlider, 0);

const descText = productProfile.querySelector(".product-profile__desc-text");
const showMoreBtn = productProfile.querySelector(".product-profile__desc-show-more-btn");

// Кнопка "Показать больше" для описания
  showMoreBtn.addEventListener("click", () => {
    descText.classList.add("js-show-more");
  });

}

// Слайдер с миниатюрами
function createProductProfileSlider () {

  const swiperTop = productProfile.querySelector('.swiper-top');
  const swiperThumbs = productProfile.querySelector('.swiper-thumbs');

  let swiper__thumbs = new Swiper(swiperThumbs, {
    spaceBetween: 28,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    initialSlide: 0,
  });

  let swiper__top = new Swiper(swiperTop, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 0,
    thumbs: {
      swiper: swiper__thumbs,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });


}


// Создание массива карточек товара в соответствии с данными из массива объектов
function renderCard (products) {
  const productsGrid = document.querySelector(".products__grid");
  const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

  if (productsGrid && cardTemplate) {
    productsGrid.replaceChildren();

    products.forEach(product => {
      const cardItem = cardTemplate.cloneNode(true);

      cardItem.dataset.article = product.article;
      cardItem.querySelector('.card__link').href = product.link;
      cardItem.querySelector('.card__img').src = product.imgSrc[0];
      cardItem.querySelector('.card__title').textContent = product.title;
      cardItem.querySelector('.card__price').textContent = `${product.price.toLocaleString("ru")} ₽`;
      cardItem.querySelector('.card__data-item-value--area').textContent = `${product.area} м²`;
      cardItem.querySelector('.card__data-item-value--coolingCapacity').textContent = `${product.coolingCapacity} кВт`;
      cardItem.querySelector('.card__data-item-value--noise').textContent = `${product.noise} дБ`;
      cardItem.querySelector('.card__data-item-value--inverter').textContent = `${product.inverter ? "Есть" : "Нет"}`;
      productsGrid.appendChild(cardItem);
    });
    handlerCart();
  }
};
//---------------

// Отрисовать все карточки товара на главной странице каталога
const productsMain = document.querySelector(".products.products--main");
if (productsMain) renderCard(productsArr);


// Отрисовка карточек на странице выбранной категории в соответствии с категорией
function addProductsOfCategory (blockCategory, category) {
  if (blockCategory) {
    const categoryArray = productsArr.filter(card => card.type === category);
    renderCard(categoryArray);
    return categoryArray;
  }
};


const blockSplitSystems = document.querySelector(".products.products--split-systems");
const blockFloorCeiling = document.querySelector(".products.products--floor-ceiling");
const blockDucted = document.querySelector(".products.products--ducted");
const blockCassette = document.querySelector(".products.products--cassette");
const blockColumn = document.querySelector(".products.products--column");
const blockMultiSplitSystems = document.querySelector(".products.products--multi-split-systems");

// Массивы товаров (объектов) по соответствующим категорям
const splitSystems_Products = addProductsOfCategory(blockSplitSystems, "split-system"); // Сплит-системы
const floorCeiling_Products = addProductsOfCategory(blockFloorCeiling, "floor-ceiling"); // Напольно-потолочные
const ducted_Products = addProductsOfCategory(blockDucted, "ducted"); // Канальные
const cassettes_Products = addProductsOfCategory(blockCassette, "cassette"); // Кассетные
const column_Products = addProductsOfCategory(blockColumn, "column"); // Колонные
const multiSplitSystems_Products = addProductsOfCategory(blockMultiSplitSystems, "multi-split-systems"); // Мульти сплит-системы









  // // Первично загружаются первые 6 карточек
  // const startProductsArr = productsArr.slice(0, 6);
  //
  // // Отрисовка первичных картчоек при загрузке страницы
  // window.addEventListener("load", () => createCard (startProductsArr));
  //
  // let loadedCards = 6; // С номерка какой карточки в массиве начать "ленивую" загрузку
  // let cardsPerPage = 6; // Сколько карточек будет прибавляться при "ленивой" загрузке
  //
  // function lazyLoadingCards (products) {
  //   const windowsHeight = window.innerHeight;
  //   const documentHeight = document.body.offsetHeight;
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //
  //   if (windowsHeight + scrollTop >= documentHeight - 500) {
  //     const renderedCards = products.slice(loadedCards, loadedCards+cardsPerPage);
  //     loadedCards += renderedCards.length;
  //       createCard (renderedCards);
  //   }
  // };
  //
  // window.addEventListener("scroll", () => lazyLoadingCards(productsArr));
