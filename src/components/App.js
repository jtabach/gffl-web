import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import DemoWorker from './DemoWorker';
import DemoAuth from './DemoAuth';
import RegisterButton from './RegisterButton';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class App extends Component {
  render() {
    return (
      <div>
        <p>This is my new react app</p>
        <DemoWorker />
        <DemoAuth />
        <RegisterButton />
        <LoginButton />
        <LogoutButton />
      </div>
    );
  }
}

export default hot(module)(App);
