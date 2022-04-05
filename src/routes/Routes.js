import React from "react";
import { Route, Router, Routes as Switch } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Home } from "../pages/home/Home";
import { RequireAuth } from "./RequireAuth";
import { Register } from "../pages/register/Register";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route
        path="/"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
    </Switch>
  );
};
