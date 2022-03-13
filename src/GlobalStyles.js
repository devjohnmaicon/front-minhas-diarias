import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    font-family: sans-serif;
    
    a{
         text-decoration: none;

     }
}

.App{
    width: 100%;
    height: 100vh;
    background-color: #000;
    padding: .5rem;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: min-content;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #BD4B4B;
  border-radius: 15px;
}

`;

export default GlobalStyle;
