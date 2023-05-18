//reducer function for storing All Jobs
const allJobsReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_ALL_JOBS_REDUCER":
      console.log("inside reducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default allJobsReducer;
