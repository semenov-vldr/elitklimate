// ----- Kentatsu Ichi (KSGI-HFAN1/KSRI-HFAN1) -----

const functionsKentatsuIchi = ["Антикоррозийное покрытие Golden Fin", "Управление скоростью вентилятора", "Функция «Комфортный сон»", "Защита от коррозии", "Осушение воздуха",
                                "Быстрый выход на режим", "Обнаружение утечки хладагента", "Wi-Fi Control (опция)", "Цифровой дисплей", "Функция «Не беспокоить»"];

const srcToFolderKentatsuIchi = "./assets/img/catalog/kentatsu/ichi/";

const imagesKentatsuIchi = [
  `${srcToFolderKentatsuIchi}01.jpg`,
  `${srcToFolderKentatsuIchi}02.jpg`,
  `${srcToFolderKentatsuIchi}03.jpg`,
  `${srcToFolderKentatsuIchi}04.jpg`,
]

const descriptionKentatsuIchi = "Kentatsu из года в год успешно сохраняет завоеванные позиции одного из лидеров климатического рынка. Новая серия Kentatsu Ichi, платформа была разработана специально для сезона 2021. Серия настенных сплит-систем ICHI On/Off разработана компанией Kentatsu для работы в жилых, офисных, торговых помещениях небольших магазинов. Современный стиль оформления внутреннего блока, насыщенность многообразием режимов и функций. Улучшена система контроля и защиты. В модельном ряду 5 типоразмеров мощностью от 2,34 до 7,03 кВт — все они обладают классами энергоэффективности «А» в режиме охлаждения и обогрева. Данная сплит-система производит все необходимые действия для реализации задач, установленных пользователем. Для этого используется пульт ДУ с доступными режимами, которые удобны и понятны. А при задействовании ночного режима внутренний блок начинает работать по определенному алгоритму для создания комфорта на ночь."

const pricesKentatsuIchi = {
  "kentatsu_ksgi21hfan1": 27500,
  "kentatsu_ksgi26hfan1": 29900,
  "kentatsu_ksgi35hfan1": 37900,
  "kentatsu_ksgi53hfan1": 57900,
  "kentatsu_ksgi70hfan1": 76500,

}

const KENTATSU_ICHI = [

  // ------ Kentatsu Ichi KSGI21HFAN1/KSRI21HFAN1 ------
  {
    article: "kentatsu-ksgi21hfan1",
    title: "Kentatsu Ichi KSGI21HFAN1/KSRI21HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Ichi",
    link: "kentatsu-ksgi21hfan1.html",
    imgSrc: imagesKentatsuIchi,
    price: pricesKentatsuIchi.kentatsu_ksgi21hfan1, // Цена
    area: 20 , // На площадь, м²
    coolingCapacity: 2.3, // Мощность охлаждения, кВт
    noise: 26.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsKentatsuIchi,
    description: descriptionKentatsuIchi, // Описание

    // Охлаждение
    cooling: {
      performance: 2300, // Производительность, Вт
      powerConsumption: 710, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2300, // Производительность, Вт
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
      size: "729x200x292", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 48, // Уровень шума, дБ (A)
      weight: 24.6, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Kentatsu Ichi KSGI26HFAN1/KSRI26HFAN1 ------
  {
    article: "kentatsu-ksgi26hfan1",
    title: "Kentatsu Ichi KSGI26HFAN1/KSRI26HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Ichi",
    link: "kentatsu-ksgi26hfan1.html",
    imgSrc: imagesKentatsuIchi,
    price: pricesKentatsuIchi.kentatsu_ksgi26hfan1, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 29.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsKentatsuIchi,
    description: descriptionKentatsuIchi, // Описание

    // Охлаждение
    cooling: {
      performance: 2600, // Производительность, Вт
      powerConsumption: 820, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2800, // Производительность, Вт
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
      size: "729x200x292", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 24.9, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Kentatsu Ichi KSGI35HFAN1/KSRI35HFAN1 ------
  {
    article: "kentatsu-ksgi35hfan1",
    title: "Kentatsu Ichi KSGI35HFAN1/KSRI35HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Ichi",
    link: "kentatsu-ksgi35hfan1.html",
    imgSrc: imagesKentatsuIchi,
    price: pricesKentatsuIchi.kentatsu_ksgi35hfan1, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 28.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsKentatsuIchi,
    description: descriptionKentatsuIchi, // Описание

    // Охлаждение
    cooling: {
      performance: 3500, // Производительность, Вт
      powerConsumption: 1100, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3700, // Производительность, Вт
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
      size: "802x200x295", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 27.1, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Kentatsu Ichi KSGI53HFAN1/KSRI53HFAN1 ------
  {
    article: "kentatsu-ksgi53hfan1",
    title: "Kentatsu Ichi KSGI53HFAN1/KSRI53HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Ichi",
    link: "kentatsu-ksgi53hfan1.html",
    imgSrc: imagesKentatsuIchi,
    price: pricesKentatsuIchi.kentatsu_ksgi53hfan1, // Цена
    area: 50 , // На площадь, м²
    coolingCapacity: 5.3, // Мощность охлаждения, кВт
    noise: 30, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsKentatsuIchi,
    description: descriptionKentatsuIchi, // Описание

    // Охлаждение
    cooling: {
      performance: 5300, // Производительность, Вт
      powerConsumption: 1640, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5300, // Производительность, Вт
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
      size: "971x228x321", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 34.8, // Вес, кг
      size: "765x303x555", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Kentatsu Ichi KSGI70HFAN1/KSRI70HFAN1 ------
  {
    article: "kentatsu-ksgi70hfan1",
    title: "Kentatsu Ichi KSGI70HFAN1/KSRI70HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Ichi",
    link: "kentatsu-ksgi70hfan1.html",
    imgSrc: imagesKentatsuIchi,
    price: pricesKentatsuIchi.kentatsu_ksgi70hfan1, // Цена
    area: 70 , // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsKentatsuIchi,
    description: descriptionKentatsuIchi, // Описание

    // Охлаждение
    cooling: {
      performance: 7000, // Производительность, Вт
      powerConsumption: 2190, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7300, // Производительность, Вт
      powerConsumption: 2030, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 14.7, // Вес, кг
      size: "1082x234x337", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 56, // Уровень шума, дБ (A)
      weight: 52.9, // Вес, кг
      size: "890x342x673", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

];
