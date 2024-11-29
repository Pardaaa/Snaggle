import React, { useState, useEffect } from "react";
import { IoTrashSharp, IoCreateSharp, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";

const Productlist = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await axios.get("http://localhost:5000/product");
    setProducts(response.data);
  };
  const deleteProduct = async (productId) => {
    await axios.delete(`http://localhost:5000/product/${productId}`);
    getProducts();
  };
  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">List of Products</h2>
      <Link to={"/products/add"} className="button is-info mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.uuid}>
              <td>{index + 1}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.stok}</td>
              <td>{product.category.name}</td>
              <td>
                <Link
                  to={`/products/edit/${product.uuid}`}
                  className="button  is-warning mr-2"
                >
                  <IoCreateSharp />
                </Link>
                <button
                  onClick={() => deleteProduct(product.uuid)}
                  className="button is-danger"
                >
                  <IoTrashSharp />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Productlist;
