import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import DemoWorker from '../demos/DemoWorker';
import DemoAuth from '../demos/DemoAuth';
import Header from '../shared/Header';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>This is my new react app</p>
        <DemoWorker />
        <DemoAuth />
      </div>
    );
  }
}

export default hot(module)(App);
