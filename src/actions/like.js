import { LIKE_POST, UNLIKE_POST } from '../types/like';

export const likePost = likeData => ({
  type: LIKE_POST,
  payload: likeData
});

export const unlikePost = likeData => ({
  type: UNLIKE_POST,
  payload: likeData
});
