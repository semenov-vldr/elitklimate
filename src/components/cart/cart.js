const cart = document.querySelector(".cart");

// Получение цены из строки в цифровом виде
function getPriceValue (card) {
  return +card.textContent.replace(/\s/g, "")
    .replace(/^\D+/g, '').match(/\d+/);
};




if (cart) {
  const backBtn = cart.querySelector(".cart__back-btn");
  backBtn.addEventListener("click", () => history.back());

  const cartItems = cart.querySelectorAll(".cart__item");
  cartItems.forEach(cartItem => {
    const cartItemPrice = cartItem.querySelector(".cart-item__price");

    // Delete ------
    const deleteBtn = cartItem.querySelector(".cart-item__delete");
    deleteBtn.addEventListener("click", () => {
      cartItem.remove();
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

  })
}

// Сделать активной иконку "Корзины", если в LocalStorage добавлены товары (даже при обновлении страницы)
const headerCart = document.querySelector(".header__cart");
window.addEventListener("load", () => {
  const cartStorage = JSON.parse( localStorage.getItem("cart") || '[]' );
  if (headerCart) headerCart.classList.toggle("js-add-cart", cartStorage.length > 0);
});

// Всплывающее сообщение о добавлении товара в корзину
function alertSuccessAdd (cardTitle) {
  const div = document.createElement("div");
  div.classList.add("cart__alert");
  div.textContent = `Товар ${cardTitle} добавлен в корзину`;
  header.appendChild(div);
  setTimeout(() => div.remove(), 3000);
};



function handlerCart () {
  const cards = document.querySelectorAll('.card, .card-popular, .product-profile');

  if (cards) {
    cards.forEach(card => {
      const cartBtn = card.querySelector(".cart-btn");
      cartBtn.title = "Добавить в корзину";

      const cardTitle = card.querySelector(".product-title").textContent;
      const cardPrice = getPriceValue( card.querySelector(".product-price") );



      // cartBtn.addEventListener("click", () => {
      //   const cartStorage = localStorage.getItem("cart") || "[]";
      //   const cart =  JSON.parse(cartStorage); // Массив товаров в корзине
      //   const card = { cardTitle, cardPrice };
      //   localStorage.setItem("cart", JSON.stringify([...cart, card]));
      // });

      // Добавление товара в корзину
      function addProductToCart () {
        handlerAddToCart();
        alertSuccessAdd(cardTitle);
      };

      cartBtn.addEventListener("click", addProductToCart);




      // Добавление товара в LocalStorage (коризну)
      function handlerAddToCart () {
        const cartStorage = JSON.parse( localStorage.getItem("cart") || '[]' ); // Получаем элементы корзины из LocalStorage

        const card = { cardTitle, cardPrice };
        localStorage.setItem("cart", JSON.stringify([...cartStorage, card]));

        const cartStorage_OUT = JSON.parse(localStorage.getItem("cart"));
        headerCart.classList.toggle("js-add-cart", cartStorage_OUT.length > 0);
      };


    });
  }
};




