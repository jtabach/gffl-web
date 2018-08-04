import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchAuthDemo } from '../actions/demo';

class DemoAuth extends Component {
  _handleClick() {
    this.props.fetchAuthDemo();
  }

  render() {
    return <button onClick={() => this._handleClick()}>Login</button>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchAuthDemo })(DemoAuth);
