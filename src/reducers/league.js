import {
  FETCH_LEAGUE_COMPLETED,
  CLEAR_LEAGUE_COMPLETED
} from '../types/league';

import { CREATE_POST_COMPLETED } from '../types/post';

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
  }

  return state;
};
