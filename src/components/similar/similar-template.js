function createCardSimilar (products) {
  const similar = document.querySelector('.similar');
  const productProfile = document.querySelector(".product-profile");
  if (similar && productProfile) {
    console.log(productProfile)
    productProfile.insertAdjacentElement('afterEnd', similar);

    const cardSimilarTemplate = document.querySelector('#template-card-similar').content.querySelector('.card-popular.swiper-slide');
    const swiperWrapperSimilar = document.querySelector('.similar__slider .swiper-wrapper');
    const area = +productProfile.dataset.area;
    const type = productProfile.dataset.type;
    const title = productProfile.dataset.title;
    const isInverter = productProfile.dataset.inverter === "true";
    const coeff = 0.2;

    products.forEach(product => {
      const typeMatching = type === product.type;
      const minProductArea = product.area - product.area*coeff;
      const maxProductArea = product.area + product.area*coeff;

      if (area >= minProductArea && area <= maxProductArea && typeMatching && title !== product.title && isInverter === product.inverter) {
        const similarItem = cardSimilarTemplate.cloneNode(true);
        fillingSliderCard(similarItem, product, swiperWrapperSimilar);
        handlerCart();
      }
    });
    createSimilarSlider();

    const hasSimilarProducts = similar.querySelectorAll(".card-popular");
    if (!hasSimilarProducts.length) similar.hidden = true;
  } else {
    similar.hidden = true;
  }
};
