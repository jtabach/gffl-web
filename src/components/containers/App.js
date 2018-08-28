import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import DemoWorker from '../demos/DemoWorker';
import DemoAuth from '../demos/DemoAuth';
import Header from '../shared/Header';

import { fetchUser } from '../../actions/auth';

class App extends Component {
  componentDidMount() {
    // this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Header />
        <p>This is my new react app</p>
      </div>
    );
  }
}

export default hot(module)(connect(null, { fetchUser })(App));
