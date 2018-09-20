import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './HeaderButton.scss';

class HeaderButton extends Component {
  static propTypes = {
    icon: PropTypes.node.isRequired
  };

  render() {
    return <div styleName="header-button">{this.props.icon}</div>;
  }
}

export default CSSModules(HeaderButton, styles);
