import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';

import {
  CREATE_POST,
  CREATE_POST_COMPLETED,
  DELETE_POST,
  DELETE_POST_COMPLETED
} from '../types/post';

function* createPostRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/post',
    action.payload
  );
  if (response.post) {
    yield put({ type: CREATE_POST_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to create post');
  }
}

function* deletePostRequest(action) {
  console.log('in delete');
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/post/delete',
    action.payload
  );
  if (response.postId) {
    yield put({ type: DELETE_POST_COMPLETED, payload: { data: response } });
  } else {
    console.log('handle failed to delete post');
  }
}

export function* postWatcher() {
  yield takeLatest(CREATE_POST, createPostRequest);
  yield takeLatest(DELETE_POST, deletePostRequest);
}
