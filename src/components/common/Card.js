import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';

import styles from './Card.scss';

class Card extends Component {
  static propTypes = {
    style: PropTypes.oneOf(['light', 'dark'])
  };

  static defaultProps = {
    style: 'light'
  };

  render() {
    const { style } = this.props;

    return <div styleName={`card-${style}`}>{this.props.children}</div>;
  }
}

export default CSSModules(Card, styles);
