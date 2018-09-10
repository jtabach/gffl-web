import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MenuItem from './MenuItem';

class MenuList extends Component {
  renderMenuItems() {
    const { match } = this.props;

    const menuItems = [
      { name: 'TimeLine', path: '' },
      { name: 'My Team', path: '/myteam' },
      { name: 'Members', path: '/members' },
      { name: 'League Info', path: '/leagueinfo' }
    ];

    return menuItems.map((item, i) => {
      return <MenuItem item={item} match={match} key={i} />;
    });
  }

  render() {
    return <ul>{this.renderMenuItems()}</ul>;
  }
}

export default MenuList;
