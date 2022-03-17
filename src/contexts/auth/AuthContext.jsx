import { useNavigate } from "react-router-dom";
import { api } from "../../assets/api";

const { createContext, useContext, useState, useEffect } = require("react");

export const GlobalContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const [authenticated, setAuthenticated] = useState(false);
  const [user_id, setUserID] = useState("");

  const handleLogin = async (credentials) => {
    const {
      data: { token, id },
      status,
    } = await api.post("/login", credentials);

    setAuthenticated(true);
    setUserID(id);

    localStorage.setItem("token", token);
    localStorage.setItem("user_id", id);

    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    return status;
  };


  useEffect(() => {
    const token = localStorage.getItem("token");

    const hasID = localStorage.getItem("user_id");

    if (hasID) {
      setAuthenticated(true);
      navigate("/home");
    }

    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }, []);

  return (
    <GlobalContext.Provider
      value={{ authenticated, user_id, handleLogin }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const Store = () => {
  return useContext(GlobalContext);
};
