import axios from 'axios';
import _ from 'lodash';

axios.defaults.withCredentials = true;

import { createAction, createAsyncAction } from '../helpers/async';

import { GET_LEAGUES, GET_LEAGUES_COMPLETED } from '../types/user';

export const getLeagues = () => {
  return createAsyncAction(GET_LEAGUES, GET_LEAGUES_COMPLETED, () =>
    axios.get('http://localhost:5000/api/user/leagues')
  );
};
