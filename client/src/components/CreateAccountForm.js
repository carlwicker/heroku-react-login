import React from "react";

function CreateAccountForm(props) {
  return (
    <div className="userAccountContainer">
      <h2>Create Account</h2>

      <form>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="First Name"
            autoComplete="first-name"
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Last Name"
            autoComplete="last-name"
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Email"
            autoComplete="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            placeholder="Confirm Email"
            autoComplete="email"
            required
          />
        </div>
        <div className="form-group">
          <input
            autoComplete="new-password"
            className="form-control"
            placeholder="Password"
            type="password"
            required
          />
        </div>
        <div className="form-group">
          <input
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
