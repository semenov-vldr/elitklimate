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


