import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import clientKitchen from "./clientKitchen.reducer";
import jobidReducer from "./jobid.reducer";
import allJobsReducer from "./jobs.reducer";
import chat from "./chat.reducer";

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  clientKitchen,
  chat,
  jobidReducer,
  allJobsReducer,
});

export default rootReducer;
