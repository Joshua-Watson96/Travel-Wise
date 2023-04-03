// get recommended places from Yelp
var city = localStorage.getItem("group6-travel-app-selected-city");
var queryURL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=" + city + "&categories=amusementparks&categories=parks&categories=museums&categories=aquariums&categories=arcades&categories=tours&categories=arts&categories=attractionfarms&sort_by=review_count&limit=10";
var apiKey = "kSEvBygo41ZOQRY3djEBiQRa71zBbcE8x6I52buCSjLkMqLdHmjg9YbM4H-WcP6dR3cP0M8PPoh193-K3aq4ns4OJmbEv_PvZFjJmDCKa4OdyuYgkrRgusApVqciZHYx"; 

var businessContainer = document.getElementById('businesses');

fetch(queryURL, {
  method: 'GET', //GET is the default.
  headers: {
      "accept": "application/json",
      "Access-Control-Allow-Origin":"*",
      "Authorization": `Bearer ${apiKey}`
      }

})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    var business = data.businesses
    console.log(data.businesses);
  //   console.log(data);
    console.log(business.length);
    for (var i = 0; i < business.length; i++) {
      //define elements needed to build the business cards
      var businessCard = document.createElement('div');
      var name = document.createElement('h4');
      var businessImage = document.createElement('img');
      var imageDiv = document.createElement('div');
      var address = document.createElement('p');
      var rating = document.createElement('p');
      var reviewCount = document.createElement('p');
      var phone = document.createElement('p');
      var url = document.createElement('a');

      //set the attributes and values
      url.href = business[i].url;
      url.classList.add("link-to-destination")
      url.target = "_blank"
      businessImage.src = business[i].image_url;
      imageDiv.setAttribute('style', 'height: 100px; width: 200px; overflow: hidden');
      imageDiv.appendChild(businessImage);
      businessImage.setAttribute('style', 'max-width: 100%; max-height: 100%');
      name.textContent = business[i].name;
      address.textContent = 'Address: ' + business[i].location.display_address;
      rating.textContent = 'Rating: ' + business[i].rating;
      reviewCount.textContent = 'Review count: ' + business[i].review_count;
      phone.textContent = 'Phone: ' + business[i].display_phone
      console.log(business[i].name);
      businessCard.classList.add("businessCard")

      //append the elements
      businessCard.appendChild(name);
      businessCard.appendChild(rating);
      businessCard.appendChild(reviewCount);
      businessCard.appendChild(address);
      businessCard.appendChild(phone);
      businessCard.appendChild(imageDiv);
      url.appendChild(businessCard);
      businessContainer.appendChild(url);
    }
  });


  //set the destination name title on the destinations.html
  var destinationCity = document.querySelector(".destination-name");
  destinationCity.textContent = city;



  //save to bucketlist

  var addTolistBtn = document.querySelector("#bucketlist-btn");

  addTolistBtn.addEventListener("click", function(event) {
    console.log("add is clicked")

    var bucketCities = [];
    var citiesBucketlist =  JSON.parse(localStorage.getItem("group6-bucket-list-cities"));
    var cityTosave = localStorage.getItem("group6-travel-app-selected-city")
    if (citiesBucketlist !== null) {
      bucketCities = citiesBucketlist;
    }


    console.log(bucketCities.includes(cityTosave))
    if (bucketCities.includes(cityTosave) == true) {

      $( function() {
        $( "#dialog-fail" ).dialog();
      } );

    } else {
      bucketCities.push(cityTosave);
      localStorage.setItem("group6-bucket-list-cities", JSON.stringify(bucketCities));

      $( function() {
        $( "#dialog-success" ).dialog();
      } );

    }

  });
