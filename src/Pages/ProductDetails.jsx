import React, { useState } from "react";
import Header from "../Components/Header";
import PagesBanner from "../Components/PagesBanner";
import TopProducts from "../Components/Shop/TopProducts";
import Footer from "../Components/Footer";
import "../styles/Shop.sass";
import { Container, Row, Col } from "react-bootstrap";
import { IoDiamondOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
// import { addToCart } from "../redux/actions";
// import { useDispatch, useSelector } from "react-redux";

export default function ProductDetails() {
  // const dispatch = useDispatch();
  // const products = useSelector((state) => state.products);

  // const handleAddToCart = (productItem) => {
  //   dispatch(addToCart(productItem));
  // };

  return (
    <>
      <Header />
      <PagesBanner text1="Shop Single" text2="Home-Shop Single" />
      <Container style={{ paddingInline: "40px" }}>
        <Row className="product__row">
          <Col lg={5}>
            <div className="product__img">
              <img src="./images/shop/s-p1.jpg" alt="product1" />
            </div>
          </Col>
          <Col lg={5} className="offset-lg-1">
            <div className="product__text">
              <h3>Faded SkyBlu Denim Jeans</h3>
              <h2>$149.99</h2>
              <ul>
                <li>
                  Category<span> :Household</span>{" "}
                </li>
                <li>
                  Availibility<span> :In Stock</span>
                </li>
              </ul>
              <p>
                Mill Oil is an innovative oil filled radiator with the most
                modern technology. If you are looking for something that can
                make your interior look awesome, and at the same time give you
                the pleasant warm feeling during the winter.
              </p>
              <label>
                Quantity:
                <input type="number" defaultValue={1}></input>
              </label>
              <Link to="/shoppingcart">
                <Button
                  style={{ backgroundColor: "#495DED" }}
                  variant="primary"
                  // onClick={() => {
                  //   handleAddToCart(productItem);
                  // }}
                >
                  Add to cart
                </Button>
              </Link>
              <div className="product__icon">
                <div className="product__icon1">
                  <IoDiamondOutline />
                </div>
                <div className="product__icon1">
                  <IoMdHeartEmpty />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <TopProducts />
      <Footer />
    </>
  );
}
