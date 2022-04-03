import React from "react";
import Form from "./Form";
import Button from "./Button";


function App() {
    return (
        <form className="form">
            <Form />
            <Button />
            <p className="form__result">
                Otrzymana kwota: <strong></strong>
            </p>
        </form>
    );
}

export default App;
