import { put, takeLatest, all, call } from 'redux-saga/effects';
import { getRequest, postRequest } from './helpers/request';

import {
  SAVE_SUBSCRIPTION,
  SAVE_SUBSCRIPTION_COMPLETED
} from '../types/subscription';

function* saveSubscriptionRequest(action) {
  const response = yield call(
    postRequest,
    'http://localhost:5000/api/subscription/save',
    action.payload
  );
  if (response.data) {
    yield put({
      type: SAVE_SUBSCRIPTION_COMPLETED,
      payload: { data: response }
    });
  } else {
    console.log('handle failed to save subscription');
  }
}

export function* subscriptionWatcher() {
  yield takeLatest(SAVE_SUBSCRIPTION, saveSubscriptionRequest);
}
