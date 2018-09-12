import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';
import styles from './PostItem.scss';

import CommentList from './CommentList';
import CommentField from './CommentField';
import PostDeleteButton from './PostDeleteButton';
import PostEditButton from './PostEditButton';

import { createComment } from '../../../actions/comment';
import { deletePost } from '../../../actions/post';

class PostItem extends Component {
  static propTypes = {
    league: CustomPropTypes.league.isRequired, // from redux
    team: CustomPropTypes.team.isRequired, // from redux
    post: CustomPropTypes.post.isRequired,
    createComment: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired
  };

  state = {
    commentText: ''
  };

  constructor(props) {
    super(props);
    this.handleCommentInputChange = this.handleCommentInputChange.bind(this);
    this.handleCommentInputSubmit = this.handleCommentInputSubmit.bind(this);
    this.handlePostDelete = this.handlePostDelete.bind(this);
    this.handlePostEdit = this.handlePostEdit.bind(this);
  }

  handleCommentInputChange(text) {
    this.setState({
      commentText: text
    });
  }

  handleCommentInputSubmit(text) {
    const { league, team, post, createComment } = this.props;
    const commentData = {
      text,
      leagueId: league._id,
      teamId: team._id,
      postId: post._id
    };
    createComment(commentData);
    // TODO: should only reset on successful comment
    this.setState({
      commentText: ''
    });
  }

  handlePostDelete() {
    const { deletePost, post } = this.props;
    deletePost(post);
  }

  handlePostEdit() {
    console.log('editing');
  }

  // TODO: refactor with renderPostEditButton (duplicate logic)
  renderPostDeleteButton() {
    const { team, post } = this.props;
    if (post.team._id === team._id) {
      return <PostDeleteButton onHandlePostDelete={this.handlePostDelete} />;
    } else {
      return null;
    }
  }

  renderPostEditButton() {
    const { team, post } = this.props;
    if (post.team._id === team._id) {
      return <PostEditButton onHandlePostEdit={this.handlePostEdit} />;
    } else {
      return null;
    }
  }

  render() {
    const { post, league } = this.props;

    return (
      <li styleName="post-item">
        <h5>{post.team.name}</h5>
        <p>{post.text}</p>
        {this.renderPostDeleteButton()}
        {this.renderPostEditButton()}
        <CommentList post={post} />
        <CommentField
          onCommentInputChange={this.handleCommentInputChange}
          onCommentInputSubmit={this.handleCommentInputSubmit}
          text={this.state.commentText}
        />
      </li>
    );
  }
}

function mapStateToProps({ league, team }) {
  return { league, team };
}

export default connect(mapStateToProps, { createComment, deletePost })(
  CSSModules(PostItem, styles)
);
