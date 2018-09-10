import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class MenuItem extends Component {
  static propTypes = {
    match: PropTypes.shape({
      url: PropTypes.string.isRequired
    }).isRequired,
    item: PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    const { item, match } = this.props;

    return (
      <li>
        <Link to={`${match.url}${item.path}`}>{item.name}</Link>
      </li>
    );
  }
}

export default MenuItem;
