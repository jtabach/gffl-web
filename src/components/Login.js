import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from './forms/LoginForm';

import { loginUser, getUser } from '../actions/auth';

class Login extends Component {
  handleSubmit = values => {
    this.props.loginUser(values).then(() => {
      this.props.history.push('/');
    });
  };

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.isLoggedIn ? (
          <Redirect to="/" />
        ) : (
          <div>
            <div>This is the Login screen</div>
            <LoginForm onSubmit={this.handleSubmit} />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ isLoggedIn }) {
  return {
    isLoggedIn
  };
}

export default connect(mapStateToProps, { loginUser, getUser })(Login);
