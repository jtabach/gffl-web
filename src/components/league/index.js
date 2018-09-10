import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from './index.scss';

import NavLayout from '../layouts/NavLayout';
import LeagueRoutes from './LeagueRoutes';
import LeagueMenu from './LeagueMenu';
import LeagueFeed from './LeagueFeed';

import { fetchLeague } from '../../actions/league';
import { fetchUser } from '../../actions/auth';

class League extends Component {
  static propTypes = {
    league: PropTypes.shape({
      admin: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      _id: PropTypes.string.isRequired,
      posts: PropTypes.array,
      teams: PropTypes.array.isRequired
    })
  };

  static defaultProps = {
    league: {
      admin: ''
    }
  };

  componentDidMount() {
    const { leagueId } = this.props.match.params;

    this.props.fetchUser();
    this.props.fetchLeague(leagueId);
  }

  render() {
    const { match, league, user } = this.props;
    console.log(league);
    return (
      <div>
        {/* TODO: fix conditional - causes multiple renders */}
        <NavLayout>
          {league._id && user._id ? (
            <div styleName="league">
              <div styleName="contain">
                <div styleName="col-left">
                  <LeagueMenu match={match} />
                </div>
                <div styleName="col-center">
                  <LeagueRoutes match={match} />
                </div>
                <div styleName="col-left">
                  <LeagueFeed />
                </div>
              </div>
            </div>
          ) : (
            <div>loading...</div>
          )}
        </NavLayout>
      </div>
    );
  }
}

function mapStateToProps({ league, user }) {
  return { league, user };
}

export default hot(module)(
  connect(mapStateToProps, { fetchLeague, fetchUser })(
    CSSModules(League, styles)
  )
);
