import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';

import { LIKE_POST, LIKE_POST_COMPLETED } from '../types/like';

function* likePostRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/like',
    action.payload
  );
  if (response.like) {
    yield put({ type: LIKE_POST_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to like post');
  }
}

export function* likeWatcher() {
  yield takeLatest(LIKE_POST, likePostRequest);
}
