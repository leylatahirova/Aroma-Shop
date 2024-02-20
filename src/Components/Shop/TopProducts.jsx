import React from "react";
import "../../styles/TopProducts.sass";
import TopProductsCol from "./TopProductsCol";

export default function TopProducts() {
  const topProductsData = [
    [
      {
        id: 1,
        image: "./images/shop/product-sm-1.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 2,
        image: "./images/shop/product-sm-2.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 3,
        image: "./images/shop/product-sm-3.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
    ],
    [
      {
        id: 4,
        image: "./images/shop/product-sm-4.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 5,
        image: "./images/shop/product-sm-5.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 6,
        image: "./images/shop/product-sm-6.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
    ],
    [
      {
        id: 7,
        image: "./images/shop/product-sm-7.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 8,
        image: "./images/shop/product-sm-8.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 9,
        image: "./images/shop/product-sm-9.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
    ],
    [
      {
        id: 10,
        image: "./images/shop/product-sm-2.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 11,
        image: "./images/shop/product-sm-4.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
      {
        id: 12,
        image: "./images/shop/product-sm-7.png",
        title: "Gray Coffee Cup",
        price: "$170.00",
      },
    ],
  ];
  return (
    <div className="top-products">
      <div className="container">
        <div className="top-products__text">
          <p>Popular Item in the market</p>
          <h2>
            Top<span> Product</span>
          </h2>
        </div>
        <div style={{ display: "flex" }}>
          {topProductsData.map((group, index) => (
            <TopProductsCol key={index} products={group} />
          ))}
        </div>
      </div>
    </div>
  );
}
