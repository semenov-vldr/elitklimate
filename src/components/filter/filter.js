const filter = document.querySelector('.filter');

if (filter) {

  const filterItems = filter.querySelectorAll('.filter__item-title');

  const filterOpen = (filter) => filter.classList.add('js-filter-open');
  const filterHide = (filter) => filter.classList.remove('js-filter-open');

  // Показ/скрытие элементов фильтра
  filterItems.forEach(filterItem => {
    filterItem.addEventListener('click', () => {
      filterItem.classList.toggle('js-filter-open');

      // Скрыть все, кроме активного
      const inactiveFilters = Array.from(filterItems).filter(el => el !== filterItem);
      inactiveFilters.forEach(filterHide);

      // Скрыть по клику вне блока фильтра
      document.addEventListener('click', function (evt) {
        if (!evt.target.closest('.filter__item')) {
          filterItems.forEach(filterHide);
        }
      });
    });
  });

  const filterBtn = filter.querySelector('.filter__icon');
  const closeFilter = filter.querySelector('.filter__close');

  filterBtn.addEventListener('click', () => {
    filterOpen(filterBtn);
    blockScrollBody();
  });

  closeFilter.addEventListener('click', () => {
    filterHide(filterBtn);
    unblockScrollBody();
  });



  // --------------- Добавление кнопки на моб.версии ---------------

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





  // ------- Фильтрация ---------


  const minPriceInput = form.querySelector(".filter__price-min");
  const maxPriceInput = form.querySelector(".filter__price-max");
  const selectArea = form.querySelector(".filter__item--area select")
  const filterInverter = form.querySelector(".filter__item--inverter");


  // form.addEventListener("submit", (evt) => {
  //   evt.preventDefault();
  //   productsGrid.replaceChildren();
  //   renderCard(productsArr.slice(0, 3))
  // });


  // -----------------------------------------------------------------------------------------------
  {
  const blockSplitSystems = document.querySelector(".products.products--split-systems");
  const blockFloorCeiling = document.querySelector(".products.products--floor-ceiling");
  const blockDucted = document.querySelector(".products.products--ducted");
  const blockCassette = document.querySelector(".products.products--cassette");
  const blockColumn = document.querySelector(".products.products--column");
  const blockMultiSplitSystems = document.querySelector(".products.products--multi-split-systems");

// Массивы товаров (объектов) по соответствующим категорям
  const splitSystems_Products = renderProductsOfCategory(blockSplitSystems, "split-system"); // Сплит-системы
  const floorCeiling_Products = renderProductsOfCategory(blockFloorCeiling, "floor-ceiling"); // Напольно-потолочные
  const ducted_Products = renderProductsOfCategory(blockDucted, "ducted"); // Канальные
  const cassettes_Products = renderProductsOfCategory(blockCassette, "cassette"); // Кассетные
  const column_Products = renderProductsOfCategory(blockColumn, "column"); // Колонные
  const multiSplitSystems_Products = renderProductsOfCategory(blockMultiSplitSystems, "multi-split-systems"); // Мульти сплит-системы

  // const filteredProductsByCategory = [
  //   splitSystems_Products,
  //   floorCeiling_Products,
  //   ducted_Products,
  //   cassettes_Products,
  //   column_Products,
  //   multiSplitSystems_Products
  // ];

  const blockCategoryArray = [
    blockSplitSystems,
    blockFloorCeiling,
    blockDucted,
    blockCassette,
    blockColumn,
    blockMultiSplitSystems
  ];

    // -- <sorting cards> --
    // const filterSortingSelect = filter.querySelector(".filter__sorting select");
    // filterSortingSelect.addEventListener("change", sortingCards);
    //
    // if (filterSortingSelect) window.addEventListener("load", sortingCards);
    //
    // function sortingCards () {
    //   const productsGrid = document.querySelector(".products__grid");
    //   const productCards = Array.from(document.querySelectorAll(".products .card"));
    //
    //   // Сначала дешевле
    //   const sortingCheaperProductCards = [...productCards].sort((a, b) => {
    //     return +a.dataset.price - +b.dataset.price;
    //   });
    //   // Сначала дороже
    //   const sortingExpensiveProductCards = [...productCards].sort((a, b) => {
    //     return +b.dataset.price - +a.dataset.price;
    //   });
    //   // Алфавиту
    //   const sortingAlphabetProductCards = [...productCards].sort((a, b) => {
    //     return a.dataset.article.localeCompare(b.dataset.article);
    //   });
    //
    //   productsGrid.replaceChildren();
    //
    //   switch (filterSortingSelect.value) {
    //     // Алфавиту
    //     case "initial":
    //       sortingAlphabetProductCards.forEach(card => productsGrid.appendChild(card));
    //       break;
    //     // Дешевле
    //     case "cheaper":
    //       sortingCheaperProductCards.forEach(card => productsGrid.appendChild(card));
    //       break;
    //     // Дороже
    //     case "expensive":
    //       sortingExpensiveProductCards.forEach(card => productsGrid.appendChild(card));
    //       break;
    //     default:
    //       sortingAlphabetProductCards.forEach(card => productsGrid.appendChild(card));
    //   };
    // };
    // -- </sorting cards> --


    function applyFilters () {
      const minPrice = +minPriceInput.value;
      const maxPrice = +maxPriceInput.value;
      const checkboxesCompany = Array.from(document.querySelectorAll(".filter__item--company input[type='checkbox']:checked"));
      const selectedArea = selectArea.value;

      console.log(checkboxesCompany)

      const filteredData = productsArr.filter(productItem => {
        let passesFilter = true;
        if (minPrice && productItem.price < minPrice) passesFilter = false;
        if (maxPrice && productItem.price > maxPrice) passesFilter = false;
        if (checkboxesCompany.length && !checkboxesCompany.some(checkbox => checkbox.value === productItem.company)) {
          passesFilter = false;
        }
        if (selectedArea && productItem.area !== selectedArea) passesFilter = false;
        return passesFilter;
      });

      renderCard(filteredData);
    };


     minPriceInput.addEventListener("input", applyFilters);
     maxPriceInput.addEventListener("input", applyFilters);
     selectArea.addEventListener("change", applyFilters);

    document.querySelectorAll(".filter__item--company input[type='checkbox']").forEach(el => {
      el.addEventListener("change", () => {
        let newArr = productsArr.filter(productItem => el.value === productItem.company );
        renderCard(newArr);
      })
    })


  }
  // -----------------------------------------------------------------------------------------------

}


