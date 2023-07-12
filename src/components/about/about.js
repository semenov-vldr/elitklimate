{

  let mySwiper;

  const swiperAbout = document.querySelector('.about__slider');

      mySwiper = new Swiper(swiperAbout, {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        uniqueNavElements: true,

        // Откл функционала, если слайдов меньше, чем нужно
        watchOverflow: true,

        //centeredSlides: true,

        // Отступ между слайдами
        //spaceBetween: 24,

        // Стартовый слайд
        initialSlide: 0,

        // Брейк поинты (адаптив)
        // Ширина экрана
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1.3,
          },

          640: {
            slidesPerView: 1.5,
            spaceBetween: 32,
            initialSlide: 0,
          },

          1100: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }

      });


      // const images = swiper.querySelectorAll('.swiper-slide img');
      // images.forEach(image => {
      //   image.setAttribute('data-src', image.src);
      //   image.setAttribute('data-fancybox', "images-index");
      // });





}
