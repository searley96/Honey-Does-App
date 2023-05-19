import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createKitchen(action) {
    try {
        yield axios.post(`/api/form/kitchen`, action.payload);

        yield put({
            type: 'CLEAR_ROOM'
        });
    } catch(error) {
        console.log('ERROR clearing rooms', error);
    }   
}

function* fetchKitchen() {
   
}

function* createBathroom() {
   
}

function* fetchBathroom() {
   
}

function* createOtherRoom() {
   
}

function* fetchOtherRoom() {
   
}

function* roomSaga() {
    yield takeLatest('ADD_KITCHEN', createKitchen);
    yield takeLatest('ADD_BATHROOM', createBathroom);
    yield takeLatest('ADD_OTHER_ROOM', createOtherRoom);
    yield takeLatest('FETCH_KITCHEN', fetchKitchen);
    yield takeLatest('FETCH_BATHROOM', fetchBathroom);
    yield takeLatest('FETCH_OTHER_ROOM', fetchOtherRoom);
  }
  
  export default roomSaga;