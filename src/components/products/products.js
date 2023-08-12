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

  createCard (productsArr)

}


