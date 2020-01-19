import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeLogin from "./components/HomeLogin";
import CreateAccountForm from "./components/CreateAccountForm";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="container">
      <HomeLogin />
      <CreateAccountForm />
      <UserList />
    </div>
  );
}

export default App;
