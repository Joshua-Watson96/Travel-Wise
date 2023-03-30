$( function() {
  var cities = [
    'Shanghai',
    'São Paulo',
    'Mexico City',
    'Cairo',
    'Mumbai',
    'Beijing',
    'Dhaka',
    'Osaka',
    'New York',
    'Karachi',
    'Buenos Aires',
    'Chongqing',
    'Istanbul',
    'Kolkata',
    'Manila',
    'Lagos',
    'Rio de Janeiro',
    'Tianjin',
    'Kinshasa',
    'Guangzhou',
    'Los Angeles',
    'Moscow',
    'Shenzhen',
    'Lahore',
    'Bangalore',
    'Paris',
    'Bogotá',
    'Jakarta',
    'Chennai',
    'Lima',
    'Bangkok',
    'Seoul',
    'Nagoya',
    'Hyderabad',
    'London',
    'Tehran',
    'Chicago',
    'Chengdu',
    'Nanjing',
    'Wuhan',
    'Ho Chi Minh City',
    'Luanda',
    'Ahmedabad',
    'Kuala Lumpur',
    'Hong Kong',
    'Dongguan',
    'Hangzhou',
    'Foshan',
    'Shenyang',
    'Riyadh',
    'Baghdad',
    'Santiago',
    'Surat',
    'Madrid',
    'Suzhou',
    'Pune',
    'Harbin',
    'Houston',
    'Dallas',
    'Toronto',
    'Miami',
    'Singapore',
    'Philadelphia',
    'Atlanta',
    'Fukuoka',
    'Khartoum',
    'Barcelona',
    'Johannesburg',
    'Saint Petersburg',
    'Qingdao',
    'Dalian',
    'Washington',
    'Yangon',
    'Alexandria',
    'Jinan',
    'Guadalajara'
  ];
  $( "#myCity" ).autocomplete({
    source: cities
  });
} );


var cityButton = document.getElementById("submit");
var cityTextbox = document.getElementById("myCity");

localStorage.setItem("group6-travel-app-selected-city", "");


// Add click event to button
cityButton.addEventListener("click", function(event) {
  localStorage.setItem("group6-travel-app-selected-city", cityTextbox.value);
  window.location.href = 'destinations.html'
});