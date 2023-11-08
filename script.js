const dollarToday = 4.89
const libraToday = 6.01
const euroToday = 5.24
const bitCoinToday = 173000.93

const convertButton = document.querySelector(".convert-button")
const currencySelectFrom = document.querySelector("#convert-from")
const currencySelectFor = document.querySelector("#convert-for")
const convertFromParagraph = document.querySelector(".from-amount-p")
const convertForParagraph = document.querySelector(".for-amount-p")
const convertFromImage = document.querySelector(".from-amount-img")
const convertForImage = document.querySelector(".for-amount-img")


function changeImageFrom() {
    if(currencySelectFrom.value == "real"){
        convertFromImage.src = './assets/real.png'
        convertFromParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(0)
    }
    if(currencySelectFrom.value == "euro"){
        convertFromImage.src = './assets/euro.png'
        convertFromParagraph.innerHTML = new Intl.NumberFormat("uk-UK", {style: "currency", currency: "EUR"}).format(0)
    }
    if(currencySelectFrom.value == "dollar"){
        convertFromImage.src = './assets/dollar.png'
        convertFromParagraph.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(0)
    }
    if(currencySelectFrom.value == "libra"){
        convertFromImage.src = './assets/libra.png'
        convertFromParagraph.innerHTML = new Intl.NumberFormat("uk-UK", {style: "currency", currency: "GBP"}).format(0)
    }
    if(currencySelectFrom.value == "bc"){
        convertFromImage.src = './assets/bitcoin.png'
        convertFromParagraph.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "BTC"}).format(0)
    }
}

function changeImageFor() {
    if(currencySelectFor.value == "real"){
        convertForImage.src = './assets/real.png'
        convertForParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(0)
    }
    if(currencySelectFor.value == "euro"){
        convertForImage.src = './assets/euro.png'
        convertForParagraph.innerHTML = new Intl.NumberFormat("uk-UK", {style: "currency", currency: "EUR"}).format(0)
    }
    if(currencySelectFor.value == "dollar"){
        convertForImage.src = './assets/dollar.png'
        convertForParagraph.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(0)
    }
    if(currencySelectFor.value == "libra"){
        convertForImage.src = './assets/libra.png'
        convertForParagraph.innerHTML = new Intl.NumberFormat("uk-UK", {style: "currency", currency: "GBP"}).format(0)
    }
    if(currencySelectFor.value == "bc"){
        convertForImage.src = './assets/bitcoin.png'
        convertForParagraph.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "BTC"}).format(0)
    }
}


function convertAmount() {
    const amountValue = document.querySelector("#amount").value // Amount Input Value
    const convertFromValue = currencySelectFrom.value
    const convertForValue = currencySelectFor.value

        if (convertFromValue == "real" && convertForValue == "dollar") {
            const convertedValue = amountValue / dollarToday

            convertFromParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(amountValue)
            convertForParagraph.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(convertedValue)
        }

        if (convertFromValue == "real" && convertForValue == "euro") {
            const convertedValue = amountValue / euroToday

            convertFromParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(amountValue)
            convertForParagraph.innerHTML = new Intl.NumberFormat("uk-UK", {style: "currency", currency: "EUR"}).format(convertedValue)
        }

        if (convertFromValue == "real" && convertForValue == "libra") {
            const convertedValue = amountValue / libraToday

            convertFromParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(amountValue)
            convertForParagraph.innerHTML = new Intl.NumberFormat("uk-UK", {style: "currency", currency: "GBP"}).format(convertedValue)
        }

        if (convertFromValue == "real" && convertForValue == "bc") {
            const convertedValue = amountValue / bitCoinToday

            convertFromParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(amountValue)
            convertForParagraph.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "BTC"}).format(convertedValue)
        }

        if (convertFromValue == "real" && convertForValue == "real") {
            const convertedValue = amountValue / 1

            convertFromParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(amountValue)
            convertForParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(convertedValue)
        }
}

currencySelectFrom.addEventListener("change", changeImageFrom)
currencySelectFor.addEventListener("change", changeImageFor)
convertButton.addEventListener("click", convertAmount)

