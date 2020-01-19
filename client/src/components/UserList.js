import React from "react";

function UserList() {
  return (
    <div className="userListContainer">
      <h2>User List</h2>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Controls</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="min-width align-middle">
              1
            </th>
            <td className="align-middle">Test Data</td>
            <td className="align-middle">testemail@testemail.com</td>
            <td className="min-width">
              <button className="btn btn-light" type="button">
                Edit
              </button>{" "}
              <button className="btn btn-light" type="button">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
