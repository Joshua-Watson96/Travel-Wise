// when clicked, the sidebar will change to the 'sidebar_large' styling
var sidebar = document.querySelector(".sidebar");
var sideContainer = document.querySelector(".side-container")
var sidebarWidth
var bucketListlink = document.querySelector("#bucket-link")


document.querySelector("#side-btn").onclick = function () {
  sidebar.classList.toggle("sidebar-large");
  var sidebarWidth1 = document.querySelector(".sidebar-large")
  // console.log(sidebarWidth1)
  if (sidebarWidth1 === null) {
    bucketListlink.textContent = ""
  } else {
    bucketListlink.textContent = "Your bucket list"
  }

};


var carousel = document.querySelector(".city-cards-carousel");

bucketListlink.onclick= function () {
  window.location.href = 'bucketlist.html'
}

// console.log(carousel)
var next = document.querySelector("#next-btn");
var prev = document.querySelector("#prev-btn");


// var slides = document.querySelectorAll(".slide")
// console.log(slides)
// var currentSlide;
var index = 0;

var cityListcarousel = [
  "Osaka",
  "Barcelona",
  "New York",
  "Mexico City",
  "Rio de Janeiro",
];
var cityPhotourl = [
  "./assets/images/Osaka.jpg",
  "./assets/images/Barcelona.jpg",
  "./assets/images/New-York.jpg",
  "./assets/images/Mexico-city.jpg",
  "./assets/images/Rio de Janeiro.png",
];

/* A list of cities that will be included in the home page top picks */
var cityListcarousel = ["Osaka", "Barcelona", "New York", "Mexico City", "Rio de Janeiro"]
/* A list of photos of the cities that will be included in the home page top picks */
var cityPhotourl = ["./assets/images/Osaka.jpg", "./assets/images/Barcelona.jpg", "./assets/images/New-York.jpg", "./assets/images/Mexico-city.jpg", "./assets/images/Rio de Janeiro.png"]
var index = 0;


function createCitycard(index) {


  // console.log("index is what", index)
  var cityCard = document.createElement("div");
  cityCard.classList.add("card");
  cityCard.classList.add("slide");
  var cityHref = document.createElement("a");
  cityHref.href = "./destinations.html";
  var cityPhoto = document.createElement("img");
  cityPhoto.classList.add("city-img");
  cityPhoto.alt = "image of " + cityListcarousel[index];
  cityPhoto.src = cityPhotourl[index];
  var cityH3 = document.createElement("h3");
  cityH3.classList.add("text-overlay");
  cityH3.textContent = cityListcarousel[index];

  cityHref.appendChild(cityH3);
  cityHref.appendChild(cityPhoto);
  cityCard.appendChild(cityHref);

  // console.log(cityH3)
  // console.log(cityPhoto)
  // console.log(cityHref)
  // console.log(cityCard)


  carousel.appendChild(cityCard)
  // console.log(carousel)
}


function navigate(direction) {
  index = index + direction;
  // console.log(index)
  if (index < 0) {
    index = cityListcarousel.length - 1;
  } else if (index > cityListcarousel.length - 1) {
    index = 0;
  }

  carousel.innerHTML = ""
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


//to display the top destinations as stacked divs when the screen is small
var screenWidth = window.innerWidth;
// console.log(screenWidth)

if (screenWidth <= 767) {
  // console.log("test that the screenWidth variable")
  for (var i = 0; i < cityListcarousel.length; i++) {
    createCitycard(i)
    // console.log(i)
  } 
} else {
  createCitycard(index)
}


window.addEventListener('resize', function () { 
  "use strict";
  window.location.reload(); 
});


// window.addEventListener('resize', function (event) {
//   if (screenWidth <= 767) {
//     // console.log("test that the screenWidth variable")
//     carousel.innerHTML = ""
//     for (var i = 0; i < cityListcarousel.length; i++) {
//       createCitycard(i)
//       // console.log(i)
//     } 
//   } else {
//     carousel.innerHTML = ""
//     createCitycard(index)
//   }
// })