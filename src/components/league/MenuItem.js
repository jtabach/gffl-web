import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuItem extends Component {
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
