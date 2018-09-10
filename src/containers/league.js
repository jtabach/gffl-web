import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import { fetchLeague } from '../actions/league';
import { fetchUser } from '../actions/auth';

import LeagueComponent from '../components/league';

class League extends Component {
  componentDidMount() {
    const { leagueId } = this.props.match.params;

    this.props.fetchUser();
    this.props.fetchLeague(leagueId);
  }

  render() {
    const { match, league, user } = this.props;

    return (
      <div>
        {league._id && user._id ? (
          <LeagueComponent league={league} user={user} match={match} />
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ league, user }) {
  return { league, user };
}

export default hot(module)(
  connect(mapStateToProps, { fetchLeague, fetchUser })(League)
);
