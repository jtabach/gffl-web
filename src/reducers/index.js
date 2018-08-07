import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import demoReducer from './demo';
import authReducer from './auth';
import userReducer from './user';

export default combineReducers({
  demo: demoReducer,
  isLoggedIn: authReducer,
  form: formReducer,
  user: userReducer
});
