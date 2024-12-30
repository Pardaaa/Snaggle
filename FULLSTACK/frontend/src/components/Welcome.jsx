import React from "react";
import { useSelector } from "react-redux";
import "../style/dashboard.css"; // Cssnya

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="dashboard-container">
      <h1 className="title"></h1>
      <h2 className="subtitle">
        Welcome Back, <strong>{user && user.name}</strong>
      </h2>
      
      {/* Product container */}
      <div className="product-container">
        <h3 className="product-heading">Featured Products</h3>
        <div className="products-grid">
          {/* Contoh biatch */}
          <div className="product-card">
            <img src="product-image-url" alt="Product" />
            <h4 className="product-name">Product Name</h4>
            <p className="product-price">$29.99</p>
            <button className="product-btn">View Product</button>
          </div>
          {/* more */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
