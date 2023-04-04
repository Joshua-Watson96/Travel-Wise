// Sets the variables for destination.js
var city = localStorage.getItem("group6-travel-app-selected-city");
console.log(city)
var google = {};
var Lat, Lng;


// function for initializing the city map
async function initMap() {
  var geocoder = new google.maps.Geocoder();
geocoder.geocode({
  // makes the address the selected city from the search bar
  'address': city
}, async function(results, status) {
  console.log(results)
  // implements the Google Geocoder
  if (status == google.maps.GeocoderStatus.OK) {
    // variables for latitude and longitude
    // gets the lat and long coordinates from the Google Geocoder
     Lat = results[0].geometry.location.lat();
     Lng = results[0].geometry.location.lng();
    var myOptions = {
      zoom: 11,
      center: new google.maps.LatLng(Lat, Lng)
    };
    console.log(Lat, Lng)
      // Create a new map centered on a specific location
  var  myMap = await new google.maps.Map(document.getElementById('map'), {
    center: {lat: Lat, lng: Lng},
    zoom: 12
  });
  
  // Add a marker to the map
  // Gets the location of the city from latitude and longitude
  // Gets the name of the selected city from the search bar
  var marker = new google.maps.Marker({
    position: {lat: Lat, lng: Lng},
    map: myMap,
    marker: marker,
    title: city,
  });

  var timestamp = Math.floor(Date.now() / 1000);
  var timeZone = document.getElementById("timeZone")

  fetch(`https://maps.googleapis.com/maps/api/timezone/json?location=${Lat},${Lng}&timestamp=${Math.floor(Date.now() / 1000)}&key=AIzaSyDGgCB_6d25AXbEuEeg4ieHGmMiWczwcoA`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    const localTime =  new Date((timestamp + data.dstOffset + data.rawOffset) * 1000);
    const formattedTime = localTime.toLocaleString();
    timeZone.textContent += formattedTime;
    if (data.status === "OK") {
      return data;
    } else {
      throw new Error(data.status);
    }
    
  });
  } else {
    alert("Something got wrong " + status);
  }
});
  
}
// Variable for descriptionText to make it show on the HTML ID
var descriptionText = document.getElementById("description")

// fetchs the description of the city from wikipedia
fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/`+ city)
  .then(response => response.json())
  .then(data => {
    const description = data.extract;
    // returns the description of the city in the HTML ID
    descriptionText.textContent += description

    console.log(description); 
  })
  .catch(error => {
    console.error(error);
  });

  // sets the backBtn on html, as a variable
  var backBtn = document.getElementById("goBack")
// add click event to back button; goes back to index.html
  backBtn.addEventListener("click", function(event){
    window.location.href="index.html"
  
  });

var timeZone = document.getElementById("timeZone")

// function getTimeZoneData(lat, lng) {}

// getTimeZoneData(39.6034810, -119.6822510, 1331161200)
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
  
 
    

// // getTimeZoneData(city)
// //   .then(data => {
// //     console.log(data);
// //   })
// //   .catch(error => {
// //     console.error(error);
// //   });





  





