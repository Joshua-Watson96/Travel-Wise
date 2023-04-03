var cities = [];
var bucketList = document.querySelector(".bucket-list-container")

// This function is being called below and will run when the page loads. This will get the city history from local storage
function init() {
    var savedCities = JSON.parse(localStorage.getItem("group6-bucket-list-cities"));
    console.log(savedCities)
    console.log("test")
  
    // If cities are found in the history were retrieved from localStorage
    if (savedCities !== null) {
      cities = savedCities;
    }
  
    // Display city search history
    displaySavedcities();
}

// The following function displays items from local storage as buttons
function displaySavedcities() {
    // Render buttons for each history
    bucketList.innerHTML = "";
    for (var i = 0; i < cities.length; i++) {
      var city = cities[i];
  
      var button = document.createElement("button");
      button.textContent = city;

      bucketList.appendChild(button);
    }
}



// btn.addEventListener("click", function(event) {
//     var cityInput = document.querySelector("#city")
//     if (cityInput.value.trim != "") {
//         var city = cityInput.value.trim()
//         console.log(city)
//         cityInput.value = ""

//         cities.push(city);


//         storeCity()
//         displayCitysearchHistory()

//     }
// });


// // function getCityhistory() {
// //     var cities = localStorage.getItem("allenpogi-city-weather")
// //     console.log(cities)
// // }

// // getCityhistory()
    
// // var cityBtn = document.createElement("button")
// // console.log(searchHistory)
// // console.log(cityBtn)
// // cityBtn.textContent = city
// // searchHistory.appendChild(cityBtn)

init()