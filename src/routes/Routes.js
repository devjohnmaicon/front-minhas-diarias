import React from "react";
import { Route, Router, Routes as Switch } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Home } from "../pages/home/Home";
import { RequireAuth } from "./RequireAuth";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" element={<Login />} />

      <Route
        path="/home"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
    </Switch>
  );
};
