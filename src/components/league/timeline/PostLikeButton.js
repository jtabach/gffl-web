import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button';

class PostLikeButton extends Component {
  static propTypes = {
    onHandleLikeClick: PropTypes.func.isRequired
  };

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
