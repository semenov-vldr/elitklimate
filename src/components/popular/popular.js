{

  let mySwiper;

  const swiperPopular = document.querySelector('.popular__slider');

  mySwiper = new Swiper(swiperPopular, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Откл функционала, если слайдов меньше, чем нужно
    watchOverflow: true,

    // Брейк поинты (адаптив)
    // Ширина экрана
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 16,
      },
      380: {
        //slidesPerView: 1.4,
        slidesPerView: "auto",
        spaceBetween: 16,
      },
      480: {
        slidesPerView: "auto",
        spaceBetween: 16,
      },

      640: {
        slidesPerView: "auto",
        spaceBetween: 32,
      },

      1100: {
        slidesPerView: "auto",
        spaceBetween: 32,
      },
    }

  });

}
