import {
  CREATE_COMMENT,
  CREATE_COMMENT_PENDING,
  FETCH_COMMENTS,
  FETCH_COMMENTS_PENDING
} from '../actions/commentsActions';

const initialState = {
  list: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case CREATE_COMMENT:
      return { ...state, loading: false };
    case CREATE_COMMENT_PENDING:
      return { ...state, loading: true };
    case FETCH_COMMENTS:
      return { ...state, list: payload, loading: false };
    case FETCH_COMMENTS_PENDING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
