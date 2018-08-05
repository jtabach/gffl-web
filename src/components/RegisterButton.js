import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser, getUser } from '../actions/auth';
import axios from 'axios';

class RegisterButton extends Component {
  _handleClick() {
    this.props
      .registerUser({
        email: 'tsddsdfgfdxct56@tes1t.com',
        password: 'passwowwrdzz'
      })
      .then(() => {
        this.props.getUser();
      });
  }

  render() {
    return <button onClick={() => this._handleClick()}>Register</button>;
  }
}

export default connect(null, { registerUser, getUser })(RegisterButton);
