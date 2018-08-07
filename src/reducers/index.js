import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import demoReducer from './demo';
import userReducer from './user';

export default combineReducers({
  demo: demoReducer,
  form: formReducer,
  user: userReducer
});
