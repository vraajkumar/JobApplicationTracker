import {combineReducers} from 'redux';
import recuriterNotes from './recruiterNotesReducer';


const rootReducer = combineReducers({
  // short hand property names
  recuriterNotes
})

export default rootReducer;
