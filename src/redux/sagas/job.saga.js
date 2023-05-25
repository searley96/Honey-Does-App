import { put, takeLatest, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { useSelector } from "react-redux";

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

    // create a new job using the generated job id
    yield axios.post("/api/job", { jobId: jobId.data });
  } catch (error) {
    console.log("ERROR retrieving new jobID", error);
  }
}
function* fetchClientJobs(action) {
  try {
    console.log("fetchclientjobs", action.payload);
    const clientJobs = yield axios.get(`/api/job/client/${action.payload}`);
    console.log("this is clientJobs.data", clientJobs.data);

    yield put({
      type: "SET_CLIENT_JOBS_REDUCER",
      payload: clientJobs.data,
    });
  } catch (error) {
    console.log("ERROR retrieving new client Jobs", error);
  }
}

function* fetchCleanerJobs(action) {
  try {
    console.log("fetch cleaner jobs", action.payload);
    const cleanerJobs = yield axios.get(`/api/job/cleaner/${action.payload}`);
    console.log("this is cleanerJobs.data", cleanerJobs.data);

    yield put({
      type: "SET_CLEANER_JOBS_REDUCER",
      payload: cleanerJobs.data,
    });
  } catch (error) {
    console.log("ERROR retrieving cleaner Jobs", error);
  }
}

function* fetchJobs() {
  try {
    const allJobs = yield axios.get(`/api/job/allJobs`);
    console.log("this is allJobs.data", allJobs.data);

    yield put({
      type: "SET_ALL_JOBS",
      payload: allJobs.data,
    });
  } catch (error) {
    console.log("ERROR retrieving new allJobs", error);
  }
}

function* jobSaga() {
  yield takeLatest("CREATE_JOB_ID", createJobId);
  yield takeLatest("FETCH_JOBS", fetchJobs);
  yield takeLatest("FETCH_CLIENT_JOB", fetchClientJobs);
  yield takeLatest("FETCH_CLEANER_JOB", fetchCleanerJobs);
}

export default jobSaga;
