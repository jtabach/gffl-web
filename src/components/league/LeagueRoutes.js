import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import Timeline from './Timeline';
import Members from './Members';
import MyTeam from './MyTeam';
import LeagueInfo from './LeagueInfo';

class LeagueRoutes extends Component {
  render() {
    const { match } = this.props;

    return (
      <Switch>
        <Route exact path={`${match.url}`} component={Timeline} />
        <Route exact path={`${match.url}/members`} component={Members} />
        <Route exact path={`${match.url}/myteam`} component={MyTeam} />
        <Route exact path={`${match.url}/leagueInfo`} component={LeagueInfo} />
        <Route path={`${match.url}/*`} component={Timeline} />
      </Switch>
    );
  }
}

export default LeagueRoutes;
