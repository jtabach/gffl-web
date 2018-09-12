import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button';

class PostDeleteButton extends Component {
  static propTypes = {
    onHandlePostDelete: PropTypes.func.isRequired
  };

  render() {
    const { onHandlePostDelete } = this.props;

    return (
      <Button
        type="button"
        variant="red"
        size="small"
        onClick={onHandlePostDelete}
        label="delete"
      />
    );
  }
}

export default PostDeleteButton;
