import { createSlice } from "@reduxjs/toolkit";

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
    logout(state) {
      state.token = "";
      state.user_name = "";
      state.user_id = "";
      state.logged = false;
      state.error = null;
    },
  },
});

export const { login, errorLogin, logout } = loginSlice.actions;
export default loginSlice.reducer;
