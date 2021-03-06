import { all } from 'redux-saga/effects';
import { authWatcher } from './authWatcher';
import { leagueWatcher } from './leagueWatcher';
import { teamWatcher } from './teamWatcher';
import { postWatcher } from './postWatcher';
import { commentWatcher } from './commentWatcher';
import { likeWatcher } from './likeWatcher';
import { notificationWatcher } from './notificationWatcher';

export default function* rootSaga() {
  yield all([
    authWatcher(),
    leagueWatcher(),
    teamWatcher(),
    postWatcher(),
    commentWatcher(),
    likeWatcher(),
    notificationWatcher()
  ]);
}
