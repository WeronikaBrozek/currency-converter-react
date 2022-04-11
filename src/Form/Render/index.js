const render = (currencyObject) => {
    return `${currencyObject.targetAmount.toFixed(2)} ${currencyObject.outputCurrency}`
}

export default render; 