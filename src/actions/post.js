import { CREATE_POST, DELETE_POST } from '../types/post';

export const createPost = postData => ({
  type: CREATE_POST,
  payload: postData
});

export const deletePost = postData => ({
  type: DELETE_POST,
  payload: postData
});
