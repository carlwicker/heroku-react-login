import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import createAccountReducer from "./createAccountReducer";
import validateFormReducer from "./validateFormReducer";

const allReducers = combineReducers({
  loginReducer: loginReducer,
  createAccountReducer: createAccountReducer,
  validateFormReducer: validateFormReducer
});

export default allReducers;
