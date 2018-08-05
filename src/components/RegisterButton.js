import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';
import axios from 'axios';

class RegisterButton extends Component {
  _handleClick() {
    console.log('click');
    this.props.registerUser({
      email: 'tsdsdfgfdxct56@tes1t.com',
      password: 'passwowwrdzz'
    });
  }

  render() {
    return <button onClick={() => this._handleClick()}>Register</button>;
  }
}

export default connect(null, { registerUser })(RegisterButton);
