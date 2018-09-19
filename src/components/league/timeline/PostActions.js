import React, { Component } from 'react';
import PropTypes from 'prop-types';
import onClickOutside from 'react-onclickoutside';

class PostActions extends Component {
  handleClickOutside = evt => {
    this.props.onHandleClickOutside();
  };

  render() {
    return <div>{this.props.postActions}</div>;
  }
}

export default onClickOutside(PostActions);
