import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';

import { FETCH_TEAM, FETCH_TEAM_COMPLETED } from '../types/team';

function* fetchTeamRequest(action) {
  console.log(action);
  const leagueId = action.payload;
  const response = yield call(
    getRequest,
    `http://localhost:5000/api/team/${leagueId}`
  );
  console.log(response);
  if (response.team) {
    yield put({ type: FETCH_TEAM_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to fetch team');
  }
}

export function* teamWatcher() {
  yield takeLatest(FETCH_TEAM, fetchTeamRequest);
}
