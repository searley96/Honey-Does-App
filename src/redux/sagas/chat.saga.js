import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchChat(action) {
    console.log('action.payload in saga', action.payload);
    try {
        const chat = yield axios.get(`/api/message-log/${action.payload.jobId}`);
        console.log('this is chat:', chat.data);

        // places chat into the associated reducer
        yield put({
            type: 'SET_CHAT',
            payload: chat.data
        });
    } catch(error) {
        console.log('ERROR retrieving new chat', error);
    }
}

function* chatSaga() {
    yield takeLatest('FETCH_CHAT', fetchChat);
  }
  
  export default chatSaga;