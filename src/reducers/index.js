import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import demoReducer from './demo';
import userReducer from './user';
import leagueReducer from './league';
import teamReducer from './team';

export default combineReducers({
  demo: demoReducer,
  form: formReducer,
  user: userReducer,
  league: leagueReducer,
  team: teamReducer
});
