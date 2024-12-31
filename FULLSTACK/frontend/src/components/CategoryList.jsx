import React, { useEffect, useState } from 'react';
import { IoTrashSharp, IoCreateSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import axios from 'axios';

const CategoryList = () => {
   const [categories, setCategories] = useState([]);

   useEffect(() => {
      getCategories();
   }, []);

   const getCategories = async () => {
      const response = await axios.get('http://localhost:5000/category');
      setCategories(response.data);
   };

   const deleteCategories = async userId => {
      await axios.delete(`http://localhost:5000/category/${userId}`);
      getCategories();
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
                        <button
                           onClick={() => deleteCategories(category.uuid)}
                           className="button is-danger"
                           style={buttonIconStyle}
                        >
                           <IoTrashSharp />
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         <Link
            to={'/category/add'}
            className="button is-info mb-2"
            style={buttonStyle}
         >
            Add New
         </Link>
      </div>
   );
};

const tableStyle = {
   width: '50%',
   margin: '0 auto',
   borderCollapse: 'collapse',
   marginBottom: '1.5rem',
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
