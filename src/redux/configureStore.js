import { combineReducers, configureStore } from "@reduxjs/toolkit";

import login from "./features/login/sliceLogin";
import user from "./features/user/sliceUser";

const reducer = combineReducers({
  login: login,
  user: user,
});

const store = configureStore({ reducer });

export default store;
