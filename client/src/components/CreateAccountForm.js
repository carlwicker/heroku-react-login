import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAccount, validateCreateAccountForm } from "../actions";

function CreateAccountForm(props) {
  const isFormValid = useSelector(state => state.validateFormReducer);
  const dispatch = useDispatch();

  return (
    <div className="userAccountContainer">
      <h2>Create Account with Validation</h2>

      <form
        onChange={e => {
          e.preventDefault();

          const emailInput = document.getElementById("email");
          const confirmEmailInput = document.getElementById("confirm-email");
          const passwordInput = document.getElementById("password");
          const confirmPasswordInput = document.getElementById(
            "confirm-password"
          );
          console.log(emailInput.value, confirmEmailInput.value);

          if (
            emailInput.value === confirmEmailInput.value &&
            passwordInput.value === confirmPasswordInput.value
          ) {
            dispatch(validateCreateAccountForm(true));
          } else {
            dispatch(validateCreateAccountForm(false));
          }
        }}
        onSubmit={e => {
          e.preventDefault();

          const firstNameInput = document.getElementById("first-name");
          const lastNameInput = document.getElementById("last-name");
          const emailInput = document.getElementById("email");
          const passwordInput = document.getElementById("password");

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
        {isFormValid ? (
          <button className="btn btn-primary" type="submit">
            Create Account
          </button>
        ) : (
          <button className="btn btn-danger" type="submit" disabled>
            Create Account
          </button>
        )}{" "}
        <button className="btn btn-primary" type="reset">
          Reset
        </button>
      </form>
    </div>
  );
}

export default CreateAccountForm;
