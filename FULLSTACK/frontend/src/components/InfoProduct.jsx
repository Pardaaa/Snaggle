import React,{ useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io5";

const InfoProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/product/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    getProductById();
  }, [id]);

  if (!product) {
    <p>loading...</p>
  }
  return (
    <div className="columns is-vcentered is-centered mt-6 ml-6">
      <div className="column is-one-third">
      <figure className="image is-square">
          <img src={product.url || ""} alt={product.name} />
      </figure>
      </div>
      <div className="column is-two-thirds">
        <h2 className="title is-4">{product.name}</h2>
        <p className="subtitle is-5 has-text-weight-bold">Rp.{product.price}</p>
        <p className="subtitle is-5 has-text-weight-bold">Stock: {product.stok}</p>
        <div className="content mt-5">
        {product.description}
        </div>

        <div className="field is-grouped mt-5">
          <a
            href="https://wa.me/089645759299"
            className="button is-primary is-rounded"
          >
            <IoLogoWhatsapp className="mr-4" />
            <span>089645759299</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
