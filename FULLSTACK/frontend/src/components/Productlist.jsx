import React, { useState, useEffect } from 'react';
import { IoTrashSharp, IoCreateSharp, IoSearchSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Productlist = () => {
   const [allProducts, setallProducts] = useState([]);
   const [products, setProducts] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
   const navigate = useNavigate();

   useEffect(() => {
      getProducts();
   }, []);

   const getProducts = async () => {
      const response = await axios.get('http://localhost:5000/product');
      setProducts(response.data);
      setallProducts(response.data);
   };

   const deleteProduct = async productId => {
      await axios.delete(`http://localhost:5000/product/${productId}`);
      getProducts();
   };

   const handleAddUser = () => {
      navigate('/products/add');
   };

   const handleSearchChange = e => {
      setSearchTerm(e.target.value);
   };

   const handleSearch = () => {
      if (searchTerm.trim() === '') {
         setProducts(allProducts);
      } else {
         const filteredProducts = allProducts.filter(products =>
            products.name.toLowerCase().includes(searchTerm.toLowerCase())
         );
         setProducts(filteredProducts);
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
            Products
         </h1>
         <h2
            style={{
               fontSize: '2.0rem',
               fontWeight: 'bold',
               marginBottom: '2rem',
               textAlign: 'left',
            }}
         >
            List of Products
         </h2>
         <Link
            to={'/products/add'}
            className="button is-info mb-2"
            style={buttonStyle}
         >
            Add New
         </Link>
         <div style={searchContainerStyle}>
               <div style={inputWrapperStyle}>
                  <input
                     type="text"
                     placeholder="Search By Name"
                     style={inputStyle}
                     value={searchTerm}
                     onChange={handleSearchChange}
                  />
                  <button style={buttonInsideInputStyle} onClick={handleSearch}>
                     Telusuri
                  </button>
               </div>
            </div>
         <table className="table is-striped is-fullwidth" style={tableStyle}>
            <thead>
               <tr>
                  <th style={tableHeaderStyle}>No</th>
                  <th style={tableHeaderStyle}>Name</th>
                  <th style={tableHeaderStyle}>Price</th>
                  <th style={tableHeaderStyle}>Stock</th>
                  <th style={tableHeaderStyle}>Category</th>
                  <th style={tableHeaderStyle}>Action</th>
               </tr>
            </thead>
            <tbody>
               {products.map((product, index) => (
                  <tr key={product.uuid} style={rowStyle}>
                     <td style={cellStyle}>{index + 1}</td>
                     <td style={cellStyle}>{product.name}</td>
                     <td style={cellStyle}>{product.price}</td>
                     <td style={cellStyle}>{product.stok}</td>
                     <td style={cellStyle}>{product.category.name}</td>
                     <td style={cellStyle}>
                        <Link
                           to={`/products/info/${product.uuid}`}
                           className="button is-info mr-2"
                           style={buttonIconStyle}
                        >
                           <IoSearchSharp />
                        </Link>
                        <Link
                           to={`/products/edit/${product.uuid}`}
                           className="button is-warning mr-2"
                           style={buttonIconStyle}
                        >
                           <IoCreateSharp />
                        </Link>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

const searchContainerStyle = {
   display: 'flex',
   alignItems: 'center',
   gap: '0.5rem',
   width: '50%',
   justifyContent: 'flex-start',
   marginLeft: '3rem',
   marginRight: '13rem',
};

const inputWrapperStyle = {
   display: 'flex',
   alignItems: 'center',
   width: '100%',
   position: 'relative',
};

const inputStyle = {
   padding: '0.8rem 1.5rem',
   border: '1px solid #ccc',
   borderRadius: '0.5rem',
   width: '90%',
   backgroundColor: '#e2e8f0',
   fontWeight: 'bold',
   fontSize: '1.2rem',
   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
   fontFamily: "'Josefin Sans', sans-serif",
};

const buttonInsideInputStyle = {
   backgroundColor: '#416B39',
   color: 'white',
   padding: '0.5rem 2rem',
   borderRadius: '0.5rem',
   fontWeight: 'bold',
   fontFamily: "'Josefin Sans', sans-serif",
   position: 'absolute',
   right: '6rem',
   top: '50%',
   transform: 'translateY(-50%)',
   cursor: 'pointer',
};

const tableStyle = {
   width: '80%',
   margin: '0 auto',
   borderCollapse: 'collapse',
   marginBottom: '1.5rem',
   marginTop: '2rem',
   border: '2px solid black',
};

const tableHeaderStyle = {
   fontSize: '1.8rem',
   color: '#000',
   fontStyle: 'bold',
   padding: '1rem',
};

const rowStyle = {
   fontSize: '1.5rem',
   fontWeight: 'bold',
   color: '#000',
   borderBottom: '1px solid black',
   padding: '0.8rem',
};

const cellStyle = {
   borderRight: '1px solid black',
   padding: '0.8rem',
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

const buttonIconStyle = {
   fontSize: '1.0 rem',
   fontWeight: 'bold',
};

export default Productlist;
