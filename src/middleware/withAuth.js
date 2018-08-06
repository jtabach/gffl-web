import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getUser } from '../actions/auth';

function withAuth(InnerComponent) {
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
            <InnerComponent {...this.props} />
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

  return connect(mapStateToProps, { getUser })(ProtectedRoute);
}

export default withAuth;
