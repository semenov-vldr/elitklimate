
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
    filterBtn.classList.add('js-filter-open');
    blockScrollBody();
  });

  closeFilter.addEventListener('click', () => {
    filterBtn.classList.remove('js-filter-open');
    unblockScrollBody();
  });



  // Добавление кнопки на моб.версии---------------

  const form = filter.querySelector('.filter__form');
  const btnForm = form.querySelector('.filter__form-submit');


  const visibleBtn = () => btnForm.classList.add('js-visible');
  const hiddenBtn = () => btnForm.classList.remove('js-visible');

  //checkboxes----------------------------
  const checkboxesForm = form.querySelectorAll('input[type="checkbox"]');

  function isSelectedCheckbox (checkboxes) {
    return Array.from(checkboxes).some(checkbox => checkbox.checked);
  };


  // Selects-----------------
  const selectsForm = form.querySelectorAll('select');

  function isSelectedOption (selects) {
    return Array.from(selects).some(select => select.selectedIndex !== 0);
  };

  // Inputs price-----------------
  const inputsNumberForm = form.querySelectorAll('input[type="number"]');

  function isEnteredPrice (inputsNumber) {
    return Array.from(inputsNumber).some(inputNumber => inputNumber.value !== "");
  };

  // Radio-----------------
  const radiosForm = form.querySelectorAll('input[type="radio"]');

  function isSelectedRadio (radioBtns) {
    return Array.from(radioBtns).some(radioBtn => radioBtn.checked);
  };


  form.addEventListener('change', () => {
    ( isSelectedCheckbox(checkboxesForm)
      || isSelectedOption(selectsForm)
      || isEnteredPrice(inputsNumberForm)
      || isSelectedRadio(radiosForm) ) ? visibleBtn() : hiddenBtn();
  });



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


const API_DAHATSU = "./assets/json/dahatsu.json";
const API_DENKO = "./assets/json/denko.json";
const API_EUROHOFF = "./assets/json/eurohoff.json";
const API_HISENSE = "./assets/json/hisense.json";
const API_KENTATSU = "./assets/json/kentatsu.json";
const API_LG = "./assets/json/lg.json";
const API_MIDEA = "./assets/json/midea.json";

//const API_COMBI = [API_DAHATSU, API_DENKO, API_EUROHOFF, API_HISENSE, API_KENTATSU, API_LG, API_MIDEA];
const API_COMBI = [API_DAHATSU, API_DENKO];

const arr = [];

function getProductCards (API) {
  return fetch(API)
    .then(responce => responce.json())
    .then(cards => {
      arr.push(cards);
      console.log(arr.flat());
    })
    .catch(() => console.log('Ошибка при загрузке данных'));
};


API_COMBI.forEach(api => {
    getProductCards(api)
})




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


