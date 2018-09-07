import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import { fetchLeague } from '../../actions/league';
import { fetchUser } from '../../actions/auth';

class League extends Component {
  componentDidMount() {
    const { leagueId } = this.props.match.params;
    this.props.fetchUser();
    this.props.fetchLeague(leagueId);
  }

  render() {
    return (
      <div>
        {this.props.league._id ? (
          <div>This is the league</div>
        ) : (
          <div>loading...</div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ league }) {
  return { league };
}

export default hot(module)(
  connect(mapStateToProps, { fetchLeague, fetchUser })(League)
);
