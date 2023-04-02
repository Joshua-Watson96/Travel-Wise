/* to display the selected destination name on destinations.html page */
var destinationNameEl = document.getElementById("destinated-city");
destinationNameEl.innerHTML = localStorage.getItem("group6-travel-app-selected-city");


fetch("https://maps.googleapis.com/maps/api/place/textsearch/json?query=New+York+City&key=AIzaSyDH5bgQ0q5gpZVB80W4Cv5y6PsKpDlpqYk")
        .then(response => response.json())
        .then(data => {
          // Extract the city name from the response
          const city = data.results[0].formatted_address.split(",")[0];
          // Update the content of the HTML element
          document.getElementById("destination-name").textContent = city;
        })
        .catch(error => {
          console.error(error);
        });

// // Initialize and add the map
// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: -25.344, lng: 131.031 };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerView } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 4,
//     center: position,
//     mapId: "DEMO_MAP_ID",
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerView({
//     map: map,
//     position: position,
//     title: "",
//   });
// }

// initMap();

