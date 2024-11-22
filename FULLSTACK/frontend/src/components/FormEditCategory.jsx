import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditCategory = () => {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getCategoriesById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/category/${id}`
        );
        setName(response.data.name);
      } catch (error) {
        if (error.response) setMsg(error.response.data.msg);
      }
    };
    getCategoriesById();
  }, [id]);

  const updateCategories = async (event) => {
    event.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/category/${id}`, {
        name: name,
      });
      navigate("/category");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };
  return (
    <div>
      <h1 className="title">Categories</h1>
      <h2 className="subtitle">Add New Categories</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <p className="has-text-centered">{msg}</p>
            <p className="has-text-centered">{msg}</p>
            <form onSubmit={updateCategories}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="input"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success ">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditCategory;
