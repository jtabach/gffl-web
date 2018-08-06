// import { AUTH_DEMO_COMPLETED } from '../types/demo';

import {
  REGISTER_USER_COMPLETED,
  LOGIN_USER_COMPLETED,
  LOGOUT_USER_COMPLETED,
  GET_USER
} from '../types/auth';

export default (state = null, action) => {
  switch (action.type) {
    case REGISTER_USER_COMPLETED:
      return true;
    case LOGIN_USER_COMPLETED:
      return true;
    case LOGOUT_USER_COMPLETED:
      return false;
    case GET_USER:
      return action.payload;
    default:
      return state;
  }
};
