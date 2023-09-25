// Отправка данных формы в Телеграм
const TOKEN = "6642495645:AAH-ok6fz2lzVfvqxbQgNyeKS6OTx3jc0uQ";
const CHAT_ID = "-1001965199100";
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`;

const forms = document.querySelectorAll("form.form");
if (forms) {
  forms.forEach(form => form.addEventListener("submit", sendMessageTelegram));
}

  function sendMessageTelegram (evt) {
    evt.preventDefault();

    const formPopup = evt.target.closest(".form-popup");
    const alertSuccess = document.querySelector(".alert.alert--success");
    const alertError = document.querySelector(".alert.alert--error");
    const title = evt.target.parentNode.querySelector(".feedback__title");

    function alertActive (blockAlert) {
      blockAlert.classList.add("js-alert-active");
      setTimeout(() => {
        blockAlert.classList.remove("js-alert-active");
      }, 5000);
      if (formPopup) {
        formPopup.classList.remove("js-popup-active");
      }
      unblockScrollBody();
    };

    let message = `<b>Заявка Элит Климат</b>\n`;
    message += `<b>Форма: ${title ? title.textContent : "Заявка"} </b>\n`;
    message += `<b>Имя: ${this.name.value} </b>\n`;
    message += `<b>Телефон: ${this.tel.value} </b>\n`;


    if (formPopup) {
      const productName = formPopup.querySelector(".form-popup-orders__name").textContent;
      const productPrice = formPopup.querySelector(".form-popup-orders__price-value").textContent;
      const productQuantity = formPopup.querySelector(".form-popup__quantity-input").dataset.value;

      message += `<b>Товар: ${productName} </b>\n`;
      message += `<b>Цена: ${productPrice} </b>\n`;
      message += `<b>Кол-во: ${productQuantity} </b>\n`;
    }

    if (this.text) {
      message += `<b>Текст: ${this.text.value} </b>\n`;
    }


    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
      .then( () => {
        console.log("Заявка отправлена");
        alertActive(alertSuccess);
      })
      .catch(err => {
        console.warn(err);
        alertActive(alertError);
      })
      .finally(() => {
        console.log("Конец");
      });
    this.reset();
  };


const html = document.querySelector('html');

const classBlockScroll = "js-block-scroll";

function blockScrollBody () {
  if ( !html.classList.contains(classBlockScroll) ) {
    html.classList.add(classBlockScroll);
  }
};

function unblockScrollBody () {
  if ( html.classList.contains(classBlockScroll) ) {
    html.classList.remove(classBlockScroll);
  }
};

function toggleBlockScrollBody () {
  if ( html.classList.contains(classBlockScroll) ) {
    html.classList.remove(classBlockScroll);
  } else {
    html.classList.add(classBlockScroll);
  }
};

function fillingSliderCard (cardItem, product, swiperWrapper) {

  cardItem.querySelector('.card-popular__link').href = product.link;
  cardItem.querySelector('.card-popular__img').src = product.imgSrc[0];
  cardItem.querySelector('.card-popular__title').textContent = product.title;
  cardItem.querySelector('.card-popular__price').textContent = `${product.price.toLocaleString("ru")} ₽`;
  cardItem.querySelector('.card-popular__data-item-value--area').textContent = `${product.area} м²`;
  cardItem.querySelector('.card-popular__data-item-value--coolingCapacity').textContent = `${product.coolingCapacity} кВт`;
  cardItem.querySelector('.card-popular__data-item-value--noise').textContent = `${product.noise} дБ`;
  cardItem.querySelector('.card-popular__data-item-value--inverter').textContent = `${product.inverter ? "Есть" : "Нет"}`;
  swiperWrapper.appendChild(cardItem);
}

const phoneInputs = document.querySelectorAll('input[data-tel-input]');

const getInputNumbersValue = (input) => {
  return input.value.replace(/\D/g,"");
};

const onPhoneInput = (evt) => {
  const input = evt.target;
  let inputNumbersValue = getInputNumbersValue(input);
  let formattedInputValue = "";
  let selectionStart = input.selectionStart;

  if ( !inputNumbersValue ) input.value = "";


  if ( input.value.length !== selectionStart ) {
    if ( evt.data && /\D/g.test(evt.data) ) {
      input.value = formattedInputValue;
    }
    return;
  }

  if ( ["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1 ) {
    // Российские номера
    if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
    let firstSymbols = (inputNumbersValue[0] === "8") ? "8" : "+7";
    formattedInputValue = firstSymbols + " ";

    if (inputNumbersValue[0] === "8") {
      //phoneInputs[0].setAttribute("pattern", ".{17,}");
      console.log(phoneInputs[0].getAttribute("pattern"));
    }

    if (inputNumbersValue.length > 1) {
      formattedInputValue += "(" + inputNumbersValue.slice(1, 4);
    }

    if (inputNumbersValue.length >= 5) {
      formattedInputValue += ") " + inputNumbersValue.slice(4, 7);
    }

    if (inputNumbersValue.length >= 8) {
      formattedInputValue += "-" + inputNumbersValue.slice(7, 9);
    }

    if (inputNumbersValue.length >= 10) {
      formattedInputValue += "-" + inputNumbersValue.slice(9, 11);
    }

// Не российские номера
  } else formattedInputValue = "+" + inputNumbersValue;

  input.value = formattedInputValue;
};

// Стирание первого символа
const onPhoneKeyDown = (evt) => {
  const input = evt.target;
  if (evt.keyCode === 8 && getInputNumbersValue(input).length === 1) {
    input.value = "";
  }
};

// Вставка цифр в любое место
const onPhonePaste = (evt) => {
  const pasted = evt.clipboardData || window.clipboardData;
  const input = evt.target;
  const inputNumbersValue = getInputNumbersValue(input);

  if (pasted) {
    const pastedText = pasted.getData("Text");
    if ( /\D/g.test(pastedText) ) {
      input.value = inputNumbersValue;
    }
  }
};

phoneInputs.forEach(input => {
  input.addEventListener('input', onPhoneInput);
  input.addEventListener("keydown", onPhoneKeyDown);
  input.addEventListener("paste", onPhonePaste);
});

let previousPosition = document.documentElement.scrollTop;
function scrollHeader (header) {
  let currentPosition = document.documentElement.scrollTop;

  if (previousPosition > currentPosition || window.scrollY < 100) {
    header.classList.remove('js-scroll');
  } else {
    header.classList.add('js-scroll');
  }
  previousPosition = currentPosition;
}

const powerSupply = "220-240V,50HZ";
const powerSupplyOnePhase = "1 ФАЗА 220-240V,50HZ";
const powerSupplyThreePhase = "3 ФАЗА 380-415V,50HZ";

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

// ----- Dahatsu Legend (DA-H) -----

const functionsDahatsuLegend = ["Компрессор GMCC Toshiba", "Режим Turbo производительности", "Автоматическое качание заслонок", "Режим комфортного сна",
  "Режим 'Антиплесень'", "Компактный дизайн", "HEALTH - режим здоровье", "Самоочистка внутреннего блока", "Режим I Feel", "Автоматический перезапуск",
  "Запоминание положения жалюзи", "Таймер"];

const srcToFolderDahatsuLegend = "./assets/img/catalog/dahatsu/DA-H/";

const imagesDahatsuLegend = [
  `${srcToFolderDahatsuLegend}01.jpg`,
  `${srcToFolderDahatsuLegend}02-2.jpg`,
  `${srcToFolderDahatsuLegend}03.jpg`,
  `${srcToFolderDahatsuLegend}04.jpg`,
]

const descriptionDahatsuLegend = "Сплит-системы Dahatsu серии Legend это легендарное возвращение модели, которая отвечает всем стандартам современного качества. Лаконичный, обтекаемый дизайн впишется в помещение любого типа и интерьера. Новейшие технологии позволят вам комфортно использовать сплит-систему, быстро охлаждать и обогревать помещение, а интеллектуальное управление и энергосбережение создадут идеальную среду жизненного пространства. В кондиционере присутствуют такие функции, как: авто-рестарт, самоочистка, режим i feel, тихий и турбо режим, антиплесень, горизонтальный автоповорот жалюзи, программируемый таймер, самодиагностика при включении и работе, независимое осушение, саморазморозка и другие функции."

const pricesDahatsuLegend = {
  "dahatsu_da_07h": 22500,
  "dahatsu_da_09h": 24500,
  "dahatsu_da_12h": 32300,
  "dahatsu_da_18h": 52700,
  "dahatsu_da_24h": 68000,
  "dahatsu_da_36h": 109000,
}

const DAHATSU_DA_H = [

  // ------ Dahatsu DA-07H ------
  {
    article: "dahatsu-da-07h",
    title: "Dahatsu DA-07H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "dahatsu-da-07h.html",
    imgSrc: imagesDahatsuLegend,
    price: pricesDahatsuLegend.dahatsu_da_07h, // Цена
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
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
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
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DA-09H ------

  {
    article: "dahatsu-da-09h",
    title: "Dahatsu DA-09H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "dahatsu-da-09h.html",
    imgSrc: imagesDahatsuLegend,
    price: pricesDahatsuLegend.dahatsu_da_09h, // Цена
    area: 28 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 2650, // Производительность, Вт
      powerConsumption: 825, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 748, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8.5, // Вес, кг
      size: "690x199x283", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 21, // Вес, кг
      size: "665x280x420", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DA-12H ------

  {
    article: "dahatsu-da-12h",
    title: "Dahatsu DA-12H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "dahatsu-da-12h.html",
    imgSrc: imagesDahatsuLegend,
    price: pricesDahatsuLegend.dahatsu_da_12h, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 27, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 3550, // Производительность, Вт
      powerConsumption: 1106, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3650, // Производительность, Вт
      powerConsumption: 1011, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 27, // Уровень шума, дБ (A)
      weight: 9, // Вес, кг
      size: "750x200x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 25, // Вес, кг
      size: "710x240x500", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DA-18H ------

  {
    article: "dahatsu-da-18h",
    title: "Dahatsu DA-18H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "dahatsu-da-18h.html",
    imgSrc: imagesDahatsuLegend,
    price: pricesDahatsuLegend.dahatsu_da_18h, // Цена
    area: 55 , // На площадь, м²
    coolingCapacity: 5.3, // Мощность охлаждения, кВт
    noise: 29, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 5300, // Производительность, Вт
      powerConsumption: 1656, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5450, // Производительность, Вт
      powerConsumption: 1509, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 29, // Уровень шума, дБ (A)
      weight: 11, // Вес, кг
      size: "900x225x310", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 37, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DA-24H ------

  {
    article: "dahatsu-da-24h",
    title: "Dahatsu DA-24H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "dahatsu-da-24h.html",
    imgSrc: imagesDahatsuLegend,
    price: pricesDahatsuLegend.dahatsu_da_24h, // Цена
    area: 75 , // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 31, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 7000, // Производительность, Вт
      powerConsumption: 2325, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7100, // Производительность, Вт
      powerConsumption: 2211, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 31, // Уровень шума, дБ (A)
      weight: 12, // Вес, кг
      size: "900x225x310", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 46, // Вес, кг
      size: "825x310x655", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DA-36H ------

  {
    article: "dahatsu-da-36h",
    title: "Dahatsu DA-36H",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend",
    link: "dahatsu-da-36h.html",
    imgSrc: imagesDahatsuLegend,
    price: pricesDahatsuLegend.dahatsu_da_36h, // Цена
    area: 100 , // На площадь, м²
    coolingCapacity: 9.7, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegend,
    description: descriptionDahatsuLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 9700, // Производительность, Вт
      powerConsumption: 3222, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 99000, // Производительность, Вт
      powerConsumption: 3084, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 22, // Вес, кг
      size: "1082x233x330", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 62, // Уровень шума, дБ (A)
      weight: 70, // Вес, кг
      size: "900x350x700", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },
];

// ----- Dahatsu Legend DC Inverter (DA-I) -----

const functionsDahatsuLegendInverter = ["Компрессор GMCC Toshiba", "Режим Turbo производительности", "Автоматическое качание заслонок", "Режим комфортного сна",
  "Режим 'Антиплесень'", "Компактный дизайн", "HEALTH - режим здоровье", "Самоочистка внутреннего блока", "Режим I Feel", "Автоматический перезапуск",
  "Запоминание положения жалюзи", "Таймер"];

const imagesDahatsuLegendInverter =
  ["./assets/img/catalog/dahatsu/DA-I/01.jpg",
    "./assets/img/catalog/dahatsu/DA-I/02.jpg",
    "./assets/img/catalog/dahatsu/DA-I/03.jpg",
    "./assets/img/catalog/dahatsu/DA-I/04.jpg"
  ];

const descriptionDahatsuLegendInverter = "Сплит-системы Dahatsu серии Legend DC INVERTER - лаконичная модель с дизайном в классическом стиле. Данная модель станет дополнением любого интерьера, а новейшие технологии и инверторные технологии позволят наслаждаться идеальным микроклиматом в любое время года. Легендарная модель, соответствующая всем стандартам современного качества, включает в себя такие функции как: тихий и турбо режим, авторестарт, самоочистка, режим i feel, режим здоровья, защищающий от вредных бактерий и вирусов, антиплесень, горизонтальный автоповорот жалюзи, удобный 24-часовой таймер, самодиагностика при включении и работе, независимое осушение, саморазморозка и прочие функции."


const DAHATSU_DA_I = [

  // ------ Dahatsu DA-07i ------
  {
    article: "dahatsu-da-07i",
    title: "Dahatsu DA-07i",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend DC Inverter",
    link: "dahatsu-da-07i.html",
    imgSrc: imagesDahatsuLegendInverter,
    price: 31800, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.2, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegendInverter,
    description: descriptionDahatsuLegendInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 685, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2350, // Производительность, Вт
      powerConsumption: 650, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7.5, // Вес, кг
      size: "690x199x283", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 21, // Вес, кг
      size: "727x278x455", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "HIGHLY",
    }
  },

  // ------ Dahatsu DA-09i ------
  {
    article: "dahatsu-da-09i",
    title: "Dahatsu DA-09i",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend DC Inverter",
    link: "dahatsu-da-09i.html",
    imgSrc: imagesDahatsuLegendInverter,
    price: 34400, // Цена
    area: 30 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegendInverter,
    description: descriptionDahatsuLegendInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2650, // Производительность, Вт
      powerConsumption: 825, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 747, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7.7, // Вес, кг
      size: "690x199x283", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 22, // Вес, кг
      size: "727x278x455", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "HIGHLY",
    }
  },

  // ------ Dahatsu DA-12i ------
  {
    article: "dahatsu-da-12i",
    title: "Dahatsu DA-12i",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend DC Inverter",
    link: "dahatsu-da-12i.html",
    imgSrc: imagesDahatsuLegendInverter,
    price: 37300, // Цена
    area: 40 , // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegendInverter,
    description: descriptionDahatsuLegendInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 3500, // Производительность, Вт
      powerConsumption: 1090, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3650, // Производительность, Вт
      powerConsumption: 1010, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "750x200x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 22.5, // Вес, кг
      size: "727x278x455", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "HIGHLY",
    }
  },

  // ------ Dahatsu DA-18i ------
  {
    article: "dahatsu-da-18i",
    title: "Dahatsu DA-18i",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend DC Inverter",
    link: "dahatsu-da-18i.html",
    imgSrc: imagesDahatsuLegendInverter,
    price: 63500, // Цена
    area: 55 , // На площадь, м²
    coolingCapacity: 5.1, // Мощность охлаждения, кВт
    noise: 29, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegendInverter,
    description: descriptionDahatsuLegendInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 5100, // Производительность, Вт
      powerConsumption: 1590, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5300, // Производительность, Вт
      powerConsumption: 1470, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 29, // Уровень шума, дБ (A)
      weight: 11, // Вес, кг
      size: "900x225x310", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 25, // Вес, кг
      size: "709x281x537", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DA-24i ------
  {
    article: "dahatsu-da-24i",
    title: "Dahatsu DA-24i",
    type: "split-system",
    company: "Dahatsu",
    series: "Legend DC Inverter",
    link: "dahatsu-da-24i.html",
    imgSrc: imagesDahatsuLegendInverter,
    price: 78300, // Цена
    area: 75 , // На площадь, м²
    coolingCapacity: 6.7, // Мощность охлаждения, кВт
    noise: 31, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuLegendInverter,
    description: descriptionDahatsuLegendInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 6700, // Производительность, Вт
      powerConsumption: 2090, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 6800, // Производительность, Вт
      powerConsumption: 1880, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 31, // Уровень шума, дБ (A)
      weight: 11, // Вес, кг
      size: "900x225x310", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 38.5, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "HIGHLY",
    }
  },


];

// -----Dahatsu Кассетный (DH-CS-A) -----


const functionsDahatsuDH_CS_A = ["ON/OFF", "Инфракрасный пульт (в комплекте)", "Режим энергосбережения",
  "Самоочистка внутреннего блока", "Объемное воздухо-распределение", "Турборежим", "Тихий режим", "Горячий запуск",
  "24-часовой таймер", "Режим I FEEL", "Автоматический режим выбора", "Автоматическая разморозка", "Работа в режиме охлаждения до -15°C",
  "Работа в режиме обогрева до -15°C", "Дренажный насос", "Самодиагностика", "Низкотемпературный комплект",
  "Панель с круговым распределением воздушного потока", "HEALTH", "Движение жалюзи по горизонтали и вертикали", "Анти-F. Предотвращение образования неприятного запаха"];

const imagesDahatsuDH_CS_A =
  ["./assets/img/catalog/dahatsu/dh-cs-a/01.jpg",
    "./assets/img/catalog/dahatsu/dh-cs-a/02.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/03.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/04.png"
  ];

const imagesDahatsuDH_CS_A_2 =
  ["./assets/img/catalog/dahatsu/dh-cs-a/01-1.jpg",
    "./assets/img/catalog/dahatsu/dh-cs-a/02.png",
    "./assets/img/catalog/dahatsu/dh-cs-a/03-3.JPG",
    "./assets/img/catalog/dahatsu/dh-cs-a/04.png"
  ];

const descriptionDahatsuDH_CS_A = "Кассетная сплит-система DH-CS-A позволит быстро и равномерно создать и поддерживать комфортную температуру в помещении. Распределение воздуха на 360 градусов. Панель с круговым распределением воздушного потока обеспечивает эффективное охлаждение или нагрев. \n Данный вид кондиционеров интегрируется в подвесные потолки и осуществляет подачу воздуха в 4 потока. Новейшая модель DH-CS-A обладает привлекательным видом, компактными габаритами, множеством настроек и функций. \n Режим TURBO активирует максимальную производительность и позволяет быстрее достичь необходимой температуры."


const DAHATSU_DH_CS_A = [

  // Dahatsu DH-CS-12A
  {
    article: "dahatsu-dh-cs-12a",
    title: "Dahatsu DH-CS-12A",
    type: "cassette",
    company: "Dahatsu",
    series: "DH-CS-A",
    factory: "AUX",
    link: "dahatsu-dh-cs-12a.html",
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
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
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

  // Dahatsu DH-CS-18A
  {
    article: "dahatsu-dh-cs-18a",
    title: "Dahatsu DH-CS-18A",
    type: "cassette",
    company: "Dahatsu",
    series: "DH-CS-A",
    factory: "AUX",
    link: "dahatsu-dh-cs-18a.html",
    imgSrc: imagesDahatsuDH_CS_A,
    price: 64800, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.2, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDH_CS_A,
    description: descriptionDahatsuDH_CS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 5280, // Производительность, Вт
      powerConsumption: 1700, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5600, // Производительность, Вт
      powerConsumption: 1550, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
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
      noise: 55, // Уровень шума, дБ (A)
      weight: 36, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-CS-24A
  {
    article: "dahatsu-dh-cs-24a",
    title: "Dahatsu DH-CS-24A",
    type: "cassette",
    company: "Dahatsu",
    series: "DH-CS-A",
    factory: "AUX",
    link: "dahatsu-dh-cs-24a.html",
    imgSrc: imagesDahatsuDH_CS_A,
    price: 79400, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDH_CS_A,
    description: descriptionDahatsuDH_CS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 7030, // Производительность, Вт
      powerConsumption: 2150, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7200, // Производительность, Вт
      powerConsumption: 1820, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,88мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 27, // Вес, кг
      size: "835x835x250", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 48, // Вес, кг
      size: "825x310x655", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },


  // Dahatsu DH-CS-36A
  {
    article: "dahatsu-dh-cs-36a",
    title: "Dahatsu DH-CS-36A",
    type: "cassette",
    company: "Dahatsu",
    series: "DH-CS-A",
    factory: "AUX",
    link: "dahatsu-dh-cs-36a.html",
    imgSrc: imagesDahatsuDH_CS_A_2,
    price: 100000, // Цена
    area: 90, // На площадь, м²
    coolingCapacity: 10.5, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDH_CS_A,
    description: descriptionDahatsuDH_CS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 10550, // Производительность, Вт
      powerConsumption: 3500, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 11700, // Производительность, Вт
      powerConsumption: 3340, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: 30, // Макс. длина трассы, м
    maxHeightDifference: 20, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,88мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "835x835x250", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 58, // Уровень шума, дБ (A)
      weight: 64, // Вес, кг
      size: "970x395x805", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-CS-48A
  {
    article: "dahatsu-dh-cs-48a",
    title: "Dahatsu DH-CS-48A",
    type: "cassette",
    company: "Dahatsu",
    series: "DH-CS-A",
    factory: "AUX",
    link: "dahatsu-dh-cs-48a.html",
    imgSrc: imagesDahatsuDH_CS_A_2,
    price: 126800, // Цена
    area: 140, // На площадь, м²
    coolingCapacity: 14, // Мощность охлаждения, кВт
    noise: 41, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDH_CS_A,
    description: descriptionDahatsuDH_CS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 14070, // Производительность, Вт
      powerConsumption: 4680, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 15240, // Производительность, Вт
      powerConsumption: 4600, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: 50, // Макс. длина трассы, м
    maxHeightDifference: 30, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 41, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "835x835x290", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 58, // Уровень шума, дБ (A)
      weight: 95, // Вес, кг
      size: "940x370x1325", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-CS-60A
  {
    article: "dahatsu-dh-cs-60a",
    title: "Dahatsu DH-CS-60A",
    type: "cassette",
    company: "Dahatsu",
    series: "DH-CS-A",
    factory: "AUX",
    link: "dahatsu-dh-cs-60a.html",
    imgSrc: imagesDahatsuDH_CS_A_2,
    price: 135000, // Цена
    area: 180, // На площадь, м²
    coolingCapacity: 16, // Мощность охлаждения, кВт
    noise: 41, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDH_CS_A,
    description: descriptionDahatsuDH_CS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 16120, // Производительность, Вт
      powerConsumption: 5550, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 17600, // Производительность, Вт
      powerConsumption: 5570, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: 50, // Макс. длина трассы, м
    maxHeightDifference: 30, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 41, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "835x835x290", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 60, // Уровень шума, дБ (A)
      weight: 99, // Вес, кг
      size: "940x370x1325", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

]

// -----Dahatsu Колонный (DH-KL-A) -----

const functions_Dahatsu_DH_KL_A = ["ON/OFF", "Инфракрасный пульт (в комплекте)", "Режим энергосбережения",
  "Самоочистка внутреннего блока", "Объемное воздухо-распределение", "Турборежим",  "Анти-F. Предотвращение образования неприятного запаха",
  "Движение жалюзи по горизонтали и вертикали", "Тихий режим",
  "24-часовой таймер", "Режим I FEEL", "Автоматический режим выбора", "Автоматическая разморозка",
  "Самодиагностика", "Мягкое осушение", "Встроенный электрический нагреватель", "HEALTH"];


const images_Dahatsu_DH_KL_A =
  ["./assets/img/catalog/dahatsu/DH-KL-A/01.png",
    "./assets/img/catalog/dahatsu/DH-KL-A/02.png",
    "./assets/img/catalog/dahatsu/DH-KL-A/03.png",
    "./assets/img/catalog/dahatsu/DH-KL-A/04.png"
  ];


const description_Dahatsu_DH_KL_A = "Сплит-система Dahatsu DH-KL-A колонного типа благодаря своей конструкции обеспечивает оптимальное распространение охлажденных/ нагретых воздушных потоков, а также ликвидацию холодных и теплых зон. Колонна - это эффективное и современное приспособление, которое имеет расширенный функционал для обеспечения благоприятный условий. С панели управления на внутреннем блоке можно осуществлять следующие действия: включение и выключение кондиционера, блокировка режима, выбор скорости вращения вентилятора, выбор режима работы, установка заданной температуры, установка времени и таймера, включение покачивания заслонками."


const DAHATSU_DH_KL_A = [

  // Dahatsu DH-KL-48CH
  {
    article: "dahatsu-dh-kl-48ch",
    title: "Dahatsu DH-KL-48CH",
    type: "column",
    company: "Dahatsu",
    series: "DH-KL-A",
    factory: "AUX",
    link: "dahatsu-dh-kl-48ch.html",
    imgSrc: images_Dahatsu_DH_KL_A,
    price: 145900, // Цена
    area: 150, // На площадь, м²
    coolingCapacity: 14, // Мощность охлаждения, кВт
    noise: 57, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Dahatsu_DH_KL_A,
    description: description_Dahatsu_DH_KL_A, // Описание

    // Охлаждение
    cooling: {
      performance: 14000, // Производительность, Вт
      powerConsumption: 5100, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 14400, // Производительность, Вт
      powerConsumption: 4800, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 54, // Вес, кг
      size: "1925x580x400", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 58, // Уровень шума, дБ (A)
      weight: 101, // Вес, кг
      size: "1320x940x340", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DKL-60GR
  {
    article: "dahatsu-dkl-60gr",
    title: "Dahatsu DKL-60GR",
    type: "column",
    company: "Dahatsu",
    series: "DH-KL-A",
    factory: "AUX",
    link: "dahatsu-dkl-60gr.html",
    imgSrc: images_Dahatsu_DH_KL_A,
    price: 168700, // Цена
    area: 190, // На площадь, м²
    coolingCapacity: 18, // Мощность охлаждения, кВт
    noise: 55, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Dahatsu_DH_KL_A,
    description: description_Dahatsu_DH_KL_A, // Описание

    // Охлаждение
    cooling: {
      performance: 18000, // Производительность, Вт
      powerConsumption: 5578, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 18000, // Производительность, Вт
      powerConsumption: 4986, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 51, // Вес, кг
      size: "1906x581x385", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 59, // Уровень шума, дБ (A)
      weight: 97, // Вес, кг
      size: "1030x1331x380", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "Highly",
    }
  },

  // Dahatsu DH-KL-100A
  {
    article: "dahatsu-dh-kl-100a",
    title: "Dahatsu DH-KL-100A",
    type: "column",
    company: "Dahatsu",
    series: "DH-KL-A",
    factory: "AUX",
    link: "dahatsu-dh-kl-100a.html",
    imgSrc: images_Dahatsu_DH_KL_A,
    price: 337900, // Цена
    area: 250, // На площадь, м²
    coolingCapacity: 28, // Мощность охлаждения, кВт
    noise: 56, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Dahatsu_DH_KL_A,
    description: description_Dahatsu_DH_KL_A, // Описание

    // Охлаждение
    cooling: {
      performance: 28000, // Производительность, Вт
      powerConsumption: 10070, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 31000, // Производительность, Вт
      powerConsumption: 10130, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: 50, // Макс. длина трассы, м
    maxHeightDifference: 20, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8) x 2",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4) x 2", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 56, // Уровень шума, дБ (A)
      weight: 111, // Вес, кг
      size: "1200x360x1850", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 58, // Уровень шума, дБ (A)
      weight: 176, // Вес, кг
      size: "1120x400x1510", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "Gree",
    }
  },


]

// -----Dahatsu Кассетный (DH-KN-CH) -----


const functionsDahatsu_DH_KN_CH = ["ON/OFF", "Проводной пульт (в комплекте)", "Инфракрасный пульт (опция)", "Режим энергосбережения",
  "Самоочистка внутреннего блока", "Объемное воздухо-распределение", "Турборежим", "Тихий режим", "Горячий запуск",
  "24-часовой таймер", "Режим I FEEL", "Автоматический режим выбора", "Автоматическая разморозка", "Работа в режиме охлаждения до -20°C (опция)",
  "Работа в режиме обогрева до -15°C (опция)", "Дренажный насос (опция)", "Самодиагностика", "Низкотемпературный комплект",
  "Моющийся фильтр", "Индикатор загрязнения фильтра", "Режим комфортного сна", "Блокировка кнопок пульта"];

const imagesDahatsu_DH_KN_CH =
  ["./assets/img/catalog/dahatsu/DH-KN-A/01.png",
    "./assets/img/catalog/dahatsu/DH-KN-A/02.png",
    //"./assets/img/catalog/dahatsu/DH-KN-A/03.png",
    //"./assets/img/catalog/dahatsu/DH-KN-A/04.png"
  ];

const imagesDahatsu_DH_KN_CH_2 =
  ["./assets/img/catalog/dahatsu/DH-KN-A/01-1.png",
    "./assets/img/catalog/dahatsu/DH-KN-A/02-2.jpg",
    //"./assets/img/catalog/dahatsu/DH-KN-A/03-3.JPG",
    //"./assets/img/catalog/dahatsu/DH-KN-A/04.png"
  ];

const descriptionDahatsu_DH_KN_CH = "Не всегда в дизайн интерьера хорошо вписывается внутренний блок классической сплит-системы. Идеальным решением в таких ситуациях станут канальные кондиционеры DH-KN-CH. \n Кондиционер самостоятельно выполняет диагностику неполадок. Сигналы о возникших неисправностях отображаются на световых индикаторах внутреннего блока сплит-системы. \n От состояния фильтра зависит бесперебойность и качество функционирования кондиционера. Но, как и в любом другом механизме, фильтры со временем загрязняются, поэтому нужно внимательно следить за их чистотой. Индикатор загрязнения фильтра своевременно оповестит Вас о необходимости проведения технического обслуживания."


const DAHATSU_DH_KN_CH = [

  // Dahatsu DH-KN-18CH
  {
    article: "dahatsu-dh-kn-18ch",
    title: "Dahatsu DH-KN-18CH",
    type: "ducted",
    company: "Dahatsu",
    series: "DH-KN-CH",
    factory: "AUX",
    link: "dahatsu-dh-kn-18ch.html",
    imgSrc: imagesDahatsu_DH_KN_CH,
    price: 72900, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.3, // Мощность охлаждения, кВт
    noise: 35, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_KN_CH,
    description: descriptionDahatsu_DH_KN_CH, // Описание

    // Охлаждение
    cooling: {
      performance: 5300, // Производительность, Вт
      powerConsumption: 1760, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5800, // Производительность, Вт
      powerConsumption: 1800, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 35, // Уровень шума, дБ (A)
      weight: 32, // Вес, кг
      size: "1189x260x643", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 36, // Вес, кг
      size: "850x555x345", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-KN-24CH
  {
    article: "dahatsu-dh-kn-24ch",
    title: "Dahatsu DH-KN-24CH",
    type: "ducted",
    company: "Dahatsu",
    series: "DH-KN-CH",
    factory: "AUX",
    link: "dahatsu-dh-kn-24ch.html",
    imgSrc: imagesDahatsu_DH_KN_CH,
    price: 84600, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 7.2, // Мощность охлаждения, кВт
    noise: 38, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_KN_CH,
    description: descriptionDahatsu_DH_KN_CH, // Описание

    // Охлаждение
    cooling: {
      performance: 7200, // Производительность, Вт
      powerConsumption: 2390, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 8080, // Производительность, Вт
      powerConsumption: 2500, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,88мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 38, // Уровень шума, дБ (A)
      weight: 33, // Вес, кг
      size: "1189x260x643", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 56, // Уровень шума, дБ (A)
      weight: 52, // Вес, кг
      size: "914x702x382", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-KN-36CH
  {
    article: "dahatsu-dh-kn-36ch",
    title: "Dahatsu DH-KN-36CH",
    type: "ducted",
    company: "Dahatsu",
    series: "DH-KN-CH",
    factory: "AUX",
    link: "dahatsu-dh-kn-36ch.html",
    imgSrc: imagesDahatsu_DH_KN_CH_2,
    price: 113000, // Цена
    area: 110, // На площадь, м²
    coolingCapacity: 10.6, // Мощность охлаждения, кВт
    noise: 41, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_KN_CH,
    description: descriptionDahatsu_DH_KN_CH, // Описание

    // Охлаждение
    cooling: {
      performance: 10600, // Производительность, Вт
      powerConsumption: 3500, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 11700, // Производительность, Вт
      powerConsumption: 3500, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: 50, // Макс. длина трассы, м
    maxHeightDifference: 25, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 41, // Уровень шума, дБ (A)
      weight: 33, // Вес, кг
      size: "1189x260x643", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 56, // Уровень шума, дБ (A)
      weight: 67, // Вес, кг
      size: "1015x810x445", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-KN-48CH
  {
    article: "dahatsu-dh-kn-48ch",
    title: "Dahatsu DH-KN-48CH",
    type: "ducted",
    company: "Dahatsu",
    series: "DH-KN-CH",
    factory: "AUX",
    link: "dahatsu-dh-kn-48ch.html",
    imgSrc: imagesDahatsu_DH_KN_CH_2,
    price: 159900, // Цена
    area: 150, // На площадь, м²
    coolingCapacity: 14.2, // Мощность охлаждения, кВт
    noise: 44, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_KN_CH,
    description: descriptionDahatsu_DH_KN_CH, // Описание

    // Охлаждение
    cooling: {
      performance: 14200, // Производительность, Вт
      powerConsumption: 4710, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 15700, // Производительность, Вт
      powerConsumption: 4890, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: 50, // Макс. длина трассы, м
    maxHeightDifference: 25, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 44, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "1425x260x643", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 56, // Уровень шума, дБ (A)
      weight: 83, // Вес, кг
      size: "1015x810x445", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-KN-60CH
  {
    article: "dahatsu-dh-kn-60ch",
    title: "Dahatsu DH-KN-60CH",
    type: "ducted",
    company: "Dahatsu",
    series: "DH-KN-CH",
    factory: "AUX",
    link: "dahatsu-dh-kn-60ch.html",
    imgSrc: imagesDahatsu_DH_KN_CH_2,
    price: 164700, // Цена
    area: 190, // На площадь, м²
    coolingCapacity: 17.6, // Мощность охлаждения, кВт
    noise: 44, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_KN_CH,
    description: descriptionDahatsu_DH_KN_CH, // Описание

    // Охлаждение
    cooling: {
      performance: 17600, // Производительность, Вт
      powerConsumption: 5710, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 18700, // Производительность, Вт
      powerConsumption: 5820, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: 50, // Макс. длина трассы, м
    maxHeightDifference: 25, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 44, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "1425x260x643", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 60, // Уровень шума, дБ (A)
      weight: 91, // Вес, кг
      size: "911x1330x400", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },


]

// -----Dahatsu Напольно-потолочный тип (DH-NP-A) -----

const functionsDahatsu_DH_NP_A = ["ON/OFF", "Инфракрасный пульт (в комплекте)", "Режим энергосбережения",
  "Самоочистка ICLEAN", "Объемное воздухо-распределение", "Турборежим", "Спящий режим", "Движение жалюзи по горизонтали и вертикали",
  "24-часовой таймер", "Режим I FEEL", "Автоматический режим выбора", "Автоматическая разморозка", "Работа в режиме охлаждения до -15°C",
  "Работа в режиме обогрева до -15°C", "Самодиагностика", "Низкотемпературный комплект",
  "HEALTH", "Анти-F. Предотвращение образования неприятного запаха"];


const imagesDahatsu_DH_NP_A =
  ["./assets/img/catalog/dahatsu/DH-NP-A/01.png",
    "./assets/img/catalog/dahatsu/DH-NP-A/02.png",
    "./assets/img/catalog/dahatsu/DH-NP-A/03.png",
    "./assets/img/catalog/dahatsu/DH-NP-A/04.png"
  ];


const pricesDahatsu_DH_NP_A = {
  "dahatsu_dh_np_18a": 72000,
  "dahatsu_dh_np_24a": 90900,
  "dahatsu_dh_np_36a": 123000,
  "dahatsu_dh_np_48a": 148900,
  "dahatsu_dh_np_60a": 157000,

}

const descriptionDahatsu_DH_NP_A = "Напольно-потолочная сплит-система DH-NP-A идеально подходит для создания комфортного микроклимата в ресторанах, гостиницах, офисных помещениях. Прибор имеет элегантный дизайн, на передней панели расположены индикаторы режимов работы и цифровой дисплей с указанием температуры. Управление производится с помощью беспроводного пульта. \n Универсальный монтаж.Внутренний блок может быть установлен горизонтально у потолка или вертикально на стене. \n Функция iClean благодаря которой устройство автоматически сушится и очищается от пыли, что повышает эффективность охлаждения и нагрева."


const DAHATSU_DH_NP_A = [

  // Dahatsu DH-NP-18A
  {
    article: "dahatsu-dh-np-18a",
    title: "Dahatsu DH-NP-18A",
    type: "floor-ceiling",
    company: "Dahatsu",
    series: "DH-NP-A",
    factory: "AUX",
    link: "dahatsu-dh-np-18a.html",
    imgSrc: imagesDahatsu_DH_NP_A,
    price: pricesDahatsu_DH_NP_A.dahatsu_dh_np_18a, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.2, // Мощность охлаждения, кВт
    noise: 43, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_NP_A,
    description: descriptionDahatsu_DH_NP_A, // Описание

    // Охлаждение
    cooling: {
      performance: 5280, // Производительность, Вт
      powerConsumption: 1700, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5600, // Производительность, Вт
      powerConsumption: 1550, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 43, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "1000x690x235", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 36, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-NP-24A
  {
    article: "dahatsu-dh-np-24a",
    title: "Dahatsu DH-NP-24A",
    type: "floor-ceiling",
    company: "Dahatsu",
    series: "DH-NP-A",
    factory: "AUX",
    link: "dahatsu-dh-np-24a.html",
    imgSrc: imagesDahatsu_DH_NP_A,
    price: pricesDahatsu_DH_NP_A.dahatsu_dh_np_24a, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 49, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_NP_A,
    description: descriptionDahatsu_DH_NP_A, // Описание

    // Охлаждение
    cooling: {
      performance: 7030, // Производительность, Вт
      powerConsumption: 2150, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7600, // Производительность, Вт
      powerConsumption: 1920, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,88мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 49, // Уровень шума, дБ (A)
      weight: 36, // Вес, кг
      size: "1280x690x235", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 48, // Вес, кг
      size: "825x310x655", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-NP-36A
  {
    article: "dahatsu-dh-np-36a",
    title: "Dahatsu DH-NP-36A",
    type: "floor-ceiling",
    company: "Dahatsu",
    series: "DH-NP-A",
    factory: "AUX",
    link: "dahatsu-dh-np-36a.html",
    imgSrc: imagesDahatsu_DH_NP_A,
    price: pricesDahatsu_DH_NP_A.dahatsu_dh_np_36a, // Цена
    area: 110, // На площадь, м²
    coolingCapacity: 10.5, // Мощность охлаждения, кВт
    noise: 50, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_NP_A,
    description: descriptionDahatsu_DH_NP_A, // Описание

    // Охлаждение
    cooling: {
      performance: 10550, // Производительность, Вт
      powerConsumption: 3500, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 11700, // Производительность, Вт
      powerConsumption: 3240, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: "30м", // Макс. длина трассы, м
    maxHeightDifference: "20м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,88мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 36, // Вес, кг
      size: "1280x690x235", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 58, // Уровень шума, дБ (A)
      weight: 64, // Вес, кг
      size: "970x395x805", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-NP-48A
  {
    article: "dahatsu-dh-np-48a",
    title: "Dahatsu DH-NP-48A",
    type: "floor-ceiling",
    company: "Dahatsu",
    series: "DH-NP-A",
    factory: "AUX",
    link: "dahatsu-dh-np-48a.html",
    imgSrc: imagesDahatsu_DH_NP_A,
    price: pricesDahatsu_DH_NP_A.dahatsu_dh_np_48a, // Цена
    area: 150, // На площадь, м²
    coolingCapacity: 14, // Мощность охлаждения, кВт
    noise: 51, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_NP_A,
    description: descriptionDahatsu_DH_NP_A, // Описание

    // Охлаждение
    cooling: {
      performance: 14070, // Производительность, Вт
      powerConsumption: 4680, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 15240, // Производительность, Вт
      powerConsumption: 4420, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: "50м", // Макс. длина трассы, м
    maxHeightDifference: "30м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 51, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "1600x690x235", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 58, // Уровень шума, дБ (A)
      weight: 95, // Вес, кг
      size: "940x370x1325", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Dahatsu DH-NP-60A
  {
    article: "dahatsu-dh-np-60a",
    title: "Dahatsu DH-NP-60A",
    type: "floor-ceiling",
    company: "Dahatsu",
    series: "DH-NP-A",
    factory: "AUX",
    link: "dahatsu-dh-np-60a.html",
    imgSrc: imagesDahatsu_DH_NP_A,
    price: pricesDahatsu_DH_NP_A.dahatsu_dh_np_60a, // Цена
    area: 180, // На площадь, м²
    coolingCapacity: 16.1, // Мощность охлаждения, кВт
    noise: 51, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_NP_A,
    description: descriptionDahatsu_DH_NP_A, // Описание

    // Охлаждение
    cooling: {
      performance: 16120, // Производительность, Вт
      powerConsumption: 5550, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 17600, // Производительность, Вт
      powerConsumption: 5010, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: "50м", // Макс. длина трассы, м
    maxHeightDifference: "30м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 51, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "1600x690x235", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 60, // Уровень шума, дБ (A)
      weight: 99, // Вес, кг
      size: "940x370x1325", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

]

// ----- Мульти-сплит-система (внутрненние блоки) Dahatsu  (DHMULT) -----

const functionsDahatsuDHMULT_In = ["Компрессор GMCC Toshiba", "Golden fin", "Класс энергоэффективности A", "Уровень шума от 22dB", "Фреон R410A"];

const imagesDahatsuDHMULT_In =
  ["./assets/img/catalog/dahatsu/DHMULT/indoor/01.jpg",
  ];

const pricesDahatsuDHMULT_In = {
  "dahatsu_dhmult_07": 16700,
  "dahatsu_dhmult_09": 17400,
  "dahatsu_dhmult_12": 18900,
  "dahatsu_dhmult_18": 26700,

}

const descriptionDahatsuDHMULT_In = "Серия DHMULT DC INVERTER бренда DAHATSU 2023 года - это комплекс современных высокотехнологичных мульти-сплит систем, оснащенных наилучшими комплектующими и представленных в современных высококачественных корпусах.\n" +
  "Возможность одновременного подключения к одному внешнему блоку сразу нескольких внутренних блоков позволяет с минимальными затратами и нарушением внешнего вида зданий задать комфортный климат сразу в нескольких помещениях. Данная серия является одной из лучших вариантов обладающих высокой энергоэффективностью, низким уровнем шума, компактными размерами. Серия DHMULT может стать идеальным вариантом для установки, например, в загородном доме или многокомнатной квартире."

const DAHATSU_DHMULT_IN = [

  // ------ Dahatsu DHMULT-07 ------
  {
    article: "dahatsu-dhmult-07",
    title: "Внутренний блок Dahatsu DHMULT-07",
    type: "multi-split-systems",
    company: "Dahatsu",
    series: "DHMULT DC INVERTER (Indoor)",
    link: "dahatsu-dhmult-07.html",
    imgSrc: imagesDahatsuDHMULT_In,
    price: pricesDahatsuDHMULT_In.dahatsu_dhmult_07, // Цена
    area: 30, // На площадь, м²
    coolingCapacity: 2.05, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDHMULT_In,
    description: descriptionDahatsuDHMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 2050, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2150, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "750x285x200", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },

  // ------ Dahatsu DHMULT-09 ------
  {
    article: "dahatsu-dhmult-09",
    title: "Внутренний блок Dahatsu DHMULT-09",
    type: "multi-split-systems",
    company: "Dahatsu",
    series: "DHMULT DC INVERTER (Indoor)",
    link: "dahatsu-dhmult-09.html",
    imgSrc: imagesDahatsuDHMULT_In,
    price: pricesDahatsuDHMULT_In.dahatsu_dhmult_09, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 2.58, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDHMULT_In,
    description: descriptionDahatsuDHMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 2580, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "750x285x200", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },

  // ------ Dahatsu DHMULT-12 ------
  {
    article: "dahatsu-dhmult-12",
    title: "Внутренний блок Dahatsu DHMULT-12",
    type: "multi-split-systems",
    company: "Dahatsu",
    series: "DHMULT DC INVERTER (Indoor)",
    link: "dahatsu-dhmult-12.html",
    imgSrc: imagesDahatsuDHMULT_In,
    price: pricesDahatsuDHMULT_In.dahatsu_dhmult_12, // Цена
    area: 40, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 33, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDHMULT_In,
    description: descriptionDahatsuDHMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 3500, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3500, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 33, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "750x285x200", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },

  // ------ Dahatsu DHMULT-18 ------
  {
    article: "dahatsu-dhmult-18",
    title: "Внутренний блок Dahatsu DHMULT-18",
    type: "multi-split-systems",
    company: "Dahatsu",
    series: "DHMULT DC INVERTER (Indoor)",
    link: "dahatsu-dhmult-18.html",
    imgSrc: imagesDahatsuDHMULT_In,
    price: pricesDahatsuDHMULT_In.dahatsu_dhmult_18, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.27, // Мощность охлаждения, кВт
    noise: 35, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDHMULT_In,
    description: descriptionDahatsuDHMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 5270, // Производительность, Вт
      powerConsumption: 63, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5370, // Производительность, Вт
      powerConsumption: 63, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 35, // Уровень шума, дБ (A)
      weight: 11, // Вес, кг
      size: "900x310x225", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },


];

// ----- Мульти-сплит-система (наружные блоки) Dahatsu  (DHMULT) -----

const functionsDahatsuDHMULT_Out = ["Компрессор GMCC Toshiba", "Golden fin", "Класс энергоэффективности A", "Уровень шума от 22dB", "Фреон R410A"];

const imagesDahatsuDHMULT_Out =
  ["./assets/img/catalog/dahatsu/DHMULT/outdoor/01.jpg",
  ];

const pricesDahatsuDHMULT_Out = {
  "dahatsu_dhmult_out_18_2": 82600,
  "dahatsu_dhmult_out_24_3": 102400,
  "dahatsu_dhmult_out_30_3": 126000,
  "dahatsu_dhmult_out_42_4": 189000,
  "dahatsu_dhmult_out_42_5": 212000,

}

const descriptionDahatsuDHMULT_Out = "Серия DHMULT DC INVERTER бренда DAHATSU 2023 года - это комплекс современных высокотехнологичных мульти-сплит систем, оснащенных наилучшими комплектующими и представленных в современных высококачественных корпусах.\n" +
  "Возможность одновременного подключения к одному внешнему блоку сразу нескольких внутренних блоков позволяет с минимальными затратами и нарушением внешнего вида зданий задать комфортный климат сразу в нескольких помещениях. Данная серия является одной из лучших вариантов обладающих высокой энергоэффективностью, низким уровнем шума, компактными размерами. Серия DHMULT может стать идеальным вариантом для установки, например, в загородном доме или многокомнатной квартире."

const DAHATSU_DHMULT_OUT = [

  // ------ Dahatsu DHMULT-18/2 ------
  {
    article: "dahatsu-dhmult-18-2",
    title: "Наружный блок Dahatsu DHMULT-18/2",
    type: "multi-split-systems",
    company: "Dahatsu",
    series: "DHMULT DC INVERTER (Outdoor)",
    link: "dahatsu-dhmult-18-2.html",
    imgSrc: imagesDahatsuDHMULT_Out,
    price: pricesDahatsuDHMULT_Out.dahatsu_dhmult_out_18_2, // Цена
    area: 50, // На площадь, м²
    coolingCapacity: 4.1, // Мощность охлаждения, кВт
    noise: 54, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDHMULT_Out,
    description: descriptionDahatsuDHMULT_Out, // Описание

    // Охлаждение
    cooling: {
      performance: 4100, // Производительность, Вт
      powerConsumption: 1240, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 4800, // Производительность, Вт
      powerConsumption: 1150, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 40, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "2x6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "2x9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    // indoorUnit: {
    //   noise: "-", // Уровень шума, дБ (A)
    //   weight: "-", // Вес, кг
    //   size: "-", // Размеры
    // },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 34, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DHMULT-24/3 ------
  {
    article: "dahatsu-dhmult-24-3",
    title: "Наружный блок Dahatsu DHMULT-24/3",
    type: "multi-split-systems",
    company: "Dahatsu",
    series: "DHMULT DC INVERTER (Outdoor)",
    link: "dahatsu-dhmult-24-3.html",
    imgSrc: imagesDahatsuDHMULT_Out,
    price: pricesDahatsuDHMULT_Out.dahatsu_dhmult_out_24_3, // Цена
    area: 70, // На площадь, м²
    coolingCapacity: 6.2, // Мощность охлаждения, кВт
    noise: 56, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDHMULT_Out,
    description: descriptionDahatsuDHMULT_Out, // Описание

    // Охлаждение
    cooling: {
      performance: 6200, // Производительность, Вт
      powerConsumption: 1920, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 6600, // Производительность, Вт
      powerConsumption: 1780, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 60, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "3x6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "3x9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    // indoorUnit: {
    //   noise: "-", // Уровень шума, дБ (A)
    //   weight: "-", // Вес, кг
    //   size: "-", // Размеры
    // },
    // Внешний блок
    outdoorUnit: {
      noise: 56, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "834x328x655", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DHMULT-30/3 ------
  {
    article: "dahatsu-dhmult-30-3",
    title: "Наружный блок Dahatsu DHMULT-30/3",
    type: "multi-split-systems",
    company: "Dahatsu",
    series: "DHMULT DC INVERTER (Outdoor)",
    link: "dahatsu-dhmult-30-3.html",
    imgSrc: imagesDahatsuDHMULT_Out,
    price: pricesDahatsuDHMULT_Out.dahatsu_dhmult_out_30_3, // Цена
    area: 80, // На площадь, м²
    coolingCapacity: 7.9, // Мощность охлаждения, кВт
    noise: 58, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDHMULT_Out,
    description: descriptionDahatsuDHMULT_Out, // Описание

    // Охлаждение
    cooling: {
      performance: 7900, // Производительность, Вт
      powerConsumption: 2460, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 8200, // Производительность, Вт
      powerConsumption: 2270, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 60, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "3x6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "3x9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    // indoorUnit: {
    //   noise: "-", // Уровень шума, дБ (A)
    //   weight: "-", // Вес, кг
    //   size: "-", // Размеры
    // },
    // Внешний блок
    outdoorUnit: {
      noise: 58, // Уровень шума, дБ (A)
      weight: 46, // Вес, кг
      size: "834x328x655", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DHMULT-42/4 ------
  {
    article: "dahatsu-dhmult-42-4",
    title: "Наружный блок Dahatsu DHMULT-42/4",
    type: "multi-split-systems",
    company: "Dahatsu",
    series: "DHMULT DC INVERTER (Outdoor)",
    link: "dahatsu-dhmult-42-4.html",
    imgSrc: imagesDahatsuDHMULT_Out,
    price: pricesDahatsuDHMULT_Out.dahatsu_dhmult_out_42_4, // Цена
    area: 110, // На площадь, м²
    coolingCapacity: 10.5, // Мощность охлаждения, кВт
    noise: 61, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDHMULT_Out,
    description: descriptionDahatsuDHMULT_Out, // Описание

    // Охлаждение
    cooling: {
      performance: 10500, // Производительность, Вт
      powerConsumption: 3600, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 11000, // Производительность, Вт
      powerConsumption: 3400, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 80, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "4x6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "4x9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    // indoorUnit: {
    //   noise: "-", // Уровень шума, дБ (A)
    //   weight: "-", // Вес, кг
    //   size: "-", // Размеры
    // },
    // Внешний блок
    outdoorUnit: {
      noise: 61, // Уровень шума, дБ (A)
      weight: 76.5, // Вес, кг
      size: "985x395x808", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DHMULT-42/5 ------
  {
    article: "dahatsu-dhmult-42-5",
    title: "Наружный блок Dahatsu DHMULT-42/5",
    type: "multi-split-systems",
    company: "Dahatsu",
    series: "DHMULT DC INVERTER (Outdoor)",
    link: "dahatsu-dhmult-42-5.html",
    imgSrc: imagesDahatsuDHMULT_Out,
    price: pricesDahatsuDHMULT_Out.dahatsu_dhmult_out_42_5, // Цена
    area: 130, // На площадь, м²
    coolingCapacity: 12.1, // Мощность охлаждения, кВт
    noise: 61, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDHMULT_Out,
    description: descriptionDahatsuDHMULT_Out, // Описание

    // Охлаждение
    cooling: {
      performance: 12100, // Производительность, Вт
      powerConsumption: 4450, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 13000, // Производительность, Вт
      powerConsumption: 3800, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 80, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "5x6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "5x9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    // indoorUnit: {
    //   noise: "-", // Уровень шума, дБ (A)
    //   weight: "-", // Вес, кг
    //   size: "-", // Размеры
    // },
    // Внешний блок
    outdoorUnit: {
      noise: 61, // Уровень шума, дБ (A)
      weight: 78.5, // Вес, кг
      size: "985x395x808", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

];

// ----- Dahatsu Dragon (DHP) -----

const functionsDahatsuDragon = ["Компрессор GMCC Toshiba", "Golden fin", "Класс энергоэффективности A",
  "Уровень шума 22dB", "Фреон R32", "Компактный дизайн", "Антибактериальный фильтр", "Самоочистка внутреннего блока",
  "Режим Turbo производительности", "Таймер", "Запоминание положения жалюзи", "Автоматический перезапуск"];

const imagesDahatsuDragon =
  ["./assets/img/catalog/dahatsu/DHP/01.jpg",
    "./assets/img/catalog/dahatsu/DHP/02.png",
    "./assets/img/catalog/dahatsu/DHP/03.jpg",
    "./assets/img/catalog/dahatsu/DHP/04.jpg"
  ];

const pricesDahatsuDragon = {
  "dahatsu_dhp_07": 22500,
  "dahatsu_dhp_09": 27700,
  "dahatsu_dhp_12": 38500,
  "dahatsu_dhp_18": 59900,
  "dahatsu_dhp_24": 77800,
}

const descriptionDahatsuDragon = "Сплит-системы Dahatsu серии Dragon выполнены в современном, лаконичном дизайне и имеют обтекаемые формы, что позволит разместить данные сплит-системы в помещениях с высококлассными требованиями к решением интерьера. Помимо быстрого обогрева и охлаждения, устройство гарантирует тщательную очистку воздуха от загрязнений и аллергенов при помощи моющегося фильтра высокой плотности. В кондиционере предусмотрены такие функции, как: спящий режим, обнаружение утечки хладагента, горизонтальный автоповорот жалюзи, 2 способа подключения трубопровода, Н-образная установочная пластина, функция short cut- устанавливает и активирует ваши предварительные настройки, и прочие сверхтехнологичные функции."

const DAHATSU_DHP = [

  // ------ Dahatsu DHP-07/DHV-07 ------
  {
    article: "dahatsu-dhp-07",
    title: "Dahatsu DHP-07/DHV-07",
    type: "split-system",
    company: "Dahatsu",
    series: "Dragon",
    link: "dahatsu-dhp-07.html",
    imgSrc: imagesDahatsuDragon,
    price: pricesDahatsuDragon.dahatsu_dhp_07, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.3, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDragon,
    description: descriptionDahatsuDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 2343, // Производительность, Вт
      powerConsumption: 730, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2419, // Производительность, Вт
      powerConsumption: 670, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 8, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 7.47, // Вес, кг
      size: "715x194x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 23.7, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R32", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DHP-09/DHV-09 ------
  {
    article: "dahatsu-dhp-09",
    title: "Dahatsu DHP-09/DHV-09",
    type: "split-system",
    company: "Dahatsu",
    series: "Dragon",
    link: "dahatsu-dhp-09.html",
    imgSrc: imagesDahatsuDragon,
    price: pricesDahatsuDragon.dahatsu_dhp_09, // Цена
    area: 28 , // На площадь, м²
    coolingCapacity: 2.5, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDragon,
    description: descriptionDahatsuDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 2491, // Производительность, Вт
      powerConsumption: 776, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2491, // Производительность, Вт
      powerConsumption: 690, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 8, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 7.6, // Вес
      size: "715x194x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 23.7, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R32", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DHP-12/DHV-12 ------
  {
    article: "dahatsu-dhp-12",
    title: "Dahatsu DHP-12/DHV-12",
    type: "split-system",
    company: "Dahatsu",
    series: "Dragon",
    link: "dahatsu-dhp-12.html",
    imgSrc: imagesDahatsuDragon,
    price: pricesDahatsuDragon.dahatsu_dhp_12, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDragon,
    description: descriptionDahatsuDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 3517, // Производительность, Вт
      powerConsumption: 1095, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3664, // Производительность, Вт
      powerConsumption: 1015, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 8, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8.1, // Вес, кг
      size: "805x194x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 25.6, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R32", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DHP-18/DHV-18 ------
  {
    article: "dahatsu-dhp-18",
    title: "Dahatsu DHP-18/DHV-18",
    type: "split-system",
    company: "Dahatsu",
    series: "Dragon",
    link: "dahatsu-dhp-18.html",
    imgSrc: imagesDahatsuDragon,
    price: pricesDahatsuDragon.dahatsu_dhp_18, // Цена
    area: 55 , // На площадь, м²
    coolingCapacity: 5.2, // Мощность охлаждения, кВт
    noise: 26, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDragon,
    description: descriptionDahatsuDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 5275, // Производительность, Вт
      powerConsumption: 1643, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5569, // Производительность, Вт
      powerConsumption: 1542, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 26, // Уровень шума, дБ (A)
      weight: 10.9, // Вес, кг
      size: "957x213x302", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 34.5, // Вес, кг
      size: "765x303x555", // Размеры
      freon: "R32", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DHP-24/DHV-24 ------
  {
    article: "dahatsu-dhp-24",
    title: "Dahatsu DHP-24/DHV-24",
    type: "split-system",
    company: "Dahatsu",
    series: "Dragon",
    link: "dahatsu-dhp-24.html",
    imgSrc: imagesDahatsuDragon,
    price: pricesDahatsuDragon.dahatsu_dhp_24, // Цена
    area: 75 , // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 28, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsuDragon,
    description: descriptionDahatsuDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 7034, // Производительность, Вт
      powerConsumption: 2190, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7034, // Производительность, Вт
      powerConsumption: 1948, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 28, // Уровень шума, дБ (A)
      weight: 13.7, // Вес, кг
      size: "1040x220x327", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 60.5, // Уровень шума, дБ (A)
      weight: 47.9, // Вес, кг
      size: "890x342x673", // Размеры
      freon: "R32", // Фреон
      compressorModel: "GMCC",
    }
  },
];

// ----- Dahatsu BRILLIANT (DS-I) -----

const functionsDahatsuBrilliant = ["Компрессор GMCC Toshiba", "Golden fin", "Класс энергоэффективности A",
  "Автоматический перезапуск", "Таймер", "Самоочистка внутреннего блока", "Антибактериальный фильтр",
  "Cold-Catalyst Filter 'Холодный катализатор'", "Режим I Feel",
  "Запоминание положения жалюзи", "Уровень шума 21dB", "Компактный дизайн"];

const imagesDahatsuBrilliant =
  ["./assets/img/catalog/dahatsu/DS-I/01.png",
    "./assets/img/catalog/dahatsu/DS-I/02.png",
    "./assets/img/catalog/dahatsu/DS-I/03.png",
    "./assets/img/catalog/dahatsu/DS-I/04.png"
  ];

const pricesDahatsuBrilliant = {
  "dahatsu_ds_07i": 37200,
  "dahatsu_ds_09i": 39500,
  "dahatsu_ds_12i": 46900,
  "dahatsu_ds_18i": 70600,
  "dahatsu_ds_24i": 83300,
}


const descriptionDahatsuBrilliant = "Сплит-системы Dahatsu серии Brilliant сочетающие в себе современные технологии: инвертор, высочайший класс энергоэффективности, озонобезопасный хладагент R410A. Система управления изменяет производительность кондиционера, отслеживая даже самые незначительные изменения температуры воздуха в помещении. На основании данных температурных датчиков вычисляется оптимальная производительность для комфортного поддержания температуры воздуха. Отсутствие температурных колебаний создает благоприятные условия в помещении, а работа компрессора с частичной нагрузкой позволяет значительно экономить потребление электроэнергии."

const DAHATSU_DS_I = [

  // ------ Dahatsu DS-07i/DSN-07i ------
  {
    article: "dahatsu-ds-07i",
    title: "Dahatsu DS-07i/DSN-07i",
    type: "split-system",
    company: "Dahatsu",
    series: "Brilliant",
    link: "dahatsu-ds-07i.html",
    imgSrc: imagesDahatsuBrilliant,
    price: pricesDahatsuBrilliant.dahatsu_ds_07i, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.4, // Мощность охлаждения, кВт
    noise: 21, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuBrilliant,
    description: descriptionDahatsuBrilliant, // Описание

    // Охлаждение
    cooling: {
      performance: 2433, // Производительность, Вт
      powerConsumption: 758, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2462, // Производительность, Вт
      powerConsumption: 678, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 21, // Уровень шума, дБ (A)
      weight: 7.4, // Вес, кг
      size: "715x194x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 20.6, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DS-09i/DSN-09i ------
  {
    article: "dahatsu-ds-09i",
    title: "Dahatsu DS-09i/DSN-09i",
    type: "split-system",
    company: "Dahatsu",
    series: "Brilliant",
    link: "dahatsu-ds-09i.html",
    imgSrc: imagesDahatsuBrilliant,
    price: pricesDahatsuBrilliant.dahatsu_ds_09i, // Цена
    area: 28, // На площадь, м²
    coolingCapacity: 2.8, // Мощность охлаждения, кВт
    noise: 21, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuBrilliant,
    description: descriptionDahatsuBrilliant, // Описание

    // Охлаждение
    cooling: {
      performance: 2843, // Производительность, Вт
      powerConsumption: 886, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2930, // Производительность, Вт
      powerConsumption: 820, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 21, // Уровень шума, дБ (A)
      weight: 7.5, // Вес, кг
      size: "715x194x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 22.8, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DS-12i/DSN-12i ------
  {
    article: "dahatsu-ds-12i",
    title: "Dahatsu DS-12i/DSN-12i",
    type: "split-system",
    company: "Dahatsu",
    series: "Brilliant",
    link: "dahatsu-ds-12i.html",
    imgSrc: imagesDahatsuBrilliant,
    price: pricesDahatsuBrilliant.dahatsu_ds_12i, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.4, // Мощность охлаждения, кВт
    noise: 26, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuBrilliant,
    description: descriptionDahatsuBrilliant, // Описание

    // Охлаждение
    cooling: {
      performance: 3429, // Производительность, Вт
      powerConsumption: 1068, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3690, // Производительность, Вт
      powerConsumption: 1039, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 26, // Уровень шума, дБ (A)
      weight: 7.6, // Вес, кг
      size: "715x194x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 23.5, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DS-18i/DSN-18i ------
  {
    article: "dahatsu-ds-18i",
    title: "Dahatsu DS-18i/DSN-18i",
    type: "split-system",
    company: "Dahatsu",
    series: "Brilliant",
    link: "dahatsu-ds-18i.html",
    imgSrc: imagesDahatsuBrilliant,
    price: pricesDahatsuBrilliant.dahatsu_ds_18i, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.2, // Мощность охлаждения, кВт
    noise: 27, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuBrilliant,
    description: descriptionDahatsuBrilliant, // Описание

    // Охлаждение
    cooling: {
      performance: 5270, // Производительность, Вт
      powerConsumption: 1755, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5270, // Производительность, Вт
      powerConsumption: 1505, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 30, // Макс. длина трассы, м
    maxHeightDifference: 20, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 27, // Уровень шума, дБ (A)
      weight: 10.6, // Вес, кг
      size: "957x213x302", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 56.5, // Уровень шума, дБ (A)
      weight: 32.6, // Вес, кг
      size: "805x330x554", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu DS-24i/DSN-24i ------
  {
    article: "dahatsu-ds-24i",
    title: "Dahatsu DS-24i/DSN-24i",
    type: "split-system",
    company: "Dahatsu",
    series: "Brilliant",
    link: "dahatsu-ds-24i.html",
    imgSrc: imagesDahatsuBrilliant,
    price: pricesDahatsuBrilliant.dahatsu_ds_24i, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 29, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuBrilliant,
    description: descriptionDahatsuBrilliant, // Описание

    // Охлаждение
    cooling: {
      performance: 7030, // Производительность, Вт
      powerConsumption: 2510, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7330, // Производительность, Вт
      powerConsumption: 2440, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 50, // Макс. длина трассы, м
    maxHeightDifference: 25, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 29, // Уровень шума, дБ (A)
      weight: 12.3, // Вес, кг
      size: "1040x220x327", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57.5, // Уровень шума, дБ (A)
      weight: 44.4, // Вес, кг
      size: "890x342673", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },
]

// ----- Dahatsu CLASSIC DC INVERTER (GW-H) -----

const functionsDahatsuClassicInverter = ["Компрессор GMCC Toshiba", "Класс энергоэффективности A",
  "Автоматическое качание заслонок", "Режим комфортного сна", "Зеленый фильтр высокой плотности",
  "Компактный дизайн", "Режим Turbo производительности", "Самоочистка внутреннего блока",
  "Golden fin", "Автоматический перезапуск", "Запоминание положения жалюзи", "Защитная крышка патрубов"];

const imagesDahatsuClassicInverter =
  ["./assets/img/catalog/dahatsu/GW-H/01.png",
    "./assets/img/catalog/dahatsu/GW-H/02.png",
    "./assets/img/catalog/dahatsu/GW-H/03.png",
    "./assets/img/catalog/dahatsu/GW-H/04.png"
  ];

const pricesDahatsuClassicInverter = {
  "dahatsu_gw_07h": 34600,
  "dahatsu_gw_09h": 37300,
  "dahatsu_gw_12h": 43900,
  "dahatsu_gw_18h": 69800,
  "dahatsu_gw_24h": 83600,

}

const descriptionDahatsuClassicInverter = "Сплит-системы Dahatsu серии Classic DC Inverter - надежная классическая инверторная модель, выполненная из высококачественных материалов. Благодаря компактному дизайну, режиму комфортного сна и низкому уровню шума данную модель можно установить в любом помещении, даже в детской комнате. Модель снабжена всеми стандартными функциями сплит-системы: теплообменник Golden fin, скрытый дисплей, два направления воздушного потока, режим ECO. Дизайн в классическом стиле станет украшением любого интерьера, а новейшие технологии позволят наслаждаться идеальным микроклиматом в любое время года."

const DAHATSU_GW_H = [

  // ------ Dahatsu GW-07H ------
  {
    article: "dahatsu-gw-07h",
    title: "Dahatsu GW-07H",
    type: "split-system",
    company: "Dahatsu",
    series: "Classic DC Inverter",
    link: "dahatsu-gw-07h.html",
    imgSrc: imagesDahatsuClassicInverter,
    price: pricesDahatsuClassicInverter.dahatsu_gw_07h, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.1, // Мощность охлаждения, кВт
    noise: 20, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuClassicInverter,
    description: descriptionDahatsuClassicInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2100, // Производительность, Вт
      powerConsumption: 655, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 610, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 9, // Макс. длина трассы, м
    maxHeightDifference: 5, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 20, // Уровень шума, дБ (A)
      weight: 6.5, // Вес, кг
      size: "700x198x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 21.5, // Вес, кг
      size: "660x240x530", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu GW-09H ------
  {
    article: "dahatsu-gw-09h",
    title: "Dahatsu GW-09H",
    type: "split-system",
    company: "Dahatsu",
    series: "Classic DC Inverter",
    link: "dahatsu-gw-09h.html",
    imgSrc: imagesDahatsuClassicInverter,
    price: pricesDahatsuClassicInverter.dahatsu_gw_09h, // Цена
    area: 28, // На площадь, м²
    coolingCapacity: 2.5, // Мощность охлаждения, кВт
    noise: 20, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuClassicInverter,
    description: descriptionDahatsuClassicInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2550, // Производительность, Вт
      powerConsumption: 795, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2650, // Производительность, Вт
      powerConsumption: 730, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 10, // Макс. длина трассы, м
    maxHeightDifference: 5, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 20, // Уровень шума, дБ (A)
      weight: 6.7, // Вес, кг
      size: "700x198x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 21.5, // Вес, кг
      size: "630x240x530", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu GW-12H ------
  {
    article: "dahatsu-gw-12h",
    title: "Dahatsu GW-12H",
    type: "split-system",
    company: "Dahatsu",
    series: "Classic DC Inverter",
    link: "dahatsu-gw-12h.html",
    imgSrc: imagesDahatsuClassicInverter,
    price: pricesDahatsuClassicInverter.dahatsu_gw_12h, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.4, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuClassicInverter,
    description: descriptionDahatsuClassicInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 3450, // Производительность, Вт
      powerConsumption: 1075, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3600, // Производительность, Вт
      powerConsumption: 1000, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 10, // Макс. длина трассы, м
    maxHeightDifference: 5, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7, // Вес, кг
      size: "805x199x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 23, // Вес, кг
      size: "660x240x530", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu GW-18H ------
  {
    article: "dahatsu-gw-18h",
    title: "Dahatsu GW-18H",
    type: "split-system",
    company: "Dahatsu",
    series: "Classic DC Inverter",
    link: "dahatsu-gw-18h.html",
    imgSrc: imagesDahatsuClassicInverter,
    price: pricesDahatsuClassicInverter.dahatsu_gw_18h, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 4.9, // Мощность охлаждения, кВт
    noise: 28, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuClassicInverter,
    description: descriptionDahatsuClassicInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 4950, // Производительность, Вт
      powerConsumption: 1545, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5000, // Производительность, Вт
      powerConsumption: 1390, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 5, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 28, // Уровень шума, дБ (A)
      weight: 10.5, // Вес, кг
      size: "900x199x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "780x270x560", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Dahatsu GW-24H ------
  {
    article: "dahatsu-gw-24h",
    title: "Dahatsu GW-24H",
    type: "split-system",
    company: "Dahatsu",
    series: "Classic DC Inverter",
    link: "dahatsu-gw-24h.html",
    imgSrc: imagesDahatsuClassicInverter,
    price: pricesDahatsuClassicInverter.dahatsu_gw_24h, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 6.8, // Мощность охлаждения, кВт
    noise: 30, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDahatsuClassicInverter,
    description: descriptionDahatsuClassicInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 6850, // Производительность, Вт
      powerConsumption: 2125, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7000, // Производительность, Вт
      powerConsumption: 1940, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 8, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 30, // Уровень шума, дБ (A)
      weight: 13, // Вес, кг
      size: "1025x238x320", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "860x320x720", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

]

// ----- DAICHI AIR (AIR-AVQ1/AIR-FV1) -----

const functionsDaichiAir = ["Автоматический режим", "Функция «Комфортный сон»", "Многоступенчатое регулирование скорости вентилятора", "Угольный фильтр CARBON",
                          "Противоплесневая обработка", "Самодиагностика", "Бесшумный режим работы", "Коррозионная стойкость", "Фильтр с ионами серебра",
                            "Wi-Fi, онлайн управление (опция)", "Информационный LED дисплей"];

const imagesDaichiAir =
  ["./assets/img/catalog/daichi/air/01.jpg",
    "./assets/img/catalog/daichi/air/02.jpg",
    "./assets/img/catalog/daichi/air/03.jpg",
    "./assets/img/catalog/daichi/air/04.jpg"
  ];

const descriptionDaichiAir = "Ультрафиолетовая лампа. Встроенная УФ-лампа предотвращает развитие бактерий на узлах внутреннего блока и обеззараживает воздух. Биполярный ионизатор. Циклически генерирует ионы, создавая ионизированную среду в помещении, благотворно влияющую на самочувствие. Эффект бриза - запатентованная технология для достижения эффекта бриза благодаря оригинальной перфорированной форме вертикальных жалюзи. Протяженный воздушный поток по принципу эффекта Коанда. Широкие горизонтальные жалюзи создают воздушный поток, направленный вдоль потолка в режиме охлаждения или вдоль пола в режиме нагрева. Wi-Fi, удаленное онлайн-управление через «облако Даичи» (опция)."

const pricesDaichiAir = {
  "daichi_AIR20AVQ1": 22500,
  "daichi_AIR25AVQ1": 23900,
}

const DAICHI_AIR = [

  // ------ Daichi AIR20AVQ1/AIR20FV1 ------
  {
    article: "daichi_air20avq1",
    title: "Daichi AIR AIR20AVQ1/AIR20FV1",
    type: "split-system",
    company: "Daichi",
    series: "Air",
    link: "daichi-air20avq1.html",
    imgSrc: imagesDaichiAir,
    price: pricesDaichiAir.daichi_AIR20AVQ1, // Цена
    area: 20 , // На площадь, м²
    coolingCapacity: 2.2, // Мощность охлаждения, кВт
    noise: 25, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDaichiAir,
    description: descriptionDaichiAir, // Описание

    // Охлаждение
    cooling: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 690, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 610, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 5, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 25, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "790x192x275", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 48, // Уровень шума, дБ (A)
      weight: 20, // Вес, кг
      size: "712x276x459", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Daichi AIR20AVQ1/AIR20FV1 ------
  {
    article: "daichi_air25avq1",
    title: "Daichi AIR AIR25AVQ1/AIR25FV1",
    type: "split-system",
    company: "Daichi",
    series: "Air",
    link: "daichi-air25avq1.html",
    imgSrc: imagesDaichiAir,
    price: pricesDaichiAir.daichi_AIR25AVQ1, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 25, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDaichiAir,
    description: descriptionDaichiAir, // Описание

    // Охлаждение
    cooling: {
      performance: 2640, // Производительность, Вт
      powerConsumption: 820, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2780, // Производительность, Вт
      powerConsumption: 770, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 5, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 25, // Уровень шума, дБ (A)
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

// ----- Daichi ICE (ICE-AVQ1-1/ICE-FV1-1) -----

const functionsDaichiIce = ["Турбо", "Фильтр предварительной очистки", "Самодиагностика", "Режим осушения воздуха", "Коррозионная стойкость", "Wi-Fi, онлайн управление (опция)",
                            "Функция «Комфортный сон»", "Бесшумный режим работы", "Фотокаталитический фильтр", "Противоплесневая обработка", "Информационный LED дисплей"];

const imagesDaichiIce =
  ["./assets/img/catalog/daichi/ice/01.jpg",
    "./assets/img/catalog/daichi/ice/02.jpg",
    "./assets/img/catalog/daichi/ice/03.jpg",
  ];

const descriptionDaichiIce = "Информационный LED-дисплей. Функция «комфортный сон» позволяет создать приятные условия для отдыха, также снижается потребление электроэнергии. Подготовка к теплому старту. В режиме обогрева вентилятор внутреннего блока включается только после прогрева теплообменника внутреннего блока. Режим «Standby» корректирует поддерживаемую в помещении температуру на 2 °С, снижая тем самым энергопотребление. Функция отключения/включения дисплея внутреннего блока режим локального комфорта IFeel - желаемые параметры микроклимата устанавливаются в месте расположения пульта дистанционного управления. Автоматический перезапуск, Wi-Fi, удаленное онлайн-управление через «облако Даичи» (опция)."

const pricesDaichiIce = {
  "daichi_ice20avq1_1": 29500,
  "daichi_ice25avq1_1": 29500,
  "daichi_ice35avq1_1": 36900,
  "daichi_ice50avq1": 63500,
  "daichi_ice60avq1": 79500,
}

const DAICHI_ICE = [

  // ------ Daichi ICE ICE20AVQ1-1/ICE20FV1-1 ------
  {
    article: "daichi_ice20avq1_1",
    title: "Daichi ICE ICE20AVQ1-1/ICE20FV1-1",
    type: "split-system",
    company: "Daichi",
    series: "Ace",
    link: "daichi-ice20avq1-1.html",
    imgSrc: imagesDaichiIce,
    price: pricesDaichiIce.daichi_ice20avq1_1, // Цена
    area: 20 , // На площадь, м²
    coolingCapacity: 2.3, // Мощность охлаждения, кВт
    noise: 26, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDaichiIce,
    description: descriptionDaichiIce, // Описание

    // Охлаждение
    cooling: {
      performance: 2300, // Производительность, Вт
      powerConsumption: 700, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2250, // Производительность, Вт
      powerConsumption: 700, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 26, // Уровень шума, дБ (A)
      weight: 7.5, // Вес, кг
      size: "698x185x250", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 48, // Уровень шума, дБ (A)
      weight: 22.3, // Вес, кг
      size: "710x293x450", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Daichi ICE ICE25AVQ1-1/ICE25FV1-1 ------
  {
    article: "daichi_ice25avq1_1",
    title: "Daichi ICE ICE25AVQ1-1/ICE25FV1-1",
    type: "split-system",
    company: "Daichi",
    series: "Ace",
    link: "daichi-ice25avq1-1.html",
    imgSrc: imagesDaichiIce,
    price: pricesDaichiIce.daichi_ice25avq1_1, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.5, // Мощность охлаждения, кВт
    noise: 26, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDaichiIce,
    description: descriptionDaichiIce, // Описание

    // Охлаждение
    cooling: {
      performance: 2550, // Производительность, Вт
      powerConsumption: 790, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2650, // Производительность, Вт
      powerConsumption: 730, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 26, // Уровень шума, дБ (A)
      weight: 7.7, // Вес, кг
      size: "698x185x250", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 24.7, // Вес, кг
      size: "710x293x450", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Daichi ICE ICE35AVQ1-1/ICE35FV1-1 ------
  {
    article: "daichi_ice35avq1_1",
    title: "Daichi ICE ICE35AVQ1-1/ICE35FV1-1",
    type: "split-system",
    company: "Daichi",
    series: "Ace",
    link: "daichi-ice35avq1-1.html",
    imgSrc: imagesDaichiIce,
    price: pricesDaichiIce.daichi_ice35avq1_1, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.4, // Мощность охлаждения, кВт
    noise: 28, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDaichiIce,
    description: descriptionDaichiIce, // Описание

    // Охлаждение
    cooling: {
      performance: 3400, // Производительность, Вт
      powerConsumption: 1010, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3250, // Производительность, Вт
      powerConsumption: 940, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 28, // Уровень шума, дБ (A)
      weight: 8.5, // Вес, кг
      size: "773x185x250", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "732x330x555", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Daichi ICE ICE50AVQ1/ICE50FV1 ------
  {
    article: "daichi_ice50avq1",
    title: "Daichi ICE ICE50AVQ1/ICE50FV1",
    type: "split-system",
    company: "Daichi",
    series: "Ace",
    link: "daichi-ice50avq1.html",
    imgSrc: imagesDaichiIce,
    price: pricesDaichiIce.daichi_ice50avq1, // Цена
    area: 50 , // На площадь, м²
    coolingCapacity: 4.8, // Мощность охлаждения, кВт
    noise: 31, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDaichiIce,
    description: descriptionDaichiIce, // Описание

    // Охлаждение
    cooling: {
      performance: 4800, // Производительность, Вт
      powerConsumption: 1500, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5300, // Производительность, Вт
      powerConsumption: 1470, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 31, // Уровень шума, дБ (A)
      weight: 11, // Вес, кг
      size: "849x215x289", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 39, // Вес, кг
      size: "848x320x540", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Daichi ICE ICE60AVQ1/ICE60FV1 ------
  {
    article: "daichi_ice60avq1",
    title: "Daichi ICE ICE60AVQ1/ICE60FV1",
    type: "split-system",
    company: "Daichi",
    series: "Ace",
    link: "daichi-ice60avq1.html",
    imgSrc: imagesDaichiIce,
    price: pricesDaichiIce.daichi_ice60avq1, // Цена
    area: 60 , // На площадь, м²
    coolingCapacity: 6.2, // Мощность охлаждения, кВт
    noise: 37, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDaichiIce,
    description: descriptionDaichiIce, // Описание

    // Охлаждение
    cooling: {
      performance: 6200, // Производительность, Вт
      powerConsumption: 1920, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 6700, // Производительность, Вт
      powerConsumption: 1860, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 37, // Уровень шума, дБ (A)
      weight: 13.5, // Вес, кг
      size: "970x225x300", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 50, // Вес, кг
      size: "913x378x680", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },




];

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

// -----Denko Кассетный (DCS-A) -----

const functionsDenkoDCS_A = ["ON/OFF", "Инфракрасный пульт (в комплекте)", "Режим энергосбережения",
  "Самоочистка внутреннего блока", "Объемное воздухо-распределение", "Турборежим", "Тихий режим", "Горячий запуск",
"24-часовой таймер", "Режим I FEEL", "Автоматический режим выбора", "Автоматическая разморозка", "Работа в режиме охлаждения до -15°C",
"Работа в режиме обогрева до -15°C", "Дренажный насос", "Самодиагностика", "Низкотемпературный комплект",
  "Панель с круговым распределением воздушного потока", "HEALTH"];

const imagesDenkoDCS_A =
  ["./assets/img/catalog/Denko/dcs-a/01.png",
    "./assets/img/catalog/Denko/dcs-a/02.png",
    "./assets/img/catalog/Denko/dcs-a/03.png",
    "./assets/img/catalog/Denko/dcs-a/04.png"
  ];

const descriptionDenkoDCS_A = "Кассетная сплит-система DCS-A позволит быстро и равномерно создать и поддерживать комфортную температуру в помещении. Распределение воздуха на 360 градусов. Панель с круговым распределением воздушного потока обеспечивает эффективное охлаждение и обогрев. \n Данный вид кондиционеров интегрируется в подвесные потолки и осуществляет подачу воздуха в 4 потока. Новейшая модель DCS-A обладает привлекательным видом, компактными габаритами, множеством настроек и функций. \n Режим TURBO активирует максимальную производительность и позволяет быстрее достичь необходимой температуры."


const DENKO_DCS_A = [

  // ------ Denko DCS-12A ------
  {
    article: "denko-dcs-12a",
    title: "Denko DCS-12A",
    type: "cassette",
    company: "Denko",
    series: "DCS-A",
    factory: "GREE",
    link: "denko-dcs-12a.html",
    imgSrc: imagesDenkoDCS_A,
    price: 56000, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDCS_A,
    description: descriptionDenkoDCS_A, // Описание

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
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
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
      compressorModel: "GREE",
    }
  },

  // ------ Denko DCS-18A ------
  {
    article: "denko-dcs-18a",
    title: "Denko DCS-18A",
    type: "cassette",
    company: "Denko",
    series: "DCS-A",
    factory: "GREE",
    link: "denko-dcs-18a.html",
    imgSrc: imagesDenkoDCS_A,
    price: 63200, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.3, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDCS_A,
    description: descriptionDenkoDCS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 5280, // Производительность, Вт
      powerConsumption: 1700, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5600, // Производительность, Вт
      powerConsumption: 1550, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
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
      noise: 55, // Уровень шума, дБ (A)
      weight: 36, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GREE",
    }
  },

  // ------ Denko DCS-24A ------
  {
    article: "denko-dcs-24a",
    title: "Denko DCS-24A",
    type: "cassette",
    company: "Denko",
    series: "DCS-A",
    factory: "GREE",
    link: "denko-dcs-24a.html",
    imgSrc: imagesDenkoDCS_A,
    price: 78000, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDCS_A,
    description: descriptionDenkoDCS_A, // Описание

    // Охлаждение
    cooling: {
      performance: 7030, // Производительность, Вт
      powerConsumption: 2150, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7200, // Производительность, Вт
      powerConsumption: 1820, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,88мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 27, // Вес, кг
      size: "835x835x250", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 48, // Вес, кг
      size: "825x310x655", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GREE",
    }
  },
]

// ----- Мульти-сплит-система (внутрненние блоки) Denko  (DNMULT) -----

const functionsDenkoDNMULT_In = ["Компрессор GMCC Toshiba", "Golden fin", "Класс энергоэффективности A", "Уровень шума от 22dB", "Фреон R410A"];

const imagesDenkoDNMULT_In =
  ["./assets/img/catalog/denko/DNMULT/indoor/01.jpg",
    "./assets/img/catalog/denko/DNMULT/indoor/02.jpg"
  ];

const pricesDenkoDNMULT_In = {
  "denko_dnmult_07": 13500,
  "denko_dnmult_09": 14500,
  "denko_dnmult_12": 16200,
  "denko_dnmult_18": 21000,
}

const descriptionDenkoDNMULT_In = "Серия DNMULT DC INVERTER бренда Denko 2023 года - это комплекс современных высокотехнологичных мульти-сплит систем, оснащенных наилучшими комплектующими и представленных в современных высококачественных корпусах.\n" +
  "Возможность одновременного подключения к одному внешнему блоку сразу нескольких внутренних блоков позволяет с минимальными затратами и нарушением внешнего вида зданий задать комфортный климат сразу в нескольких помещениях. Данная серия является одной из лучших вариантов обладающих высокой энергоэффективностью, низким уровнем шума, компактными размерами. Серия DHMULT может стать идеальным вариантом для установки, например, в загородном доме или многокомнатной квартире."

const DENKO_DNMULT_IN = [

  // ------ Denko DNMULT-07 ------
  {
    article: "denko-dnmult-07",
    title: "Внутренний блок Denko DNMULT-07",
    type: "multi-split-systems",
    company: "Denko",
    series: "DNMULT DC INVERTER (Indoor)",
    link: "denko-dnmult-07.html",
    imgSrc: imagesDenkoDNMULT_In,
    price: pricesDenkoDNMULT_In.denko_dnmult_07, // Цена
    area: 30, // На площадь, м²
    coolingCapacity: 2.05, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_In,
    description: descriptionDenkoDNMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 2050, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2150, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "750x285x200", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },

  // ------ Dahatsu DHMULT-09 ------
  {
    article: "denko-dnmult-09",
    title: "Внутренний блок Denko DNMULT-09",
    type: "multi-split-systems",
    company: "Denko",
    series: "DNMULT DC INVERTER (Indoor)",
    link: "denko-dnmult-09.html",
    imgSrc: imagesDenkoDNMULT_In,
    price: pricesDenkoDNMULT_In.denko_dnmult_09, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 2.58, // Мощность охлаждения, кВт
    noise: 22, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_In,
    description: descriptionDenkoDNMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 2580, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 22, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "750x285x200", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },

  // ------ Ddenko DNMULT-12 ------
  {
    article: "denko-dnmult-12",
    title: "Внутренний блок Denko DNMULT-12",
    type: "multi-split-systems",
    company: "Denko",
    series: "DHMULT DC INVERTER (Indoor)",
    link: "denko-dnmult-12.html",
    imgSrc: imagesDenkoDNMULT_In,
    price: pricesDenkoDNMULT_In.denko_dnmult_12, // Цена
    area: 40, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 33, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_In,
    description: descriptionDenkoDNMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 3500, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3500, // Производительность, Вт
      powerConsumption: 40, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 33, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "750x285x200", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },

  // ------ Dahatsu DHMULT-18 ------
  {
    article: "denko-dnmult-18",
    title: "Внутренний блок Denko DNMULT-18",
    type: "multi-split-systems",
    company: "Denko",
    series: "DNMULT DC INVERTER (Indoor)",
    link: "denko-dnmult-18.html",
    imgSrc: imagesDenkoDNMULT_In,
    price: pricesDenkoDNMULT_In.denko_dnmult_18, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.27, // Мощность охлаждения, кВт
    noise: 35, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_In,
    description: descriptionDenkoDNMULT_In, // Описание

    // Охлаждение
    cooling: {
      performance: 5270, // Производительность, Вт
      powerConsumption: 63, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5370, // Производительность, Вт
      powerConsumption: 63, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    //maxTrackLength: 40, // Макс. длина трассы, м
    //maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 35, // Уровень шума, дБ (A)
      weight: 11, // Вес, кг
      size: "900x310x225", // Размеры
    },
    // Внешний блок
    // outdoorUnit: {
    //   noise: 54, // Уровень шума, дБ (A)
    //   weight: 34, // Вес, кг
    //   size: "800x315x545", // Размеры
    //   freon: "R410A", // Фреон
    //   compressorModel: "GMCC",
    // }
  },


];

// ----- Мульти-сплит-система (наружные блоки) Denko  (DNMULT) -----

const functionsDenkoDNMULT_Out = ["Компрессор GMCC Toshiba", "Golden fin", "Класс энергоэффективности A", "Уровень шума от 22dB", "Фреон R410A"];

const imagesDenkoDNMULT_Out =
  ["./assets/img/catalog/denko/DNMULT/outdoor/01.jpg",
  ];

const pricesDenkoDNMULT_Out = {
  "denko_dnmult_out_18_2": 68500,
  "denko_dnmult_out_24_3": 80000,
  "denko_dnmult_out_30_3": 102000,
  "denko_dnmult_out_42_4": 145200,
  //"denko_dnmult_out_42_5": 212000,

}

const descriptionDenkoDNMULT_Out = "Серия DHMULT DC INVERTER бренда DAHATSU 2023 года - это комплекс современных высокотехнологичных мульти-сплит систем, оснащенных наилучшими комплектующими и представленных в современных высококачественных корпусах.\n" +
  "Возможность одновременного подключения к одному внешнему блоку сразу нескольких внутренних блоков позволяет с минимальными затратами и нарушением внешнего вида зданий задать комфортный климат сразу в нескольких помещениях. Данная серия является одной из лучших вариантов обладающих высокой энергоэффективностью, низким уровнем шума, компактными размерами. Серия DHMULT может стать идеальным вариантом для установки, например, в загородном доме или многокомнатной квартире."

const DENKO_DNMULT_OUT = [

  // ------ Denko DNMULT-18/2 ------
  {
    article: "denko-dnmult-18-2",
    title: "Наружный блок Denko DNMULT-18/2",
    type: "multi-split-systems",
    company: "Denko",
    series: "DNMULT DC INVERTER (Outdoor)",
    link: "denko-dnmult-18-2.html",
    imgSrc: imagesDenkoDNMULT_Out,
    price: pricesDenkoDNMULT_Out.denko_dnmult_out_18_2, // Цена
    area: 50, // На площадь, м²
    coolingCapacity: 4.1, // Мощность охлаждения, кВт
    noise: 54, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_Out,
    description: descriptionDenkoDNMULT_Out, // Описание

    // Охлаждение
    cooling: {
      performance: 4100, // Производительность, Вт
      powerConsumption: 1240, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 4800, // Производительность, Вт
      powerConsumption: 1150, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 40, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "2x6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "2x9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    // indoorUnit: {
    //   noise: "-", // Уровень шума, дБ (A)
    //   weight: "-", // Вес, кг
    //   size: "-", // Размеры
    // },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 34, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DNMULT-24/3 ------
  {
    article: "denko-dnmult-24-3",
    title: "Наружный блок Denko DNMULT-24/3",
    type: "multi-split-systems",
    company: "Denko",
    series: "DNMULT DC INVERTER (Outdoor)",
    link: "denko-dnmult-24-3.html",
    imgSrc: imagesDenkoDNMULT_Out,
    price: pricesDenkoDNMULT_Out.denko_dnmult_out_24_3, // Цена
    area: 70, // На площадь, м²
    coolingCapacity: 6.2, // Мощность охлаждения, кВт
    noise: 56, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_Out,
    description: descriptionDenkoDNMULT_Out, // Описание

    // Охлаждение
    cooling: {
      performance: 6200, // Производительность, Вт
      powerConsumption: 1920, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 6600, // Производительность, Вт
      powerConsumption: 1780, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 60, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "3x6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "3x9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    // indoorUnit: {
    //   noise: "-", // Уровень шума, дБ (A)
    //   weight: "-", // Вес, кг
    //   size: "-", // Размеры
    // },
    // Внешний блок
    outdoorUnit: {
      noise: 56, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "834x328x655", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DNMULT-30/3 ------
  {
    article: "denko-dnmult-30-3",
    title: "Наружный блок Denko DNMULT-30/3",
    type: "multi-split-systems",
    company: "Denko",
    series: "DNMULT DC INVERTER (Outdoor)",
    link: "denko-dnmult-30-3.html",
    imgSrc: imagesDenkoDNMULT_Out,
    price: pricesDenkoDNMULT_Out.denko_dnmult_out_30_3, // Цена
    area: 80, // На площадь, м²
    coolingCapacity: 7.9, // Мощность охлаждения, кВт
    noise: 58, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_Out,
    description: descriptionDenkoDNMULT_Out, // Описание

    // Охлаждение
    cooling: {
      performance: 7900, // Производительность, Вт
      powerConsumption: 2460, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 8200, // Производительность, Вт
      powerConsumption: 2270, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 60, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "3x6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "3x9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    // indoorUnit: {
    //   noise: "-", // Уровень шума, дБ (A)
    //   weight: "-", // Вес, кг
    //   size: "-", // Размеры
    // },
    // Внешний блок
    outdoorUnit: {
      noise: 58, // Уровень шума, дБ (A)
      weight: 46, // Вес, кг
      size: "834x328x655", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DNMULT-42/4 ------
  {
    article: "denko-dnmult-42-4",
    title: "Наружный блок Denko DNMULT-42/4",
    type: "multi-split-systems",
    company: "Denko",
    series: "DNMULT DC INVERTER (Outdoor)",
    link: "denko-dnmult-42-4.html",
    imgSrc: imagesDenkoDNMULT_Out,
    price: pricesDenkoDNMULT_Out.denko_dnmult_out_42_4, // Цена
    area: 110, // На площадь, м²
    coolingCapacity: 10.5, // Мощность охлаждения, кВт
    noise: 61, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoDNMULT_Out,
    description: descriptionDenkoDNMULT_Out, // Описание

    // Охлаждение
    cooling: {
      performance: 10500, // Производительность, Вт
      powerConsumption: 3600, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 11000, // Производительность, Вт
      powerConsumption: 3400, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 80, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "4x6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "4x9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    // indoorUnit: {
    //   noise: "-", // Уровень шума, дБ (A)
    //   weight: "-", // Вес, кг
    //   size: "-", // Размеры
    // },
    // Внешний блок
    outdoorUnit: {
      noise: 61, // Уровень шума, дБ (A)
      weight: 76.5, // Вес, кг
      size: "985x395x808", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DNMULT-42/5 ------
  // {
  //   article: "denko-dnmult-42-5",
  //   title: "Наружный блок Denko DNMULT-42/5",
  //   type: "multi-split-systems",
  //   company: "Denko",
  //   series: "DNMULT DC INVERTER (Outdoor)",
  //   link: "denko-dnmult-42-5.html",
  //   imgSrc: imagesDenkoDNMULT_Out,
  //   price: pricesDenkoDNMULT_Out.denko_dnmult_out_42_5, // Цена
  //   area: 130, // На площадь, м²
  //   coolingCapacity: 12.1, // Мощность охлаждения, кВт
  //   noise: 61, // Уровень шума, дБ (A)
  //   inverter: true, // Наличие инвертора (да/нет)
  //
  //   functions: functionsDenkoDNMULT_Out,
  //   description: descriptionDenkoDNMULT_Out, // Описание
  //
  //   // Охлаждение
  //   cooling: {
  //     performance: 12100, // Производительность, Вт
  //     powerConsumption: 4450, // Потребл. мощность, Вт
  //   },
  //   // Обогрев
  //   heating: {
  //     performance: 13000, // Производительность, Вт
  //     powerConsumption: 3800, // Потребл. мощность, Вт
  //   },
  //   powerSupply: powerSupply, // Электропитание
  //   maxTrackLength: 80, // Макс. длина трассы, м
  //   maxHeightDifference: 10, // Макс. перепад высот, м
  //   liquidPipeDiameter: "5x6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
  //   gasPipeDiameter: "5x9,52мм(3/8)", // Диаметр газовой трубы, мм
  //   // Внутренний блок
  //   // indoorUnit: {
  //   //   noise: "-", // Уровень шума, дБ (A)
  //   //   weight: "-", // Вес, кг
  //   //   size: "-", // Размеры
  //   // },
  //   // Внешний блок
  //   outdoorUnit: {
  //     noise: 61, // Уровень шума, дБ (A)
  //     weight: 78.5, // Вес, кг
  //     size: "985x395x808", // Размеры
  //     freon: "R410A", // Фреон
  //     compressorModel: "GMCC",
  //   }
  // },

];

// -----Denko Напольно-потолочный тип (DNP-A) -----

const functionsDenko_DNP_A = ["ON/OFF", "Инфракрасный пульт (в комплекте)", "Режим энергосбережения",
  "Самоочистка ICLEAN", "Объемное воздухо-распределение", "Турборежим", "Спящий режим", "Движение жалюзи по горизонтали и вертикали",
  "24-часовой таймер", "Режим I FEEL", "Автоматический режим выбора", "Автоматическая разморозка", "Работа в режиме охлаждения до -15°C",
  "Работа в режиме обогрева до -15°C", "Самодиагностика", "Низкотемпературный комплект",
  "HEALTH", "Анти-F. Предотвращение образования неприятного запаха"];


const imagesDenko_DNP_A =
  ["./assets/img/catalog/Denko/dnp-a/01.jpg",
    "./assets/img/catalog/Denko/dnp-a/02.jpg",
    "./assets/img/catalog/Denko/dnp-a/03.jpg",
    "./assets/img/catalog/Denko/dnp-a/04.jpg"
  ];


const pricesDenko_DNP_A = {
  "denko_dnp_18a": 70000,
  "denko_dnp_24a": 89200,
  "denko_dnp_36a": 120800,
  "denko_dnp_48a": 146800,
  "denko_dnp_60a": 156500,
}

const descriptionDenko_DNP_A = "Напольно-потолочная сплит-система Denko DNP-A идеально подходит для создания комфортного микроклимата в ресторанах, гостиницах, офисных помещениях. Прибор имеет элегантный дизайн, на передней панели расположены индикаторы режимов работы и цифровой дисплей с указанием температуры. Управление производится с помощью беспроводного пульта."


const DENKO_DNP_A = [

  // Denko DNP-18A
  {
    article: "denko-dnp-18a",
    title: "Denko DNP-18A",
    type: "floor-ceiling",
    company: "Denko",
    series: "DNP-A",
    factory: "AUX",
    link: "denko-dnp-18a.html",
    imgSrc: imagesDenko_DNP_A,
    price: pricesDenko_DNP_A.denko_dnp_18a, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.2, // Мощность охлаждения, кВт
    noise: 43, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenko_DNP_A,
    description: descriptionDenko_DNP_A, // Описание

    // Охлаждение
    cooling: {
      performance: 5280, // Производительность, Вт
      powerConsumption: 1700, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5600, // Производительность, Вт
      powerConsumption: 1550, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 43, // Уровень шума, дБ (A)
      weight: 28, // Вес, кг
      size: "1000x690x235", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 36, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Denko DH-NP-24A
  {
    article: "denko-dnp-24a",
    title: "Denko DNP-24A",
    type: "floor-ceiling",
    company: "Denko",
    series: "DNP-A",
    factory: "AUX",
    link: "denko-dnp-24a.html",
    imgSrc: imagesDenko_DNP_A,
    price: pricesDenko_DNP_A.denko_dnp_24a, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 49, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenko_DNP_A,
    description: descriptionDenko_DNP_A, // Описание

    // Охлаждение
    cooling: {
      performance: 7030, // Производительность, Вт
      powerConsumption: 2150, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7600, // Производительность, Вт
      powerConsumption: 1920, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyOnePhase, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "15м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,88мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 49, // Уровень шума, дБ (A)
      weight: 36, // Вес, кг
      size: "1280x690x235", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 48, // Вес, кг
      size: "825x310x655", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Denko DNP-36A
  {
    article: "denko-dnp-36a",
    title: "Denko DNP-36A",
    type: "floor-ceiling",
    company: "Denko",
    series: "DNP-A",
    factory: "AUX",
    link: "denko-dnp-36a.html",
    imgSrc: imagesDenko_DNP_A,
    price: pricesDenko_DNP_A.denko_dnp_36a, // Цена
    area: 110, // На площадь, м²
    coolingCapacity: 10.5, // Мощность охлаждения, кВт
    noise: 50, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenko_DNP_A,
    description: descriptionDenko_DNP_A, // Описание

    // Охлаждение
    cooling: {
      performance: 10550, // Производительность, Вт
      powerConsumption: 3500, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 11700, // Производительность, Вт
      powerConsumption: 3240, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: "30м", // Макс. длина трассы, м
    maxHeightDifference: "20м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,88мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 36, // Вес, кг
      size: "1280x690x235", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 58, // Уровень шума, дБ (A)
      weight: 64, // Вес, кг
      size: "970x395x805", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Denko DNP-48A
  {
    article: "denko-dnp-48a",
    title: "Denko DNP-48A",
    type: "floor-ceiling",
    company: "Denko",
    series: "DNP-A",
    factory: "AUX",
    link: "denko-dnp-48a.html",
    imgSrc: imagesDenko_DNP_A,
    price: pricesDenko_DNP_A.denko_dnp_48a, // Цена
    area: 150, // На площадь, м²
    coolingCapacity: 14, // Мощность охлаждения, кВт
    noise: 51, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenko_DNP_A,
    description: descriptionDenko_DNP_A, // Описание

    // Охлаждение
    cooling: {
      performance: 14070, // Производительность, Вт
      powerConsumption: 4680, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 15240, // Производительность, Вт
      powerConsumption: 4420, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: "50м", // Макс. длина трассы, м
    maxHeightDifference: "30м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 51, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "1600x690x235", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 58, // Уровень шума, дБ (A)
      weight: 95, // Вес, кг
      size: "940x370x1325", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // Denko DNP-60A
  {
    article: "denko-dnp-60a",
    title: "Denko DNP-60A",
    type: "floor-ceiling",
    company: "Denko",
    series: "DNP-A",
    factory: "AUX",
    link: "denko-dnp-60a.html",
    imgSrc: imagesDenko_DNP_A,
    price: pricesDenko_DNP_A.denko_dnp_60a, // Цена
    area: 180, // На площадь, м²
    coolingCapacity: 16.1, // Мощность охлаждения, кВт
    noise: 51, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDahatsu_DH_NP_A,
    description: descriptionDenko_DNP_A, // Описание

    // Охлаждение
    cooling: {
      performance: 16120, // Производительность, Вт
      powerConsumption: 5550, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 17600, // Производительность, Вт
      powerConsumption: 5010, // Потребл. мощность, Вт
    },
    powerSupply: powerSupplyThreePhase, // Электропитание
    maxTrackLength: "50м", // Макс. длина трассы, м
    maxHeightDifference: "30м", // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "19,05мм(3/4)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 51, // Уровень шума, дБ (A)
      weight: 44, // Вес, кг
      size: "1600x690x235", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 60, // Уровень шума, дБ (A)
      weight: 99, // Вес, кг
      size: "940x370x1325", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

]

// -----Denko Legend DC INVERTER (DU-I) -----

const functionsDenkoLegendDCInverter = ["Компрессор GMCC Toshiba", "Режим Turbo производительности", "Автоматическое качание заслонок", "Режим комфортного сна", "Режим 'Антиплесень'",
  "HEALTH - режим здоровье", "Компактный дизайн", "Самоочистка внутреннего блока", "Режим I Feel",
  "Golden fin", "Автоматический перезапуск", "Запоминание положения жалюзи", "Таймер"];

const imagesDenkoLegendDCInverter =
  ["./assets/img/catalog/Denko/du-i/01.jpg",
    "./assets/img/catalog/Denko/du-i/02.jpg",
    "./assets/img/catalog/Denko/du-i/03.jpg",
    "./assets/img/catalog/Denko/du-i/04.jpg"
  ];

const pricesDenkoLegendDCInverter = {
  "denko_du_07i": 30900,
  "denko_du_09i": 33700,
  "denko_du_12i": 36900,
  "denko_du_18i": 61600,
  "denko_du_24i": 75600,
}

const descriptionDenkoLegendDCInverter = "Сплит-системы Denko серии Legend DC INVERTER - лаконичная модель с дизайном в классическом стиле. Данная модель станет дополнением любого интерьера, а новейшие технологии и инверторные технологии позволят наслаждаться идеальным микроклиматом в любое время года. Легендарная модель, соответствующая всем стандартам современного качества, включает в себя такие функции как: тихий и турбо режим, авторестарт, самоочистка, режим i feel, режим здоровья, защищающий от вредных бактерий и вирусов, антиплесень, горизонтальный автоповорот жалюзи, удобный 24-часовой таймер, самодиагностика при включении и работе, независимое осушение, саморазморозка и прочие функции."


const DENKO_DU_I = [

  // ------ Denko DU-07i ------
  {
    article: "denko-du-07i",
    title: "Denko DU-07i",
    type: "split-system",
    company: "Denko",
    series: "Legend DC Inverter",
    factory: "AUX",
    link: "denko-du-07i.html",
    imgSrc: imagesDenkoLegendDCInverter,
    price: pricesDenkoLegendDCInverter.denko_du_07i, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.2, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegendDCInverter,
    description: descriptionDenkoLegendDCInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 685, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2350, // Производительность, Вт
      powerConsumption: 650, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7.5, // Вес, кг
      size: "690x199x283", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 21, // Вес, кг
      size: "727x278x455", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DU-09i ------
  {
    article: "denko-du-09i",
    title: "Denko DU-09i",
    type: "split-system",
    company: "Denko",
    series: "Legend DC Inverter",
    factory: "AUX",
    link: "denko-du-09i.html",
    imgSrc: imagesDenkoLegendDCInverter,
    price: pricesDenkoLegendDCInverter.denko_du_09i, // Цена
    area: 28, // На площадь, м²
    coolingCapacity: 2.65, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegendDCInverter,
    description: descriptionDenkoLegendDCInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2650, // Производительность, Вт
      powerConsumption: 825, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 747, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7.7, // Вес, кг
      size: "690x199x283", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 22, // Вес, кг
      size: "727x278x455", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DU-12i ------
  {
    article: "denko-du-12i",
    title: "Denko DU-12i",
    type: "split-system",
    company: "Denko",
    series: "Legend DC Inverter",
    factory: "AUX",
    link: "denko-du-12i.html",
    imgSrc: imagesDenkoLegendDCInverter,
    price: pricesDenkoLegendDCInverter.denko_du_12i, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegendDCInverter,
    description: descriptionDenkoLegendDCInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 3500, // Производительность, Вт
      powerConsumption: 1090, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3650, // Производительность, Вт
      powerConsumption: 1010, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8, // Вес, кг
      size: "750x200x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 22.5, // Вес, кг
      size: "727x278x455", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DU-18i ------
  {
    article: "denko-du-18i",
    title: "Denko DU-18i",
    type: "split-system",
    company: "Denko",
    series: "Legend DC Inverter",
    factory: "AUX",
    link: "denko-du-18i.html",
    imgSrc: imagesDenkoLegendDCInverter,
    price: pricesDenkoLegendDCInverter.denko_du_18i, // Цена
    area: 50, // На площадь, м²
    coolingCapacity: 5.1, // Мощность охлаждения, кВт
    noise: 29, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegendDCInverter,
    description: descriptionDenkoLegendDCInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 5100, // Производительность, Вт
      powerConsumption: 1590, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5300, // Производительность, Вт
      powerConsumption: 1470, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 29, // Уровень шума, дБ (A)
      weight: 11, // Вес, кг
      size: "900x225x310", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 25, // Вес, кг
      size: "709x281x537", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DU-24i ------
  {
    article: "denko-du-24i",
    title: "Denko DU-24i",
    type: "split-system",
    company: "Denko",
    series: "Legend DC Inverter",
    factory: "AUX",
    link: "denko-du-24i.html",
    imgSrc: imagesDenkoLegendDCInverter,
    price: pricesDenkoLegendDCInverter.denko_du_24i, // Цена
    area: 70, // На площадь, м²
    coolingCapacity: 6.7, // Мощность охлаждения, кВт
    noise: 31, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegendDCInverter,
    description: descriptionDenkoLegendDCInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 6700, // Производительность, Вт
      powerConsumption: 2090, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 6800, // Производительность, Вт
      powerConsumption: 1880, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 31, // Уровень шума, дБ (A)
      weight: 11, // Вес, кг
      size: "900x225x310", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 38.5, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

]

// -----Denko Legend (DU) -----

const functionsDenkoLegend = ["Компрессор GMCC Toshiba", "Режим Turbo производительности", "Автоматическое качание заслонок", "Режим комфортного сна", "Режим 'Антиплесень'",
  "HEALTH - режим здоровье", "Компактный дизайн", "Самоочистка внутреннего блока", "Режим I Feel",
  "Golden fin", "Автоматический перезапуск", "Запоминание положения жалюзи", "Таймер"];

const imagesDenkoLegend =
  ["./assets/img/catalog/Denko/du/01.webp",
    "./assets/img/catalog/Denko/du/02.webp",
    "./assets/img/catalog/Denko/du/03.webp",
    "./assets/img/catalog/Denko/du/04.webp"
  ];

const pricesDenkoLegend = {
  "denko_du_07": 21900,
  "denko_du_09": 24000,
  "denko_du_12": 31800,
  "denko_du_18": 52500,
  "denko_du_24": 67800,
  "denko_du_36": 109000,
}

const descriptionDenkoLegend = "Сплит-системы Denko серии Legend это легендарное возвращение модели, которая отвечает всем стандартам современного качества. Лаконичный, обтекаемый дизайн впишется в помещение любого типа и интерьера. Новейшие технологии позволят вам комфортно использовать сплит-систему, быстро охлаждать и обогревать помещение, а интеллектуальное управление и энергосбережение создадут идеальную среду жизненного пространства. В кондиционере присутствуют такие функции, как: авто-рестарт, самоочистка, режим i feel, тихий и турбо режим, антиплесень, горизонтальный автоповорот жалюзи, программируемый таймер, самодиагностика при включении и работе, независимое осушение, саморазморозка и другие функции."


const DENKO_DU = [

  // ------ Denko DU-07 ------
  {
    article: "denko-du-07",
    title: "Denko DU-07",
    type: "split-system",
    company: "Denko",
    series: "Legend",
    factory: "AUX",
    link: "denko-du-07.html",
    imgSrc: imagesDenkoLegend,
    price: pricesDenkoLegend.denko_du_07, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.1, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegend,
    description: descriptionDenkoLegend, // Описание

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
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
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
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DU-09 ------
  {
    article: "denko-du-09",
    title: "Denko DU-09",
    type: "split-system",
    company: "Denko",
    series: "Legend",
    factory: "AUX",
    link: "denko-du-09.html",
    imgSrc: imagesDenkoLegend,
    price: pricesDenkoLegend.denko_du_09, // Цена
    area: 28, // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegend,
    description: descriptionDenkoLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 2650, // Производительность, Вт
      powerConsumption: 825, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 748, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8.5, // Вес, кг
      size: "690x199x283", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 21, // Вес, кг
      size: "665x280x420", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DU-12 ------
  {
    article: "denko-du-12",
    title: "Denko DU-12",
    type: "split-system",
    company: "Denko",
    series: "Legend",
    factory: "AUX",
    link: "denko-du-12.html",
    imgSrc: imagesDenkoLegend,
    price: pricesDenkoLegend.denko_du_12, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 27, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegend,
    description: descriptionDenkoLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 3550, // Производительность, Вт
      powerConsumption: 1106, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3650, // Производительность, Вт
      powerConsumption: 1011, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 27, // Уровень шума, дБ (A)
      weight: 9, // Вес, кг
      size: "750x200x285", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 25, // Вес, кг
      size: "710x240x500", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DU-18 ------
  {
    article: "denko-du-18",
    title: "Denko DU-18",
    type: "split-system",
    company: "Denko",
    series: "Legend",
    factory: "AUX",
    link: "denko-du-18.html",
    imgSrc: imagesDenkoLegend,
    price: pricesDenkoLegend.denko_du_18, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.3, // Мощность охлаждения, кВт
    noise: 29, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegend,
    description: descriptionDenkoLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 5300, // Производительность, Вт
      powerConsumption: 1656, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5450, // Производительность, Вт
      powerConsumption: 1509, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 29, // Уровень шума, дБ (A)
      weight: 11, // Вес, кг
      size: "900x225x310", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 37, // Вес, кг
      size: "800x315x545", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko DU-24 ------
  {
    article: "denko-du-24",
    title: "Denko DU-24",
    type: "split-system",
    company: "Denko",
    series: "Legend",
    factory: "AUX",
    link: "denko-du-24.html",
    imgSrc: imagesDenkoLegend,
    price: pricesDenkoLegend.denko_du_24, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 31, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegend,
    description: descriptionDenkoLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 7000, // Производительность, Вт
      powerConsumption: 2325, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7100, // Производительность, Вт
      powerConsumption: 2211, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 31, // Уровень шума, дБ (A)
      weight: 12, // Вес, кг
      size: "900x225x310", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 46, // Вес, кг
      size: "825x310x655", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "HIGHLY",
    }
  },

  // ------ Denko DU-36 ------
  {
    article: "denko-du-36",
    title: "Denko DU-36",
    type: "split-system",
    company: "Denko",
    series: "Legend",
    factory: "AUX",
    link: "denko-du-36.html",
    imgSrc: imagesDenkoLegend,
    price: pricesDenkoLegend.denko_du_36, // Цена
    area: 100, // На площадь, м²
    coolingCapacity: 9.7, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoLegend,
    description: descriptionDenkoLegend, // Описание

    // Охлаждение
    cooling: {
      performance: 9700, // Производительность, Вт
      powerConsumption: 3222, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 9900, // Производительность, Вт
      powerConsumption: 3084, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 22, // Вес, кг
      size: "1082X233X330", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 62, // Уровень шума, дБ (A)
      weight: 70, // Вес, кг
      size: "900x350x700", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "HIGHLY",
    }
  },

]

// ----- Denko Sakura DC INVERTER (GW-I) -----

const functionsDenkoSakuraInverter = ["Компрессор GMCC Toshiba", "Класс энергоэффективности A",
  "Автоматическое качание заслонок", "Режим комфортного сна", "Зеленый фильтр высокой плотности",
  "Компактный дизайн", "Режим Turbo производительности", "Самоочистка внутреннего блока",
  "Golden fin", "Автоматический перезапуск", "Запоминание положения жалюзи", "Защитная крышка патрубов"];

const imagesDenkoSakuraInverter =
  ["./assets/img/catalog/Denko/gw-i/01.jpg",
    "./assets/img/catalog/Denko/gw-i/02.jpg",
    "./assets/img/catalog/Denko/gw-i/03.jpg",
    "./assets/img/catalog/Denko/gw-i/04.jpg"
  ];

const pricesDenkoSakuraInverter = {
  "denko_gw_07i": 39200,
  "denko_gw_09i": 41500,
  "denko_gw_12i": 44700,
}

const descriptionDenkoSakuraInverter = "Сплит-системы Denko серии Sakura DC Inverter - инверторный кондиционер сочетающий в себе не только стандартные функции современных инверторов, но и такие сверхтехнологичные технологии как: антиковидная ультрафиолетовая лампа UVC + 58 С, 2 анитвирусных фильтра, самоочистка и защита от плесени, а также встроенная WI-FI функция ( WI-FI комплект + USB). Ультрафиолетовая лампа размещается непосредственно за декоративной панелью во внутреннем блоке кондиционера. Такое обеззараживание ультрафиолетом особенно эффективно защитит ваш дом от всего спектра вредоносных бактерий и различных типов коронавирусов, в то числе и COVID 19."

const DENKO_GW_I = [

  // ------ Denko GW-07i ------
  {
    article: "denko-gw-07h",
    title: "Denko GW-07i",
    type: "split-system",
    company: "Denko",
    series: "Sakura DC Inverter",
    link: "denko-gw-07i.html",
    imgSrc: imagesDenkoSakuraInverter,
    price: pricesDenkoSakuraInverter.denko_gw_07i, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.1, // Мощность охлаждения, кВт
    noise: 20, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoSakuraInverter,
    description: descriptionDenkoSakuraInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2100, // Производительность, Вт
      powerConsumption: 655, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2200, // Производительность, Вт
      powerConsumption: 610, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 9, // Макс. длина трассы, м
    maxHeightDifference: 5, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 20, // Уровень шума, дБ (A)
      weight: 6.5, // Вес, кг
      size: "720x201x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 21.5, // Вес, кг
      size: "660x530x240", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko GW-09i ------
  {
    article: "denko-gw-09i",
    title: "Denko GW-09i",
    type: "split-system",
    company: "Denko",
    series: "Sakura DC Inverter",
    link: "denko-gw-09i.html",
    imgSrc: imagesDenkoSakuraInverter,
    price: pricesDenkoSakuraInverter.denko_gw_09i, // Цена
    area: 28, // На площадь, м²
    coolingCapacity: 2.5, // Мощность охлаждения, кВт
    noise: 20, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoSakuraInverter,
    description: descriptionDenkoSakuraInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 2550, // Производительность, Вт
      powerConsumption: 795, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2650, // Производительность, Вт
      powerConsumption: 730, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 10, // Макс. длина трассы, м
    maxHeightDifference: 5, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 20, // Уровень шума, дБ (A)
      weight: 6.7, // Вес, кг
      size: "720x201x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 21.5, // Вес, кг
      size: "630x530x240", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko GW-12i ------
  {
    article: "denko-gw-12i",
    title: "Denko GW-12i",
    type: "split-system",
    company: "Denko",
    series: "Sakura DC Inverter",
    link: "denko-gw-12i.html",
    imgSrc: imagesDenkoSakuraInverter,
    price: pricesDenkoSakuraInverter.denko_gw_12i, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.4, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsDenkoSakuraInverter,
    description: descriptionDenkoSakuraInverter, // Описание

    // Охлаждение
    cooling: {
      performance: 3450, // Производительность, Вт
      powerConsumption: 1075, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3600, // Производительность, Вт
      powerConsumption: 1000, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 10, // Макс. длина трассы, м
    maxHeightDifference: 5, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7, // Вес, кг
      size: "790x199x270", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 23, // Вес, кг
      size: "660x530x240", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

]

// -----Denko Dragon (KR) -----

const functionsDenkoDragon = ["Компрессор GMCC Toshiba", "Класс энергоэффективности A", "Автоматическое качание заслонок", "Режим комфортного сна", "Зеленый фильтр высокой плотности", "Компактный дизайн",
  "Режим Turbo производительности", "Самоочистка внутреннего блока", "Golden fin", "Автоматический перезапуск",
  "Запоминание положения жалюзи", "Защитная крышка патрубков"];

const imagesDenkoDragon =
  ["./assets/img/catalog/Denko/kr/01.jpg",
    "./assets/img/catalog/Denko/kr/02.jpg",
    "./assets/img/catalog/Denko/kr/03.jpg",
    "./assets/img/catalog/Denko/kr/04.jpg",
  ];

const pricesDenkoDragon = {
  "denko_kr_09": 23000,
  "denko_kr_12": 31900,
  "denko_kr_18": 49800,
  "denko_kr_24": 61600,
  "denko_kr_36": 92300,
}

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
    link: "denko-kr-09.html",
    imgSrc: imagesDenkoDragon,
    price: pricesDenkoDragon.denko_kr_09, // Цена
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
      compressorModel: "GMCC",
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
    link: "denko-kr-12.html",
    imgSrc: imagesDenkoDragon,
    price: pricesDenkoDragon.denko_kr_12, // Цена
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
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 7, // Макс. перепад высот, м
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
      compressorModel: "GMCC",
    }
  },

  // ------ Denko KR-18 ------
  {
    article: "denko-kr-18",
    title: "Denko KR-18",
    type: "split-system",
    company: "Denko",
    series: "Dragon",
    factory: "Midea",
    link: "denko-kr-18.html",
    imgSrc: imagesDenkoDragon,
    price: pricesDenkoDragon.denko_kr_18, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.2, // Мощность охлаждения, кВт
    noise: 27, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDragon,
    description: descriptionDenkoDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 5275, // Производительность, Вт
      powerConsumption: 1638, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5334, // Производительность, Вт
      powerConsumption: 1476, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 7, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 27, // Уровень шума, дБ (A)
      weight: 10, // Вес, кг
      size: "908x220x295", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 55, // Уровень шума, дБ (A)
      weight: 32, // Вес, кг
      size: "780x270x560", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko KR-24 ------
  {
    article: "denko-kr-24",
    title: "Denko KR-24",
    type: "split-system",
    company: "Denko",
    series: "Dragon",
    factory: "Midea",
    link: "denko-kr-24.html",
    imgSrc: imagesDenkoDragon,
    price: pricesDenkoDragon.denko_kr_24, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 29, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDragon,
    description: descriptionDenkoDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 7030, // Производительность, Вт
      powerConsumption: 2190, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7090, // Производительность, Вт
      powerConsumption: 1959, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 8, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 29, // Уровень шума, дБ (A)
      weight: 10, // Вес, кг
      size: "908x220x295", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 56, // Уровень шума, дБ (A)
      weight: 36.5, // Вес, кг
      size: "820x310x635", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Denko KR-36 ------
  {
    article: "denko-kr-36",
    title: "Denko KR-36",
    type: "split-system",
    company: "Denko",
    series: "Dragon",
    factory: "Midea",
    link: "denko-kr-36.html",
    imgSrc: imagesDenkoDragon,
    price: pricesDenkoDragon.denko_kr_36, // Цена
    area: 100, // На площадь, м²
    coolingCapacity: 9.9, // Мощность охлаждения, кВт
    noise: 31, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsDenkoDragon,
    description: descriptionDenkoDragon, // Описание

    // Охлаждение
    cooling: {
      performance: 9960, // Производительность, Вт
      powerConsumption: 3103, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 10050, // Производительность, Вт
      powerConsumption: 2776, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 8, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,88мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 31, // Уровень шума, дБ (A)
      weight: 16.5, // Вес, кг
      size: "1100x245x325", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 59, // Уровень шума, дБ (A)
      weight: 52.5, // Вес, кг
      size: "860x320x720", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

]

// ----- Eurohoff On/Off (EV) -----

const functions_Eurohoff_EV = ["Завод-изготовитель Haier", "Бесшумная работа", "Режим Turbo производительности", "Легко моющаяся панель",
                              "HEALTH - режим здоровье", "Режим 'Комфортный сон'", "Самодиагностика"];

const images_Eurohoff_EV =
  ["./assets/img/catalog/eurohoff/ev/01.jpg",
    "./assets/img/catalog/eurohoff/ev/02.jpg",
    "./assets/img/catalog/eurohoff/ev/03.jpg",
    "./assets/img/catalog/eurohoff/ev/04.jpg"
  ];

const description_Eurohoff_EV = "Настенные сплит-системы Eurohoff серии EV - это компактные модели для бытового использования, которые обладают привлекательным дизайном и оснащены эргономичным пультом управления. Устройства отличаются высоким уровнем надежности и безопасности, контроль за которыми осуществляет система самодиагностики. \n Eurohoff серии EV - это качественная климатическая техника, оснащенная современными комплектующими. В линейку входит 5 моделей с производительностью охлаждения от 2 до 6,8 кВт. Приборы оборудованы компрессором типа ON/OFF и наделены необходимым количеством функций для стабильной работы."

const prices_Eurohoff_EV = {
  "eurohoff_ev_07": 23000,
  "eurohoff_ev_09": 26400,
  "eurohoff_ev_12": 37400,
  "eurohoff_ev_18": 58900,
  "eurohoff_ev_24": 73000,
}

const EUROHOFF_EV = [

  // ------ Eurohoff EV-07 ------
  {
    article: "eurohoff-ev-07",
    title: "Eurohoff EV-07",
    type: "split-system",
    company: "Eurohoff",
    series: "ON/OFF",
    link: "eurohoff-ev-07.html",
    imgSrc: images_Eurohoff_EV,
    price: prices_Eurohoff_EV.eurohoff_ev_07, // Цена
    area: 22 , // На площадь, м²
    coolingCapacity: 2, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EV,
    description: description_Eurohoff_EV, // Описание

    // Охлаждение
    cooling: {
      performance: 2050, // Производительность, Вт
      powerConsumption: 639, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2100, // Производительность, Вт
      powerConsumption: 582, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 7, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7.3, // Вес, кг
      size: "708x190x263", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 20, // Вес, кг
      size: "696x256x432", // Размеры
      freon: "R32", // Фреон
      compressorModel: "Qingan",
    }
  },

  // ------ Eurohoff EV-09 ------
  {
    article: "eurohoff-ev-09",
    title: "Eurohoff EV-09",
    type: "split-system",
    company: "Eurohoff",
    series: "ON/OFF",
    link: "eurohoff-ev-09.html",
    imgSrc: images_Eurohoff_EV,
    price: prices_Eurohoff_EV.eurohoff_ev_09, // Цена
    area: 28 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EV,
    description: description_Eurohoff_EV, // Описание

    // Охлаждение
    cooling: {
      performance: 2600, // Производительность, Вт
      powerConsumption: 810, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 750, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 7, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7.3, // Вес, кг
      size: "708x190x263", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 20.8, // Вес, кг
      size: "696x256x432", // Размеры
      freon: "R32", // Фреон
      compressorModel: "Qingan",
    }
  },

  // ------ Eurohoff EV-12 ------
  {
    article: "eurohoff-ev-12",
    title: "Eurohoff EV-12",
    type: "split-system",
    company: "Eurohoff",
    series: "ON/OFF",
    link: "eurohoff-ev-12.html",
    imgSrc: images_Eurohoff_EV,
    price: prices_Eurohoff_EV.eurohoff_ev_12, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.4, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EV,
    description: description_Eurohoff_EV, // Описание

    // Охлаждение
    cooling: {
      performance: 3400, // Производительность, Вт
      powerConsumption: 1060, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3900, // Производительность, Вт
      powerConsumption: 1055, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 7, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 8.7, // Вес, кг
      size: "865x200x290", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 23.9, // Вес, кг
      size: "700x245x544", // Размеры
      freon: "R32", // Фреон
      compressorModel: "Qingan",
    }
  },

  // ------ Eurohoff EV-18 ------
  {
    article: "eurohoff-ev-18",
    title: "Eurohoff EV-18",
    type: "split-system",
    company: "Eurohoff",
    series: "ON/OFF",
    link: "eurohoff-ev-18.html",
    imgSrc: images_Eurohoff_EV,
    price: prices_Eurohoff_EV.eurohoff_ev_18, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 4.8, // Мощность охлаждения, кВт
    noise: 28, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EV,
    description: description_Eurohoff_EV, // Описание

    // Охлаждение
    cooling: {
      performance: 4800, // Производительность, Вт
      powerConsumption: 1460, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 4800, // Производительность, Вт
      powerConsumption: 1400, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 7, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 28, // Уровень шума, дБ (A)
      weight: 8.7, // Вес, кг
      size: "865x200x290", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 32.7, // Вес, кг
      size: "800x275x533", // Размеры
      freon: "R32", // Фреон
      compressorModel: "Qingan",
    }
  },

  // ------ Eurohoff EV-18 ------
  {
    article: "eurohoff-ev-24",
    title: "Eurohoff EV-24",
    type: "split-system",
    company: "Eurohoff",
    series: "ON/OFF",
    link: "eurohoff-ev-24.html",
    imgSrc: images_Eurohoff_EV,
    price: prices_Eurohoff_EV.eurohoff_ev_24, // Цена
    area: 75, // На площадь, м²
    coolingCapacity: 6.5, // Мощность охлаждения, кВт
    noise: 30, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EV,
    description: description_Eurohoff_EV, // Описание

    // Охлаждение
    cooling: {
      performance: 6500, // Производительность, Вт
      powerConsumption: 2160, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 6800, // Производительность, Вт
      powerConsumption: 2180, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 7, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 30, // Уровень шума, дБ (A)
      weight: 11.6, // Вес, кг
      size: "1008x225x318", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 47.3, // Вес, кг
      size: "890x353x697", // Размеры
      freon: "R32", // Фреон
      compressorModel: "Qingan",
    }
  },

];

// ----- Eurohoff DC INVERTER (EVR-I) -----

const functions_Eurohoff_EVR_I = ["Завод-изготовитель Haier", "Бесшумная работа", "Режим Turbo производительности", "Легко моющаяся панель",
                              "HEALTH - режим здоровье", "Антибактериальный фильтр", "Режим 'Комфортный сон'", "Самодиагностика"];

const images_Eurohoff_EVR_I =
  ["./assets/img/catalog/eurohoff/evr-i/01.jpg",
    "./assets/img/catalog/eurohoff/evr-i/02.jpg",
    "./assets/img/catalog/eurohoff/evr-i/03.jpg",
    "./assets/img/catalog/eurohoff/evr-i/04.jpg"
  ];

const description_Eurohoff_EVR_I = "Сплит-системы EUROHOFF DC INVERTER- сочетающие в себе современные технологии: инвертор, высочайший класс энергоэффективности, озонобезопасный хладагент R32. Система управления изменяет производительность кондиционера, отслеживая даже самые незначительные изменения температуры воздуха в помещении. На основании данных температурных датчиков вычисляется оптимальная производительность для комфортного поддержания температуры воздуха. Отсутствие температурных колебаний создает благоприятные условия в помещении, а работа компрессора с частичной нагрузкой позволяет значительно экономить потребление электроэнергии."

const prices_Eurohoff_EVR_I = {
  "eurohoff_evr_07i": 35600,
  "eurohoff_evr_09i": 38000,
  "eurohoff_evr_12i": 44300,
  "eurohoff_evr_18i": 70400,
  "eurohoff_evr_24i": 84200,
}

const EUROHOFF_EVR_I= [

  // ------ Eurohoff EVR-07i ------
  {
    article: "eurohoff-evr-07i",
    title: "Eurohoff EVR-07i",
    type: "split-system",
    company: "Eurohoff",
    series: "DC INVERTER",
    link: "eurohoff-evr-07i.html",
    imgSrc: images_Eurohoff_EVR_I,
    price: prices_Eurohoff_EVR_I.eurohoff_evr_07i, // Цена
    area: 22 , // На площадь, м²
    coolingCapacity: 2.05, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EVR_I,
    description: description_Eurohoff_EVR_I, // Описание

    // Охлаждение
    cooling: {
      performance: 2050, // Производительность, Вт
      powerConsumption: 639, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2100, // Производительность, Вт
      powerConsumption: 582, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7.3, // Вес, кг
      size: "708x190x263", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 20, // Вес, кг
      size: "696x256x432", // Размеры
      freon: "R32", // Фреон
      compressorModel: "Qingan",
    }
  },

  // ------ Eurohoff EVR-09i ------
  {
    article: "eurohoff-evr-09i",
    title: "Eurohoff EVR-09i",
    type: "split-system",
    company: "Eurohoff",
    series: "DC INVERTER",
    link: "eurohoff-evr-09i.html",
    imgSrc: images_Eurohoff_EVR_I,
    price: prices_Eurohoff_EVR_I.eurohoff_evr_09i, // Цена
    area: 28 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EVR_I,
    description: description_Eurohoff_EVR_I, // Описание

    // Охлаждение
    cooling: {
      performance: 2600, // Производительность, Вт
      powerConsumption: 810, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 750, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 7.3, // Вес, кг
      size: "708x190x263", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 53, // Уровень шума, дБ (A)
      weight: 20.8, // Вес, кг
      size: "696x256x432", // Размеры
      freon: "R32", // Фреон
      compressorModel: "Qingan",
    }
  },

  // ------ Eurohoff EVR-12i ------
  {
    article: "eurohoff-evr-12i",
    title: "Eurohoff EVR-12i",
    type: "split-system",
    company: "Eurohoff",
    series: "DC INVERTER",
    link: "eurohoff-evr-12i.html",
    imgSrc: images_Eurohoff_EVR_I,
    price: prices_Eurohoff_EVR_I.eurohoff_evr_12i, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.4, // Мощность охлаждения, кВт
    noise: 24, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EVR_I,
    description: description_Eurohoff_EVR_I, // Описание

    // Охлаждение
    cooling: {
      performance: 3400, // Производительность, Вт
      powerConsumption: 1060, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3900, // Производительность, Вт
      powerConsumption: 1055, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 15, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 24, // Уровень шума, дБ (A)
      weight: 9.1, // Вес, кг
      size: "865x200x290", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 52, // Уровень шума, дБ (A)
      weight: 23.9, // Вес, кг
      size: "700x245x544", // Размеры
      freon: "R32", // Фреон
      compressorModel: "Qingan",
    }
  },

  // ------ Eurohoff EVR-18i ------
  {
    article: "eurohoff-evr-18i",
    title: "Eurohoff EVR-18i",
    type: "split-system",
    company: "Eurohoff",
    series: "DC INVERTER",
    link: "eurohoff-evr-18i.html",
    imgSrc: images_Eurohoff_EVR_I,
    price: prices_Eurohoff_EVR_I.eurohoff_evr_18i, // Цена
    area: 50 , // На площадь, м²
    coolingCapacity: 4.8, // Мощность охлаждения, кВт
    noise: 28, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EVR_I,
    description: description_Eurohoff_EVR_I, // Описание

    // Охлаждение
    cooling: {
      performance: 4800, // Производительность, Вт
      powerConsumption: 1495, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 4800, // Производительность, Вт
      powerConsumption: 1330, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 20, // Макс. длина трассы, м
    maxHeightDifference: 10, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 28, // Уровень шума, дБ (A)
      weight: 8.7, // Вес, кг
      size: "865x200x290", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 29.2, // Вес, кг
      size: "800x275x553", // Размеры
      freon: "R32", // Фреон
      compressorModel: "Qingan",
    }
  },

  // ------ Eurohoff EVR-24i ------
  {
    article: "eurohoff-evr-24i",
    title: "Eurohoff EVR-24i",
    type: "split-system",
    company: "Eurohoff",
    series: "DC INVERTER",
    link: "eurohoff-evr-24i.html",
    imgSrc: images_Eurohoff_EVR_I,
    price: prices_Eurohoff_EVR_I.eurohoff_evr_24i, // Цена
    area: 70 , // На площадь, м²
    coolingCapacity: 6.5, // Мощность охлаждения, кВт
    noise: 33, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functions_Eurohoff_EVR_I,
    description: description_Eurohoff_EVR_I, // Описание

    // Охлаждение
    cooling: {
      performance: 6500, // Производительность, Вт
      powerConsumption: 2025, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 6800, // Производительность, Вт
      powerConsumption: 1880, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 15, // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 33, // Уровень шума, дБ (A)
      weight: 11.6, // Вес, кг
      size: "1008x225x318", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 57, // Уровень шума, дБ (A)
      weight: 32.7, // Вес, кг
      size: "800x275x553", // Размеры
      freon: "R32", // Фреон
      compressorModel: "Qingan",
    }
  },


];

// ----- Kentatsu Ichi (KSGI-HFAN1/KSRI-HFAN1) -----

const functionsKentatsuIchi = ["Антикоррозийное покрытие Golden Fin", "Управление скоростью вентилятора", "Функция «Комфортный сон»", "Защита от коррозии", "Осушение воздуха",
                                "Быстрый выход на режим", "Обнаружение утечки хладагента", "Wi-Fi Control (опция)", "Цифровой дисплей", "Функция «Не беспокоить»"];

const srcToFolderKentatsuIchi = "./assets/img/catalog/kentatsu/ichi/";

const imagesKentatsuIchi = [
  `${srcToFolderKentatsuIchi}01.jpg`,
  `${srcToFolderKentatsuIchi}02.jpg`,
  `${srcToFolderKentatsuIchi}03.jpg`,
  `${srcToFolderKentatsuIchi}04.jpg`,
]

const descriptionKentatsuIchi = "Kentatsu из года в год успешно сохраняет завоеванные позиции одного из лидеров климатического рынка. Новая серия Kentatsu Ichi, платформа была разработана специально для сезона 2021. Серия настенных сплит-систем ICHI On/Off разработана компанией Kentatsu для работы в жилых, офисных, торговых помещениях небольших магазинов. Современный стиль оформления внутреннего блока, насыщенность многообразием режимов и функций. Улучшена система контроля и защиты. В модельном ряду 5 типоразмеров мощностью от 2,34 до 7,03 кВт — все они обладают классами энергоэффективности «А» в режиме охлаждения и обогрева. Данная сплит-система производит все необходимые действия для реализации задач, установленных пользователем. Для этого используется пульт ДУ с доступными режимами, которые удобны и понятны. А при задействовании ночного режима внутренний блок начинает работать по определенному алгоритму для создания комфорта на ночь."

const pricesKentatsuIchi = {
  "kentatsu_ksgi21hfan1": 27500,
  "kentatsu_ksgi26hfan1": 29900,
  "kentatsu_ksgi35hfan1": 37900,
  "kentatsu_ksgi53hfan1": 57900,
  "kentatsu_ksgi70hfan1": 76500,

}

const KENTATSU_ICHI = [

  // ------ Kentatsu Ichi KSGI21HFAN1/KSRI21HFAN1 ------
  {
    article: "kentatsu-ksgi21hfan1",
    title: "Kentatsu Ichi KSGI21HFAN1/KSRI21HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Ichi",
    link: "kentatsu-ksgi21hfan1.html",
    imgSrc: imagesKentatsuIchi,
    price: pricesKentatsuIchi.kentatsu_ksgi21hfan1, // Цена
    area: 20 , // На площадь, м²
    coolingCapacity: 2.3, // Мощность охлаждения, кВт
    noise: 26.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsKentatsuIchi,
    description: descriptionKentatsuIchi, // Описание

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

  // ------ Kentatsu Ichi KSGI26HFAN1/KSRI26HFAN1 ------
  {
    article: "kentatsu-ksgi26hfan1",
    title: "Kentatsu Ichi KSGI26HFAN1/KSRI26HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Ichi",
    link: "kentatsu-ksgi26hfan1.html",
    imgSrc: imagesKentatsuIchi,
    price: pricesKentatsuIchi.kentatsu_ksgi26hfan1, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 29.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsKentatsuIchi,
    description: descriptionKentatsuIchi, // Описание

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
      noise: 50, // Уровень шума, дБ (A)
      weight: 24.9, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Kentatsu Ichi KSGI35HFAN1/KSRI35HFAN1 ------
  {
    article: "kentatsu-ksgi35hfan1",
    title: "Kentatsu Ichi KSGI35HFAN1/KSRI35HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Ichi",
    link: "kentatsu-ksgi35hfan1.html",
    imgSrc: imagesKentatsuIchi,
    price: pricesKentatsuIchi.kentatsu_ksgi35hfan1, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 28.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsKentatsuIchi,
    description: descriptionKentatsuIchi, // Описание

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
      noise: 52, // Уровень шума, дБ (A)
      weight: 27.1, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Kentatsu Ichi KSGI53HFAN1/KSRI53HFAN1 ------
  {
    article: "kentatsu-ksgi53hfan1",
    title: "Kentatsu Ichi KSGI53HFAN1/KSRI53HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Ichi",
    link: "kentatsu-ksgi53hfan1.html",
    imgSrc: imagesKentatsuIchi,
    price: pricesKentatsuIchi.kentatsu_ksgi53hfan1, // Цена
    area: 50 , // На площадь, м²
    coolingCapacity: 5.3, // Мощность охлаждения, кВт
    noise: 30, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsKentatsuIchi,
    description: descriptionKentatsuIchi, // Описание

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
      noise: 54, // Уровень шума, дБ (A)
      weight: 34.8, // Вес, кг
      size: "765x303x555", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Kentatsu Ichi KSGI70HFAN1/KSRI70HFAN1 ------
  {
    article: "kentatsu-ksgi70hfan1",
    title: "Kentatsu Ichi KSGI70HFAN1/KSRI70HFAN1",
    type: "split-system",
    company: "Kentatsu",
    factory: "Midea ",
    series: "Ichi",
    link: "kentatsu-ksgi70hfan1.html",
    imgSrc: imagesKentatsuIchi,
    price: pricesKentatsuIchi.kentatsu_ksgi70hfan1, // Цена
    area: 70 , // На площадь, м²
    coolingCapacity: 7, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsKentatsuIchi,
    description: descriptionKentatsuIchi, // Описание

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
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 14.7, // Вес, кг
      size: "1082x234x337", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: 56, // Уровень шума, дБ (A)
      weight: 52.9, // Вес, кг
      size: "890x342x673", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

];

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

// ----- LG Mega DUAL Inverter (PSP) -----

const functionsLGDual = ["Мониторинг энергопотребления", "Двойной инверторный компрессор", "Умная диагностика", "Низкий уровень шума",
  "Технология Dual Inverter", "Тихий режим", "Автоочистка", "Фреон R410A", "Покрытие Gold Fin", "Быстрый нагрев",
"Простой и быстрый монтаж", "Быстрое охлаждение Jet Cool", "Энергосбережение до 70%"];

const imagesLGDual =
  ["./assets/img/catalog/lg/psp/01.jpg",
    "./assets/img/catalog/lg/psp/02.webp",
    "./assets/img/catalog/lg/psp/03.webp",
    "./assets/img/catalog/lg/psp/04.webp"
  ];

const descriptionLGDual = "Серия кондиционеров LG Mega Dual Inverter с двойным инвертором. Кондиционер оснащен последними новейшими технологиями прогрессивной работы в плане использования двойного инвертора еще больше снижающего затраты на электроэнергию, а так же функционирование в большем интервале температур охлаждения и обогрева. Применение технологии Jet Cool для максимально быстрого охлаждения помещения. Мощная и эффективная подача подготовленного воздуха в помещение."


const LG_Dual = [

  // ------ LG P07SP2 ------
  {
    article: "lg-p07sp2",
    title: "LG P07SP2",
    type: "split-system",
    company: "LG",
    series: "Mega Dual Inverter",
    link: "lg-p07sp2.html",
    imgSrc: imagesLGDual,
    price: 62700, // Цена
    area: 22, // На площадь, м²
    coolingCapacity: 2.1, // Мощность охлаждения, кВт
    noise: 21, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsLGDual,
    description: descriptionLGDual, // Описание

    // Охлаждение
    cooling: {
      performance: 2140, // Производительность, Вт
      powerConsumption: 600, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2500, // Производительность, Вт
      powerConsumption: 670, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "15м", // Макс. длина трассы, м
    maxHeightDifference: "7м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 21, // Уровень шума, дБ (A)
      weight: 7.8, // Вес, кг
      size: "756x184x265", // Размеры д*ш*в
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 25.7, // Вес, кг
      size: "717x230x495", // Размеры д*ш*в
      freon: "R410A", // Фреон
    }
  },

  // ------ LG P09SP2 ------
  {
    article: "lg-p09sp2",
    title: "LG P09SP2",
    type: "split-system",
    company: "LG",
    series: "Mega Dual Inverter",
    link: "lg-p09sp2.html",
    imgSrc: imagesLGDual,
    price: 69500, // Цена
    area: 28, // На площадь, м²
    coolingCapacity: 2.6, // Мощность охлаждения, кВт
    noise: 21, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsLGDual,
    description: descriptionLGDual, // Описание

    // Охлаждение
    cooling: {
      performance: 2640, // Производительность, Вт
      powerConsumption: 765, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2700, // Производительность, Вт
      powerConsumption: 730, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "15м", // Макс. длина трассы, м
    maxHeightDifference: "7м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 21, // Уровень шума, дБ (A)
      weight: 7.8, // Вес, кг
      size: "754x189x308", // Размеры д*ш*в
    },
    // Внешний блок
    outdoorUnit: {
      noise: 50, // Уровень шума, дБ (A)
      weight: 25.7, // Вес, кг
      size: "717x230x495", // Размеры д*ш*в
      freon: "R410A", // Фреон
    }
  },

  // ------ LG P12SP ------
  {
    article: "lg-p12sp",
    title: "LG P12SP",
    type: "split-system",
    company: "LG",
    series: "Mega Dual Inverter",
    link: "lg-p12sp.html",
    imgSrc: imagesLGDual,
    price: 78400, // Цена
    area: 35, // На площадь, м²
    coolingCapacity: 3.5, // Мощность охлаждения, кВт
    noise: 21, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsLGDual,
    description: descriptionLGDual, // Описание

    // Охлаждение
    cooling: {
      performance: 3520, // Производительность, Вт
      powerConsumption: 1085, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3520, // Производительность, Вт
      powerConsumption: 975, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "15м", // Макс. длина трассы, м
    maxHeightDifference: "7м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "9,52мм(3/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 21, // Уровень шума, дБ (A)
      weight: 8.5, // Вес, кг
      size: "837x189x308", // Размеры д*ш*в
    },
    // Внешний блок
    outdoorUnit: {
      noise: 51, // Уровень шума, дБ (A)
      weight: 26.4, // Вес, кг
      size: "717x230x495", // Размеры д*ш*в
      freon: "R410A", // Фреон
    }
  },

  // ------ LG P18SP ------
  {
    article: "lg-p18sp",
    title: "LG P18SP",
    type: "split-system",
    company: "LG",
    series: "Mega Dual Inverter",
    link: "lg-p18sp.html",
    imgSrc: imagesLGDual,
    price: 110000, // Цена
    area: 55, // На площадь, м²
    coolingCapacity: 5.2, // Мощность охлаждения, кВт
    noise: 32, // Уровень шума, дБ (A)
    inverter: true, // Наличие инвертора (да/нет)

    functions: functionsLGDual,
    description: descriptionLGDual, // Описание

    // Охлаждение
    cooling: {
      performance: 5280, // Производительность, Вт
      powerConsumption: 1640, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5420, // Производительность, Вт
      powerConsumption: 1500, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: "20м", // Макс. длина трассы, м
    maxHeightDifference: "10м", // Макс. перепад высот, м
    liquidPipeDiameter: "6,35мм(1/4)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "12,7мм(1/2)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 32, // Уровень шума, дБ (A)
      weight: 11.4, // Вес, кг
      size: "998x210x345", // Размеры д*ш*в
    },
    // Внешний блок
    outdoorUnit: {
      noise: 54, // Уровень шума, дБ (A)
      weight: 34, // Вес, кг
      size: "770x288x545", // Размеры д*ш*в
      freon: "R410A", // Фреон
    }
  },

]

// ----- Midea Paramount (MSAG1) -----

const functionsMideaParamount = ["Фильтр высокой плотности", "Фотокаталитический фильтр", "Автоматическое качание заслонки", "Нагрев до 8°C", "Турбо охлаждение", "2 варианта включения",
"Самоочистка", "Тихий внутренний блок", "Таймер", "Авторестарт", "Контроль влажности", "Ночной режим", "Обнаружение утечки хладагента", "Локальный комфорт Follow Me", "Самодиагностика",
"i-Remote", "Wi-Fi Control (опция)"];


const srcToFolderMideaParamount = "./assets/img/catalog/midea/MSAG1";

const imagesMideaParamount =
  [ `${srcToFolderMideaParamount}/01.jpg`,
    `${srcToFolderMideaParamount}/02.jpg`,
    `${srcToFolderMideaParamount}/03.jpg`,
    `${srcToFolderMideaParamount}/04.jpg`,
  ];

const pricesMideaParamount = {
  "midea_msag1_07hrn1": 29900,
  "midea_msag1_09hrn1": 32690,
  "midea_msag1_12hrn1": 37190,
  "midea_msag1_18hrn1": 57990,
  "midea_msag1_24hrn1": 74890,
}


const descriptionMideaParamount = "Сплит-система Midea серии Paramount заправляется озонобезопасным хладагентом R410a, который способствует повышению сезонной энергоэффективности техники. Помимо основного фильтра высокой плотности, здесь установлен фотокаталитический фильтр, который активно уничтожает любые органические соединения и устраняет неприятные запахи. Благодаря функции «Любимые настройки» кондиционер можно запустить в удобном для себя режиме работы нажатием одной кнопки. Заслонки двигаются в автоматическом режиме, обеспечивая равномерное распределение воздушных потоков по всему внутреннему пространству. При этом предусмотрено запоминание положения жалюзи. Тёплый запуск, самоочистка и самодиагностика гарантируют длительную и безаварийную работу техники, независимо от условий эксплуатации."


const MIDEA_PARAMOUNT = [

  // ------ Midea MSAG1-07HRN1-I / MSAG1-07HRN1-O ------
  {
    article: "midea-msag1-07hrn1",
    title: "Midea Paramount MSAG1-07HRN1-I / MSAG1-07HRN1-O",
    type: "split-system",
    company: "Midea",
    series: "Paramount",
    link: "midea-msag1-07hrn1.html",
    imgSrc: imagesMideaParamount,
    price: pricesMideaParamount.midea_msag1_07hrn1, // Цена
    area: 22 , // На площадь, м²
    coolingCapacity: 2.34, // Мощность охлаждения, кВт
    noise: 26.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsMideaParamount,
    description: descriptionMideaParamount, // Описание

    // Охлаждение
    cooling: {
      performance: 2340, // Производительность, Вт
      powerConsumption: 710, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2340, // Производительность, Вт
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
      size: "729x292x200", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: "-", // Уровень шума, дБ (A)
      weight: 24.6, // Вес, кг
      size: "720x495x270", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Midea MSAG1-09HRN1-I / MSAG1-09HRN1-O ------
  {
    article: "midea-msag1-09hrn1",
    title: "Midea Paramount MSAG1-09HRN1-I / MSAG1-09HRN1-O",
    type: "split-system",
    company: "Midea",
    series: "Paramount",
    link: "midea-msag1-09hrn1.html",
    imgSrc: imagesMideaParamount,
    price: pricesMideaParamount.midea_msag1_09hrn1, // Цена
    area: 28 , // На площадь, м²
    coolingCapacity: 2.64, // Мощность охлаждения, кВт
    noise: 29.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsMideaParamount,
    description: descriptionMideaParamount, // Описание

    // Охлаждение
    cooling: {
      performance: 2640, // Производительность, Вт
      powerConsumption: 820, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2780, // Производительность, Вт
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
      size: "729x292x200", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: "-", // Уровень шума, дБ (A)
      weight: 24.9, // Вес, кг
      size: "720x495x270", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Midea MSAG1-12HRN1-I / MSAG1-12HRN1-O ------
  {
    article: "midea-msag1-12hrn1",
    title: "Midea Paramount MSAG1-12HRN1-I / MSAG1-12HRN1-O",
    type: "split-system",
    company: "Midea",
    series: "Paramount",
    link: "midea-msag1-12hrn1.html",
    imgSrc: imagesMideaParamount,
    price: pricesMideaParamount.midea_msag1_12hrn1, // Цена
    area: 35 , // На площадь, м²
    coolingCapacity: 3.52, // Мощность охлаждения, кВт
    noise: 28.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsMideaParamount,
    description: descriptionMideaParamount, // Описание

    // Охлаждение
    cooling: {
      performance: 3520, // Производительность, Вт
      powerConsumption: 1100, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 3660, // Производительность, Вт
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
      size: "802x295x200", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: "-", // Уровень шума, дБ (A)
      weight: 27.1, // Вес, кг
      size: "720x495x270", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Midea MSAG1-18HRN1-I / MSAG1-18HRN1-O ------
  {
    article: "midea-msag1-18hrn1",
    title: "Midea Paramount MSAG1-18HRN1-I / MSAG1-18HRN1-O",
    type: "split-system",
    company: "Midea",
    series: "Paramount",
    link: "midea-msag1-18hrn1.html",
    imgSrc: imagesMideaParamount,
    price: pricesMideaParamount.midea_msag1_18hrn1, // Цена
    area: 55 , // На площадь, м²
    coolingCapacity: 5.28, // Мощность охлаждения, кВт
    noise: 30, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsMideaParamount,
    description: descriptionMideaParamount, // Описание

    // Охлаждение
    cooling: {
      performance: 5280, // Производительность, Вт
      powerConsumption: 1640, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 5280, // Производительность, Вт
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
      size: "971x321x228", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: "-", // Уровень шума, дБ (A)
      weight: 34.8, // Вес, кг
      size: "765x555x303", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Midea MSAG1-24HRN1-I / MSAG1-24HRN1-O ------
  {
    article: "midea-msag1-24hrn1",
    title: "Midea Paramount MSAG1-24HRN1-I / MSAG1-24HRN1-O",
    type: "split-system",
    company: "Midea",
    series: "Paramount",
    link: "midea-msag1-24hrn1.html",
    imgSrc: imagesMideaParamount,
    price: pricesMideaParamount.midea_msag1_24hrn1, // Цена
    area: 75 , // На площадь, м²
    coolingCapacity: 7.03, // Мощность охлаждения, кВт
    noise: 39, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsMideaParamount,
    description: descriptionMideaParamount, // Описание

    // Охлаждение
    cooling: {
      performance: 7030, // Производительность, Вт
      powerConsumption: 2190, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 7330, // Производительность, Вт
      powerConsumption: 2030, // Потребл. мощность, Вт
    },
    powerSupply: powerSupply, // Электропитание
    maxTrackLength: 25, // Макс. длина трассы, м
    maxHeightDifference: 8, // Макс. перепад высот, м
    liquidPipeDiameter: "9,52мм(3/8)",  // Диаметр жидкостной трубы, мм
    gasPipeDiameter: "15,9мм(5/8)", // Диаметр газовой трубы, мм
    // Внутренний блок
    indoorUnit: {
      noise: 39, // Уровень шума, дБ (A)
      weight: 14.7, // Вес, кг
      size: "1082x337x234", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: "-", // Уровень шума, дБ (A)
      weight: 52.9, // Вес, кг
      size: "890x673x342", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

];

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

// ----- Midea Unlimited (MSAG2) -----

const functionsMideaUnlimited = ["Wi-Fi-контроллер (опция)", "Цифровой дисплей", "I-Remote", "Самоочистка внутреннего блока", "Турбо охлаждение", "Локальный комфорт Follow Me",
                                  "Управление кондиционером без пульта", "Таймер", "Самодиагностика", "Запоминание положения жалюзи", "Технология Golden Fin", "Обнаружение утечки хладагента"];


const srcToFolderMideaUnlimited = "./assets/img/catalog/midea/unlimited";

const imagesMideaUnlimited =
  [ `${srcToFolderMideaUnlimited}/01.jpg`,
    `${srcToFolderMideaUnlimited}/02.jpg`,
    `${srcToFolderMideaUnlimited}/03.jpg`,
    `${srcToFolderMideaUnlimited}/04.jpg`,
  ];

const pricesMideaUnlimited = {
  "midea_msag2_07hrn1_i": 29900,
  "midea_msag2_09hrn1_i": 32600,
}


const descriptionMideaUnlimited = "Сплит-система Midea серии Paramount заправляется озонобезопасным хладагентом R410a, который способствует повышению сезонной энергоэффективности техники. Помимо основного фильтра высокой плотности, здесь установлен фотокаталитический фильтр, который активно уничтожает любые органические соединения и устраняет неприятные запахи. Благодаря функции «Любимые настройки» кондиционер можно запустить в удобном для себя режиме работы нажатием одной кнопки. Заслонки двигаются в автоматическом режиме, обеспечивая равномерное распределение воздушных потоков по всему внутреннему пространству. При этом предусмотрено запоминание положения жалюзи. Тёплый запуск, самоочистка и самодиагностика гарантируют длительную и безаварийную работу техники, независимо от условий эксплуатации."


const MIDEA_UNLIMITED = [

  // ------ Midea MSAG2-07HRN1-I/MSAG2-07HRN1-O ------
  {
    article: "midea-msag2-07hrn1-i",
    title: "Midea Unlimited MSAG2-07HRN1-I/MSAG2-07HRN1-O",
    type: "split-system",
    company: "Midea",
    series: "Unlimited",
    link: "midea-msag2-07hrn1-i.html",
    imgSrc: imagesMideaUnlimited,
    price: pricesMideaUnlimited.midea_msag2_07hrn1_i, // Цена
    area: 20 , // На площадь, м²
    coolingCapacity: 2.34, // Мощность охлаждения, кВт
    noise: 26.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsMideaUnlimited,
    description: descriptionMideaUnlimited, // Описание

    // Охлаждение
    cooling: {
      performance: 2340, // Производительность, Вт
      powerConsumption: 710, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2340, // Производительность, Вт
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
      size: "726x210x291", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: "", // Уровень шума, дБ (A)
      weight: 24.6, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },

  // ------ Midea MSAG2-09HRN1-I/MSAG2-09HRN1-O ------
  {
    article: "midea-msag2-09hrn1-i",
    title: "Midea Unlimited MSAG2-09HRN1-I/MSAG2-09HRN1-O",
    type: "split-system",
    company: "Midea",
    series: "Unlimited",
    link: "midea-msag2-09hrn1-i.html",
    imgSrc: imagesMideaUnlimited,
    price: pricesMideaUnlimited.midea_msag2_09hrn1_i, // Цена
    area: 25 , // На площадь, м²
    coolingCapacity: 2.64, // Мощность охлаждения, кВт
    noise: 29.5, // Уровень шума, дБ (A)
    inverter: false, // Наличие инвертора (да/нет)

    functions: functionsMideaUnlimited,
    description: descriptionMideaUnlimited, // Описание

    // Охлаждение
    cooling: {
      performance: 2640, // Производительность, Вт
      powerConsumption: 820, // Потребл. мощность, Вт
    },
    // Обогрев
    heating: {
      performance: 2780, // Производительность, Вт
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
      size: "726x210x291", // Размеры
    },
    // Внешний блок
    outdoorUnit: {
      noise: "", // Уровень шума, дБ (A)
      weight: 24.9, // Вес, кг
      size: "720x270x495", // Размеры
      freon: "R410A", // Фреон
      compressorModel: "GMCC",
    }
  },




];

const dataDahatsu = [
  DAHATSU_DA_H,
  DAHATSU_DA_I,
  DAHATSU_GW_H,
  DAHATSU_DHP,
  DAHATSU_DS_I,
  DAHATSU_DH_CS_A,
  DAHATSU_DH_NP_A,
  DAHATSU_DH_KL_A,
  DAHATSU_DH_KN_CH,
  DAHATSU_DHMULT_OUT,
  DAHATSU_DHMULT_IN,
];

const dataDenko = [
  DENKO_KR,
  DENKO_DU,
  DENKO_DU_I,
  DENKO_GW_I,
  DENKO_DCS_A,
  DENKO_DNP_A,
  DENKO_DNMULT_IN,
  DENKO_DNMULT_OUT,
];

const dataEurohoff = [
  EUROHOFF_EV,
  EUROHOFF_EVR_I,
];

const dataLG = [
  LG_Dual,
];

const dataMidea = [
  MIDEA_PARAMOUNT,
  MIDEA_PARAMOUNT_INVERTER,
  MIDEA_UNLIMITED,
];

const dataDaichi = [
  DAICHI_ICE,
  DAICHI_ICE_INVERTER,
  DAICHI_AIR,
  DAICHI_AIR_INVERTER,
];

const dataBosch = [
  BOSCH_CLIMATE_LINE_2000,
];

const dataKentatsu = [
  KENTATSU_ICHI,
  KENTATSU_KANAMI,
  KENTATSU_KANAMI_INVERTER,
]



// Общий массив всех товаров
const productsArr = [
  dataDahatsu,
  dataDenko,
  dataEurohoff,
  dataLG,
  dataMidea,
  dataDaichi,
  dataBosch,
  dataKentatsu,

].flat().flat();

//productsArr = productsArr.flat()



{

  let mySwiper;

  const swiperAbout = document.querySelector('.about__slider');

      mySwiper = new Swiper(swiperAbout, {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          types: "bullets",
        },

        // Откл функционала, если слайдов меньше, чем нужно
        watchOverflow: true,

        // Брейк поинты (адаптив)
        // Ширина экрана
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1.3,
            spaceBetween: 16,
          },

          640: {
            slidesPerView: 1.5,
            spaceBetween: 32,
          },

          768: {
            slidesPerView: 2.2,
            spaceBetween: 32,
          },

          1100: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }

      });

}

// function runningNumbers (num) {
//   const time = 1000; // ms
//   const step = 1000;
//   let n = 1;
//   let t = Math.round(time / (num / step) );
//   let interval = setInterval(() => {
//     n += step;
//     if (n === num) clearInterval(interval);
//     console.log(n)
//   }, t);
// };


// Всплывающее сообщение о добавлении товара в корзину
function alertSuccessAdd (cardTitle) {
  const div = document.createElement("div");
  div.classList.add("cart__alert");
  div.textContent = `Товар ${cardTitle} добавлен в корзину`;
  header.appendChild(div);
  setTimeout(() => div.remove(), 3000);
};



const cart = document.querySelector(".cart");

// Получение цены из строки в цифровом виде
function getPriceValue (card) {
  return +card.textContent.replace(/\s/g, "").replace(/^\D+/g, '').match(/\d+/);
};


if (cart) {
  const backBtn = cart.querySelector(".cart__back-btn");
  backBtn.addEventListener("click", () => history.back());

  // Рендер добавленных в корзину товаров на страницы Корзины
  //addCartItemToPage ( getDataCartFromLocalStorage() );

  const cartItems = cart.querySelectorAll(".cart__item");
  //const getCountCartItems = () => cart.querySelectorAll(".cart__item").length;

  // Назначаем количество товаров в корзине на странице корзины
  //cart.querySelector(".cart__count").textContent = getCountCartItems();

  cartItems.forEach(cartItem => {
    const cartItemPrice = cartItem.querySelector(".cart-item__price");

    // Delete ------
    const deleteCartItemBtn = cartItem.querySelector(".cart-item__delete");
    deleteCartItemBtn.addEventListener("click", () => {
      cartItem.remove();
      //cart.querySelector(".cart__count").textContent = getCountCartItems();
    });
    //--------------

    // Quantity --------
    const quantityItem = cartItem.querySelector(".cart-item__quantity");
    const incrementBtn = quantityItem.querySelector(".cart-item__quantity-increment");
    const decrementBtn = quantityItem.querySelector(".cart-item__quantity-decrement");
    const quantityInput = quantityItem.querySelector(".cart-item__quantity-input");

    // Подсчет суммы товара (зависит от количества)
    function sumCalcItem (priceValue) {
      priceValue = +quantityInput.value * priceForOne;
      return `${priceValue.toLocaleString("ru")} ₽`;
    };

    const disableDecrementBtn = () => decrementBtn.disabled = (quantityInput.value === '1');

    // Отображение суммы товара (зависит от количества)
    function setSumPrice () {
      const priceValue = +quantityInput.value * priceForOne;
      cartItemPrice.textContent = sumCalcItem(priceValue);
      disableDecrementBtn();
    };

    disableDecrementBtn();

    // Цена
    const priceForOne = getPriceValue(cartItemPrice);

    // Plus
    incrementBtn.addEventListener("click", () => {
      quantityInput.value = +quantityInput.value + 1;
      setSumPrice();
    });

    // Minus
    decrementBtn.addEventListener("click", () => {
      quantityInput.value = +quantityInput.value - 1;
      setSumPrice();
    });
    //--------------
  });

}; // if (cart)

// Получить данные корзины из LocalStorage
function getDataCartFromLocalStorage () { return JSON.parse( localStorage.getItem("cart") || '[]' ); }

// Сделать активной иконку "Корзины", если в LocalStorage добавлены товары и указать кол-во заказов (даже при обновлении страницы)
function changeCartIcon () {
  const headerCart = document.querySelector(".header__cart");
  if (!headerCart) return;
  const headerCartCount = headerCart.querySelector(".header__cart-count");
  const localStorageLength = getDataCartFromLocalStorage().length;
  headerCart.classList.toggle("js-add-cart", localStorageLength > 0);
  headerCartCount.classList.toggle("js-cart-count-hidden", !localStorageLength);
  headerCartCount.textContent = localStorageLength || "";
};

//window.addEventListener("load", changeCartIcon);


function handlerCart () {
  const cards = document.querySelectorAll('.card, .card-popular, .product-profile');

  if (cards) {
    cards.forEach(card => {
      const cartBtn = card.querySelector(".cart-btn");
      cartBtn.addEventListener("click", formPopupActive);

      const cardTitle = card.querySelector(".product-title").textContent;
      const cardPrice = getPriceValue( card.querySelector(".product-price") );
      const cardSrcImg = card.querySelector(".product-img").src;
      const cardArea = card.querySelector(".area-value")?.textContent;

      const cardPriceString = card.querySelector(".product-price").textContent;

      // Заполнение шаблона поп-ап данными товара (картинка, заголовок, цена, счетчик кол-ва)
      function formPopupActive () {
        const formPopup = document.querySelector(".form-popup");
        if (!formPopup) return;

        const formPopupImg = formPopup.querySelector(".form-popup-orders__img");
        const formPopupTitle = formPopup.querySelector(".form-popup-orders__name");
        const formPopupPrice = formPopup.querySelector(".form-popup-orders__price-value");
        const formPopupArea = formPopup.querySelector(".form-popup-orders__area-value");

        const count = formPopup.querySelector(".form-popup__quantity-input");
        const sumValue = formPopup.querySelector(".form-popup__sum-value");

        formPopupImg.src = cardSrcImg;
        formPopupTitle.textContent = cardTitle;
        formPopupArea.textContent = cardArea;
        formPopupPrice.textContent = cardPriceString;
        sumValue.textContent = cardPriceString;
        formPopup.classList.add("js-popup-active");
        blockScrollBody();


        // Добавление в поп-ап для карточки профиля (внутрення страница) ед.изм. "м²"
        if (card.classList.contains("product-profile")) formPopupArea.textContent = `${cardArea} м²`;

        function closePopupForm () {
          formPopup.classList.remove("js-popup-active");
          count.setAttribute("value", "1");
          unblockScrollBody();
          formPopup.querySelector("form").reset();
        };

        const closePopupBtn = formPopup.querySelector(".form-popup__close");
        closePopupBtn.addEventListener("click", closePopupForm);

        document.body.addEventListener("click", (evt) => {
          if (evt.target === formPopup) closePopupForm();
        });

        // Рендер суммы заказа (от цены и количества)
        function handlerSumValue () {
          const countValue = count.getAttribute("value");
          const sum = +countValue * cardPrice;
          sumValue.textContent = `${sum.toLocaleString("ru")} ₽`;
        };

        let observer = new MutationObserver(handlerSumValue);
        observer.observe(count, {
          attributes: true,
        });

      };



      // Добавление товара в корзину
      // function addProductToCart () {
      //   addToCart();
      //   alertSuccessAdd(cardTitle);
      //   addCartItemToPage ( getDataCartFromLocalStorage() );
      //   //formPopupActive();
      // };





      // // Рендер карточки, добавленной в корзину на страницы корзины
      // function addCartItemToPage (addedProducts) {
      //   const cartListBlock = document.querySelector(".cart__list");
      //   const cartTemplate = document.querySelector("#cart-template")?.content.querySelector(".cart__item");
      //
      //   if (cartTemplate) {
      //     cartListBlock.replaceChildren();
      //
      //     addedProducts.forEach(addedProduct => {
      //       const cartItem = cartTemplate.cloneNode(true);
      //
      //       cartItem.querySelector(".cart-item__img").src = addedProduct.cardSrcImg;
      //       cartItem.querySelector(".cart-item__name").textContent = addedProduct.cardTitle;
      //       cartItem.querySelector(".cart-item__price").textContent = addedProduct.cardPrice;
      //       document.querySelector(".product-profile").appendChild(cartItem);
      //     });
      //   }
      // };






      // Добавление товара в LocalStorage (корзину)
      // function addToCart () {
      //   const cartStorage = getDataCartFromLocalStorage(); // Получаем элементы корзины из LocalStorage
      //   const card = { cardSrcImg, cardTitle, cardPrice }; // Объект для корзины с заголовком и ценой
      //   localStorage.setItem("cart", JSON.stringify([...cartStorage, card]));
      //   //headerCart.classList.toggle("js-add-cart", getDataCartFromLocalStorage().length > 0);
      //   //headerCartCount.textContent = getDataCartFromLocalStorage().length || "";
      //   changeCartIcon();
      // };


    });
  }
};



// Рендер карточки, добавленной в корзину на страницы корзины
// function addCartItemToPage (addedProducts) {
//   const cartListBlock = document.querySelector(".cart__list");
//   const cartTemplate = document.querySelector("#cart-template")?.content.querySelector(".cart__item");
//
//   if (cartTemplate && cartListBlock) {
//     cartListBlock.replaceChildren();
//
//     addedProducts.forEach(addedProduct => {
//       const cartItem = cartTemplate.cloneNode(true);
//
//       cartItem.querySelector(".cart-item__img").src = addedProduct.cardSrcImg;
//       cartItem.querySelector(".cart-item__name").textContent = addedProduct.cardTitle;
//       cartItem.querySelector(".cart-item__price").textContent = `${addedProduct.cardPrice.toLocaleString("ru")} ₽`;
//       cartListBlock.appendChild(cartItem);
//     });
//   }
// };




// window.addEventListener("storage", (evt) => {
//   addCartItemToPage ( getDataCartFromLocalStorage() );
// });

const chat = document.querySelector(".chat");
if (chat) {
  const chatIcon = chat.querySelector(".chat__icon");
  const chatWrapper = chat.querySelector(".chat__wrapper");
  //const chatBody = chat.querySelector(".chat__body");
  const closeBtn = chat.querySelector(".chat__cancel");

  const mobileWidthMediaQuery = window.matchMedia('(max-width: 768px)');

  chatIcon.addEventListener("click", () => {
    chatWrapper.classList.toggle("js-chat-open");
    toggleBlockScrollBody();
  });

  if (mobileWidthMediaQuery.matches) {


    closeBtn.addEventListener("click", () => {
      chatWrapper.classList.remove("js-chat-open");
      unblockScrollBody();
    });

      document.body.addEventListener("click", (evt) => {

        if ( chatWrapper.classList.contains("js-chat-open") && evt.target === chatWrapper ) {
          chatWrapper.classList.remove("js-chat-open");
          unblockScrollBody();
        }
      });

  }

}


const mapContacts = document.querySelector('#map-contacts');

if (mapContacts) ymaps.ready(init);


function init() {
  const pointAddress = [43.422676, 39.937175];
  let myMap = new ymaps.Map('map-contacts', {

    center: pointAddress,
    zoom: 17,
    controls: [],
  });
  const placemarkAddress = new ymaps.Placemark(pointAddress, {}, {
    iconLayout: 'default#image',
    iconImageHref: './assets/img/icons/map-baloon.svg',
    iconImageSize: [144, 68],
    iconImageOffset: [-70, -68]
  });

  myMap.geoObjects.add(placemarkAddress);
};




// function init() {
//   const point = [55.76, 37.64];
//   let myMap = new ymaps.Map("map-contacts", {
//     center: point,
//     zoom: 10
//   });
//
//   ymaps.route([
//     'Москва',
//     'Химки'
//   ]).then((route) => {
//     myMap.geoObjects.add(route);
//   });
//
//   let marker = new ymaps.Placemark(point);
//   myMap.geoObjects.add(marker);



  // let animation = ymaps.animation.animate(
  //   'point',
  //   function (fraction) {
  //     return ymaps.coordSystem.geo.solveDirectProblem(
  //       route.getWayPoints().get(0).geometry.getCoordinates(),
  //       route.getWayPoints().get(1).geometry.getCoordinates(),
  //       fraction
  //     )
  //   },
  //   {
  //     duration: 2000
  //   }
  // );
  //
  // marker.addAnimation(animation);


//}



const filter = document.querySelector('.filter');

if (filter) {

  const filterItems = filter.querySelectorAll('.filter__item-title');

  const filterOpen = (filter) => filter.classList.add('js-filter-open');
  const filterHide = (filter) => filter.classList.remove('js-filter-open');

  // Показ/скрытие элементов фильтра
  filterItems.forEach(filterItem => {
    filterItem.addEventListener('click', () => {
      filterItem.classList.toggle('js-filter-open');

      // Скрыть все, кроме активного
      const inactiveFilters = Array.from(filterItems).filter(el => el !== filterItem);
      inactiveFilters.forEach(filterHide);

      // Скрыть по клику вне блока фильтра
      document.addEventListener('click', function (evt) {
        if (!evt.target.closest('.filter__item')) {
          filterItems.forEach(filterHide);
        }
      });
    });
  });

  const filterBtn = filter.querySelector('.filter__icon');
  const closeFilter = filter.querySelector('.filter__close');

  filterBtn.addEventListener('click', () => {
    filterOpen(filterBtn);
    blockScrollBody();
  });

  closeFilter.addEventListener('click', () => {
    filterHide(filterBtn);
    unblockScrollBody();
  });



  // --------------- Добавление кнопки на моб.версии ---------------

  const form = filter.querySelector('.filter__form');
  const btnForm = form.querySelector('.filter__form-submit');

  const visibleBtn = () => btnForm.classList.add('js-visible');
  const hiddenBtn = () => btnForm.classList.remove('js-visible');

  //checkboxes----------------------------
  const checkboxesForm = form.querySelectorAll('input[type="checkbox"]');

  function isSelectedCheckbox (checkboxes) {
    return Array.from(checkboxes).some(checkbox => checkbox.checked);
  };

  // Selects-----------------
  const selectsForm = form.querySelectorAll('select');

  function isSelectedOption (selects) {
    return Array.from(selects).some(select => select.selectedIndex !== 0);
  };

  // Inputs price-----------------
  const inputsNumberForm = form.querySelectorAll('input[type="number"]');

  function isEnteredPrice (inputsNumber) {
    return Array.from(inputsNumber).some(inputNumber => inputNumber.value !== "");
  };

  // Radio-----------------
  const radiosForm = form.querySelectorAll('input[type="radio"]');

  function isSelectedRadio (radioBtns) {
    return Array.from(radioBtns).some(radioBtn => radioBtn.checked);
  };

  form.addEventListener('change', () => {
    ( isSelectedCheckbox(checkboxesForm)
      || isSelectedOption(selectsForm)
      || isEnteredPrice(inputsNumberForm)
      || isSelectedRadio(radiosForm) ) ? visibleBtn() : hiddenBtn();
  });





  // ------- Фильтрация ---------

  const minPriceInput = form.querySelector(".filter__price-min");
  const maxPriceInput = form.querySelector(".filter__price-max");
  const selectArea = form.querySelector(".filter__item--area select")
  const filterInverter = form.querySelector(".filter__item--inverter");


  // form.addEventListener("submit", (evt) => {
  //   evt.preventDefault();
  //   productsGrid.replaceChildren();
  //   renderCard(productsArr.slice(0, 3))
  // });


  // -----------------------------------------------------------------------------------------------
  {
    function applyFilters () {
      const minPrice = +minPriceInput.value;
      const maxPrice = +maxPriceInput.value;
      const checkboxesCompany = Array.from(document.querySelectorAll(".filter__item--company input[type='checkbox']:checked"));
      const selectedArea = selectArea.value;

      const filteredData = productsArr.filter(productItem => {
        let passesFilter = true;
        if (minPrice && productItem.price < minPrice) passesFilter = false;
        if (maxPrice && productItem.price > maxPrice) passesFilter = false;
        if (checkboxesCompany.length && !checkboxesCompany.some(checkbox => checkbox.value === productItem.company)) {
          passesFilter = false;
        }
        if (selectedArea && productItem.area !== selectedArea) passesFilter = false;
        return passesFilter;
      });
      renderCard(filteredData);
    };


     //minPriceInput.addEventListener("input", applyFilters);
     //maxPriceInput.addEventListener("input", applyFilters);
     //selectArea.addEventListener("change", applyFilters);

    document.querySelectorAll(".filter__item--company input[type='checkbox']").forEach(el => {
      el.addEventListener("change", () => {
        let newArr = productsArr.filter(productItem => el.value === productItem.company );
        //renderCard(newArr);
      });
    });
  }
  // -----------------------------------------------------------------------------------------------
}




function filterTabsCards () {
  const filterTabsBlock = document.querySelector(".filter-tabs");
  if (!filterTabsBlock) return;

  const filterTabsList = filterTabsBlock.querySelectorAll(".filter-tabs__list");
  const productGrid = document.querySelector(".products__grid")
  const listOfRenderedCards = Array.from( productGrid.querySelectorAll(".card") );
  const tabsListCompany = filterTabsBlock.querySelector(".filter-tabs__list--company");
  const filterTabsTitle = filterTabsBlock.querySelectorAll(".filter-tabs__title");
  const tabsListArea = filterTabsBlock.querySelector(".filter-tabs__list--area");

  // Динамическое добавление табов компаний и сортировка их по алфавиту
  const uniqueCompanyNames = [...new Set(listOfRenderedCards.map(renderedCard => renderedCard.dataset.company))].sort((a, b) => {
    return a.localeCompare(b);
  });

  uniqueCompanyNames.forEach(companyName => {
    const tagLi = document.createElement("li");
    tagLi.classList.add("filter-tabs__item");
    tagLi.dataset.company = companyName;
    tagLi.textContent = companyName;
    tabsListCompany.appendChild(tagLi);
  });

  // Динамическое добавление табов площади помещения
  const uniqueAreaValues = [...new Set(listOfRenderedCards.map(renderedCard => +renderedCard.dataset.area))].sort((a, b) => a - b);
  const tabsAreaMinMax = Array.from( tabsListArea.querySelectorAll(".filter-tabs__item[data-area-min]") );

  let uniqueAreaTabs = new Set();
  uniqueAreaValues.forEach(areaValue => {
    tabsAreaMinMax.forEach(tabAreaMinMax => {
      const dataMinArea = +tabAreaMinMax.dataset.areaMin;
      const dataMaxArea = +tabAreaMinMax.dataset.areaMax;
      if (areaValue >= dataMinArea && areaValue <= dataMaxArea) {
        uniqueAreaTabs.add(tabAreaMinMax);
      }
    });
  });
  uniqueAreaTabs.forEach(areaTab => areaTab.classList.add("filter-tab-current"));


  // Счетчик общего кол-ва карточек нак странице
  document.querySelector(".products__title-count").textContent = listOfRenderedCards.length;

  // Добавление активного класса к табам для их активации
  const classFilterActive = "js-filter-active";
  filterTabsList.forEach(tabList => {
    const filterTabs = tabList.querySelectorAll(".filter-tabs__item");
    filterTabs[0].classList.add(classFilterActive);
    filterTabs.forEach(filterTab => {
      filterTab.addEventListener("click", () => {
        filterTabs.forEach(tab => tab.classList.remove(classFilterActive));
        filterTab.classList.toggle(classFilterActive);
      });
    });
  });


  // Показ/скрытие фильтров по клику на заголовок
  filterTabsTitle.forEach(title => {
    if (title.classList.contains("filter-tabs__title--company")) {
      title.classList.add("filter-visible");
    }
    title.addEventListener("click", () => {
      title.classList.toggle("filter-visible");
    });
  });


  const companyTabs = filterTabsBlock.querySelectorAll(".filter-tabs__item[data-company]");
  const classHiddenCompany = 'js-hidden-company';
  const inverterTabs = filterTabsBlock.querySelectorAll(".filter-tabs__item[data-type]");
  const classTypeHidden = 'js-hidden-type';
  const areaTabs = filterTabsBlock.querySelectorAll(".filter-tabs__item[data-area]");
  const classAreaHidden = 'js-hidden-area';


  function handlerCompanyTabs (companyTab) {
    const tabCompanyTarget = companyTab.dataset.company;
    listOfRenderedCards.forEach(renderedCard => {
      if (renderedCard.dataset.company === tabCompanyTarget || tabCompanyTarget === "all") {
        renderedCard.classList.remove(classHiddenCompany);
      } else {
        renderedCard.classList.add(classHiddenCompany);
      }
    });
    emptyCardCheck();
  };

  function handlerInverterTabs (inverterTab) {
    const tabInverterTarget = inverterTab.dataset.type;
    listOfRenderedCards.forEach(renderedCard => {
      if (renderedCard.dataset.type === tabInverterTarget || tabInverterTarget === "all") {
        renderedCard.classList.remove(classTypeHidden);
      } else {
        renderedCard.classList.add(classTypeHidden);
      }
    });
    emptyCardCheck();
  };

  function handlerAreaTabs (areaTab) {
    const tabAreaMinTarget = +areaTab.dataset.areaMin;
    const tabAreaMaxTarget = +areaTab.dataset.areaMax;
    listOfRenderedCards.forEach(renderedCard => {
      const dataAreaRenderedCard = +renderedCard.dataset.area;
      if (dataAreaRenderedCard >= tabAreaMinTarget && dataAreaRenderedCard <= tabAreaMaxTarget
        || areaTab.dataset.area === "all" ) {
        renderedCard.classList.remove(classAreaHidden);
      }
      else {
        renderedCard.classList.add(classAreaHidden);
      }
    });
    emptyCardCheck();
  };


  // Фильтр по компаниям
  companyTabs.forEach(companyTab => {
    //companyTab.addEventListener("click",() => handlerCompanyTabs(companyTab));
  });

  // Фильтр по типу компрессора
  inverterTabs.forEach(inverterTab => {
    //inverterTab.addEventListener("click", () => handlerInverterTabs(inverterTab));
  });

  // Фильтр по площади помещения
  areaTabs.forEach(areaTab => {
    //areaTab.addEventListener("click",() => handlerAreaTabs(areaTab));
  });


  //---------------


function filterProductCards () {
  const companyFilterValue = filterTabsBlock.querySelector(".filter-tabs__item[data-company].js-filter-active");
  const inverterFilterValue = filterTabsBlock.querySelector(".filter-tabs__item[data-type].js-filter-active");
}


//------------

  // Проверка на пустой список карточек по причине несоответствия фильтру
  function emptyCardCheck () {
    const hasCards = listOfRenderedCards.every(card => card.classList.contains(classHiddenCompany)
                                                      || card.classList.contains(classTypeHidden)
                                                      || card.classList.contains(classAreaHidden)
                                                                                                );
    if (hasCards) {
      const messageAboutEmptiness = document.createElement("span");
      messageAboutEmptiness.classList.add("message-empty");
      messageAboutEmptiness.textContent = "По указанным параметрам товар не найден.";
      if (!productGrid.querySelector(".message-empty")) {
        productGrid.appendChild(messageAboutEmptiness);
      }
    } else {
      productGrid.querySelectorAll(".message-empty").forEach(el => el.remove());
    }
  };

  // Сортировка
  const filterSortingSelect = filterTabsBlock.querySelector(".filter-tabs__sorting select");
  filterSortingSelect.addEventListener("change", () => sortingCards(filterSortingSelect) );

  if (filterSortingSelect) window.addEventListener("load", () => sortingCards(filterSortingSelect) );

};

// Получаем вкладки фильтров и показываем кнопку "Дополнительно"
const filterTabs = document.querySelectorAll('.filter-tab');
const showMoreButton = document.querySelector('.show-more-button');

// Добавляем обработчик события клика на каждую вкладку фильтра
//filterTabs.forEach(tab => tab.addEventListener('click', filterCards));

// Добавляем обработчик события клика к кнопке «Показать больше»
//showMoreButton.addEventListener('click', showMoreCards);

// Функция для фильтрации карточек товаров на основе выбранных фильтров
function filterCards() {
  const selectedCompany = document.querySelector('.company-filter-tab.selected').dataset.company;
  const selectedArea = document.querySelector('.area-filter-tab.selected').dataset.area;
  const isInverterSelected = document.querySelector('.inverter-filter-tab.selected').dataset.inverter === 'true';

  // Скрываем все карточки
  const card = document.querySelectorAll('.product-card');
  card.forEach(card => {
    card.style.display = 'нет';
  });

  // Показ карточек, соответствующих выбранным фильтрам
  const filteredCards = document.querySelectorAll(`.product-card[data-company="${selectedCompany}"][data-area="${selectedArea}"][data-inverter="${isInverterSelected}"]`) ;
  filteredCards.forEach(card => {
    card.style.display = 'блок';
  });
}

// Функция для отображения большего количества карточек при нажатии кнопки «показать больше»
function showMoreCards() {
  const displayCards = document.querySelectorAll('.product-card:not([style*="display: none"])');
  const hiddenCards = document.querySelectorAll('.product-card[style*="display: none"]');

  // Показываем следующие 5 скрытых карточек или все, если их осталось меньше 5
  const cardToShow = hiddenCards.length >= 5? 5: hiddenCards.length;
  for (let i = 0; i <cardToShow; i++) {
    displayCards[displayCards.length - 1].style.display = 'block';
  }

  // Скрываем кнопку «показать больше», если больше карточек не скрыто
  if (hiddenCards.length - cardToShow === 0) {
    showMoreButton.style.display = 'нет';
  }
}

function sortingCards (filterSortingSelect) {
  const productsGrid = document.querySelector(".products__grid");
  const productCards = Array.from(document.querySelectorAll(".products .card"));

  // Сначала дешевле
  const sortingCheaperProductCards = [...productCards].sort((a, b) => {
    return +a.dataset.price - +b.dataset.price;
  });
  // Сначала дороже
  const sortingExpensiveProductCards = [...productCards].sort((a, b) => {
    return +b.dataset.price - +a.dataset.price;
  });
  // Алфавиту
  const sortingAlphabetProductCards = [...productCards].sort((a, b) => {
    return a.dataset.article.localeCompare(b.dataset.article);
  });

  productsGrid.replaceChildren();

  switch (filterSortingSelect.value) {
    // Алфавиту
    case "initial":
      sortingAlphabetProductCards.forEach(card => productsGrid.appendChild(card));
      break;
    // Дешевле
    case "cheaper":
      sortingCheaperProductCards.forEach(card => productsGrid.appendChild(card));
      break;
    // Дороже
    case "expensive":
      sortingExpensiveProductCards.forEach(card => productsGrid.appendChild(card));
      break;
    default:
      sortingAlphabetProductCards.forEach(card => productsGrid.appendChild(card));
  };
};

const header = document.querySelector('header.header');

if (header) {

  const menu = header.querySelector('.header__nav');
  const burger = header.querySelector('.header__burger');
  const menuClose = header.querySelector('.header__nav-close');
  const navLinks = header.querySelectorAll(".header__nav-link");
  const menuActiveClass = "js-menu-open";

  function closeMobileMenu () {
    menu.classList.remove(menuActiveClass);
    unblockScrollBody();
  };

  burger.addEventListener('click', () => {
    menu.classList.add(menuActiveClass);
    blockScrollBody();

    if (menu.classList.contains(menuActiveClass)) {
      let mc = new Hammer(menu);
      mc.get('swipe').set({
        direction: Hammer.DIRECTION_ALL,
      });
      mc.on('swipeup', closeMobileMenu);
    }
  });

  menuClose.addEventListener('click', closeMobileMenu);

  navLinks.forEach(navLink => {
    navLink.addEventListener("click", closeMobileMenu)
  });

  window.addEventListener('scroll', () => scrollHeader (header) );

}










// const heroTitle = document.querySelector(".hero__title");
// heroTitle.addEventListener('click', () => {
//   new TelegaChat().open();
// })

// Custom element's class

class InputPlusMinus extends HTMLElement {

  constructor() {
    super();

    const inputPlusMinus = this;

    const template = document.querySelector("#input-plus-minus-template").content;
    this.attachShadow({mode: "open"}).appendChild(template.cloneNode(true));

    const container = this.shadowRoot.querySelector("#container");
    const plus_button = this.shadowRoot.querySelector("#plus");
    const minus_button = this.shadowRoot.querySelector("#minus");
    const count_textbox = this.shadowRoot.querySelector("#countInput");

    this.setAttribute("value", "1");
    this.setAttribute("data-value", "1");

    plus_button.addEventListener("click", () => {
      const current = +count_textbox.value;
      count_textbox.value = current + 1;
      this.setAttribute("value", count_textbox.value);
      this.setAttribute("data-value", count_textbox.value);
    });

    minus_button.addEventListener("click", () => {
      const current = +count_textbox.value;
      if (current > 1) {
        count_textbox.value = current - 1;
        this.setAttribute("value", count_textbox.value);
        this.setAttribute("data-value", count_textbox.value);
      }
    });



    // Отслеживание изменения аттрибута value
    function handlerCountText () {
      count_textbox.value = inputPlusMinus.getAttribute("value");
    };

    let observer = new MutationObserver(handlerCountText);
    observer.observe(inputPlusMinus, {
      attributes: true,
    });


    container.setAttribute("style", `
      display: flex;
      align-items: center;
      height: 30px;
      border: 2px solid #bce8f1;
      padding: 5px;
      border-radius: 22px;
      `);

    const mQueryMobile = window.matchMedia('(max-width: 768px)');
    if (mQueryMobile.matches) {

      container.setAttribute("style", `
      display: flex;
      align-items: center;
      height: 25px;
      border: 2px solid #bce8f1;
      padding: 5px;
      border-radius: 22px;
      `);
    };

    count_textbox.setAttribute("style", `
      width: 35px;
      text-align: center;
      border: none;
      outline: none;
      height: 100%;
      font-size: 18px;
      `);


    if (mQueryMobile.matches) {

      count_textbox.setAttribute("style", `
      width: 30px;
      text-align: center;
      border: none;
      outline: none;
      height: 100%;
      font-size: 16px;
      `);

    }


    [plus_button, minus_button].forEach(button => {
      button.setAttribute("style", `
      display: flex;
      align-items: center;
      justify-content: center;
      border: none;
      outline: none;
      height: 100%;
      background-color: transparent;
      cursor: pointer;
      `);

      button.addEventListener("mousedown", () => {
        button.style.opacity = "0.5";
      });

      button.addEventListener("mouseup", () => {
        button.style.opacity = "1";
      });

    });


  }
};


customElements.define("input-plus-minus", InputPlusMinus);

const loader = document.querySelector('.loader');

if (loader) {

  function hideLoader () {
    loader.classList.add('hide');
    setTimeout(() => loader.remove(), 300);
  };

  window.addEventListener('load', hideLoader);
}

const swiperPopular = document.querySelector('.popular__slider');

if (swiperPopular) {
setTimeout(createPopularSlider, 0);
}


function createPopularSlider () {
  const mySwiper = new Swiper(swiperPopular, {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,

    // Ширина экрана
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      380: {
        slidesPerView: 1.5,
        spaceBetween: 16,
      },
      480: {
        slidesPerView: 2.2,
        spaceBetween: 16,
      },

      640: {
        slidesPerView: 2.8,
        spaceBetween: 16,
      },

      768: {
        slidesPerView: 3.3,
        spaceBetween: 16,
      },

      1100: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    }
  });
}


// Список артикулов товаров, которые выводятся в блоке (слайдере) "Популярное"
const articlesPopularCards = ["dahatsu-dhp-07", "dahatsu-da-07h", "lg-p07sp2", "dahatsu-dhp-09", "eurohoff-ev-09", "dahatsu-dh-kn-18ch"];

const popular = document.querySelector('.popular');

if (popular) {

  const cardPopularTemplate = document.querySelector('#template-card-popular').content.querySelector('.card-popular.swiper-slide');
  const swiperWrapperPopular = document.querySelector('.popular__slider .swiper-wrapper');

  // Создание карточек товара для блока "Популярное", используется общий массив данных товара.
  // Для выбора карточек в функцию передается массив с артикулами товара
  function createCardPopular (products, articles) {

    products.forEach(product => {

      articles.forEach(article => {
        if (product.article === article) {
          const popularItem = cardPopularTemplate.cloneNode(true);
          fillingSliderCard(popularItem, product, swiperWrapperPopular);
          handlerCart();
        }
      });
    });
  };

  createCardPopular(productsArr, articlesPopularCards);
}

window.addEventListener("load", () => {
  createProductProfile(productsArr);
  createCardSimilar(productsArr);
});

function createOption (productsItem) {
  const option = document.createElement("option");
  option.text = productsItem.area;
  option.value = productsItem.area;
  option.dataset.src = productsItem.link;
  return option;
};

function handleOptionChange(evt) {
  const selectedOption = evt.target.options[evt.target.selectedIndex];
  document.location.href = selectedOption.dataset.src;
};


function createProductProfile (products) {
  const breadcrumbs = document.querySelector(".breadcrumbs");
  if (!breadcrumbs) return;

  const breadcrumbsValue = breadcrumbs.querySelector("span.breadcrumbs__item")?.textContent;
  const productProfileTemplate = document.querySelector('#product-profile-template')?.content.querySelector('.product-profile');

  products.forEach((product, i, productsArr) => {

    if (product.title !== breadcrumbsValue) return;

    const profileItem = productProfileTemplate.cloneNode(true);
    const swiperTopWrapper = profileItem.querySelector('.product-profile__images .swiper-top .swiper-wrapper');
    const swiperThumbsWrapper = profileItem.querySelector('.product-profile__images .swiper-thumbs .swiper-wrapper');

    profileItem.dataset.area = product.area;
    profileItem.dataset.type = product.type;
    profileItem.dataset.title = product.title;
    profileItem.dataset.inverter = product.inverter;
    profileItem.querySelectorAll('.product-profile__title').forEach(title => title.textContent = product.title);

    // Добавление картинок в слайдер (верхний)
    product.imgSrc.forEach((src, i) => {
      const tagImg = document.createElement("img");
      const divSwiperSlide = document.createElement("div");
      divSwiperSlide.classList.add("swiper-slide");
      tagImg.src = src;
      tagImg.setAttribute("data-src", tagImg.src);
      tagImg.setAttribute('data-fancybox', "images-index");
      swiperTopWrapper.appendChild(divSwiperSlide);
      divSwiperSlide.appendChild(tagImg);
      if (i === 0) {
        tagImg.classList.add("product-img");
      }
    });
    // Добавление картинок в слайдер (миниатюры)
    product.imgSrc.forEach((src) => {
      const tagImg = document.createElement("img");
      tagImg.classList.add("swiper-slide");
      tagImg.src = src;
      swiperThumbsWrapper.appendChild(tagImg);
    });

    // Характеристики
    const properties = profileItem.querySelector('.product-profile__properties');
    properties.querySelector('.series').textContent = product.series || "-";
    properties.querySelector('.area-value').textContent = product.area || "-";
    properties.querySelector('.inverter').textContent = `${product.inverter ? "Да" : "Нет"}`;
    properties.querySelector('.cooling-performance').textContent = product.cooling.performance || "-";
    properties.querySelector('.cooling-powerConsumption').textContent = product.cooling.powerConsumption || "-";
    properties.querySelector('.heating-performance').textContent = product.heating.performance || "-";
    properties.querySelector('.heating-powerConsumption').textContent = product.heating.powerConsumption || "-";
    properties.querySelector('.powerSupply').textContent = product.powerSupply || "-";


    const maxTrackLength = properties.querySelector('.maxTrackLength');
    if (product.maxTrackLength) {
      maxTrackLength.textContent = product.maxTrackLength || "-";
    } else {
      maxTrackLength.parentNode.style.display = "none";
    }

    const maxHeightDifference = properties.querySelector('.maxHeightDifference');
    if (product.maxHeightDifference) {
      maxHeightDifference.textContent = product.maxHeightDifference || "-";
    } else {
      maxHeightDifference.parentNode.style.display = "none";
    }

    properties.querySelector('.liquidPipeDiameter').textContent = product.liquidPipeDiameter || "-";
    properties.querySelector('.gasPipeDiameter').textContent = product.gasPipeDiameter || "-";
    properties.querySelector('.gasPipeDiameter').textContent = product.gasPipeDiameter || "-";

    // Внутренний блок
    if (product.indoorUnit) {
      properties.querySelector('.indoorUnit-noise').textContent = product.indoorUnit.noise || "-";
      properties.querySelector('.indoorUnit-weight').textContent = product.indoorUnit.weight || "-";
      properties.querySelector('.indoorUnit-size').textContent = product.indoorUnit.size || "-";
    } else {
      properties.querySelector('.product-profile__properties-heading--inner').style.display = "none";
      properties.querySelector('.product-profile__property-list--inner').style.display = "none";
    }

    // Внешний блок
    if (product.outdoorUnit) {
      properties.querySelector('.outdoorUnit-noise').textContent = product.outdoorUnit.noise || "-";
      properties.querySelector('.outdoorUnit-weight').textContent = product.outdoorUnit.weight || "-";
      properties.querySelector('.outdoorUnit-size').textContent = product.outdoorUnit.size || "-";
      properties.querySelector('.outdoorUnit-freon').textContent = product.outdoorUnit.freon || "-";
      properties.querySelector('.outdoorUnit-compressorModel').textContent = product.outdoorUnit.compressorModel || "-";
    } else {
      properties.querySelector('.product-profile__properties-heading--out').style.display = "none";
      properties.querySelector('.product-profile__property-list--out').style.display = "none";
    }

    profileItem.querySelectorAll('.product-price').forEach(price => price.textContent = `${product.price.toLocaleString("ru")} ₽`)
    profileItem.querySelector('.product-profile__desc-text').textContent = product.description || "-";
    profileItem.querySelector(".meta-price").content = product.price || "-";

    breadcrumbs.insertAdjacentElement('afterEnd', profileItem);

    // Добавление других моделей с другой квадратурой
    const otherAreasSelect = document.querySelector(".product-profile__other-areas select");

    productsArr.forEach(productsItem => {
      if (productsItem.series === product.series && productsItem.company === product.company) {
        const option = createOption(productsItem);
        otherAreasSelect.appendChild(option);
        if (+option.value === product.area) option.selected = true;
      }
    });
    otherAreasSelect.addEventListener("change", handleOptionChange);
  });



  const productProfile = document.querySelector('.product-profile');

  if (productProfile) {
    setTimeout(() => createProductProfileSlider(productProfile), 100);

    const descText = productProfile.querySelector(".product-profile__desc-text");
    const showMoreBtn = productProfile.querySelector(".product-profile__desc-show-more-btn");

    // Кнопка "Показать больше" для описания
    showMoreBtn.addEventListener("click", () => {
      descText.classList.add("js-show-more");
    });
  }
  handlerCart();
};



// Слайдер с миниатюрами
function createProductProfileSlider (productProfile) {

  const swiperTop = productProfile.querySelector('.swiper-top');
  const swiperThumbs = productProfile.querySelector('.swiper-thumbs');

  let swiper__thumbs = new Swiper(swiperThumbs, {
    spaceBetween: 28,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    initialSlide: 0,
  });

  let swiper__top = new Swiper(swiperTop, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 0,
    thumbs: {
      swiper: swiper__thumbs,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });
};


function createShowMoreBtn () {
  const productsGrid = document.querySelector(".products__grid");
  if (!productsGrid) return;
  const showMoreBtn = document.createElement("button");
  showMoreBtn.textContent = "Показать еще";
  showMoreBtn.classList.add("show-more");
  productsGrid.parentNode.appendChild(showMoreBtn);
  return showMoreBtn;
};

function handleShowMoreBtn () {
  const productsGrid = document.querySelector(".products__grid");
  if (!productsGrid) return;

  const showMoreBtn = createShowMoreBtn();
  const productsLength = productsGrid.querySelectorAll(".card:not(.js-hidden-company)").length;
  let startItems = 6;
  showMoreBtn.addEventListener("click", () => {
    startItems += 3;
    const array = Array.from( productsGrid.querySelectorAll(".card") );
    const visibleItems = array.slice(0, startItems);
    visibleItems.forEach(el => el.classList.add("is-visible"));

    if (startItems.length === productsLength) showMoreBtn.hidden = true;
  });
};


// Создание массива карточек товара в соответствии с данными из массива объектов
function renderCard (products) {
  const productsGrid = document.querySelector(".products__grid");
  const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
  if (!productsGrid && !cardTemplate) return;

    productsGrid.replaceChildren();

    products.forEach(product => {
      const cardItem = cardTemplate.cloneNode(true);

      cardItem.dataset.article = product.article;
      cardItem.querySelector('.card__link').href = product.link;
      cardItem.querySelector('.card__img').src = product.imgSrc[0];
      cardItem.querySelector('.card__title').textContent = product.title;
      cardItem.querySelector('.card__price').textContent = `${product.price.toLocaleString("ru")} ₽`;
      cardItem.querySelector('.card__data-item-value--area').textContent = `${product.area} м²`;
      cardItem.querySelector('.card__data-item-value--coolingCapacity').textContent = `${product.coolingCapacity} кВт`;
      cardItem.querySelector('.card__data-item-value--noise').textContent = `${product.noise} дБ`;
      cardItem.querySelector('.card__data-item-value--inverter').textContent = `${product.inverter ? "Есть" : "Нет"}`;
      productsGrid.appendChild(cardItem);
      cardItem.setAttribute("data-price", product.price);
      cardItem.setAttribute("data-type", product.inverter);
      cardItem.setAttribute("data-company", product.company);
      cardItem.setAttribute("data-area", product.area);
    });
    handlerCart();
    filterTabsCards();

};
//---------------


//handleShowMoreBtn ();


// Отрисовать все карточки товара на главной странице каталога
const productsMain = document.querySelector(".products.products--main");
if (productsMain) renderCard(productsArr);


const blockSplitSystems = document.querySelector(".products.products--split-systems");
const blockFloorCeiling = document.querySelector(".products.products--floor-ceiling");
const blockDucted = document.querySelector(".products.products--ducted");
const blockCassette = document.querySelector(".products.products--cassette");
const blockColumn = document.querySelector(".products.products--column");
const blockMultiSplitSystems = document.querySelector(".products.products--multi-split-systems");

renderProductsOfCategory(blockSplitSystems, "split-system"); // Сплит-системы
renderProductsOfCategory(blockFloorCeiling, "floor-ceiling"); // Напольно-потолочные
renderProductsOfCategory(blockDucted, "ducted"); // Канальные
renderProductsOfCategory(blockCassette, "cassette"); // Кассетные
renderProductsOfCategory(blockColumn, "column"); // Колонные
renderProductsOfCategory(blockMultiSplitSystems, "multi-split-systems"); // Мульти сплит-системы

// Отрисовка карточек на странице выбранной категории в соответствии с категорией
function renderProductsOfCategory (blockCategory, category) {
  if (blockCategory) {
    const productsOfCategory = productsArr.filter(card => card.type === category);
    renderCard(productsOfCategory);
    blockCategory.setAttribute("data-category", category);
    //return categoryArray;
  }
};





//-------------------------------------------------

  // // Первично загружаются первые 6 карточек
  // const startProductsArr = productsArr.slice(0, 6);
  //
  // // Отрисовка первичных картчоек при загрузке страницы
  // window.addEventListener("load", () => createCard (startProductsArr));
  //
  // let loadedCards = 6; // С номерка какой карточки в массиве начать "ленивую" загрузку
  // let cardsPerPage = 6; // Сколько карточек будет прибавляться при "ленивой" загрузке
  //
  // function lazyLoadingCards (products) {
  //   const windowsHeight = window.innerHeight;
  //   const documentHeight = document.body.offsetHeight;
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //
  //   if (windowsHeight + scrollTop >= documentHeight - 500) {
  //     const renderedCards = products.slice(loadedCards, loadedCards+cardsPerPage);
  //     loadedCards += renderedCards.length;
  //       createCard (renderedCards);
  //   }
  // };
  //
  // window.addEventListener("scroll", () => lazyLoadingCards(productsArr));

const quizData = [
  {
    number: 1,
    title: "В какое помещение будет устанавливаться кондиционер?",
    answer_alias: "room",
    answers: [
      {
        answer_title: "Жилое помещение",
        type: "checkbox"
      },
      {
        answer_title: "Нежилое помещение",
        type: "checkbox"
      },
    ]
  },

  {
    number: 2,
    title: "Какой тип кондиционера вы хотели бы установить в помещении?",
    answer_alias: "type",
    answers: [
      {
        answer_title: "Настенный",
        type: "checkbox"
      },
      {
        answer_title: "Мульти сплит-система",
        type: "checkbox"
      },
      {
        answer_title: "Потолочный",
        type: "checkbox"
      },
      {
        answer_title: "Напольнный",
        type: "checkbox"
      },
      {
        answer_title: "Канальный",
        type: "checkbox"
      },
      {
        answer_title: "Кассетный",
        type: "checkbox"
      },
      {
        answer_title: "Колонный",
        type: "checkbox"
      },
      {
        answer_title: "Не знаю",
        type: "checkbox"
      },
    ]
  },

  {
    number: 3,
    title: "Укажите площадь помещения в м2?",
    answer_alias: "area",
    answers: [
      {
        answer_title: "10-20",
        type: "checkbox"
      },
      {
        answer_title: "20-30",
        type: "checkbox"
      },
      {
        answer_title: "30-40",
        type: "checkbox"
      },
      {
        answer_title: "50-70",
        type: "checkbox"
      },
      {
        answer_title: "70-100",
        type: "checkbox"
      },
      {
        answer_title: "100-150",
        type: "checkbox"
      },
      {
        answer_title: "Свыше 150",
        type: "checkbox"
      },
    ]
  },

  {
    number: 4,
    title: "Нужен ли монтаж?",
    answer_alias: "installation",
    answers: [
      {
        answer_title: "Да",
        type: "radio"
      },
      {
        answer_title: "Нет",
        type: "radio"
      },
    ]
  },

];

const quizTemplate = (data = [], dataLength, options) => {

  const {number, title} = data;
  const {nextBtnText} = options;
  const answers = data.answers.map(item => {
    return `

    <label class="quiz-question__label">
        <input type="${item.type}" data-valid="false" class="quiz-question__answer" name="${data.answer_alias}" ${item.type === "text" ? "placeholder='Введите ваш вариант'" : ''} value="${item.type !== 'text' ? item.answer_title : ''}">
        <span>${item.answer_title}</span>
    </label>
    `;
  });

  return `
  <div class="quiz__content">
    <div class="quiz__questions">${number} из ${dataLength}</div>
    <div class="quiz-question">
        <h3 class="quiz-question__title">${title}</h3>
        <div class="quiz-question__answers">
        ${answers.join("")}
        </div>
        <button type="button" class="quiz-question__btn btn red" data-next-btn>${nextBtnText}</button>
    </div>
  </div>
  `
};

//quizTemplate(quizData[0], quizData.length)
//const quiz = document.querySelector(".quiz");
//quiz.innerHTML = quizTemplate(quizData[0], quizData.length);

class Quiz {
  constructor(selector, data, options) {
    this.$el = document.querySelector(selector);
    this.options = options;
    this.data = data;
    this.counter = 0; // Номер вопроса
    this.dataLength = this.data.length;
    this.resultArray = [];
    this.init();
    this.events();
  }

  init() {
    console.log("init!");
    this.$el.innerHTML = quizTemplate(quizData[this.counter], this.dataLength, this.options);
  }

  events() {
    this.$el.addEventListener("click", (evt) => {
      if (evt.target === document.querySelector("[data-next-btn]")) {
        this.nextQuestion();
      }
      if (evt.target === document.querySelector('[data-send]')) {
        this.send();
      }
    });
  }

  nextQuestion() {
    console.log("next question!");

    if (this.counter + 1 < this.dataLength) {
      this.counter++;
      this.$el.innerHTML = quizTemplate(quizData[this.counter], this.dataLength, this.options);

      if (this.counter + 1 === this.dataLength) {
        this.$el.insertAdjacentHTML("beforeend", `<button class="btn black" type="submit" data-send>${this.options.sendBtnText}</button>`);
        this.$el.querySelector("[data-next-btn]").remove();
      }
    }
  }

  send() {
    console.log("send")
  }

};



// window.quiz = new Quiz(".quiz", quizData, {
//   nextBtnText: "Далее",
//   sendBtnText: "Отправить",
// });



function createSimilarSlider () {
  const swiperSimilar = document.querySelector('.similar__slider');
  const mySwiper = new Swiper(swiperSimilar, {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,

    // Ширина экрана
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      380: {
        slidesPerView: 1.5,
        spaceBetween: 16,
      },
      480: {
        slidesPerView: 2.2,
        spaceBetween: 16,
      },

      640: {
        slidesPerView: 2.8,
        spaceBetween: 16,
      },

      768: {
        slidesPerView: 3.3,
        spaceBetween: 16,
      },

      1100: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    }
  });
}


function createCardSimilar (products) {
  const similar = document.querySelector('.similar');
  const productProfile = document.querySelector(".product-profile");
  if (similar && productProfile) {
    productProfile.insertAdjacentElement('afterEnd', similar);

    const cardSimilarTemplate = document.querySelector('#template-card-similar').content.querySelector('.card-popular.swiper-slide');
    const swiperWrapperSimilar = document.querySelector('.similar__slider .swiper-wrapper');
    const area = +productProfile.dataset.area;
    const type = productProfile.dataset.type;
    const title = productProfile.dataset.title;
    const isInverter = productProfile.dataset.inverter === "true";
    const coeff = 0.2;

    products.forEach(product => {
      const typeMatching = type === product.type;
      const minProductArea = product.area - product.area*coeff;
      const maxProductArea = product.area + product.area*coeff;

      if (area >= minProductArea && area <= maxProductArea && typeMatching && title !== product.title && isInverter === product.inverter) {
        const similarItem = cardSimilarTemplate.cloneNode(true);
        fillingSliderCard(similarItem, product, swiperWrapperSimilar);
        handlerCart();
      }
    });
    createSimilarSlider();

    const hasSimilarProducts = similar.querySelectorAll(".card-popular");
    if (!hasSimilarProducts.length) similar.hidden = true;
  } else {
    similar.hidden = true;
  }
};

//Стили пишите сами!!!!
//Картинки и звуки качайте сами!


window.$ = (el) => {
  if(document.querySelector(el) !== null) return document.querySelector(el)
  // else console.warn(`${el} не найдем в дом дереве`);
};

window.$$ = (el) => {
  if(document.querySelectorAll(el) !== null) return document.querySelectorAll(el)
};


window.soundPush = (url) => {

    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = url; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
    audio.volume = 0.7
    $('body').appendChild(audio)

    audio.addEventListener("ended",e => {
      stopAudio()
      audio.remove()
    })

    return url
  }



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let timeNow = new Date().toLocaleTimeString();

   const token = `6642495645:AAH-ok6fz2lzVfvqxbQgNyeKS6OTx3jc0uQ`;

   const chatId = `-1001965199100`;  //получаем при вызове https://api.telegram.org/bot{token}/getupdates в браузере

  let startChat = false

  let lastMessId , FirstMessId, newMessId, checkReply, Timer , count;

  const idStart = getRandomInt(999);

  const manager = 'Александр'

  let tpl = `<div class="chat__wrap">
  <div class="chat__title">Онлайн-чат
  <div class="btm__close chat__close">&times;</div>
  </div>
  <div class="chat__body">
  <div class="chat__body__item chat__body__item__manager">
  <img class="chat__body__item__user__icon cards__theme" src="img/refs/avatars/ava.png" alt="аватарка менеджера">
  <span class="chat__body__item__user">${manager} на связи 🤙</span>
  <span class="chat__body__item__text">Салют! Какой вопрос?</span>
  <i class="chat__body__item__time">${timeNow}</i>
  </div>
  </div>
  <div class="chat__input">
      <div class="chat__input__message">
          <textarea rows="1" wrap="on" type="text" class="chat__main__input" aria-label="Напишите сообщение" placeholder="Напишите сообщение" required ></textarea>
      </div>
      <img class="chat__input__submit" src="img/icons/sent.svg" alt="Отправить" />
  </div>

  </div>`;


   class TelegaChat {
    open() {

      if (window.innerWidth < 768) $("body").classList.add('overflow__hidden')

      if (!$(".chat__wrap")) $("body").insertAdjacentHTML("afterbegin", tpl);

      let store = localStorage.getItem("historyMessages");

      if (store !== null) {
        $(".chat__body").innerHTML = store;
      }

      $(".chat__main__input").onkeypress = (e) => {
        if (e.key === `Enter`) this.submit();
        if(e.target.value !== '') $(".chat__main__input").classList.remove('validate__error')
      };

      $(".chat__input__submit").onclick = () => this.submit();

      $(".chat__close").onclick = () => this.close()

      $(".chat__body").scrollTop = 100000;

      $(".chat__wrap").classList.add("open");

      setTimeout(() => {
        $('.chat__main__input').focus()
      }, 1000);


      axios
        .get(`https://api.telegram.org/bot${token}/getupdates`)

        .then((r) => {
          lastMessId = r.data.result[r.data.result.length - 1].message.message_id;
          FirstMessId = lastMessId
        })
        .catch(r=>{
          return ``
        })

      this.deleteItem()

    }

    close() {
      clearInterval(Timer)
      $(".chat__wrap").classList.remove("open");
      if (window.innerWidth < 768) $("body").classList.remove('overflow__hidden')
    }
    deleteItem(){
      $$('.chat__body__item').forEach(el => {

        if(el.querySelector('.chat__body__item__delete')) el.querySelector('.chat__body__item__delete').onclick = () => {
            el.remove()
            localStorage.setItem("historyMessages", $(".chat__body").innerHTML);
        }
    });
    }



    submit() {
      let val = $(".chat__main__input").value;
      if (val !== ``) {
        $('.chat__main__input').classList.remove('validate__error')
        let tplItemClient = `<div class="chat__body__item chat__body__item__client">
        <div class="btm__close chat__body__item__delete cards__theme">×</div>
        <img class="chat__body__item__user__icon cards__theme" src="img/icons/user.svg" alt="аватарка user">
      <span class="chat__body__item__user">Вы</span>
      <span class="chat__body__item__text">${val}</span>
      <i class="chat__body__item__time">${timeNow}</i></div>`;

        $(".chat__body").innerHTML += tplItemClient;

        $(".chat__body").scrollTop = 100000;

        axios.get(
          `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=User:${idStart}
          ${val}`
        );

        //soundPush("/sound/set-whatsapp.mp3");

        localStorage.setItem("historyMessages", $(".chat__body").innerHTML);

        setTimeout(() => {
          $(".chat__main__input").value = ``.trim();
        }, 0);
      } else {

        alert( `Введите текст`)

        // shakeForm($('.chat__main__input'))
      }
      this.deleteItem()

      Timer = setInterval(() => this.checkResponse(), 3000);

      if (typeof ym === "function" && startChat === false) {
        ym(49104928, "reachGoal", "start__chat");
        startChat = true
      }

      $(".chat__main__input").value = ``

    }

    checkResponse() {

      count++

      if(count > 120 && lastMessId === FirstMessId) clearInterval(Timer)

      axios
        .get(`https://api.telegram.org/bot${token}/getupdates`)
        .then((r) => {

          let resLastMess = r.data.result[r.data.result.length - 1].message
          if(resLastMess.reply_to_message !== undefined) checkReply = resLastMess.reply_to_message.text.includes(idStart)
          else checkReply = false

          newMessId = resLastMess.message_id;

          // console.log(FirstMessId, lastMessId , newMessId, checkReply);

          if (newMessId > lastMessId && checkReply) {

            let Text = r.data.result[r.data.result.length - 1].message.text;

            let tplItemMenager = `<div class="chat__body__item chat__body__item__manager">
            <div class="btm__close chat__body__item__delete cards__theme">×</div>
            <img class="chat__body__item__user__icon cards__theme" src="img/refs/avatars/ava.png" alt="аватарка менеджера">
            <span class="chat__body__item__user">${manager}</span>
              <span class="chat__body__item__text">${Text}</span>
              <i class="chat__body__item__time">${timeNow}</i></div>`;

            $(".chat__body").innerHTML += tplItemMenager;

            this.deleteItem()

            //soundPush("/sound/get-whatsapp.mp3");

            localStorage.setItem("historyMessages", $(".chat__body").innerHTML);

            $(".chat__body").scrollTop = 100000;

            lastMessId = newMessId

          }
        })
        .catch(r=>{
          return ``
        })
    }
  }


//Ниже закоментирована старая версия

// window.$ = (el) => document.querySelector(el);

// let timeNow = new Date().toLocaleTimeString()

// let token = `тут токен бота` //получаем при создании бота

// let chatId = `тут id чата` //получаем при вызове https://api.telegram.org/bot{token}/getupdates в браузере

// let botId = `тут bot id`


// let lastMesText,lastMesTime,nowMesTime,chatUpdater

// let tpl = `
// <div class="chat__wrap">
// <div class="chat__title">Online Чат
// <div class="btm__close chat__close">&times;</div>
// </div>
// <div class="chat__body">
// <div class="chat__body__item chat__body__item__manager">
// <span class="chat__body__item__user">Менеджер</span>
// <span class="chat__body__item__text">Здравствуйте какой у вас вопрос?</span>
// <i class="chat__body__item__time">${timeNow}</i>
// </div>
// </div>
// <div class="chat__input">
//     <div class="chat__input__message">
//         <textarea type="text" class="chat__main__input" aria-label="Напишите сообщение" placeholder="Напишите сообщение" required></textarea>
//     </div>
//     <button class="chat__input__submit" aria-label="Отправить сообщение" style="background-image:url('img/angle-up.svg')"></button>
// </div>

// </div>`;



// class TelegaChat {

// init(){


//     $('body').insertAdjacentHTML( 'afterbegin', tpl)

//     let store = localStorage.getItem("historyMessages");

//     if (store !== null) {
//       $('.chat__body').innerHTML = store
//     }

//     $('.chat__main__input').addEventListener('keypress', (e)=>{

//       if(e.key === `Enter`) this.submit();

//     })

//     $(".chat__input__submit").onclick = () => this.submit();



//   }



//   open() {

//         $(".chat__close").addEventListener("click", (e) =>this.close());

//         $(".chat__body").scrollTop = 100000;

//         $('.chat__wrap').classList.add('open')

//         axios.get(`https://api.telegram.org/bot${botId}:${token}/getupdates`)

//         .then(r=>{

//           lastMesTime = r.data.result[r.data.result.length - 1].message.date

//         })

//         if(typeof ym === 'function') ym(49104928,'reachGoal','chat-open')

//         chatUpdater =  setInterval(() => this.checkResponse(),1000)

//   }

//   close() {
//     $('.chat__wrap').classList.remove('open')
//     // clearInterval(chatUpdater);
//   }

//   submit() {

//     //отправка сообшения клиентом

//     let val = $(".chat__main__input").value;

//     if(val !== ``) {


//     let tplItemClient = `<div class="chat__body__item chat__body__item__client">
//     <span class="chat__body__item__user">Вы</span>
//     <span class="chat__body__item__text">${val}</span>
//     <i class="chat__body__item__time">${timeNow}</i></div>`;


//     $('.chat__body').innerHTML += tplItemClient;

//     $(".chat__main__input").value = ``.trim()

//     $(".chat__body").scrollTop = 100000;

//     axios.get(`https://api.telegram.org/bot${botId}:${token}/sendMessage?chat_id=${chatId}&text=${val}`)

//     // soundPush('/sound/set.mp3'); //эта функция вызова звука (звук уведомления об отправке и получение сообшения) есть у меня в репе --- https://github.com/themaltsev/open-plugins/blob/master/add-sound.js

//   }
//   else {
//     alert(`Введите текст`)
//   }
// }

//   checkResponse() {

//       axios.get(`https://api.telegram.org/bot${botId}:${token}/getupdates`)
//         .then((r) => {

//           nowMesTime = r.data.result[r.data.result.length - 1].message.date

//           if(nowMesTime !== lastMesTime) {

//           //клиент получает сообщение

//           lastMesTime = nowMesTime

//           let Text = r.data.result.pop().message.text

//             let tplItemMenager = `<div class="chat__body__item chat__body__item__manager">
//             <span class="chat__body__item__user">Менеджер</span>
//             <span class="chat__body__item__text">${Text}</span>
//             <i class="chat__body__item__time">${timeNow}</i></div>`;

//             $(".chat__body").innerHTML += tplItemMenager;

//            if(localStorage) localStorage.setItem("historyMessages", $(".chat__body").innerHTML);

//             $('.chat__wrap').classList.contains('open')? ``: alert(`Сообщение: ${Text}`)

//             $(".chat__body").scrollTop = 100000;

//             // soundPush('/sound/get.mp3'); // эта функция вызова звука (звук уведомления об отправке и получение сообшения) есть у меня в репе --- https://github.com/themaltsev/open-plugins/blob/master/add-sound.js

//         }
//         });


//   }
// }


// new TelegaChat().init()

const gotTopButton = document.querySelector('.go-top');

if (gotTopButton) {

  gotTopButton.addEventListener('click', goTop);
  window.addEventListener('scroll', trackScroll);

  function goTop () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  };

  function trackScroll () {
    const offset = window.scrollY;
    const coords = document.documentElement.clientHeight;
    gotTopButton.classList.toggle('js-scroll-show', offset > 2 * coords);
  };

}
