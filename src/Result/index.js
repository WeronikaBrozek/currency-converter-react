import "./style.css";

const RenderResult = ({result}) => (
    <p className="form__result">
        Otrzymana kwota: <strong>{result}</strong>
    </p>
);

export default RenderResult;