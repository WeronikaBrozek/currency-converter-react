import React, { useState } from "react";
import "./style.css";
import  currencies  from "../currencies.js";

const Form = () => {

    const [input, setInput] = useState();
    const [outputCurrency, setOutputCurrency] = useState();


    const onInputChange = ({ target }) => setInput(target.value);
    const onOutputChange = ({ target }) => setOutputCurrency(target.output);


    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onFormSubmit}>
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
        </form>
    );


};

export default Form;