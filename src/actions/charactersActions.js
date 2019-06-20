import { createAction } from 'promise-middleware-redux';
import { getCharacters, getCharacterById } from '../services/characterApi';

export const [
  fetchCharacters,
  FETCH_CHARACTERS,
  FETCH_CHARACTERS_PENDING
] = createAction('FETCH_CHARACTERS', getCharacters);

export const [
  fetchCharacter,
  FETCH_CHARACTER,
  FETCH_CHARACTER_PENDING
] = createAction('FETCH_CHARACTER', getCharacterById);
