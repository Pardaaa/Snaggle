import React from 'react';
import { Link } from 'react-router-dom';

const NavbarToko = () => {
    return (
        <nav
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1rem 2rem',
                backgroundColor: '#FFF3E4',
                borderBottom: '2px solid #FFF3E4',
            }}
        >
            {/* Navigation Links */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Link to="/snaggle" style={{ margin: '0 1rem', textDecoration: 'none', color: 'black' }}>
                    Home
                </Link>
                <Link to="/display" style={{ margin: '0 1rem', textDecoration: 'none', color: 'black' }}>
                    Product
                </Link>
            </div>

            {/* Logo */}
            <Link to="/" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', fontSize: '1.5rem' }}>
                Snaggle
            </Link>

            {/* Search Bar */}
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', borderRadius: '8px', padding: '0.5rem' }}>
                <input
                    type="text"
                    placeholder="Nama Barang"
                    style={{
                        border: 'none',
                        outline: 'none',
                        marginRight: '0.5rem',
                        padding: '0.5rem',
                        borderRadius: '4px',
                        fontSize: '1rem',
                    }}
                />
                <button
                    style={{
                        backgroundColor: '#F7A8B8',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '0.5rem 1rem',
                        cursor: 'pointer',
                    }}
                >
                    Search
                </button>
            </div>
        </nav>
    );
};

export default NavbarToko;