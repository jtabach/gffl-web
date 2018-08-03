import { FETCH_WORKER_DEMO_COMPLETED } from '../types/demo';

export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_WORKER_DEMO_COMPLETED:
      return action.payload.data;
    default:
      return state;
  }
};
