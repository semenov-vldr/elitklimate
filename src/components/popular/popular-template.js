// Список артикулов товаров, которые выводятся в блоке (слайдере) "Популярное"
const articlesPopularCards = ["dahatsu-da-07h", "dahatsu-da-09h", "dahatsu-da-09i", "dahatsu-da-18i",
  "dahatsu-dhp-07", "dahatsu-dhp-09", "dahatsu-dhp-12", "dahatsu-dhp-18", "dahatsu-dhp-24", "lg-p07sp2", "lg-p09sp2",
"lg-p12sp", "lg-p18sp", "dahatsu-ds-07i", "dahatsu-ds-09i", "dahatsu-ds-12i", "dahatsu-ds-18i", "dahatsu-ds-24i", "denko-dni-07", "denko-dni-09"];

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
