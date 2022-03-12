import { Route, Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Loading } from "./components/Loading";
import { Store } from "./contexts/GlobalContext";
import GlobalStyle from "./GlobalStyles";
import { AddDaily } from "./pages/Adddaily/AddDaily";
import { Home } from "./pages/home/Home";

function App() {
  

  return (
    <div className="App">
      <GlobalStyle />
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="newDaily" element={<AddDaily />}>
          <Route path=":id" element={<AddDaily />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
