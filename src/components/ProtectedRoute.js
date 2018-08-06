import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LoginForm from './forms/LoginForm';

import { getUser } from '../actions/auth';

class ProtectedRoute extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div>
        {this.props.isLoggedIn ? (
          <Redirect to="/" />
        ) : (
          <div>{this.props.child}</div>
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

export default connect(mapStateToProps, { getUser })(ProtectedRoute);
