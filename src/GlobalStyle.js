import { createGlobalStyle } from "styled-components";
import background from "./background.jpg"

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        max-width: 1000px;
        margin: auto;
        font-family: 'Raleway', sans-serif;
        color: #000;
        background-color: #000;
        background-image: url("${background}");
        background-size: cover;
    }
`;