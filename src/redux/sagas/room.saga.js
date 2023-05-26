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
        yield put({type: 'FETCH_FORM_LIST', payload: action.payload})
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
        yield put({type: 'FETCH_FORM_LIST', payload: action.payload})
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
        yield put({type: 'FETCH_FORM_LIST', payload: action.payload})
    } catch (error) {
        console.log('ERROR updating other room type and clearing forms', error);
    }

}

function* createWipeDust(action) {
    // const formList  = useSelector(store => store.formList);
    try {
        // POST wipe_dust form to the db
        console.log('inside wipeDust:', action.payload);
        yield axios.post(`/api/form/wipe-dust`, action.payload);

        // clear current form
        yield put({
            type: 'CLEAR_ROOM'
        });

        // gather all forms with job_id === user.form_job_id
        yield put({type: 'FETCH_FORM_LIST', payload: action.payload})

        // CALCULATE ESTIMATE AND SUBMIT REQUEST
        yield axios.put('/api/job/estimate', action.payload);

        // GET THE JOB FROM THE DB
        const job = yield axios.get(`/api/job/${action.payload.jobId}`)

        // UPDATE ACTIVE JOB REDUCER
        yield put({
            type: 'SET_ACTIVE_JOB',
            payload: job
        })

        // SEND DISPATCH TO USER SAGA TO RESET THE FORM_JOB_ID TO NULL
        yield put({ type: 'FINISH_FORM_JOB' });
    } catch (error) {
        console.log('ERROR updating wipe-dust and clearing forms', error);
    }
}

// GETS FORM LIST
function* fetchFormList(action) {
    try {
        // GET request to form router to get up to date formList
        console.log('inside fetchFormList', action.payload);
        const formList = yield axios.get(`/api/form/form-list/${action.payload.jobId}`);

        // update jobList reducer
        yield put({
            type: 'SET_FORM_LIST',
            payload: formList.data
        });
    }catch(err){
        console.log('ERROR getting formList from db', err);
    }
}

function* createGuestForm(action){
    
    // put form in reducer formList
    yield put({
        type: 'SET_GUEST_FORM_LIST',
        payload: action.payload
    })
    // clear form
    yield put({
        type: 'CLEAR_FORM'
    })
}

function* createGuestWipeDust(action) {
    // const formList  = useSelector(store => store.formList);
    try {
        // POST wipe_dust form to the db
        console.log('inside wipeDust:', action.payload.jobId);
        // yield axios.post(`/api/form/wipe-dust`, action.payload);

        // clear current form
        // yield put({
        //     type: 'CLEAR_ROOM'
        // });

        // gather all forms with job_id === user.form_job_id
        yield put({type: 'SET_GUEST_FORM_LIST', payload: action.payload.wipeDust})

        // CALCULATE ESTIMATE AND SUBMIT REQUEST
        const job = yield axios.post('/api/job/guestEstimate', action.payload);

         // UPDATE ACTIVE JOB REDUCER
         yield put({
            type: 'SET_ACTIVE_JOB',
            payload: job.data
        })

        // SEND DISPATCH TO USER SAGA TO RESET THE FORM_JOB_ID TO NULL
        // yield put({ type: 'FINISH_FORM_JOB' });
    } catch (error) {
        console.log('ERROR updating wipe-dust and clearing forms', error);
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
    // ADD BATHROOM FOR GUEST USER
    yield takeLatest('ADD_GUEST_FORM', createGuestForm);
    // SET REDUCER AFTER WIPE DUST SUBMIT AND PERFORM CALCULATION FOR ESTIMATE
    yield takeLatest('ADD_GUEST_WIPE_DUST', createGuestWipeDust)
}

export default roomSaga;