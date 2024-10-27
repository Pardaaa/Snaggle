import React from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

const InfoProduct = () => {
  return (
    <div className="columns is-vcentered is-centered mt-5">
      {/* Bagian Kiri - Gambar Utama dan Galeri */}
      <div className="column is-one-third">
        <figure className="image is-square">
          <img
            src="https://via.placeholder.com/150" // Gambar utama produk
            alt="Cardigan Rajut Crop"
            className="is-square"
          />
        </figure>
      </div>
      <div className="column is-two-thirds">
        <h2 className="title is-4">Cardigan Rajut Crop</h2>
        <p className="subtitle is-5 has-text-weight-bold">Rp. 79,900</p>
        <p className="subtitle is-5 has-text-weight-bold">Status: </p>
        <div className="content mt-5">
          <p>
            Kenalkan produk terbaru kami, 'CHELSEA STRIP CROP RAJUT/SWEATER
            RAJUT CARDIGAN RAJUT'! Terbuat dari bahan rajut acrylic 32/2 yang
            tahan lama, tidak mudah kusam, robek, dan tahan air.
          </p>
          <p>
            Dengan lingkar dada 110-115 cm dan panjang 55 cm, produk ini cocok
            untuk pria dan wanita dengan berat badan 40-70 kg.
          </p>
          <p>
            Desain strip kekinian, kasual, dan pas longgar memberikan kenyamanan
            saat dipakai sehari-hari. Dilengkapi kerah kaos oblong, lengan
            panjang, serta ornamen kancing yang mempercantik tampilan.
          </p>
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
