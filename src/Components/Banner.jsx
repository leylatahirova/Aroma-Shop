import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Banner.sass";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


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
              <button>Browse Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
