import { FETCH_TEAM } from '../types/team';

export const fetchTeam = leagueId => ({
  type: FETCH_TEAM,
  payload: leagueId
});
