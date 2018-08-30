import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './button.scss';

class Button extends Component {
  static propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'link', 'anchor']),
    style: PropTypes.oneOf([
      'primary',
      'secondary',
      'secondary-inverse',
      'outline',
      'primary-inverse',
      'green',
      'green-inverse'
    ]),
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps: {
    type: 'button',
    style: 'primary',
    label: '',
    children: null
  };

  render() {
    const { type, style, onClick, label, children } = this.props;
    return (
      <button type={type} styleName={style} onClick={onClick}>
        {label || children}
      </button>
    );
  }
}

export default CSSModules(Button, styles);
