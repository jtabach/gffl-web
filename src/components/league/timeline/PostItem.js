import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../../prop-types';
import ReactTooltip from 'react-tooltip';
import styles from './PostItem.scss';

import CommentList from './CommentList';
import CommentField from './CommentField';
import PostLikeButton from './PostLikeButton';
import PostDeleteButton from './PostDeleteButton';
import PostEditButton from './PostEditButton';
import PostEditModal from './PostEditModal';
import PostActions from './PostActions';

import threeDots from '../../../images/three-dots.png';

import { deletePost, editPost } from '../../../actions/post';
import { createComment } from '../../../actions/comment';
import { likePost, deleteLikePost } from '../../../actions/like';

class PostItem extends Component {
  static propTypes = {
    league: CustomPropTypes.league.isRequired, // from redux
    team: CustomPropTypes.team.isRequired, // from redux
    post: CustomPropTypes.post.isRequired,
    createComment: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired,
    editPost: PropTypes.func.isRequired,
    likePost: PropTypes.func.isRequired
  };

  state = {
    commentText: '',
    isPostEditModalOpen: false,
    isPostActionsOpen: false,
    postEditTextChanged: this.props.post.text
  };

  constructor(props) {
    super(props);
    this.handleCommentInputChange = this.handleCommentInputChange.bind(this);
    this.handleCommentInputSubmit = this.handleCommentInputSubmit.bind(this);
    this.commentInputRef = React.createRef();
    this.focusCommentInput = this.focusCommentInput.bind(this);

    this.handlePostDelete = this.handlePostDelete.bind(this);

    this.handlePostEditClick = this.handlePostEditClick.bind(this);
    this.handlePostEditModalClose = this.handlePostEditModalClose.bind(this);
    this.handlePostEditInputChange = this.handlePostEditInputChange.bind(this);
    this.handlePostEditInputSubmit = this.handlePostEditInputSubmit.bind(this);
    this.handlePostActionsClick = this.handlePostActionsClick.bind(this);
    this.handlePostActionsClose = this.handlePostActionsClose.bind(this);

    this.onHandleLikeToggle = this.onHandleLikeToggle.bind(this);
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

  focusCommentInput() {
    this.commentInputRef.current.textarea.focus();
  }

  handlePostDelete() {
    const { deletePost, post } = this.props;

    deletePost(post);
  }

  handlePostEditClick() {
    this.setState({
      isPostEditModalOpen: true
    });
  }

  handlePostEditModalClose() {
    this.setState({
      isPostEditModalOpen: false,
      postEditTextChanged: this.props.post.text
    });
  }

  handlePostEditInputChange(text) {
    this.setState({
      postEditTextChanged: text
    });
  }

  handlePostEditInputSubmit(text) {
    // dispatch action for editing post
    const post = {
      ...this.props.post,
      text
    };

    this.setState({
      isPostEditModalOpen: false
    });

    this.props.editPost(post);
  }

  handlePostActionsClick() {
    this.setState({
      isPostActionsOpen: true
    });
  }

  handlePostActionsClose() {
    this.setState({
      isPostActionsOpen: false
    });
  }

  // TODO: break into seperate functions
  onHandleLikeToggle(likeStr) {
    const { league, team, post, likePost, deleteLikePost } = this.props;
    const likeData = {
      leagueId: league._id,
      teamId: team._id,
      postId: post._id
    };

    if (likeStr === 'like') {
      likePost(likeData);
    } else {
      likeData._id = post.likes.find(like => {
        return like.team.id == team.id;
      })._id;

      deleteLikePost(likeData);
    }
  }

  renderPostActions() {
    const { team, post } = this.props;

    if (post.team._id === team._id) {
      const postActions = (
        <div>
          <PostEditButton onHandlePostEditClick={this.handlePostEditClick} />
          <PostDeleteButton onHandlePostDelete={this.handlePostDelete} />
        </div>
      );
      return (
        <div onClick={this.handlePostActionsClick}>
          <PostEditModal
            post={post}
            isOpen={this.state.isPostEditModalOpen}
            onHandleClose={this.handlePostEditModalClose}
            onPostEditInputChange={this.handlePostEditInputChange}
            onPostEditInputSubmit={this.handlePostEditInputSubmit}
            text={this.state.postEditTextChanged}
          />
          {this.state.isPostActionsOpen ? (
            <PostActions
              onHandleClickOutside={this.handlePostActionsClose}
              postActions={postActions}
            />
          ) : null}

          <img src={threeDots} alt="" styleName="dots" />
        </div>
      );
    } else {
      return null;
    }
  }

  renderPostSummary() {
    const { post } = this.props;

    return (
      <div styleName="post-item__summary">
        <div data-tip data-for={`likes-${post._id}`}>
          likes: {post.likes.length}
        </div>
        {post.likes.length ? (
          <ReactTooltip id={`likes-${post._id}`} effect="solid">
            <ul>
              {post.likes.map(like => {
                return <li key={like._id}>{like.team.name}</li>;
              })}
            </ul>
          </ReactTooltip>
        ) : null}
        <div data-tip data-for={`comments-${post._id}`}>
          comments: {post.comments.length}
        </div>
        {post.comments.length ? (
          <ReactTooltip id={`comments-${post._id}`} effect="solid">
            <ul>
              {post.comments
                .map(comment => {
                  return comment.team.name;
                })
                .filter((value, index, self) => {
                  return self.indexOf(value) === index;
                })
                .map(name => {
                  return <li key={Math.random()}>{name}</li>;
                })}
            </ul>
          </ReactTooltip>
        ) : null}
      </div>
    );
  }

  renderPostLikeButton() {
    const { post, team } = this.props;

    const hasPostBeenLikedByTeam = post.likes.some(like => {
      return like.team._id == team._id;
    });

    return (
      <PostLikeButton
        onHandleLikeToggle={this.onHandleLikeToggle}
        isLiked={hasPostBeenLikedByTeam}
      />
    );
  }

  render() {
    const { post, league } = this.props;

    return (
      <li styleName="post-item">
        <div styleName="post-item__header">
          <div styleName="post-item__header--content">
            <h5>{post.team.name}</h5>
            <p>{post.text}</p>
          </div>
          <div styleName="post-item__header--actions">
            {this.renderPostActions()}
          </div>
        </div>
        <div styleName="post-item__spacer" />
        {this.renderPostSummary()}
        <div styleName="post-item__spacer" />
        <div styleName="post-item__reaction">
          {this.renderPostLikeButton()}
          <div onClick={this.focusCommentInput}>CommentHere</div>
        </div>
        <div styleName="post-item__spacer" />
        <CommentList post={post} />
        <CommentField
          onCommentInputChange={this.handleCommentInputChange}
          onCommentInputSubmit={this.handleCommentInputSubmit}
          ref={this.commentInputRef}
          text={this.state.commentText}
        />
      </li>
    );
  }
}

function mapStateToProps({ league, team }) {
  return { league, team };
}

export default connect(mapStateToProps, {
  createComment,
  deletePost,
  editPost,
  likePost,
  deleteLikePost
})(CSSModules(PostItem, styles));
