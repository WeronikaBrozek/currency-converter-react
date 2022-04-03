import React from "react";
import Form from "./Form";


function App() {
    return (
        <form className="form">
            <Form />
            <div>
                <button className="form__button">Przelicz</button>
            </div>
            <p className="form__result">
                Otrzymana kwota: <strong></strong>
            </p>
        </form>
    );
}

export default App;
