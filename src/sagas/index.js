import { all } from 'redux-saga/effects';
import { authWatcher } from './authWatcher';
import { leagueWatcher } from './leagueWatcher';

export default function* rootSaga() {
  yield all([authWatcher(), leagueWatcher()]);
}
