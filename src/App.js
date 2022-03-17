import { ToastContainer } from "react-toastify";
import GlobalStyle from "./GlobalStyles";
import { Routes } from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />

      <Routes />
    </div>
  );
}

export default App;
