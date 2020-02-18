import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import createAccountReducer from "./createAccountReducer";
import validateFormReducer from "./validateFormReducer";
import getAllUsersReducer from "./getAllUsers";
import deleteUserReducer from "./deleteUserReducer";
import userLoadedReducer from "./userLoadedReducer";
import redirectUserListReducer from "./redirectUserList";
import getUserReducer from "./getUserReducer";
import editUserReducer from "./editUserReducer";
import isUserSelectedReducer from "./isUserSelectedReducer";

const allReducers = combineReducers({
  loginReducer: loginReducer,
  createAccountReducer: createAccountReducer,
  validateFormReducer: validateFormReducer,
  getAllUsersReducer: getAllUsersReducer,
  deleteUserReducer: deleteUserReducer,
  userLoadedReducer: userLoadedReducer,
  redirectUserListReducer: redirectUserListReducer,
  getUserReducer: getUserReducer,
  editUserReducer: editUserReducer,
  isUserSelectedReducer: isUserSelectedReducer
});

export default allReducers;
