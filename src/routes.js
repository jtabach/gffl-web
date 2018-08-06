import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import App from './components/App';

export default (
  <div>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/" component={App} />
  </div>
);
