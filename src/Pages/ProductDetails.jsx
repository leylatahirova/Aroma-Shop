import React, {useState} from "react";
import Header from "../Components/Header";
import PagesBanner from "../Components/PagesBanner";
import TopProducts from "../Components/Shop/TopProducts";
import Footer from "../Components/Footer";
import "../styles/Shop.sass";
import { Container, Row, Col } from "react-bootstrap";
import { IoDiamondOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";

export default function ProductDetails() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
              <Button style={{backgroundColor:"#495DED"}} variant="primary" onClick={handleShow}>Add to cart</Button>
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
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <div className="canvas">
              <h6>Faded SkyBlu Denim Jeans</h6>
              <div className="canvas__info">
                <img src="./images/products/product1.png" alt="product1" />
                <div>
                  <p>Category :Household</p>
                  <p>Availibility :In Stock</p>
                  <p>$149.99</p>
                </div>
              </div>
              <div className="product__button">
                <Link to="/productcheckout"><Button style={{backgroundColor:"#495DED"}} variant="primary" >Checkout</Button></Link>
                <Link to="/shoppingcart"><Button style={{backgroundColor:"#495DED"}} variant="primary" >View cart</Button></Link>
              </div>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
      <TopProducts />
      <Footer />
    </>
  );
}