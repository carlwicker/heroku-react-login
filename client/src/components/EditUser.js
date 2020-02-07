import React from "react";
import { useParams } from "react-router-dom";

function EditUser() {
  const { _id } = useParams();

  return (
    <div className="editUserContainer">
      <h1 className="display-4">Edit User</h1>
      <h2>ID: {_id}</h2>
    </div>
  );
}

export default EditUser;
