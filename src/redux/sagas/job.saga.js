import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* createJobId() {
    try {
        // generates new job_id
        const jobId = yield axios.get(`/api/job/jobid`);
        yield console.log('this is jobId.data', jobId.data);
        console.log('past generate new jobId');
        // places generated jobId into the associated reducer
        yield put({
            type: 'SET_JOB_ID_REDUCER',
            payload: jobId.data
        });

        // // update the form_job_id for the user 
        // yield put({
        //     type: 'ADD_FORM_ID',
        //     payload: {job_id: jobId.data}
        // });

        // create a new job using the generated job id
        yield axios.post('/api/job', {jobId: jobId.data});
        console.log('past create new job');
        // get updated active job from the db
        const activeJob = yield axios.get(`api/job/${jobId.data}`);
        console.log('past get active job from db:', activeJob.data);
        // set activeJob reducer to the activeJob
        yield put({type: 'SET_ACTIVE_JOB', payload: activeJob.data[0]});
        console.log('set active job in reducer');
    } catch(error) {
        console.log('ERROR retrieving new jobID', error);
    }
}

function* jobSaga() {
    yield takeLatest('CREATE_JOB_ID', createJobId);
  }
  
  export default jobSaga;