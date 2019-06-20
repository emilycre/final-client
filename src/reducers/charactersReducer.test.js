import reducer from './charactersReducer';
import { FETCH_CHARACTERS, FETCH_CHARACTERS_PENDING } from '../actions/charactersActions';

describe('character reducer', () => {
  it('handles the FETCH_CHARACTERS action', () => {
    const initialState = {
      list: [],
      loading: false,
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS,
      payload: [{ name: 'test' }]
    });

    expect(newState).toEqual({
      list: [{ name: 'test' }],
      loading: false,
      error: null
    });
  });

  it('handles the FETCH_CHARACTERS_LOADING action', () => {
    const initialState = {
      list: [],
      loading: false,
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTERS_PENDING,
    });

    expect(newState).toEqual({
      list: [],
      loading: true,
      error: null
    });
  });
});
