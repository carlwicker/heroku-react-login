import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function EditUser() {
  // const { _id } = useParams();
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
      <div className="form-group">
        <input className="form-control" placeholder={editForm._id} readOnly />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="First Name"
          defaultValue={editForm.firstname}
          onChange={e => {
            editForm.firstname = e.target.value;
            console.log(editForm.firstname);
          }}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          placeholder="Last Name"
          defaultValue={editForm.lastname}
          onChange={e => {
            editForm.lastname = e.target.value;
            console.log(editForm.lastname);
          }}
        />
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="email"
          placeholder="Email Address"
          defaultValue={editForm.email}
          onChange={e => {
            editForm.email = e.target.value;
            console.log(editForm.email);
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
            console.log(editForm.password);
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
    </div>
  );
}

export default EditUser;
