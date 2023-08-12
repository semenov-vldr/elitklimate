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
