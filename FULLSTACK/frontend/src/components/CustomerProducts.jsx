import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';

const CustomerProducts = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = new URLSearchParams(location.search);
    const initialCategory = params.get("category") || "";
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [sortOrder, setSortOrder] = useState('');
    const [query, setQuery] = useState('');

    useEffect(() => {
        getProducts();
        getCategories();
    }, []);
    useEffect(() => {
        setSelectedCategory(initialCategory);
    }, [initialCategory]);

    const getProducts = async () => {
        const response = await axios.get('http://localhost:5000/product');
        setProducts(response.data);
    };
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const searchQuery = params.get("search") || "";
        const categoryQuery = params.get("category") || "";
    
        setQuery(searchQuery);
        setSelectedCategory(categoryQuery);
    }, [location.search]);
    

    const getCategories = async () => {
        const response = await axios.get('http://localhost:5000/category');
        setCategories(response.data);
     };
     
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        navigate(`/customer/product?category=${category}`);
    };

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    };

    
     const handleSortHighToLow = () => {
        setSortOrder('high-to-low');
    };
    
    const handleSortLowToHigh = () => {
        setSortOrder('low-to-high');
    };
    

    
    return (
        <div style={{ minHeight:'100vh', margin: '0', padding: '0'}}>
            <div style={containerStyle}>
                <header style={headerStyle}>
                    <nav style={navStyle}>
                        <NavLink to="/customer" style={navLinkStyle} className="navbar-item" activeStyle={{ color: '#416B39' }}>
                            Home
                        </NavLink>
                        <NavLink to="/customer/??" style={navLinkStyle} className="navbar-item" activeStyle={{ color: '#416B39' }}>
                            About Us
                        </NavLink>
                        <NavLink to="/customer/product" style={navLinkStyle} className="navbar-item" activeStyle={{ color: '#416B39' }}>
                            Products
                        </NavLink>
                    </nav>
                    <h1 style={logoStyle}>Snaggle</h1>
                    <div style={searchBarStyle}>
                        <input 
                            type="text" 
                            style={searchInputStyle} 
                            placeholder="Cari produk..." 
                            value={query} 
                            onChange={handleSearchChange} 
                        />
                        <button><span style={searchIconStyle}>&#x1F50E;&#xFE0E;</span></button>
                    </div>
                </header>

            <aside style={filterStyle}>
                <h2 style={filterTitleStyle}>Harga</h2>
                <button style={filterButtonStyle} onClick={handleSortHighToLow}>
                    Termahal ke termurah
                </button>
                <button style={filterButtonStyle} onClick={handleSortLowToHigh}>
                    Termurah ke termahal
                </button>

                <h2 style={filterTitleStyle}>Filter by</h2>
                <select style={dropdownStyle}
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                >
                    <option value="">Semua</option>
                    {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                    ))}
                </select>

          
            </aside>

            <main style={productGridStyle}>
            {products
                .filter(product => 
                    (selectedCategory === '' || product.category?.name?.toLowerCase() === selectedCategory.toLowerCase()) &&
                    (query === '' || product.name.toLowerCase().includes(query.toLowerCase()))
                )   
                             
                .sort((a, b) => {
                    if (sortOrder === 'high-to-low') {
                        return b.price - a.price; 
                    } else if (sortOrder === 'low-to-high') {
                        return a.price - b.price; 
                    }
                    return 0; 
                })
                .map(product => (
                    <Link key={product.uuid} to={`/customer/product/${product.uuid}`} style={productCardStyle}>
                        <img
                            src={`http://localhost:5000/images/${product.picture}`}
                            alt={product.name}
                            style={productImageStyle}
                        />
                        <h3 style={productNameStyle}>{product.name}</h3>
                        <p style={productPriceStyle}>Rp. {product.price}</p>
                    </Link>
                ))}
                
                {products.length === 0 && (
                    <p style={{ textAlign: 'center', fontSize: '1.5rem' }}>Produk tidak ditemukan.</p>
                )}

            </main>
        </div>
        </div>
        
    );
    
};


// CSS-in-JS styles
const containerStyle = {
   fontFamily: "'Arial', sans-serif",
   display: 'grid',
   gridTemplateColumns: '2fr 6fr',
   gap: '20px',
   padding: '20px',
   backgroundColor: '#f8f1e4',
   fontFamily: 'Josefin Sans, sans-serif',
   alignItems: 'start',
};

const headerStyle = {
    marginBottom: '50px',

   gridColumn: 'span 2',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
   padding: '10px 20px',
   fontSize: '1rem',
   
};

const logoStyle = {
   fontSize: '24px',
   fontWeight: 'bold',
   color: '#333',
};

const navStyle = {
   display: 'flex',
   gap: '15px',
};

const navLinkStyle = {
   textDecoration: 'none',
   fontSize: '18px',
   backgroundColor: 'transparent',

};

const searchBarStyle = {
   display: 'flex',
   borderBottom: '1px solid #ccc',
   width: '250px',
   position: 'relative',


};
const dropdownStyle = {
    border: "none",
    background: "transparent",
    padding: "8px",
    fontSize: "16px",
    cursor: "pointer",
};

const searchInputStyle = {
   padding: '5px 10px',
   border: 'none',
   outline: 'none',
   width: '300px',
   fontSize: '1rem',
   backgroundColor:'transparent',
};

const searchIconStyle = {
    color: '#00000',
    right: 0,
    width: '100%',
    fontSize: '18px',
    position: 'relative',
 };

const filterStyle = {
   padding: '10px',
   borderRight: '2px solid #ccc',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-start', 
};

const filterTitleStyle = {
   fontSize: '20px',
   fontWeight: 'bold',
   fontSize: '1rem',
   marginBottom: '10px',
   color: '#000',
   borderBottom: '1px solid'

};

const filterButtonStyle = {
   display: 'block',
   marginBottom: '10px',
   padding: '5px 10px',
   border: 'none',
   fontSize: '1rem',
   backgroundColor: 'rgba(207, 199, 199, 0.88)',
   borderRadius: '2px',
   cursor: 'pointer',
   fontFamily: 'Josefin Sans, sans-serif',
   color: '#000',

};


const productGridStyle = {
   display: 'grid',
   gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
   gap: '20px',
   padding: '20px',
    alignItems: 'start',
};

const productCardStyle = {
   textAlign: 'center',
   backgroundColor: 'transparent',
   borderRadius: '10px',
   padding: '10px',
   
};

const productImageStyle = {
   width: '100%',
   height: '200px',
   objectFit: 'cover',
   borderRadius: '10px',
   boxShadow: "5px 10px 10px rgba(0, 0, 0, 0.1)", 


};

const productNameStyle = {
   fontSize: '1rem',
   fontWeight: 'bold',
   marginTop: '10px',
   color: '#000'
};

const productPriceStyle = {
   fontSize: '1rem',
   color: '#555',
   marginTop: '5px',
};

export default CustomerProducts;
