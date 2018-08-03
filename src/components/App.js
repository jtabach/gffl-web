import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import DemoWorker from './DemoWorker';

class App extends Component {
  render() {
    return (
      <div>
        <p>This is my new react app</p>
        <DemoWorker />
      </div>
    );
  }
}

export default hot(module)(App);
