import React, { useState, useEffect } from "react";
import { IoTrashSharp, IoCreateSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";
import '../style/CategoryList.css'; // CSS nya

const Categorylist = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await axios.get("http://localhost:5000/category");
    setCategories(response.data);
  };

  const deleteCategory = async (categoryId) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      await axios.delete(`http://localhost:5000/category/${categoryId}`);
      getCategories();
    }
  };

  return (
    <div className="categorylist-container">
      <h1 className="title">Categories</h1>
      <h2 className="subtitle">List of Categories</h2>
      <Link to={"/category/add"} className="button is-info mb-2">Add New</Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category.id}>
              <td>{index + 1}</td>
              <td>{category.name}</td>
              <td>
                <Link to={`/category/edit/${category.id}`} className="button is-warning mr-2">
                  <IoCreateSharp />
                </Link>
                <button onClick={() => deleteCategory(category.id)} className="button is-danger">
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

export default Categorylist;
