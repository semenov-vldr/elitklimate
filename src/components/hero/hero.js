// const heroTitle = document.querySelector(".hero__title");
// heroTitle.addEventListener('click', () => {
//   new TelegaChat().open();
// })


{

  const swiperHero = document.querySelector('.hero-slider__container');

  let mySwiper = new Swiper(swiperHero, {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      types: "bullets",
    },
    autoplay: {
      delay: 5000,
    },
    //loop: true,
  });

}
