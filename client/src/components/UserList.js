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

      <table className="table table-hover">
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
                  <button className="btn btn-light">Delete</button>
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
