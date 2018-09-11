import { all } from 'redux-saga/effects';
import { authWatcher } from './authWatcher';
import { leagueWatcher } from './leagueWatcher';
import { teamWatcher } from './teamWatcher';
import { postWatcher } from './postWatcher';

export default function* rootSaga() {
  yield all([authWatcher(), leagueWatcher(), teamWatcher(), postWatcher()]);
}
