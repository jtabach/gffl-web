import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import Header from '../shared/Header';
import CreateLeague from '../pages/CreateLeague';
import JoinLeague from '../pages/JoinLeague';

import { fetchUser } from '../../actions/auth';

class App extends Component {
  componentDidMount() {
    // this.props.fetchUser();
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Header />
        <h2>This is the logged in Page for all you stuff</h2>
        <div>
          <Link to={`${match.url}/createLeague`}>Create League</Link>
          <Link to={`${match.url}/joinLeague`}>Join League</Link>
        </div>
        <Route path={`${match.url}/createLeague`} component={CreateLeague} />
        <Route path={`${match.url}/joinLeague`} component={JoinLeague} />
      </div>
    );
  }
}

export default hot(module)(connect(null, { fetchUser })(App));
