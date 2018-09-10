import {
  FETCH_LEAGUE_COMPLETED,
  CLEAR_LEAGUE_COMPLETED
} from '../types/league';

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
  }

  return state;
};
