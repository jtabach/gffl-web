import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './CreateLeague.scss';

import CreateLeagueForm from '../../forms/CreateLeagueForm';

import { createLeague } from '../../../actions/league';

class CreateLeague extends Component {
  handleSubmit = values => {
    this.props.createLeague(values);
  };

  render() {
    return (
      <div>
        <h2 styleName="test">Create a League here</h2>
        <CreateLeagueForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default connect(null, { createLeague })(
  CSSModules(CreateLeague, styles)
);
