import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsersJSON, deleteUser, userListLoaded } from "../actions";

function UserList() {
  let allUsers = useSelector(state => state.getAllUsersReducer);
  let isUserListLoaded = useSelector(state => state.userLoadedReducer);
  const dispatch = useDispatch();

  return (
    <div className="userListContainer">
      <h1 class="display-4">User Administration</h1>
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
                  <button
                    className="btn btn-primary"
                    onClick={e => {
                      e.preventDefault();
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
}

export default UserList;
