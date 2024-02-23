import React from "react";
import "../styles/SaleBanner.sass";
import { Container, Row } from "react-bootstrap";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function SaleBanner() {
  return (
    <Container fluid>
      <Row>
        <div className="offer-text">
          <h3>Up To 50% Off</h3>
          <h4>Winter Sale</h4>
          <p>Him she'd let them sixth saw light</p>
          <Link to="/shopcategory">
            <Button>Shop Now</Button>
          </Link>
        </div>
      </Row>
    </Container>
  );
}
