
function filterTabsCards () {
  const filterTabsBlock = document.querySelector(".filter-tabs");
  if (!filterTabsBlock) return;

  const filterTabsList = filterTabsBlock.querySelectorAll(".filter-tabs__list");
  const listOfRenderedCards = Array.from( document.querySelectorAll(".products__grid .card") );
  const tabsListCompany = filterTabsBlock.querySelector(".filter-tabs__list--company");

  // Динамическое добавление табов компаний
  const uniqueCompanyNames = [...new Set(listOfRenderedCards.map(renderedCard => renderedCard.dataset.company))];

  uniqueCompanyNames.forEach(companyName => {
    const tagLi = document.createElement("li");
    tagLi.classList.add("filter-tabs__item");
    tagLi.dataset.company = companyName;
    tagLi.textContent = companyName;
    tabsListCompany.appendChild(tagLi)
  });



  filterTabsBlock.querySelector(".filter-tabs__count").textContent = listOfRenderedCards.length;

  filterTabsList.forEach(tabList => {
    const filterTabs = tabList.querySelectorAll(".filter-tabs__item");
    filterTabs[0].classList.add("js-filter-active");
    filterTabs.forEach(filterTab => {
      filterTab.addEventListener("click", () => {
        filterTabs.forEach(tab => tab.classList.remove("js-filter-active"));
        filterTab.classList.toggle("js-filter-active");
      });
    });
  });


  const companyTabs = filterTabsBlock.querySelectorAll(".filter-tabs__item[data-company]");
  const classCompanyHidden = 'js-hidden-company';
  const typeTabs = filterTabsBlock.querySelectorAll(".filter-tabs__item[data-type]");
  const classTypeHidden = 'js-hidden-type';


  companyTabs.forEach(companyTab => {
    companyTab.addEventListener("click", () => {
      const tabCompanyTarget = companyTab.dataset.company;
      listOfRenderedCards.forEach(renderedCard => {
        if (renderedCard.dataset.company === tabCompanyTarget || tabCompanyTarget === "all") {
          renderedCard.classList.remove(classCompanyHidden);
        } else {
          renderedCard.classList.add(classCompanyHidden);
        }
      });
    });
  });

  const visibleCards = document.querySelectorAll(`.products__grid .card:not(.${classCompanyHidden})`);

  // -- <sorting cards> --
  const filterSortingSelect = filterTabsBlock.querySelector(".filter-tabs__sorting select");
  filterSortingSelect.addEventListener("change", sortingCards);

  if (filterSortingSelect) window.addEventListener("load", sortingCards);

  function sortingCards () {
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
  // -- </sorting cards> --

};
