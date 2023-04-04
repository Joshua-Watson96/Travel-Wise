
// when clicked, the sidebar will change to the 'sidebar_large' styling
var sidebar = document.querySelector(".sidebar");
var sideContainer = document.querySelector(".side-container")
var sidebarWidth
var bucketListlink = document.querySelector("#bucket-link")


document.querySelector("#side-btn").onclick = function () {
  sidebar.classList.toggle("sidebar-large");
  var sidebarWidth1 = document.querySelector(".sidebar-large")

  if (sidebarWidth1 === null) {
    bucketListlink.textContent = ""
  } else {
    bucketListlink.textContent = "Your bucket list"
  }

};

bucketListlink.onclick= function () {
  window.location.href = 'bucketlist.html'
}


var carousel = document.querySelector(".city-cards1");
// console.log(carousel)
var next = document.querySelector("#next-btn");
var prev = document.querySelector("#prev-btn");

// var slides = document.querySelectorAll(".slide")
// console.log(slides)
// var currentSlide;
var index = 0;

var cityListcarousel = ["Osaka", "Barcelona", "New York", "Mexico City", "Rio de Janeiro"]
var cityPhotourl = ["./assets/images/Osaka.jpg", "./assets/images/Barcelona.jpg", "./assets/images/New-York.jpg", "./assets/images/Mexico-city.jpg", "./assets/images/Rio de Janeiro.png"]


function createCitycard(index) {
  carousel.innerHTML = ""
  // console.log("index is what", index)
  var cityCard = document.createElement("div")
  cityCard.classList.add("card")
  cityCard.classList.add("slide")
  var cityHref = document.createElement("a")
  cityHref.href = "./destinations.html"
  var cityPhoto = document.createElement("img")
  cityPhoto.classList.add("city-img")
  cityPhoto.alt = "image of " + cityListcarousel[index]
  cityPhoto.src = cityPhotourl[index]
  var cityH3 = document.createElement("h3")
  cityH3.classList.add("text-overlay")
  cityH3.textContent = cityListcarousel[index]

  cityHref.appendChild(cityH3)
  cityHref.appendChild(cityPhoto)
  cityCard.appendChild(cityHref)

  // console.log(cityH3)
  // console.log(cityPhoto)
  // console.log(cityHref)
  // console.log(cityCard)

  carousel.appendChild(cityCard)
}

createCitycard(index)

function navigate(direction) {
  index = index + direction;
  // console.log(index)
  if (index < 0) {
    index = cityListcarousel.length - 1;
  } else if (index > cityListcarousel.length - 1) {
    index = 0;
  }
  createCitycard(index)
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
