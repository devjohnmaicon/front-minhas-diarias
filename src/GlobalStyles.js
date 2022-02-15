import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: sans-serif;
}

.App{
    width: 100%;
    height: 100vh;
    background-color: #000;
    padding: .5rem;
}

`;

export default GlobalStyle;
