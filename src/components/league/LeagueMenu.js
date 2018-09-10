import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MenuList from './MenuList';

class LeagueMenu extends Component {
  render() {
    const { league } = this.props;

    return (
      <div>
        <h5>Title of the league</h5>
        <MenuList league={league} />
      </div>
    );
  }
}

function mapStateToProps({ league }) {
  return { league };
}

export default connect(mapStateToProps)(LeagueMenu);
