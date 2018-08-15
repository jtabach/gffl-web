import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { getUser } from '../actions/auth';

function withoutAuth(InnerComponent) {
  class ProtectedRoute extends Component {
    componentDidMount() {
      this.props.getUser();
    }

    renderComponent() {
      switch (this.props.user) {
        case null:
          // TODO: render a loading spinner
          return <div />;
        case false:
          return <Redirect to="/" />;
        default:
          return <InnerComponent {...this.props} />;
      }
    }

    render() {
      return <div>{this.renderComponent()}</div>;
    }
  }

  function mapStateToProps({ user }) {
    return { user };
  }

  return connect(mapStateToProps, { getUser })(ProtectedRoute);
}

export default withoutAuth;
