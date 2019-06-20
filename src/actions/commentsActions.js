import { createAction } from 'promise-middleware-redux';
import { postComment, getComments } from '../services/commentsApi';

export const [
  createComment,
  CREATE_COMMENT,
  CREATE_COMMENT_PENDING
] = createAction('CREATE_COMMENT', postComment);

export const [
  fetchComments,
  FETCH_COMMENTS,
  FETCH_COMMENTS_PENDING
] = createAction('FETCH_COMMENTS', getComments);
