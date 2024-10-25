import React from "react";
import { NavLink } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div>
      <aside className="menu pl-3  has-shadow ">
        <p className="menu-label ">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome className="mr-1 " />
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
            <NavLink to={"/product"}>
              <IoPricetag className="mr-1" />
              Product
            </NavLink>
          </li>
        </ul>
        <p className="menu-label">Admin</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/users"}>
              <IoPerson className="mr-1" />
              Users
            </NavLink>
          </li>
        </ul>
        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button className="button is-white">
              <IoLogOut className="mr-1" />
              LogOut
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
