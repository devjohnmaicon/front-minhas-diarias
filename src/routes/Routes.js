import React from 'react';
import { Route, Router, Routes as Switch } from 'react-router-dom';
import { Login } from '../pages/login/Login';
import { Register } from '../pages/register/Register';
import { Dailies } from '../pages/dailies';
import { Home } from '../pages/home';

export const Routes = () => {
  return (
    <Switch>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/home' element={<Home />} />
      <Route path='/dailies' element={<Dailies />} />
    </Switch>
  );
};
