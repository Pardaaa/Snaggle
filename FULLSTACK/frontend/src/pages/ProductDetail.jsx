import React from "react";
import DetailProduct from "../components/DetailProduct";
import NavbarToko from "../components/NavbarToko";
const ProductDetail = ({ children }) => {
    return (
       <React.Fragment>
          <NavbarToko />

          <DetailProduct />

       </React.Fragment>
    );
};

export default ProductDetail;
