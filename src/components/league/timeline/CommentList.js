import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';

import CommentItem from './CommentItem';

class CommentList extends Component {
  static propTypes = {
    post: CustomPropTypes.post.isRequired
  };

  renderComments() {
    const { comments } = this.props.post;

    return comments.map(comment => {
      return <CommentItem key={comment._id} comment={comment} />;
    });
  }

  render() {
    return <ul>{this.renderComments()}</ul>;
  }
}

export default CommentList;
