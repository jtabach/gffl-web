import { put, takeLatest, all, call } from 'redux-saga/effects';
import axios from 'axios';

function requestTest(url, method, data) {
  return fetch(url, {
    method: method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => response.json());
}

function* loginUserTest(action) {
  const response = yield call(
    requestTest,
    'http://localhost:5000/api/auth/login',
    'POST',
    action.payload
  );
  yield put({ type: 'LOGIN_USER_COMPLETED', payload: { data: response } });
}

function* actionWatcher() {
  yield takeLatest('LOGIN_USER', loginUserTest);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
