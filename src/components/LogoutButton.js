import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser, getUser } from '../actions/auth';

class LogoutButton extends Component {
  _handleClick() {
    this.props.logoutUser();
  }

  render() {
    return <button onClick={() => this._handleClick()}>Logout</button>;
  }
}

export default connect(null, { logoutUser, getUser })(LogoutButton);
