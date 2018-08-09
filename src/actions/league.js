import axios from 'axios';
import _ from 'lodash';

axios.defaults.withCredentials = true;

import { createAction, createAsyncAction } from '../helpers/async';

import { CREATE_LEAGUE, CREATE_LEAGUE_COMPLETED } from '../types/league';

export const createLeague = formData => {
  console.log(formData);
  return createAsyncAction(CREATE_LEAGUE, CREATE_LEAGUE_COMPLETED, () =>
    axios.post('http://localhost:5000/api/league', formData)
  );
};
