// ----- Kentatsu Kanami (KSGA-HFAN1/KSRA-HFAN1) -----

const functionsKentatsuKanami = ["Антикоррозийное покрытие Golden Fin", "Управление скоростью вентилятора", "Функция «Комфортный сон»", "Защита от коррозии", "Осушение воздуха",
                                "Быстрый выход на режим", "Обнаружение утечки хладагента", "Wi-Fi Control (опция)", "Цифровой дисплей", "Функция «Не беспокоить»"];

const srcToFolderKentatsuKanami = "./assets/img/catalog/kentatsu/kanami/";

const imagesKentatsuKanami = [
  `${srcToFolderKentatsuKanami}01.jpg`,
  `${srcToFolderKentatsuKanami}02.jpg`,
  `${srcToFolderKentatsuKanami}03.jpg`,
  `${srcToFolderKentatsuKanami}04.jpg`,
]

const descriptionKentatsuKanami = "Серия кондиционеров Kentatsu Kanami (on/off) хорошо себя зарекомендовала в бытовом и коммерческом применении. Купить технику можно по низкой цене, при этом функциональность находится на уровне сплит-систем премиум-класса. Сплит-системы Kentatsu Kanami предназначены для настенной установки. Внутренний блок изготавливается из прочного белого пластика, с которого легко удаляются любые загрязнения. В модельном ряду 5 типоразмеров от 2,34 кВт до 7,03 кВт, обладающие «А» классом энергоэффективности в режимах охлаждения и обогрева. В комплект поставки входит пульт KIC-111H с функцией блокировки клавиш, а также фильтры высокой степени очистки и холодного катализа. Внутренний блок кондиционера выполнен в классическом белом корпусе с цифровым дисплеем. Кондиционеры Kanami работают на генерацию тепла при температуре наружного воздуха от - 7°С до + 24°С, что позволяет использовать сплит-систему еще и в качестве энергоэффективного обогревателя в демисезонный период."

const pricesKentatsuKanami = {
  "kentatsu_ksga21hfan1": 28900,
  "kentatsu_ksga26hfan1": 30900,
  "kentatsu_ksga35hfan1": 38500,
  "kentatsu_ksga53hfan1": 59900,
  "kentatsu_ksga70hfan1": 76900,

}

const KENTATSU_KANAMI = [

  // ------ Kentatsu Kanami KSGA21HFAN1/KSRA21HFAN1 ------
  {
    article: "kentatsu-ksga21hfan1",
    title: "Kentatsu Kanami KSGA21HFAN1/KSRA21HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Kanami",
    link: "kentatsu-ksga21hfan1.html",
    imgSrc: imagesKentatsuKanami,
    price: pricesKentatsuKanami.kentatsu_ksga21hfan1, // Цена
    area: 20 , // На площадь, м²
    coolingCapacity: 2.3, // Мощность охлаждения, кВт
    noise: 26.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsKentatsuKanami,
    description: descriptionKentatsuKanami, // Описание

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

  // ------ Kentatsu Kanami KSGA26HFAN1/KSRA26HFAN1 ------
  {
    article: "kentatsu-ksga26hfan1",
    title: "Kentatsu Kanami KSGA26HFAN1/KSRA26HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Kanami",
    link: "kentatsu-ksga26hfan1.html",
    imgSrc: imagesKentatsuKanami,
    price: pricesKentatsuKanami.kentatsu_ksga26hfan1, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 29.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsKentatsuKanami,
    description: descriptionKentatsuKanami, // Описание

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
      noise: 48, // Уровень шума, дБ (A)
      weight: 24.9, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Kentatsu Kanami KSGA35HFAN1/KSRA35HFAN1 ------
  {
    article: "kentatsu-ksga35hfan1",
    title: "Kentatsu Kanami KSGA35HFAN1/KSRA35HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Kanami",
    link: "kentatsu-ksga35hfan1.html",
    imgSrc: imagesKentatsuKanami,
    price: pricesKentatsuKanami.kentatsu_ksga35hfan1, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 29.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsKentatsuKanami,
    description: descriptionKentatsuKanami, // Описание

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
      noise: 50, // Уровень шума, дБ (A)
      weight: 27.1, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Kentatsu Kanami KSGA53HFAN1/KSRA53HFAN1 ------
  {
    article: "kentatsu-ksga53hfan1",
    title: "Kentatsu Kanami KSGA53HFAN1/KSRA53HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Kanami",
    link: "kentatsu-ksga53hfan1.html",
    imgSrc: imagesKentatsuKanami,
    price: pricesKentatsuKanami.kentatsu_ksga53hfan1, // Цена
    area: 50 , // На площадь, м²
    coolingCapacity: 5.3, // Мощность охлаждения, кВт
    noise: 30, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsKentatsuKanami,
    description: descriptionKentatsuKanami, // Описание

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
      noise: 52, // Уровень шума, дБ (A)
      weight: 34.8, // Вес, кг
      size: "765x303x555", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Kentatsu Kanami KSGA70HFAN1/KSRA70HFAN1 ------
  {
    article: "kentatsu-ksga70hfan1",
    title: "Kentatsu Kanami KSGA70HFAN1/KSRA70HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Kanami",
    link: "kentatsu-ksga70hfan1.html",
    imgSrc: imagesKentatsuKanami,
    price: pricesKentatsuKanami.kentatsu_ksga70hfan1, // Цена
    area: 70 , // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsKentatsuKanami,
    description: descriptionKentatsuKanami, // Описание

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
    liquidPipeDiameter: "6,35мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 14.7, // Вес, кг
      size: "1082x234x337", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 52.9, // Вес, кг
      size: "890x342x673", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },



];
