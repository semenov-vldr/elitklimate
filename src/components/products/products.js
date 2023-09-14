function createShowMoreBtn () {
  const productsGrid = document.querySelector(".products__grid");
  const showMoreBtn = document.createElement("button");
  showMoreBtn.textContent = "Показать еще";
  showMoreBtn.classList.add("show-more");
  productsGrid.parentNode.appendChild(showMoreBtn);
  return showMoreBtn;
};

// Создание массива карточек товара в соответствии с данными из массива объектов
function renderCard (products) {
  const productsGrid = document.querySelector(".products__grid");
  const cardTemplate = document.querySelector('#card-template').content.querySelector('.card');

  if (!productsGrid && !cardTemplate) return;

    productsGrid.replaceChildren();

    //const showMoreBtn =  createShowMoreBtn();

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
