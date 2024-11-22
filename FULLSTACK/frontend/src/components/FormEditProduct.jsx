import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [fileName, setFileName] = useState("Info file…");
  const [price, setPrice] = useState("");
  const [status, setStatus] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/product/${id}`);
        setName(response.data.name);
        setPrice(response.data.price);
        setDescription(response.data.description);
        setStatus(response.data.status);
        setCategoryId(response.data.categoryId);
        setPreview(response.data.url || "");
      } catch (error) {
        if (error.response) setMsg(error.response.data.msg);
      }
    };
    getProductById();
  }, [id]);

  const handleFileInputChange = (event) => {
    const image = event.target.files[0];
    if (image) {
      setFile(image);
      setFileName(image.name);
      setPreview(URL.createObjectURL(image));
    }
  };

  const updateProduct = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);

    if (status) formData.append("status", status);
    if (categoryId) formData.append("categoryId", categoryId);

    if (file) {
      formData.append("file", file);
    }

    try {
      await axios.patch(`http://localhost:5000/product/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/products");
    } catch (error) {
      if (error.response) setMsg(error.response.data.msg);
    }
  };

  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get("http://localhost:5000/category");
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">Update Product</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={updateProduct}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Product Name"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Description</label>
                <div className="control">
                  <textarea
                    className="input"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    placeholder="Description"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Price</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={price}
                    onChange={(event) => setPrice(parseInt(event.target.value))}
                    placeholder="Price"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Status</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={status}
                      onChange={(event) => setStatus(event.target.value)}
                    >
                      <option value="">Select Status</option>
                      <option value="tersedia">Tersedia</option>
                      <option value="tidak tersedia">Tidak Tersedia</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Picture</label>
                <div className="file has-name is-fullwidth">
                  <label className="file-label">
                    <input
                      className="file-input"
                      type="file"
                      onChange={handleFileInputChange}
                    />
                    <span className="file-cta">
                      <span className="file-icon">
                        <i className="fas fa-upload"></i>
                      </span>
                      <span className="file-label">Choose a file…</span>
                    </span>
                    <span className="file-name">{fileName}</span>
                  </label>
                </div>
              </div>
              {preview && (
                <figure className="image is-128x128">
                  <img src={preview} alt="Preview" />
                </figure>
              )}
              <div className="field">
                <label className="label">Category</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={categoryId}
                      onChange={(event) => setCategoryId(event.target.value)}
                    >
                      <option value="">Select Category</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success ">
                    Update
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

export default FormEditProduct;
