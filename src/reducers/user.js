import {
  REGISTER_USER_COMPLETED,
  REGISTER_USER_FAILED,
  LOGIN_USER_COMPLETED,
  LOGOUT_USER_COMPLETED,
  FETCH_USER_COMPLETED,
  FETCH_USER_FAILED
} from '../types/auth';

import {
  CREATE_LEAGUE_COMPLETED,
  JOIN_LEAGUE_COMPLETED
} from '../types/league';

import { FETCH_NOTIFICATIONS_COMPLETED } from '../types/notification';

const initialState = {
  _id: null,
  email: null,
  password: null,
  teams: [],
  notifications: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_COMPLETED:
      state = action.payload.data.user;
      break;

    case REGISTER_USER_FAILED:
      state = {
        ...initialState,
        _id: false
      };
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
      // Consider a helper function for reusability
      state = {
        ...state,
        teams: state.teams.concat([action.payload.data.team])
      };
      break;

    case JOIN_LEAGUE_COMPLETED:
      state = {
        ...state,
        teams: state.teams.concat([action.payload.data.team])
      };
      break;

    case FETCH_NOTIFICATIONS_COMPLETED:
      state = {
        ...state,
        notifications: action.payload.data.notifications
      };
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
