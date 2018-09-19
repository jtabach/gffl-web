import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';
import styles from './PostActionsList.scss';

class PostActions extends Component {
  handleClickOutside = evt => {
    this.props.onHandleClickOutside();
  };

  render() {
    return <div styleName="actions-list">{this.props.children}</div>;
  }
}

export default onClickOutside(CSSModules(PostActions, styles));
