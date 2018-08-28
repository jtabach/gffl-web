import { CREATE_LEAGUE, JOIN_LEAGUE } from '../types/league';

export const createLeague = formData => ({
  type: CREATE_LEAGUE,
  payload: formData
});

export const joinLeague = formData => ({
  type: JOIN_LEAGUE,
  payload: formData
});
