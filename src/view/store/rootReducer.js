import { combineReducers } from "redux";
import patientReducer from "./patientReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  patients: patientReducer,
  users: userReducer,
});

export default rootReducer;
