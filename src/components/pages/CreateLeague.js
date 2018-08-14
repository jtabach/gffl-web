import React, { Component } from 'react';
import { connect } from 'react-redux';

import CreateLeagueForm from '../forms/CreateLeagueForm';

import { createLeague } from '../../actions/league';

class CreateLeague extends Component {
  handleSubmit = values => {
    this.props.createLeague(values);
  };

  render() {
    return (
      <div>
        Create a League here
        <CreateLeagueForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(null, { createLeague })(CreateLeague);
