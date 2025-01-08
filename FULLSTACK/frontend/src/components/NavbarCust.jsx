// NavbarComponent.js
import React from 'react';
import 'bulma/css/bulma.min.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   const containerStyle = {
      display: 'grid',
      gridTemplateColumns: '2fr 6fr',
      gap: '20px',
      backgroundColor: '#f8f1e4',
      fontFamily: 'Josefin Sans, sans-serif',
      alignItems: 'start',
   };
   
   const headerStyle = {
      marginBottom: '50px',
      gridColumn: 'span 2',
      display: 'flex',
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '10px 20px',
      position: 'relative',
   };
   
   const logoStyle = {
      fontSize: '2.5rem',
      fontWeight: '400',
      fontStyle: 'bold',
      color: '#000',
      position: 'absolute', 
      left: '50%',
      transform: 'translateX(-50%)',
      fontFamily: 'Jersey 25, serif',

   };
   
   const navStyle = {
      display: 'flex',
      gap: '15px',
      flexDirection: 'row', 
   };
   
   const navLinkStyle = {
      textDecoration: 'none',
      fontSize: '18px',
      backgroundColor: 'transparent'
   };
   const emptyBoxStyle = {
      gridColumn: 'span 2',
      height: '50px',
      backgroundColor: '#F1C9F9',

   };

   return (  
      <div style={containerStyle}>
         <div style={emptyBoxStyle}></div>

         <header style={headerStyle}>
            <nav style={navStyle}>
                <NavLink to="/customer" style={navLinkStyle} className="navbar-item" activeStyle={{ color: '#416B39' }}>
                  Home
               </NavLink>
               <NavLink to="/customer/product" style={navLinkStyle} className="navbar-item" activeStyle={{ color: '#416B39' }}>
                  Products
               </NavLink>
            </nav>
            <h1 style={logoStyle}>Snaggle</h1>      
         </header>
   </div>
   );

};

export default Navbar;
