import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

import Timeline from './Timeline';
import Members from './Members';

class LeagueRoutes extends Component {
  render() {
    const { match } = this.props;

    return (
      <div>
        <Route exact path={`${match.url}`} component={Timeline} />
        <Route path={`${match.url}/members`} component={Members} />
        {/* <Route path={`${match.url}/joinLeague`} component={JoinLeague} /> */}
      </div>
    );
  }
}

export default LeagueRoutes;
