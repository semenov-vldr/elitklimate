// ----- Daichi ICE Inverter (ICE-AVQS1R-1/ICE-FVS1R-1) -----

const functionsDaichiIceInverter = ["DC Inverter", "Функция «Комфортный сон»", "Многоступенчатое регулирование скорости вентилятора",
  "Противоплесневая обработка", "Самодиагностика", "Бесшумный режим работы", "Коррозионная стойкость", "Фильтр предварительной очистки",
  "Wi-Fi, онлайн управление (опция)", "Информационный LED дисплей", "Устойчивость к перепадам напряжения"];

const srcToFolderDaichiIceInverter = "./assets/img/catalog/daichi/ice-inverter";

const imagesDaichiIceInverter =
  [ `${srcToFolderDaichiIceInverter}/01.jpg`,
    `${srcToFolderDaichiIceInverter}/02.jpg`,
    `${srcToFolderDaichiIceInverter}/03.jpg`,
  ];

const descriptionDaichiIceInverter = "Информационный LED-дисплей. Функция «комфортный сон» позволяет создать приятные условия для отдыха, также снижается потребление электроэнергии. Подготовка к теплому старту. В режиме обогрева вентилятор внутреннего блока включается только после прогрева теплообменника внутреннего блока. Режим «Standby» корректирует поддерживаемую в помещении температуру на 2 °С, снижая тем самым энергопотребление. Функция отключения/включения дисплея внутреннего блока. Режим локального комфорта IFeel - желаемые параметры микроклимата устанавливаются в месте расположения пульта дистанционного управления. Автоматический перезапуск. Wi-Fi, удаленное онлайн-управление через «облако Даичи» (опция)."

const pricesDaichiIceInverter = {
  "daichi_ICE25AVQS1R_1": 46500,
  "daichi_ICE35AVQS1R_1": 51500,
  "daichi_ICE50AVQS1R_1": 82500,
}

const DAICHI_ICE_INVERTER = [

  // ------ Daichi ICE Inverter ICE25AVQS1R-1/ICE25FVS1R-1 ------
  {
    article: "daichi_ice25avqs1r-1",
    title: "Daichi ICE Inverter ICE25AVQS1R-1/ICE25FVS1R-1",
    type: "split-system",
    company: "Daichi",
    series: "Ice Inverter",
    link: "daichi-ice25avqs1r-1.html",
    imgSrc: imagesDaichiIceInverter,
    price: pricesDaichiIceInverter.daichi_ICE25AVQS1R_1, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.5, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDaichiIceInverter,
    description: descriptionDaichiIceInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2500, // Производительность, Вт
      powerConsumption: 680, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2800, // Производительность, Вт
      powerConsumption: 730, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 7.5, // Вес, кг
      size: "698x185x250", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 24.5, // Вес, кг
      size: "732x330x550", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Daichi ICE Inverter ICE35AVQS1R-1/ICE35FVS1R-1 ------
  {
    article: "daichi_ice35avqs1r-1",
    title: "Daichi ICE Inverter ICE35AVQS1R-1/ICE35FVS1R-1",
    type: "split-system",
    company: "Daichi",
    series: "Ice Inverter",
    link: "daichi-ice35avqs1r-1.html",
    imgSrc: imagesDaichiIceInverter,
    price: pricesDaichiIceInverter.daichi_ICE35AVQS1R_1, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.2, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDaichiIceInverter,
    description: descriptionDaichiIceInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 3200, // Производительность, Вт
      powerConsumption: 990, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3400, // Производительность, Вт
      powerConsumption: 920, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8.5, // Вес, кг
      size: "773x185x250", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 25, // Вес, кг
      size: "732x330x555", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Daichi ICE Inverter ICE50AVQS1R-1/ICE50FVS1R-1 ------
  {
    article: "daichi_ice50avqs1r-1",
    title: "Daichi ICE Inverter ICE50AVQS1R-1/ICE50FVS1R-1",
    type: "split-system",
    company: "Daichi",
    series: "Ice Inverter",
    link: "daichi-ice50avqs1r-1.html",
    imgSrc: imagesDaichiIceInverter,
    price: pricesDaichiIceInverter.daichi_ICE50AVQS1R_1, // Цена
    area: 50 , // На площадь, м²
    coolingCapacity: 4.6, // Мощность охлаждения, кВт
    noise: 31, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDaichiIceInverter,
    description: descriptionDaichiIceInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 4600, // Производительность, Вт
      powerConsumption: 1350, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5200, // Производительность, Вт
      powerConsumption: 1340, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 31, // Уровень шума, дБ (A)
      weight: 13.5, // Вес, кг
      size: "970x225x300", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 26.5, // Вес, кг
      size: "732x330x555", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },


];
