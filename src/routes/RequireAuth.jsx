import React from "react";
import { useSelector } from "react-redux";
import { Login } from "../pages/login/Login";

export const RequireAuth = ({ children }) => {
  const { logged } = useSelector((state) => state.login);

  // if (!logged) {
  //   return <Login />;
  // }

  return <>{children}</>;
};
