import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logoutUser, fetchUser } from '../../actions/auth';

import Button from '../common/Button';

class LogoutButton extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.logoutUser();
  }

  render() {
    return (
      <Button
        type="button"
        style="primary-inverse"
        label="logout"
        onClick={this.handleClick}
      />
    );
  }
}

export default connect(null, { logoutUser, fetchUser })(LogoutButton);
