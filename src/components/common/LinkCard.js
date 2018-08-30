import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import styles from './Card.scss';

class LinkCard extends Component {
  static propTypes = {
    destination: PropTypes.oneOf(['internal', 'external']),
    path: PropTypes.string.isRequired,
    style: PropTypes.oneOf(['light', 'dark']),
    isNewTab: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    destination: 'internal',
    isNewTab: false,
    style: 'light',
    children: null
  };

  render() {
    const { destination, path, style, isNewTab, children } = this.props;

    if (destination == 'external') {
      return (
        <a
          href={path}
          styleName={`link-card-${style}`}
          target={isNewTab ? '_blank' : null}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link to={path} styleName={`link-card-${style}`}>
          {children}
        </Link>
      );
    }
  }
}

export default CSSModules(LinkCard, styles);
