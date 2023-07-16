
{

  let mySwiper;

  const swiperAbout = document.querySelector('.about__slider');

      mySwiper = new Swiper(swiperAbout, {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          types: "bullets",
        },

        // Откл функционала, если слайдов меньше, чем нужно
        watchOverflow: true,

        // Брейк поинты (адаптив)
        // Ширина экрана
        breakpoints: {
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          480: {
            slidesPerView: 1.3,
            spaceBetween: 16,
          },

          640: {
            slidesPerView: 1.5,
            spaceBetween: 32,
          },

          768: {
            slidesPerView: 2.2,
            spaceBetween: 32,
          },

          1100: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }

      });

}

const filter = document.querySelector('.filter');

if (filter) {

  const filterItems = filter.querySelectorAll('.filter__item-title');

  filterItems.forEach(filterItem => {
    filterItem.addEventListener('click', () => {
      filterItem.classList.toggle('js-filter-open');
    })
  });


  const filterBtn = filter.querySelector('.filter__icon');
  const closeFilter = filter.querySelector('.filter__close');

  filterBtn.addEventListener('click', () => {
    filterBtn.classList.add('js-filter-open')
  });

  closeFilter.addEventListener('click', () => {
    filterBtn.classList.remove('js-filter-open');
  })



}



const header = document.querySelector('header.header');
const menu = header.querySelector('.header__nav');
const burger = header.querySelector('.header__burger');
const menuClose = header.querySelector('.header__nav-close');

burger.addEventListener('click', () => {
  menu.classList.add('js-menu-open');
  blockScrollBody();
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('js-menu-open');
  unblockScrollBody();
});




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



const html = document.querySelector('html');

const classBlockScroll = "js-block-scroll";

function blockScrollBody () {
  if ( !html.classList.contains(classBlockScroll) ) {
    html.classList.add(classBlockScroll);
  }
};

function unblockScrollBody () {
  if ( html.classList.contains(classBlockScroll) ) {
    html.classList.remove(classBlockScroll);
  }
};


