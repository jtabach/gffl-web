import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';

import LoginButton from '../buttons/LoginButton';
import LogoutButton from '../buttons/LogoutButton';
import RegisterButton from '../buttons/RegisterButton';
import DrawerToggleButton from './DrawerToggleButton';

class Header extends Component {
  renderAuthLinks() {
    switch (this.props.user._id) {
      case null:
        return <div />;
      case false:
        return (
          <div>
            <li>
              <LoginButton />
            </li>
            <li>
              <RegisterButton />
            </li>
          </div>
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
      <div styleName="header">
        <div styleName="contain">
          <div styleName="navigation">
            <DrawerToggleButton />
            <div styleName="logo">
              <Link to="/me">GFFL</Link>
            </div>
            <div styleName="navigation-items">
              <ul>{this.renderAuthLinks()}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(CSSModules(Header, styles));
