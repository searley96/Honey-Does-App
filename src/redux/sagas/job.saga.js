import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createJobId() {
    try {
        const jobId = yield axios.get(`/api/job/jobid`);
        yield console.log('this is jobId.data', jobId.data);

        // places generated jobId into the associated reducer
        yield put({
            type: 'SET_JOB_ID_REDUCER',
            payload: jobId.data
        });

        // update the job_id for the form that the user is 
        // currently filling out
        yield put({
            type: 'ADD_FORM_ID',
            payload: {job_id: jobId.data}
        });
    } catch(error) {
        console.log('ERROR retrieving new jobID', error);
    }
}

function* fetchJobs() {
    try {
        console.log('Inside fetchJobs');
        const allJobs = yield axios.get(`/api/job/allJobs`);
        console.log('this is allJobs.data', allJobs.data);

        yield put({
            type: 'SET_ALL_JOBS',
            payload: allJobs.data
        });
    } catch(error) {
        console.log('ERROR retrieving new allJobs', error);
    }
}

function* updateCleaner(action) {
    try {
        console.log('updateCleaner action.payload:', action.payload);
        yield axios.put(`/api/job/updateCleaner`, action.payload);
    } catch(error) {
        console.log('ERROR updating cleaner', error);
    }
}

function* jobSaga() {
    yield takeLatest('CREATE_JOB_ID', createJobId);
    yield takeLatest('FETCH_JOBS', fetchJobs);
    yield takeLatest('UPDATE_CLEANER', updateCleaner);
  }
  
  export default jobSaga;