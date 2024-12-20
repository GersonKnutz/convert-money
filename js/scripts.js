const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");
const currencyToChange = document.querySelector(".currency-to-change")

async function convertValues(){
    const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value);
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValueConverted = document.querySelector(".currency-value");

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dollar = data.USDBRL.high
    const euro = data.EURBRL.high

    if (currencyToChange.value == "euro"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "EUR"
    }).format(inputCurrencyValue);
    }

    if (currencyToChange.value == "dollar"){
         currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
           style: "currency",
           currency: "USD"
     }).format(inputCurrencyValue);
    }

    if (currencyToChange.value == "real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL"
    }).format(inputCurrencyValue);
    }
    
    if (currencySelect.value == "real"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
           style: "currency",
           currency: "BRL"
       }).format(inputCurrencyValue * real);
    }

    if (currencySelect.value == "euro"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
           style: "currency",
           currency: "EUR"
       }).format(inputCurrencyValue / euro); 
    }

    if (currencySelect.value == "dollar"){
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
           style: "currency",
           currency: "USD"
       }).format(inputCurrencyValue / dollar);
    }

}

function mainCurrency(){
    const currency = document.querySelector(".currency");
    const currencyImgToChange = document.querySelector(".currency-img-to-change");

    if (currencyToChange.value == "euro") {
        currency.innerHTML = "Euro"
        currencyImgToChange.src = "./assets/euro.png"    
    } 

    if (currencyToChange.value == "dollar") {
        currency.innerHTML = "American Dollar"
        currencyImgToChange.src = "./assets/dollar.png"
    }

    if (currencyToChange.value == "real") {
        currency.innerHTML = "Brazilian Real"
        currencyImgToChange.src = "./assets/real.png"
    }

    convertValues()

}       

function changeCurrency(){
    const currencyName = document.getElementById("currency-name")  
    const currencyImage = document.querySelector(".currency-img")
    
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Brazilian Real"
        currencyImage.src = "./assets/real.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"    
    } 

    if (currencySelect.value == "dollar") {
        currencyName.innerHTML = "American Dollar"
        currencyImage.src = "./assets/dollar.png"
    }

       convertValues()
 }

currencyToChange.addEventListener("change", mainCurrency);
currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);

