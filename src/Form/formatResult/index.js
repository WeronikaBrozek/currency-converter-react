const formatResult = (currencyObject) => {
    return `${currencyObject.targetAmount.toFixed(2)} ${currencyObject.outputCurrency}`
}

export default formatResult; 