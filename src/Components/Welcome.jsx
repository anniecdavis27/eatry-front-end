import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css"

function Welcome() {
  return (
    <div className="welcome">
      <h1>EATR.Y</h1>
      <Link to="/sign-in">
        <button>Sign In</button>
      </Link>
    </div>
  );
}

export default Welcome;
