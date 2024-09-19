let currenciesBtn = document.querySelector("#currencies-request-btn");
let statusBtn = document.querySelector("#status-request-btn");
let latestBtn = document.querySelector("#latest-request-btn");
let fromSelector = document.querySelector("#from-value");
let toSelector = document.querySelector("#to-value");

var oReq = new XMLHttpRequest();

oReq.addEventListener("load", function () { console.log(this.responseText); });


const statusRequest = () => {
    oReq.open("GET", "https://api.freecurrencyapi.com/v1/status?apikey=fca_live_qqMcXgtYmpYcOU8pn6KYZGEOOYnvNN8LOdwMH9Dg");
    oReq.send();
}

const currenciesRequest = () => {
    oReq.open("GET", "https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_qqMcXgtYmpYcOU8pn6KYZGEOOYnvNN8LOdwMH9Dg&currencies=RUB%2CUSD&base_currency=RUB");
    oReq.send();
}

const latestRequest = (baseCurrency, currencies) => {
    if (fromSelector.value == "nothing" || toSelector.value == "nothing"){
        alert("Select all currency");
        return;
    }
    oReq.open("GET", `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_qqMcXgtYmpYcOU8pn6KYZGEOOYnvNN8LOdwMH9Dg&currencies=${currencies}&base_currency=${baseCurrency}`);
    oReq.send();
}
currenciesBtn.addEventListener("click", currenciesRequest);
statusBtn.addEventListener("click", statusRequest);
latestBtn.addEventListener("click", () => { latestRequest(fromSelector.value, toSelector.value) });

//https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_qqMcXgtYmpYcOU8pn6KYZGEOOYnvNN8LOdwMH9Dg&currencies=RUB%2CUSD&base_currency=RUB