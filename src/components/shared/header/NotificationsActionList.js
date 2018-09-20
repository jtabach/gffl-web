import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';
import { connect } from 'react-redux';

import ActionList from '../../common/ActionList';
import Notification from './Notification';

class NotificationsActionList extends Component {
  static propTypes = {
    onHandleClickOutside: PropTypes.func.isRequired,
    buttonType: PropTypes.string.isRequired,
    user: CustomPropTypes.user.isRequired
  };

  render() {
    const { onHandleClickOutside, buttonType, user } = this.props;
    console.log(user);

    return (
      <ActionList
        onHandleClickOutside={onHandleClickOutside}
        buttonType={buttonType}
        listType={'notifications'}
      >
        {user.notifications.map(notification => {
          return (
            <Notification key={notification._id} notification={notification} />
          );
        })}
      </ActionList>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(NotificationsActionList);
