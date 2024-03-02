import React, { useState, useEffect } from "react";
import "../styles/Product.sass";
import Container from "react-bootstrap/Container";
import { IoIosSearch } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";
import { addToCart } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Product() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleAddToCart = (productItem) => {
    dispatch(addToCart(productItem));
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);
  const productsPerPage = 8;

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
    <Container className="product">
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
                      onClick={() => {
                        handleAddToCart(productItem);
                      }}
                    />
                  </div>
                  <div className="icon">
                    <CiHeart style={{ color: "#fff", fontSize: "20px" }} />
                  </div>
                </div>
                <div></div>
                <div className="card-text">
                  <p>{productItem.category}</p>
                  <Link to={`/productdetails/${productItem.id}`}>
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
