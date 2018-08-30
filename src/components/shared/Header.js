import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';

import LoginButton from '../buttons/LoginButton';
import LogoutButton from '../buttons/LogoutButton';
import RegisterButton from '../buttons/RegisterButton';

class Header extends Component {
  renderAuthLinks() {
    switch (this.props.user) {
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
      <div styleName={'test'}>
        <div>This is the header</div>
        <ul>{this.renderAuthLinks()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(CSSModules(Header, styles));
