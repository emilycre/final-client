import reducer from './commentsReducer';
import {
  CREATE_COMMENT,
  CREATE_COMMENT_PENDING,
  FETCH_COMMENTS,
  FETCH_COMMENTS_PENDING
} from '../actions/commentsActions';

jest.mock('../services/auth.js');
jest.mock('../services/commentsApi.js');

describe('character reducer', () => {
  it('handles the CREATE_COMMENT action', () => {
    const initialState = {
      list: [],
      loading: false,
      error: null
    };

    const newState = reducer(initialState, {
      type: CREATE_COMMENT,
      payload: { name: 'test' }
    });

    expect(newState).toEqual({
      list: [{ name: 'test' }],
      loading: false,
      error: null
    });
  });

  it('handles the CREATE_COMMENT_PENDING action', () => {
    const initialState = {
      list: [],
      loading: false,
      error: null
    };

    const newState = reducer(initialState, {
      type: CREATE_COMMENT_PENDING,
    });

    expect(newState).toEqual({
      list: [],
      loading: true,
      error: null
    });
  });

  it('handles the FETCH_COMMENTS action', () => {
    const initialState = {
      list: [],
      loading: false,
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_COMMENTS,
      payload: [{ name: 'test' }]
    });

    expect(newState).toEqual({
      list: [{ name: 'test' }],
      loading: false,
      error: null
    });
  });

  it('handles the FETCH_COMMENTS_PENDING action', () => {
    const initialState = {
      list: [],
      loading: false,
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_COMMENTS_PENDING,
    });

    expect(newState).toEqual({
      list: [],
      loading: true,
      error: null
    });
  });
});
