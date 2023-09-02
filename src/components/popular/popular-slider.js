const swiperPopular = document.querySelector('.popular__slider');

if (swiperPopular) {
setTimeout(createPopularSlider, 0);
}


function createPopularSlider () {
  const mySwiper = new Swiper(swiperPopular, {
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

