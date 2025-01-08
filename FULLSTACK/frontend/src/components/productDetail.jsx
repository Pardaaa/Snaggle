import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                console.log('Fetching product with ID:', id);
                const response = await axios.get(`http://localhost:5000/product/${id}`);
                console.log('Response data:', response.data);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;
    }

    const styles = {
        container: {
            fontFamily: 'Josefin Sans, sans-serif',
            display: 'flex',
            justifyContent: 'space-around', 
            alignItems: 'flex-start', 
            margin: '40px auto', 
            padding: '20px',
            maxWidth: '1200px', 
            width: '100%',
            alignItems: 'center'
        },
        item: {
            flex: '1', 
            margin: '0 20px',
        },
        image: {
            width: '500px', 
            borderRadius: '8px', 
            height: '300px',
        },
        description: {
            flex: '2', 
            textAlign: 'justify', 
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.item}>
                <img src={''} alt={product.name} style={styles.image} />
            </div>
            <div style={styles.item}>
                <h1 style={{ fontWeight: 'bold', color:'black', fontSize: '2rem'}}>{product.name}</h1>
                <p style={{ color: '#2c3e50' }}>Rp. {product.price}</p>
                <a 
                    href={`https://wa.me/089645759299`} 
                    style={{ 
                        textDecoration: 'none', 
                        color: 'black', 
                        padding: '10px 20px', 
                        borderRadius: '5px' 
                    }}
                >
                    Hubungi via WhatsApp
                </a>
            </div>
            <div style={{ ...styles.item, ...styles.description }}>
                <p>{product.description}</p>
            </div>
        </div>
    );
};

export default ProductDetail;
