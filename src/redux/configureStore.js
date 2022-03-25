import { combineReducers, configureStore } from "@reduxjs/toolkit";

import login from "./features/login";
import dailies from "./features/dailies";

const reducer = combineReducers({
  login: login,
  dailies: dailies,
});

const store = configureStore({ reducer });

export default store;
