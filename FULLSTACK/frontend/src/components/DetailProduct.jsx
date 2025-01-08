import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IoLogoWhatsapp } from 'react-icons/io5';

const DetailProduct = () => {
   const { id } = useParams();
   const [product, setProduct] = useState(null); // Update state to null instead of array

   useEffect(() => {
      const getProductById = async () => {
         try {
            const response = await axios.get(
               `http://localhost:5000/product/${id}`
            );
            setProduct(response.data);
         } catch (error) {
            console.error('Error fetching product:', error);
         }
      };

      getProductById();
   }, [id]);

   if (!product) {
      return <p>Loading...</p>; // Change loading message for better UX
   }

   return (
      <div
         className="columns is-vcentered is-centered mt-6"
         style={{ margin: 'auto', width: '90%' }}
      >
         <div className="column is-one-third" style={{ marginRight: '50px' }}>
            <figure
               className="image is-square"
               style={{ display: 'flex', justifyContent: 'center' }}
            >
               <img
                  src={product.url || ''}
                  alt={product.name}
                  style={{ maxWidth: '350px', height: 'auto' }} // Adjust size for better layout
               />
            </figure>
         </div>
         <div
            className="column is-two-thirds"
            style={{ textAlign: 'left', marginTop: '0px' }}
         >
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

            <div
               className="field is-grouped mt-5"
               style={{ textAlign: 'left' }}
            >
               <a
                  href="https://wa.me/089645759299"
                  className="button is-primary is-rounded"
                  style={{
                     fontFamily: "'Josefin Sans', sans-serif",
                     color: 'black',
                     display: 'flex',
                     alignItems: 'center',
                  }}
               >
                  <IoLogoWhatsapp className="mr-4" />
                  <span>089645759299</span>
               </a>
            </div>

            <div
               className="content mt-5"
               style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                  textAlign: 'left',
                  fontSize: '20px', // Slightly reduce font size for description
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

export default DetailProduct;
