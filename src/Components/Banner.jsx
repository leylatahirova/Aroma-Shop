import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Banner.sass";
import Button from "./Button";
import { Link } from "react-router-dom";


export default function Banner() {
  return (
    <section className="hero-banner">
      <div className="container">
        <div style={{display:"flex", alignItems:"center"}}>
          <div>
            <div className="hero-banner__img">
              <img className="img-fluid" src="./images/banner/hero-banner.png" alt="banner-img" />
            </div>
          </div>
            <div className="hero-banner__content">
              <h4>Shop is fun</h4>
              <h1>Browse Our Premium Product</h1>
              <p>
                  Discover a World of Excitement! Immerse yourself in a captivating shopping experience as you explore our shopping website's banner and indulge in a wide array of premium products.
              </p>
              <Link to="/shopcategory"><Button>Browse Now</Button></Link>
            </div>
        </div>
      </div>
    </section>
  );
}
