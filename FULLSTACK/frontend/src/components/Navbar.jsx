// NavbarComponent.js
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOut, reset } from '../features/authSlice';
import { IoLogOut } from 'react-icons/io5';
import 'bulma/css/bulma.min.css';

const Navbar = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { user } = useSelector(state => state.auth);

   const logout = () => {
      dispatch(logOut());
      dispatch(reset());
      navigate('/login');
   };

   return (
      <nav
         className="navbar"
         style={{
            backgroundColor: '#F1C9F9',
            fontFamily: 'Josefin Sans, sans-serif',
         }}
      >
         <div className="navbar-brand">
            <NavLink
               to="/dashboard"
               className="navbar-item"
               style={{
                  transition: 'color 0.3s ease',
               }}
               activeStyle={{ color: '#416B39' }}
            >
               Dashboard
            </NavLink>
            <NavLink
               to="/category"
               className="navbar-item"
               style={{
                  transition: 'color 0.3s ease',
               }}
               activeStyle={{ color: '#416B39' }}
            >
               Category
            </NavLink>
            <NavLink
               to="/products"
               className="navbar-item"
               style={{
                  transition: 'color 0.3s ease',
               }}
               activeStyle={{ color: '#416B39' }}
            >
               Product
            </NavLink>
            {user && user.role === 'admin' && (
               <NavLink
                  to="/users"
                  className="navbar-item"
                  style={{
                     transition: 'color 0.3s ease',
                  }}
                  activeStyle={{ color: '#416B39' }}
               >
                  Users
               </NavLink>
            )}
         </div>
         <div
            className="navbar-item"
            style={{
               display: 'flex',
               justifyContent: 'center',
               flex: 1,
            }}
         >
            <span
               style={{
                  fontFamily: '"Jersey 25", serif',
                  fontSize: '2.5rem',
                  fontWeight: '400',
                  fontStyle: 'bold',
                  color: '#000',
               }}
            >
               Snaggle
            </span>
         </div>

         <div className="navbar-end">
            <div className="navbar-item">
               <button
                  onClick={logout}
                  className="button"
                  style={{
                     backgroundColor: '#416B39',
                     color: 'white',
                     display: 'flex',
                     alignItems: 'center',
                  }}
               >
                  <IoLogOut
                     style={{
                        marginRight: '8px',
                        fontSize: '20px',
                     }}
                  />
                  LogOut
               </button>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
