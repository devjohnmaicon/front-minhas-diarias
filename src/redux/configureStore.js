import { combineReducers, configureStore } from "@reduxjs/toolkit";

import login from "./features/login";
import user from "./features/user";

const reducer = combineReducers({
  login: login,
  user: user,
});

const store = configureStore({ reducer });

export default store;
