import React, { useState, useEffect } from "react";
import "../styles/Product.sass";
import Container from "react-bootstrap/Container";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Pagination from "@mui/lab/Pagination";

export default function Product() {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);
  const productsPerPage = 8;

  const products = [
    {
      id: 1,
      image: "./images/products/product1.png",
      category: "Accessories",
      title: "Quartz Belt Watch",
      price: "$150.00",
    },
    {
      id: 2,
      image: "./images/products/product2.png",
      category: "Beauty",
      title: "Women Freshwash",
      price: "$140.00",
    },
    {
      id: 3,
      image: "./images/products/product3.png",
      category: "Decor",
      title: "Room Flash Light",
      price: "$160.00",
    },
    {
      id: 4,
      image: "./images/products/product4.png",
      category: "Decor",
      title: "Room Flash Light",
      price: "$190.00",
    },
    {
      id: 5,
      image: "./images/products/product5.png",
      category: "Accessories",
      title: "Man Office Bag",
      price: "$110.00",
    },
    {
      id: 6,
      image: "./images/products/product6.png",
      category: "Kids Toy",
      title: "Charging Car",
      price: "$100.00",
    },
    {
      id: 7,
      image: "./images/products/product7.png",
      category: "Accessories",
      title: "Blutooth Speaker",
      price: "$120.00",
    },
    {
      id: 8,
      image: "./images/products/product8.png",
      category: "Accessories",
      title: "Charging Car",
      price: "$160.00",
    },
    {
      id: 9,
      image: "./images/products/product9.png",
      category: "Accessories",
      title: "Architecture Book",
      price: "$160.00",
    },
    {
      id: 10,
      image: "./images/products/product10.png",
      category: "Beauty",
      title: "Tallow Cream",
      price: "$160.00",
    },
    {
      id: 11,
      image: "./images/products/product11.png",
      category: "Beauty",
      title: "Yuzu Organic Soap",
      price: "$180.00",
    },
    {
      id: 12,
      image: "./images/products/product12.png",
      category: "Accessories",
      title: "Workout Bottle (16oz)",
      price: "$160.00",
    },
    {
      id: 13,
      image: "./images/products/product13.png",
      category: "Accessories",
      title: "Signet Ring — 5mm",
      price: "$160.00",
    },
    {
      id: 14,
      image: "./images/products/product14.png",
      category: "Accessories",
      title: "iPhone Xs — Case",
      price: "$190.00",
    },
    {
      id: 15,
      image: "./images/products/product15.png",
      category: "Accessories",
      title: "Minimalist wallet",
      price: "$130.00",
    },
    {
      id: 16,
      image: "./images/products/product16.png",
      category: "Accessories",
      title: "Hexagon Pen",
      price: "$140.00",
    },
  ];

  useEffect(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const updatedCurrentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    setCurrentProducts(updatedCurrentProducts);
  }, [currentPage, products]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <Container
      style={{
        paddingInline: "80px",
        marginTop: "100px",
        marginBottom: "100px",
      }}
    >
      <Row>
        <div className="product-heading">
          <p>Popular Item in the market</p>
          <h2>
            Trending<span> Product</span>
          </h2>
        </div>
        <div className="row">
          {currentProducts.map((productItem) => (
            <div key={productItem.id} className="col-md-6 col-lg-4 col-xl-3">
              <div className="product-card">
                <div className="product-card-img">
                  <img src={productItem.image} alt="productImage" />
                </div>
                <div className="product-icon">
                  <div className="icon">
                    <IoIosSearch style={{ color: "#fff", fontSize: "20px" }} />
                  </div>
                  <div className="icon">
                    <GiShoppingCart
                      style={{ color: "#fff", fontSize: "20px" }}
                    />
                  </div>
                  <div className="icon">
                    <CiHeart style={{ color: "#fff", fontSize: "20px" }} />
                  </div>
                </div>
                <div></div>
                <div className="card-text">
                  <p>{productItem.category}</p>
                  <Link to="../productdetails">
                    <h4>{productItem.title}</h4>
                  </Link>
                  <p className="product-price">{productItem.price}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="pagination-container">
            <Pagination
              count={Math.ceil(products.length / productsPerPage)}
              shape="rounded"
              page={currentPage}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </Row>
    </Container>
  );
}
