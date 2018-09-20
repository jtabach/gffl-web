import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './Notification.scss';

class Notification extends Component {
  static propTypes = {
    notification: PropTypes.object.isRequired
  };

  renderNotification(notification) {
    switch (notification.verb) {
      case 'post':
        return (
          <div styleName="notification-buffer">
            <p>
              <strong>{notification.actor.email}</strong> posted in{' '}
              <strong>{notification.league.name}</strong> aksdhf oaioie asydg
              fiua
            </p>
          </div>
        );
        break;
      default:
    }
  }

  render() {
    const { notification } = this.props;
    const hasViewed = notification.hasViewed ? '' : 'highlight';

    return (
      <div styleName={`notification ${hasViewed}`}>
        {this.renderNotification(notification)}
      </div>
    );
  }
}

export default CSSModules(Notification, styles, { allowMultiple: true });
