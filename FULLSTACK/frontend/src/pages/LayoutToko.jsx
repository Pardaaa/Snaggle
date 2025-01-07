import React from 'react';
import NavbarToko from '../components/NavbarToko';
import FooterToko from '../components/FooterToko';
import anak from '../Images/Anak.jpg';
import wanita from '../Images/Wanita.png';
import pria from '../Images/Pria.png';

const LayoutToko = ({ children }) => {
    return (
       <React.Fragment>
          {/* Header */}
          <NavbarToko />

          {/* Main Content */}
          <div style={{ backgroundColor: '#FFF3E4' }}>
             {/* Hero Section */}
             <section style={{ textAlign: 'center', padding: '2rem 0', backgroundColor: '#FFF3E4' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Butuh rekomendasi? Cek sini!</h1>
             </section>

             {/* Category Section */}
             <section style={{ padding: '2rem 1rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '1rem' }}>Kategori Pakaian</h2>
                <div className="columns is-multiline is-centered">
                   <div className="column is-4" style={{ textAlign: 'center' }}>
                        <img src={anak} style={{ width: '100%', borderRadius: '8px' }} />
                        <p style={{ marginTop: '0.5rem', fontWeight: 'bold', color: 'black' }}>ANAK</p>
                   </div>
                   <div className="column is-4" style={{ textAlign: 'center' }}>
                        <img src={wanita} style={{ width: '90%', borderRadius: '8px' }} />
                        <p style={{ marginTop: '0.5rem', fontWeight: 'bold', color: 'black' }}>WANITA</p>
                   </div>
                   <div className="column is-4" style={{ textAlign: 'center' }}>
                        <img src={pria} style={{ width: '90%', borderRadius: '8px' }} />
                        <p style={{ marginTop: '0.5rem', fontWeight: 'bold', color: 'black' }}>PRIA</p>
                   </div>
                </div>
             </section>

             {/* About Us Section */}
             <section style={{ backgroundColor: '#38761D', padding: '2rem 1rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: 'white' }}>ABOUT US</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto', lineHeight: '1.6', color: 'white' }}>
                   Welcome to Snaggle, website paling hits buat cari pakaian-pakaian kece dan super catchy yang cocok banget buat kamu! Di sini, kamu bisa temukan berbagai kategori, mulai dari fashion stylish sampai outfit-outfit unik lainnya. Pokoknya, belanja di Snaggle bikin pengalaman makin seru dan pastinya gampang banget. Jadi, langsung aja cari pakaian incaranmu dan sikat diskonnya! Yuk, let’s snag something cool!
                </p>
             </section>
          </div>

          {/* Footer */}
          <FooterToko />
       </React.Fragment>
    );
};

export default LayoutToko;