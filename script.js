let btn = document.querySelector("#request-btn");

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", function () { console.log(this.responseText); });
oReq.open("GET", "https://api.freecurrencyapi.com/v1/status?apikey=fca_live_qqMcXgtYmpYcOU8pn6KYZGEOOYnvNN8LOdwMH9Dg");
oReq.send();

const currenciesRequest = () => {
    oReq.open("GET", "https://api.freecurrencyapi.com/v1/currencies?apikey=fca_live_qqMcXgtYmpYcOU8pn6KYZGEOOYnvNN8LOdwMH9Dg&currencies=EUR%2CUSD%2CCAD");
    oReq.send();
}

btn.addEventListener("click", currenciesRequest);
