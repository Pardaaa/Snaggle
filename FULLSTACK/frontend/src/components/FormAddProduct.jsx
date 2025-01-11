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

   const handleFileInputChange = event => {
      const image = event.target.files[0];
      if (image) {
         setFile(image);
         setFileName(image.name);
         setPreview(URL.createObjectURL(image));
      }
   };

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
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '100%',
            minHeight: '100vh',
         }}
      >
         <div
            style={{
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
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
               }}
            >
               Add New Products
            </h2>
         </div>

         <div className="card is-shadowless" style={formStyle}>
            <div className="card-content">
               <div className="content">
                  <form onSubmit={saveProduct}>
                  <h5 className="has-text-centered has-text-danger">{msg}</h5>
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
                              style={inputStyle}
                           />
                        </div>
                     </div>

                     <hr style={hrStyle} />

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
                              style={{
                                 ...inputStyle,
                                 resize: 'none',
                                 height: '80px',
                              }}
                           />
                        </div>
                     </div>

                     <hr style={hrStyle} />

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
                              style={inputStyle}
                           />
                        </div>
                     </div>

                     <hr style={hrStyle} />

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
                              style={inputStyle}
                           />
                        </div>
                     </div>

                     <hr style={hrStyle} />

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
                                    <span
                                       className="file-label"
                                       style={inputStyle}
                                    >
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

                     <hr style={hrStyle} />

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
                                 style={inputStyle}
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

         <div
            style={{
               width: '80%',
               display: 'flex',
               justifyContent: 'flex-start',
               marginLeft: '20rem',
            }}
         >
            <button
               type="submit"
               className="button is-success"
               style={buttonStyle}
               onClick={saveProduct}
            >
               Tambah Produk
            </button>
         </div>
      </div>
   );
};

const formStyle = {
   backgroundColor: '#f8f1e4',
   borderRadius: '4px',
   border: '2px solid black',
   padding: '1rem',
   width: '55%',
};

const rowStyle = {
   paddingBottom: '0.1rem',
   marginBottom: '0.1rem',
};

const hrStyle = {
   border: '1px solid #000',
   margin: '0.8rem 0',
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
   width: '10%',
};

const inputStyle = {
   fontFamily: "'Josefin Sans', sans-serif",
   fontSize: '1rem',
};

export default FormAddProduct;
