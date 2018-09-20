import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionList from '../common/ActionList';

class SettingsActionList extends Component {
  static propTypes = {
    onHandleClickOutside: PropTypes.func.isRequired,
    buttonType: PropTypes.string.isRequired
  };

  render() {
    const { onHandleClickOutside, buttonType } = this.props;

    return (
      <ActionList
        onHandleClickOutside={onHandleClickOutside}
        buttonType={buttonType}
      >
        <div>Test</div>
        <div>Test1</div>
      </ActionList>
    );
  }
}

export default SettingsActionList;
