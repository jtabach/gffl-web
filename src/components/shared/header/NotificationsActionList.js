import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ActionList from '../../common/ActionList';
import Notification from './Notification';

import { viewNotification } from '../../../actions/notification';

class NotificationsActionList extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    onHandleClickOutside: PropTypes.func.isRequired,
    buttonType: PropTypes.string.isRequired,
    user: CustomPropTypes.user.isRequired
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
      <ActionList
        onHandleClickOutside={onHandleClickOutside}
        buttonType={buttonType}
        listType={'notifications'}
      >
        {[...user.notifications].reverse().map(notification => {
          return (
            <Notification
              key={notification._id}
              notification={notification}
              onHandleClick={this.handleClick}
            />
          );
        })}
      </ActionList>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps, { viewNotification })(
  withRouter(NotificationsActionList)
);
