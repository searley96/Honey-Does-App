import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

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

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('UPDATE_CLIENT_INFO', updateClientInfo);
}

export default userSaga;
