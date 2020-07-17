import React from 'react';
import { Link } from "react-router-dom";


function Welcome() {
  return (
    <div className="header">
        <h1>EATR.Y</h1>
        <ul className='nav'>
        <Link to='/dash'><li>Dashboard</li></Link>
            <li>Meal Log</li>
            <li>All Foods</li>
        </ul>
    </div>
  );
}

export default Welcome;