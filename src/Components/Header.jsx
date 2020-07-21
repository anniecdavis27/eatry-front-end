import React from "react";
import { Link } from "react-router-dom";
import './Header.css'

function Welcome() {
  return (
    <div className="header">
      <h1 className='headerh1'>EATR.Y</h1>
      <ul className="nav">
        <Link to="/dash">
          <li className='dash'>Dashboard</li>
        </Link>
        <Link to="/log">
          <li className='log'>Meal Log</li>
        </Link>
        <Link to="/foods">
          <li className='food'>All Foods</li>
        </Link>
        <Link to="/team">
          <li className='team'>The Team</li>
        </Link>
      </ul>
    </div>
  );
}

export default Welcome;
