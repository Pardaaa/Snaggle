import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Welcome = () => {
   const { user } = useSelector(state => state.auth);
   const [categories, setCategories] = useState([]);
   const [products, setProducts] = useState([]);

   useEffect(() => {
      getCategories();
      getProducts();
   }, []);

   const getCategories = async () => {
      try {
         const response = await axios.get('http://localhost:5000/category');
         setCategories(response.data);
      } catch (error) {
         console.error('Error fetching categories:', error);
      }
   };

   const getProducts = async () => {
      try {
         const response = await axios.get('http://localhost:5000/product');
         setProducts(response.data);
      } catch (error) {
         console.error('Error fetching products:', error);
      }
   };

   return (
      <div
         style={{
            margin: 'auto',
            marginTop: '2rem',
            flexGrow: 1,
            width: '90%',
            fontFamily: 'Josefin Sans, sans-serif', // Menambahkan font Josefin Sans
         }}
      >
         <h1
            style={{
               fontSize: '2.5rem',
               fontWeight: 'bold',
               marginBottom: '1rem',
               textAlign: 'left', // Teks Dashboard rata kiri
            }}
         >
            Dashboard
         </h1>
         <h2
            style={{
               fontSize: '2.0rem', // Memperbesar font Welcome Back
               fontWeight: 'bold',
               marginBottom: '2rem',
               textAlign: 'left',
            }}
         >
            Welcome Back <strong>{user && user.name}</strong>
         </h2>

         {/* Bagian Category dan Produk */}
         <div
            style={{
               display: 'flex',
               justifyContent: 'flex-start',
               alignItems: 'flex-start',
               gap: '1rem', // Jarak antar kotak lebih rapat
               marginTop: '2rem',
            }}
         >
            {/* Kotak Category */}
            <div
               style={{
                  width: '15%',
                  height: '130px',
                  border: '2px solid black',
                  borderRadius: '20px', // Sudut melengkung besar
                  padding: '0.6rem',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  textAlign: 'left',
               }}
            >
               <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                  Category {/* Ukuran font lebih besar */}
               </h2>
               <p
                  style={{
                     fontSize: '1rem', // Ukuran font lebih kecil untuk jumlah
                     marginBottom: '1rem',
                     fontWeight: 'normal', // Menghilangkan bold pada jumlah
                  }}
               >
                  {categories.length} Categories{' '}
                  {/* Menampilkan jumlah kategori */}
               </p>
               <Link
                  to="/category"
                  style={{
                     fontSize: '1rem',
                     color: '#2f855a',
                     textDecoration: 'none', // Menghilangkan underline
                     transition: 'color 0.3s ease', // Efek transisi saat hover
                  }}
                  onMouseOver={e => (e.target.style.color = '#38a169')} // Ganti warna saat hover
                  onMouseOut={e => (e.target.style.color = '#2f855a')} // Kembalikan warna normal
               >
                  Detail
               </Link>
            </div>

            {/* Kotak Produk */}
            <div
               style={{
                  width: '15%',
                  height: '130px',
                  border: '2px solid black',
                  borderRadius: '20px', // Sudut melengkung besar
                  padding: '0.6rem',
                  backgroundColor: 'white',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  textAlign: 'left',
               }}
            >
               <h2 style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>
                  Produk {/* Ukuran font lebih besar */}
               </h2>
               <h3
                  style={{
                     fontSize: '1rem', // Ukuran font lebih kecil untuk jumlah
                     marginBottom: '1rem',
                     fontWeight: 'normal', // Menghilangkan bold pada jumlah
                  }}
               >
                  {products.length} Produk {/* Menampilkan jumlah produk */}
               </h3>
               <Link
                  to="/products"
                  style={{
                     fontSize: '1rem',
                     color: '#2f855a',
                     textDecoration: 'none', // Menghilangkan underline
                     transition: 'color 0.3s ease', // Efek transisi saat hover
                  }}
                  onMouseOver={e => (e.target.style.color = '#38a169')} // Ganti warna saat hover
                  onMouseOut={e => (e.target.style.color = '#2f855a')} // Kembalikan warna normal
               >
                  Detail
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Welcome;
