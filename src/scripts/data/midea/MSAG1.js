// ----- Midea Paramount (MSAG1) -----

const functionsMideaParamount = ["Фильтр высокой плотности", "Фотокаталитический фильтр", "Автоматическое качание заслонки", "Нагрев до 8°C", "Турбо охлаждение", "2 варианта включения",
"Самоочистка", "Тихий внутренний блок", "Таймер", "Авторестарт", "Контроль влажности", "Ночной режим", "Обнаружение утечки хладагента", "Локальный комфорт Follow Me", "Самодиагностика",
"i-Remote", "Wi-Fi Control (опция)"];


const srcToFolderMideaParamount = "./assets/img/catalog/midea/MSAG1";

const imagesMideaParamount =
  [ `${srcToFolderMideaParamount}/01.jpg`,
    `${srcToFolderMideaParamount}/02.jpg`,
    `${srcToFolderMideaParamount}/03.jpg`,
    `${srcToFolderMideaParamount}/04.jpg`,
  ];

const pricesMideaParamount = {
  "midea_msag1_07hrn1": 29900,
  "midea_msag1_09hrn1": 32690,
  "midea_msag1_12hrn1": 37190,
  "midea_msag1_18hrn1": 57990,
  "midea_msag1_24hrn1": 74890,
}


const descriptionMideaParamount = "Сплит-система Midea серии Paramount заправляется озонобезопасным хладагентом R410a, который способствует повышению сезонной энергоэффективности техники. Помимо основного фильтра высокой плотности, здесь установлен фотокаталитический фильтр, который активно уничтожает любые органические соединения и устраняет неприятные запахи. Благодаря функции «Любимые настройки» кондиционер можно запустить в удобном для себя режиме работы нажатием одной кнопки. Заслонки двигаются в автоматическом режиме, обеспечивая равномерное распределение воздушных потоков по всему внутреннему пространству. При этом предусмотрено запоминание положения жалюзи. Тёплый запуск, самоочистка и самодиагностика гарантируют длительную и безаварийную работу техники, независимо от условий эксплуатации."


const MIDEA_PARAMOUNT = [

  // ------ Midea MSAG1-07HRN1-I / MSAG1-07HRN1-O ------
  {
    article: "midea-msag1-07hrn1",
    title: "Midea Paramount MSAG1-07HRN1-I / MSAG1-07HRN1-O",
    type: "split-system",
    company: "Midea",
    series: "Paramount",
    link: "midea-msag1-07hrn1.html",
    imgSrc: imagesMideaParamount,
    price: pricesMideaParamount.midea_msag1_07hrn1, // Цена
    area: 22 , // На площадь, м²
    coolingCapacity: 2.34, // Мощность охлаждения, кВт
    noise: 26.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsMideaParamount,
    description: descriptionMideaParamount, // Описание

    // Охлаждение
    cooling: {
      performance: 2340, // Производительность, Вт
      powerConsumption: 710, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2340, // Производительность, Вт
      powerConsumption: 630, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 10, // Макс. длина трассы, м
    maxHeightDifference: 8, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 26.5, // Уровень шума, дБ (A)
      weight: 7.4, // Вес, кг
      size: "729x292x200", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: "-", // Уровень шума, дБ (A)
      weight: 24.6, // Вес, кг
      size: "720x495x270", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Midea MSAG1-09HRN1-I / MSAG1-09HRN1-O ------
  {
    article: "midea-msag1-09hrn1",
    title: "Midea Paramount MSAG1-09HRN1-I / MSAG1-09HRN1-O",
    type: "split-system",
    company: "Midea",
    series: "Paramount",
    link: "midea-msag1-09hrn1.html",
    imgSrc: imagesMideaParamount,
    price: pricesMideaParamount.midea_msag1_09hrn1, // Цена
    area: 28 , // На площадь, м²
    coolingCapacity: 2.64, // Мощность охлаждения, кВт
    noise: 29.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsMideaParamount,
    description: descriptionMideaParamount, // Описание

    // Охлаждение
    cooling: {
      performance: 2640, // Производительность, Вт
      powerConsumption: 820, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2780, // Производительность, Вт
      powerConsumption: 770, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 8, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 29.5, // Уровень шума, дБ (A)
      weight: 8.5, // Вес, кг
      size: "729x292x200", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: "-", // Уровень шума, дБ (A)
      weight: 24.9, // Вес, кг
      size: "720x495x270", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Midea MSAG1-12HRN1-I / MSAG1-12HRN1-O ------
  {
    article: "midea-msag1-12hrn1",
    title: "Midea Paramount MSAG1-12HRN1-I / MSAG1-12HRN1-O",
    type: "split-system",
    company: "Midea",
    series: "Paramount",
    link: "midea-msag1-12hrn1.html",
    imgSrc: imagesMideaParamount,
    price: pricesMideaParamount.midea_msag1_12hrn1, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.52, // Мощность охлаждения, кВт
    noise: 28.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsMideaParamount,
    description: descriptionMideaParamount, // Описание

    // Охлаждение
    cooling: {
      performance: 3520, // Производительность, Вт
      powerConsumption: 1100, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3660, // Производительность, Вт
      powerConsumption: 990, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 8, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 28.5, // Уровень шума, дБ (A)
      weight: 9.3, // Вес, кг
      size: "802x295x200", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: "-", // Уровень шума, дБ (A)
      weight: 27.1, // Вес, кг
      size: "720x495x270", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Midea MSAG1-18HRN1-I / MSAG1-18HRN1-O ------
  {
    article: "midea-msag1-18hrn1",
    title: "Midea Paramount MSAG1-18HRN1-I / MSAG1-18HRN1-O",
    type: "split-system",
    company: "Midea",
    series: "Paramount",
    link: "midea-msag1-18hrn1.html",
    imgSrc: imagesMideaParamount,
    price: pricesMideaParamount.midea_msag1_18hrn1, // Цена
    area: 55 , // На площадь, м²
    coolingCapacity: 5.28, // Мощность охлаждения, кВт
    noise: 30, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsMideaParamount,
    description: descriptionMideaParamount, // Описание

    // Охлаждение
    cooling: {
      performance: 5280, // Производительность, Вт
      powerConsumption: 1640, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5280, // Производительность, Вт
      powerConsumption: 1460, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 8, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 30, // Уровень шума, дБ (A)
      weight: 12.3, // Вес, кг
      size: "971x321x228", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: "-", // Уровень шума, дБ (A)
      weight: 34.8, // Вес, кг
      size: "765x555x303", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Midea MSAG1-24HRN1-I / MSAG1-24HRN1-O ------
  {
    article: "midea-msag1-24hrn1",
    title: "Midea Paramount MSAG1-24HRN1-I / MSAG1-24HRN1-O",
    type: "split-system",
    company: "Midea",
    series: "Paramount",
    link: "midea-msag1-24hrn1.html",
    imgSrc: imagesMideaParamount,
    price: pricesMideaParamount.midea_msag1_24hrn1, // Цена
    area: 75 , // На площадь, м²
    coolingCapacity: 7.03, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsMideaParamount,
    description: descriptionMideaParamount, // Описание

    // Охлаждение
    cooling: {
      performance: 7030, // Производительность, Вт
      powerConsumption: 2190, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7330, // Производительность, Вт
      powerConsumption: 2030, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 8, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 14.7, // Вес, кг
      size: "1082x337x234", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: "-", // Уровень шума, дБ (A)
      weight: 52.9, // Вес, кг
      size: "890x673x342", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

];
