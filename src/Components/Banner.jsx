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
          <div style={{paddingLeft:"80px"}}>
            <div className="hero-banner__content">
              <h4>Shop is fun</h4>
              <h1>Browse Our Premium Product</h1>
              <p>
                Us which over of signs divide dominion deep fill bring they're
                meat beho upon own earth without morning over third. Their male
                dry. They are great appear whose land fly grass.
              </p>
              <Link to="/shopcategory"><Button>Browse Now</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
