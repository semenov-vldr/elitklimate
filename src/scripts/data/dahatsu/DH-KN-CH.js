// -----Dahatsu Кассетный (DH-KN-CH) -----


const functionsDahatsu_DH_KN_CH = ["ON/OFF", "Инфракрасный пульт (в комплекте)", "Режим энергосбережения",
  "Самоочистка внутреннего блока", "Объемное воздухо-распределение", "Турборежим", "Тихий режим", "Горячий запуск",
  "24-часовой таймер", "Режим I FEEL", "Автоматический режим выбора", "Автоматическая разморозка", "Работа в режиме охлаждения до -15°C",
  "Работа в режиме обогрева до -15°C", "Дренажный насос", "Самодиагностика", "Низкотемпературный комплект",
  "Панель с круговым распределением воздушного потока", "HEALTH", "Движение жалюзи по горизонтали и вертикали", "Анти-F. Предотвращение образования неприятного запаха"];

const imagesDahatsu_DH_KN_CH =
  ["./assets/img/catalog/dahatsu/dh-cs-a/01.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/02.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/03.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/04.png"
  ];

const imagesDahatsu_DH_KN_CH_2 =
  ["./assets/img/catalog/dahatsu/dh-cs-a/01-1.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/02.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/03-3.JPG",
    "./assets/img/catalog/dahatsu/dh-cs-a/04.png"
  ];

const descriptionDahatsu_DH_KN_CH = "Кассетная сплит-система DH-CS-A позволит быстро и равномерно создать и поддерживать комфортную температуру в помещении. Распределение воздуха на 360 градусов. Панель с круговым распределением воздушного потока обеспечивает эффективное охлаждение или нагрев. \n Данный вид кондиционеров интегрируется в подвесные потолки и осуществляет подачу воздуха в 4 потока. Новейшая модель DH-CS-A обладает привлекательным видом, компактными габаритами, множеством настроек и функций. \n Режим TURBO активирует максимальную производительность и позволяет быстрее достичь необходимой температуры."


const DAHATSU_DH_KN_CH = [

  // Dahatsu DH-CS-12A
  {
    article: "dahatsu-dh-cs-12a",
    title: "Dahatsu DH-CS-12A",
    type: "cassette",
    company: "Dahatsu",
    series: "DH-CS-A",
    factory: "AUX",
    link: "##",
    imgSrc: imagesDahatsuDH_CS_A,
    price: 57000, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDH_CS_A,
    description: descriptionDahatsuDH_CS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 3520, // Производительность, Вт
      powerConsumption: 1300, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3960, // Производительность, Вт
      powerConsumption: 1280, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 16, // Вес, кг
      size: "570x570x260", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "780x285x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },


]
