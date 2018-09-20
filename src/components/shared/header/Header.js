import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';

import LoginButton from '../../buttons/LoginButton';
import RegisterButton from '../../buttons/RegisterButton';
import DrawerToggleButton from './DrawerToggleButton';
import HeaderButton from './HeaderButton';

import SettingsActionList from './SettingsActionList';
import NotificationsActionList from './NotificationsActionList';

import { FaCaretDown, FaBell } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

const SETTINGS_BUTTON = 'settings';
const NOTIFICATIONS_BUTTON = 'notifications';
const CARET_BUTTON = 'caret';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleButtonClickOutside = this.handleButtonClickOutside.bind(this);
  }

  state = {
    isSettingsOpen: false,
    isNotificationsOpen: false,
    isCaretOpen: false
  };

  handleButtonClick(buttonType) {
    console.log('button');
    switch (buttonType) {
      case SETTINGS_BUTTON:
        this.setState({
          isSettingsOpen: true
        });
        break;
      case NOTIFICATIONS_BUTTON:
        this.setState({
          isNotificationsOpen: true
        });
        break;
      case CARET_BUTTON:
        this.setState({
          isCaretOpen: true
        });
        break;
      default:
        break;
    }
  }

  handleButtonClickOutside(buttonType) {
    console.log('outside');
    switch (buttonType) {
      case SETTINGS_BUTTON:
        this.setState({
          isSettingsOpen: false
        });
        break;
      case NOTIFICATIONS_BUTTON:
        this.setState({
          isNotificationsOpen: false
        });
        break;
      case CARET_BUTTON:
        this.setState({
          isCaretOpen: false
        });
        break;
      default:
        break;
    }
  }

  renderAuthLinks() {
    switch (this.props.user._id) {
      case null:
        return <div />;
      case false:
        return (
          <ul>
            <li>
              <LoginButton />
            </li>
            <li>
              <RegisterButton />
            </li>
          </ul>
        );
      default:
        return (
          <ul>
            <li>
              <HeaderButton
                icon={<FaBell />}
                onHandleClick={this.handleButtonClick}
                buttonType={NOTIFICATIONS_BUTTON}
                actionList={
                  this.state.isNotificationsOpen ? (
                    <NotificationsActionList
                      onHandleClickOutside={this.handleButtonClickOutside}
                      buttonType={NOTIFICATIONS_BUTTON}
                    />
                  ) : null
                }
              />
            </li>
            <li>
              <HeaderButton
                icon={<MdSettings />}
                onHandleClick={this.handleButtonClick}
                buttonType={SETTINGS_BUTTON}
                actionList={
                  this.state.isSettingsOpen ? (
                    <SettingsActionList
                      onHandleClickOutside={this.handleButtonClickOutside}
                      buttonType={SETTINGS_BUTTON}
                    />
                  ) : null
                }
              />
            </li>
            <li>{/* <HeaderButton icon={<FaCaretDown />} /> */}</li>
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
            <div styleName="navigation-items">{this.renderAuthLinks()}</div>
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
