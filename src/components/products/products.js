const products = document.querySelector(".products");

if (products) {

  const filter = products.querySelector('.products__filter');
  const filterItems = filter.querySelectorAll('.products__filter-item-title');

  filterItems.forEach(filterItem => {
    filterItem.addEventListener('click', () => {
      filterItem.classList.toggle('js-filter-open');
    })
  });


  // document.addEventListener("click", function (evt) {
  //   filterItems.forEach(filterItem => {
  //     if ( !filterItem.contains(evt.target) ) {
  //       filterItem.classList.remove('js-filter-open');
  //     };
  //   })
  // })



}


