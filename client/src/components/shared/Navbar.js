import React from 'react';
import '../css/custom.css';
import logo from '../images/airplane.svg';

const Navbar = () => (
  <div className="nav">
      <div className="nav-logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="nav-items">
          <a href='/'>Home</a>
          <a href='/trip_types'>Trip Types</a>
      </div>
      
  </div>
)

export default Navbar;