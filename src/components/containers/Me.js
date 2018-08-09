import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import Header from '../shared/Header';
import CreateLeagueForm from '../forms/CreateLeagueForm';

import { getUser } from '../../actions/auth';
import { createLeague } from '../../actions/league';

class App extends Component {
  handleSubmit = values => {
    this.props.createLeague(values);
  };

  componentDidMount() {
    this.props.getUser();
  }

  render() {
    return (
      <div>
        <Header />
        This is the logged in Page for all you stuff
        <CreateLeagueForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default hot(module)(connect(null, { getUser, createLeague })(App));
