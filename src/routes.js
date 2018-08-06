import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';
import App from './components/App';

export default (
  <Switch>
    <Route
      exact
      path="/login"
      render={() => <ProtectedRoute child={<Login />} />}
    />
    <Route
      exact
      path="/register"
      render={() => <ProtectedRoute child={<Register />} />}
    />
    <Route path="/" component={App} />
  </Switch>
);
