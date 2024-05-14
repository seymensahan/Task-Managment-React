// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ isLoggedIn, handleLogout }) {
  return (
    <nav className="navbar">
      <div className="container">
        <h3 className="logo">Logo</h3>
        <ul>
          {isLoggedIn ? (
            <>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/settings">Settings</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </>
          ) : (
            <>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
