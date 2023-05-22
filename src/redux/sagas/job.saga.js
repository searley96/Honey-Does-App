import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* createJobId() {
  try {
    const jobId = yield axios.get(`/api/job/jobid`);
    yield console.log("this is jobId.data", jobId.data);

    // places generated jobId into the associated reducer
    yield put({
      type: "SET_JOB_ID_REDUCER",
      payload: jobId.data,
    });

    // update the job_id for the form that the user is
    // currently filling out
    yield put({
      type: "ADD_FORM_ID",
      payload: { job_id: jobId.data },
    });
  } catch (error) {
    console.log("ERROR retrieving new jobID", error);
  }
}

function* fetchJobsSaga() {
  // get ALL Jobs
  try {
    const jobDetails = yield axios.get(`/api/job/jobHistory`);
    console.log("get all jobs saga", jobDetails);
    yield put({
      type: "SET_ALL_JOBS_REDUCER",
      payload: jobDetails.data,
    });
  } catch (error) {
    console.log("get all jobs error", error);
  }
}

export default jobSaga;
