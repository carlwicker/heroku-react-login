import React from "react";
import { useParams } from "react-router-dom";

function EditUser() {
  const { _id } = useParams();

  return (
    <div className="editUserContainer">
      <h1 className="display-4">Edit User</h1>

      <form>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder={_id}
            readOnly
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="First Name"
          />
        </div>
        <div className="form-group">
          <input className="form-control" type="text" placeholder="Last Name" />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="Email Address"
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="btn btn-danger" disabled>
          Update
        </button>{" "}
        <button type="button" className="btn btn-primary">
          Revert
        </button>
      </form>
    </div>
  );
}

export default EditUser;
