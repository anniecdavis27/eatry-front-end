import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="welcome">
      <h1>EATR.Y</h1>
      <Link to="/sign-in">
        <button>Sign In</button>
      </Link>

      <h5>Don't have an account yet? <Link to="/user/register">Register here!</Link></h5>
    </div>
  );
}

export default Welcome;
