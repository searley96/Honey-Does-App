import { combineReducers } from "redux";

const allJobs = (state = [], action) => {
    switch (action.type) {
        case 'SET_ALL_JOBS':
            return action.payload;
        default:
            return state;
    }
}

const jobDetails = (state = {}, action) => {
    switch (action.type) {
        case 'VIEW_JOB_DETAILS':
            console.log('this is jobDetails value', action.payload);
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    allJobs,
    jobDetails,
});
