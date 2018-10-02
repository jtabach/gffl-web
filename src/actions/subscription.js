import { SAVE_SUBSCRIPTION } from '../types/subscription';

export const saveSubscription = subscriptionData => ({
  type: SAVE_SUBSCRIPTION,
  payload: subscriptionData
});
