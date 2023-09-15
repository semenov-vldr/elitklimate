// ----- Midea Unlimited (MSAG2) -----

const functionsMideaUnlimited = ["Wi-Fi-контроллер (опция)", "Цифровой дисплей", "I-Remote", "Самоочистка внутреннего блока", "Турбо охлаждение", "Локальный комфорт Follow Me",
                                  "Управление кондиционером без пульта", "Таймер", "Самодиагностика", "Запоминание положения жалюзи", "Технология Golden Fin", "Обнаружение утечки хладагента"];


const srcToFolderMideaUnlimited = "./assets/img/catalog/midea/unlimited";

const imagesMideaUnlimited =
  [ `${srcToFolderMideaUnlimited}/01.jpg`,
    `${srcToFolderMideaUnlimited}/02.jpg`,
    `${srcToFolderMideaUnlimited}/03.jpg`,
    `${srcToFolderMideaUnlimited}/04.jpg`,
  ];

const pricesMideaUnlimited = {
  "midea_msag2_07hrn1_i": 29900,
  "midea_msag2_09hrn1_i": 32600,
}


const descriptionMideaUnlimited = "Сплит-система Midea серии Paramount заправляется озонобезопасным хладагентом R410a, который способствует повышению сезонной энергоэффективности техники. Помимо основного фильтра высокой плотности, здесь установлен фотокаталитический фильтр, который активно уничтожает любые органические соединения и устраняет неприятные запахи. Благодаря функции «Любимые настройки» кондиционер можно запустить в удобном для себя режиме работы нажатием одной кнопки. Заслонки двигаются в автоматическом режиме, обеспечивая равномерное распределение воздушных потоков по всему внутреннему пространству. При этом предусмотрено запоминание положения жалюзи. Тёплый запуск, самоочистка и самодиагностика гарантируют длительную и безаварийную работу техники, независимо от условий эксплуатации."


const MIDEA_UNLIMITED = [

  // ------ Midea MSAG2-07HRN1-I/MSAG2-07HRN1-O ------
  {
    article: "midea-msag2-07hrn1-i",
    title: "Midea Unlimited MSAG2-07HRN1-I/MSAG2-07HRN1-O",
    type: "split-system",
    company: "Midea",
    series: "Unlimited",
    link: "midea-msag2-07hrn1-i.html",
    imgSrc: imagesMideaUnlimited,
    price: pricesMideaUnlimited.midea_msag2_07hrn1_i, // Цена
    area: 20 , // На площадь, м²
    coolingCapacity: 2.34, // Мощность охлаждения, кВт
    noise: 26.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsMideaUnlimited,
    description: descriptionMideaUnlimited, // Описание

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
      size: "726x210x291", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: "", // Уровень шума, дБ (A)
      weight: 24.6, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Midea MSAG2-09HRN1-I/MSAG2-09HRN1-O ------
  {
    article: "midea-msag2-09hrn1-i",
    title: "Midea Unlimited MSAG2-09HRN1-I/MSAG2-09HRN1-O",
    type: "split-system",
    company: "Midea",
    series: "Unlimited",
    link: "midea-msag2-09hrn1-i.html",
    imgSrc: imagesMideaUnlimited,
    price: pricesMideaUnlimited.midea_msag2_09hrn1_i, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.64, // Мощность охлаждения, кВт
    noise: 29.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsMideaUnlimited,
    description: descriptionMideaUnlimited, // Описание

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
      size: "726x210x291", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: "", // Уровень шума, дБ (A)
      weight: 24.9, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },




];
