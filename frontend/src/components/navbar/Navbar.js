import React, { useState } from "react";
import { IoLogOut } from "react-icons/io5";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../store";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  const logout = () => {
    sessionStorage.clear("id");
    dispatch(authActions.logout());
  };
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
      <ul>
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        {isLoggedIn && (
          <>
            <li>
              <NavLink to="/tasks">Tasks</NavLink>
            </li>
            <li>
              <NavLink to="/Monthly">Monthly</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </>
        )}
        {!isLoggedIn && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </>
        )}
        <li>
          <NavLink to="/login" onClick={logout}>
            <IoLogOut />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
