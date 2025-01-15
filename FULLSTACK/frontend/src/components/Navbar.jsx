import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { logOut, reset } from '../features/authSlice';
import { IoLogOut } from 'react-icons/io5';
import 'bulma/css/bulma.min.css';
import axios from 'axios';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [msg, setMsg] = useState('');

  const logout = () => {
    dispatch(logOut());
    dispatch(reset());
    navigate('/login');
  };

  const handleChangePassword = async (event) => {
    event.preventDefault();
    console.log('Form submitted');

    if (newPassword !== confPassword) {
      setMsg('Password baru dan konfirmasi tidak cocok');
      return;
    }

    try {
      // Send the password change request to the backend
      const response = await axios.patch('http://localhost:5000/recoveryPassword', {
        email: user.email,  // Use the logged-in user's email
        password,  // Current password
        newPassword,  // New password
        confPassword,  // Confirm new password
      });

      // Assuming the backend sends a success message
      if (response.data.success) {
        setShowModal(false);  // Close the modal after successful password change
        setMsg('Password changed successfully!');
      }
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg || 'Terjadi kesalahan, coba lagi!');
      } else {
        setMsg('Terjadi kesalahan, coba lagi!');
      }
    }
  };

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: '#F1C9F9',
        fontFamily: 'Josefin Sans, sans-serif',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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
            className="button is-danger"
            onClick={() => setShowModal(true)}
          >
            Change Password
          </button>
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

      {/* Modal for Password Change */}
      {showModal && (
        <div className="modal is-active">
          <div className="modal-background" onClick={() => setShowModal(false)}></div>
          <div className="modal-content">
            <div className="box">
              <h2 className="title">Change Password</h2>
              <p className="has-text-centered">{msg}</p>
              <form onSubmit={handleChangePassword}>
                <div className="field">
                  <label className="label">Current Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your current password"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">New Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Enter your new password"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Confirm New Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                      placeholder="Confirm your new password"
                    />
                  </div>
                </div>

                <div className="field is-grouped is-grouped-centered">
                  <div className="control">
                    <button type="submit" className="button is-primary">
                      Submit
                    </button>
                  </div>
                  <div className="control">
                    <button
                      type="button"
                      className="button is-light"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={() => setShowModal(false)}
          ></button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
