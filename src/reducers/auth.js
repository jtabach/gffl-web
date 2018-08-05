// import { AUTH_DEMO_COMPLETED } from '../types/demo';

import {
  REGISTER_USER,
  REGISTER_USER_COMPLETED,
  GET_USER
} from '../types/auth';

// commented until google auth working from client
// export default (state = null, action) => {
//   console.log(action);
//   switch (action.type) {
//     case AUTH_DEMO_COMPLETED:
//       return action.payload.data;
//     default:
//       return state;
//   }
// };

export default (state = null, action) => {
  console.log(action);
  switch (action.type) {
    case REGISTER_USER_COMPLETED:
      return true;
    case GET_USER:
      return action.payload || false;
    default:
      return state;
  }
};
