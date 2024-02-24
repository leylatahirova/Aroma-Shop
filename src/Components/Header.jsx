import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { TfiShoppingCart } from "react-icons/tfi";
import "../styles/Header.sass";
import { Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';


export default function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header className="header">
      <Row style={{margin:"0 auto", maxWidth:"1200px" }}>
        <Col>
          <div className="logo">
            <Link to="/home"><img src="./images/logo.png.png" alt="logo" /></Link>
          </div>
          {/* <button>
            <GiHamburgerMenu style={{ color: "#384aeb" }} />
            </button> */}
        </Col>
        <Col xs={5}>
          <ul className="navbar1">
            <li className="nav-item active">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/shopcategory">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Col>
        <Col>
          <ul className="navbar1">
            <li className="nav-item">
              <IoIosSearch style={{ color: "#222", fontSize: "20px", cursor:"pointer" }} />
            </li>
            <li className="nav-item">
              <div className="shopping-basket">1</div>
             <TfiShoppingCart onClick={handleShow} style={{ color: "#222", fontSize: "18px", cursor:"pointer" }} />
            </li>
            <li className="nav-item">
              <Link to="/loginregister"><button>Login</button></Link>
            </li>
          </ul>
        </Col>
      </Row>
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
                <Link to="/productcheckout"><Button variant="primary" >Checkout</Button></Link>
                <Link to="/shoppingcart"><Button variant="primary" >View cart</Button></Link>
              </div>
            </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
}
