import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import createAccountReducer from "./createAccountReducer";
import validateFormReducer from "./validateFormReducer";
import getAllUsersReducer from "./getAllUsers";
import deleteUserReducer from "./deleteUserReducer";
import userLoadedReducer from "./userLoadedReducer";

const allReducers = combineReducers({
  loginReducer: loginReducer,
  createAccountReducer: createAccountReducer,
  validateFormReducer: validateFormReducer,
  getAllUsersReducer: getAllUsersReducer,
  deleteUserReducer: deleteUserReducer,
  userLoadedReducer: userLoadedReducer
});

export default allReducers;
