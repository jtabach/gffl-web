import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';
import styles from './NotificationsActionList.scss';

import Notification from './Notification';

import { viewNotification } from '../../../actions/notification';

class NotificationsActionList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    buttonType: PropTypes.string.isRequired,
    user: CustomPropTypes.user.isRequired
  };

  handleClickOutside = evt => {
    this.props.onHandleClickOutside(this.props.buttonType);
  };

  handleClick(notification) {
    if (!notification.hasViewed) {
      this.props.viewNotification(notification);
    }
    this.props.history.push(`/league/${notification.league._id}`);
    this.props.onHandleClickOutside('notifications');
  }

  render() {
    const { onHandleClickOutside, buttonType, user } = this.props;

    return (
      <div styleName="notifications">
        <ul styleName="notifications__list">
          {[...user.notifications].reverse().map(notification => {
            return (
              <Notification
                key={notification._id}
                notification={notification}
                onHandleClick={this.handleClick}
              />
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

export default connect(mapStateToProps, { viewNotification })(
  withRouter(onClickOutside(CSSModules(NotificationsActionList, styles)))
);
