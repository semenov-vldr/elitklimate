const mapContacts = document.querySelector('#map-contacts');

if (mapContacts) ymaps.ready(init);


function init() {
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
