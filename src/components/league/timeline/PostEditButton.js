import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button';

class PostEditButton extends Component {
  static propTypes = {
    onHandlePostEditClick: PropTypes.func.isRequired
  };

  render() {
    const { onHandlePostEditClick } = this.props;

    return (
      <Button
        type="button"
        variant="green"
        size="small"
        onClick={onHandlePostEditClick}
        label="edit"
      />
    );
  }
}

export default PostEditButton;
