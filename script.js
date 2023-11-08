const dollarToday = 4.89
const libraToday = 6.01
const euroToday = 5.24
const bitCoinToday = 173000.93

const convertButton = document.querySelector(".convert-button")


function convertAmount() {
    const amountValue = document.querySelector("#amount").value
    const convertFromParagraph = document.querySelector(".from-amount-p")
    const convertForParagraph = document.querySelector(".for-amount-p")

    const convertedValue = amountValue / dollarToday

    convertFromParagraph.innerHTML = amountValue
    convertForParagraph.innerHTML = convertedValue
}


convertButton.addEventListener("click", convertAmount)

