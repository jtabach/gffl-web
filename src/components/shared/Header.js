import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';

import LoginButton from '../buttons/LoginButton';
import LogoutButton from '../buttons/LogoutButton';
import RegisterButton from '../buttons/RegisterButton';
import DrawerToggleButton from './DrawerToggleButton';
import HeaderButton from './HeaderButton';

import { FaCaretDown, FaBell } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

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
          <ul>
            <li>
              <HeaderButton icon={<MdSettings />} />
            </li>
            <li>
              <HeaderButton icon={<FaBell />} />
            </li>
            <li>
              <HeaderButton icon={<FaCaretDown />} />
            </li>
            {/* <li>
              <LogoutButton />
            </li> */}
          </ul>
        );
    }
  }

  render() {
    return (
      <div styleName="header">
        <div styleName="contain">
          <div styleName="navigation">
            <DrawerToggleButton click={this.props.handleDrawerToggleClick} />
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
