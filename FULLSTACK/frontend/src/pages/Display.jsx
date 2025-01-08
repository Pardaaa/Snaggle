import React from 'react';
import NavbarToko from '../components/NavbarToko';
import FooterToko from '../components/FooterToko';
import Productlist from "../components/itemList";

const Display = ({ children }) => {
    return (
       <React.Fragment>
          <NavbarToko />

          <Productlist />

          <FooterToko />
       </React.Fragment>
    );
};

export default Display;