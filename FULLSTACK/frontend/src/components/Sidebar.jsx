import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logOut, reset } from "../features/authSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-3 has-shadow">
        <p className="menu-label has-text-white">General</p>
        <ul className="menu-list ">
          <li className="mb-1">
            <NavLink to={"/dashboard"}>
              <IoHome className="mr-1 " />
              Dashboard
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink to={"/category"}>
              <IoPricetag className="mr-1" />
              Category
            </NavLink>
          </li>
          <li className="mb-1">
            <NavLink to={"/products"}>
              <IoPricetag className="mr-1" />
              Product
            </NavLink>
          </li>
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label has-text-white">Admin</p>
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
        <p className="menu-label has-text-white">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
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
