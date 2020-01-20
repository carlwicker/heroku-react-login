import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const allReducers = combineReducers({
  counterReducer: counterReducer
});

export default allReducers;
