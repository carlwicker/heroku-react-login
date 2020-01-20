import React from "react";
import { useDispatch } from "react-redux";
import { createAccount } from "../actions";

function CreateAccountForm(props) {
  const dispatch = useDispatch();

  return (
    <div className="userAccountContainer">
      <h2>Create Account</h2>

      <form
        onSubmit={e => {
          e.preventDefault();
          const firstNameInput = document.getElementById("first-name");
          const lastNameInput = document.getElementById("last-name");
          const emailInput = document.getElementById("email");
          const confirmEmailInput = document.getElementById("confirm-email");
          const passwordInput = document.getElementById("password");
          const confirmPassword = document.getElementById("confirm-password");

          const data = {
            firstname: firstNameInput.value,
            lastname: lastNameInput.value,
            email: emailInput.value,
            password: passwordInput.value
          };

          dispatch(createAccount(data));
        }}
      >
        <div className="form-group">
          <input
            id="first-name"
            className="form-control"
            placeholder="First Name"
            autoComplete="first-name"
            required
          />
        </div>
        <div className="form-group">
          <input
            id="last-name"
            className="form-control"
            placeholder="Last Name"
            autoComplete="last-name"
            required
          />
        </div>
        <div className="form-group">
          <input
            id="email"
            className="form-control"
            placeholder="Email"
            autoComplete="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            id="confirm-email"
            className="form-control"
            placeholder="Confirm Email"
            autoComplete="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            id="password"
            autoComplete="new-password"
            className="form-control"
            placeholder="Password"
            type="password"
            required
          />
        </div>
        <div className="form-group">
          <input
            id="confirm-password"
            autoComplete="new-password"
            className="form-control"
            placeholder="Confirm Password"
            type="password"
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Create Account
        </button>{" "}
        <button className="btn btn-primary" type="reset">
          Reset
        </button>
      </form>
    </div>
  );
}

export default CreateAccountForm;
