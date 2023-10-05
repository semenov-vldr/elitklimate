const mapContacts = document.querySelector('#map-contacts');

if (mapContacts) ymaps.ready(initYaMap);


function initYaMap() {
  const pointAddress = [43.422676, 39.937175];
  let myMap = new ymaps.Map('map-contacts', {

    center: pointAddress,
    zoom: 17,
    controls: [],
  });
  const placemarkAddress = new ymaps.Placemark(pointAddress, {}, {
    iconLayout: 'default#image',
    iconImageHref: './assets/img/icons/map-baloon.svg',
    iconImageSize: [144, 68],
    iconImageOffset: [-70, -68]
  });

  myMap.geoObjects.add(placemarkAddress);
};




// function initYaMap() {
//   const point = [55.76, 37.64];
//   let myMap = new ymaps.Map("map-contacts", {
//     center: point,
//     zoom: 12
//   });
//
//   ymaps.route([
//     'Санкт-Петербург, Петропавловская крепость',
//     'Санкт-Петербург, Стрелка Валильевского острова',
//     'Санкт-Петербург, Кунтскамера',
//     'Санкт-Петербург, Медный всадник',
//     'Санкт-Петербург, Адмиралтейство',
//     'Санкт-Петербург, Михайловский замок',
//     'Санкт-Петербург, Невский проспект',
//
//   ]).then((route) => {
//     let routePoints = route.getWayPoints();
//     // добавляем маркеры на карту
//     myMap.geoObjects.add(routePoints);
//     myMap.setBounds(myMap.geoObjects.getBounds());
//     //myMap.setZoom(myMap.getZoom() - 1);
//   });
//
// };


