import axios from 'axios';
import _ from 'lodash';

axios.defaults.withCredentials = true;

import { createAction, createAsyncAction } from '../helpers/async';

import {
  REGISTER_USER,
  REGISTER_USER_COMPLETED,
  LOGIN_USER,
  LOGOUT_USER,
  LOGOUT_USER_COMPLETED,
  FETCH_USER
} from '../types/auth';

export const registerUser = userData => {
  return createAsyncAction(REGISTER_USER, REGISTER_USER_COMPLETED, () =>
    axios.post('http://localhost:5000/api/auth/register', userData)
  );
};

export const loginUser = userData => ({
  type: LOGIN_USER,
  payload: userData
});

export const logoutUser = () => {
  return createAsyncAction(LOGOUT_USER, LOGOUT_USER_COMPLETED, () =>
    axios.post('http://localhost:5000/api/auth/logout')
  );
};

export const fetchUser = () => ({
  type: FETCH_USER,
  payload: {}
});
