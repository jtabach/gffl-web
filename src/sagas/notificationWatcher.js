import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';

import { CREATE_NOTIFICATION } from '../types/notification';

function* notificationPostRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/notification',
    action.payload
  );
  console.log(response);
  // if (response.notification) {
  //   yield put({ type: LIKE_POST_COMPLETED, payload: { data: response } });
  // } else {
  //   console.log('handle failed to like post');
  // }
}

export function* notificationWatcher() {
  yield takeLatest(CREATE_NOTIFICATION, notificationPostRequest);
}
