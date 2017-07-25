import * as types from '../actions/actionTypes';
import initialState from './initialState';
//import {browserHistory} from 'react-router';


const recuriterNote = (state,action) => {
  if (action.type === 'ADD_NOTES') {
    return {
      fName :action.payload.fName,
      lName:action.payload.lName,
      notes:action.payload.notes,
      email:action.payload.email,
      phone:action.payload.phone,
    }
  }
  return state;
}

const recuriterNotes = (state = [],action) => {
  if (action.type === 'ADD_NOTES') {
    const temp = recuriterNote(undefined,action)
    return [...state,temp]
  }
  return state;
}


export default recuriterNotes;
