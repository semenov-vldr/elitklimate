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
