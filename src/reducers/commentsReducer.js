import {
  CREATE_COMMENT,
  CREATE_COMMENT_PENDING,
  FETCH_COMMENTS,
  FETCH_COMMENTS_PENDING,
  UPDATE_COMMENT,
  UPDATE_COMMENT_PENDING,
  DELETE_COMMENT
} from '../actions/commentsActions';

const initialState = {
  list: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case CREATE_COMMENT:
      return { ...state, loading: false, list: [...state.list, payload] };
    case CREATE_COMMENT_PENDING:
      return { ...state, loading: true };
    case FETCH_COMMENTS:
      return { ...state, list: payload, loading: false };
    case FETCH_COMMENTS_PENDING:
      return { ...state, loading: true };
    case UPDATE_COMMENT:
      return { ...state, loading: false, list: payload };
    case UPDATE_COMMENT_PENDING:
      return { ...state, loading: true };
    case DELETE_COMMENT:
      return state;
    default:
      return state;
  }
}
