import {
  FETCH_LEAGUE_COMPLETED,
  CLEAR_LEAGUE_COMPLETED
} from '../types/league';

import { CREATE_POST_COMPLETED } from '../types/post';
import { CREATE_COMMENT_COMPLETED } from '../types/comment';

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
  }

  return state;
};
