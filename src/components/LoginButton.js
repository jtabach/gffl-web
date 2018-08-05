import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loginUser, getUser } from '../actions/auth';

class LoginButton extends Component {
  _handleClick() {
    this.props
      .loginUser({
        email: 'tsddsdfgfdxct56@tes1t.com',
        password: 'passwowwrdzz'
      })
      .then(res => {
        this.props.getUser();
      });
  }

  render() {
    return <button onClick={() => this._handleClick()}>Login</button>;
  }
}

export default connect(null, { loginUser, getUser })(LoginButton);
