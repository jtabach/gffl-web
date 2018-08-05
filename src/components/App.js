import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import DemoWorker from './DemoWorker';
import DemoAuth from './DemoAuth';
import Header from './Header';

class App extends Component {
  render() {
    return (
      <div>
        <p>This is my new react app</p>
        <DemoWorker />
        <DemoAuth />
        <Header />
      </div>
    );
  }
}

export default hot(module)(App);
