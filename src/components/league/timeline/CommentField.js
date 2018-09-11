import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Textarea from 'react-textarea-autosize';
import Button from '../../common/Button';

class CommentField extends Component {
  static propTypes = {
    onCommentInputChange: PropTypes.func.isRequired,
    onCommentInputSubmit: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  };

  render() {
    const { onCommentInputChange, onCommentInputSubmit } = this.props;

    return (
      <div>
        <Textarea
          inputRef={tag => (this.textarea = tag)}
          type="text"
          placeholder="Say Something!"
          value={this.props.text}
          onChange={() => onCommentInputChange(this.textarea.value)}
        />
        <Button
          type="button"
          variant="primary"
          label="comment"
          onClick={() => onCommentInputSubmit(this.textarea.value)}
        />
      </div>
    );
  }
}

export default CommentField;
