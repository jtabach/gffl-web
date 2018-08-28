import { put, takeLatest, all, call } from 'redux-saga/effects';
import request from './helpers/request';

function* loginUserTest(action) {
  const response = yield call(
    request,
    'http://localhost:5000/api/auth/login',
    'POST',
    action.payload
  );
  if (response.user) {
    yield put({ type: 'LOGIN_USER_COMPLETED', payload: { data: response } });
  } else {
    // invoke some other action
    console.log('handle failed login');
  }
}

export function* loginWatcher() {
  yield takeLatest('LOGIN_USER', loginUserTest);
}
