import React from 'react';
import './Nav.css';
import logo from "../assets/brand_logo.png";

function Nav() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul>
            <li href="#">Menu</li>
            <li href="#">Location</li>
            <li href="#">Contact</li>
            <li href="#">About</li>
          </ul>
        </div>
        <button>Login</button>
      </nav>
    </>
  );
}

export default Nav