// ----- DAICHI AIR INVERTER (AIR-AVQ1/AIR-FV1) -----

const functionsDaichiAirInverter = ["Full DC Inverter", "Функция «Комфортный сон»", "Многоступенчатое регулирование скорости вентилятора",
                          "Противоплесневая обработка", "Самодиагностика", "Бесшумный режим работы", "Коррозионная стойкость", "Фильтр предварительной очистки",
                            "Wi-Fi, онлайн управление (опция)", "Информационный LED дисплей", "Высокий показатель SEER"];

const imagesDaichiAirInverter =
  ["./assets/img/catalog/daichi/air-inverter/01.jpg",
    "./assets/img/catalog/daichi/air-inverter/02.jpg",
    "./assets/img/catalog/daichi/air-inverter/03.jpg",
    "./assets/img/catalog/daichi/air-inverter/04.jpg"
  ];

const descriptionDaichiAirInverter = "Ультрафиолетовая лампа. Встроенная УФ-лампа предотвращает развитие бактерий на узлах внутреннего блока и обеззараживает воздух. Биполярный ионизатор. Циклически генерирует ионы, создавая ионизированную среду в помещении, благотворно влияющую на самочувствие. Эффект бриза - запатентованная технология для достижения эффекта бриза благодаря оригинальной перфорированной форме вертикальных жалюзи. Протяженный воздушный поток по принципу эффекта Коанда. Широкие горизонтальные жалюзи создают воздушный поток, направленный вдоль потолка в режиме охлаждения или вдоль пола в режиме нагрева. Хладагент R32. Наиболее озонобезопасный и энергоэффективный хладагент с низким потенциалом глобального потепления. Full DC Inveter. Передовые инверторные технологии, которые позволяют не только создать максимально тихий и комфорный кондиционер, но и сделать его максимально эффективным. Wi-Fi, удаленное онлайн-управление через «облако Даичи» (опция)."

const pricesDaichiAirInverter = {
  "daichi_AIR25AVQS1R_1": 46500,
}

const DAICHI_AIR_INVERTER = [

  // ------ Daichi AIR20AVQ1/AIR20FV1 ------
  {
    article: "daichi_air25avqs1r_1",
    title: "Daichi AIR Inverter AIR25AVQS1R-1/AIR25FVS1R-1",
    type: "split-system",
    company: "Daichi",
    series: "Air Inverter",
    link: "daichi-air25avqs1r-1.html",
    imgSrc: imagesDaichiAirInverter,
    price: pricesDaichiAirInverter.daichi_AIR25AVQS1R_1, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDaichiAirInverter,
    description: descriptionDaichiAirInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2600, // Производительность, Вт
      powerConsumption: 830, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2630, // Производительность, Вт
      powerConsumption: 770, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "790x192x275", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 22, // Вес, кг
      size: "712x276x459", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },


];
