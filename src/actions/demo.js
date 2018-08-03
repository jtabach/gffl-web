import axios from 'axios';
import _ from 'lodash';

import { createAction, createAsyncAction } from '../helpers/async';
import { FETCH_WORKER_DEMO, FETCH_WORKER_DEMO_COMPLETED } from '../types/demo';

export const fetchWorkerDemo = () => {
  return createAsyncAction(FETCH_WORKER_DEMO, FETCH_WORKER_DEMO_COMPLETED, () =>
    axios.get('http://localhost:5000')
  );
};

//
// export const fetchWorkerDemo = () => async dispatch => {
//   const res = await axios.get('http://localhost:5000');
//
//   dispatch({ type: FETCH_WORKER_DEMO, payload: res.data });
// };
