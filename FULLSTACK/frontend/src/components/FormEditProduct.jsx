import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditProduct = () => {
   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [file, setFile] = useState('');
   const [preview, setPreview] = useState('');
   const [fileName, setFileName] = useState('Info file...');
   const [price, setPrice] = useState('');
   const [stok, setStok] = useState('');
   const [categoryId, setCategoryId] = useState('');
   const [categories, setCategories] = useState([]);
   const [msg, setMsg] = useState('');
   const navigate = useNavigate();
   const { id } = useParams();

   useEffect(() => {
      const getProductById = async () => {
         try {
            const response = await axios.get(
               `http://localhost:5000/product/${id}`
            );
            setName(response.data.name);
            setPrice(response.data.price);
            setDescription(response.data.description);
            setStok(response.data.stok);
            setCategoryId(response.data.categoryId);
            setPreview(response.data.url || '');
         } catch (error) {
            if (error.response) setMsg(error.response.data.msg);
         }
      };
      getProductById();
   }, [id]);

   const handleFileInputChange = event => {
      const image = event.target.files[0];
      if (image) {
         setFile(image);
         setFileName(image.name);
         setPreview(URL.createObjectURL(image));
      }
   };

   const updateProduct = async event => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('stok', stok);

      if (categoryId) formData.append('categoryId', categoryId);

      if (file) {
         formData.append('file', file);
      }

      try {
         await axios.put(`http://localhost:5000/product/${id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
         });
         navigate('/products');
      } catch (error) {
         if (error.response) setMsg(error.response.data.msg);
      }
   };

   useEffect(() => {
      const getCategories = async () => {
         try {
            const response = await axios.get('http://localhost:5000/category');
            setCategories(response.data);
         } catch (error) {
            console.error('Error fetching categories:', error);
         }
      };
      getCategories();
   }, []);

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
               display: 'flex',
               justifyContent: 'flex-start',
               alignItems: 'flex-start',
               flexDirection: 'column',
               width: '80%',
               marginBottom: '1.5rem',
            }}
         >
            <h1
               style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
               }}
            >
               Edit Product
            </h1>
            <h2
               style={{
                  fontSize: '2rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
               }}
            >
               Update Product Details
            </h2>
         </div>

         <div className="card is-shadowless" style={formStyle}>
            <div className="card-content">
               <div className="content">
                  <form onSubmit={updateProduct}>
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
                              Stock
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
                              placeholder="Stock"
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
            }}
         >
            <button
               type="submit"
               className="button is-success"
               style={buttonStyle}
               onClick={updateProduct}
            >
               Update
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
   marginTop: '2rem',
   width: '7%',
};

const inputStyle = {
   fontFamily: "'Josefin Sans', sans-serif",
   fontSize: '1rem',
};

export default FormEditProduct;
