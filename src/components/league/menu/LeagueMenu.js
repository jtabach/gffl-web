import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuList from './MenuList';

class LeagueMenu extends Component {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { match } = this.props;

    return (
      <div>
        <h5>Title of the league</h5>
        <MenuList match={match} />
      </div>
    );
  }
}

export default LeagueMenu;
