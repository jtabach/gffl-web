import React, { Component } from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import styles from './CreateLeague.scss';

import CreateLeagueForm from '../../forms/CreateLeagueForm';
import Card from '../../common/Card';

import { createLeague } from '../../../actions/league';

class CreateLeague extends Component {
  handleSubmit = values => {
    this.props.createLeague(values);
  };

  render() {
    return (
      <Card>
        <div styleName="header">
          <h2 styleName="test">Create Your League</h2>
        </div>
        <div styleName="card-content">
          <CreateLeagueForm onSubmit={this.handleSubmit} />
        </div>
      </Card>
    );
  }
}

export default connect(null, { createLeague })(
  CSSModules(CreateLeague, styles)
);
