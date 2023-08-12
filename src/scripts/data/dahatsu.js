
//
// // ----- Dahatsu Dragon (DHP) -----
//
// const functionsDahatsuDragon = ["Компрессор GMCC Toshiba", "Golden fin", "Класс энергоэффективности A",
// "Уровень шума 22dB", "Фреон R32", "Компактный дизайн", "Антибактериальный фильтр", "Самоочистка внутреннего блока",
// "Режим Turbo производительности", "Таймер", "Запоминание положения жалюзи", "Автоматический перезапуск"];
//
// const functionsDahatsuLegend = ["Компрессор GMCC Toshiba", "Режим Turbo производительности", "Автоматическое качание заслонок", "Режим комфортного сна",
//   "Режим 'Антиплесень'", "Компактный дизайн", "HEALTH - режим здоровье", "Самоочистка внутреннего блока", "Режим I Feel", "Автоматический перезапуск",
// "Запоминание положения жалюзи", "Таймер"];
//
// const imagesDahatsuDragon =
//   ["./assets/img/catalog/dahatsu/dhp/01.jpg",
//     "./assets/img/catalog/dahatsu/dhp/02.png",
//     "./assets/img/catalog/dahatsu/dhp/03.jpg",
//     "./assets/img/catalog/dahatsu/dhp/04.jpg"
//   ];
//
// const imagesDahatsuLegend =
//   ["./assets/img/catalog/dahatsu/da-h/01.png",
//     "./assets/img/catalog/dahatsu/da-h/02.png",
//     "./assets/img/catalog/dahatsu/da-h/03.png",
//     "./assets/img/catalog/dahatsu/da-h/04.png"
//   ];
//
// const descriptionDahatsuDragon = "Сплит-системы Dahatsu серии Dragon выполнены в современном, лаконичном дизайне и имеют обтекаемые формы, что позволит разместить данные сплит-системы в помещениях с высококлассными требованиями к решением интерьера. Помимо быстрого обогрева и охлаждения, устройство гарантирует тщательную очистку воздуха от загрязнений и аллергенов при помощи моющегося фильтра высокой плотности. В кондиционере предусмотрены такие функции, как: спящий режим, обнаружение утечки хладагента, горизонтальный автоповорот жалюзи, 2 способа подключения трубопровода, Н-образная установочная пластина, функция short cut- устанавливает и активирует ваши предварительные настройки, и прочие сверхтехнологичные функции."
// const descriptionDahatsuLegend = "Сплит-системы Dahatsu серии Legend это легендарное возвращение модели, которая отвечает всем стандартам современного качества. Лаконичный, обтекаемый дизайн впишется в помещение любого типа и интерьера.Новейшие технологии позволят вам комфортно использовать сплит-систему, быстро охлаждать и обогревать помещение, а интеллектуальное управление и энергосбережение создадут идеальную среду жизненного пространства. В кондиционере присутствуют такие функции, как: авто-рестарт, самоочистка, режим i feel, тихий и турбо режим, антиплесень, горизонтальный автоповорот жалюзи, программируемый таймер, самодиагностика при включении и работе, независимое осушение, саморазморозка и другие функции."
//
// const powerSupply = "220-240V,50HZ";
//
// // Все кондиционеры Dahatsu
// const dataDahatsu = [
//
//   // --------------------------- Dahatsu Dragon (DHP) ---------------------------
//
//   // ------ Dahatsu DHP-07/DHV-07 ------
//   {
//     article: "dahatsu-dhp-07",
//     title: "Dahatsu DHP-07/DHV-07",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Dragon",
//     link: "##",
//     imgSrc: imagesDahatsuDragon,
//     price: 25500, // Цена
//     area: 22, // На площадь, м²
//     coolingCapacity: 2.3, // Мощность охлаждения, кВт
//     noise: 22, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuDragon,
//     description: descriptionDahatsuDragon, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 2343, // Производительность, Вт
//       powerConsumption: 730, // Потребл. мощность, Вт
//     },
//       // Обогрев
//     heating: {
//       performance: 2419, // Производительность, Вт
//       powerConsumption: 670, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "20м", // Макс. длина трассы, м
//     maxHeightDifference: "8м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 22, // Уровень шума, дБ (A)
//       weight: 7.47, // Вес, кг
//       size: "715x194x285", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 53, // Уровень шума, дБ (A)
//       weight: 23.7, // Вес, кг
//       size: "720x270x495", // Размеры
//       freon: "R32", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DHP-09/DHV-09 ------
//   {
//     article: "dahatsu-dhp-09",
//     title: "Dahatsu DHP-09/DHV-09",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Dragon",
//     link: "##",
//     imgSrc: imagesDahatsuDragon,
//     price: 27700, // Цена
//     area: 28 , // На площадь, м²
//     coolingCapacity: 2.5, // Мощность охлаждения, кВт
//     noise: 22, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuDragon,
//     description: descriptionDahatsuDragon, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 2491, // Производительность, Вт
//       powerConsumption: 776, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 2491, // Производительность, Вт
//       powerConsumption: 690, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "20м", // Макс. длина трассы, м
//     maxHeightDifference: "8м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 22, // Уровень шума, дБ (A)
//       weight: 7.6, // Вес
//       size: "715x194x285", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 53, // Уровень шума, дБ (A)
//       weight: 23.7, // Вес, кг
//       size: "720x270x495", // Размеры
//       freon: "R32", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DHP-12/DHV-12 ------
//   {
//     article: "dahatsu-dhp-12",
//     title: "Dahatsu DHP-12/DHV-12",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Dragon",
//     link: "##",
//     imgSrc: imagesDahatsuDragon,
//     price: 38500, // Цена
//     area: 35 , // На площадь, м²
//     coolingCapacity: 3.5, // Мощность охлаждения, кВт
//     noise: 24, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuDragon,
//     description: descriptionDahatsuDragon, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 3517, // Производительность, Вт
//       powerConsumption: 1095, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 3664, // Производительность, Вт
//       powerConsumption: 1015, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "20м", // Макс. длина трассы, м
//     maxHeightDifference: "8м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 24, // Уровень шума, дБ (A)
//       weight: 8.1, // Вес, кг
//       size: "805x194x285", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 55, // Уровень шума, дБ (A)
//       weight: 25.6, // Вес, кг
//       size: "720x270x495", // Размеры
//       freon: "R32", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DHP-18/DHV-18 ------
//   {
//     article: "dahatsu-dhp-18",
//     title: "Dahatsu DHP-18/DHV-18",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Dragon",
//     link: "##",
//     imgSrc: imagesDahatsuDragon,
//     price: 59900, // Цена
//     area: 55 , // На площадь, м²
//     coolingCapacity: 5.2, // Мощность охлаждения, кВт
//     noise: 26, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuDragon,
//     description: descriptionDahatsuDragon, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 5275, // Производительность, Вт
//       powerConsumption: 1643, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 5569, // Производительность, Вт
//       powerConsumption: 1542, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "25м", // Макс. длина трассы, м
//     maxHeightDifference: "10м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 26, // Уровень шума, дБ (A)
//       weight: 10.9, // Вес, кг
//       size: "957x213x302", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 57, // Уровень шума, дБ (A)
//       weight: 34.5, // Вес, кг
//       size: "765x303x555", // Размеры
//       freon: "R32", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DHP-24/DHV-24 ------
//   {
//     article: "dahatsu-dhp-24",
//     title: "Dahatsu DHP-24/DHV-24",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Dragon",
//     link: "##",
//     imgSrc: imagesDahatsuDragon,
//     price: 77800, // Цена
//     area: 75 , // На площадь, м²
//     coolingCapacity: 7, // Мощность охлаждения, кВт
//     noise: 28, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuDragon,
//     description: descriptionDahatsuDragon, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 7034, // Производительность, Вт
//       powerConsumption: 2190, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 7034, // Производительность, Вт
//       powerConsumption: 1948, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "25м", // Макс. длина трассы, м
//     maxHeightDifference: "10м", // Макс. перепад высот, м
//     liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 28, // Уровень шума, дБ (A)
//       weight: 13.7, // Вес, кг
//       size: "1040x220x327", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 60.5, // Уровень шума, дБ (A)
//       weight: 47.9, // Вес, кг
//       size: "890x342x673", // Размеры
//       freon: "R32", // Фреон
//     }
//   },
//
//   // --------------------------- Dahatsu Legend (DA-H) ---------------------------
//
//   // ------ Dahatsu DA-07H ------
//
//   {
//     article: "dahatsu-da-07h",
//     title: "Dahatsu DA-07H",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Legend",
//     link: "##",
//     imgSrc: imagesDahatsuLegend,
//     price: 0, // Цена
//     area: 22 , // На площадь, м²
//     coolingCapacity: 2.1, // Мощность охлаждения, кВт
//     noise: 24, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuLegend,
//     description: descriptionDahatsuLegend, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 2100, // Производительность, Вт
//       powerConsumption: 650, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 2200, // Производительность, Вт
//       powerConsumption: 610, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "20м", // Макс. длина трассы, м
//     maxHeightDifference: "10м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 24, // Уровень шума, дБ (A)
//       weight: 8, // Вес, кг
//       size: "690x199x283", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 48, // Уровень шума, дБ (A)
//       weight: 20, // Вес, кг
//       size: "665x280x420", // Размеры
//       freon: "R410A", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DA-09H ------
//
//   {
//     article: "dahatsu-da-09h",
//     title: "Dahatsu DA-09H",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Legend",
//     link: "##",
//     imgSrc: imagesDahatsuLegend,
//     price: 0, // Цена
//     area: 28 , // На площадь, м²
//     coolingCapacity: 2.6, // Мощность охлаждения, кВт
//     noise: 24, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuLegend,
//     description: descriptionDahatsuLegend, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 2650, // Производительность, Вт
//       powerConsumption: 825, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 2700, // Производительность, Вт
//       powerConsumption: 748, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "20м", // Макс. длина трассы, м
//     maxHeightDifference: "10м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 24, // Уровень шума, дБ (A)
//       weight: 8.5, // Вес, кг
//       size: "690x199x283", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 50, // Уровень шума, дБ (A)
//       weight: 21, // Вес, кг
//       size: "665x280x420", // Размеры
//       freon: "R410A", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DA-12H ------
//
//   {
//     article: "dahatsu-da-12h",
//     title: "Dahatsu DA-12H",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Legend",
//     link: "##",
//     imgSrc: imagesDahatsuLegend,
//     price: 0, // Цена
//     area: 35 , // На площадь, м²
//     coolingCapacity: 3.5, // Мощность охлаждения, кВт
//     noise: 27, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuLegend,
//     description: descriptionDahatsuLegend, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 3550, // Производительность, Вт
//       powerConsumption: 1106, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 3650, // Производительность, Вт
//       powerConsumption: 1011, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "20м", // Макс. длина трассы, м
//     maxHeightDifference: "10м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 27, // Уровень шума, дБ (A)
//       weight: 9, // Вес, кг
//       size: "750x200x285", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 52, // Уровень шума, дБ (A)
//       weight: 25, // Вес, кг
//       size: "710x240x500", // Размеры
//       freon: "R410A", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DA-18H ------
//
//   {
//     article: "dahatsu-da-18h",
//     title: "Dahatsu DA-18H",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Legend",
//     link: "##",
//     imgSrc: imagesDahatsuLegend,
//     price: 0, // Цена
//     area: 55 , // На площадь, м²
//     coolingCapacity: 5.3, // Мощность охлаждения, кВт
//     noise: 29, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuLegend,
//     description: descriptionDahatsuLegend, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 5300, // Производительность, Вт
//       powerConsumption: 1656, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 5450, // Производительность, Вт
//       powerConsumption: 1509, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "20м", // Макс. длина трассы, м
//     maxHeightDifference: "10м", // Макс. перепад высот, м
//     liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 29, // Уровень шума, дБ (A)
//       weight: 11, // Вес, кг
//       size: "900x225x310", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 54, // Уровень шума, дБ (A)
//       weight: 37, // Вес, кг
//       size: "800x315x545", // Размеры
//       freon: "R410A", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DA-24H ------
//
//   {
//     article: "dahatsu-da-24h",
//     title: "Dahatsu DA-24H",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Legend",
//     link: "##",
//     imgSrc: imagesDahatsuLegend,
//     price: 0, // Цена
//     area: 75 , // На площадь, м²
//     coolingCapacity: 7, // Мощность охлаждения, кВт
//     noise: 31, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuLegend,
//     description: descriptionDahatsuLegend, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 7000, // Производительность, Вт
//       powerConsumption: 2325, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 7100, // Производительность, Вт
//       powerConsumption: 2211, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "25м", // Макс. длина трассы, м
//     maxHeightDifference: "15м", // Макс. перепад высот, м
//     liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 31, // Уровень шума, дБ (A)
//       weight: 12, // Вес, кг
//       size: "900x225x310", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 55, // Уровень шума, дБ (A)
//       weight: 46, // Вес, кг
//       size: "825x310x655", // Размеры
//       freon: "R410A", // Фреон
//     }
//   },
//
//   // ------ Dahatsu DA-36H ------
//
//   {
//     article: "dahatsu-da-36h",
//     title: "Dahatsu DA-36H",
//     type: "split-system",
//     company: "Dahatsu",
//     series: "Legend",
//     link: "##",
//     imgSrc: imagesDahatsuLegend,
//     price: 0, // Цена
//     area: 100 , // На площадь, м²
//     coolingCapacity: 9.7, // Мощность охлаждения, кВт
//     noise: 39, // Уровень шума, дБ (A)
//     inverter: false, // Наличие инвертора (да/нет)
//
//     functions: functionsDahatsuLegend,
//     description: descriptionDahatsuLegend, // Описание
//
//     // Охлаждение
//     cooling: {
//       performance: 9700, // Производительность, Вт
//       powerConsumption: 3222, // Потребл. мощность, Вт
//     },
//     // Обогрев
//     heating: {
//       performance: 99000, // Производительность, Вт
//       powerConsumption: 3084, // Потребл. мощность, Вт
//     },
//     powerSupply: powerSupply, // Электропитание
//     maxTrackLength: "25м", // Макс. длина трассы, м
//     maxHeightDifference: "15м", // Макс. перепад высот, м
//     liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
//     gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
//     // Внутренний блок
//     indoorUnit: {
//       noise: 39, // Уровень шума, дБ (A)
//       weight: 22, // Вес, кг
//       size: "1082x233x330", // Размеры
//     },
//     // Внешний блок
//     outdoorUnit: {
//       noise: 62, // Уровень шума, дБ (A)
//       weight: 70, // Вес, кг
//       size: "900x350x700", // Размеры
//       freon: "R410A", // Фреон
//     }
//   },
//
// ]
//
//
//
