import {
  CREATE_NOTIFICATION,
  FETCH_NOTIFICATIONS,
  VIEW_NOTIFICATION,
  DISMISS_NOTIFICATIONS
} from '../types/notification';

export const createNotification = notificationData => ({
  type: CREATE_NOTIFICATION,
  payload: notificationData
});

export const fetchNotifications = () => ({
  type: FETCH_NOTIFICATIONS,
  payload: {}
});

export const viewNotification = notificationData => ({
  type: VIEW_NOTIFICATION,
  payload: notificationData
});

export const dismissNotifications = notificationsArray => ({
  type: DISMISS_NOTIFICATIONS,
  payload: notificationsArray
});
