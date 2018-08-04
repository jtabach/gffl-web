import axios from 'axios';
axios.defaults.withCredentials = true;

import _ from 'lodash';

import { createAction, createAsyncAction } from '../helpers/async';
import {
  FETCH_WORKER_DEMO,
  FETCH_WORKER_DEMO_COMPLETED,
  AUTH_DEMO,
  AUTH_DEMO_COMPLETED
} from '../types/demo';

export const fetchWorkerDemo = () => {
  return createAsyncAction(FETCH_WORKER_DEMO, FETCH_WORKER_DEMO_COMPLETED, () =>
    axios.get('http://localhost:5000')
  );
};

export const fetchAuthDemo = () => {
  return createAsyncAction(
    AUTH_DEMO,
    AUTH_DEMO_COMPLETED,
    () => axios.get('http://localhost:5000/auth/google')

    // fetch('https://gffl-backend.herokuapp.com/auth/google', {
    //   mode: 'no-cors',
    //   credentials: 'include',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
  );
};

//
// export const fetchWorkerDemo = () => async dispatch => {
//   const res = await axios.get('http://localhost:5000');
//
//   dispatch({ type: FETCH_WORKER_DEMO, payload: res.data });
// };
