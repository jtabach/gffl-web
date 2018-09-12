import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import PropTypes from 'prop-types';
import styles from './PostField.scss';

import Textarea from 'react-textarea-autosize';
import Button from '../../common/Button';

class PostField extends Component {
  static propTypes = {
    onPostInputChange: PropTypes.func.isRequired,
    onPostInputSubmit: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
  };

  render() {
    const { onPostInputChange, onPostInputSubmit } = this.props;

    return (
      <div styleName="post-field">
        <Textarea
          inputRef={tag => (this.textarea = tag)}
          type="text"
          placeholder="Say Something!"
          value={this.props.text}
          onChange={() => onPostInputChange(this.textarea.value)}
        />
        <Button
          type="button"
          variant="primary"
          label="post"
          onClick={() => onPostInputSubmit(this.textarea.value)}
        />
      </div>
    );
  }
}

export default CSSModules(PostField, styles);
