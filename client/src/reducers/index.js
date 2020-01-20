import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import createAccountReducer from "./createAccountReducer";

const allReducers = combineReducers({
  loginReducer: loginReducer,
  createAccountReducer: createAccountReducer
});

export default allReducers;
