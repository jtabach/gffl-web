import {
  REGISTER_USER_COMPLETED,
  LOGIN_USER_COMPLETED,
  LOGOUT_USER_COMPLETED,
  FETCH_USER_COMPLETED
} from '../types/auth';

import {
  CREATE_LEAGUE_COMPLETED,
  JOIN_LEAGUE_COMPLETED
} from '../types/league';

export default (state = null, action) => {
  switch (action.type) {
    case REGISTER_USER_COMPLETED:
      return action.payload.data.user;
    case LOGIN_USER_COMPLETED:
      return action.payload.data.user;
    case FETCH_USER_COMPLETED:
      return action.payload.data.user;
    case CREATE_LEAGUE_COMPLETED:
      return action.payload.data.user;
    case JOIN_LEAGUE_COMPLETED:
      return action.payload.data.user;
    case LOGOUT_USER_COMPLETED:
      return false;
    default:
      return state;
  }
};
