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




// function init() {
//   const point = [55.76, 37.64];
//   let myMap = new ymaps.Map("map-contacts", {
//     center: point,
//     zoom: 10
//   });
//
//   ymaps.route([
//     'Москва',
//     'Химки'
//   ]).then((route) => {
//     myMap.geoObjects.add(route);
//   });
//
//   let marker = new ymaps.Placemark(point);
//   myMap.geoObjects.add(marker);



  // let animation = ymaps.animation.animate(
  //   'point',
  //   function (fraction) {
  //     return ymaps.coordSystem.geo.solveDirectProblem(
  //       route.getWayPoints().get(0).geometry.getCoordinates(),
  //       route.getWayPoints().get(1).geometry.getCoordinates(),
  //       fraction
  //     )
  //   },
  //   {
  //     duration: 2000
  //   }
  // );
  //
  // marker.addAnimation(animation);


//}


