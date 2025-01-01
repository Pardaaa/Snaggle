import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const FormAddProduct = () => {
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [file, setFile] = useState('');
   const [preview, setPreview] = useState('');
   const [fileName, setFileName] = useState('Info file…');
   const [price, setPrice] = useState('');
   const [stok, setStok] = useState('');
   const [categoryId, setCategoryId] = useState('');
   const [categories, setCategories] = useState([]);
   const [msg, setMsg] = useState('');
   const navigate = useNavigate();

   // Handle file input change
   const handleFileInputChange = event => {
      const image = event.target.files[0];
      if (image) {
         setFile(image);
         setFileName(image.name);
         setPreview(URL.createObjectURL(image));
      }
   };

   // Save product
   const saveProduct = async event => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('stok', stok);
      formData.append('file', file);
      formData.append('categoryId', categoryId);

      try {
         await axios.post('http://localhost:5000/product', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
         });
         navigate('/products');
      } catch (error) {
         if (error.response) {
            setMsg(error.response.data.msg);
         }
      }
   };

   // Fetch categories
   useEffect(() => {
      getCategory();
   }, []);

   const getCategory = async () => {
      try {
         const response = await axios.get('http://localhost:5000/category');
         setCategories(response.data);
      } catch (error) {
         console.error('Error fetching categories:', error);
      }
   };

   return (
      <div
         style={{
            fontFamily: "'Jersey 25', sans-serif",
            margin: 'auto',
            marginTop: '2rem',
            flexGrow: 1,
            width: '90%',
         }}
      >
         <h1
            style={{
               fontSize: '2.5rem',
               fontWeight: 'bold',
               marginBottom: '1rem',
               textAlign: 'left',
            }}
         >
            Add Products
         </h1>
         <h2
            style={{
               fontSize: '2.0rem',
               fontWeight: 'bold',
               marginBottom: '2rem',
               textAlign: 'left',
            }}
         >
            Add New Products
         </h2>
         <div className="card is-shadowless" style={formStyle}>
            <div className="card-content">
               <div className="content">
                  <form onSubmit={saveProduct}>
                     <p className="has-text-centered">{msg}</p>
                     <div className="columns" style={rowStyle}>
                        <div className="column is-one-third">
                           <label className="label" style={labelStyle}>
                              Name
                           </label>
                        </div>
                        <div className="column">
                           <input
                              type="text"
                              className="input"
                              value={name}
                              onChange={event => setName(event.target.value)}
                              placeholder="Product Name"
                           />
                        </div>
                     </div>

                     <div className="columns" style={rowStyle}>
                        <div className="column is-one-third">
                           <label className="label" style={labelStyle}>
                              Description
                           </label>
                        </div>
                        <div className="column">
                           <textarea
                              className="input"
                              value={description}
                              onChange={event =>
                                 setDescription(event.target.value)
                              }
                              placeholder="Description"
                           />
                        </div>
                     </div>

                     <div className="columns" style={rowStyle}>
                        <div className="column is-one-third">
                           <label className="label" style={labelStyle}>
                              Price
                           </label>
                        </div>
                        <div className="column">
                           <input
                              type="number"
                              className="input"
                              value={price}
                              onChange={event =>
                                 setPrice(parseInt(event.target.value))
                              }
                              placeholder="Price"
                           />
                        </div>
                     </div>

                     <div className="columns" style={rowStyle}>
                        <div className="column is-one-third">
                           <label className="label" style={labelStyle}>
                              Stok
                           </label>
                        </div>
                        <div className="column">
                           <input
                              type="number"
                              className="input"
                              value={stok}
                              onChange={event =>
                                 setStok(parseInt(event.target.value))
                              }
                              placeholder="Stok"
                           />
                        </div>
                     </div>

                     <div className="columns" style={rowStyle}>
                        <div className="column is-one-third">
                           <label className="label" style={labelStyle}>
                              Picture
                           </label>
                        </div>
                        <div className="column">
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
                                    <span className="file-label">
                                       Choose a file…
                                    </span>
                                 </span>
                                 <span className="file-name">{fileName}</span>
                              </label>
                           </div>
                        </div>
                     </div>

                     {preview && (
                        <figure className="image is-128x128 mt-4">
                           <img src={preview} alt="Preview" />
                        </figure>
                     )}

                     <div className="columns" style={rowStyle}>
                        <div className="column is-one-third">
                           <label className="label" style={labelStyle}>
                              Category
                           </label>
                        </div>
                        <div className="column">
                           <div className="select is-fullwidth">
                              <select
                                 value={categoryId}
                                 onChange={event =>
                                    setCategoryId(event.target.value)
                                 }
                              >
                                 <option value="">Select Category</option>
                                 {categories.map(category => (
                                    <option
                                       key={category.id}
                                       value={category.id}
                                    >
                                       {category.name}
                                    </option>
                                 ))}
                              </select>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </div>

         <div className="columns">
            <div className="column is-offset-one-third">
               <button
                  type="submit"
                  className="button is-success"
                  style={buttonStyle}
               >
                  Save
               </button>
            </div>
         </div>
      </div>
   );
};

const formStyle = {
   backgroundColor: '#f8f1e4', // Matches the background color of the web page
   borderRadius: '0px',
   border: '2px solid black',
   padding: '1rem',
   width: '70%',
};

const rowStyle = {
   borderBottom: '2px solid black', // Line separator between columns
   paddingBottom: '1rem',
   marginBottom: '0.7rem',
};

const labelStyle = {
   fontSize: '1.5rem',
};

const buttonStyle = {
   backgroundColor: '#2CAFE8',
   color: 'black',
   padding: '0.3rem 1rem',
   borderRadius: '9999px',
   border: '2px solid black',
   fontSize: '1.2rem',
   fontWeight: 'bold',
   display: 'block',
   marginTop: '1.5rem',
   marginLeft: '9rem',
   marginRight: '2rem',
   width: 'fit-content',
};

export default FormAddProduct;
