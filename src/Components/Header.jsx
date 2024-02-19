import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { SlBasket } from "react-icons/sl";
import "../styles/Header.sass";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Container style={{paddingTop: "20px"}} >
      <Row>
        <Col>
          <div className="logo">
            <img src="./images/logo.png.png" alt="logo" />
          </div>
          {/* <button>
            <GiHamburgerMenu style={{ color: "#384aeb" }} />
            </button> */}
        </Col>
        <Col xs={5}>
          <ul className="navbar1" >
            <li className="nav-item active">
              <Link to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/pages">Pages</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </Col>
        <Col>
          <ul className="navbar1" >
            <li className="nav-item">
              <IoIosSearch style={{ color: "#222", fontSize: "20px" }} />
            </li>
            <li className="nav-item">
              <SlBasket />
            </li>
            <li className="nav-item">
              <button>Buy Now</button>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
