import styled from "styled-components";

export const MainForm = styled.form`
    max-width: 700px;
    padding: 20px;
    margin: auto;
`;

export const Fieldset = styled.fieldset`
    border: 1px solid #3a3a3a;
    background-color: rgba(231, 231, 231, 0.486);
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 19px 1px #1b1a1a;
`;

export const Legend = styled.legend`
    padding: 5px;
    border-radius: 5px;
    border: none;
    color: #fff;
    background-color: #b8860b;
    box-shadow: 0px 0px 13px 1px #333;
`;

export const Container = styled.div`
    margin: 20px 0px 20px 0px;
`;

export const LabelText = styled.span`
    width: 130px;
    display: inline-block;
`;

export const Input = styled.input`
    border: 1px solid #3a3a3a;
    padding: 5px;
    max-width: 250px;
    width: 100%;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 5px;
    margin: 20px 0px 20px 0px;
    font-family: 'Raleway', sans-serif;
    max-width: 700px;
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: darkgoldenrod;
    color: #fff;
    transition: 0.7s;
    box-shadow: 0px 0px 19px 1px #1b1a1a;
    cursor: pointer;

    &:hover {
        background-color: #ddaa27;
    }

    &:active {
        background-color: #e4b955;
    }
`;

export const Result = styled.p`
    color: #e5e5e5;
`;