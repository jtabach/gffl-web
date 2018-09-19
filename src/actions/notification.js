import {
  CREATE_NOTIFICATION,
  FETCH_NOTIFICATIONS
} from '../types/notification';

export const createNotification = notificationData => ({
  type: CREATE_NOTIFICATION,
  payload: notificationData
});

export const fetchNotifications = () => ({
  type: FETCH_NOTIFICATIONS,
  payload: {}
});
