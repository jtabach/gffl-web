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
    style: PropTypes.oneOf([
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
    style: 'primary',
    label: '',
    children: null
  };

  render() {
    const { destination, path, isNewTab, style, label, children } = this.props;
    return (
      <Link to={path} styleName={style}>
        {label || children}
      </Link>
    );
  }
}

export default CSSModules(LinkButton, styles);
