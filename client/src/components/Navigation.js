import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="nav nav-tabs justify-content-center">
        <li className="nav-item">
          <NavLink
            className="nav-link"
            to="/"
            exact={true}
            activeClassName="active"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/login" activeClassName="active">
            Login
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/create" activeClassName="active">
            Create User Account
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/users" activeClassName="active">
            User Administration
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className="nav-link disabled"
            to="/edit"
            activeClassName="active"
          >
            Edit User
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
