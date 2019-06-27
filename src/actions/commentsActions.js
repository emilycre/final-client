import { createAction } from 'promise-middleware-redux';
import {
  postComment,
  getComments,
  editComment,
  deleteComment
} from '../services/commentsApi';

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

export const [
  updateComment,
  UPDATE_COMMENT,
  UPDATE_COMMENT_PENDING
] = createAction('UPDATE_COMMENT', editComment);

export const [
  trashComment,
  DELETE_COMMENT
] = createAction('DELETE_COMMENT', deleteComment);
