// extra API key
// sBkWGidcvvz1zCSDEmsTtV9vXxdD1Nvr
// SlevtC27eE76f6urUpqiJisdHBEjYRXC

var endpoint = "latest";
var symbol = "USD";
var base = "EUR";

/* selecting currency data id div block from destination.html page */
var currencyEl = $(".currency-container");
/* creating the div block to display exchange rate */
var exchangeRateEl = $('<div>');

// render data using jQuery
// from the response result, retrieve the rate
// then render the rate on html page
function renderCurrencyData(data) {

    const jsonString = data;
    const jsonData = JSON.parse(jsonString);
    // console.log(jsonData); // TODO: delete this before project submission
    var rates = jsonData.rates.USD;
    // console.log(rates); // TODO: delete this before project submission
    // console.log(data); // TODO: delete this before project submission
    const text = `1 ${base} = ${rates} ${symbol}`;
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