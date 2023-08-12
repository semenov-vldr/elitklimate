const mainProducts = document.querySelector(".products.products--main");

if (mainProducts) {

  const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');
  const productsGrid = mainProducts.querySelector(".products__grid");

  function createCard (products) {
    products.forEach(product => {

      const cardItem = cardTemplate.cloneNode(true);

      cardItem.querySelector('.card__link').href = product.link;
      cardItem.querySelector('.card__img').src = product.imgSrc[0];
      cardItem.querySelector('.card__title').textContent = product.title;
      cardItem.querySelector('.card__price').textContent = `${product.price.toLocaleString("ru")} ₽`;
      cardItem.querySelector('.card__data-item-value--area').textContent = `${product.area} м²`;
      cardItem.querySelector('.card__data-item-value--coolingCapacity').textContent = `${product.coolingCapacity} кВт`;
      cardItem.querySelector('.card__data-item-value--noise').textContent = `${product.noise} дБ`;
      cardItem.querySelector('.card__data-item-value--inverter').textContent = `${product.inverter ? "Есть" : "Нет"}`;

      productsGrid.appendChild(cardItem);
    });
  };



  const startProductsArr = productsArr.slice(0, 6);

  // Отрисовка первичных картчоек при загрузке страницы
  window.addEventListener("load", () => createCard (startProductsArr));

  let loadedCards = 6; // С номерка какой карточки в массиве начать "ленивую" загрузку
  let cardsPerPage = 6; // Сколько карточек будет прибавляться при "ленивой" загрузке

  function lazyLoadingCards (products) {
    const windowsHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (windowsHeight + scrollTop >= documentHeight - 500) {
      const renderedCards = products.slice(loadedCards, loadedCards+cardsPerPage);
      loadedCards += renderedCards.length;

        createCard (renderedCards);

      //createCard (renderedCards);

      // console.log("products.length", products.length);
      // console.log("loadedCards", loadedCards);
    }

    if (loadedCards === products.length) {
      console.log('stop')
      return true;
    }

  };

  window.addEventListener("scroll", () => {
    lazyLoadingCards(productsArr);

    if (lazyLoadingCards(productsArr)) {
      console.log('stop stop stop')
    }
  });




}


