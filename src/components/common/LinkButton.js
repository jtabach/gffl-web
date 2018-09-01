import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import styles from './Button.scss';

class LinkButton extends Component {
  static propTypes = {
    destination: PropTypes.oneOf(['internal', 'external']),
    path: PropTypes.string.isRequired,
    isNewTab: PropTypes.bool,
    variant: PropTypes.oneOf([
      'primary',
      'secondary',
      'secondary-inverse',
      'outline',
      'primary-inverse',
      'green',
      'green-inverse'
    ]),
    label: PropTypes.string,
    children: PropTypes.node
  };

  static defaultProps = {
    destination: 'internal',
    isNewTab: false,
    variant: 'primary',
    label: '',
    children: null
  };

  render() {
    const {
      destination,
      path,
      isNewTab,
      variant,
      label,
      children
    } = this.props;

    if (destination == 'external') {
      return (
        <a href={path} styleName={variant} target={isNewTab ? '_blank' : null}>
          {label || children}
        </a>
      );
    } else {
      return (
        <Link to={path} styleName={variant}>
          {label || children}
        </Link>
      );
    }
  }
}

export default CSSModules(LinkButton, styles);
