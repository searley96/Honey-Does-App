const jobDetailChatReducer = (state = {}, action) => {
    switch (action.type) {
      case "SET_JOB_DETAIL_CHAT":
        console.log("inside jobDetailChatReducer", action.payload);
        return action.payload;
      default:
        return state;
    }
  };
  
  export default jobDetailChatReducer;