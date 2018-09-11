import React, { Component } from 'react';

class CommentItem extends Component {
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
