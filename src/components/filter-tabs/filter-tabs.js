
function filterTabsCards () {
  const filterTabsBlock = document.querySelector(".filter-tabs");
  if (!filterTabsBlock) return;

  const filterTabsList = filterTabsBlock.querySelectorAll(".filter-tabs__list");
  const productGrid = document.querySelector(".products__grid")
  const listOfRenderedCards = Array.from( productGrid.querySelectorAll(".card") );
  const tabsListCompany = filterTabsBlock.querySelector(".filter-tabs__list--company");

  // Динамическое добавление табов компаний
  const uniqueCompanyNames = [...new Set(listOfRenderedCards.map(renderedCard => renderedCard.dataset.company))];

  uniqueCompanyNames.forEach(companyName => {
    const tagLi = document.createElement("li");
    tagLi.classList.add("filter-tabs__item");
    tagLi.dataset.company = companyName;
    tagLi.textContent = companyName;
    tabsListCompany.appendChild(tagLi);
  });

  // Счетчик общего кол-ва карточек нак странице
  filterTabsBlock.querySelector(".filter-tabs__count").textContent = listOfRenderedCards.length;
  const classFilterActive = "js-filter-active";

  // Добавление активного класса к табам для их активации
  filterTabsList.forEach(tabList => {
    const filterTabs = tabList.querySelectorAll(".filter-tabs__item");
    filterTabs[0].classList.add(classFilterActive);
    filterTabs.forEach(filterTab => {
      filterTab.addEventListener("click", () => {
        filterTabs.forEach(tab => tab.classList.remove(classFilterActive));
        filterTab.classList.toggle(classFilterActive);
      });
    });
  });


  const companyTabs = filterTabsBlock.querySelectorAll(".filter-tabs__item[data-company]");
  const classCompanyHidden = 'js-hidden-company';
  const typeTabs = filterTabsBlock.querySelectorAll(".filter-tabs__item[data-type]");
  const classTypeHidden = 'js-hidden-type';

  // Фильтр по компаниям
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
      emptyCardCheck();
    });
  });


  // Фильтр по типу компрессора
  typeTabs.forEach(typeTab => {
    typeTab.addEventListener("click", () => {
      const tabTypeTarget = typeTab.dataset.type;
      listOfRenderedCards.forEach(renderedCard => {
        if (renderedCard.dataset.type === tabTypeTarget || tabTypeTarget === "all") {
          renderedCard.classList.remove(classTypeHidden);
        } else {
          renderedCard.classList.add(classTypeHidden);
        }
      });
      emptyCardCheck();
    });
  });

  function emptyCardCheck () {
    const hasCards = listOfRenderedCards.every(card => card.classList.contains(classCompanyHidden) ||card.classList.contains(classTypeHidden) );
    if (hasCards) {
      const spanEmptyCards = document.createElement("span");
      spanEmptyCards.classList.add("message-empty");
      spanEmptyCards.textContent = "Товар отсутствует.";
      productGrid.appendChild(spanEmptyCards);
    } else {
      productGrid.querySelector(".message-empty").remove();
    }
  };

  // -- <sorting cards> --
  const filterSortingSelect = filterTabsBlock.querySelector(".filter-tabs__sorting select");
  filterSortingSelect.addEventListener("change", () => sortingCards(filterSortingSelect) );

  if (filterSortingSelect) window.addEventListener("load", () => sortingCards(filterSortingSelect) );
  // -- </sorting cards> --

};
