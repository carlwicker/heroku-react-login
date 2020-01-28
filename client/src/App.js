import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeLogin from "./components/HomeLogin";
import CreateAccountForm from "./components/CreateAccountForm";
import UserList from "./components/UserList";
import Home from "./components/Home";
import WIP from "./components/WIP";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />

        <Switch>
          <Route path="/create">
            <CreateAccountForm />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/login">
            <HomeLogin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
