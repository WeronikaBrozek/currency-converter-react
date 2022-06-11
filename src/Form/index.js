import React, { useState } from "react";
import currencies from "../currencies.js";
import formatResult from "./formatResult";
import Clock from "../clock/index";
import {MainForm, Fieldset, Legend, Container, LabelText, Input, Button, Result} from "./styled";

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
        <MainForm onSubmit={onFormSubmit}>
            <Fieldset>
                <Legend>Kalkulator walut</Legend>
                <div><Clock /></div>
                <Container>
                    <label>
                        <LabelText>
                            Wartość [PLN]:
                        </LabelText>
                        <Input
                            type="number"
                            name="amount"
                            required min="0.01"
                            step="0.01"
                            autoFocus
                            value={input}
                            onChange={onInputChange} />
                    </label>
                </Container>
                <Container>
                    <label>
                        <LabelText>
                            Wybierz walutę
                        </LabelText>
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
                </Container>
            </Fieldset>
            < div >
                <Button>
                    Przelicz
                </Button>
            </div >
            <Result>
                Otrzymana kwota: <strong>{result}</strong>
            </Result>
        </MainForm>
    );
};

export default Form;