import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions";

function HomeLogin(props) {
  const dispatch = useDispatch();

  return (
    // Login Container
    <div className="loginContainer">
      <h1 class="display-4">Login</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          const emailInput = document.getElementById("login-email");
          const passwordInput = document.getElementById("login-password");

          const data = {
            email: emailInput.value,
            password: passwordInput.value
          };
          console.log(data);

          dispatch(login(data));
        }}
      >
        <div className="form-group">
          <input
            id="login-email"
            type="email"
            placeholder="Email"
            autoComplete="username"
            aria-describedby="emailHelp"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <input
            id="login-password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Login
        </button>{" "}
        <button className="btn btn-primary" type="reset">
          Reset
        </button>{" "}
        <button className="btn btn-primary" type="button">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default HomeLogin;
