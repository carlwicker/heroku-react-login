import React from "react";

function HomeLogin(props) {
  return (
    // Login Container
    <div className="loginContainer">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            autoComplete="username"
            aria-describedby="emailHelp"
            className="form-control"
            onChange={e => {
              console.log(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            className="form-control"
            onChange={e => {
              console.log(e.target.value);
            }}
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
