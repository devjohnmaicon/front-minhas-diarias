import React from "react";
import { Route, Router, Routes as Switch } from "react-router-dom";
import { Login } from "../pages/login/Login";
import { Home } from "../pages/home/Home";
import { AddDaily } from "../pages/AddDaily/AddDaily";
import { RequireAuth } from "./RequireAuth";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/login" element={<Login />} />

      <Route
        path="/home"
        element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        }
      />
      <Route
        path="newDaily"
        element={
          <RequireAuth>
            <AddDaily />
          </RequireAuth>
        }
      >
        <Route path=":id" element={<AddDaily />} />
      </Route>
    </Switch>
  );
};
