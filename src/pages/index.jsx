import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div className="home">
      <Link to={"/login"}>Login to continue...</Link>
    </div>
  );
}

export default Index;
