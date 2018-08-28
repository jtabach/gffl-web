import { put, takeLatest, all, call } from 'redux-saga/effects';
import { postRequest } from './helpers/request';

import { CREATE_LEAGUE, CREATE_LEAGUE_COMPLETED } from '../types/league';

function* createLeagueRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/league',
    action.payload
  );
  // TODO: some conditional to show league created successfully
  if (true) {
    yield put({ type: CREATE_LEAGUE_COMPLETED, payload: { data: response } });
  } else {
    // invoke some other action
    console.log('handle failed league creation');
  }
}

export function* leagueWatcher() {
  yield takeLatest(CREATE_LEAGUE, createLeagueRequest);
}
