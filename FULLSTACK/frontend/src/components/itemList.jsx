import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories
    axios
      .get("http://localhost:5000/category")
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => console.error("Error fetching categories:", error));

    // Fetch products
    axios
      .get("http://localhost:5000/product")
      .then((response) => {
        console.log("Fetched products:", response.data); // Log the entire response
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleSort = (order) => {
    setSortOrder(order);
    const sorted = [...filteredProducts].sort((a, b) => {
      if (order === "asc") return a.price - b.price;
      return b.price - a.price;
    });
    setFilteredProducts(sorted);
  };

  const handleCategoryFilter = (categoryId) => {
    console.log("Selected categoryId:", categoryId); // Log the selected categoryId
    setSelectedCategory(categoryId);
  
    if (categoryId) {
      const filtered = products.filter((product) => {
        console.log("Product object:", product); // Log each product object
        return product.categoryId === categoryId;
      });
      console.log("Filtered products:", filtered); // Log the filtered results
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // Show all products when no category is selected
    }
  };    

  return (
    <div style={styles.container}>
      {/* Sidebar Filters */}
      <div style={styles.sidebar}>
        <div style={styles.filterSection}>
          <h3 style={styles.filterTitle}>Harga</h3>
          <div style={styles.filterOptions}>
            <p
              onClick={() => handleSort("asc")}
              style={{
                ...styles.filterText,
                fontWeight: sortOrder === "asc" ? "bold" : "normal",
                color: "black",
              }}
            >
              Termurah ke Termahal
            </p>
            <p
              onClick={() => handleSort("desc")}
              style={{
                ...styles.filterText,
                fontWeight: sortOrder === "desc" ? "bold" : "normal",
                color: "black",
              }}
            >
              Termahal ke Termurah
            </p>
          </div>
        </div>
        <div style={styles.filterSection}>
          <h3 style={styles.filterTitle}>Kategori</h3>
          <div style={styles.filterOptions}>
            <p
              onClick={() => handleCategoryFilter("")}
              style={{
                ...styles.filterText,
                fontWeight: selectedCategory === "" ? "bold" : "normal",
                color: "black",
              }}
            >
              Semua
            </p>
            {categories.map((category) => (
              <p
                key={category.id}
                onClick={() => handleCategoryFilter(category.id)}
                style={{
                  ...styles.filterText,
                  fontWeight: selectedCategory === category.id ? "bold" : "normal",
                  color: "black",
                }}
              >
                {category.name}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div style={styles.grid}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div key={index} style={styles.card}>
              <img
                src={`http://localhost:5000/images/${product.picture}`}
                alt={product.name}
                style={styles.image}
              />
              <h3 style={styles.title}>{product.name}</h3>
              <p style={styles.price}>Rp. {product.price.toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p style={styles.loading}>Produk tidak ditemukan</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "20%",
    padding: "20px",
    borderRight: "1px solid #ddd",
  },
  filterSection: {
    marginBottom: "20px",
  },
  filterTitle: {
    borderBottom: "2px solid black", // Garis bawah pada judul
    paddingBottom: "5px",
    marginBottom: "10px",
    fontSize: "1.2rem",
  },
  filterOptions: {
    paddingLeft: "20px", // Tab ke kanan untuk isi
  },
  filterText: {
    margin: "5px 0",
    cursor: "pointer",
    color: "#007bff",
    textDecoration: "none",
  },
  grid: {
    width: "80%",
    padding: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "15px",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: "10px",
  },
  title: {
    fontSize: "1.2rem",
    margin: "10px 0",
  },
  price: {
    color: "#E53935",
    fontSize: "1.1rem",
    fontWeight: "bold",
  },
  loading: {
    gridColumn: "1 / -1",
    textAlign: "center",
  },
};

export default ProductList;