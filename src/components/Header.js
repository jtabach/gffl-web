import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import RegisterButton from './RegisterButton';

class Header extends Component {
  render() {
    console.log(this.props.isLoggedIn);
    return (
      <div>
        <div>This is the header</div>
        <div>
          <RegisterButton />
          <LoginButton />
          <LogoutButton />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ isLoggedIn }) {
  return { isLoggedIn };
}

export default connect(mapStateToProps)(Header);
