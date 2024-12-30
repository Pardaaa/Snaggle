// Sidebar.js

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logOut, reset } from "../features/authSlice";
import "../style/Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Track the sidebar state
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  const logout = () => {
    dispatch(logOut());
    dispatch(reset());
  };

  return (
    <div>
      <div className={`sidebar-container ${isOpen ? "" : "open"}`}>
        <div className="sidebar-header">
          {/* Hamburger Icon for toggling the sidebar */}
          <button onClick={toggleSidebar} className="toggle-btn">
            <span className="navbar-burger">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </span>
          </button>
        </div>

        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome className="mr-1" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/category"}>
              <IoPricetag className="mr-1" />
              Category
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>
              <IoPricetag className="mr-1" />
              Product
            </NavLink>
          </li>
        </ul>

        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson className="mr-1" />
                  Users
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut className="mr-1" />
              LogOut
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
