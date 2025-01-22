import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { IoLogoWhatsapp } from 'react-icons/io5';

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
            flexWrap: 'wrap', 
            justifyContent: 'space-between',
            margin: '40px auto',
            padding: '20px',
            maxWidth: '1200px', 
            width: '100%',
        },
        item: {
            flex: '1',
            margin: '0 30px',
            minWidth: '300px', 
        },
        image: {
            width: '100%',
            height: 'auto', 
            maxHeight: '350px', 
            objectFit: 'cover',
            borderRadius: '10px',
            boxShadow: '0 5px 5px rgba(0, 0, 0, 0.4)',
        },
        description: {
            flex: '2',
            textAlign: 'justify',
            color: '#000',
            paddingLeft: '20px',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.item}>
                <img 
                    src={`http://localhost:5000/images/${product.picture}`} 
                    alt={product.name} 
                    style={styles.image} 
                />
            </div>

            <div style={styles.item}>
                <h1 style={{ fontWeight: 'bold', color:'black', fontSize: '2rem'}}>{product.name}</h1>
                <p style={{ fontWeight: 'bold', color:'black', fontSize: '1rem'}}>Stock: {product.stok}</p> 
                <br />   
                <p style={{ color: '#2c3e50'}}>Rp. {product.price}</p>
                <br />
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
                    fontSize: '20px',
                    color: 'black',
                    marginBottom: '13px',
                    whiteSpace: 'pre-wrap', 
                    wordWrap: 'break-word', 
                    maxWidth: '100%', 
                }}
            >
                {product.description}
            </div>
        </div>
    );
};

export default ProductDetail;