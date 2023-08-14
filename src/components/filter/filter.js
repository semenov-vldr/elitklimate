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





  // ------- Фильтрация ---

  const productsGrid = document.querySelector(".products__grid");

  const filterPrice = form.querySelector(".filter__item--price");
  const filterArea = form.querySelector(".filter__item--area");

  const filterInverter = form.querySelector(".filter__item--inverter");

  // -- filter price --

  const minPriceInput = filterPrice.querySelector(".filter__price-min");
  const maxPriceInput = filterPrice.querySelector(".filter__price-max");

  //minPriceInput.addEventListener("input", filterPriceCards);
  //maxPriceInput.addEventListener("input", filterPriceCards);

  // function filterPriceCards () {
  //   const minPriceValue = parseFloat(minPriceInput.value); // Введенное значение
  //   const maxPriceValue = parseFloat(maxPriceInput.value);
  // }


  // -- filter company --
    const filterCompany = form.querySelector(".filter__item--company");
    if (filterCompany) {
      const companyCheckboxes = filterCompany.querySelectorAll("input[type='checkbox']");
      let selectedCompanies = [];
      companyCheckboxes.forEach(companyCheckbox => {
        companyCheckbox.addEventListener('change', function () {
          if (this.checked) {
            selectedCompanies.push(this.value);
          } else {
            selectedCompanies = selectedCompanies.filter(el => el !== this.value);
          }
          const filteredCompanyArray = new Set(selectedCompanies)
        });
      });
    }



  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    productsGrid.replaceChildren();
    renderCard(productsArr.slice(0, 3))
  });




}


