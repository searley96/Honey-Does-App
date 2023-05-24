import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchChat(action) {
    console.log('in fetchChat, action.payload:', action.payload);
    console.log(action.payload.jobId);
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

function* addMessage(action){
    try{
        yield axios.post('/api/message-log/', action.payload);
        console.log('PAST POST')
        yield put({type: 'FETCH_CHAT', payload: action.payload})
    }catch(error){
        console.log('there was an error attempting to post message to db', error);
    }
}

function* chatSaga() {
    yield takeLatest('FETCH_CHAT', fetchChat);
    yield takeLatest('ADD_MESSAGE', addMessage);
    
  }
  
  export default chatSaga;