import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* createJobId() {
  try {
    const jobId = yield axios.get(`/api/job/jobid`);
    console.log("this is jobId.data", jobId.data);

    // places generated jobId into the associated reducer
    yield put({
      type: "SET_JOB_ID_REDUCER",
      payload: jobId.data,
    });
  } catch (error) {
    console.log("ERROR retrieving new jobID", error);
  }
}

function* jobSaga(action) {
  yield takeLatest("CREATE_JOB_ID", createJobId);
  yield takeLatest("FETCH_JOB_ID", fetchJobsSaga);
}

function* fetchJobsSaga() {
  // get ALL Jobs
  try {
    const jobDetails = yield axios.get(`/api/job/jobHistory`);
    console.log("get all jobs saga", jobDetails);
  } catch (error) {
    console.log("get all jobs error", error);
  }
}

export default jobSaga;
