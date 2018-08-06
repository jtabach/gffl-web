import React, { Component } from 'react';
import { connect } from 'react-redux';

import RegisterForm from './forms/RegisterForm';

import { registerUser, getUser } from '../actions/auth';

class Register extends Component {
  handleSubmit = values => {
    this.props
      .registerUser({ email: values.email, password: values.password })
      .then(() => {
        this.props.getUser();
      });
  };

  render() {
    return (
      <div>
        <div>This is the Register screen</div>
        <RegisterForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(null, { registerUser, getUser })(Register);
