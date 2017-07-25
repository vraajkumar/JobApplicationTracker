import * as types from './actionTypes';
import jobNotesAPI from '../api/jobNotesAPI';

export function createJobNoteSuccess(jobNote) {
  return {type: types.CREATE_NOTES_SUCCESS, jobNote};
}

export function loadNotesSuccess(notes) {
  console.log('loadNotesSuccess');
  console.log(notes.length);
  return {type:types.LOAD_NOTES_SUCCESS, notes}
}

export function createJobNote(jobNote) {
  console.log(`job note is ${JSON.stringify({ jobNote})}`)
  return function (dispatch) {
    return jobNotesAPI.createJobNote(jobNote).then(responseJobNote => {
      dispatch(createJobNoteSuccess(responseJobNote));
      return responseJobNote;
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadJobNotes() {
  return function(dispatch) {
    return jobNotesAPI.getAllNotes().then(notes => {
      console.log(notes.length);
      dispatch(loadNotesSuccess(notes));
    })
    .catch(error => {throw error})
  }
}
