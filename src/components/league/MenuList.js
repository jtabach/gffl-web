import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MenuList extends Component {
  renderMenuItems() {
    const { league } = this.props;

    return this.props.league.teams.map(team => {
      return (
        <li key={team._id}>
          <p>{team.name}</p>
        </li>
      );
    });
  }

  render() {
    return <ul>{this.renderMenuItems()}</ul>;
  }
}

export default MenuList;
