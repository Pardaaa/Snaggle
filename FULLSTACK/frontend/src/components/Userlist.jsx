import React, { useEffect, useState } from 'react';
import { IoTrashSharp, IoCreateSharp } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Userlist = () => {
   const [allUsers, setAllUsers] = useState([]);
   const [users, setUsers] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');
   const navigate = useNavigate();

   useEffect(() => {
      getUsers();
   }, []);

   const getUsers = async () => {
      try {
         const response = await axios.get('http://localhost:5000/users');
         setAllUsers(response.data);
         setUsers(response.data);
      } catch (error) {
         console.error('Failed to fetch users:', error);
      }
   };

   const deleteUsers = async userId => {
      try {
         await axios.delete(`http://localhost:5000/users/${userId}`);
         setUsers(users.filter(user => user.uuid !== userId));
         setAllUsers(allUsers.filter(user => user.uuid !== userId));
      } catch (error) {
         console.error('Failed to delete user:', error);
      }
   };

   const handleAddUser = () => {
      navigate('/users/add');
   };

   const handleSearchChange = e => {
      setSearchTerm(e.target.value);
   };

   const handleSearch = () => {
      if (searchTerm.trim() === '') {
         setUsers(allUsers);
      } else {
         const filteredUsers = allUsers.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
         );
         setUsers(filteredUsers);
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
            User
         </h1>
         <h2
            style={{
               fontSize: '2.0rem',
               fontWeight: 'bold',
               marginBottom: '2rem',
               textAlign: 'left',
            }}
         >
            List Of Users
         </h2>
         <div style={headerStyle}>
            <button
               onClick={handleAddUser}
               style={{
                  ...addButtonStyle,
                  fontFamily: "'Josefin Sans', sans-serif",
                  marginLeft: '18rem',
                  marginRight: '10rem',
               }}
            >
               Add New
            </button>
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

         <div style={{ marginTop: '4rem', overflowX: 'auto' }}>
            <table
               className="bg-cream table is-striped is-fullwidth"
               style={tableStyle}
            >
               <thead>
                  <tr>
                     <th style={tableHeaderStyle}>No</th>
                     <th style={tableHeaderStyle}>Name</th>
                     <th style={tableHeaderStyle}>Email</th>
                     <th style={tableHeaderStyle}>Role</th>
                     <th style={tableHeaderStyle}>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {users.map(user => {
                     const originalIndex = allUsers.findIndex(
                        u => u.uuid === user.uuid
                     );
                     return (
                        <tr
                           key={user.uuid}
                           style={{ borderBottom: '1px solid #ccc' }}
                        >
                           <td style={tableCellStyle}>{originalIndex + 1}</td>
                           <td style={tableCellStyle}>{user.name}</td>
                           <td style={tableCellStyle}>{user.email}</td>
                           <td style={tableCellStyle}>{user.role}</td>
                           <td style={actionCellStyle}>
                              <Link
                                 to={`/users/edit/${user.uuid}`}
                                 className="button is-warning mr-2"
                                 style={buttonIconStyle}
                              >
                                 <IoCreateSharp />
                              </Link>
                              <button
                                 onClick={() => deleteUsers(user.uuid)}
                                 className="button is-danger"
                                 style={buttonIconStyle}
                              >
                                 <IoTrashSharp />
                              </button>
                           </td>
                        </tr>
                     );
                  })}
               </tbody>
            </table>
         </div>
      </div>
   );
};

const headerStyle = {
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   marginBottom: '1rem',
   flexWrap: 'nowrap',
};

const addButtonStyle = {
   backgroundColor: '#416B39',
   color: 'white',
   padding: '0.5rem 2rem',
   borderRadius: '0.5rem',
   boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
   fontWeight: 'bold',
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
   width: '70%',
   margin: '0 auto',
   borderCollapse: 'collapse',
   marginBottom: '1.5rem',
   border: '2px solid black',
   backgroundColor: 'rgba(255, 255, 255, 0.61)',
};

const tableHeaderStyle = {
   fontSize: '1.8rem',
   color: '#000',
   fontWeight: 'bold',
   padding: '1rem',
   borderRight: '2px solid #ccc',
};

const tableCellStyle = {
   borderRight: '2px solid #ccc',
   padding: '0.8rem',
   fontSize: '1.2rem',
   fontWeight: 'bold',
   fontFamily: "'Josefin Sans',sans-serif",
};

const actionCellStyle = {
   ...tableCellStyle,
   display: 'flex',
   justifyContent: 'center',
   gap: '0.5rem',
};

const buttonIconStyle = {
   fontSize: '1rem',
   fontWeight: 'bold',
   cursor: 'pointer',
};

export default Userlist;
