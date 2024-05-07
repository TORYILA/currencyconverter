const currencyValues = {
    USD: 1,
    EUR: 0.85,
    GBP: 0.73,
    JPY: 111.07,
    NGN: 1300,
    CHF: 1.11,
    TRY: 0.031,
    AED: 0.27,
    UGX: 0.00026,
    SAR: 0.27,
    QAR: 0.27,
    NZD: 0.60,
    MXN: 0.059,
    LYD: 0.21,
    IDR: 0.000063,
    INR: 0.012,
    CAD: 0.73,
    AUD: 0.66,
    AFN: 0.014,
    CNY: 0.14,
   
};

    const fromCurrencySelect = document.getElementById('fromCurrency');
    const toCurrencySelect = document.getElementById('toCurrency');
function populateCurrencies() {
    

    for (const currency in currencyValues) {
        const option = document.createElement('option');
        option.value = currency;
        option.textContent = currency;
        fromCurrencySelect.appendChild(option.cloneNode(true));
        toCurrencySelect.appendChild(option);
    }
}


function calculateConvertedAmount() {
    const fromAmount = parseFloat(document.getElementById('fromAmount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const convertedAmount = (fromAmount * currencyValues[toCurrency]) / currencyValues[fromCurrency];
    return convertedAmount.toFixed(2);
}

function handleConvertButtonClick() {
    const convertedAmount = calculateConvertedAmount();
    document.getElementById('convertedResult').textContent = ` ${convertedAmount} ${document.getElementById('toCurrency').value}`;
    document.querySelector('.inputee').value = convertedAmount;
}


document.addEventListener('DOMContentLoaded', populateCurrencies);
document.getElementById('convertButton').addEventListener('click', handleConvertButtonClick);


function swapElements() {
    const temp = fromCurrencySelect.value;
    fromCurrencySelect.value = toCurrencySelect.value;
    toCurrencySelect.value = temp;   
     handleConvertButtonClick();
    }