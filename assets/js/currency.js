// extra API key
// sBkWGidcvvz1zCSDEmsTtV9vXxdD1Nvr
// SlevtC27eE76f6urUpqiJisdHBEjYRXC

/* the selected destination */
var destination = localStorage.getItem("group6-travel-app-selected-city");

/* variables that need to be used to fetch data from the server */
var endpoint = "latest";
var symbol = "USD";
var base = "AUD";

/* 
 * fetching currency code of the selected city from the currency.json file 
 */
fetch('./currencies.json')
  .then(response => response.json())
  .then(data => {
    symbol = data[destination];// change the currency symbol based on the selected city
    console.log(symbol);
  });

console.log(symbol);

/* selecting currency data id div block from destination.html page */
var currencyEl = $(".currency-container");
/* creating the div block to display exchange rate */
var exchangeRateEl = $('<div>');

/* 
* render data using jQuery
* from the response result, retrieve the rate
* then render the rate on html page
*/
function renderCurrencyData(data) {

    const jsonString = data;
    const jsonData = JSON.parse(jsonString);
    // console.log(jsonData); // TODO: delete this before project submission
    var rates = jsonData.rates[symbol];
    console.log(rates); // TODO: delete this before project submission
    console.log(symbol); // TODO: delete this before project submission
    const text = `1 ${base} = ${rates} ${symbol}`;
    exchangeRateEl.text(text);
    exchangeRateEl.attr('id', 'exchange-rate');
    currencyEl.append(exchangeRateEl);
}

/* headers that will be used in sending request to the server */
var myHeaders = new Headers();
myHeaders.append("apikey", "SlevtC27eE76f6urUpqiJisdHBEjYRXC");

/* requesting data from the server */
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

fetch(`https://api.apilayer.com/fixer/${endpoint}?symbols=${symbol}&base=${base}`, requestOptions)
  .then(response => response.text())
  .then(result => renderCurrencyData(result))
  .catch(error => console.log('error', error));