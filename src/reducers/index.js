import { combineReducers } from 'redux';

import messageReducer from './message';
import demoReducer from './demo';

export default combineReducers({
  message: messageReducer,
  demo: demoReducer
});
