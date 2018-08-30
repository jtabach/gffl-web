import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import Header from '../../shared/Header';
import Routes from './Routes';
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
            <Routes match={match} />
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
