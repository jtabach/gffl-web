import { CREATE_COMMENT } from '../types/comment';

export const createComment = commentData => ({
  type: CREATE_COMMENT,
  payload: commentData
});
