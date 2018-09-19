import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchLeague, clearLeague } from '../actions/league';
import { fetchTeam, clearTeam } from '../actions/team';
import { fetchUser } from '../actions/auth';
import { fetchNotifications } from '../actions/notification';

import LeagueComponent from '../components/league';

class League extends Component {
  static propTypes = {
    fetchUser: PropTypes.func.isRequired,
    fetchLeague: PropTypes.func.isRequired,
    fetchTeam: PropTypes.func.isRequired,
    clearLeague: PropTypes.func.isRequired,
    clearTeam: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { leagueId } = this.props.match.params;

    this.props.fetchUser();
    this.props.fetchLeague(leagueId);
    this.props.fetchTeam(leagueId);
    this.props.fetchNotifications();
  }

  componentWillUnmount() {
    // clears redux store for team and league data
    // so no flash in data when switching leagues
    this.props.clearLeague();
    this.props.clearTeam();
  }

  render() {
    const { match, league, user, team } = this.props;

    return (
      <div>
        {league._id && user._id && team._id ? (
          <LeagueComponent
            league={league}
            user={user}
            team={team}
            match={match}
          />
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ league, user, team }) {
  return { league, user, team };
}

export default hot(module)(
  connect(mapStateToProps, {
    fetchLeague,
    fetchUser,
    fetchTeam,
    clearLeague,
    clearTeam,
    fetchNotifications
  })(League)
);
