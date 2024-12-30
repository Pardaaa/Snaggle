import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut, reset } from "../features/authSlice";
import "../style/Navbar.css";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling menu

  const logout = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate("/login");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu visibility
  };

  return (
    <div>
      <nav
        className="navbar is-fixed-top has-shadow has-background-danger"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          {/* Brand or Title */}
          <NavLink to={"/dashboard"} className="navbar-item">
            <h1 className="title is-4">Snaggle</h1>
          </NavLink>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className={`navbar-burger burger ${isMenuOpen ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded={isMenuOpen}
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        {/* Menu */}
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${isMenuOpen ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <button onClick={logout} className="button is-light">
                  Log out
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
