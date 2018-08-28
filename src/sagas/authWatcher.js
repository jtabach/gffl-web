import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';
import {
  LOGIN_USER,
  LOGIN_USER_COMPLETED,
  FETCH_USER,
  FETCH_USER_COMPLETED
} from '../types/auth';

function* loginUserRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/auth/login',
    action.payload
  );
  if (response.user) {
    yield put({ type: LOGIN_USER_COMPLETED, payload: { data: response } });
  } else {
    // invoke some other action
    console.log('handle failed login');
  }
}

function* fetchUserRequest(action) {
  const response = yield call(
    getRequest,
    'http://localhost:5000/api/auth/user'
  );
  yield put({ type: FETCH_USER_COMPLETED, payload: { data: response } });
}

export function* authWatcher() {
  yield takeLatest(LOGIN_USER, loginUserRequest);
  yield takeLatest(FETCH_USER, fetchUserRequest);
}
