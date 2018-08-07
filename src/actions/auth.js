import axios from 'axios';
import Cookies from 'cookies-js';
import _ from 'lodash';

axios.defaults.withCredentials = true;

import { createAction, createAsyncAction } from '../helpers/async';

import {
  REGISTER_USER,
  REGISTER_USER_COMPLETED,
  LOGIN_USER,
  LOGIN_USER_COMPLETED,
  LOGOUT_USER,
  LOGOUT_USER_COMPLETED,
  GET_USER,
  GET_USER_COMPLETED
} from '../types/auth';

export const registerUser = userData => {
  return createAsyncAction(REGISTER_USER, REGISTER_USER_COMPLETED, () =>
    axios.post('http://localhost:5000/api/auth/register', userData)
  );
};

export const loginUser = userData => {
  return createAsyncAction(LOGIN_USER, LOGIN_USER_COMPLETED, () =>
    axios.post('http://localhost:5000/api/auth/login', userData)
  );
};

export const logoutUser = () => {
  return createAsyncAction(LOGOUT_USER, LOGOUT_USER_COMPLETED, () =>
    axios.post('http://localhost:5000/api/auth/logout')
  );
};

export const getUser = () => {
  return createAsyncAction(GET_USER, GET_USER_COMPLETED, () => {
    let token = Cookies.get('authToken');
    return axios.get(`http://localhost:5000/api/auth/user/${token}`);
  });
};
