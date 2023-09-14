// ----- Daichi ICE (ICE-AVQ1-1/ICE-FV1-1) -----

const functionsDaichiIce = ["Турбо", "Фильтр предварительной очистки", "Самодиагностика", "Режим осушения воздуха", "Коррозионная стойкость", "Wi-Fi, онлайн управление (опция)",
                            "Функция «Комфортный сон»", "Бесшумный режим работы", "Фотокаталитический фильтр", "Противоплесневая обработка", "Информационный LED дисплей"];

const imagesDaichiIce =
  ["./assets/img/catalog/daichi/ice/01.jpg",
    "./assets/img/catalog/daichi/ice/02.jpg",
    "./assets/img/catalog/daichi/ice/03.jpg",
  ];

const descriptionDaichiIce = "Информационный LED-дисплей. Функция «комфортный сон» позволяет создать приятные условия для отдыха, также снижается потребление электроэнергии. Подготовка к теплому старту. В режиме обогрева вентилятор внутреннего блока включается только после прогрева теплообменника внутреннего блока. Режим «Standby» корректирует поддерживаемую в помещении температуру на 2 °С, снижая тем самым энергопотребление. Функция отключения/включения дисплея внутреннего блока режим локального комфорта IFeel - желаемые параметры микроклимата устанавливаются в месте расположения пульта дистанционного управления. Автоматический перезапуск, Wi-Fi, удаленное онлайн-управление через «облако Даичи» (опция)."

const pricesDaichiIce = {
  "daichi_ice20avq1_1": 29500,
  "daichi_ice25avq1_1": 29500,
  "daichi_ice35avq1_1": 36900,
  "daichi_ice50avq1": 63500,
  "daichi_ice60avq1": 79500,
}

const DAICHI_ICE = [

  // ------ Daichi ICE ICE20AVQ1-1/ICE20FV1-1 ------
  {
    article: "daichi_ice20avq1_1",
    title: "Daichi ICE ICE20AVQ1-1/ICE20FV1-1",
    type: "split-system",
    company: "Daichi",
    series: "Ace",
    link: "daichi-ice20avq1-1.html",
    imgSrc: imagesDaichiIce,
    price: pricesDaichiIce.daichi_ice20avq1_1, // Цена
    area: 20 , // На площадь, м²
    coolingCapacity: 2.3, // Мощность охлаждения, кВт
    noise: 26, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDaichiIce,
    description: descriptionDaichiIce, // Описание

    // Охлаждение
    cooling: {
      performance: 2300, // Производительность, Вт
      powerConsumption: 700, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2250, // Производительность, Вт
      powerConsumption: 700, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 26, // Уровень шума, дБ (A)
      weight: 7.5, // Вес, кг
      size: "698x185x250", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 48, // Уровень шума, дБ (A)
      weight: 22.3, // Вес, кг
      size: "710x293x450", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Daichi ICE ICE25AVQ1-1/ICE25FV1-1 ------
  {
    article: "daichi_ice25avq1_1",
    title: "Daichi ICE ICE25AVQ1-1/ICE25FV1-1",
    type: "split-system",
    company: "Daichi",
    series: "Ace",
    link: "daichi-ice25avq1-1.html",
    imgSrc: imagesDaichiIce,
    price: pricesDaichiIce.daichi_ice25avq1_1, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.5, // Мощность охлаждения, кВт
    noise: 26, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDaichiIce,
    description: descriptionDaichiIce, // Описание

    // Охлаждение
    cooling: {
      performance: 2550, // Производительность, Вт
      powerConsumption: 790, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2650, // Производительность, Вт
      powerConsumption: 730, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 26, // Уровень шума, дБ (A)
      weight: 7.7, // Вес, кг
      size: "698x185x250", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 24.7, // Вес, кг
      size: "710x293x450", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Daichi ICE ICE35AVQ1-1/ICE35FV1-1 ------
  {
    article: "daichi_ice35avq1_1",
    title: "Daichi ICE ICE35AVQ1-1/ICE35FV1-1",
    type: "split-system",
    company: "Daichi",
    series: "Ace",
    link: "daichi-ice35avq1-1.html",
    imgSrc: imagesDaichiIce,
    price: pricesDaichiIce.daichi_ice35avq1_1, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.4, // Мощность охлаждения, кВт
    noise: 28, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDaichiIce,
    description: descriptionDaichiIce, // Описание

    // Охлаждение
    cooling: {
      performance: 3400, // Производительность, Вт
      powerConsumption: 1010, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3250, // Производительность, Вт
      powerConsumption: 940, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 28, // Уровень шума, дБ (A)
      weight: 8.5, // Вес, кг
      size: "773x185x250", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "732x330x555", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Daichi ICE ICE50AVQ1/ICE50FV1 ------
  {
    article: "daichi_ice50avq1",
    title: "Daichi ICE ICE50AVQ1/ICE50FV1",
    type: "split-system",
    company: "Daichi",
    series: "Ace",
    link: "daichi-ice50avq1.html",
    imgSrc: imagesDaichiIce,
    price: pricesDaichiIce.daichi_ice50avq1, // Цена
    area: 50 , // На площадь, м²
    coolingCapacity: 4.8, // Мощность охлаждения, кВт
    noise: 31, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDaichiIce,
    description: descriptionDaichiIce, // Описание

    // Охлаждение
    cooling: {
      performance: 4800, // Производительность, Вт
      powerConsumption: 1500, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5300, // Производительность, Вт
      powerConsumption: 1470, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 31, // Уровень шума, дБ (A)
      weight: 11, // Вес, кг
      size: "849x215x289", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 39, // Вес, кг
      size: "848x320x540", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Daichi ICE ICE60AVQ1/ICE60FV1 ------
  {
    article: "daichi_ice60avq1",
    title: "Daichi ICE ICE60AVQ1/ICE60FV1",
    type: "split-system",
    company: "Daichi",
    series: "Ace",
    link: "daichi-ice60avq1.html",
    imgSrc: imagesDaichiIce,
    price: pricesDaichiIce.daichi_ice60avq1, // Цена
    area: 60 , // На площадь, м²
    coolingCapacity: 6.2, // Мощность охлаждения, кВт
    noise: 37, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDaichiIce,
    description: descriptionDaichiIce, // Описание

    // Охлаждение
    cooling: {
      performance: 6200, // Производительность, Вт
      powerConsumption: 1920, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 6700, // Производительность, Вт
      powerConsumption: 1860, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 37, // Уровень шума, дБ (A)
      weight: 13.5, // Вес, кг
      size: "970x225x300", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 50, // Вес, кг
      size: "913x378x680", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },




];
