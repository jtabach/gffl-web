import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';
import { connect } from 'react-redux';

import { createPost } from '../../../actions/post';

import PostField from './PostField';
import PostList from './PostList';

class Timeline extends Component {
  static propTypes = {
    league: CustomPropTypes.league.isRequired,
    team: CustomPropTypes.team.isRequired,
    user: CustomPropTypes.user.isRequired,
    createPost: PropTypes.func.isRequired
  };

  state = {
    postText: ''
  };

  constructor(props) {
    super(props);
    this.handlePostInputChange = this.handlePostInputChange.bind(this);
    this.handlePostInputSubmit = this.handlePostInputSubmit.bind(this);
  }

  handlePostInputChange(text) {
    this.setState({
      postText: text
    });
  }

  handlePostInputSubmit(text) {
    const { league, team, createPost } = this.props;
    const postData = {
      text,
      leagueId: league._id,
      teamId: team._id
    };
    createPost(postData);
    // TODO: should only reset on successful post
    this.setState({
      postText: ''
    });
  }

  render() {
    const { league } = this.props;

    return (
      <div>
        <h3>This is the Timeline</h3>
        <PostField
          onPostInputChange={this.handlePostInputChange}
          onPostInputSubmit={this.handlePostInputSubmit}
          text={this.state.postText}
        />
        <PostList league={league} />
      </div>
    );
  }
}

function mapStateToProps({ league, team, user }) {
  return { league, team, user };
}

export default connect(mapStateToProps, { createPost })(Timeline);
