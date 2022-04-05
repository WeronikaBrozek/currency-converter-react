import React, {useState} from "react";
import "./style.css";

const Form = () => {

    const onFormSubmit = (event) => {
        event.preventDefault();
    };

    const onValueChange = ({target}) => setValue(target.value);

    const [value, setValue] = useState();

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
                            value={value}
                            onChange={onValueChange} />
                    </label>
                </div>
                <div className="form__container">
                    <label>
                        <span className="form__labelText">
                            Wybierz walutę
                        </span>
                        <select name="currency">
                            <option value="EUR" selected>EUR</option>
                            <option value="GBP">GBP</option>
                            <option value="JPY">JPY</option>
                        </select>
                    </label>
                </div>
            </fieldset>
        </form>
    );


};

export default Form;