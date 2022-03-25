import React from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

export const RequireAuth = ({ children }) => {


  // if (!authenticated) {
  //   return <Navigate to="/login" />;
  // }

  return <>{children}</>;
};
