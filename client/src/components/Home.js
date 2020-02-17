import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div className="homeContainer">
      <h1 className="display-4">Work In Progress</h1>
      <p className="lead">
        This application is using a Heroku test node. Dynos need to wake...
      </p>

      <Link to="/create">
        <button className="btn btn-light btn-lg">Create Account </button>
      </Link>
    </div>
  );
}

export default Home;
