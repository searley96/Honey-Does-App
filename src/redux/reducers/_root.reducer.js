import activeJobReducer from './activeJob.reducer';
import { combineReducers } from "redux";
import errors from "./errors.reducer";
import user from "./user.reducer";
import clientKitchen from "./clientKitchen.reducer";
import clientWipeDust from "./clientWipeDust.reducer";
import clientOtherRoom from "./clientOtherRoom.reducer";
import jobidReducer from "./jobid.reducer";
import chat from "./chat.reducer";
import clientBathroomReducer from "./clientBathroom.reducer";
import allJobs from "./allJobs.reducer";
import formList from "./formList.reducer";
import clientJobsReducer from "./jobs.reducer";
import clientFullJobsHistoryReducer from "./fullJob.reducer";

import cleanerFullJobsHistoryReducer from "./fullCleanerJobs.reducer";
import cleanerJobsReducer from "./cleanerJobs.reducer";

import jobDetailChatReducer from "./jobDetailChat.reducer";



const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user,
  clientKitchen, // will have an id and username if someone is logged in
  clientOtherRoom,
  chat,
  jobidReducer,
  clientWipeDust,
  clientBathroomReducer,
  activeJobReducer,
  allJobs,
  formList,
  clientJobsReducer,
  clientFullJobsHistoryReducer,

  cleanerFullJobsHistoryReducer,
  cleanerJobsReducer,

  jobDetailChatReducer


});

export default rootReducer;
