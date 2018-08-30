import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { Link, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import Header from '../../shared/Header';
import CreateLeague from './CreateLeague';
import JoinLeague from './JoinLeague';
import RSSFeed from './RSSFeed';
import LeagueList from './LeagueList';
import LinkButton from '../../common/LinkButton';

import styles from './index.scss';

import { fetchUser } from '../../../actions/auth';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { match } = this.props;

    return (
      <div styleName="me">
        <Header />
        <div styleName="contain">
          <div styleName="col-left">
            <LeagueList />
          </div>
          <div styleName="col-center">
            <Route exact path={`${match.url}`} component={RSSFeed} />
            <Route
              path={`${match.url}/createLeague`}
              component={CreateLeague}
            />
            <Route path={`${match.url}/joinLeague`} component={JoinLeague} />
          </div>
          <div styleName="col-right">
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
            <h3>List of Friends Online</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default hot(module)(
  connect(null, { fetchUser })(CSSModules(App, styles))
);
