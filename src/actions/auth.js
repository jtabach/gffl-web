import axios from 'axios';
axios.defaults.withCredentials = true;

import _ from 'lodash';

import { createAction, createAsyncAction } from '../helpers/async';

import { REGISTER_USER, REGISTER_USER_COMPLETED } from '../types/auth';

export const registerUser = userData => {
  return createAsyncAction(REGISTER_USER, REGISTER_USER_COMPLETED, () =>
    axios.post('http://localhost:5000/api/auth/register', userData)
  );
};
