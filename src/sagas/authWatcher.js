import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';
import {
  LOGIN_USER,
  LOGIN_USER_COMPLETED,
  FETCH_USER,
  FETCH_USER_COMPLETED,
  REGISTER_USER,
  REGISTER_USER_COMPLETED,
  LOGOUT_USER,
  LOGOUT_USER_COMPLETED
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

function* registerUserRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/auth/register',
    action.payload
  );
  if (response.user) {
    yield put({ type: REGISTER_USER_COMPLETED, payload: { data: response } });
  } else {
    // invoke some other action
    console.log('handle failed register');
  }
}

function* logoutUserRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/auth/logout',
    action.payload
  );
  if (!response.user) {
    yield put({ type: LOGOUT_USER_COMPLETED, payload: { data: response } });
  } else {
    // invoke some other action
    console.log('handle failed logout');
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
  yield takeLatest(REGISTER_USER, registerUserRequest);
  yield takeLatest(LOGOUT_USER, logoutUserRequest);
  yield takeLatest(FETCH_USER, fetchUserRequest);
}