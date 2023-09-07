function sortingCards (filterSortingSelect) {
  const productsGrid = document.querySelector(".products__grid");
  const productCards = Array.from(document.querySelectorAll(".products .card"));

  // Сначала дешевле
  const sortingCheaperProductCards = [...productCards].sort((a, b) => {
    return +a.dataset.price - +b.dataset.price;
  });
  // Сначала дороже
  const sortingExpensiveProductCards = [...productCards].sort((a, b) => {
    return +b.dataset.price - +a.dataset.price;
  });
  // Алфавиту
  const sortingAlphabetProductCards = [...productCards].sort((a, b) => {
    return a.dataset.article.localeCompare(b.dataset.article);
  });

  productsGrid.replaceChildren();

  switch (filterSortingSelect.value) {
    // Алфавиту
    case "initial":
      sortingAlphabetProductCards.forEach(card => productsGrid.appendChild(card));
      break;
    // Дешевле
    case "cheaper":
      sortingCheaperProductCards.forEach(card => productsGrid.appendChild(card));
      break;
    // Дороже
    case "expensive":
      sortingExpensiveProductCards.forEach(card => productsGrid.appendChild(card));
      break;
    default:
      sortingAlphabetProductCards.forEach(card => productsGrid.appendChild(card));
  };
};
