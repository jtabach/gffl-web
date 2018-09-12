import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './CommentField.scss';

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
      <div styleName="comment-field">
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
          size="small"
          label="comment"
          onClick={() => onCommentInputSubmit(this.textarea.value)}
        />
      </div>
    );
  }
}

export default CSSModules(CommentField, styles);
