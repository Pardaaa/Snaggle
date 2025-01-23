import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const FormEditCategory = () => {
   const [name, setName] = useState('');
   const [msg, setMsg] = useState('');
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

   const updateCategories = async event => {
      event.preventDefault();
      try {
         await axios.patch(`http://localhost:5000/category/${id}`, {
            name: name,
         });
         navigate('/category');
      } catch (error) {
         if (error.response) {
            setMsg(error.response.data.msg);
         }
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
            Edit Categories
         </h2>
         <div className="card is-shadowless" style={tableStyle}>
            <div className="card-content">
               <div className="content">
                  <p className="has-text-centered">{msg}</p>
                  <form onSubmit={updateCategories}>
                     <div className="field">
                        <label className="label" style={labelStyle}>
                           Name
                        </label>
                        <div className="control">
                           <input
                              value={name}
                              onChange={e => setName(e.target.value)}
                              type="text"
                              className="input"
                              placeholder="Name"
                           />
                        </div>
                     </div>
                     <div className="field">
                        <div className="control">
                           <button
                              type="submit"
                              className="button is-success "
                              style={buttonStyle}
                           >
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

const labelStyle = {
   fontSize: '1.5rem',
   fontWeight: 'bold',
};

const tableStyle = {
   width: '50%',
   margin: '0 auto',
   borderCollapse: 'collapse',
   marginBottom: '1.5rem',
   border: '2px solid black',
};

const buttonStyle = {
   backgroundColor: '#2CAFE8',
   color: 'black',
   padding: '0.3rem 1rem',
   borderRadius: '9999px',
   border: '2px solid black',
   fontSize: '1.5rem',
   fontWeight: 'bold',
   display: 'block',
   marginTop: '1rem',
};
export default FormEditCategory;
