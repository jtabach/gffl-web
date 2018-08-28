import { put, takeLatest, all, call } from 'redux-saga/effects';
import { postRequest } from './helpers/request';

function* loginUserRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/auth/login',
    action.payload
  );
  if (response.user) {
    yield put({ type: 'LOGIN_USER_COMPLETED', payload: { data: response } });
  } else {
    // invoke some other action
    console.log('handle failed login');
  }
}

export function* authWatcher() {
  yield takeLatest('LOGIN_USER', loginUserRequest);
}
