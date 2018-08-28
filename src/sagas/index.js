import { all } from 'redux-saga/effects';
import { authWatcher } from './authWatcher';

export default function* rootSaga() {
  yield all([authWatcher()]);
}
