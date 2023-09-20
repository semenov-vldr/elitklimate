function createSimilarSlider () {
  const swiperSimilar = document.querySelector('.similar__slider');
  const mySwiper = new Swiper(swiperSimilar, {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,

    // Ширина экрана
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      380: {
        slidesPerView: 1.5,
        spaceBetween: 16,
      },
      480: {
        slidesPerView: 2.2,
        spaceBetween: 16,
      },

      640: {
        slidesPerView: 2.8,
        spaceBetween: 16,
      },

      768: {
        slidesPerView: 3.3,
        spaceBetween: 16,
      },

      1100: {
        slidesPerView: 4,
        spaceBetween: 32,
      },
    }
  });
}

