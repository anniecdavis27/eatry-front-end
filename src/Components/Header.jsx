import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

function Welcome() {
  return (
    <div className="header">
      <h1>EATR.Y</h1>
      <ul className="nav">
        <Link to="/dash">
          <li>Dashboard</li>
        </Link>
        <Link to="/log">
          <li>Meal Log</li>
        </Link>
        <Link to="/foods">
          <li>All Foods</li>
        </Link>
        <Link to="/team">
          <li>The Team</li>
        </Link>
      </ul>
    </div>
  );
}

export default Welcome;
