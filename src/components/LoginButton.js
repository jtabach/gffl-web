import React, { Component } from 'react';
import axios from 'axios';

class LoginButton extends Component {
  _handleClick() {
    console.log('click');
    axios
      .post('http://localhost:5000/api/auth/login', {
        email: 'tesasdfsssst@tes1t.com',
        password: 'passwowwrdzz'
      })
      .then(response => {
        console.log('done');
      });
  }

  render() {
    return <button onClick={() => this._handleClick()}>Login</button>;
  }
}

export default LoginButton;
