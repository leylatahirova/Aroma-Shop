import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../../styles/TopProducts.sass";

export default function TopProducts() {
  const topProductsData = [
    [
      {
        id: 1,
        image: "/images/shop/product-sm-1.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 2,
        image: "/images/shop/product-sm-2.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 3,
        image: "/images/shop/product-sm-3.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
    ],
    [
      {
        id: 4,
        image: "/images/shop/product-sm-4.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 5,
        image: "/images/shop/product-sm-5.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 6,
        image: "/images/shop/product-sm-6.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
    ],
    [
      {
        id: 7,
        image: "/images/shop/product-sm-7.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 8,
        image: "/images/shop/product-sm-8.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 9,
        image: "/images/shop/product-sm-9.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
    ],
    [
      {
        id: 10,
        image: "/images/shop/product-sm-2.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 11,
        image: "/images/shop/product-sm-4.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 12,
        image: "/images/shop/product-sm-7.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
    ],
  ];

  return (
    <Container>
      <div className="top-products">
        <div className="container">
          <div className="top-products__text">
            <p>Popular Item in the market</p>
            <h2>
              Top<span> Product</span>
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap:"wrap" }}>
            {topProductsData.map((group, index) => (
              <div className="top-products__item" key={index}>
                {group.map((product) => (
                  <div className="top-products__products" key={product.id}>
                      <img src={product.image} alt="product" />
                    <div>
                      <Link to="../productdetails">{product.title}</Link>
                      <p>{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}
