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
  },
});

export const { login, errorLogin } = loginSlice.actions;

export default loginSlice.reducer;

export const signIn = (credentials) => async (dispatch) => {
  try {
    const { data } = await api.post("/login", credentials);

    dispatch(login(data));
  } catch (e) {
    toast.error("Email e Password são obrigatorios !", {
      position: toast.POSITION.TOP_RIGHT,
    });

    dispatch(errorLogin(e.message));
  }
};
