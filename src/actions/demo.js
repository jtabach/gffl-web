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

// TODO: fix actions, no longer work due to migration to redux saga
export const fetchWorkerDemo = () => {
  return createAsyncAction(FETCH_WORKER_DEMO, FETCH_WORKER_DEMO_COMPLETED, () =>
    axios.get('http://localhost:5000')
  );
};

export const fetchAuthDemo = () => {
  return createAsyncAction(AUTH_DEMO, AUTH_DEMO_COMPLETED, () =>
    axios.get('http://localhost:5000/api/auth/google')
  );
};
