import { FETCH_TEAM_COMPLETED } from '../types/team';

const initialState = {
  _id: null,
  name: null,
  user: null,
  league: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEAM_COMPLETED:
      state = action.payload.data.team;
      break;
  }

  return state;
};
