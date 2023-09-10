
function filterTabsCards () {
  const filterTabsBlock = document.querySelector(".filter-tabs");
  if (!filterTabsBlock) return;

  const filterTabsList = filterTabsBlock.querySelectorAll(".filter-tabs__list");
  const productGrid = document.querySelector(".products__grid")
  const listOfRenderedCards = Array.from( productGrid.querySelectorAll(".card") );
  const tabsListCompany = filterTabsBlock.querySelector(".filter-tabs__list--company");
  const filterTabsTitle = filterTabsBlock.querySelectorAll(".filter-tabs__title");
  const tabsListArea = filterTabsBlock.querySelector(".filter-tabs__list--area");

  // Динамическое добавление табов компаний
  const uniqueCompanyNames = [...new Set(listOfRenderedCards.map(renderedCard => renderedCard.dataset.company))];

  uniqueCompanyNames.forEach(companyName => {
    const tagLi = document.createElement("li");
    tagLi.classList.add("filter-tabs__item");
    tagLi.dataset.company = companyName;
    tagLi.textContent = companyName;
    tabsListCompany.appendChild(tagLi);
  });


  // Динамическое добавление табов площади помещения
  const uniqueAreaValues = [...new Set(listOfRenderedCards.map(renderedCard => +renderedCard.dataset.area))].sort((a, b) => a - b);
  const tabsListAreaMinMax = Array.from( tabsListArea.querySelectorAll(".filter-tabs__item[data-area-min]") );

  let uniqueAreaTabs = new Set();
  uniqueAreaValues.forEach(areaValue => {
    tabsListAreaMinMax.forEach(tabAreaMinMax => {
      const dataMinArea = +tabAreaMinMax.dataset.areaMin;
      const dataMaxArea = +tabAreaMinMax.dataset.areaMax;
      if (areaValue >= dataMinArea && areaValue <= dataMaxArea) {
        uniqueAreaTabs.add(tabAreaMinMax);
      }
    });
  });
  uniqueAreaTabs.forEach(areaTab => areaTab.classList.add("filter-tab-current"));


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


  // Показ/скрытие фильтров по клику на заголовок
  filterTabsTitle.forEach(title => {
    if (title.classList.contains("filter-tabs__title--company")) {
      title.classList.add("filter-visible");
    }
    title.addEventListener("click", () => {
      title.classList.toggle("filter-visible");
    });
  });



  const companyTabs = filterTabsBlock.querySelectorAll(".filter-tabs__item[data-company]");
  const classHiddenCompany = 'js-hidden-company';
  const typeTabs = filterTabsBlock.querySelectorAll(".filter-tabs__item[data-type]");
  const classTypeHidden = 'js-hidden-type';
  const areaTabs = filterTabsBlock.querySelectorAll(".filter-tabs__item[data-area]");
  const classAreaHidden = 'js-hidden-area';



  // Фильтр по компаниям
  companyTabs.forEach(companyTab => {
    companyTab.addEventListener("click",() => {
      const tabCompanyTarget = companyTab.dataset.company;
      listOfRenderedCards.forEach(renderedCard => {
        if (renderedCard.dataset.company === tabCompanyTarget || tabCompanyTarget === "all") {
          renderedCard.classList.remove(classHiddenCompany);
        } else {
          renderedCard.classList.add(classHiddenCompany);
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


  // Фильтр по площади помещения
    areaTabs.forEach(areaTab => {
      areaTab.addEventListener("click",() => {
        const tabAreaMinTarget = +areaTab.dataset.areaMin;
        const tabAreaMaxTarget = +areaTab.dataset.areaMax;
        listOfRenderedCards.forEach(renderedCard => {
          const dataAreaRenderedCard = +renderedCard.dataset.area;
          if (dataAreaRenderedCard >= tabAreaMinTarget && dataAreaRenderedCard <= tabAreaMaxTarget
            || areaTab.dataset.area === "all" ) {
            renderedCard.classList.remove(classAreaHidden);
          }
          else {
            renderedCard.classList.add(classAreaHidden);
          }
        });
        emptyCardCheck();
      });
    });



  // Проверка на пустой список карточек по причине несоответствия фильтру
  function emptyCardCheck () {
    const isHasCards = listOfRenderedCards.every(card => card.classList.contains(classHiddenCompany)
                                                      || card.classList.contains(classTypeHidden)
                                                      || card.classList.contains(classAreaHidden) );
    if (isHasCards) {
      const spanEmptyCards = document.createElement("span");
      spanEmptyCards.classList.add("message-empty");
      spanEmptyCards.textContent = "По указанным параметрам товар не найден.";
      if (!productGrid.querySelector(".message-empty")) {
        productGrid.appendChild(spanEmptyCards);
      }
    } else {
      productGrid.querySelectorAll(".message-empty").forEach(el => el.remove());
    }
  };

  // -- <sorting cards> --
  const filterSortingSelect = filterTabsBlock.querySelector(".filter-tabs__sorting select");
  filterSortingSelect.addEventListener("change", () => sortingCards(filterSortingSelect) );

  if (filterSortingSelect) window.addEventListener("load", () => sortingCards(filterSortingSelect) );
  // -- </sorting cards> --

};
