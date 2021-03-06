import styled from "styled-components";

export const MainForm = styled.form`
    max-width: 700px;
    padding: 150px 20px;
    margin: auto;
`;

export const Fieldset = styled.fieldset`
    border: 1px solid ${({ theme }) => theme.color.domino};
    background-color: ${({ theme }) => theme.color.pearlBush};
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 19px 1px ${({ theme }) => theme.color.domino};
`;

export const Legend = styled.legend`
    padding: 5px;
    border-radius: 5px;
    border: none;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.diSerria};
    box-shadow: 0 0 13px 1px ${({ theme }) => theme.color.santaFe};
`;

export const Container = styled.div`
    margin: 20px 0;
`;

export const LabelText = styled.span`
    width: 130px;
    display: inline-block;
`;

export const Input = styled.input`
    border: 1px solid ${({ theme }) => theme.color.mineShaft};
    padding: 5px;
    max-width: 250px;
    width: 100%;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 5px;
    margin: 20px 0;
    font-family: 'Lato', sans-serif;
    max-width: 700px;
    width: 100%;
    border: none;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.diSerria};
    color: ${({ theme }) => theme.color.white};
    transition: 0.7s;
    box-shadow: 0px 0px 7px 1px ${({ theme }) => theme.color.santaFe};
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
    }
`;

export const Result = styled.div`
    color: ${({ theme }) => theme.color.mineShaft};
`;


export const Loading = styled.div`
    max-width: 700px;
    padding: 150px 20px;
    margin: auto;
`

export const LegalInfo = styled.p`
    font-size: small;
    text-align: center;
    color: ${({ theme }) => theme.color.gray};
    margin: 5px;
`