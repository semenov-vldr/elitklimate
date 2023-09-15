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
