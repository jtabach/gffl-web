import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginForm from './forms/LoginForm';

import { loginUser, getUser } from '../actions/auth';

class Login extends Component {
  handleSubmit = values => {
    this.props.loginUser(values).then(() => {
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <div>
        <div>This is the Login screen</div>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(null, { loginUser, getUser })(Login);
