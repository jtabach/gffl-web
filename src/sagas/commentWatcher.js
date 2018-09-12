import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';

import { CREATE_COMMENT, CREATE_COMMENT_COMPLETED } from '../types/comment';

function* createCommenttRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/comment',
    action.payload
  );
  if (response.comment) {
    yield put({ type: CREATE_COMMENT_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to create comment');
  }
}

export function* commentWatcher() {
  yield takeLatest(CREATE_COMMENT, createCommenttRequest);
}
