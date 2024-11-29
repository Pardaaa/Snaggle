import React, { useEffect, useState } from "react";
import { IoTrashSharp, IoCreateSharp, IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from "axios";

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUsers(response.data);
  };
  const deleteUsers = async (userId) => {
    await axios.delete(`http://localhost:5000/users/${userId}`);
    setUsers(users.filter((user) => user.uuid !== userId));
  };

  return (
    <div>
      <h1 className="title">Users</h1>
      <h2 className="subtitle">List of Users</h2>
      <Link to={"/users/add"} className="button is-info mb-2">
        Add New
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.filter((user) => user.role !== "admin").map((user, index) => (
            <tr key={user.uuid}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Link
                  to={`/users/edit/${user.uuid}`}
                  className="button  is-warning mr-2"
                >
                  <IoCreateSharp />
                </Link>
                <button
                  onClick={() => deleteUsers(user.uuid)}
                  className="button is-danger"
                >
                  <IoTrashSharp />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
