import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';

import { getUser } from '../../actions/auth';

import LoginButton from '../buttons/LoginButton';
import LogoutButton from '../buttons/LogoutButton';
import RegisterButton from '../buttons/RegisterButton';

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
      <div styleName={'test'}>
        <div>This is the header</div>
        {this.renderAuthLinks()}
      </div>
    );
  }
}

function mapStateToProps({ isLoggedIn }) {
  return { isLoggedIn };
}

export default connect(mapStateToProps, { getUser })(
  CSSModules(Header, styles)
);
