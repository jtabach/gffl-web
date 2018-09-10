import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import PropsRoute from '../PropsRoute';
import Timeline from './Timeline';
import Members from './Members';
import MyTeam from './MyTeam';
import LeagueInfo from './LeagueInfo';

class LeagueRoutes extends Component {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { match } = this.props;

    return (
      <Switch>
        <Route exact path={`${match.url}`} component={Timeline} />
        <PropsRoute exact path={`${match.url}/members`} component={Members} />
        <Route exact path={`${match.url}/myteam`} component={MyTeam} />
        <Route exact path={`${match.url}/leagueInfo`} component={LeagueInfo} />
        {/* TODO: wildcard may want to show 'error' page with redirect links */}
        <Route path={`${match.url}/*`} component={Timeline} />
      </Switch>
    );
  }
}

export default LeagueRoutes;
