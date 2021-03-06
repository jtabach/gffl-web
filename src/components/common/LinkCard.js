import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router-dom';
import styles from './Card.scss';

class LinkCard extends Component {
  static propTypes = {
    destination: PropTypes.oneOf(['internal', 'external']),
    path: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(['light', 'dark']),
    isNewTab: PropTypes.bool,
    children: PropTypes.node
  };

  static defaultProps = {
    destination: 'internal',
    isNewTab: false,
    variant: 'light',
    children: null
  };

  render() {
    const { destination, path, variant, isNewTab, children } = this.props;

    if (destination == 'external') {
      return (
        <a
          href={path}
          styleName={`link-card-${variant}`}
          target={isNewTab ? '_blank' : null}
        >
          {children}
        </a>
      );
    } else {
      return (
        <Link to={path} styleName={`link-card-${variant}`}>
          {children}
        </Link>
      );
    }
  }
}

export default CSSModules(LinkCard, styles);
