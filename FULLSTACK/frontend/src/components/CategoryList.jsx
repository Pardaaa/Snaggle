import React, { useEffect, useState } from 'react';
import { IoCreateSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CategoryList = () => {
   const [allCategories, setallCategories] = useState([]);
   const [categories, setCategories] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');

   useEffect(() => {
      getCategories();
   }, []);

   const getCategories = async () => {
      const response = await axios.get('http://localhost:5000/category');
      setCategories(response.data);
      setallCategories(response.data);
   };
   
   // const deleteCategories = async userId => {
   //    await axios.delete(`http://localhost:5000/category/${userId}`);
   //    getCategories();
   // };

   const handleSearchChange = e => {
      const value = e.target.value;
      setSearchTerm(value);

      if (value.trim() === '') {
         setCategories(allCategories);
      }
   };

   const handleSearch = () => {
      if (searchTerm.trim() === '') {
         setCategories(allCategories);
      } else {
         const filteredCategories = allCategories.filter(categories =>
            categories.name.toLowerCase().includes(searchTerm.toLowerCase())
         );
         setCategories(filteredCategories);
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
            Categories
         </h1>
         <h2
            style={{
               fontSize: '2.0rem',
               fontWeight: 'bold',
               marginBottom: '2rem',
               textAlign: 'left',
            }}
         >
            List Of Categories
         </h2>
         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Link
               to={'/category/add'}
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
         </div>
         <table className="table is-striped is-fullwidth" style={tableStyle}>
            <thead>
               <tr>
                  <th style={tableHeaderStyle}>No</th>
                  <th style={tableHeaderStyle}>Name</th>
                  <th style={tableHeaderStyle}>Action</th>
               </tr>
            </thead>
            <tbody>
               {categories.map((category, index) => (
                  <tr key={category.uuid} style={rowStyle}>
                     <td style={cellStyle}>{index + 1}</td>
                     <td style={cellStyle}>{category.name}</td>
                     <td style={cellStyle}>
                        <Link
                           to={`/category/edit/${category.uuid}`}
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
   borderRadius: '2rem',
   width: '90%',
   backgroundColor: '#e2e8f0',
   fontWeight: 'bold',
   fontSize: '1.2rem',
   boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
   fontFamily: "'Josefin Sans', sans-serif",
};

const buttonInsideInputStyle = {
   backgroundColor: '#2CAFE8',
   color: 'black',
   padding: '0.5rem 2rem',
   border: '2px solid #000',
   borderRadius: '2rem',
   fontWeight: 'bold',
   fontFamily: "'Josefin Sans', sans-serif",
   position: 'absolute',
   right: '6rem',
   top: '50%',
   transform: 'translateY(-50%)',
   cursor: 'pointer',
};

const tableStyle = {
   width: '50%',
   margin: '0 auto',
   borderCollapse: 'collapse',
   marginBottom: '1.5rem',
   border: '2px solid black',
   marginTop: '2rem',
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
   marginLeft: '25rem',
   marginRight: '2rem',
   width: 'fit-content',
};

const buttonIconStyle = {
   fontSize: '1.0 rem',
   fontWeight: 'bold',
};
const cellStyle = {
   borderRight: '1px solid black',
   padding: '0.8rem',
};
export default CategoryList;
