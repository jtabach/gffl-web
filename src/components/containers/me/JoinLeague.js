import React, { Component } from 'react';
import { connect } from 'react-redux';

import JoinLeagueForm from '../../forms/JoinLeagueForm';

import { joinLeague } from '../../../actions/league';

class JoinLeague extends Component {
  handleSubmit = values => {
    this.props.joinLeague(values);
  };

  render() {
    return (
      <div>
        Join a League here
        <JoinLeagueForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(null, { joinLeague })(JoinLeague);
