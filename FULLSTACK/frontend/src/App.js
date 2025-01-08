import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import Users from './pages/Users';
import AddUser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Products from './pages/Products';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import InfoProducts from './pages/InfoProducts';
import Categories from './pages/Categories';
import AddCategory from './pages/AddCategory';
import EditCategory from './pages/EditCategory';
import Shop from './pages/App';
import Display from './pages/Display';
import CustomerHome from './pages/CustomerHome';
import CustomerProducts from './components/CustomerProducts';
import ProductCust from './pages/ProductCust';

function App() {
   return (
      <BrowserRouter>
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
            <Route path="/Snaggle" element={<Shop />} />
            <Route path="/Display" element={<Display />} />
            <Route path="/customer" element={<CustomerHome />} />
            <Route path="/customer/product" element={<CustomerProducts />} />
            <Route path="/customer/product/:id" element={<ProductCust />} />
         </Routes>
      </BrowserRouter>
   );
}
export default App;
