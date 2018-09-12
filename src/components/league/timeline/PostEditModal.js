import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';

Modal.setAppElement('#app'); // for screen readers

class PostEditModal extends Component {
  static propTypes = {
    post: CustomPropTypes.post.isRequired,
    isOpen: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired
  };

  static defaultProps = {
    isOpen: false
  };

  render() {
    const { post, isOpen, handleClose } = this.props;

    return (
      <Modal isOpen={isOpen} onRequestClose={handleClose}>
        <div>{post.text}</div>
      </Modal>
    );
  }
}

export default PostEditModal;
