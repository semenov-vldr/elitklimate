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
