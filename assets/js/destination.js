var city = localStorage.getItem("group6-travel-app-selected-city");
var google = {};

async function initMap() {
  // Create a new map centered on a specific location
  var  myMap = await new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.7749, lng: -122.4194},
    zoom: 12
  });
  
  // Add a marker to the map
  var marker = new google.maps.Marker({
    position: {lat: 37.7749, lng: -122.4194},
    map: myMap,
    marker: marker,
    title: 'San Francisco',
  });
}














