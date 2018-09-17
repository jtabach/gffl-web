import React, { Component } from 'react';

import Button from '../../common/Button';

class PostLikeButton extends Component {
  render() {
    const { onHandleLikeClick } = this.props;

    return (
      <Button
        type="button"
        variant="primary"
        size="small"
        onClick={onHandleLikeClick}
        label="like"
      />
    );
  }
}

export default PostLikeButton;
