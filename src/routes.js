import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/containers/Login';
import Register from './components/containers/Register';
import App from './components/containers/App';

import withAuth from './middleware/withAuth';

export default (
  <Switch>
    <Route exact path="/login" component={withAuth(Login)} />
    <Route exact path="/register" component={withAuth(Register)} />
    <Route path="/" component={App} />
  </Switch>
);
