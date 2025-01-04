import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IoLogoWhatsapp } from 'react-icons/io5';

const InfoProduct = () => {
   const { id } = useParams(); // Mendapatkan ID produk dari URL
   const [product, setProduct] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const getProductById = async () => {
         setLoading(true);  // Set loading ke true sebelum mengambil data
         setError(null);    // Reset error sebelum mencoba mengambil data

         try {
            const response = await axios.get(`http://localhost:5000/product/${id}`);
            setProduct(response.data);  // Set data produk yang diterima
         } catch (error) {
            setError('Error fetching product data');  // Set pesan error jika gagal
         } finally {
            setLoading(false);  // Set loading ke false setelah request selesai
         }
      };

      getProductById();
   }, [id]);  // Dependency array untuk melakukan request saat ID berubah

   if (loading) {
      return <p>Loading...</p>;  // Menampilkan loading saat data masih diambil
   }

   if (error) {
      return <p>{error}</p>;  // Menampilkan pesan error jika ada masalah saat fetching
   }

   if (!product) {
      return <p>Product not found!</p>;  // Jika produk tidak ditemukan
   }

   return (
      <div className="columns is-vcentered is-centered mt-6" style={{ margin: 'auto', width: '90%' }}>
         <div className="column is-one-third" style={{ marginRight: '50px' }}>
            <figure className="image is-square" style={{ display: 'flex', justifyContent: 'center' }}>
               <img
                  src={product.url || 'https://via.placeholder.com/350'}
                  alt={product.name}
                  style={{ maxWidth: '350px', height: 'auto' }}
               />
            </figure>
         </div>
         <div className="column is-two-thirds" style={{ textAlign: 'left', marginTop: '0px' }}>
            <h1
               style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontSize: '34px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: 'black',
                  marginBottom: '16px',
               }}
            >
               {product.name}
            </h1>

            <h2
               style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontSize: '30px',
                  fontWeight: 'normal',
                  textAlign: 'left',
                  color: 'black',
                  marginBottom: '10px',
               }}
            >
               Rp.{product.price}
            </h2>

            <h2
               style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  fontSize: '25px',
                  fontWeight: 'bold',
                  textAlign: 'left',
                  color: 'black',
                  marginBottom: '10px',
               }}
            >
               Stock: {product.stok}
            </h2>

            <div className="field is-grouped mt-5" style={{ textAlign: 'left' }}>
               <a
                  href={`https://wa.me/${product.whatsappNumber || '089645759299'}`}
                  className="button is-primary is-rounded"
                  style={{
                     fontFamily: "'Josefin Sans', sans-serif",
                     color: 'black',
                     display: 'flex',
                     alignItems: 'center',
                  }}
               >
                  <IoLogoWhatsapp className="mr-4" />
                  <span>{product.whatsappNumber || '089645759299'}</span>
               </a>
            </div>

            <div
               className="content mt-5"
               style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  textAlign: 'left',
                  fontSize: '20px',
                  color: 'black',
                  marginBottom: '13px',
               }}
            >
               {product.description}
            </div>
         </div>
      </div>
   );
};

export default InfoProduct;