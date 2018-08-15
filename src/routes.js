import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/containers/Login';
import Register from './components/containers/Register';
import App from './components/containers/App';
import Me from './components/containers/Me';
import CreateLeague from './components/pages/CreateLeague';

import withAuth from './middleware/withAuth';
import withoutAuth from './middleware/withoutAuth';

export default (
  <Switch>
    <Route exact path="/" component={withAuth(App)} />
    <Route exact path="/login" component={withAuth(Login)} />
    <Route exact path="/register" component={withAuth(Register)} />
    <Route path="/me" component={withoutAuth(Me)} />
  </Switch>
);
