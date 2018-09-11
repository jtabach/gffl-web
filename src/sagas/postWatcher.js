import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';

import { CREATE_POST, CREATE_POST_COMPLETED } from '../types/post';

function* createPostRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/post',
    action.payload
  );
  if (response.post) {
    console.log(response.post);
    yield put({ type: CREATE_POST_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to create post');
  }
}

export function* postWatcher() {
  yield takeLatest(CREATE_POST, createPostRequest);
}
