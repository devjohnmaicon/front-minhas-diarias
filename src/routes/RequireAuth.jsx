import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Login } from "../pages/login/Login";

export const RequireAuth = ({ children }) => {
  const { logged } = useSelector((state) => state.login);

  console.log("logged", logged);

  if (!logged) {
    return <Login />;
  }

  return <>{children}</>;
};
