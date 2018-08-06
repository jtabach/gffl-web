import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getUser } from '../actions/auth';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import RegisterButton from './RegisterButton';

class Header extends Component {
  componentWillMount() {
    this.props.getUser();
  }

  renderAuthLinks() {
    switch (this.props.isLoggedIn) {
      case null:
        return <div />;
      case false:
        return (
          <li>
            <LoginButton />
            <RegisterButton />
          </li>
        );
      default:
        return (
          <li>
            <LogoutButton />
          </li>
        );
    }
  }

  render() {
    return (
      <div>
        <div>This is the header</div>
        {this.renderAuthLinks()}
      </div>
    );
  }
}

function mapStateToProps({ isLoggedIn }) {
  return { isLoggedIn };
}

export default connect(mapStateToProps, { getUser })(Header);
