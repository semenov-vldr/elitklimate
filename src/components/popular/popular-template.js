// Список артикулов товаров, которые выводятся в блоке (слайдере) "Популярное"
const articlesPopularCards = ["dahatsu-dhp-07", "dahatsu-da-07h", "lg-p07sp2", "dahatsu-dhp-09", "eurohoff-ev-09", "dahatsu-dh-kn-18ch"];

const popular = document.querySelector('.popular');

if (popular) {

  const cardPopularTemplate = document.querySelector('#template-card-popular').content.querySelector('.card-popular.swiper-slide');
  const swiperWrapperPopular = document.querySelector('.popular__slider .swiper-wrapper');

  // Создание карточек товара для блока "Популярное", используется общий массив данных товара.
  // Для выбора карточек в функцию передается массив с артикулами товара
  function createCardPopular (products, articles) {

    products.forEach(product => {

      articles.forEach(article => {
        if (product.article === article) {
          const popularItem = cardPopularTemplate.cloneNode(true);
          fillingSliderCard(popularItem, product, swiperWrapperPopular);
          handlerCart();
        }
      });
    });
  };

  createCardPopular(productsArr, articlesPopularCards);
}
