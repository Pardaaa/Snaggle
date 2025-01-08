import React from "react";
import backgroundImage from '../Images/background.png'; 

const CustomerHome = () => {
    const searchStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
        padding: "8px",
        backgroundColor: "rgba(112, 110, 110, 0.14)",
        boxShadow: "5px 5px rgba(0, 0, 0, 0.2)",
        borderRadius: "1rem",
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
    };

    const searchBarStyle = {
        flex: "1",
        padding: "15px",
        borderRadius: "5px",
        border: "none",
        fontSize: "1rem",
        backgroundColor: "rgba(112, 110, 110, 0.14)",
        fontFamily: 'Josefin Sans, sans-serif',
        marginRight: "1rem",
    };

    const searchButtonStyle = {
        padding: "0.8rem 2rem",
        borderRadius: "5px",
        backgroundColor: "#416B39",
        color: "white", fontWeight: "bold", fontSize: "1.1rem", cursor: "pointer", border: "none", 
};

    const categoriesStyle = { 
        display: "flex", justifyContent: "space-evenly", marginTop: "2rem", };

    const categoryCardStyle = { 
        textAlign: "center", 
        padding: "1rem", 
        borderRadius: "10px", 
        backgroundColor: "#FFF", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
        flex: "1", 
        margin: "0 1rem", 
    };

    const aboutStyle = { 
        textAlign: "center", 
        marginTop: "3rem", 
        padding: "2.2rem", 
        backgroundColor: "#2D572C", 
        color: "white", 
        fontSize: "1.2rem",
        marginBottom: "0", 
        marginRight: "0",
        marginLeft: "0",
    };

    const categoryImageStyle = { 
        width: "100%", 
        borderRadius: "8px", 
        marginBottom: "1rem", 
    };

    return ( 
        <div style={{ fontFamily: "'Josefin Sans', sans-serif", display: "flex",
            flexDirection: "column",
            minHeight: "100vh", margin: "0", padding: "0", }}> 

                <div style={searchStyle}> 
                    <input type="text" placeholder="Nama Barang" style={searchBarStyle} />
                    <button style={searchButtonStyle}>Telusuri</button>
                </div> 
                <div style={{ position: "relative", textAlign: "center", margin: "2rem 0", fontSize: "1.5rem", fontWeight: "bold" }}>
                    <img src={backgroundImage} style={{ width: "100%", height: "600px" }} alt="Background" />
                    <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", fontSize: "3rem", 
                    }}>
                        Butuh rekomendasi? Cek sini!
                    </div>
                </div>

                <div style={categoriesStyle}> 
                    <div style={categoryCardStyle}>
                        <div style={{ position: "relative" }}>
                            <img src={""} alt="Jeans" style={categoryImageStyle} />
                            <h2 style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                color: "white",  
                                fontSize: "2rem",
                                fontWeight: "bold", 
                            }}>
                                Jeans
                            </h2>
                        </div>
                    </div>
 
                    <div style={categoryCardStyle}>
                        <div style={{ position: "relative" }}>
                            <img src={""} alt="Jeans" style={categoryImageStyle} />
                            <h2 style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                color: "white",  
                                fontSize: "2rem",
                                fontWeight: "bold", 
                            }}>
                                Cardigan
                            </h2>
                        </div>
                    </div>
                    <div style={categoryCardStyle}>
                        <div style={{ position: "relative" }}>
                            <img src={""} alt="Jeans" style={categoryImageStyle} />
                            <h2 style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                color: "white",  
                                fontSize: "2rem",
                                fontWeight: "bold", 
                            }}>
                                Baju
                            </h2>
                        </div>
                    </div>
                </div> 
            <div style={aboutStyle}> 
                <h2>ABOUT US</h2> 
                <p> Welcome to Snaggle, website paling hits buat cari pakaian-pakaian kece dan super catchy yang cocok banget buat kamu! Di sini, kamu bisa temukan berbagai kategori, mulai dari fashion stylish sampai outfit-outfit unik lainnya. Pokoknya, belanja di Snaggle bikin pengalaman makin seru dan pastinya gampang banget. Yuk, let's snag something cool! </p> 
            </div> 
            <footer style={{ textAlign: "center", fontSize: "1rem", color: "black", padding: "2rem", backgroundColor: "#F1C9F9",marginTop: "auto" }} > 
                <h2>Snaggle</h2> 
            </footer> 
        </div> 
    ); 
};

export default CustomerHome;
