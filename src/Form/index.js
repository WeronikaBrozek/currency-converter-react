import React, { useState } from "react";
import formatResult from "./formatResult";
import Clock from "../Clock/index";
import { useRatesAndDate } from "./useRatesAndDate";
import { MainForm, Fieldset, Legend, Container, LabelText, Input, Button, Result, Loading, LegalInfo } from "./styled";

const Form = () => {

    const [input, setInput] = useState("");
    const [outputCurrency, setOutputCurrency] = useState("EUR");
    const [result, setResult] = useState("");
    const { status, date, rates } = useRatesAndDate();

    const onInputChange = ({ target }) => setInput(target.value);
    const onOutputCurrencyChange = ({ target }) => setOutputCurrency(target.value);

    const calculateResult = (outputCurrency) => {
        const currencyRate = rates[outputCurrency];

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

    if (status === "error") {
        return <Loading>
            <Fieldset>
                <Legend>Kalkulator walut</Legend>
                <div><Clock /></div>
                <Container>
                    <p>
                        Ojoj... Coś poszło nie tak :( spróbuj jeszcze raz za moment!
                    </p>
                </Container>
            </Fieldset>
        </Loading>
    } else if (status === "loading") {
        return <Loading>
            <Fieldset>
                <Legend>Kalkulator walut</Legend>
                <div><Clock /></div>
                <Container>
                    <p>
                        Momencik...trwa pobieranie danych.
                    </p>
                </Container>
            </Fieldset>
        </Loading>
    }
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
                            {Object.keys(rates).map((currency) => (
                                <option
                                    key={currency}
                                    value={currency}
                                >
                                    {currency}
                                </option>
                            ))}
                        </select>
                    </label>
                </Container>
                < div >
                    <Button>
                        Przelicz
                    </Button>
                </div >
                <Result> {result ? (<p>Otrzymana kwota: <strong>{result}</strong></p>)
                    :
                    ""}
                </Result>
                <LegalInfo>
                    Kursy walut są pobierane z Europejskiego Banku Centralnego. <br></br>Aktualne na dzień:<strong>{` ${date}`}</strong>
                </LegalInfo>
            </Fieldset>
        </MainForm>
    );
};

export default Form;