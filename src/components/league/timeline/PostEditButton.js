import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button';

class PostEditButton extends Component {
  static propTypes = {
    onHandlePostEdit: PropTypes.func.isRequired
  };

  render() {
    const { onHandlePostEdit } = this.props;

    return (
      <Button
        type="button"
        variant="green"
        size="small"
        onClick={onHandlePostEdit}
        label="edit"
      />
    );
  }
}

export default PostEditButton;
