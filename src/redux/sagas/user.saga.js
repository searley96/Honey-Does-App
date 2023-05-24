import axios from 'axios';
import { put, take, takeLatest } from 'redux-saga/effects';
// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

// handles both updating Client Info and Client Password requests
function* updateClientInfo(action) {
  try {
    console.log('this is action.payload in updateClientInfo', action.payload);
    console.log('action.payload.id', action.id);
    yield axios.put(`/api/user/client/update/${action.id}`, action.payload)
  } catch (error) {
    console.log('CLIENT User PUT request to update info failed', error);
  }
}

// form_job_id is a reference to a job that the client is
// currently in progress filling out
// addFormId sets the generatedId to the users form_job_id
function* addFormId(action){
 
  try{
    yield axios.post('api/user/client/addFormId', action.payload);
    console.log('past ADD_FORM_ID')
    yield put ({
      type: 'FETCH_USER'
    })
  }catch(err){
    console.log('ERROR posting new form_job_id');
  }

}

// sends a request to the server to update the user
// job_form_id to null and updates the user reducer
function* resetFormJob(){
  console.log('inside resetFormId saga');
  yield axios.put('/api/user/client/resetFormId');
  yield put({type: 'FETCH_USER'});
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('UPDATE_CLIENT_INFO', updateClientInfo);
  yield takeLatest('ADD_FORM_ID', addFormId);
  yield takeLatest("FINISH_FORM_JOB", resetFormJob);
}

export default userSaga;
