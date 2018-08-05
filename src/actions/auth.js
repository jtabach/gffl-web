import axios from 'axios';
import Cookies from 'cookies-js';
import _ from 'lodash';

axios.defaults.withCredentials = true;

import { createAction, createAsyncAction } from '../helpers/async';

import {
  REGISTER_USER,
  REGISTER_USER_COMPLETED,
  GET_USER
} from '../types/auth';

export const registerUser = userData => {
  return createAsyncAction(REGISTER_USER, REGISTER_USER_COMPLETED, () =>
    axios.post('http://localhost:5000/api/auth/register', userData)
  );
};

export const getUser = () => {
  return dispatch => {
    dispatch({
      type: GET_USER,
      payload: Cookies.get('authToken')
    });
  };
};
