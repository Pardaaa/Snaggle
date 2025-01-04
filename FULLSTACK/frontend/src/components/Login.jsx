import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser, reset } from '../features/authSlice';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import photo from '../Images/background.png';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [showPassword, setShowPassword] = useState(false);
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { user, isError, isSuccess, isLoading, message } = useSelector(
      state => state.auth
   );

   useEffect(() => {
      if (user || isSuccess) {
         navigate('/dashboard');
      }
      dispatch(reset());
   }, [user, isSuccess, dispatch, navigate]);

   const Auth = e => {
      e.preventDefault();
      dispatch(LoginUser({ email, password }));
   };

   // Background
   const backgroundImage = {
      backgroundImage: `url(${photo})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
   };

   return (
      <section style={backgroundImage}>
         <div style={containerStyle}>
            <div style={formContainerStyle}>
               <form onSubmit={Auth} style={formStyle}>
                  {isError && <p style={errorMessageStyle}>{message}</p>}
                  <h1 style={titleStyle}>Login</h1>
                  <div style={fieldStyle}>
                     <input
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        style={inputStyle}
                     />
                  </div>
                  <div style={fieldStyle}>
                     <div style={{ position: 'relative' }}>
                        <input
                           type={showPassword ? 'text' : 'password'}
                           value={password}
                           onChange={e => setPassword(e.target.value)}
                           placeholder="Password"
                           style={inputStyle}
                        />
                        <span
                           onClick={() => setShowPassword(!showPassword)}
                           style={iconStyle}
                        >
                           {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                     </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                     <button type="submit" style={buttonStyle}>
                        {isLoading ? 'Loading...' : 'Login'}
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

const containerStyle = {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   height: '100vh',
   fontFamily: "'Jersey 25', sans-serif",
};

const formContainerStyle = {
   width: '100%',
   maxWidth: '420px',
   padding: '2rem',
   backgroundColor: 'white',
   borderRadius: '1rem',
   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

const formStyle = {
   display: 'flex',
   flexDirection: 'column',
   fontFamily: "'Jersey 25', sans-serif",
};

const titleStyle = {
   textAlign: 'center',
   fontFamily: "'Jersey 25', sans-serif",
   fontSize: '2.7rem',
   marginBottom: '1rem',
   fontWeight: 'bold',
};

const fieldStyle = {
   marginBottom: '1.5rem',
};

const inputStyle = {
   fontFamily: "'Josefin Sans', sans-serif",
   fontWeight: 'bold',
   backgroundColor: '#D9D9D9',
   boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.2)',
   padding: '1rem',
   borderRadius: '0.5rem',
   fontSize: '1.3rem',
   width: '100%',
   border: 'none',
};

const iconStyle = {
   position: 'absolute',
   top: '50%',
   right: '1rem',
   transform: 'translateY(-50%)',
   cursor: 'pointer',
   fontSize: '1.3rem',
   color: '#333',
};

const errorMessageStyle = {
   textAlign: 'center',
   fontFamily: "'Josefin Sans', sans-serif",
   fontWeight: 'bold',
   color: 'red',
   marginBottom: '1rem',
};

const buttonStyle = {
   backgroundColor: '#416B39',
   color: 'white',
   padding: '0.5rem 1rem',
   borderRadius: '0.5rem',
   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
   fontWeight: 'bold',
   fontSize: '1.3rem',
   width: '35%',
   display: 'inline-block',
};

export default Login;
