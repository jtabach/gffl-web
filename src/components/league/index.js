import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';

import fetchLeague from '../../actions/league';

class League extends Component {
  render() {
    return <div>This is the league</div>;
  }
}

export default hot(module)(connect(null, { fetchLeague })(League));
