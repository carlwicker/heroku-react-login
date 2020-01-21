import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersJSON } from "../actions";

function UserList() {
  let allUsers = useSelector(state => state.getAllUsersReducer);
  const dispatch = useDispatch();

  return (
    <div className="userListContainer">
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(getAllUsersJSON());
        }}
      >
        Load Users List
      </button>

      {allUsers.map((user, index) => {
        return (
          <div>{user._id + " - " + user.firstname + " " + user.lastname}</div>
        );
      })}
    </div>
  );
}

export default UserList;
