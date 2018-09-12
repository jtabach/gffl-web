import React, { Component } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';
import Textarea from 'react-textarea-autosize';

import Button from '../../common/Button';

Modal.setAppElement('#app'); // for screen readers

class PostEditModal extends Component {
  static propTypes = {
    post: CustomPropTypes.post.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onHandleClose: PropTypes.func.isRequired,
    onPostEditInputChange: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  };

  // static defaultProps = {
  //   isOpen: false
  // };

  render() {
    const { post, isOpen, onHandleClose, onHandleAfterOpen } = this.props;

    return (
      <Modal isOpen={isOpen} onRequestClose={onHandleClose}>
        <Textarea
          inputRef={tag => (this.textarea = tag)}
          type="editModalText"
          placeholder="Say Something!"
          value={this.props.text}
          onChange={() => onPostEditInputChange(this.textarea.value)}
        />
      </Modal>
    );
  }
}

export default PostEditModal;
