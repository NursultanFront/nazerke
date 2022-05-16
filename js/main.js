const allForm = document.querySelectorAll("form");

allForm.forEach((item) => {
  item.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
let center = [43.2149265745148, 76.8715964999999];

function init() {
  var map = new ymaps.Map("map", {
    center: center,
    zoom: 17,
  });

  let placemark = new ymaps.Placemark(center);

  map.geoObjects.add(placemark);
}

ymaps.ready(init);

const element = document.querySelectorAll(".choice");
element.forEach((item) => {
  let choices = new Choices(item);
});
