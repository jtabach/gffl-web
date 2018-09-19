import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';

import { CREATE_NOTIFICATION } from '../types/notification';

function* notificationPostRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/notification',
    action.payload
  );
  if (!response.success) {
    console.log('handle failed notification');
  }
}

export function* notificationWatcher() {
  yield takeLatest(CREATE_NOTIFICATION, notificationPostRequest);
}
