import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import Header from '../shared/Header';
import CreateLeague from '../pages/CreateLeague';
import JoinLeague from '../pages/JoinLeague';

import { getUser } from '../../actions/auth';

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Header />
        This is the logged in Page for all you stuff
        <Route path={`${match.url}/createLeague`} component={CreateLeague} />
        <Route path={`${match.url}/joinLeague`} component={JoinLeague} />
      </div>
    );
  }
}

export default hot(module)(connect(null, { getUser })(App));
