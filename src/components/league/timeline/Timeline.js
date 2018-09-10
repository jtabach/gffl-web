import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';
import { connect } from 'react-redux';

import PostField from './PostField';

class Timeline extends Component {
  static propTypes = {
    league: CustomPropTypes.league.isRequired,
    user: CustomPropTypes.user.isRequired
  };

  render() {
    return (
      <div>
        <h3>This is the Timeline</h3>
        <PostField />
      </div>
    );
  }
}

function mapStateToProps({ league, user }) {
  return { league, user };
}

export default connect(mapStateToProps)(Timeline);
