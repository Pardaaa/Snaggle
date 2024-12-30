// App.js

import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Users from "./pages/Users";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import Products from "./pages/Products";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";
import InfoProducts from "./pages/InfoProducts";
import Categories from "./pages/Categories";
import AddCategory from "./pages/AddCategory";
import EditCategory from "./pages/EditCategory";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar state
  const [isNavbarOpen, setIsNavbarOpen] = useState(true); // Navbar state

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle Sidebar
  };

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen); // Toggle Navbar
  };

  return (
    <BrowserRouter>
      <Navbar toggleSidebar={toggleSidebar} toggleNavbar={toggleNavbar} /> {/* Pass both functions */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} toggleNavbar={toggleNavbar} /> {/* Pass both states */}

      <div className="content-container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/add" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<EditProduct />} />
          <Route path="/products/info/:id" element={<InfoProducts />} />
          <Route path="/category" element={<Categories />} />
          <Route path="/category/add" element={<AddCategory />} />
          <Route path="/category/edit/:id" element={<EditCategory />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
