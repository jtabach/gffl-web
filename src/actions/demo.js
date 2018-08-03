import { FETCH_WORKER_DEMO } from '../types/demo';

export const fetchWorkerDemo = workerDemo => {
  return dispatch => {
    dispatch({
      type: FETCH_WORKER_DEMO,
      payload: {
        workerDemo
      }
    });
  };
};
