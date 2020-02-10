import React from "react";
import { useSelector } from "react-redux";

function EditUser() {
  const user = useSelector(state => state.getUserReducer);

  let editForm = {
    _id: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password
  };

  return (
    <div className="editUserContainer">
      <h1 className="display-4">Edit User</h1>
      <form>
        <div className="form-group">
          <input className="form-control" placeholder={user._id} readOnly />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="First Name"
            defaultValue={user.firstname}
            onChange={e => {
              user.firstname = e.target.value;
            }}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="Last Name"
            defaultValue={user.lastname}
            onChange={e => {
              user.lastname = e.target.value;
            }}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="Email Address"
            defaultValue={user.email}
            onChange={e => {
              user.email = e.target.value;
            }}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            autoComplete="current"
            defaultValue={editForm.password}
            onChange={e => {
              editForm.password = e.target.value;
            }}
          />
        </div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            console.log(editForm);
          }}
        >
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
