const clientFullJobsHistoryReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_FULL_JOBS_HISTORY":
      console.log("inside reducer", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default clientFullJobsHistoryReducer;
