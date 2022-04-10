import React, { useState } from "react";
import "./style.css";
import currencies from "../currencies.js";


const Form = () => {

    const [input, setInput] = useState();
    const [outputCurrency, setOutputCurrency] = useState();
    const [result, setResult] = useState("");


    const onInputChange = ({ target }) => setInput(target.value);
    const onOutputChange = ({ target }) => setOutputCurrency(target.output);

    // const calculateResult = () => {
    //     const rate = currencies.find(({ id }) => id === currency).rate;
    //     setResult({
    //         sourceAmount: +input,
    //         targetAmount: input / rate,
    //         currency,
    //     });
    // };


    const onFormSubmit = (event) => {
        event.preventDefault();
        // calculateResult();
    };

    return (
        <form className= "form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
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
                            autofocus
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
                            output={outputCurrency}
                            onChange={onOutputChange}
                        >
                            {currencies.map((currency) => (
                                <option key={currency.id} value={currency.shortName}>
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
                    onClick={() => console.log("Kliknięto przycisk")}
                >
                    Przelicz
                </button>
            </div >
        </form>
    );


};

export default Form;