// ----- Midea Paramount Inverter (MSAG1-I) -----

const functionsMideaParamountInverter = ["Фильтр высокой плотности", "Фотокаталитический фильтр", "Автоматическое качание заслонки", "Нагрев до 8°C", "Турбо охлаждение", "2 варианта включения",
  "Самоочистка", "Тихий внутренний блок", "Таймер", "Авторестарт", "Контроль влажности", "Ночной режим", "Обнаружение утечки хладагента", "Локальный комфорт Follow Me", "Самодиагностика",
  "i-Remote", "Wi-Fi Control (опция)"];


const srcToFolderMideaParamountInverter = "./assets/img/catalog/midea/paramount-inverter";

const imagesMideaParamountInverter =
  [ `${srcToFolderMideaParamountInverter}/01.jpg`,
    `${srcToFolderMideaParamountInverter}/02.jpg`,
    //`${srcToFolderMideaParamountInverter}/03.jpg`,
    `${srcToFolderMideaParamountInverter}/04.jpg`,
  ];

const pricesMideaParamountInverter = {
  "midea_msag1_07n8c2u_i": 44500,
  "midea_msag1_09n8c2u_i": 46500,
}


const descriptionMideaParamountInverter = "Сплит-система Midea серии Paramount заправляется озонобезопасным хладагентом R410a, который способствует повышению сезонной энергоэффективности техники. Минимальное энергопотребление обеспечивается за счёт инверторной схемы управления, которая позволяет компрессору работать без отключения. Помимо основного фильтра высокой плотности, здесь установлен фотокаталитический фильтр, который активно уничтожает любые органические соединения и устраняет неприятные запахи. Благодаря функции «Любимые настройки» кондиционер можно запустить в удобном для себя режиме работы нажатием одной кнопки. Заслонки двигаются в автоматическом режиме, обеспечивая равномерное распределение воздушных потоков по всему внутреннему пространству. При этом предусмотрено запоминание положения жалюзи. Тёплый запуск, самоочистка и самодиагностика гарантируют длительную и безаварийную работу техники, независимо от условий эксплуатации."


const MIDEA_PARAMOUNT_INVERTER = [

  // ------ Midea MSAG1-07N8C2U-I / MSAG1-07N8C2U-O ------
  {
    article: "midea-msag1-07n8c2u-i",
    title: "Midea Paramount MSAG1-07N8C2U-I/MSAG1-07N8C2U-O",
    type: "split-system",
    company: "Midea",
    series: "Paramount",
    link: "midea-msag1-07n8c2u-i.html",
    imgSrc: imagesMideaParamountInverter,
    price: pricesMideaParamountInverter.midea_msag1_07n8c2u_i, // Цена
    area: 20 , // На площадь, м²
    coolingCapacity: 2.05, // Мощность охлаждения, кВт
    noise: 23.5, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsMideaParamountInverter,
    description: descriptionMideaParamountInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2050, // Производительность, Вт
      powerConsumption: 650, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2340, // Производительность, Вт
      powerConsumption: 650, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 8, // Уровень шума, дБ (A)
      weight: 7.4, // Вес, кг
      size: "729x200x292", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 20.2, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Midea MSAG1-09N8C2U-I / MSAG1-09N8C2U-O ------
  {
    article: "midea-msag1-09n8c2u-i",
    title: "Midea Paramount MSAG1-09N8C2U-I/MSAG1-09N8C2U-O",
    type: "split-system",
    company: "Midea",
    series: "Paramount",
    link: "midea-msag1-09n8c2u-i.html",
    imgSrc: imagesMideaParamountInverter,
    price: pricesMideaParamountInverter.midea_msag1_09n8c2u_i, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.78, // Мощность охлаждения, кВт
    noise: 23.5, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsMideaParamountInverter,
    description: descriptionMideaParamountInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2780, // Производительность, Вт
      powerConsumption: 860, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3370, // Производительность, Вт
      powerConsumption: 930, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 23.5, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "729x200x292", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 20.2, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },


];
