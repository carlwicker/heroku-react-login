import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeLogin from "./components/HomeLogin";
import CreateAccountForm from "./components/CreateAccountForm";
import WIP from "./components/WIP";
import UserList from "./components/UserList";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import EditUser from "./components/EditUser";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Navigation />

        <WIP />

        <Switch>
          <Route path="/edit/:_id">
            <EditUser />
          </Route>
          <Route path="/edit">
            <EditUser />
          </Route>
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
