import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Store } from "../contexts/auth/AuthContext";

export const RequireAuth = ({ children }) => {
  const { authenticated } = Store();

  console.log("xxxxxx", authenticated);

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
