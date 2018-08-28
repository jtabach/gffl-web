import { put, takeLatest, all, call } from 'redux-saga/effects';
import { postRequest } from './helpers/request';

import {
  CREATE_LEAGUE,
  CREATE_LEAGUE_COMPLETED,
  JOIN_LEAGUE,
  JOIN_LEAGUE_COMPLETED
} from '../types/league';

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

function* joinLeagueRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/team',
    action.payload
  );
  // TODO: some conditional to show league was joined successfully
  if (true) {
    yield put({ type: JOIN_LEAGUE_COMPLETED, payload: { data: response } });
  } else {
    // invoke some other action
    console.log('handle failed join league');
  }
}

export function* leagueWatcher() {
  yield takeLatest(CREATE_LEAGUE, createLeagueRequest);
  yield takeLatest(JOIN_LEAGUE, joinLeagueRequest);
}
