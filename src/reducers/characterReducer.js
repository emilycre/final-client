import { FETCH_CHARACTER, FETCH_CHARACTER_PENDING } from '../actions/charactersActions';

const initialState = {
  detail: {},
  loading: false,
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_CHARACTER:
      return { ...state, detail: payload, loading: false };
    case FETCH_CHARACTER_PENDING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
