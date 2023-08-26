const popular = document.querySelector('.popular');

if (popular) {

  const cardPopularTemplate = document.querySelector('#template-card-popular').content.querySelector('.card-popular.swiper-slide');
  const swiperWrapperPopular = document.querySelector('.popular__slider .swiper-wrapper');

  // Список артикулов товаров, которые выводятся в блоке (слайдере) "Популярное"
  const articlesPopularCards = ["dahatsu-DHP-07", "denko-kr-09", "lg-p07sp2"];

  // Создание карточек товара для блока "Популярное", используется общий массив данных товара.
  // Для выбора карточек в функцию передается массив с артикулами товара
  function createCardPopular (products, articles) {

    products.forEach(product => {

      articles.forEach(article => {
        if (product.article === article) {
          const popularItem = cardPopularTemplate.cloneNode(true);

          popularItem.dataset.article = article;

          popularItem.querySelector('.card-popular__link').href = product.link;
          popularItem.querySelector('.card-popular__img').src = product.imgSrc[0];
          popularItem.querySelector('.card-popular__title').textContent = product.title;
          popularItem.querySelector('.card-popular__price').textContent = `${product.price.toLocaleString("ru")} ₽`;
          popularItem.querySelector('.card-popular__data-item-value--area').textContent = `${product.area} м²`;
          popularItem.querySelector('.card-popular__data-item-value--coolingCapacity').textContent = `${product.coolingCapacity} кВт`;
          popularItem.querySelector('.card-popular__data-item-value--noise').textContent = `${product.noise} дБ`;
          popularItem.querySelector('.card-popular__data-item-value--inverter').textContent = `${product.inverter ? "Есть" : "Нет"}`;

          swiperWrapperPopular.appendChild(popularItem);
        }
      })
    });
  };

  createCardPopular(productsArr, articlesPopularCards);

}


