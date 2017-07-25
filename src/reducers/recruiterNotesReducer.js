import * as types from '../actions/actionTypes';
//import initialState from './initialState';
//import {browserHistory} from 'react-router';


export default function recuriterNotes(state = [{"notes":"tee","firstName":"raj","phoneNumber":"1234","email":"rr"}], action) {
console.log(action.type);
  switch(action.type) {

    case types.CREATE_NOTES_SUCCESS:
      console.log('Inside recuriterNotes');
      return state;
    case types.LOAD_NOTES_SUCCESS:
      console.log('inside load success');
      console.log(`state length is ${state.length}`)
      return Object.assign([],state,action.notes);

    default:
      return state;
  }
}
