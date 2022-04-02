function App() {
  return (
    <container className="container">
        <form className="form">
            <fieldset className="form__fieldset">
                <legend className="form__legend">Kalkulator walut</legend>
                <p>
                    <label>
                        <span className="form__labelText">
                            Wartość [PLN]:
                        </span>
                        <input className="form__field" type="number" name="amount" required min="0.01"
                            step="0.01" autofocus />
                    </label>
                </p>
                <p>
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
                </p>
            </fieldset>
            <p>
                <button className="form__button">Przelicz</button>
            </p>
            <p className="form__result">
                Otrzymana kwota: <strong></strong>
            </p>
        </form>
    </container>
  );
}

export default App;
