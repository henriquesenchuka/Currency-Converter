const dollarToday = 4.89
const libraToday = 6.01
const euroToday = 5.24
const bitCoinToday = 173000.93

const convertButton = document.querySelector(".convert-button")
const currencySelectFrom = document.querySelector("#convert-from")
const currencySelectFor = document.querySelector("#convert-for")


function convertAmount() {
    const amountValue = document.querySelector("#amount").value // Amount Input Value
    const convertFromValue = currencySelectFrom.value
    const convertForValue = currencySelectFor.value
    const convertFromParagraph = document.querySelector(".from-amount-p")
    const convertForParagraph = document.querySelector(".for-amount-p")

        if (convertFromValue == "real" && convertForValue == "dollar") {
            const convertedValue = amountValue / dollarToday

            convertFromParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(amountValue)
            convertForParagraph.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(convertedValue)
        }

        if (convertFromValue == "real" && convertForValue == "euro") {
            const convertedValue = amountValue / dollarToday

            convertFromParagraph.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency", currency: "BRL"}).format(amountValue)
            convertForParagraph.innerHTML = new Intl.NumberFormat("en-US", {style: "currency", currency: "USD"}).format(convertedValue)
        }


}


convertButton.addEventListener("click", convertAmount)

