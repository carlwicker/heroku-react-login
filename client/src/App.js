import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import HomeLogin from "./components/HomeLogin";
import CreateAccountForm from "./components/CreateAccountForm";

function App() {
  return (
    <div className="container">
      <HomeLogin />
      <CreateAccountForm />
    </div>
  );
}

export default App;
