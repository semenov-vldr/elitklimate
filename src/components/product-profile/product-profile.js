const productProfile = document.querySelector('.product-profile');

if (productProfile) {
  setTimeout(createProductProfileSlider, 0);

const descText = productProfile.querySelector(".product-profile__desc-text");
const showMoreBtn = productProfile.querySelector(".product-profile__desc-show-more-btn");

// Кнопка "Показать больше" для описания
  showMoreBtn.addEventListener("click", () => {
    descText.classList.add("js-show-more");
  });

}

// Слайдер с миниатюрами
function createProductProfileSlider () {

  const swiperTop = productProfile.querySelector('.swiper-top');
  const swiperThumbs = productProfile.querySelector('.swiper-thumbs');

  let swiper__thumbs = new Swiper(swiperThumbs, {
    spaceBetween: 28,
    slidesPerView: "auto",
    freeMode: true,
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    watchOverflow: true,
    initialSlide: 0,
  });

  let swiper__top = new Swiper(swiperTop, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    initialSlide: 0,
    thumbs: {
      swiper: swiper__thumbs,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    }
  });


}

