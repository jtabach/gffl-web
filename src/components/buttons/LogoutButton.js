import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser, fetchUser } from '../../actions/auth';

import Button from '../common/button';

class LogoutButton extends Component {
  _handleClick() {
    this.props.logoutUser();
  }

  render() {
    return (
      <Button
        type="button"
        style="white"
        label="logout"
        onClick={() => this._handleClick()}
      />
    );
  }
}

export default connect(null, { logoutUser, fetchUser })(LogoutButton);
