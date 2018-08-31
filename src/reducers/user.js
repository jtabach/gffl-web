import {
  REGISTER_USER_COMPLETED,
  LOGIN_USER_COMPLETED,
  LOGOUT_USER_COMPLETED,
  FETCH_USER_COMPLETED,
  FETCH_USER_FAILED
} from '../types/auth';

import {
  CREATE_LEAGUE_COMPLETED,
  JOIN_LEAGUE_COMPLETED
} from '../types/league';

const initialState = {
  _id: null,
  email: null,
  password: null,
  teams: []
};

export default (state = initialState, action) => {
  //if (action.error) return state;

  switch (action.type) {
    case REGISTER_USER_COMPLETED:
      state = action.payload.data.user;
      break;

    case LOGIN_USER_COMPLETED:
      state = action.payload.data.user;
      break;

    case FETCH_USER_COMPLETED:
      state = action.payload.data.user;
      break;

    case FETCH_USER_FAILED:
      state = { ...initialState, _id: false };
      break;

    case CREATE_LEAGUE_COMPLETED:
      // TODO: only a single team will be return from the server.
      // Merge the new team with the existing teams.
      // Consider a helper function for reusability
      state = action.payload.data.user;
      break;

    case JOIN_LEAGUE_COMPLETED:
      // TODO: only a single team will be return from the server.
      // Merge the new team with the existing teams
      state = action.payload.data.user;
      break;

    case LOGOUT_USER_COMPLETED:
      state = {
        ...state,
        _id: false
      };
      break;
  }
  return state;
};
