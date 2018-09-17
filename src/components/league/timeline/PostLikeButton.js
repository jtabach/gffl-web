import React, { Component } from 'react';

import Button from '../../common/Button';

class PostLikeButton extends Component {
  render() {
    return (
      <Button
        type="button"
        variant="primary"
        size="small"
        onClick={() => console.log('click')}
        label="like"
      />
    );
  }
}

export default PostLikeButton;
