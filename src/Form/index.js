import React, { useState } from "react";
import "./style.css";
import currencies from "../currencies.js";
import formatResult from "./formatResult";
import Clock from "../clock/index";


const Form = () => {

    const [input, setInput] = useState("");
    const [outputCurrency, setOutputCurrency] = useState("EUR");
    const [result, setResult] = useState("");

    const onInputChange = ({ target }) => setInput(target.value);
    const onOutputCurrencyChange = ({ target }) => setOutputCurrency(target.value);

    const calculateResult = (outputCurrency) => {
        const currencyRate = currencies.find(({ shortName }) => shortName === outputCurrency).rate;

        setResult(
            formatResult({
                targetAmount: +input / currencyRate,
                outputCurrency,
            })
        );
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(outputCurrency);
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <div><Clock /></div>
                <div className="form__container">
                    <label>
                        <span className="form__labelText">
                            Wartość [PLN]:
                        </span>
                        <input
                            className="form__field"
                            type="number"
                            name="amount"
                            required min="0.01"
                            step="0.01"
                            autoFocus
                            value={input}
                            onChange={onInputChange} />
                    </label>
                </div>
                <div className="form__container">
                    <label>
                        <span className="form__labelText">
                            Wybierz walutę
                        </span>
                        <select
                            name="currency"
                            value={outputCurrency}
                            onChange={onOutputCurrencyChange}
                        >
                            {currencies.map((currency) => (
                                <option
                                    key={currency.id}
                                    value={currency.shortName}>
                                    {currency.shortName}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            </fieldset>
            < div >
                <button
                    className="form__button"
                >
                    Przelicz
                </button>
            </div >
            <p className="form__result">
                Otrzymana kwota: <strong>{result}</strong>
            </p>
        </form>
    );
};

export default Form;