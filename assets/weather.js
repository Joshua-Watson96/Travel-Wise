
var cityInput = document.getElementById("city-search");
var searchForm = document.getElementById("user-form");

var searchSubmit = function (event) {
    event.preventDefault();
    var city = cityInput.value.trim();
    if (city) {
      getCoords(city);
    } else {
      alert("Please enter a City");
    }
  };
  
  var getCoords = function (city) {
    var geoUrl =
      "http://api.openweathermap.org/geo/1.0/direct?q=" +
      city +
      "&limit=5&appid=998c310a82d62a4fbd406adc6cf4d96f";
  
    fetch(geoUrl)
      .then(function (response) {
        console.log(response);
        if (response.ok) {
          response.json().then(function (data) {
            var latitude = data[0].lat;
            var longitude = data[0].lon;
            getForecast(latitude, longitude);
          });
        } else {
          alert("Error: " + response.statusText);
        }
      })
      .catch(function (error) {
        alert("Unable to connect to Open Weather");
      });
  };
  
  var getForecast = function (latitude, longitude) {
    var weatherUrl =
      "http://api.openweathermap.org/data/2.5/forecast?lat=" +
      latitude +
      "&lon=" +
      longitude +
      "&units=metric&appid=998c310a82d62a4fbd406adc6cf4d96f";
    fetch(weatherUrl)
      .then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
              console.log(data)
              let forecastArray = []
          for (let i = 0; i < data.list.length; i++) {
              var forecastObject = data.list[i];
  
              var testTime = forecastObject.dt_txt.split(" ")[1]
              if(testTime==="12:00:00") {
                  forecastArray.push(forecastObject)
              }
              
          }
          displayForecast(forecastArray)
          });
        } else {
          alert("Error: " + response.statusText);
        }
      })
      .catch(function (error) {
        alert("Unable to connect to Weatherorg");
      });
  };
  
  var displayForecast = function(array) {
    document.getElementById("weather").textContent=" "
      array.forEach(function(day){
        var cardDiv = document.createElement("div");
        var cardH4 = document.createElement("h3");
        var tempH4 = document.createElement("h4");
        var humidityH4 = document.createElement("h4");
        var windH4 = document.createElement("h4");
        var imageEl = document.createElement("img")
        var dateArr = day.dt_txt.split(" ")[0].split("-");
        var date = dateArr[2] + "/" + dateArr[1];
        imageEl.src = "https://openweathermap.org/img/wn/"+ day.weather[0].icon + "@2x.png"
        cardH4.textContent = date;
        tempH4.textContent = "Temperature: " + day.main.temp + "°C";
        humidityH4.textContent = "Humidity: " + day.main.humidity + "%";
        windH4.textContent = "Wind: " + day.wind.speed + "km/h";
        cardDiv.append(cardH4,imageEl, tempH4, humidityH4, windH4);
        document.getElementById("weather").appendChild(cardDiv);
      })  
  }
  
  
 searchForm.addEventListener("submit", searchSubmit);
  