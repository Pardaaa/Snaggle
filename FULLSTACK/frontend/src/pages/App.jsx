import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
   const [products, setProducts] = useState([]);

   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const response = await axios.get('http://localhost:5000/products');
            setProducts(response.data);
         } catch (error) {
            console.error('Error fetching products:', error);
         }
      };

      fetchProducts();
   }, []);

   return (
      <div className="columns is-multiline">
         {products.map((product) => (
            <div key={product._id} className="column is-one-quarter">
               <div className="card" style={{ textAlign: 'center' }}>
                  <Link to={`/product/${product._id}`}>
                     <figure className="image is-4by3">
                        <img
                           src={product.url || 'https://via.placeholder.com/350'}
                           alt={product.name}
                           style={{ cursor: 'pointer' }}
                        />
                     </figure>
                  </Link>
                  <div className="card-content">
                     <p className="title is-5">{product.name}</p>
                     <p className="subtitle is-6">Rp.{product.price}</p>
                  </div>
               </div>
            </div>
         ))}
      </div>
   );
};

export default ProductList;