import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import Header from '../shared/Header';
import CreateLeague from '../pages/CreateLeague';
import JoinLeague from '../pages/JoinLeague';
import LinkButton from '../common/LinkButton';

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
          <LinkButton
            path={`${match.url}/createLeague`}
            label="Create League"
            style="green"
          />
          <LinkButton
            path={`${match.url}/joinLeague`}
            label="Join League"
            style="primary-inverse"
          />
        </div>
        <Route path={`${match.url}/createLeague`} component={CreateLeague} />
        <Route path={`${match.url}/joinLeague`} component={JoinLeague} />
      </div>
    );
  }
}

export default hot(module)(connect(null, { fetchUser })(App));
