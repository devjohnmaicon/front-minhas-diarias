import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { api } from "../../assets/api";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    token: "",
    user_name: "",
    user_id: "",
    logged: false,
    error: null,
  },
  reducers: {
    login(state, action) {
      state.token = action.payload.token;
      state.user_name = action.payload.user_name;
      state.user_id = action.payload.id;
      state.logged = true;
    },
    errorLogin(state, action) {
      state.error = action.payload;
    },
    exit(state) {
      state.token = "";
      state.user_name = "";
      state.user_id = "";
      state.logged = false;
      state.error = null;
    },
  },
});

export const { login, errorLogin, exit } = loginSlice.actions;

export default loginSlice.reducer;

export const signIn = (credentials) => async (dispatch) => {
  try {
    const { data } = await api.post("/login", credentials);

    dispatch(login(data));

    window.localStorage.setItem("user", JSON.stringify(data));
  } catch (e) {
    dispatch(errorLogin(e.message));

    toast.error("Email e  Password, são obrigatórios !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  }
};

export const autoLogin = (hasLoged) => async (dispatch, getState) => {
  if (hasLoged) {
    dispatch(login(hasLoged));
  }
};

export const logOut = () => async (dispatch) => {
  dispatch(exit());
  window.localStorage.removeItem("user");
};
