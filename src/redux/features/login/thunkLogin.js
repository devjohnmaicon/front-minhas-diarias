import { toast } from "react-toastify";
import { api } from "../../../assets/api";
import { errorLogin, login } from "./sliceLogin";


export const signIn = (credentials) => async (dispatch) => {
  try {
    const { data } = await api.post("/login", credentials);
    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

    dispatch(login(data));

    window.localStorage.setItem("user", JSON.stringify(data));
  } catch (e) {
    dispatch(errorLogin(e.message));

    toast.error("Credenciais inválidas !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const autoLogin = (hasLoged) => async (dispatch, getState) => {
  if (hasLoged) {
    dispatch(login(hasLoged));
    api.defaults.headers.common["Authorization"] = `Bearer ${hasLoged.token}`;
  }
};
