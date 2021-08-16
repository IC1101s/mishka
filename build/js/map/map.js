var contactsImg = document.querySelector(".contacts__container-image").classList.remove("contacts__container-image--pin");

ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
          center: [59.938900, 30.323055],
          zoom: 17
      }, {
          searchControlProvider: 'yandex#search'
      }),

      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
      ),

      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'Mishka',
          balloonContent: 'Мы находимся — г. Санкт-Петербург, ул. Большая Конюшенная, д. 19/8, офис 101'
      }, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map/icon-map-pin.svg',
          iconImageSize: [66, 101],
          iconImageOffset: [-22, -82]
      });

  myMap.geoObjects
      .add(myPlacemark);
});