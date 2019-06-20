export const getCharactersState = state => state.characters;
export const getCharacters = state => getCharactersState(state).list;
export const getCharactersLoading = state => getCharactersState(state).loading;

export const getCharacterState = state => state.character;
export const getCharacter = state => getCharacterState(state).detail;
