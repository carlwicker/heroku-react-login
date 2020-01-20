import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeLogin from "./components/HomeLogin";
import CreateAccountForm from "./components/CreateAccountForm";
import UserList from "./components/UserList";
import WIP from "./components/WIP";

function App() {
  return (
    <div className="container">
      <WIP />
      <HomeLogin />
      <WIP />
      <CreateAccountForm />
      <WIP />
      <UserList />
      <WIP />
    </div>
  );
}

export default App;
