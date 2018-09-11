import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';

class PostList extends Component {
  static propTypes = {
    league: CustomPropTypes.league.isRequired
  };

  renderPosts() {
    const { posts } = this.props.league;

    return posts.map(post => {
      return (
        <li key={post._id}>
          <h5>{post.team.name}</h5>
          <p>{post.text}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <h5>List of posts</h5>
        <ul>{this.renderPosts()}</ul>
      </div>
    );
  }
}

export default PostList;
