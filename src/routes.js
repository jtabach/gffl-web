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
    <Route exact path="/register" component={Register} />
    <Route path="/" component={App} />
  </Switch>
);
