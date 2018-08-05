import { combineReducers } from 'redux';

import messageReducer from './message';
import demoReducer from './demo';
import authReducer from './auth';

export default combineReducers({
  message: messageReducer,
  demo: demoReducer,
  isLoggedIn: authReducer
});
