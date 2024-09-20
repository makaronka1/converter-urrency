let currenciesBtn = document.querySelector("#currencies-request-btn");
let statusBtn = document.querySelector("#status-request-btn");
let latestBtn = document.querySelector("#latest-request-btn");
let fromSelector = document.querySelector("#from-value");
let toSelector = document.querySelector("#to-value");
let resultLabel = document.querySelector("#result-label");
let valueCount = document.querySelector("#value-count");

const statusRequest = () => {
    fetch("https://api.freecurrencyapi.com/v1/status?apikey=fca_live_qqMcXgtYmpYcOU8pn6KYZGEOOYnvNN8LOdwMH9Dg")
    .then((response) => {
       return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch();
}

const currenciesRequest = () => {
    fetch("https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_qqMcXgtYmpYcOU8pn6KYZGEOOYnvNN8LOdwMH9Dg&currencies=RUB%2CUSD&base_currency=RUB")
    .then((response) => {
       return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch();
}

const latestRequest = (baseCurrency, currencies) => {
    if (fromSelector.value == "nothing" || toSelector.value == "nothing"){
        alert("Select all currency");
        return;
    }
    fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_qqMcXgtYmpYcOU8pn6KYZGEOOYnvNN8LOdwMH9Dg&currencies=${currencies}&base_currency=${baseCurrency}`)
    .then((respone) => {
        return respone.json();
    })
    .then((data) => {
        console.log(data);
        resultLabel.innerHTML = `In ${valueCount.value} ${baseCurrency} ${(parseFloat(data["data"][currencies])* valueCount.value).toFixed(2)} ${currencies}`;
    })
    .catch();
}
currenciesBtn.addEventListener("click", currenciesRequest);
statusBtn.addEventListener("click", statusRequest);
latestBtn.addEventListener("click", () => { latestRequest(fromSelector.value, toSelector.value) });

//https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_qqMcXgtYmpYcOU8pn6KYZGEOOYnvNN8LOdwMH9Dg&currencies=RUB%2CUSD&base_currency=RUB