function handlerCart () {
  const cards = document.querySelectorAll('.card, .card-popular');
  console.log(cards)

  if (cards) {
    cards.forEach(card => {
      const cartBtn = card.querySelector(".cart-btn");
      //const cardTitle = card.querySelector(".card-popular__title").innerText || card.querySelector(".card__title").innerHTML;
      //const cardPrice = card.querySelector(".card-popular__price").innerHTML || card.querySelector(".card__price").innerHTML;
      //const cardImg = card.querySelector(".card-popular__img").src || card.querySelector(".card__img").src;

      const cardTitle = card.querySelector(".card__title").textContent;
      const cardPrice = +card.querySelector(".card__price").textContent.replace(/\s/g, "")
                        .replace(/^\D+/g, '').match(/\d+/);


      cartBtn.addEventListener("click", () => {
        console.log('cart')
        const cartStorage = localStorage.getItem("cart") || "[]";
        const cart =  JSON.parse(cartStorage); // Массив товаров в корзине
        const card = { cardTitle, cardPrice };
        localStorage.setItem("cart", JSON.stringify([...cart, card]));
      })
    })
  }
}






