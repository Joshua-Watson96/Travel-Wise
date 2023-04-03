
// selecting the 'add to my bucket list button'
var bListBtn = document.querySelector("#bucketlist-btn");
// selecting the city name
var destination = document.querySelector(".destination-name").value;


// when clicked, the city name will be saved to local storage
bListBtn.addEventListener("click", function() {
  if (cityTextbox.value != "") {
    localStorage.setItem("bucket-list-city", destination.value);
    window.location.href = 'bucketlist.html'
  }
});