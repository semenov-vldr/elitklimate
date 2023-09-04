// Создание массива карточек товара в соответствии с данными из массива объектов
function renderCard (products) {
  const productsGrid = document.querySelector(".products__grid");
  const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

  if (!productsGrid && !cardTemplate) return

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
    });
    handlerCart();
    filterTabsCards();
};
//---------------

// Отрисовать все карточки товара на главной странице каталога
const productsMain = document.querySelector(".products.products--main");
if (productsMain) renderCard(productsArr);


// Отрисовка карточек на странице выбранной категории в соответствии с категорией
function renderProductsOfCategory (blockCategory, category) {
  if (blockCategory) {
    const categoryArray = productsArr.filter(card => card.type === category);
    renderCard(categoryArray);
    blockCategory.setAttribute("data-category", category);
    return categoryArray;
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
