import { FETCH_TEAM, CLEAR_TEAM } from '../types/team';

export const fetchTeam = leagueId => ({
  type: FETCH_TEAM,
  payload: leagueId
});

export const clearTeam = () => ({
  type: CLEAR_TEAM,
  payload: {}
});
