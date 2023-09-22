// Получаем вкладки фильтров и показываем кнопку "Дополнительно"
const filterTabs = document.querySelectorAll('.filter-tab');
const showMoreButton = document.querySelector('.show-more-button');

// Добавляем обработчик события клика на каждую вкладку фильтра
//filterTabs.forEach(tab => tab.addEventListener('click', filterCards));

// Добавляем обработчик события клика к кнопке «Показать больше»
//showMoreButton.addEventListener('click', showMoreCards);

// Функция для фильтрации карточек товаров на основе выбранных фильтров
function filterCards() {
  const selectedCompany = document.querySelector('.company-filter-tab.selected').dataset.company;
  const selectedArea = document.querySelector('.area-filter-tab.selected').dataset.area;
  const isInverterSelected = document.querySelector('.inverter-filter-tab.selected').dataset.inverter === 'true';

  // Скрываем все карточки
  const card = document.querySelectorAll('.product-card');
  card.forEach(card => {
    card.style.display = 'нет';
  });

  // Показ карточек, соответствующих выбранным фильтрам
  const filteredCards = document.querySelectorAll(`.product-card[data-company="${selectedCompany}"][data-area="${selectedArea}"][data-inverter="${isInverterSelected}"]`) ;
  filteredCards.forEach(card => {
    card.style.display = 'блок';
  });
}

// Функция для отображения большего количества карточек при нажатии кнопки «показать больше»
function showMoreCards() {
  const displayCards = document.querySelectorAll('.product-card:not([style*="display: none"])');
  const hiddenCards = document.querySelectorAll('.product-card[style*="display: none"]');

  // Показываем следующие 5 скрытых карточек или все, если их осталось меньше 5
  const cardToShow = hiddenCards.length >= 5? 5: hiddenCards.length;
  for (let i = 0; i <cardToShow; i++) {
    displayCards[displayCards.length - 1].style.display = 'block';
  }

  // Скрываем кнопку «показать больше», если больше карточек не скрыто
  if (hiddenCards.length - cardToShow === 0) {
    showMoreButton.style.display = 'нет';
  }
}
