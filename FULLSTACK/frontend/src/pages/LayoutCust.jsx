import React from 'react';
import Navbar from '../components/NavbarCust';
// import Sidebar from '../components/Sidebar';

const Layout = ({ children }) => {
   return (
      <React.Fragment>
         <Navbar />
         <div className="columns" style={{ minHeight: '100vh', padding: '0' }}>
            {/* <div className="column has-background-danger-80 is-2">
          <Sidebar />
        </div> */}
            <div className="column" style={{ backgroundColor: '#f8f1e4' }}>
               <main>{children}</main>
            </div>
         </div>
      </React.Fragment>
   );
};

export default Layout;
