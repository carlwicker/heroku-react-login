import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import createAccountReducer from "./createAccountReducer";
import validateFormReducer from "./validateFormReducer";
import getAllUsersReducer from "./getAllUsers";

const allReducers = combineReducers({
  loginReducer: loginReducer,
  createAccountReducer: createAccountReducer,
  validateFormReducer: validateFormReducer,
  getAllUsersReducer: getAllUsersReducer
});

export default allReducers;
