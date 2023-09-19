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


const description_Dahatsu_DH_KL_A = "Сплит-система Dahatsu DH-KL-A колонного типа благодаря своей конструкции обеспечивает оптимальное распространение охлажденных/ нагретых воздушных потоков, а также ликвидацию холодных и теплых зон. Колонна - это эффективное и современное приспособление, которое имеет расширенный функционал для обеспечения благоприятный условий. С панели управления на внутреннем блоке можно осуществлять следующие действия: включение и выключение кондиционера, блокировка режима, выбор скорости вращения вентилятора, выбор режима работы, установка заданной температуры, установка времени и таймера, включение покачивания заслонками."


const DAHATSU_DH_KL_A = [

  // Dahatsu DH-KL-48CH
  {
    article: "dahatsu-dh-kl-48ch",
    title: "Dahatsu DH-KL-48CH",
    type: "column",
    company: "Dahatsu",
    series: "DH-KL-A",
    factory: "AUX",
    link: "dahatsu-dh-kl-48ch.html",
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
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
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
    link: "dahatsu-dkl-60gr.html",
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
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
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
    link: "dahatsu-dh-kl-100a.html",
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
    maxTrackLength: 50, // Макс. длина трассы, м
    maxHeightDifference: 20, // Макс. перепад высот, м
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
