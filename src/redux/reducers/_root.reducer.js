import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import clientKitchen from './clientKitchen.reducer';
import clientBathroomReducer from './clientBathroom.reducer';

const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user,
  clientKitchen, // will have an id and username if someone is logged in
  clientBathroomReducer,
});

export default rootReducer;
