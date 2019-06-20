import reducer from './characterReducer';
import { FETCH_CHARACTER, FETCH_CHARACTER_PENDING } from '../actions/charactersActions';

describe('character reducer', () => {
  it('handles the FETCH_CHARACTER action', () => {
    const initialState = {
      detail: {},
      loading: false,
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTER,
      payload: { name: 'test' }
    });

    expect(newState).toEqual({
      detail: { name: 'test' },
      loading: false,
      error: null
    });
  });

  it('handles the FETCH_CHARACTER_LOADING action', () => {
    const initialState = {
      detail: {},
      loading: false,
      error: null
    };

    const newState = reducer(initialState, {
      type: FETCH_CHARACTER_PENDING,
    });

    expect(newState).toEqual({
      detail: {},
      loading: true,
      error: null
    });
  });
});
