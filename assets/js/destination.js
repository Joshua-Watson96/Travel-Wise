var city = localStorage.getItem("group6-travel-app-selected-city");
var google = {};


async function initMap() {
  var geocoder = new google.maps.Geocoder();
geocoder.geocode({
  'address': city
}, async function(results, status) {
  console.log(results)
  if (status == google.maps.GeocoderStatus.OK) {
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
  const service = new google.maps.places.PlacesService(myMap);
  console.log(myMap)
  const request = {
    placeId: results[0].place_id,
    fields: ["name", "formatted_address","place_id", "geometry"],
  };
  service.getDetails(request, (place, status) => {
    if (
      status === google.maps.places.PlacesServiceStatus.OK &&
      place &&
      place.geometry &&
      place.geometry.location
    ){
      console.log(place)
    }
  });
  // Add a marker to the map
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
















