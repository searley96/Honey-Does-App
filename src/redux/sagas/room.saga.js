import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { useSelector } from 'react-redux';

function* createKitchen(action) {
    try {
        // POST kitchen to the db
        yield axios.post(`/api/form/kitchen`, action.payload);

        // clear current form
        yield put({
            type: 'CLEAR_ROOM'
        });
        // gather all forms with job_id === user.form_job_id
        yield put({type: 'FETCH_FORM_LIST'})
    } catch (error) {
        console.log('ERROR updating kitchen and clearing forms', error);
    }
}


function* createBathroom(action) {
    try {
        // POST bathroom to the db
        yield axios.post(`/api/form/bathroom`, action.payload);

        // clear current form
        yield put({
            type: 'CLEAR_ROOM'
        });

        // gather all forms with job_id === user.form_job_id
        yield put({type: 'FETCH_FORM_LIST'})
    } catch (error) {
        console.log('ERROR updating bathroom and clearing forms', error);
    }
}


function* createOtherRoom(action) {
    try {
        // POST other room to the db
        yield axios.post(`/api/form/other`, action.payload);

        // clear current form
        yield put({
            type: 'CLEAR_ROOM'
        });

        // gather all forms with job_id === user.form_job_id
        yield put({type: 'FETCH_FORM_LIST'})
    } catch (error) {
        console.log('ERROR updating other room type and clearing forms', error);
    }

}

function* createWipeDust(action) {
    // const formList  = useSelector(store => store.formList);
    try {
        // POST wipe_dust form to the db
        yield axios.post(`/api/form/wipe-dust`, action.payload.wipeDustForm);

        // clear current form
        yield put({
            type: 'CLEAR_ROOM'
        });

        // gather all forms with job_id === user.form_job_id
        yield put({type: 'FETCH_FORM_LIST'})

        // CALCULATE ESTIMATE AND SUBMIT REQUEST
        yield axios.post('/api/job/estimate', action.payload);

        // SEND DISPATCH TO USER SAGA TO RESET THE FORM_JOB_ID TO NULL
        yield put({ type: 'FINISH_FORM_JOB' });
    } catch (error) {
        console.log('ERROR updating wipe-dust and clearing forms', error);
    }
}

// GETS FORM LIST
function* fetchFormList() {
    try {
        // GET request to form router to get up to date formList
        const formList = yield axios.get(`/api/form/form-list`);

        // update jobList reducer
        yield put({
            type: 'SET_FORM_LIST',
            payload: formList.data
        });
    }catch(err){
        console.log('ERROR getting formList from db', err);
    }
}

function* roomSaga() {
    // ADD KITCHEN FORM
    yield takeLatest('ADD_KITCHEN', createKitchen);
    // ADD BATHROOM FORM
    yield takeLatest('ADD_BATHROOM', createBathroom);
    // ADD OTHER ROOM FORM
    yield takeLatest('ADD_OTHER_ROOM', createOtherRoom);
    // ADD WIPE DUST FORM
    yield takeLatest('ADD_WIPE_DUST', createWipeDust);
    // GETS FORM LIST
    yield takeLatest('FETCH_FORM_LIST', fetchFormList);
}

export default roomSaga;