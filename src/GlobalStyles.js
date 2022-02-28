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

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 1.2rem;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #BD4B4B;
  /* border-radius: 20px; */
}

`;

export default GlobalStyle;
