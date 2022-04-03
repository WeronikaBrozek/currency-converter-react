const Form = () => (
    <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <div>
            <label>
                <span className="form__labelText">
                    {text}
                </span>
                <input className="form__field" type="number" name="amount" required min="0.01"
                    step="0.01" autofocus />
            </label>
        </div>
        <div>
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
);

export default Form;