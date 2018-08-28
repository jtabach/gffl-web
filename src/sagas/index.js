import { all } from 'redux-saga/effects';
import { authWatcher } from './authWatcher';
import { userWatcher } from './user';

export default function* rootSaga() {
  yield all([authWatcher(), userWatcher()]);
}
