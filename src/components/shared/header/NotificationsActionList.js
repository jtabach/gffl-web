import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';
import styles from './NotificationsActionList.scss';

import Notification from './Notification';

import {
  viewNotification,
  viewAllNotifications
} from '../../../actions/notification';

class NotificationsActionList extends Component {
  constructor(props) {
    super(props);

    this.handleNotificationClick = this.handleNotificationClick.bind(this);
    this.handleViewAllNotificationsClick = this.handleViewAllNotificationsClick.bind(
      this
    );
  }

  static propTypes = {
    buttonType: PropTypes.string.isRequired,
    user: CustomPropTypes.user.isRequired
  };

  handleClickOutside = evt => {
    this.props.onHandleClickOutside(this.props.buttonType);
  };

  handleNotificationClick(notification) {
    if (!notification.hasViewed) {
      this.props.viewNotification(notification);
    }
    this.props.history.push(`/league/${notification.league._id}`);
    this.props.onHandleClickOutside('notifications');
  }

  handleViewAllNotificationsClick() {
    const { user, viewAllNotifications } = this.props;
    const notificationsArray = user.notifications.filter(notification => {
      return !notification.hasViewed;
    });

    if (notificationsArray.length) {
      viewAllNotifications(notificationsArray);
    }
  }

  render() {
    const { onHandleClickOutside, buttonType, user } = this.props;

    return (
      <div styleName="notifications">
        <div styleName="notifications__header">
          <p styleName="notifications__header--title">Notifications</p>
          <div
            styleName="notifications__header--button"
            onClick={this.handleViewAllNotificationsClick}
          >
            Mark All as Read
          </div>
        </div>
        <ul styleName="notifications__list">
          {[...user.notifications].reverse().map(notification => {
            return (
              <li styleName="notifications__list--item" key={notification._id}>
                <Notification
                  notification={notification}
                  onHandleClick={this.handleNotificationClick}
                />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, {
  viewNotification,
  viewAllNotifications
})(withRouter(onClickOutside(CSSModules(NotificationsActionList, styles))));
