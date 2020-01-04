import React from 'react';
import '../css/custom.css';
import logo from '../images/airplane.svg';

const Navbar = () => (
  <div class="nav">
      <div class="nav-logo">
        <img src={logo}/>
      </div>
      <div class="nav-items">
          <a href='/'>Home</a>
      </div>
      <div class="nav-items">
        <a href='/trip_types'>Trip Types</a>
      </div>
  </div>
)

export default Navbar;