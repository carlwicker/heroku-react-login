import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllUsersJSON,
  deleteUser,
  userListLoaded,
  redirectUserList,
  getUser
} from "../actions";

import { Link } from "react-router-dom";

function UserList() {
  let allUsers = useSelector(state => state.getAllUsersReducer);
  let isUserListLoaded = useSelector(state => state.userLoadedReducer);
  let redirectUser = useSelector(state => state.redirectUserListReducer);
  let isUserSelected = useSelector(state => state.isUserSelectedReducer);

  let userSelected = useSelector(state => state.isUserSelectedReducer);

  const dispatch = useDispatch();

  // Reset Redirect
  if (redirectUser) {
    dispatch(redirectUserList(false));
  }

  if (!isUserSelected) {
    return (
      <div className="userListContainer">
        <h1 className="display-4">User Administration</h1>
        {!isUserListLoaded
          ? dispatch(userListLoaded(true)) && dispatch(getAllUsersJSON())
          : null}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Controls</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user, index) => {
              return (
                <tr key={user._id}>
                  <th scope="row" className="min-width align-middle">
                    {user._id}
                  </th>
                  <td className="align-middle">
                    {user.firstname} {user.lastname}
                  </td>
                  <td className="min-width align-middle">
                    {" "}
                    <Link to={"/edit/" + user._id}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={e => {
                          dispatch(getUser(user._id)) &&
                            dispatch(userSelected(true));
                        }}
                      >
                        Edit
                      </button>
                    </Link>{" "}
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={e => {
                        dispatch(deleteUser(user._id));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
  }
}

export default UserList;
