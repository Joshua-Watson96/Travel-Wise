// /* Exchange rate from AUD to USD */
// "apikey", "SlevtC27eE76f6urUpqiJisdHBEjYRXC"
// /* API Key */
// var apiKey = 'SlevtC27eE76f6urUpqiJisdHBEjYRXC';
// /* Set endpoint and your access key */
// var endpoint = 'latest';
// /* Add url to fixer.io */
// var fixerURL = 'https://data.fixer.io/api/';
// /* Base Currency */
// const baseCurrency = 'AUD';
// /* Target Currency */
// const targetCurrency = 'JPN';

// fetch(`http://data.fixer.io/api/latest?access_key=${apiKey}&base=${baseCurrency}&symbol=${targetCurrency}`)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//     // const rate = data.rates[targetCurrency];
//     // console.log(`1 ${baseCurrency} = ${rate} ${targetCurrency}`);
//   });


// extra API key
// sBkWGidcvvz1zCSDEmsTtV9vXxdD1Nvr
// SlevtC27eE76f6urUpqiJisdHBEjYRXC

var endpoint = "latest";
var symbol = "USD";
var base = "EUR";

/* selecting currency data id div block from destination.html page */
var currencyEl = $("#currency-data");
/* creating the div block to display exchange rate */
var exchangeRateEl = $('<div>');

// render data using jQuery
// from the response result, retrieve the rate
// then render the rate on html page
function renderCurrencyData(data) {
    console.log(data);
    const text = data.rates;
    exchangeRateEl.text(text);
    exchangeRateEl.attr('id', 'exchange-rate');
    currencyEl.append(exchangeRateEl);
}

/* headers that will be used in sending request to the server */
var myHeaders = new Headers();
myHeaders.append("apikey", "sBkWGidcvvz1zCSDEmsTtV9vXxdD1Nvr");

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(`https://api.apilayer.com/fixer/${endpoint}?symbols=${symbol}&base=${base}`, requestOptions)
  .then(response => response.text())
  .then(result => renderCurrencyData(result))
  .catch(error => console.log('error', error));