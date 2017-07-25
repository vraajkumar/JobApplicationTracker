import * as types from './actionTypes';
import jobNotesAPI from '../api/jobNotesAPI';

export function createJobNoteSuccess(cats) {
  return {type: types.CREATE_NOTES_SUCCESS, cats};
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
