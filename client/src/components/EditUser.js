import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../actions";

function EditUser() {
  const user = useSelector(state => state.getUserReducer);

  const dispatch = useDispatch();

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
      <form
        onSubmit={() => {
          console.log(editForm);
        }}
      >
        <div className="form-group">
          <input className="form-control" placeholder={editForm._id} readOnly />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="First Name"
            defaultValue={user.firstname}
            onChange={e => {
              editForm.firstname = e.target.value;
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
            dispatch(updateUser(editForm));
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
