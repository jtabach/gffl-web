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

    setInterval(() => {
      this.props.fetchNotifications();
      console.log('fetching notifications');
    }, 30000);

    if (!('serviceWorker' in navigator)) {
      // Service Worker isn't supported on this browser, disable or hide UI.
      return;
    }

    if (!('PushManager' in window)) {
      // Push isn't supported on this browser, disable or hide UI.
      return;
    }

    navigator.serviceWorker
      .register('../../service-worker.js')
      .then(function(registration) {
        console.log('Service worker successfully registered on GFFL.');
        return registration;
      })
      .catch(function(err) {
        console.error('Unable to register service worker.', err);
      });

    new Promise(function(resolve, reject) {
      const permissionResult = Notification.requestPermission(function(result) {
        resolve(result);
      });

      if (permissionResult) {
        permissionResult.then(resolve, reject);
      }
    }).then(function(permissionResult) {
      if (permissionResult !== 'granted') {
        throw new Error("We weren't granted permission.");
      }
    });

    function urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
        .replace(/\-/g, '+')
        .replace(/_/g, '/');

      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);

      for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
    }

    return navigator.serviceWorker
      .register('../../service-worker.js')
      .then(function(registration) {
        const subscribeOptions = {
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(
            'BFiFUBADO-S0a3nQT2KO4N6FyJ9q3QGAznL3VnJOXJHKiTVH-AmqJZ6dOvLwPPnQXi0Aeul4abcdCR_6f9oVXQw'
          )
        };

        return registration.pushManager.subscribe(subscribeOptions);
      })
      .then(function(pushSubscription) {
        console.log(
          'Received PushSubscription: ',
          JSON.stringify(pushSubscription)
        );
        return pushSubscription;
      });
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
