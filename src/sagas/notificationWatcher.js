import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';

import {
  CREATE_NOTIFICATION,
  FETCH_NOTIFICATIONS,
  FETCH_NOTIFICATIONS_COMPLETED
} from '../types/notification';

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

function* fetchNotificationsRequest(action) {
  const response = yield call(
    getRequest,
    `http://localhost:5000/api/notification`
  );
  console.log(response.notifications);
  if (response.notifications) {
    yield put({
      type: FETCH_NOTIFICATIONS_COMPLETED,
      payload: { data: response }
    });
  } else {
    console.log('handle failed to fetch notifications');
  }
}

export function* notificationWatcher() {
  yield takeLatest(CREATE_NOTIFICATION, notificationPostRequest);
  yield takeLatest(FETCH_NOTIFICATIONS, fetchNotificationsRequest);
}
