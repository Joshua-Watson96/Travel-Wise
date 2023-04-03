
// when clicked, the sidebar will change to the 'sidebar_large' styling
var sidebar = document.querySelector(".sidebar");


document.querySelector("button").onclick = function () {
  sidebar.classList.toggle("sidebar-large");
};

var carousel = document.querySelector(".city-cards");
var next = document.querySelector("#next-btn");
var prev = document.querySelector("#prev-btn");

var slides = document.querySelectorAll(".slide")
var currentSlide;
var index = 0;

function navigate(direction) {
  index = index + direction;
  if (index < 0) {
    index = slides.length - 1;
  } else if (index > slides.length - 1) {
    index = 0;
  }
  currentSlide = slides[index];

}

next.addEventListener("click", function (event) {
  event.stopPropagation();
  navigate(1);
  // currentSlide++
  // slides.forEach((slide, index) => {
  // carousel.innerHTML = slide[index]
  // })
});

prev.addEventListener("click", function (event) {
  event.stopPropagation();
  navigate(-1);

  // currentSlide-
  // slides.forEach((slide, index) => {
  // carousel.innerHTML = slide[index]
  
// });
});

// navigate(0);
