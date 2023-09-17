// ----- Kentatsu Kanami Inverter (KSGA-HZRN1/KSRA-HZRN1) -----

const functionsKentatsuKanamiInverter = ["Антикоррозийное покрытие Golden Fin", "Управление скоростью вентилятора", "Функция «Комфортный сон»", "Защита от коррозии", "Осушение воздуха",
                                "Быстрый выход на режим", "Обнаружение утечки хладагента", "Wi-Fi Control (опция)", "Цифровой дисплей", "Функция «Не беспокоить»"];

const srcToFolderKentatsuKanamiInverter = "./assets/img/catalog/kentatsu/kanami-inverter/";

const imagesKentatsuKanamiInverter = [
  `${srcToFolderKentatsuKanamiInverter}01.jpg`,
  `${srcToFolderKentatsuKanamiInverter}02.jpg`,
  `${srcToFolderKentatsuKanamiInverter}03.jpg`,
  `${srcToFolderKentatsuKanamiInverter}04.jpg`,
]

const descriptionKentatsuKanamiInverter = "Кондиционер Kentatsu Kanami Inverter, соединивший в себе современные способы заботы об окружающей среде и технологии, повышающие уровень комфорта. Тенденции последних лет подвигли разработчиков Kanami Inverter на внедрение в оборудование современных способов заботы об окружающей среде и технологий, повышающих уровень комфорта для пользователя. Экологичный хладагент R-32, DC-инверторные GMCC компрессоры, энергоэффективность класса «А» — отвечают высоким современным стандартам."

const pricesKentatsuKanamiInverter = {
  "kentatsu_ksga21hzrn1": 40500,
  "kentatsu_ksga26hzrn1": 42500,
  "kentatsu_ksga35hzrn1": 48500,
  "kentatsu_ksga53hzrn1": 77900,
  "kentatsu_ksga70hzrn1": 99900,
}

const KENTATSU_KANAMI_INVERTER = [

  // ------ Kentatsu Kanami Inverter KSGA21HZRN1/KSRA21HZRN1 ------
  {
    article: "kentatsu-ksga21hfan1",
    title: "Kentatsu Kanami Inverter KSGA21HFAN1/KSRA21HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Kanami Inverter",
    link: "kentatsu-ksga21hzrn1.html",
    imgSrc: imagesKentatsuKanamiInverter,
    price: pricesKentatsuKanamiInverter.kentatsu_ksga21hzrn1, // Цена
    area: 20 , // На площадь, м²
    coolingCapacity: 2.2, // Мощность охлаждения, кВт
    noise: 23.5, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsKentatsuKanamiInverter,
    description: descriptionKentatsuKanamiInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 690, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2300, // Производительность, Вт
      powerConsumption: 650, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 23.5, // Уровень шума, дБ (A)
      weight: 8.2, // Вес, кг
      size: "729x200x292", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 48, // Уровень шума, дБ (A)
      weight: 22.8, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },


  // ------ Kentatsu Kanami Inverter KSGA26HZRN1/KSRA26HZRN1 ------
  {
    article: "kentatsu-ksga26hfan1",
    title: "Kentatsu Kanami Inverter KSGA26HFAN1/KSRA26HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Kanami Inverter",
    link: "kentatsu-ksga26hzrn1.html",
    imgSrc: imagesKentatsuKanamiInverter,
    price: pricesKentatsuKanamiInverter.kentatsu_ksga26hzrn1, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.8, // Мощность охлаждения, кВт
    noise: 23.5, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsKentatsuKanamiInverter,
    description: descriptionKentatsuKanamiInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2800, // Производительность, Вт
      powerConsumption: 870, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3200, // Производительность, Вт
      powerConsumption: 890, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 23.5, // Уровень шума, дБ (A)
      weight: 8.2, // Вес, кг
      size: "729x200x292", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 48, // Уровень шума, дБ (A)
      weight: 22.8, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Kentatsu Kanami Inverter KSGA35HZRN1/KSRA35HZRN1 ------
  {
    article: "kentatsu-ksga35hfan1",
    title: "Kentatsu Kanami Inverter KSGA35HFAN1/KSRA35HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Kanami Inverter",
    link: "kentatsu-ksga35hzrn1.html",
    imgSrc: imagesKentatsuKanamiInverter,
    price: pricesKentatsuKanamiInverter.kentatsu_ksga35hzrn1, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.4, // Мощность охлаждения, кВт
    noise: 23.5, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsKentatsuKanamiInverter,
    description: descriptionKentatsuKanamiInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 3400, // Производительность, Вт
      powerConsumption: 1050, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3500, // Производительность, Вт
      powerConsumption: 970, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22.5, // Уровень шума, дБ (A)
      weight: 8.1, // Вес, кг
      size: "729x200x292", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 48, // Уровень шума, дБ (A)
      weight: 23.7, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Kentatsu Kanami Inverter KSGA53HZRN1/KSRA53HZRN1 ------
  {
    article: "kentatsu-ksga53hfan1",
    title: "Kentatsu Kanami Inverter KSGA35HFAN1/KSRA53HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Kanami Inverter",
    link: "kentatsu-ksga53hzrn1.html",
    imgSrc: imagesKentatsuKanamiInverter,
    price: pricesKentatsuKanamiInverter.kentatsu_ksga53hzrn1, // Цена
    area: 50 , // На площадь, м²
    coolingCapacity: 5.3, // Мощность охлаждения, кВт
    noise: 20, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsKentatsuKanamiInverter,
    description: descriptionKentatsuKanamiInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 5300, // Производительность, Вт
      powerConsumption: 1550, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5600, // Производительность, Вт
      powerConsumption: 1750, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 30, // Макс. длина трассы, м
    maxHeightDifference: 20, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 20, // Уровень шума, дБ (A)
      weight: 11.2, // Вес, кг
      size: "969x241x320", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 33.5, // Вес, кг
      size: "874x330x554", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Kentatsu Kanami Inverter KSGA70HZRN1/KSRA70HZRN1 ------
  {
    article: "kentatsu-ksga53hfan1",
    title: "Kentatsu Kanami Inverter KSGA70HFAN1/KSRA70HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Kanami Inverter",
    link: "kentatsu-ksga70hzrn1.html",
    imgSrc: imagesKentatsuKanamiInverter,
    price: pricesKentatsuKanamiInverter.kentatsu_ksga70hzrn1, // Цена
    area: 70 , // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 21, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsKentatsuKanamiInverter,
    description: descriptionKentatsuKanamiInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 7000, // Производительность, Вт
      powerConsumption: 2400, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7300, // Производительность, Вт
      powerConsumption: 2130, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 50, // Макс. длина трассы, м
    maxHeightDifference: 25, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 21, // Уровень шума, дБ (A)
      weight: 13.6, // Вес, кг
      size: "1083x244x336", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 33.5, // Вес, кг
      size: "955x342x673", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },



];
