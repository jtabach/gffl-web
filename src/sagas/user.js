import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getRequest } from './helpers/request';

function* fetchUserRequest(action) {
  const response = yield call(
    getRequest,
    'http://localhost:5000/api/auth/user'
  );
  yield put({ type: 'FETCH_USER_COMPLETED', payload: { data: response } });
}

export function* userWatcher() {
  yield takeLatest('FETCH_USER', fetchUserRequest);
}
