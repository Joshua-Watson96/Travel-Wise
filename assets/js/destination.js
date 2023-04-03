// Sets the variables for destination.js
var city = localStorage.getItem("group6-travel-app-selected-city");
var google = {};


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
    var Lat = results[0].geometry.location.lat();
    var Lng = results[0].geometry.location.lng();
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

  var backBtn = document.getElementById("goBack")

  backBtn.addEventListener("click", function(event){
    window.location.href="index.html"
  
  });
















