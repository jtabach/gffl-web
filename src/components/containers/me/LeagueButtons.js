import React, { Component } from 'react';

import LinkButton from '../../common/LinkButton';

class LeagueButtons extends Component {
  render() {
    const { match } = this.props;

    return (
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
    );
  }
}

export default LeagueButtons;
