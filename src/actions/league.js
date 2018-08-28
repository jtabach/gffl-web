import axios from 'axios';
import _ from 'lodash';

axios.defaults.withCredentials = true;

import { createAction, createAsyncAction } from '../helpers/async';

import { CREATE_LEAGUE, JOIN_LEAGUE } from '../types/league';

export const createLeague = formData => ({
  type: CREATE_LEAGUE,
  payload: formData
});

export const joinLeague = formData => ({
  type: JOIN_LEAGUE,
  payload: formData
});
