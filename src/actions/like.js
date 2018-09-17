import { LIKE_POST } from '../types/like';

export const likePost = likeData => ({
  type: LIKE_POST,
  payload: likeData
});
