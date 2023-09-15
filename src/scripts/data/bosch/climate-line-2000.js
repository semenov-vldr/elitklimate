// ----- Bosch Climate Line 2000 (CLL2000) -----

const functionsBoschClimateLine2000 = ["Wi-Fi контроллер (опция)", "Фильтр высокой степени плотности", "Автоматическая очистка i-Clean", "Цифровой дисплей",
                                        "Самодиагностика", "Осушение", "Обнаружение утечки хладагента", "Подготовка к теплому пуску"];

const imagesBoschClimateLine2000 =
  ["./assets/img/catalog/bosch/climate-line-2000/01.jpg",
    "./assets/img/catalog/bosch/climate-line-2000/02.jpg",
    "./assets/img/catalog/bosch/climate-line-2000/03.jpg",
    "./assets/img/catalog/bosch/climate-line-2000/04.jpg"
  ];

const descriptionBoschClimateLine2000 = "Кондиционер настенный (сплит-система) Bosch серии Climate Line 2000 просто незаменим для создания подходящего микроклимата в домашних или офисных помещениях. Представленная модель функционирует в нескольких режимах, в том числе охлаждения и увеличения температуры воздушного потока. С активацией ночного режима значительно понижаются затраты на энергоснабжение и уменьшается уровень производимого шума.\n" +
  "Производительности кондиционера настенного (сплит-системы) Bosch серии Climate Line 2000 достаточно для полноценной работы в помещениях площадью от 23 до 70 м². Используя приложение App Daichi Comfort, вы получите доступ к функционалу устройства с экрана смартфона. Скрытый дисплей оперативно проинформирует о выбранном режиме."

const pricesBoschClimateLine2000 = {
  "bosch_climate_line_2000_cll2000w23": 34900,
  "bosch_climate_line_2000_cll2000w26": 38900,
  "bosch_climate_line_2000_cll2000w53": 72900,
}

const BOSCH_CLIMATE_LINE_2000 = [

  // ------ Bosch Climate Line 2000 CLL2000 W 23/CLL2000 23 ------
  {
    article: "bosch-climate-line-2000-cll2000w23",
    title: "Bosch Climate Line 2000 CLL2000 W 23/CLL2000 23",
    type: "split-system",
    company: "Bosch",
    series: "Climate Line 2000",
    link: "bosch-climate-line-2000-cll2000w23.html",
    imgSrc: imagesBoschClimateLine2000,
    price: pricesBoschClimateLine2000.bosch_climate_line_2000_cll2000w23, // Цена
    area: 20 , // На площадь, м²
    coolingCapacity: 2.3, // Мощность охлаждения, кВт
    noise: 26.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsBoschClimateLine2000,
    description: descriptionBoschClimateLine2000, // Описание

    // Охлаждение
    cooling: {
      performance: 2300, // Производительность, Вт
      powerConsumption: 711, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2300, // Производительность, Вт
      powerConsumption: 634, // Потребл. мощность, Вт
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

  // ------ Bosch Climate Line 2000 CLL2000 W 26/CLL2000 26 ------
  {
    article: "bosch-climate-line-2000-cll2000w26",
    title: "Bosch Climate Line 2000 CLL2000 W 26/CLL2000 26",
    type: "split-system",
    company: "Bosch",
    series: "Climate Line 2000",
    link: "bosch-climate-line-2000-cll2000w26.html",
    imgSrc: imagesBoschClimateLine2000,
    price: pricesBoschClimateLine2000.bosch_climate_line_2000_cll2000w26, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 31.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsBoschClimateLine2000,
    description: descriptionBoschClimateLine2000, // Описание

    // Охлаждение
    cooling: {
      performance: 2600, // Производительность, Вт
      powerConsumption: 776, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2600, // Производительность, Вт
      powerConsumption: 694, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 10, // Макс. длина трассы, м
    maxHeightDifference: 8, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 31.5, // Уровень шума, дБ (A)
      weight: 8.5, // Вес, кг
      size: "729x200x292", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 48, // Уровень шума, дБ (A)
      weight: 26.6, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Bosch Climate Line 2000 CLL2000 W 53/CLL2000 53 ------
  {
    article: "bosch-climate-line-2000-cll2000w53",
    title: "Bosch Climate Line 2000 CLL2000 W 53/CLL2000 53",
    type: "split-system",
    company: "Bosch",
    series: "Climate Line 2000",
    link: "bosch-climate-line-2000-cll2000w53.html",
    imgSrc: imagesBoschClimateLine2000,
    price: pricesBoschClimateLine2000.bosch_climate_line_2000_cll2000w53, // Цена
    area: 50 , // На площадь, м²
    coolingCapacity: 5.3, // Мощность охлаждения, кВт
    noise: 30, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsBoschClimateLine2000,
    description: descriptionBoschClimateLine2000, // Описание

    // Охлаждение
    cooling: {
      performance: 5300, // Производительность, Вт
      powerConsumption: 1643, // Потребл. мощность, Вт
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


];
