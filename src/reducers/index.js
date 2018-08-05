import { combineReducers } from 'redux';

import demoReducer from './demo';
import authReducer from './auth';

export default combineReducers({
  demo: demoReducer,
  isLoggedIn: authReducer
});
