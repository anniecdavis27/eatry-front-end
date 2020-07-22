import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'

function Welcome(props) {

  const [menuStatus, setMenuStatus] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const handleMenuToggle = (e) => {
      if(menuStatus === false && showMenu === false) {
          setMenuStatus(true)
          setShowMenu(true)
       } else {
          setMenuStatus(false)
          setShowMenu(false)
       }
  }

  return (
    <header>
    <div className="header">

      <h1 className='headerh1'>EATR.Y</h1>
      
      <ul className="nav">

        <Link to="/dash" id="dash" className='nav'>
          <li className='nav-items' id='nav-one' onClick={handleMenuToggle}>Dashboard</li>
        </Link>
        
        <Link to="/log" id='log' className='nav'>
          <li className='nav-items' id='nav-two' onClick={handleMenuToggle}>Meal Log</li>
        </Link>
        
        <Link to="/foods" id='food' className='nav'>
          <li className='nav-items' id='nav-three' onClick={handleMenuToggle}>All Foods</li>
        </Link>
        
        <Link to="/team" id='team' className='nav'>
          <li className='nav-items' id='-four' onClick={handleMenuToggle}>The Team</li>
        </Link>
      </ul>

      <div className={`hamburger-btn ${menuStatus ? 'open' : ''}`} onClick={handleMenuToggle}>
      <div className='hamburger-patty'></div>
      </div>
    </div>


    <div className={`dropdown-menu ${showMenu ? 'show' : ''}`}>
      <Link to="/dash" id="dash" className='header-item'>
        <h1 className="nav-link" id="nav-one" onClick={handleMenuToggle}>Dashboard</h1>
      </Link>

      <Link to="/log" id="log" className='header-item'>
        <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>Meal Log</h1>
      </Link>

      <Link to="/foods" id="foods" className='header-item'>
        <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>All Foods</h1>
      </Link>

      <Link to="/team" id="teams" className='header-item'>
        <h1 className="nav-link" id="nav-two" onClick={handleMenuToggle}>The Team</h1>
      </Link>
    </div>


    </header>
  );
}

export default Welcome;

// import React from "react";
// import { Link } from "react-router-dom";
// import './Header.css'

// function Welcome() {
//   return (
//     <div className="header">
//       <h1 className='headerh1'>EATR.Y</h1>
//       <ul className="nav">
//         <Link to="/dash">
//           <li className='dash'>Dashboard</li>
//         </Link>
//         <Link to="/log">
//           <li className='log'>Meal Log</li>
//         </Link>
//         <Link to="/foods">
//           <li className='food'>All Foods</li>
//         </Link>
//         <Link to="/team">
//           <li className='theTeam'>The Team</li>
//         </Link>
//       </ul>
//     </div>
//   );
// }

// export default Welcome;