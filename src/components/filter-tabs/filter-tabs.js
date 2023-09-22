
function filterTabsCards () {
  const filterTabsBlock = document.querySelector(".filter-tabs");
  if (!filterTabsBlock) return;

  const filterTabsList = filterTabsBlock.querySelectorAll(".filter-tabs__list");
  const productGrid = document.querySelector(".products__grid")
  const listOfRenderedCards = Array.from( productGrid.querySelectorAll(".card") );
  const tabsListCompany = filterTabsBlock.querySelector(".filter-tabs__list--company");
  const filterTabsTitle = filterTabsBlock.querySelectorAll(".filter-tabs__title");
  const tabsListArea = filterTabsBlock.querySelector(".filter-tabs__list--area");

  // Динамическое добавление табов компаний и сортировка их по алфавиту
  const uniqueCompanyNames = [...new Set(listOfRenderedCards.map(renderedCard => renderedCard.dataset.company))].sort((a, b) => {
    return a.localeCompare(b);
  });

  uniqueCompanyNames.forEach(companyName => {
    const tagLi = document.createElement("li");
    tagLi.classList.add("filter-tabs__item");
    tagLi.dataset.company = companyName;
    tagLi.textContent = companyName;
    tabsListCompany.appendChild(tagLi);
  });

  // Динамическое добавление табов площади помещения
  const uniqueAreaValues = [...new Set(listOfRenderedCards.map(renderedCard => +renderedCard.dataset.area))].sort((a, b) => a - b);
  const tabsAreaMinMax = Array.from( tabsListArea.querySelectorAll(".filter-tabs__item[data-area-min]") );

  let uniqueAreaTabs = new Set();
  uniqueAreaValues.forEach(areaValue => {
    tabsAreaMinMax.forEach(tabAreaMinMax => {
      const dataMinArea = +tabAreaMinMax.dataset.areaMin;
      const dataMaxArea = +tabAreaMinMax.dataset.areaMax;
      if (areaValue >= dataMinArea && areaValue <= dataMaxArea) {
        uniqueAreaTabs.add(tabAreaMinMax);
      }
    });
  });
  uniqueAreaTabs.forEach(areaTab => areaTab.classList.add("filter-tab-current"));


  // Счетчик общего кол-ва карточек нак странице
  document.querySelector(".products__title-count").textContent = listOfRenderedCards.length;

  // Добавление активного класса к табам для их активации
  const classFilterActive = "js-filter-active";
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


  //---------------

  // const filterTabsItems = filterTabsBlock.querySelectorAll(".filter-tabs__item");
  // filterTabsItems.forEach(filterTab => {
  //   filterTab.addEventListener("click", ft);
  // });
  //
  // function ft (evt) {
  //   let selectedCompany = filterTabsBlock.querySelector(".filter-tabs__list--company .filter-tabs__item.js-filter-active").dataset.company;
  //   let selectedArea = filterTabsBlock.querySelector(".filter-tabs__list--area .filter-tabs__item.js-filter-active").dataset.area;
  //   let isInverterSelected = filterTabsBlock.querySelector(".filter-tabs__list--inverter .filter-tabs__item.js-filter-active").dataset.type === "true";
  //
  //   listOfRenderedCards.forEach(card => card.classList.add("js-hidden"));
  //   let filteredCards = productGrid.querySelectorAll(`.card[data-company="${selectedCompany}"][data-type="${isInverterSelected}"]`);
  //
  //   if (evt.target.dataset.company === "all") {
  //     filteredCards = productGrid.querySelectorAll(`.card[data-type="${isInverterSelected}"]`);
  //   }
  //
  //   if (evt.target.dataset.type === "all") {
  //     filteredCards = productGrid.querySelectorAll(`.card[data-company="${selectedCompany}"]`);
  //   }
  //
  //   const isAllCompany = Array.from(filterTabsItems).some(tab => tab.dataset.company === "all" && tab.classList.contains("js-filter-active"));
  //   const isAllInverter = Array.from(filterTabsItems).some(tab => tab.dataset.type === "all" && tab.classList.contains("js-filter-active"));
  //
  //   if (isAllCompany && isAllInverter) {
  //     filteredCards = productGrid.querySelectorAll(`.card`);
  //   }
  //
  //   filteredCards.forEach(card => card.classList.remove("js-hidden"));
  //
  //   emptyCardCheck();
  // }

//------------

  // Проверка на пустой список карточек по причине несоответствия фильтру
  function emptyCardCheck () {
    const hasCards = listOfRenderedCards.every(card => card.classList.contains(classHiddenCompany)
                                                      || card.classList.contains(classTypeHidden)
                                                      || card.classList.contains(classAreaHidden)
                                                      //|| card.classList.contains("js-hidden")
                                                                                                );
    if (hasCards) {
      const messageAboutEmptiness = document.createElement("span");
      messageAboutEmptiness.classList.add("message-empty");
      messageAboutEmptiness.textContent = "По указанным параметрам товар не найден.";
      if (!productGrid.querySelector(".message-empty")) {
        productGrid.appendChild(messageAboutEmptiness);
      }
    } else {
      productGrid.querySelectorAll(".message-empty").forEach(el => el.remove());
    }
  };

  // Сортировка
  const filterSortingSelect = filterTabsBlock.querySelector(".filter-tabs__sorting select");
  filterSortingSelect.addEventListener("change", () => sortingCards(filterSortingSelect) );

  if (filterSortingSelect) window.addEventListener("load", () => sortingCards(filterSortingSelect) );

};
