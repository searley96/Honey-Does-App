import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import clientKitchen from './clientKitchen.reducer';
import clientOtherRoom from './clientOtherRoom.reducer';
import jobidReducer from './jobid.reducer';
import chat from './chat.reducer';

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user,
  clientKitchen, // will have an id and username if someone is logged in
  clientOtherRoom,
  chat,
  jobidReducer
});

export default rootReducer;
