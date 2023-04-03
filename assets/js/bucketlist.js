// retrieved saved cities from local storage
var savedCity = localStorage.getItem("bucket-list-city");


var bucketList = document.querySelector("#bucket-list")
var destination = document.createElement("li")

// append to bucket list
listCity.textContent = savedCity
bucketList.appendChild(destination)

