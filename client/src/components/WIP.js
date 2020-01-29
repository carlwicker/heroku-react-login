import React from "react";

function WIP(props) {
  return (
    <div className="alert alert-warning wip" role="alert">
      Work In Progress - {Date()}
    </div>
  );
}

export default WIP;
