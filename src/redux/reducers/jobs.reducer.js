//reducer function for storing All Client Jobs
const clientJobsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_CLIENT_JOBS_REDUCER":
      console.log("inside reducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default clientJobsReducer;
