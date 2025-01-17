import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img src="./assets/logo.png" alt="MonoSpace Tech Logo" />
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/signup" className="btn">Sign Up</Link></li>
        </ul>
      </div>
    </nav>
    
    </div>
  );
}

export default Navbar;
