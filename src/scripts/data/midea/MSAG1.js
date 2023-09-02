// ----- Midea Paramount (MSAG1) -----

const functionsMideaParamount = [""];

const imagesMideaParamount =
  ["./assets/img/catalog/dahatsu/DA-H/01.png",
    "./assets/img/catalog/dahatsu/DA-H/02.png",
    "./assets/img/catalog/dahatsu/DA-H/03.png",
    "./assets/img/catalog/dahatsu/DA-H/04.png"
  ];

const descriptionMideaParamount = ""


const MIDEA_MSAG1 = [

  // ------ Dahatsu DA-07H ------
  {
    article: "dahatsu-da-07h",
    title: "Dahatsu DA-07H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "##",
    imgSrc: imagesDahatsuLegend,
    price: 0, // Цена
    area: 22 , // На площадь, м²
    coolingCapacity: 2.1, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 2100, // Производительность, Вт
      powerConsumption: 650, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 610, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "690x199x283", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 48, // Уровень шума, дБ (A)
      weight: 20, // Вес, кг
      size: "665x280x420", // Размеры
      freon: "R410A", // Фреон
    }
  },

];
