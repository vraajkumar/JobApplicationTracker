class JobNotesAPI {
  static createJobNote(jobNote) {
    console.log(`inside ${JSON.stringify({ jobNote})}`);
    const request = new Request('http://localhost:3001/api/jobNotes/', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(jobNote)
    });


    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getAllNotes() {
    return fetch('http://localhost:3001/api/jobNotes/').then(response => {
      return response.json()
    }).catch(error => {
      throw error;
    });
  }
}


export default JobNotesAPI;
