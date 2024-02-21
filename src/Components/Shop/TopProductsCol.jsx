import React from "react";
import { Link } from "react-router-dom";

export default function TopProductsCol({ products }) {
  return (
    <div className="top-products__item">
      {products.map((product) => (
        <div className="top-products__products" key={product.id}>
          <Link>
            <img src={product.image} alt="product" />
          </Link>
          <div>
            <Link to="../productdetails">{product.title}</Link>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
