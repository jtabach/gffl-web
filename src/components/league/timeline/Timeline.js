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
    console.log(text);
    // dispatch action
  }

  render() {
    return (
      <div>
        <h3>This is the Timeline</h3>
        <PostField
          onPostInputChange={this.handlePostInputChange}
          onPostInputSubmit={this.handlePostInputSubmit}
          text={this.state.postText}
        />
      </div>
    );
  }
}

function mapStateToProps({ league, user }) {
  return { league, user };
}

export default connect(mapStateToProps)(Timeline);
