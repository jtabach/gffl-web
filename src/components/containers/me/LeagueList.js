import React, { Component } from 'react';
import { connect } from 'react-redux';

class LeagueList extends Component {
  renderLeagues() {
    const { user } = this.props;
    return user.teams.map((team, i) => {
      return (
        <li key={i}>
          <p>{team.league.name}</p>
          <p>{team.name}</p>
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
