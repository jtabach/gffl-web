import {
  FETCH_LEAGUE_COMPLETED,
  CLEAR_LEAGUE_COMPLETED
} from '../types/league';

import {
  CREATE_POST_COMPLETED,
  DELETE_POST_COMPLETED,
  EDIT_POST,
  EDIT_POST_COMPLETED
} from '../types/post';

import { CREATE_COMMENT_COMPLETED } from '../types/comment';
import { LIKE_POST_COMPLETED, DELETE_LIKE_POST_COMPLETED } from '../types/like';

const initialState = {
  _id: null,
  name: null,
  admin: null,
  teams: [],
  posts: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LEAGUE_COMPLETED:
      state = action.payload.data.league;
      break;

    case CLEAR_LEAGUE_COMPLETED:
      state = initialState;
      break;

    case CREATE_POST_COMPLETED:
      state = {
        ...state,
        posts: state.posts.concat([action.payload.data.post])
      };
      break;

    case DELETE_POST_COMPLETED:
      state = {
        ...state,
        posts: state.posts.filter(post => {
          return post._id != action.payload.data.post._id;
        })
      };
      break;

    case EDIT_POST_COMPLETED:
      state = {
        ...state,
        posts: state.posts.map(post => {
          return post._id != action.payload.data.post._id
            ? post
            : action.payload.data.post;
        })
      };
      break;

    case CREATE_COMMENT_COMPLETED:
      const postArray = state.posts.map(post => {
        if (post._id != action.payload.data.comment.post) {
          return post;
        }
        return {
          ...post,
          comments: post.comments.concat(action.payload.data.comment)
        };
      });
      state = { ...state, posts: postArray };
      break;

    case LIKE_POST_COMPLETED:
      const postArrayWithLikes = state.posts.map(post => {
        if (post._id != action.payload.data.like.post) {
          return post;
        }
        return {
          ...post,
          likes: post.likes.concat(action.payload.data.like)
        };
      });
      state = { ...state, posts: postArrayWithLikes };
      break;

    case DELETE_LIKE_POST_COMPLETED:
      const postArrayWithDeletedLikes = state.posts.map(post => {
        if (post._id != action.payload.data.like.post) {
          return post;
        }
        return {
          ...post,
          likes: post.likes.filter(like => {
            return like._id != action.payload.data.like._id;
          })
        };
      });
      state = { ...state, posts: postArrayWithDeletedLikes };
      break;
  }

  return state;
};
