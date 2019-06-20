import { combineReducers } from 'redux';
import characters from './charactersReducer';
import character from './characterReducer';
import comments from './commentsReducer';
import session from './sessionReducer';

export default combineReducers({
  characters,
  character,
  comments,
  session
});
