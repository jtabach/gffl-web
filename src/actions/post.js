import { CREATE_POST } from '../types/post';

export const createPost = postData => ({
  type: CREATE_POST,
  payload: postData
});
