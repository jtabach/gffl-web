import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';

class CommentItem extends Component {
  static propTypes = {
    comment: CustomPropTypes.comment.isRequired
  };

  render() {
    const { comment } = this.props;

    return (
      <li>
        <h5>{comment.team.name}</h5>
        <p>{comment.text}</p>
      </li>
    );
  }
}

export default CommentItem;
