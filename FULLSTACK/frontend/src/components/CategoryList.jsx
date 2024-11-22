import React, { useEffect, useState } from "react";
import { IoTrashSharp, IoCreateSharp, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await axios.get("http://localhost:5000/category");
    setCategories(response.data);
  };
  const deleteCategories = async (userId) => {
    await axios.delete(`http://localhost:5000/category/${userId}`);
    setCategories();
  };
  return (
    <div>
      <h1 className="title">Categories</h1>
      <h2 className="subtitle">List of Categories</h2>
      <Link to={"/category/add"} className="button is-info mb-2">
        Add New
      </Link>
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
            <tr key={category.uuid}>
              <td>{index + 1}</td>
              <td>{category.name}</td>
              <td>
                <Link
                  to={`/category/edit/${category.uuid}`}
                  className="button  is-warning mr-2"
                >
                  <IoCreateSharp />
                </Link>
                <button
                  onClick={() => deleteCategories(category.uuid)}
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

export default CategoryList;
