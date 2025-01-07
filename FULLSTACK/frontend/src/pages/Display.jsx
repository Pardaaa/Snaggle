import React from 'react';
import NavbarToko from '../components/NavbarToko';
import FooterToko from '../components/FooterToko';
import Productlist from "../components/itemList";

const Display = ({ children }) => {
    return (
       <React.Fragment>
          {/* Header */}
          <NavbarToko />

          <Productlist />

          {/* Footer */}
          <FooterToko />
       </React.Fragment>
    );
};

export default Display;