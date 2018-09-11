import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostItem extends Component {
  // static propTypes = {
  //   post: CustomPropTypes.post.isRequired
  // };

  render() {
    const { post } = this.props;

    return (
      <li>
        <h5>{post.team.name}</h5>
        <p>{post.text}</p>
      </li>
    );
  }
}

export default PostItem;
