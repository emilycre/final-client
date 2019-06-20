import { FETCH_CHARACTERS, FETCH_CHARACTERS_PENDING } from '../actions/charactersActions';

const initialState = {
  list: [],
  loading: false,
  error: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_CHARACTERS:
      return { ...state, list: payload, loading: false };
    case FETCH_CHARACTERS_PENDING:
      return { ...state, loading: true };
    default:
      return state;
  }
}
