import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUser, redirectUserList } from "../actions";
import { Redirect } from "react-router-dom";

function EditUser() {
  const user = useSelector(state => state.getUserReducer);
  const redirect = useSelector(state => state.redirectUserListReducer);

  const dispatch = useDispatch();

  let editForm = {
    _id: user._id,
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password: user.password
  };

  if (redirect) {
    return <Redirect to="/users" />;
  } else {
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

            // Update User
            dispatch(updateUser(data));

            // Redirect to Users Page
            dispatch(redirectUserList(true));
          }}
        >
          <div className="form-group">
            <input
              className="form-control"
              placeholder={editForm._id}
              readOnly
            />
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
          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      </div>
    );
  }
}

export default EditUser;
