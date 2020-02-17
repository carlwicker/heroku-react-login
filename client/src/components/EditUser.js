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
        onSubmit={e => {
          e.preventDefault();

          const firstNameInput = document.getElementById("firstname");
          const lastNameInput = document.getElementById("lastname");
          const emailInput = document.getElementById("email");
          const passwordInput = document.getElementById("password");

          const data = {
            _id: editForm._id,
            firstname: firstNameInput.value,
            lastname: lastNameInput.value,
            email: emailInput.value,
            password: passwordInput.value
          };

          console.log(data);
          dispatch(updateUser(data));
        }}
      >
        <div className="form-group">
          <input className="form-control" placeholder={editForm._id} readOnly />
        </div>
        <div className="form-group">
          <input
            className="form-control firstname"
            id="firstname"
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
            id="lastname"
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
            id="email"
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
            id="password"
            type="password"
            placeholder="Password"
            autoComplete="current"
            defaultValue={editForm.password}
            onChange={e => {
              editForm.password = e.target.value;
            }}
          />
        </div>
        <button type="submit" className="btn btn-danger">
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
