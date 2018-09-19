import { CREATE_NOTIFICATION } from '../types/notification';

export const createNotification = notificationData => ({
  type: CREATE_NOTIFICATION,
  payload: notificationData
});
