import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const FormAddUser = () => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [role, setRole] = useState([]);
   const [msg, setMsg] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
   const navigate = useNavigate();

   const saveUser = async event => {
      event.preventDefault();
      try {
         await axios.post('http://localhost:5000/users', {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword,
            role: role,
         });
         navigate('/users');
      } catch (error) {
         if (error.response) {
            setMsg(error.response.data.msg);
         }
      }
   };

   return (
      <div
         style={{
            margin: 'auto',
            marginTop: '2rem',
            flexGrow: 1,
            width: '90%',
            fontFamily: "'Jersey 25', sans-serif",
         }}
      >
         <h1
            style={{
               fontSize: '2.5rem',
               fontWeight: 'bold',
               marginBottom: '1rem',
               textAlign: 'left',
            }}
         >
            User
         </h1>
         <h2
            style={{
               fontSize: '2.0rem',
               fontWeight: 'bold',
               marginBottom: '0.5rem',
               textAlign: 'left',
            }}
         >
            Add New Users
         </h2>
         <div className="card is-shadowless" style={formContainerStyle}>
            <div className="card-content">
               <div className="content">
                  <form onSubmit={saveUser} style={tableStyle}>
                  <p className="has-text-centered" style={errorMsgStyle}>
                     {msg}
                  </p>
                     <div className="field">
                        <label className="label" style={labelStyle}>
                           Name
                        </label>
                        <div className="control">
                           <input
                              value={name}
                              onChange={e => setName(e.target.value)}
                              type="text"
                              className="input"
                              placeholder="Name"
                              style={placeholderStyle}
                           />
                        </div>
                     </div>
                     <div className="field">
                        <label className="label" style={labelStyle}>
                           Email
                        </label>
                        <div className="control">
                           <input
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                              type="text"
                              className="input"
                              placeholder="Email"
                              style={placeholderStyle}
                           />
                        </div>
                     </div>
                     <div className="field">
                        <label className="label" style={labelStyle}>
                           Password
                        </label>
                        <div
                           className="control"
                           style={{ position: 'relative' }}
                        >
                           <input
                              value={password}
                              onChange={e => setPassword(e.target.value)}
                              type={showPassword ? 'text' : 'password'}
                              className="input"
                              placeholder="*******"
                              style={placeholderStyle}
                           />
                           <span
                              onClick={() => setShowPassword(!showPassword)}
                              style={iconStyle}
                           >
                              {showPassword ? <FaEye /> : <FaEyeSlash />}
                           </span>
                        </div>
                     </div>
                     <div className="field">
                        <label className="label" style={labelStyle}>
                           Confirm Password
                        </label>
                        <div
                           className="control"
                           style={{ position: 'relative' }}
                        >
                           <input
                              value={confirmPassword}
                              onChange={e => setConfirmPassword(e.target.value)}
                              type={showConfirmPassword ? 'text' : 'password'}
                              className="input"
                              placeholder="*******"
                              style={placeholderStyle}
                           />
                           <span
                              onClick={() =>
                                 setShowConfirmPassword(!showConfirmPassword)
                              }
                              style={iconStyle}
                           >
                              {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                           </span>
                        </div>
                     </div>
                     <div className="field">
                        <label className="label" style={labelStyle}>
                           Role
                        </label>
                        <div className="control">
                           <div className="select is-fullwidth">
                              <select
                                 value={role}
                                 onChange={e => setRole(e.target.value)}
                                 style={placeholderStyle}
                              >
                                 <option value="">Select Role</option>
                                 <option value="staff">Staff</option>
                              </select>
                           </div>
                        </div>
                     </div>
                     <div className="field">
                        <div className="control">
                           <button
                              type="submit"
                              className="button is-success "
                              style={buttonStyle}
                           >
                              Save
                           </button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

const labelStyle = {
   fontSize: '1.5rem',
   fontWeight: 'bold',
   color: '#000',
};

const tableStyle = {
   width: '70%',
   margin: '0 auto',
   borderCollapse: 'collapse',
   border: '2px solid black',
   borderRadius: '15px',
   backgroundColor: '#FFFFFF',
   padding: '1rem',
   marginTop: '0.5rem',
};

const buttonStyle = {
   backgroundColor: '#2CAFE8',
   color: 'black',
   padding: '0.2rem 1.5rem',
   borderRadius: '0.5rem',
   border: '2px solid black',
   fontSize: '1.5rem',
   fontWeight: 'bold',
   display: 'block',
   marginTop: '1rem',
};

const formContainerStyle = {
   borderRadius: '15px',
   padding: '2rem',
   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
   backgroundColor: 'transparent',
   marginTop: '0.5rem',
};

const placeholderStyle = {
   fontFamily: "'Josefin Sans', sans-serif",
   fontWeight: 'bold',
   color: 'black',
   backgroundColor: '#D9D9D9',
   border: '2px solid black',
   borderRadius: '5px',
   padding: '0.5rem',
   boxShadow: 'inset 4px 4px 8px rgba(0, 0, 0, 0.2)',
};

const iconStyle = {
   position: 'absolute',
   right: '10px',
   top: '50%',
   transform: 'translateY(-50%)',
   cursor: 'pointer',
   fontSize: '1.5rem',
};

const errorMsgStyle = {
   fontFamily: "'Josefin Sans', sans-serif",
   fontSize: '1rem',
   color: 'red',
   marginBottom: '1rem',
};

export default FormAddUser;
