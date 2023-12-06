import React, { useState } from "react";

import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <nav>
      <div className="topbarLeft">
        <Link to="/Home" className="link">
          <img src="/assets/LOGO3.png" alt="" className="topbarImg" />
        </Link>
      </div>
    
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul >
        <li>
          <NavLink to="/Home">About</NavLink>
        </li>
        <li>
          <NavLink to="/tasks">Services</NavLink>
        </li>
        <li>
          <NavLink to="/login">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/signup">signup</NavLink>
        </li>
      </ul>
  
      
    </nav>
  );
};

export default Navbar;