import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Card.scss';

class Card extends Component {
  render() {
    return <div styleName="card">{this.props.children}</div>;
  }
}

export default CSSModules(Card, styles);
