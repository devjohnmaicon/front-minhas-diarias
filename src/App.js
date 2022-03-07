import { ToastContainer } from "react-toastify";
import GlobalStyle from "./GlobalStyles";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />
      <Home />
    </div>
  );
}

export default App;
