import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/login">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create">
            Create User Account
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            User Administration
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
