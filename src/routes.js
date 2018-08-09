import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/containers/Login';
import Register from './components/containers/Register';
import App from './components/containers/App';
import Me from './components/containers/Me';
import CreateLeague from './components/pages/CreateLeague';

import withAuth from './middleware/withAuth';

export default (
  <Switch>
    <Route exact path="/login" component={withAuth(Login)} />
    <Route exact path="/register" component={withAuth(Register)} />
    <Route exact path="/me" component={Me} />
    {/* <Route exact path="/createLeague" component={CreateLeague} /> */}
    <Route path="/" component={App} />
  </Switch>
);
