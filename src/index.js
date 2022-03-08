import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalContextProvider } from "./contexts/GlobalContext";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter } from "react-router-dom";
import { DailiesContextProvider } from "./contexts/Dailies/DailiesContext";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <DailiesContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </DailiesContextProvider>
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
