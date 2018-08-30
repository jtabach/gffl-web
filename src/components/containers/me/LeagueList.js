import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '../../common/Card';

class LeagueList extends Component {
  renderLeagues() {
    const { user } = this.props;
    return user.teams.map((team, i) => {
      return (
        <li key={i}>
          <Card>
            <p>{team.league.name}</p>
            <p>{team.name}</p>
          </Card>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h5>List of the leagues</h5>
        <ul>{this.renderLeagues()}</ul>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return { user };
}

export default connect(mapStateToProps)(LeagueList);
