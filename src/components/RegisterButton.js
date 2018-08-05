import React, { Component } from 'react';
import axios from 'axios';

class RegisterButton extends Component {
  _handleClick() {
    console.log('click');
    axios
      .post('http://localhost:5000/api/auth/register', {
        email: 'test@test.com',
        password: 'passwordzz'
      })
      .then(response => {
        console.log('done');
      });
  }

  render() {
    return <button onClick={() => this._handleClick()}>Register</button>;
  }
}

export default RegisterButton;
