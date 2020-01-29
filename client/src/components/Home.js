import React from "react";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <div class="homeContainer">
      <h1 class="display-4">Work In Progress</h1>
      <p class="lead">
        Playing around with Express, React, Redux, Axios, Router...
      </p>

      <Link to="/create">
        <button className="btn btn-light btn-lg">Create Account </button>
      </Link>
    </div>
  );
}

export default Home;
