// import { AUTH_DEMO_COMPLETED } from '../types/demo';

import {
  REGISTER_USER_COMPLETED,
  LOGIN_USER_COMPLETED,
  LOGOUT_USER_COMPLETED,
  FETCH_USER_COMPLETED
} from '../types/auth';

export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case REGISTER_USER_COMPLETED:
      return action.payload.data.user;
    case LOGIN_USER_COMPLETED:
      return action.payload.data.user;
    case FETCH_USER_COMPLETED:
      return action.payload.data.user;
    case LOGOUT_USER_COMPLETED:
      return false;
    default:
      return state;
  }
};
