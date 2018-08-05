import React, { Component } from 'react';
import axios from 'axios';

class LogoutButton extends Component {
  _handleClick() {
    console.log('click');
    axios.post('http://localhost:5000/api/auth/logout', {}).then(response => {
      console.log(response);
    });
  }

  render() {
    return <button onClick={() => this._handleClick()}>Logout</button>;
  }
}

export default LogoutButton;
