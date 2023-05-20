import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createKitchen(action) {
    try {
        yield axios.post(`/api/form/kitchen`, action.payload);

        yield put({
            type: 'CLEAR_ROOM'
        });
    } catch(error) {
        console.log('ERROR updating kitchen and clearing forms', error);
    }   
}


function* createBathroom(action) {
    console.log('inside saga', action.payload);
    try {
        yield axios.post(`/api/form/bathroom`, action.payload);

        yield put({
            type: 'CLEAR_ROOM'
        });
    } catch(error) {
        console.log('ERROR updating bathroom and clearing forms', error);
    } 
}


function* createOtherRoom(action) {
    try {
        yield axios.post(`/api/form/other`, action.payload);

        yield put({
            type: 'CLEAR_ROOM'
        });
    } catch(error) {
        console.log('ERROR updating other room type and clearing forms', error);
    }  
   
}

function* createWipeDust(action){
    try {
        yield axios.post(`/api/form/wipe-dust`, action.payload);

        yield put({
            type: 'CLEAR_ROOM'
        });

        // CALCULATE ESTIMATE AND SUBMIT REQUEST

        // SEND DISPATCH TO USER SAGA TO RESET THE FORM_JOB_ID TO NULL
        yield put({ type: 'FINISH_FORM_JOB'});
    } catch(error) {
        console.log('ERROR updating wipe-dust and clearing forms', error);
    }  
}

function* roomSaga() {
    yield takeLatest('ADD_KITCHEN', createKitchen);
    yield takeLatest('ADD_BATHROOM', createBathroom);
    yield takeLatest('ADD_OTHER_ROOM', createOtherRoom);
    yield takeLatest('ADD_WIPE_DUST', createWipeDust);
  }
  
  export default roomSaga;