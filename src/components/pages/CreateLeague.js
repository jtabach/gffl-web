import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../shared/Header';

class App extends Component {
  render() {
    return <div>Create a League here</div>;
  }
}

export default connect(null, {})(App);
