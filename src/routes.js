import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/layouts/Login';
import Register from './components/layouts/Register';
import App from './components/layouts/App';

import withAuth from './middleware/withAuth';

export default (
  <Switch>
    <Route exact path="/login" component={withAuth(Login)} />
    <Route exact path="/register" component={withAuth(Register)} />
    <Route path="/" component={App} />
  </Switch>
);
