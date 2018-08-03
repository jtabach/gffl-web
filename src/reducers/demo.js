import { FETCH_WORKER_DEMO } from '../types/demo';

const initialState = { demo: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORKER_DEMO:
      return { ...state, demo: action.payload.workerDemo };
    default:
      return state;
  }
};
