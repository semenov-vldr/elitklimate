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
