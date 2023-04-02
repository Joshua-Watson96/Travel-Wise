const sidebar = document.querySelector(".sidebar");

document.querySelector("button").onclick = function () {
  sidebar.classList.toggle("sidebar_large");
};

var carousel = document.querySelector(".card-slide");
var next = carousel.querySelector("#next-btn");
var prev = carousel.querySelector("#prev-btn");
var index = 0;
var currentImage;

var osaka = carousel.querySelector("#destination-1");
var barcelona = carousel.querySelector("#destination-2");
var newYork = carousel.querySelector("#destination-3");
var mexicoCity = carousel.querySelector("#destination-4");
var rio = carousel.querySelector("#destination-5");

var cities = [osaka, barcelona, newYork, mexicoCity, rio];

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = cities.length - 1;
  } else if (index > cities.length - 1) {
    index = 0;
  }
  currentImage = cities[index];
  carousel.innerHTML = currentImage;
}

// // Clicking on image opens a new window containing the image
// carousel.addEventListener("click", function() {
//   window.location.href =
// });


next.addEventListener("click", function (event) {
  event.stopPropagation();
  navigate(1);
});

prev.addEventListener("click", function (event) {
  event.stopPropagation();
  navigate(-1);
});

navigate(0);
